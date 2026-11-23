import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >({
    queryKey: getAccountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCorporateGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.group.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.corporate.group.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCorporateGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutCorporateGroupUnlinkGroupIdSubAccounts<
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
                    (typeof client.corporate.group.unlink)[':groupId']['subAccounts']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.corporate.group.unlink)[':groupId']['subAccounts']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCorporateGroupUnlinkGroupIdSubAccountsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCorporateGroupIdQueryKey(
  args: InferRequestType<(typeof client.corporate.group)[':id']['$get']>,
) {
  return ['corporate', '/corporate/group/:id', args] as const
}

export function getCorporateGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.corporate.group)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.corporate.group)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.corporate.group)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCorporateGroupIdQueryKey>
  >({
    queryKey: getCorporateGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.corporate.group[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCorporateGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.corporate.group)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.corporate.group)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.corporate.group)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCorporateGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCorporateGroupIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutCorporateGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCorporateGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteCorporateGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCorporateGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCorporateGroupsQueryKey() {
  return ['corporate', '/corporate/groups'] as const
}

export function getCorporateGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.groups.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCorporateGroupsQueryKey>
  >({
    queryKey: getCorporateGroupsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.corporate.groups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCorporateGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCorporateGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCorporateGroupsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getCorporateInvitedUsersQueryKey(
  args: InferRequestType<typeof client.corporate.invited.users.$get>,
) {
  return ['corporate', '/corporate/invited/users', args] as const
}

export function getCorporateInvitedUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.corporate.invited.users.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.corporate.invited.users.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.corporate.invited.users.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCorporateInvitedUsersQueryKey>
  >({
    queryKey: getCorporateInvitedUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.corporate.invited.users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCorporateInvitedUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.corporate.invited.users.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.corporate.invited.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.corporate.invited.users.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCorporateInvitedUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCorporateInvitedUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCorporateIpQueryKey() {
  return ['corporate', '/corporate/ip'] as const
}

export function getCorporateIpQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.ip.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.ip.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCorporateIpQueryKey>
  >({
    queryKey: getCorporateIpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.corporate.ip.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCorporateIp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.ip.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.ip.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCorporateIpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCorporateIpQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getCorporateMasterAccountQueryKey() {
  return ['corporate', '/corporate/masterAccount'] as const
}

export function getCorporateMasterAccountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.corporate.masterAccount.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.corporate.masterAccount.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCorporateMasterAccountQueryKey>
  >({
    queryKey: getCorporateMasterAccountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.corporate.masterAccount.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCorporateMasterAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.corporate.masterAccount.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.corporate.masterAccount.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCorporateMasterAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCorporateMasterAccountQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCorporateSsoToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.corporate.ssoToken.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.corporate.ssoToken.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCorporateSsoTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCorporateSubAccountQueryKey(
  args: InferRequestType<typeof client.corporate.subAccount.$get>,
) {
  return ['corporate', '/corporate/subAccount', args] as const
}

export function getCorporateSubAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.corporate.subAccount.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCorporateSubAccountQueryKey>
  >({
    queryKey: getCorporateSubAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.corporate.subAccount.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCorporateSubAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.corporate.subAccount.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCorporateSubAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCorporateSubAccountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCorporateSubAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.corporate.subAccount.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCorporateSubAccountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCorporateSubAccountIpAssociate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCorporateSubAccountIpAssociateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutCorporateSubAccountIpDissociate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCorporateSubAccountIpDissociateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCorporateSubAccountKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.key.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.corporate.subAccount.key.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCorporateSubAccountKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCorporateSubAccountSsoToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCorporateSubAccountSsoTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCorporateSubAccountIdQueryKey(
  args: InferRequestType<(typeof client.corporate.subAccount)[':id']['$get']>,
) {
  return ['corporate', '/corporate/subAccount/:id', args] as const
}

export function getCorporateSubAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.corporate.subAccount)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.corporate.subAccount)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCorporateSubAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.corporate.subAccount[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCorporateSubAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.corporate.subAccount)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.corporate.subAccount)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCorporateSubAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteCorporateSubAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCorporateSubAccountIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutCorporateSubAccountIdApplicationsToggle<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCorporateSubAccountIdApplicationsToggleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutCorporateSubAccountIdPlan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCorporateSubAccountIdPlanMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutCorporateSubAccountsPlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccounts.plan.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.corporate.subAccounts.plan.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCorporateSubAccountsPlanMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCorporateUserInvitationSend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCorporateUserInvitationSendMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutCorporateUserInvitationActionEmail<
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
                ReturnType<(typeof client.corporate.user.invitation)[':action'][':email']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.corporate.user.invitation)[':action'][':email']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCorporateUserInvitationActionEmailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteCorporateUserRevokeEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCorporateUserRevokeEmailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCorporateUserEmailPermissionsQueryKey(
  args: InferRequestType<(typeof client.corporate.user)[':email']['permissions']['$get']>,
) {
  return ['corporate', '/corporate/user/:email/permissions', args] as const
}

export function getCorporateUserEmailPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.corporate.user)[':email']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.corporate.user)[':email']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCorporateUserEmailPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.corporate.user[':email'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCorporateUserEmailPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.corporate.user)[':email']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.corporate.user)[':email']['permissions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCorporateUserEmailPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutCorporateUserEmailPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCorporateUserEmailPermissionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationActivitiesQueryKey(
  args: InferRequestType<typeof client.organization.activities.$get>,
) {
  return ['organization', '/organization/activities', args] as const
}

export function getOrganizationActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.activities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.activities.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.activities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationActivitiesQueryKey>
  >({
    queryKey: getOrganizationActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.activities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.activities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.activities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.activities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationActivitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationActivitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganizationInvitedUsersQueryKey() {
  return ['organization', '/organization/invited/users'] as const
}

export function getOrganizationInvitedUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.invited.users.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.invited.users.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationInvitedUsersQueryKey>
  >({
    queryKey: getOrganizationInvitedUsersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.invited.users.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationInvitedUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.invited.users.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.invited.users.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationInvitedUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganizationInvitedUsersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPutOrganizationUserInvitationRevokeEmail<
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
                ReturnType<(typeof client.organization.user.invitation.revoke)[':email']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organization.user.invitation.revoke)[':email']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationUserInvitationRevokeEmailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostOrganizationUserInvitationSend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationUserInvitationSendMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutOrganizationUserInvitationActionEmail<
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
                  (typeof client.organization.user.invitation)[':action'][':email']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organization.user.invitation)[':action'][':email']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationUserInvitationActionEmailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostOrganizationUserUpdatePermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationUserUpdatePermissionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationUserEmailPermissionsQueryKey(
  args: InferRequestType<(typeof client.organization.user)[':email']['permissions']['$get']>,
) {
  return ['organization', '/organization/user/:email/permissions', args] as const
}

export function getOrganizationUserEmailPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.user)[':email']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization.user)[':email']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationUserEmailPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.user[':email'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationUserEmailPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.user)[':email']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organization.user)[':email']['permissions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getOrganizationUserEmailPermissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationUserEmailPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getProcessesQueryKey(args: InferRequestType<typeof client.processes.$get>) {
  return ['processes', '/processes', args] as const
}

export function getProcessesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.processes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProcessesQueryKey>
  >({
    queryKey: getProcessesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.processes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProcesses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.processes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProcessesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProcessesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getProcessesProcessIdQueryKey(
  args: InferRequestType<(typeof client.processes)[':processId']['$get']>,
) {
  return ['processes', '/processes/:processId', args] as const
}

export function getProcessesProcessIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.processes)[':processId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.processes)[':processId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.processes)[':processId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProcessesProcessIdQueryKey>
  >({
    queryKey: getProcessesProcessIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.processes[':processId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProcessesProcessId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.processes)[':processId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.processes)[':processId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.processes)[':processId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProcessesProcessIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProcessesProcessIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSendersQueryKey(args: InferRequestType<typeof client.senders.$get>) {
  return ['senders', '/senders', args] as const
}

export function getSendersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.senders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSendersQueryKey>
  >({
    queryKey: getSendersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.senders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSenders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.senders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSendersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSendersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSenders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$post>>>>>,
        TError,
        InferRequestType<typeof client.senders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSendersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSendersDomainsQueryKey() {
  return ['senders', '/senders/domains'] as const
}

export function getSendersDomainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.domains.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.domains.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSendersDomainsQueryKey>
  >({
    queryKey: getSendersDomainsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.senders.domains.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSendersDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.domains.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSendersDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSendersDomainsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSendersDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.domains.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.senders.domains.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSendersDomainsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSendersDomainsDomainNameQueryKey(
  args: InferRequestType<(typeof client.senders.domains)[':domainName']['$get']>,
) {
  return ['senders', '/senders/domains/:domainName', args] as const
}

export function getSendersDomainsDomainNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.senders.domains)[':domainName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.senders.domains)[':domainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSendersDomainsDomainNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.senders.domains[':domainName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSendersDomainsDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.senders.domains)[':domainName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.senders.domains)[':domainName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSendersDomainsDomainNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteSendersDomainsDomainName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSendersDomainsDomainNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutSendersDomainsDomainNameAuthenticate<
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
                ReturnType<(typeof client.senders.domains)[':domainName']['authenticate']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.senders.domains)[':domainName']['authenticate']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSendersDomainsDomainNameAuthenticateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSendersIpsQueryKey() {
  return ['senders', '/senders/ips'] as const
}

export function getSendersIpsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.ips.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.ips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSendersIpsQueryKey>
  >({
    queryKey: getSendersIpsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.senders.ips.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSendersIps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.ips.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.ips.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSendersIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSendersIpsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPutSendersSenderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSendersSenderIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteSendersSenderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSendersSenderIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSendersSenderIdIpsQueryKey(
  args: InferRequestType<(typeof client.senders)[':senderId']['ips']['$get']>,
) {
  return ['senders', '/senders/:senderId/ips', args] as const
}

export function getSendersSenderIdIpsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.senders)[':senderId']['ips']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.senders)[':senderId']['ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSendersSenderIdIpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.senders[':senderId'].ips.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSendersSenderIdIps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.senders)[':senderId']['ips']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.senders)[':senderId']['ips']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSendersSenderIdIpsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutSendersSenderIdValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSendersSenderIdValidateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebhooksQueryKey(args: InferRequestType<typeof client.webhooks.$get>) {
  return ['webhooks', '/webhooks', args] as const
}

export function getWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >({
    queryKey: getWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.webhooks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostWebhooksExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.export.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.export.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhooksExportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhookId', args] as const
}

export function getWebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdQueryKey>
  >({
    queryKey: getWebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':webhookId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksWebhookIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFeedsQueryKey(args: InferRequestType<typeof client.feeds.$get>) {
  return ['feeds', '/feeds', args] as const
}

export function getFeedsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.feeds.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFeedsQueryKey>
  >({
    queryKey: getFeedsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.feeds.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFeeds<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.feeds.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFeedsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFeedsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostFeeds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$post>>>>>,
        TError,
        InferRequestType<typeof client.feeds.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFeedsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFeedsUuidQueryKey(
  args: InferRequestType<(typeof client.feeds)[':uuid']['$get']>,
) {
  return ['feeds', '/feeds/:uuid', args] as const
}

export function getFeedsUuidQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':uuid']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.feeds)[':uuid']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':uuid']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFeedsUuidQueryKey>
  >({
    queryKey: getFeedsUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.feeds[':uuid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFeedsUuid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':uuid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.feeds)[':uuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':uuid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFeedsUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFeedsUuidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutFeedsUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutFeedsUuidMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteFeedsUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFeedsUuidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostObjectsObjectTypeBatchUpsert<
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
                ReturnType<(typeof client.objects)[':object_type']['batch']['upsert']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.objects)[':object_type']['batch']['upsert']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostObjectsObjectTypeBatchUpsertMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getObjectsObjectTypeRecordsQueryKey(
  args: InferRequestType<(typeof client.objects)[':object_type']['records']['$get']>,
) {
  return ['objects', '/objects/:object_type/records', args] as const
}

export function getObjectsObjectTypeRecordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects)[':object_type']['records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.objects)[':object_type']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getObjectsObjectTypeRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.objects[':object_type'].records.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectObjectsObjectTypeRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects)[':object_type']['records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.objects)[':object_type']['records']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getObjectsObjectTypeRecordsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostObjectsObjectTypeBatchDelete<
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
                ReturnType<(typeof client.objects)[':object_type']['batch']['delete']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.objects)[':object_type']['batch']['delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostObjectsObjectTypeBatchDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getObjectsObjectTypeAssociatedRecordsQueryKey(
  args: InferRequestType<(typeof client.objects)[':object_type']['associated-records']['$get']>,
) {
  return ['objects', '/objects/:object_type/associated-records', args] as const
}

export function getObjectsObjectTypeAssociatedRecordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects)[':object_type']['associated-records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.objects)[':object_type']['associated-records']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getObjectsObjectTypeAssociatedRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.objects[':object_type']['associated-records'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectObjectsObjectTypeAssociatedRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects)[':object_type']['associated-records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.objects)[':object_type']['associated-records']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getObjectsObjectTypeAssociatedRecordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getObjectsObjectTypeAssociatedRecordsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getContactsQueryKey(args: InferRequestType<typeof client.contacts.$get>) {
  return ['contacts', '/contacts', args] as const
}

export function getContactsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.contacts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContactsQueryKey>
  >({
    queryKey: getContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.contacts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.contacts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContactsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContactsAttributesQueryKey() {
  return ['contacts', '/contacts/attributes'] as const
}

export function getContactsAttributesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.attributes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.attributes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsAttributesQueryKey>
  >({
    queryKey: getContactsAttributesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.attributes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContactsAttributes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.attributes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contacts.attributes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactsAttributesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPutContactsAttributesAttributeCategoryAttributeName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutContactsAttributesAttributeCategoryAttributeNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostContactsAttributesAttributeCategoryAttributeName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContactsAttributesAttributeCategoryAttributeNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteContactsAttributesAttributeCategoryAttributeName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteContactsAttributesAttributeCategoryAttributeNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteContactsAttributesAttributeTypeMultipleChoiceAttributeMultipleChoiceAttributeOption<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteContactsAttributesAttributeTypeMultipleChoiceAttributeMultipleChoiceAttributeOptionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostContactsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContactsBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostContactsDoubleOptinConfirmation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContactsDoubleOptinConfirmationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostContactsExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.export.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.contacts.export.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContactsExportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContactsFoldersQueryKey(
  args: InferRequestType<typeof client.contacts.folders.$get>,
) {
  return ['contacts', '/contacts/folders', args] as const
}

export function getContactsFoldersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.folders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.contacts.folders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.folders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsFoldersQueryKey>
  >({
    queryKey: getContactsFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.folders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectContactsFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.folders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.contacts.folders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.folders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getContactsFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactsFoldersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostContactsFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contacts.folders.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.contacts.folders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContactsFoldersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContactsFoldersFolderIdQueryKey(
  args: InferRequestType<(typeof client.contacts.folders)[':folderId']['$get']>,
) {
  return ['contacts', '/contacts/folders/:folderId', args] as const
}

export function getContactsFoldersFolderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts.folders)[':folderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getContactsFoldersFolderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.folders[':folderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContactsFoldersFolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.contacts.folders)[':folderId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getContactsFoldersFolderIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutContactsFoldersFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutContactsFoldersFolderIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteContactsFoldersFolderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteContactsFoldersFolderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContactsFoldersFolderIdListsQueryKey(
  args: InferRequestType<(typeof client.contacts.folders)[':folderId']['lists']['$get']>,
) {
  return ['contacts', '/contacts/folders/:folderId/lists', args] as const
}

export function getContactsFoldersFolderIdListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts.folders)[':folderId']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getContactsFoldersFolderIdListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.folders[':folderId'].lists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContactsFoldersFolderIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.contacts.folders)[':folderId']['lists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getContactsFoldersFolderIdListsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostContactsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.import.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.contacts.import.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContactsImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContactsListsQueryKey(
  args: InferRequestType<typeof client.contacts.lists.$get>,
) {
  return ['contacts', '/contacts/lists', args] as const
}

export function getContactsListsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.lists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.contacts.lists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.lists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsListsQueryKey>
  >({
    queryKey: getContactsListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.lists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectContactsLists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.lists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.contacts.lists.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.lists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getContactsListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactsListsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostContactsLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.lists.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.contacts.lists.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContactsListsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContactsListsListIdQueryKey(
  args: InferRequestType<(typeof client.contacts.lists)[':listId']['$get']>,
) {
  return ['contacts', '/contacts/lists/:listId', args] as const
}

export function getContactsListsListIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts.lists)[':listId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsListsListIdQueryKey>
  >({
    queryKey: getContactsListsListIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.lists[':listId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContactsListsListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.contacts.lists)[':listId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsListsListIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactsListsListIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutContactsListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutContactsListsListIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteContactsListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteContactsListsListIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContactsListsListIdContactsQueryKey(
  args: InferRequestType<(typeof client.contacts.lists)[':listId']['contacts']['$get']>,
) {
  return ['contacts', '/contacts/lists/:listId/contacts', args] as const
}

export function getContactsListsListIdContactsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts.lists)[':listId']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getContactsListsListIdContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.lists[':listId'].contacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContactsListsListIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.contacts.lists)[':listId']['contacts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getContactsListsListIdContactsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostContactsListsListIdContactsAdd<
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
                ReturnType<(typeof client.contacts.lists)[':listId']['contacts']['add']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts.lists)[':listId']['contacts']['add']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContactsListsListIdContactsAddMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostContactsListsListIdContactsRemove<
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
                ReturnType<(typeof client.contacts.lists)[':listId']['contacts']['remove']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts.lists)[':listId']['contacts']['remove']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContactsListsListIdContactsRemoveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContactsSegmentsQueryKey(
  args: InferRequestType<typeof client.contacts.segments.$get>,
) {
  return ['contacts', '/contacts/segments', args] as const
}

export function getContactsSegmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.segments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.contacts.segments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.segments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsSegmentsQueryKey>
  >({
    queryKey: getContactsSegmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.segments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectContactsSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.contacts.segments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contacts.segments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsSegmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactsSegmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getContactsConsentGroupsQueryKey(
  args: InferRequestType<(typeof client.contacts)['consent-groups']['$get']>,
) {
  return ['contacts', '/contacts/consent-groups', args] as const
}

export function getContactsConsentGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)['consent-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)['consent-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getContactsConsentGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts['consent-groups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContactsConsentGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)['consent-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.contacts)['consent-groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getContactsConsentGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostContactsConsentGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContactsConsentGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContactsConsentGroupsIdQueryKey(
  args: InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$get']>,
) {
  return ['contacts', '/contacts/consent-groups/:id', args] as const
}

export function getContactsConsentGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)['consent-groups'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getContactsConsentGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts['consent-groups'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContactsConsentGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)['consent-groups'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getContactsConsentGroupsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutContactsConsentGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutContactsConsentGroupsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteContactsConsentGroupsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteContactsConsentGroupsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContactsIdentifierQueryKey(
  args: InferRequestType<(typeof client.contacts)[':identifier']['$get']>,
) {
  return ['contacts', '/contacts/:identifier', args] as const
}

export function getContactsIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':identifier']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':identifier']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsIdentifierQueryKey>
  >({
    queryKey: getContactsIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts[':identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContactsIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':identifier']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.contacts)[':identifier']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':identifier']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsIdentifierQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactsIdentifierQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutContactsIdentifier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutContactsIdentifierMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteContactsIdentifier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteContactsIdentifierMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContactsIdentifierCampaignStatsQueryKey(
  args: InferRequestType<(typeof client.contacts)[':identifier']['campaignStats']['$get']>,
) {
  return ['contacts', '/contacts/:identifier/campaignStats', args] as const
}

export function getContactsIdentifierCampaignStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':identifier']['campaignStats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':identifier']['campaignStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getContactsIdentifierCampaignStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts[':identifier'].campaignStats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContactsIdentifierCampaignStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':identifier']['campaignStats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.contacts)[':identifier']['campaignStats']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getContactsIdentifierCampaignStatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostConversationsAgentOnlinePing<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsAgentOnlinePingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostConversationsMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.messages.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.conversations.messages.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConversationsMessagesIdQueryKey(
  args: InferRequestType<(typeof client.conversations.messages)[':id']['$get']>,
) {
  return ['conversations', '/conversations/messages/:id', args] as const
}

export function getConversationsMessagesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations.messages)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations.messages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConversationsMessagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.messages[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConversationsMessagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations.messages)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.conversations.messages)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConversationsMessagesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutConversationsMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutConversationsMessagesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteConversationsMessagesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteConversationsMessagesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostConversationsPushedMessages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsPushedMessagesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConversationsPushedMessagesIdQueryKey(
  args: InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$get']>,
) {
  return ['conversations', '/conversations/pushedMessages/:id', args] as const
}

export function getConversationsPushedMessagesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations.pushedMessages)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConversationsPushedMessagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.pushedMessages[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConversationsPushedMessagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations.pushedMessages)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConversationsPushedMessagesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutConversationsPushedMessagesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutConversationsPushedMessagesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteConversationsPushedMessagesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteConversationsPushedMessagesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutConversationsVisitorGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.visitorGroup.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.conversations.visitorGroup.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutConversationsVisitorGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCategoriesQueryKey(args: InferRequestType<typeof client.categories.$get>) {
  return ['categories', '/categories', args] as const
}

export function getCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.categories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCategoriesQueryKey>
  >({
    queryKey: getCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.categories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCategoriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.categories.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCategoriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCategoriesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.categories.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.categories.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCategoriesBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCategoriesIdQueryKey(
  args: InferRequestType<(typeof client.categories)[':id']['$get']>,
) {
  return ['categories', '/categories/:id', args] as const
}

export function getCategoriesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesIdQueryKey>
  >({
    queryKey: getCategoriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCategoriesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.categories)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCategoriesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCouponCollectionsQueryKey(
  args: InferRequestType<typeof client.couponCollections.$get>,
) {
  return ['couponCollections', '/couponCollections', args] as const
}

export function getCouponCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.couponCollections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.couponCollections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.couponCollections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCouponCollectionsQueryKey>
  >({
    queryKey: getCouponCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.couponCollections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCouponCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.couponCollections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.couponCollections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.couponCollections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCouponCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCouponCollectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCouponCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.couponCollections.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.couponCollections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCouponCollectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCouponCollectionsIdQueryKey(
  args: InferRequestType<(typeof client.couponCollections)[':id']['$get']>,
) {
  return ['couponCollections', '/couponCollections/:id', args] as const
}

export function getCouponCollectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.couponCollections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.couponCollections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.couponCollections)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCouponCollectionsIdQueryKey>
  >({
    queryKey: getCouponCollectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.couponCollections[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCouponCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.couponCollections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.couponCollections)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.couponCollections)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCouponCollectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCouponCollectionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPatchCouponCollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCouponCollectionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCoupons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.coupons.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCouponsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEcommerceActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.activate.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEcommerceActivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEcommerceAttributionMetricsQueryKey(
  args: InferRequestType<typeof client.ecommerce.attribution.metrics.$get>,
) {
  return ['ecommerce', '/ecommerce/attribution/metrics', args] as const
}

export function getEcommerceAttributionMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.attribution.metrics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ecommerce.attribution.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.attribution.metrics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcommerceAttributionMetricsQueryKey>
  >({
    queryKey: getEcommerceAttributionMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecommerce.attribution.metrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEcommerceAttributionMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.attribution.metrics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ecommerce.attribution.metrics.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ecommerce.attribution.metrics.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEcommerceAttributionMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEcommerceAttributionMetricsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEcommerceAttributionMetricsConversionSourceConversionSourceIdQueryKey(
  args: InferRequestType<
    (typeof client.ecommerce.attribution.metrics)[':conversionSource'][':conversionSourceId']['$get']
  >,
) {
  return [
    'ecommerce',
    '/ecommerce/attribution/metrics/:conversionSource/:conversionSourceId',
    args,
  ] as const
}

export function getEcommerceAttributionMetricsConversionSourceConversionSourceIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.ecommerce.attribution.metrics)[':conversionSource'][':conversionSourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEcommerceAttributionMetricsConversionSourceConversionSourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecommerce.attribution.metrics[':conversionSource'][':conversionSourceId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEcommerceAttributionMetricsConversionSourceConversionSourceId<
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
  args: () => InferRequestType<
    (typeof client.ecommerce.attribution.metrics)[':conversionSource'][':conversionSourceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEcommerceAttributionMetricsConversionSourceConversionSourceIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEcommerceAttributionProductsConversionSourceConversionSourceIdQueryKey(
  args: InferRequestType<
    (typeof client.ecommerce.attribution.products)[':conversionSource'][':conversionSourceId']['$get']
  >,
) {
  return [
    'ecommerce',
    '/ecommerce/attribution/products/:conversionSource/:conversionSourceId',
    args,
  ] as const
}

export function getEcommerceAttributionProductsConversionSourceConversionSourceIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.ecommerce.attribution.products)[':conversionSource'][':conversionSourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEcommerceAttributionProductsConversionSourceConversionSourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ecommerce.attribution.products[':conversionSource'][':conversionSourceId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEcommerceAttributionProductsConversionSourceConversionSourceId<
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
  args: () => InferRequestType<
    (typeof client.ecommerce.attribution.products)[':conversionSource'][':conversionSourceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEcommerceAttributionProductsConversionSourceConversionSourceIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEcommerceConfigDisplayCurrencyQueryKey() {
  return ['ecommerce', '/ecommerce/config/displayCurrency'] as const
}

export function getEcommerceConfigDisplayCurrencyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.config.displayCurrency.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getEcommerceConfigDisplayCurrencyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ecommerce.config.displayCurrency.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEcommerceConfigDisplayCurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.config.displayCurrency.$get>>>
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
              Awaited<ReturnType<typeof client.ecommerce.config.displayCurrency.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEcommerceConfigDisplayCurrencyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEcommerceConfigDisplayCurrencyQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostEcommerceConfigDisplayCurrency<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEcommerceConfigDisplayCurrencyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrdersQueryKey(args: InferRequestType<typeof client.orders.$get>) {
  return ['orders', '/orders', args] as const
}

export function getOrdersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrdersQueryKey>
  >({
    queryKey: getOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrders<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.orders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostOrdersStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.status.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.orders.status.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrdersStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostOrdersStatusBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.orders.status.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.orders.status.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrdersStatusBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostPaymentsRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.payments.requests.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.payments.requests.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPaymentsRequestsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPaymentsRequestsIdQueryKey(
  args: InferRequestType<(typeof client.payments.requests)[':id']['$get']>,
) {
  return ['payments', '/payments/requests/:id', args] as const
}

export function getPaymentsRequestsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payments.requests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payments.requests)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.payments.requests)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsRequestsIdQueryKey>
  >({
    queryKey: getPaymentsRequestsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payments.requests[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPaymentsRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payments.requests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.payments.requests)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payments.requests)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsRequestsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentsRequestsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeletePaymentsRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePaymentsRequestsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProductsQueryKey(args: InferRequestType<typeof client.products.$get>) {
  return ['products', '/products', args] as const
}

export function getProductsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.products.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProductsQueryKey>
  >({
    queryKey: getProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.products.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostProducts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.products.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostProductsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.batch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.products.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductsBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProductsIdQueryKey(
  args: InferRequestType<(typeof client.products)[':id']['$get']>,
) {
  return ['products', '/products/:id', args] as const
}

export function getProductsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.products)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsIdQueryKey>
  >({
    queryKey: getProductsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProductsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.products)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostProductsIdAlertsType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProductsIdAlertsTypeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEventsQueryKey(args: InferRequestType<typeof client.events.$get>) {
  return ['events', '/events', args] as const
}

export function getEventsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >({
    queryKey: getEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>>
        | undefined,
        TError,
        InferRequestType<typeof client.events.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEventsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEventsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.batch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.events.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEventsBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getInboundEventsQueryKey(
  args: InferRequestType<typeof client.inbound.events.$get>,
) {
  return ['inbound', '/inbound/events', args] as const
}

export function getInboundEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbound.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.inbound.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbound.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInboundEventsQueryKey>
  >({
    queryKey: getInboundEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inbound.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectInboundEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbound.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.inbound.events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbound.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInboundEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInboundEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getInboundEventsUuidQueryKey(
  args: InferRequestType<(typeof client.inbound.events)[':uuid']['$get']>,
) {
  return ['inbound', '/inbound/events/:uuid', args] as const
}

export function getInboundEventsUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.inbound.events)[':uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inbound.events)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inbound.events)[':uuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboundEventsUuidQueryKey>
  >({
    queryKey: getInboundEventsUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inbound.events[':uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectInboundEventsUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.inbound.events)[':uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.inbound.events)[':uuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inbound.events)[':uuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboundEventsUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInboundEventsUuidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getInboundAttachmentsDownloadTokenQueryKey(
  args: InferRequestType<(typeof client.inbound.attachments)[':downloadToken']['$get']>,
) {
  return ['inbound', '/inbound/attachments/:downloadToken', args] as const
}

export function getInboundAttachmentsDownloadTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inbound.attachments)[':downloadToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inbound.attachments)[':downloadToken']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getInboundAttachmentsDownloadTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inbound.attachments[':downloadToken'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectInboundAttachmentsDownloadToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inbound.attachments)[':downloadToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.inbound.attachments)[':downloadToken']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getInboundAttachmentsDownloadTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getLoyaltyBalanceProgramsPidActiveBalanceQueryKey(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['active-balance']['$get']
  >,
) {
  return ['loyalty', '/loyalty/balance/programs/:pid/active-balance', args] as const
}

export function getLoyaltyBalanceProgramsPidActiveBalanceQueryOptions<
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
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['active-balance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLoyaltyBalanceProgramsPidActiveBalanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.loyalty.balance.programs[':pid']['active-balance'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLoyaltyBalanceProgramsPidActiveBalance<
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
  args: () => InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['active-balance']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getLoyaltyBalanceProgramsPidActiveBalanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLoyaltyBalanceProgramsPidActiveBalanceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getLoyaltyBalanceProgramsPidBalanceDefinitionsQueryKey(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$get']
  >,
) {
  return ['loyalty', '/loyalty/balance/programs/:pid/balance-definitions', args] as const
}

export function getLoyaltyBalanceProgramsPidBalanceDefinitionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLoyaltyBalanceProgramsPidBalanceDefinitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.loyalty.balance.programs[':pid']['balance-definitions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLoyaltyBalanceProgramsPidBalanceDefinitions<
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
  args: () => InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLoyaltyBalanceProgramsPidBalanceDefinitionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostLoyaltyBalanceProgramsPidBalanceDefinitions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoyaltyBalanceProgramsPidBalanceDefinitionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidQueryKey(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$get']
  >,
) {
  return ['loyalty', '/loyalty/balance/programs/:pid/balance-definitions/:bdid', args] as const
}

export function getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidQueryOptions<
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
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLoyaltyBalanceProgramsPidBalanceDefinitionsBdid<
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
  args: () => InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutLoyaltyBalanceProgramsPidBalanceDefinitionsBdid<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutLoyaltyBalanceProgramsPidBalanceDefinitionsBdidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdid<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimits<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidQueryKey(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$get']
  >,
) {
  return [
    'loyalty',
    '/loyalty/balance/programs/:pid/balance-definitions/:bdid/limits/:blid',
    args,
  ] as const
}

export function getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidQueryOptions<
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
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].limits[
          ':blid'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlid<
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
  args: () => InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlid<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlid<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLoyaltyBalanceProgramsPidContactBalancesQueryKey(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['contact-balances']['$get']
  >,
) {
  return ['loyalty', '/loyalty/balance/programs/:pid/contact-balances', args] as const
}

export function getLoyaltyBalanceProgramsPidContactBalancesQueryOptions<
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
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['contact-balances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLoyaltyBalanceProgramsPidContactBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.loyalty.balance.programs[':pid']['contact-balances'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLoyaltyBalanceProgramsPidContactBalances<
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
  args: () => InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['contact-balances']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getLoyaltyBalanceProgramsPidContactBalancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLoyaltyBalanceProgramsPidContactBalancesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostLoyaltyBalanceProgramsPidCreateOrder<
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
                  (typeof client.loyalty.balance.programs)[':pid']['create-order']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.loyalty.balance.programs)[':pid']['create-order']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoyaltyBalanceProgramsPidCreateOrderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLoyaltyBalanceProgramsPidSubscriptionsCidBalancesQueryKey(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$get']
  >,
) {
  return ['loyalty', '/loyalty/balance/programs/:pid/subscriptions/:cid/balances', args] as const
}

export function getLoyaltyBalanceProgramsPidSubscriptionsCidBalancesQueryOptions<
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
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLoyaltyBalanceProgramsPidSubscriptionsCidBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.loyalty.balance.programs[':pid'].subscriptions[':cid'].balances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLoyaltyBalanceProgramsPidSubscriptionsCidBalances<
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
  args: () => InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLoyaltyBalanceProgramsPidSubscriptionsCidBalancesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostLoyaltyBalanceProgramsPidSubscriptionsCidBalances<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostLoyaltyBalanceProgramsPidSubscriptionsCidBalancesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLoyaltyBalanceProgramsPidTransactionHistoryQueryKey(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['transaction-history']['$get']
  >,
) {
  return ['loyalty', '/loyalty/balance/programs/:pid/transaction-history', args] as const
}

export function getLoyaltyBalanceProgramsPidTransactionHistoryQueryOptions<
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
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['transaction-history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLoyaltyBalanceProgramsPidTransactionHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.loyalty.balance.programs[':pid']['transaction-history'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLoyaltyBalanceProgramsPidTransactionHistory<
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
  args: () => InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['transaction-history']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLoyaltyBalanceProgramsPidTransactionHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostLoyaltyBalanceProgramsPidTransactions<
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
                  (typeof client.loyalty.balance.programs)[':pid']['transactions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.loyalty.balance.programs)[':pid']['transactions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoyaltyBalanceProgramsPidTransactionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLoyaltyBalanceProgramsPidTransactionsTidCancel<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoyaltyBalanceProgramsPidTransactionsTidCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLoyaltyBalanceProgramsPidTransactionsTidComplete<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoyaltyBalanceProgramsPidTransactionsTidCompleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLoyaltyConfigProgramsQueryKey(
  args: InferRequestType<typeof client.loyalty.config.programs.$get>,
) {
  return ['loyalty', '/loyalty/config/programs', args] as const
}

export function getLoyaltyConfigProgramsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.loyalty.config.programs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.loyalty.config.programs.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.loyalty.config.programs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoyaltyConfigProgramsQueryKey>
  >({
    queryKey: getLoyaltyConfigProgramsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.loyalty.config.programs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLoyaltyConfigPrograms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.loyalty.config.programs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.loyalty.config.programs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.loyalty.config.programs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLoyaltyConfigProgramsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLoyaltyConfigProgramsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostLoyaltyConfigPrograms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.loyalty.config.programs.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.loyalty.config.programs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoyaltyConfigProgramsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLoyaltyConfigProgramsPidQueryKey(
  args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$get']>,
) {
  return ['loyalty', '/loyalty/config/programs/:pid', args] as const
}

export function getLoyaltyConfigProgramsPidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLoyaltyConfigProgramsPidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.loyalty.config.programs[':pid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLoyaltyConfigProgramsPid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLoyaltyConfigProgramsPidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutLoyaltyConfigProgramsPid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutLoyaltyConfigProgramsPidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteLoyaltyConfigProgramsPid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLoyaltyConfigProgramsPidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchLoyaltyConfigProgramsPid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchLoyaltyConfigProgramsPidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLoyaltyConfigProgramsPidAccountInfoQueryKey(
  args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['account-info']['$get']>,
) {
  return ['loyalty', '/loyalty/config/programs/:pid/account-info', args] as const
}

export function getLoyaltyConfigProgramsPidAccountInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['account-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['account-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLoyaltyConfigProgramsPidAccountInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.loyalty.config.programs[':pid']['account-info'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLoyaltyConfigProgramsPidAccountInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['account-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.loyalty.config.programs)[':pid']['account-info']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLoyaltyConfigProgramsPidAccountInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteLoyaltyConfigProgramsPidContactCid<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLoyaltyConfigProgramsPidContactCidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLoyaltyConfigProgramsPidPublish<
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
                ReturnType<(typeof client.loyalty.config.programs)[':pid']['publish']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.loyalty.config.programs)[':pid']['publish']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoyaltyConfigProgramsPidPublishMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLoyaltyConfigProgramsPidSubscriptionMembers<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoyaltyConfigProgramsPidSubscriptionMembersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteLoyaltyConfigProgramsPidSubscriptionMembers<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLoyaltyConfigProgramsPidSubscriptionMembersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLoyaltyConfigProgramsPidSubscriptions<
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
                  (typeof client.loyalty.config.programs)[':pid']['subscriptions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.loyalty.config.programs)[':pid']['subscriptions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoyaltyConfigProgramsPidSubscriptionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLoyaltyOfferProgramsPidCodePoolsCpidCodesCountQueryKey(
  args: InferRequestType<
    (typeof client.loyalty.offer.programs)[':pid']['code-pools'][':cpid']['codes-count']['$get']
  >,
) {
  return ['loyalty', '/loyalty/offer/programs/:pid/code-pools/:cpid/codes-count', args] as const
}

export function getLoyaltyOfferProgramsPidCodePoolsCpidCodesCountQueryOptions<
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
  args: InferRequestType<
    (typeof client.loyalty.offer.programs)[':pid']['code-pools'][':cpid']['codes-count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLoyaltyOfferProgramsPidCodePoolsCpidCodesCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.loyalty.offer.programs[':pid']['code-pools'][':cpid']['codes-count'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLoyaltyOfferProgramsPidCodePoolsCpidCodesCount<
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
  args: () => InferRequestType<
    (typeof client.loyalty.offer.programs)[':pid']['code-pools'][':cpid']['codes-count']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLoyaltyOfferProgramsPidCodePoolsCpidCodesCountQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getLoyaltyOfferProgramsPidOffersQueryKey(
  args: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$get']>,
) {
  return ['loyalty', '/loyalty/offer/programs/:pid/offers', args] as const
}

export function getLoyaltyOfferProgramsPidOffersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLoyaltyOfferProgramsPidOffersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.loyalty.offer.programs[':pid'].offers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLoyaltyOfferProgramsPidOffers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLoyaltyOfferProgramsPidOffersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostLoyaltyOfferProgramsPidOffers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoyaltyOfferProgramsPidOffersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLoyaltyOfferProgramsPidRewardsAttribute<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoyaltyOfferProgramsPidRewardsAttributeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLoyaltyOfferProgramsPidRewardsRedeem<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoyaltyOfferProgramsPidRewardsRedeemMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLoyaltyOfferProgramsPidRewardsRedeemTidComplete<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoyaltyOfferProgramsPidRewardsRedeemTidCompleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteLoyaltyOfferProgramsPidRewardsRevoke<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLoyaltyOfferProgramsPidRewardsRevokeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLoyaltyOfferProgramsPidRewardsValidate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoyaltyOfferProgramsPidRewardsValidateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLoyaltyOfferProgramsPidRewardsRidQueryKey(
  args: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['rewards'][':rid']['$get']>,
) {
  return ['loyalty', '/loyalty/offer/programs/:pid/rewards/:rid', args] as const
}

export function getLoyaltyOfferProgramsPidRewardsRidQueryOptions<
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
  args: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['rewards'][':rid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLoyaltyOfferProgramsPidRewardsRidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.loyalty.offer.programs[':pid'].rewards[':rid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLoyaltyOfferProgramsPidRewardsRid<
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
  args: () => InferRequestType<
    (typeof client.loyalty.offer.programs)[':pid']['rewards'][':rid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getLoyaltyOfferProgramsPidRewardsRidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLoyaltyOfferProgramsPidRewardsRidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getLoyaltyOfferProgramsPidVouchersQueryKey(
  args: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['vouchers']['$get']>,
) {
  return ['loyalty', '/loyalty/offer/programs/:pid/vouchers', args] as const
}

export function getLoyaltyOfferProgramsPidVouchersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.loyalty.offer.programs)[':pid']['vouchers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['vouchers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLoyaltyOfferProgramsPidVouchersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.loyalty.offer.programs[':pid'].vouchers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLoyaltyOfferProgramsPidVouchers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.loyalty.offer.programs)[':pid']['vouchers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['vouchers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getLoyaltyOfferProgramsPidVouchersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLoyaltyOfferProgramsPidVouchersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostLoyaltyTierProgramsPidContactsCidTiersTid<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoyaltyTierProgramsPidContactsCidTiersTidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLoyaltyTierProgramsPidTierGroupsQueryKey(
  args: InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$get']>,
) {
  return ['loyalty', '/loyalty/tier/programs/:pid/tier-groups', args] as const
}

export function getLoyaltyTierProgramsPidTierGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLoyaltyTierProgramsPidTierGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.loyalty.tier.programs[':pid']['tier-groups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLoyaltyTierProgramsPidTierGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getLoyaltyTierProgramsPidTierGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLoyaltyTierProgramsPidTierGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostLoyaltyTierProgramsPidTierGroups<
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
                ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoyaltyTierProgramsPidTierGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLoyaltyTierProgramsPidTierGroupsGidQueryKey(
  args: InferRequestType<
    (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$get']
  >,
) {
  return ['loyalty', '/loyalty/tier/programs/:pid/tier-groups/:gid', args] as const
}

export function getLoyaltyTierProgramsPidTierGroupsGidQueryOptions<
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
  args: InferRequestType<
    (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLoyaltyTierProgramsPidTierGroupsGidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.loyalty.tier.programs[':pid']['tier-groups'][':gid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLoyaltyTierProgramsPidTierGroupsGid<
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
  args: () => InferRequestType<
    (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getLoyaltyTierProgramsPidTierGroupsGidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLoyaltyTierProgramsPidTierGroupsGidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutLoyaltyTierProgramsPidTierGroupsGid<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutLoyaltyTierProgramsPidTierGroupsGidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteLoyaltyTierProgramsPidTierGroupsGid<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLoyaltyTierProgramsPidTierGroupsGidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLoyaltyTierProgramsPidTierGroupsGidTiers<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoyaltyTierProgramsPidTierGroupsGidTiersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLoyaltyTierProgramsPidTiersQueryKey(
  args: InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tiers']['$get']>,
) {
  return ['loyalty', '/loyalty/tier/programs/:pid/tiers', args] as const
}

export function getLoyaltyTierProgramsPidTiersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tiers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tiers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLoyaltyTierProgramsPidTiersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.loyalty.tier.programs[':pid'].tiers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLoyaltyTierProgramsPidTiers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tiers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tiers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLoyaltyTierProgramsPidTiersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutLoyaltyTierProgramsPidTiersTid<
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
                ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tiers'][':tid']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tiers'][':tid']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutLoyaltyTierProgramsPidTiersTidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteLoyaltyTierProgramsPidTiersTid<
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
                    (typeof client.loyalty.tier.programs)[':pid']['tiers'][':tid']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tiers'][':tid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLoyaltyTierProgramsPidTiersTidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWalletPassesPassIdInstallUrlContactIdQueryKey(
  args: InferRequestType<
    (typeof client.wallet.passes)[':passId']['installUrl'][':contactId']['$get']
  >,
) {
  return ['wallet', '/wallet/passes/:passId/installUrl/:contactId', args] as const
}

export function getWalletPassesPassIdInstallUrlContactIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.wallet.passes)[':passId']['installUrl'][':contactId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWalletPassesPassIdInstallUrlContactIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wallet.passes[':passId'].installUrl[':contactId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWalletPassesPassIdInstallUrlContactId<
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
  args: () => InferRequestType<
    (typeof client.wallet.passes)[':passId']['installUrl'][':contactId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getWalletPassesPassIdInstallUrlContactIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWalletPassesPassIdInstallUrlContactIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostWalletPassesInstallationIdRedeem<
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
                ReturnType<(typeof client.wallet.passes)[':installationId']['redeem']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.wallet.passes)[':installationId']['redeem']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWalletPassesInstallationIdRedeemMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmailCampaignsQueryKey(
  args: InferRequestType<typeof client.emailCampaigns.$get>,
) {
  return ['emailCampaigns', '/emailCampaigns', args] as const
}

export function getEmailCampaignsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emailCampaigns.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.emailCampaigns.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emailCampaigns.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmailCampaignsQueryKey>
  >({
    queryKey: getEmailCampaignsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.emailCampaigns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmailCampaigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emailCampaigns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.emailCampaigns.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emailCampaigns.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEmailCampaignsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEmailCampaignsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostEmailCampaigns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emailCampaigns.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.emailCampaigns.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmailCampaignsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEmailCampaignsImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.emailCampaigns.images.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.emailCampaigns.images.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmailCampaignsImagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmailCampaignsCampaignIdQueryKey(
  args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$get']>,
) {
  return ['emailCampaigns', '/emailCampaigns/:campaignId', args] as const
}

export function getEmailCampaignsCampaignIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEmailCampaignsCampaignIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.emailCampaigns[':campaignId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmailCampaignsCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmailCampaignsCampaignIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutEmailCampaignsCampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmailCampaignsCampaignIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteEmailCampaignsCampaignId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEmailCampaignsCampaignIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmailCampaignsCampaignIdAbTestCampaignResultQueryKey(
  args: InferRequestType<
    (typeof client.emailCampaigns)[':campaignId']['abTestCampaignResult']['$get']
  >,
) {
  return ['emailCampaigns', '/emailCampaigns/:campaignId/abTestCampaignResult', args] as const
}

export function getEmailCampaignsCampaignIdAbTestCampaignResultQueryOptions<
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
  args: InferRequestType<
    (typeof client.emailCampaigns)[':campaignId']['abTestCampaignResult']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEmailCampaignsCampaignIdAbTestCampaignResultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.emailCampaigns[':campaignId'].abTestCampaignResult.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmailCampaignsCampaignIdAbTestCampaignResult<
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
  args: () => InferRequestType<
    (typeof client.emailCampaigns)[':campaignId']['abTestCampaignResult']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmailCampaignsCampaignIdAbTestCampaignResultQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostEmailCampaignsCampaignIdExportRecipients<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmailCampaignsCampaignIdExportRecipientsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEmailCampaignsCampaignIdSendNow<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmailCampaignsCampaignIdSendNowMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEmailCampaignsCampaignIdSendReport<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmailCampaignsCampaignIdSendReportMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEmailCampaignsCampaignIdSendTest<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmailCampaignsCampaignIdSendTestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmailCampaignsCampaignIdSharedUrlQueryKey(
  args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sharedUrl']['$get']>,
) {
  return ['emailCampaigns', '/emailCampaigns/:campaignId/sharedUrl', args] as const
}

export function getEmailCampaignsCampaignIdSharedUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['sharedUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sharedUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEmailCampaignsCampaignIdSharedUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.emailCampaigns[':campaignId'].sharedUrl.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmailCampaignsCampaignIdSharedUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['sharedUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sharedUrl']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getEmailCampaignsCampaignIdSharedUrlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmailCampaignsCampaignIdSharedUrlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutEmailCampaignsCampaignIdStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmailCampaignsCampaignIdStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSmsCampaignsQueryKey(args: InferRequestType<typeof client.smsCampaigns.$get>) {
  return ['smsCampaigns', '/smsCampaigns', args] as const
}

export function getSmsCampaignsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smsCampaigns.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.smsCampaigns.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smsCampaigns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSmsCampaignsQueryKey>
  >({
    queryKey: getSmsCampaignsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.smsCampaigns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSmsCampaigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smsCampaigns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.smsCampaigns.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smsCampaigns.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSmsCampaignsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSmsCampaignsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSmsCampaigns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smsCampaigns.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.smsCampaigns.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSmsCampaignsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSmsCampaignsCampaignIdQueryKey(
  args: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$get']>,
) {
  return ['smsCampaigns', '/smsCampaigns/:campaignId', args] as const
}

export function getSmsCampaignsCampaignIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSmsCampaignsCampaignIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.smsCampaigns[':campaignId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSmsCampaignsCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSmsCampaignsCampaignIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutSmsCampaignsCampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSmsCampaignsCampaignIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteSmsCampaignsCampaignId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSmsCampaignsCampaignIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSmsCampaignsCampaignIdExportRecipients<
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
                ReturnType<(typeof client.smsCampaigns)[':campaignId']['exportRecipients']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.smsCampaigns)[':campaignId']['exportRecipients']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSmsCampaignsCampaignIdExportRecipientsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSmsCampaignsCampaignIdSendNow<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSmsCampaignsCampaignIdSendNowMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSmsCampaignsCampaignIdSendReport<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSmsCampaignsCampaignIdSendReportMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSmsCampaignsCampaignIdSendTest<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSmsCampaignsCampaignIdSendTestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutSmsCampaignsCampaignIdStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSmsCampaignsCampaignIdStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWhatsappCampaignsQueryKey(
  args: InferRequestType<typeof client.whatsappCampaigns.$get>,
) {
  return ['whatsappCampaigns', '/whatsappCampaigns', args] as const
}

export function getWhatsappCampaignsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.whatsappCampaigns.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWhatsappCampaignsQueryKey>
  >({
    queryKey: getWhatsappCampaignsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whatsappCampaigns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWhatsappCampaigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.whatsappCampaigns.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWhatsappCampaignsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWhatsappCampaignsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostWhatsappCampaigns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.whatsappCampaigns.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWhatsappCampaignsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWhatsappCampaignsConfigQueryKey() {
  return ['whatsappCampaigns', '/whatsappCampaigns/config'] as const
}

export function getWhatsappCampaignsConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.config.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.config.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhatsappCampaignsConfigQueryKey>
  >({
    queryKey: getWhatsappCampaignsConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.whatsappCampaigns.config.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWhatsappCampaignsConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.config.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.config.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWhatsappCampaignsConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWhatsappCampaignsConfigQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostWhatsappCampaignsTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWhatsappCampaignsTemplateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWhatsappCampaignsTemplateListQueryKey(
  args: InferRequestType<(typeof client.whatsappCampaigns)['template-list']['$get']>,
) {
  return ['whatsappCampaigns', '/whatsappCampaigns/template-list', args] as const
}

export function getWhatsappCampaignsTemplateListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.whatsappCampaigns)['template-list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.whatsappCampaigns)['template-list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWhatsappCampaignsTemplateListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whatsappCampaigns['template-list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWhatsappCampaignsTemplateList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.whatsappCampaigns)['template-list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.whatsappCampaigns)['template-list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWhatsappCampaignsTemplateListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostWhatsappCampaignsTemplateApprovalTemplateId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWhatsappCampaignsTemplateApprovalTemplateIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWhatsappCampaignsCampaignIdQueryKey(
  args: InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$get']>,
) {
  return ['whatsappCampaigns', '/whatsappCampaigns/:campaignId', args] as const
}

export function getWhatsappCampaignsCampaignIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.whatsappCampaigns)[':campaignId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWhatsappCampaignsCampaignIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whatsappCampaigns[':campaignId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWhatsappCampaignsCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.whatsappCampaigns)[':campaignId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWhatsappCampaignsCampaignIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutWhatsappCampaignsCampaignId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWhatsappCampaignsCampaignIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteWhatsappCampaignsCampaignId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWhatsappCampaignsCampaignIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCompaniesQueryKey(args: InferRequestType<typeof client.companies.$get>) {
  return ['companies', '/companies', args] as const
}

export function getCompaniesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.companies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCompaniesQueryKey>
  >({
    queryKey: getCompaniesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCompanies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.companies.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCompaniesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCompanies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.companies.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCompaniesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCompaniesImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.companies.import.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.companies.import.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCompaniesImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchCompaniesLinkUnlinkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCompaniesLinkUnlinkIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCompaniesIdQueryKey(
  args: InferRequestType<(typeof client.companies)[':id']['$get']>,
) {
  return ['companies', '/companies/:id', args] as const
}

export function getCompaniesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesIdQueryKey>
  >({
    queryKey: getCompaniesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCompaniesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.companies)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCompaniesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteCompaniesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.companies)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCompaniesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchCompaniesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.companies)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCompaniesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCrmAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.crm.attributes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCrmAttributesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteCrmAttributesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCrmAttributesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchCrmAttributesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCrmAttributesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCrmAttributesCompaniesQueryKey() {
  return ['crm', '/crm/attributes/companies'] as const
}

export function getCrmAttributesCompaniesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.companies.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.companies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmAttributesCompaniesQueryKey>
  >({
    queryKey: getCrmAttributesCompaniesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.attributes.companies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCrmAttributesCompanies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.companies.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.companies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmAttributesCompaniesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCrmAttributesCompaniesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getCrmAttributesDealsQueryKey() {
  return ['crm', '/crm/attributes/deals'] as const
}

export function getCrmAttributesDealsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.deals.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.deals.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCrmAttributesDealsQueryKey>
  >({
    queryKey: getCrmAttributesDealsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.attributes.deals.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCrmAttributesDeals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.deals.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.deals.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmAttributesDealsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCrmAttributesDealsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getCrmDealsQueryKey(args: InferRequestType<typeof client.crm.deals.$get>) {
  return ['crm', '/crm/deals', args] as const
}

export function getCrmDealsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.deals.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.crm.deals.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.deals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCrmDealsQueryKey>
  >({
    queryKey: getCrmDealsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.deals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCrmDeals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.deals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.crm.deals.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.deals.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCrmDealsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCrmDealsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCrmDeals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.deals.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.crm.deals.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCrmDealsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCrmDealsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.crm.deals.import.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.crm.deals.import.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCrmDealsImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchCrmDealsLinkUnlinkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCrmDealsLinkUnlinkIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCrmDealsIdQueryKey(
  args: InferRequestType<(typeof client.crm.deals)[':id']['$get']>,
) {
  return ['crm', '/crm/deals/:id', args] as const
}

export function getCrmDealsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crm.deals)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.deals)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.deals)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmDealsIdQueryKey>
  >({
    queryKey: getCrmDealsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.deals[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCrmDealsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crm.deals)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.crm.deals)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.crm.deals)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmDealsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCrmDealsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteCrmDealsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.deals)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.crm.deals)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCrmDealsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchCrmDealsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.deals)[':id']['$patch']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.crm.deals)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCrmDealsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCrmFilesQueryKey(args: InferRequestType<typeof client.crm.files.$get>) {
  return ['crm', '/crm/files', args] as const
}

export function getCrmFilesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.files.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.crm.files.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCrmFilesQueryKey>
  >({
    queryKey: getCrmFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.files.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCrmFiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.files.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.crm.files.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.files.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCrmFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCrmFilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCrmFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.files.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.crm.files.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCrmFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCrmFilesIdQueryKey(
  args: InferRequestType<(typeof client.crm.files)[':id']['$get']>,
) {
  return ['crm', '/crm/files/:id', args] as const
}

export function getCrmFilesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crm.files)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.files)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.files)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmFilesIdQueryKey>
  >({
    queryKey: getCrmFilesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.files[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCrmFilesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crm.files)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.crm.files)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.crm.files)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmFilesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCrmFilesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteCrmFilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.files)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.crm.files)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCrmFilesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCrmFilesIdDataQueryKey(
  args: InferRequestType<(typeof client.crm.files)[':id']['data']['$get']>,
) {
  return ['crm', '/crm/files/:id/data', args] as const
}

export function getCrmFilesIdDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm.files)[':id']['data']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.files)[':id']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.files)[':id']['data']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmFilesIdDataQueryKey>
  >({
    queryKey: getCrmFilesIdDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.files[':id'].data.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCrmFilesIdData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm.files)[':id']['data']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.crm.files)[':id']['data']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.files)[':id']['data']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmFilesIdDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCrmFilesIdDataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCrmNotesQueryKey(args: InferRequestType<typeof client.crm.notes.$get>) {
  return ['crm', '/crm/notes', args] as const
}

export function getCrmNotesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.crm.notes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCrmNotesQueryKey>
  >({
    queryKey: getCrmNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.notes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCrmNotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.crm.notes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCrmNotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCrmNotesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCrmNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.crm.notes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCrmNotesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCrmNotesIdQueryKey(
  args: InferRequestType<(typeof client.crm.notes)[':id']['$get']>,
) {
  return ['crm', '/crm/notes/:id', args] as const
}

export function getCrmNotesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.notes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmNotesIdQueryKey>
  >({
    queryKey: getCrmNotesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.notes[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCrmNotesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.crm.notes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmNotesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCrmNotesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteCrmNotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.crm.notes)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCrmNotesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchCrmNotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$patch']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.crm.notes)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCrmNotesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCrmPipelineDetailsQueryKey() {
  return ['crm', '/crm/pipeline/details'] as const
}

export function getCrmPipelineDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCrmPipelineDetailsQueryKey>
  >({
    queryKey: getCrmPipelineDetailsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.pipeline.details.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCrmPipelineDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmPipelineDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCrmPipelineDetailsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getCrmPipelineDetailsAllQueryKey() {
  return ['crm', '/crm/pipeline/details/all'] as const
}

export function getCrmPipelineDetailsAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.all.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.all.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmPipelineDetailsAllQueryKey>
  >({
    queryKey: getCrmPipelineDetailsAllQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.pipeline.details.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCrmPipelineDetailsAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.all.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmPipelineDetailsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCrmPipelineDetailsAllQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getCrmPipelineDetailsPipelineIDQueryKey(
  args: InferRequestType<(typeof client.crm.pipeline.details)[':pipelineID']['$get']>,
) {
  return ['crm', '/crm/pipeline/details/:pipelineID', args] as const
}

export function getCrmPipelineDetailsPipelineIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.pipeline.details)[':pipelineID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.pipeline.details)[':pipelineID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCrmPipelineDetailsPipelineIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.pipeline.details[':pipelineID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCrmPipelineDetailsPipelineID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.pipeline.details)[':pipelineID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.crm.pipeline.details)[':pipelineID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCrmPipelineDetailsPipelineIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCrmTasksQueryKey(args: InferRequestType<typeof client.crm.tasks.$get>) {
  return ['crm', '/crm/tasks', args] as const
}

export function getCrmTasksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.crm.tasks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCrmTasksQueryKey>
  >({
    queryKey: getCrmTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.tasks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCrmTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.crm.tasks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCrmTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCrmTasksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCrmTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.crm.tasks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCrmTasksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCrmTasksIdQueryKey(
  args: InferRequestType<(typeof client.crm.tasks)[':id']['$get']>,
) {
  return ['crm', '/crm/tasks/:id', args] as const
}

export function getCrmTasksIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crm.tasks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.tasks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.tasks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmTasksIdQueryKey>
  >({
    queryKey: getCrmTasksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.tasks[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCrmTasksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crm.tasks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.crm.tasks)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.crm.tasks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmTasksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCrmTasksIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteCrmTasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.tasks)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.crm.tasks)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCrmTasksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchCrmTasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.tasks)[':id']['$patch']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.crm.tasks)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCrmTasksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCrmTasktypesQueryKey() {
  return ['crm', '/crm/tasktypes'] as const
}

export function getCrmTasktypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasktypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasktypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCrmTasktypesQueryKey>
  >({
    queryKey: getCrmTasktypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.tasktypes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCrmTasktypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasktypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasktypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCrmTasktypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCrmTasktypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostWhatsappSendMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp.sendMessage.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.whatsapp.sendMessage.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWhatsappSendMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWhatsappStatisticsEventsQueryKey(
  args: InferRequestType<typeof client.whatsapp.statistics.events.$get>,
) {
  return ['whatsapp', '/whatsapp/statistics/events', args] as const
}

export function getWhatsappStatisticsEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp.statistics.events.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.whatsapp.statistics.events.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp.statistics.events.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhatsappStatisticsEventsQueryKey>
  >({
    queryKey: getWhatsappStatisticsEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whatsapp.statistics.events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWhatsappStatisticsEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp.statistics.events.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.whatsapp.statistics.events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp.statistics.events.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWhatsappStatisticsEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWhatsappStatisticsEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSmtpBlockedContactsQueryKey(
  args: InferRequestType<typeof client.smtp.blockedContacts.$get>,
) {
  return ['smtp', '/smtp/blockedContacts', args] as const
}

export function getSmtpBlockedContactsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedContacts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.smtp.blockedContacts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedContacts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSmtpBlockedContactsQueryKey>
  >({
    queryKey: getSmtpBlockedContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.smtp.blockedContacts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSmtpBlockedContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedContacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.smtp.blockedContacts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedContacts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmtpBlockedContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSmtpBlockedContactsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteSmtpBlockedContactsEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSmtpBlockedContactsEmailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSmtpBlockedDomainsQueryKey() {
  return ['smtp', '/smtp/blockedDomains'] as const
}

export function getSmtpBlockedDomainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedDomains.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedDomains.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSmtpBlockedDomainsQueryKey>
  >({
    queryKey: getSmtpBlockedDomainsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.smtp.blockedDomains.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSmtpBlockedDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedDomains.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedDomains.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmtpBlockedDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSmtpBlockedDomainsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSmtpBlockedDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedDomains.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.smtp.blockedDomains.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSmtpBlockedDomainsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteSmtpBlockedDomainsDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSmtpBlockedDomainsDomainMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSmtpDeleteHardbounces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.smtp.deleteHardbounces.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.smtp.deleteHardbounces.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSmtpDeleteHardbouncesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSmtpEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.email.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.smtp.email.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSmtpEmailMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteSmtpEmailIdentifier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSmtpEmailIdentifierMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSmtpEmailStatusIdentifierQueryKey(
  args: InferRequestType<(typeof client.smtp.emailStatus)[':identifier']['$get']>,
) {
  return ['smtp', '/smtp/emailStatus/:identifier', args] as const
}

export function getSmtpEmailStatusIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.smtp.emailStatus)[':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.smtp.emailStatus)[':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSmtpEmailStatusIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.smtp.emailStatus[':identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSmtpEmailStatusIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.smtp.emailStatus)[':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.smtp.emailStatus)[':identifier']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSmtpEmailStatusIdentifierQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSmtpEmailsQueryKey(args: InferRequestType<typeof client.smtp.emails.$get>) {
  return ['smtp', '/smtp/emails', args] as const
}

export function getSmtpEmailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.emails.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.smtp.emails.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.emails.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSmtpEmailsQueryKey>
  >({
    queryKey: getSmtpEmailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.smtp.emails.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSmtpEmails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.emails.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.smtp.emails.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.emails.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSmtpEmailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSmtpEmailsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSmtpEmailsUuidQueryKey(
  args: InferRequestType<(typeof client.smtp.emails)[':uuid']['$get']>,
) {
  return ['smtp', '/smtp/emails/:uuid', args] as const
}

export function getSmtpEmailsUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.smtp.emails)[':uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.smtp.emails)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.smtp.emails)[':uuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmtpEmailsUuidQueryKey>
  >({
    queryKey: getSmtpEmailsUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.smtp.emails[':uuid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSmtpEmailsUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.smtp.emails)[':uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.smtp.emails)[':uuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.smtp.emails)[':uuid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmtpEmailsUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSmtpEmailsUuidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteSmtpLogIdentifier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSmtpLogIdentifierMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSmtpStatisticsAggregatedReportQueryKey(
  args: InferRequestType<typeof client.smtp.statistics.aggregatedReport.$get>,
) {
  return ['smtp', '/smtp/statistics/aggregatedReport', args] as const
}

export function getSmtpStatisticsAggregatedReportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.aggregatedReport.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.smtp.statistics.aggregatedReport.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSmtpStatisticsAggregatedReportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.smtp.statistics.aggregatedReport.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSmtpStatisticsAggregatedReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.aggregatedReport.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.smtp.statistics.aggregatedReport.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSmtpStatisticsAggregatedReportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSmtpStatisticsEventsQueryKey(
  args: InferRequestType<typeof client.smtp.statistics.events.$get>,
) {
  return ['smtp', '/smtp/statistics/events', args] as const
}

export function getSmtpStatisticsEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.smtp.statistics.events.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.events.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmtpStatisticsEventsQueryKey>
  >({
    queryKey: getSmtpStatisticsEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.smtp.statistics.events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSmtpStatisticsEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.smtp.statistics.events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.events.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmtpStatisticsEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSmtpStatisticsEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSmtpStatisticsReportsQueryKey(
  args: InferRequestType<typeof client.smtp.statistics.reports.$get>,
) {
  return ['smtp', '/smtp/statistics/reports', args] as const
}

export function getSmtpStatisticsReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.smtp.statistics.reports.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.reports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmtpStatisticsReportsQueryKey>
  >({
    queryKey: getSmtpStatisticsReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.smtp.statistics.reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSmtpStatisticsReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.smtp.statistics.reports.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.reports.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmtpStatisticsReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSmtpStatisticsReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostSmtpTemplatePreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.smtp.template.preview.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.smtp.template.preview.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSmtpTemplatePreviewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSmtpTemplatesQueryKey(
  args: InferRequestType<typeof client.smtp.templates.$get>,
) {
  return ['smtp', '/smtp/templates', args] as const
}

export function getSmtpTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.smtp.templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSmtpTemplatesQueryKey>
  >({
    queryKey: getSmtpTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.smtp.templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSmtpTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.smtp.templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSmtpTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSmtpTemplatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSmtpTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.templates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.smtp.templates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSmtpTemplatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSmtpTemplatesTemplateIdQueryKey(
  args: InferRequestType<(typeof client.smtp.templates)[':templateId']['$get']>,
) {
  return ['smtp', '/smtp/templates/:templateId', args] as const
}

export function getSmtpTemplatesTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.smtp.templates)[':templateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.smtp.templates)[':templateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSmtpTemplatesTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.smtp.templates[':templateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSmtpTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.smtp.templates)[':templateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.smtp.templates)[':templateId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSmtpTemplatesTemplateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutSmtpTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSmtpTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteSmtpTemplatesTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSmtpTemplatesTemplateIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSmtpTemplatesTemplateIdSendTest<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSmtpTemplatesTemplateIdSendTestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostTransactionalSMSSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transactionalSMS.send.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transactionalSMS.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTransactionalSMSSendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostTransactionalSMSSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transactionalSMS.sms.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transactionalSMS.sms.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTransactionalSMSSmsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTransactionalSMSStatisticsAggregatedReportQueryKey(
  args: InferRequestType<typeof client.transactionalSMS.statistics.aggregatedReport.$get>,
) {
  return ['transactionalSMS', '/transactionalSMS/statistics/aggregatedReport', args] as const
}

export function getTransactionalSMSStatisticsAggregatedReportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.transactionalSMS.statistics.aggregatedReport.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.transactionalSMS.statistics.aggregatedReport.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTransactionalSMSStatisticsAggregatedReportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transactionalSMS.statistics.aggregatedReport.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTransactionalSMSStatisticsAggregatedReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.transactionalSMS.statistics.aggregatedReport.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.transactionalSMS.statistics.aggregatedReport.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTransactionalSMSStatisticsAggregatedReportQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getTransactionalSMSStatisticsEventsQueryKey(
  args: InferRequestType<typeof client.transactionalSMS.statistics.events.$get>,
) {
  return ['transactionalSMS', '/transactionalSMS/statistics/events', args] as const
}

export function getTransactionalSMSStatisticsEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.transactionalSMS.statistics.events.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.transactionalSMS.statistics.events.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTransactionalSMSStatisticsEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transactionalSMS.statistics.events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTransactionalSMSStatisticsEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.transactionalSMS.statistics.events.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.transactionalSMS.statistics.events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTransactionalSMSStatisticsEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTransactionalSMSStatisticsReportsQueryKey(
  args: InferRequestType<typeof client.transactionalSMS.statistics.reports.$get>,
) {
  return ['transactionalSMS', '/transactionalSMS/statistics/reports', args] as const
}

export function getTransactionalSMSStatisticsReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.transactionalSMS.statistics.reports.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.transactionalSMS.statistics.reports.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTransactionalSMSStatisticsReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transactionalSMS.statistics.reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTransactionalSMSStatisticsReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.transactionalSMS.statistics.reports.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.transactionalSMS.statistics.reports.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTransactionalSMSStatisticsReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTransactionalSMSTemplatesQueryKey(
  args: InferRequestType<typeof client.transactionalSMS.templates.$get>,
) {
  return ['transactionalSMS', '/transactionalSMS/templates', args] as const
}

export function getTransactionalSMSTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.transactionalSMS.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.transactionalSMS.templates.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transactionalSMS.templates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionalSMSTemplatesQueryKey>
  >({
    queryKey: getTransactionalSMSTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transactionalSMS.templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTransactionalSMSTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.transactionalSMS.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.transactionalSMS.templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transactionalSMS.templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionalSMSTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTransactionalSMSTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
