import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAccountKey() {
  return ['account', '/account'] as const
}

export function useGetAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCorporateGroupKey() {
  return ['corporate', '/corporate/group', 'POST'] as const
}

export function usePostCorporateGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.group.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.corporate.group.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCorporateGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.corporate.group.$post> }) =>
        parseResponse(client.corporate.group.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCorporateGroupUnlinkGroupIdSubAccountsKey() {
  return ['corporate', '/corporate/group/unlink/:groupId/subAccounts', 'PUT'] as const
}

export function usePutCorporateGroupUnlinkGroupIdSubAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.corporate.group.unlink)[':groupId']['subAccounts']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCorporateGroupUnlinkGroupIdSubAccountsKey()
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
            (typeof client.corporate.group.unlink)[':groupId']['subAccounts']['$put']
          >
        },
      ) =>
        parseResponse(
          client.corporate.group.unlink[':groupId'].subAccounts.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCorporateGroupIdKey(
  args: InferRequestType<(typeof client.corporate.group)[':id']['$get']>,
) {
  return ['corporate', '/corporate/group/:id', args] as const
}

export function useGetCorporateGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.corporate.group)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.corporate.group)[':id']['$get']>>>
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
        ? getGetCorporateGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.corporate.group)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate.group[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCorporateGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.corporate.group)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.corporate.group)[':id']['$get']>>>
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
        ? getGetCorporateGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.corporate.group)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate.group[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCorporateGroupIdKey() {
  return ['corporate', '/corporate/group/:id', 'PUT'] as const
}

export function usePutCorporateGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.corporate.group)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.corporate.group)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCorporateGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.corporate.group)[':id']['$put']> },
      ) => parseResponse(client.corporate.group[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCorporateGroupIdKey() {
  return ['corporate', '/corporate/group/:id', 'DELETE'] as const
}

export function useDeleteCorporateGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporate.group)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.corporate.group)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCorporateGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.corporate.group)[':id']['$delete']> },
      ) => parseResponse(client.corporate.group[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCorporateGroupsKey() {
  return ['corporate', '/corporate/groups'] as const
}

export function useGetCorporateGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.groups.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCorporateGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate.groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCorporateGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.groups.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCorporateGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate.groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCorporateInvitedUsersKey(
  args: InferRequestType<typeof client.corporate.invited.users.$get>,
) {
  return ['corporate', '/corporate/invited/users', args] as const
}

export function useGetCorporateInvitedUsers<TError = unknown>(
  args: InferRequestType<typeof client.corporate.invited.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.corporate.invited.users.$get>>>
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
        ? getGetCorporateInvitedUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.corporate.invited.users.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate.invited.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCorporateInvitedUsers<TError = unknown>(
  args: InferRequestType<typeof client.corporate.invited.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.corporate.invited.users.$get>>>
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
        ? getGetCorporateInvitedUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.corporate.invited.users.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate.invited.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCorporateIpKey() {
  return ['corporate', '/corporate/ip'] as const
}

export function useGetCorporateIp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.ip.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCorporateIpKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.ip.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate.ip.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCorporateIp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.ip.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCorporateIpKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.ip.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate.ip.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCorporateMasterAccountKey() {
  return ['corporate', '/corporate/masterAccount'] as const
}

export function useGetCorporateMasterAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.corporate.masterAccount.$get>>>
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
        ? getGetCorporateMasterAccountKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.corporate.masterAccount.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate.masterAccount.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCorporateMasterAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.corporate.masterAccount.$get>>>
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
        ? getGetCorporateMasterAccountKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.corporate.masterAccount.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate.masterAccount.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCorporateSsoTokenKey() {
  return ['corporate', '/corporate/ssoToken', 'POST'] as const
}

export function usePostCorporateSsoToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.ssoToken.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.corporate.ssoToken.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCorporateSsoTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.corporate.ssoToken.$post> }) =>
        parseResponse(client.corporate.ssoToken.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCorporateSubAccountKey(
  args: InferRequestType<typeof client.corporate.subAccount.$get>,
) {
  return ['corporate', '/corporate/subAccount', args] as const
}

export function useGetCorporateSubAccount<TError = unknown>(
  args: InferRequestType<typeof client.corporate.subAccount.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.$get>>>
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
        ? getGetCorporateSubAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate.subAccount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCorporateSubAccount<TError = unknown>(
  args: InferRequestType<typeof client.corporate.subAccount.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.$get>>>
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
        ? getGetCorporateSubAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate.subAccount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCorporateSubAccountKey() {
  return ['corporate', '/corporate/subAccount', 'POST'] as const
}

export function usePostCorporateSubAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.corporate.subAccount.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCorporateSubAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.corporate.subAccount.$post> },
      ) => parseResponse(client.corporate.subAccount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCorporateSubAccountIpAssociateKey() {
  return ['corporate', '/corporate/subAccount/ip/associate', 'POST'] as const
}

export function usePostCorporateSubAccountIpAssociate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.corporate.subAccount.ip.associate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.corporate.subAccount.ip.associate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCorporateSubAccountIpAssociateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.corporate.subAccount.ip.associate.$post> },
      ) => parseResponse(client.corporate.subAccount.ip.associate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCorporateSubAccountIpDissociateKey() {
  return ['corporate', '/corporate/subAccount/ip/dissociate', 'PUT'] as const
}

export function usePutCorporateSubAccountIpDissociate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.corporate.subAccount.ip.dissociate.$put>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.corporate.subAccount.ip.dissociate.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCorporateSubAccountIpDissociateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.corporate.subAccount.ip.dissociate.$put> },
      ) => parseResponse(client.corporate.subAccount.ip.dissociate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCorporateSubAccountKeyKey() {
  return ['corporate', '/corporate/subAccount/key', 'POST'] as const
}

export function usePostCorporateSubAccountKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.key.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.corporate.subAccount.key.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCorporateSubAccountKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.corporate.subAccount.key.$post> },
      ) => parseResponse(client.corporate.subAccount.key.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCorporateSubAccountSsoTokenKey() {
  return ['corporate', '/corporate/subAccount/ssoToken', 'POST'] as const
}

export function usePostCorporateSubAccountSsoToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.ssoToken.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.corporate.subAccount.ssoToken.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCorporateSubAccountSsoTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.corporate.subAccount.ssoToken.$post> },
      ) => parseResponse(client.corporate.subAccount.ssoToken.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCorporateSubAccountIdKey(
  args: InferRequestType<(typeof client.corporate.subAccount)[':id']['$get']>,
) {
  return ['corporate', '/corporate/subAccount/:id', args] as const
}

export function useGetCorporateSubAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.corporate.subAccount)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporate.subAccount)[':id']['$get']>>
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
        ? getGetCorporateSubAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporate.subAccount)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate.subAccount[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCorporateSubAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.corporate.subAccount)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporate.subAccount)[':id']['$get']>>
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
        ? getGetCorporateSubAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporate.subAccount)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate.subAccount[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCorporateSubAccountIdKey() {
  return ['corporate', '/corporate/subAccount/:id', 'DELETE'] as const
}

export function useDeleteCorporateSubAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporate.subAccount)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.corporate.subAccount)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCorporateSubAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.corporate.subAccount)[':id']['$delete']> },
      ) => parseResponse(client.corporate.subAccount[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCorporateSubAccountIdApplicationsToggleKey() {
  return ['corporate', '/corporate/subAccount/:id/applications/toggle', 'PUT'] as const
}

export function usePutCorporateSubAccountIdApplicationsToggle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.corporate.subAccount)[':id']['applications']['toggle']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCorporateSubAccountIdApplicationsToggleKey()
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
            (typeof client.corporate.subAccount)[':id']['applications']['toggle']['$put']
          >
        },
      ) =>
        parseResponse(
          client.corporate.subAccount[':id'].applications.toggle.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCorporateSubAccountIdPlanKey() {
  return ['corporate', '/corporate/subAccount/:id/plan', 'PUT'] as const
}

export function usePutCorporateSubAccountIdPlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporate.subAccount)[':id']['plan']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.corporate.subAccount)[':id']['plan']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCorporateSubAccountIdPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.corporate.subAccount)[':id']['plan']['$put']> },
      ) => parseResponse(client.corporate.subAccount[':id'].plan.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCorporateSubAccountsPlanKey() {
  return ['corporate', '/corporate/subAccounts/plan', 'PUT'] as const
}

export function usePutCorporateSubAccountsPlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccounts.plan.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.corporate.subAccounts.plan.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCorporateSubAccountsPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.corporate.subAccounts.plan.$put> },
      ) => parseResponse(client.corporate.subAccounts.plan.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCorporateUserInvitationSendKey() {
  return ['corporate', '/corporate/user/invitation/send', 'POST'] as const
}

export function usePostCorporateUserInvitationSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.corporate.user.invitation.send.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.corporate.user.invitation.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCorporateUserInvitationSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.corporate.user.invitation.send.$post> },
      ) => parseResponse(client.corporate.user.invitation.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCorporateUserInvitationActionEmailKey() {
  return ['corporate', '/corporate/user/invitation/:action/:email', 'PUT'] as const
}

export function usePutCorporateUserInvitationActionEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.corporate.user.invitation)[':action'][':email']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCorporateUserInvitationActionEmailKey()
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
            (typeof client.corporate.user.invitation)[':action'][':email']['$put']
          >
        },
      ) =>
        parseResponse(
          client.corporate.user.invitation[':action'][':email'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCorporateUserRevokeEmailKey() {
  return ['corporate', '/corporate/user/revoke/:email', 'DELETE'] as const
}

export function useDeleteCorporateUserRevokeEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporate.user.revoke)[':email']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.corporate.user.revoke)[':email']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCorporateUserRevokeEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.corporate.user.revoke)[':email']['$delete']> },
      ) => parseResponse(client.corporate.user.revoke[':email'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCorporateUserEmailPermissionsKey(
  args: InferRequestType<(typeof client.corporate.user)[':email']['permissions']['$get']>,
) {
  return ['corporate', '/corporate/user/:email/permissions', args] as const
}

export function useGetCorporateUserEmailPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.corporate.user)[':email']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporate.user)[':email']['permissions']['$get']>>
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
        ? getGetCorporateUserEmailPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporate.user)[':email']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.corporate.user[':email'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCorporateUserEmailPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.corporate.user)[':email']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporate.user)[':email']['permissions']['$get']>>
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
        ? getGetCorporateUserEmailPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporate.user)[':email']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.corporate.user[':email'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCorporateUserEmailPermissionsKey() {
  return ['corporate', '/corporate/user/:email/permissions', 'PUT'] as const
}

export function usePutCorporateUserEmailPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporate.user)[':email']['permissions']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.corporate.user)[':email']['permissions']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCorporateUserEmailPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.corporate.user)[':email']['permissions']['$put']>
        },
      ) => parseResponse(client.corporate.user[':email'].permissions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationActivitiesKey(
  args: InferRequestType<typeof client.organization.activities.$get>,
) {
  return ['organization', '/organization/activities', args] as const
}

export function useGetOrganizationActivities<TError = unknown>(
  args: InferRequestType<typeof client.organization.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.activities.$get>>>
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
        ? getGetOrganizationActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.activities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationActivities<TError = unknown>(
  args: InferRequestType<typeof client.organization.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.activities.$get>>>
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
        ? getGetOrganizationActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.activities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationInvitedUsersKey() {
  return ['organization', '/organization/invited/users'] as const
}

export function useGetOrganizationInvitedUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.invited.users.$get>>>
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
        ? getGetOrganizationInvitedUsersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.invited.users.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.invited.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationInvitedUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.invited.users.$get>>>
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
        ? getGetOrganizationInvitedUsersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.invited.users.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.invited.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationUserInvitationRevokeEmailKey() {
  return ['organization', '/organization/user/invitation/revoke/:email', 'PUT'] as const
}

export function usePutOrganizationUserInvitationRevokeEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.user.invitation.revoke)[':email']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.user.invitation.revoke)[':email']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationUserInvitationRevokeEmailKey()
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
            (typeof client.organization.user.invitation.revoke)[':email']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organization.user.invitation.revoke[':email'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationUserInvitationSendKey() {
  return ['organization', '/organization/user/invitation/send', 'POST'] as const
}

export function usePostOrganizationUserInvitationSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.organization.user.invitation.send.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.user.invitation.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationUserInvitationSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization.user.invitation.send.$post> },
      ) => parseResponse(client.organization.user.invitation.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationUserInvitationActionEmailKey() {
  return ['organization', '/organization/user/invitation/:action/:email', 'PUT'] as const
}

export function usePutOrganizationUserInvitationActionEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.organization.user.invitation)[':action'][':email']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationUserInvitationActionEmailKey()
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
            (typeof client.organization.user.invitation)[':action'][':email']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organization.user.invitation[':action'][':email'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationUserUpdatePermissionsKey() {
  return ['organization', '/organization/user/update/permissions', 'POST'] as const
}

export function usePostOrganizationUserUpdatePermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.organization.user.update.permissions.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.user.update.permissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationUserUpdatePermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.organization.user.update.permissions.$post> },
      ) => parseResponse(client.organization.user.update.permissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationUserEmailPermissionsKey(
  args: InferRequestType<(typeof client.organization.user)[':email']['permissions']['$get']>,
) {
  return ['organization', '/organization/user/:email/permissions', args] as const
}

export function useGetOrganizationUserEmailPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.organization.user)[':email']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.user)[':email']['permissions']['$get']>>
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
        ? getGetOrganizationUserEmailPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.user)[':email']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.user[':email'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationUserEmailPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.organization.user)[':email']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.user)[':email']['permissions']['$get']>>
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
        ? getGetOrganizationUserEmailPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organization.user)[':email']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organization.user[':email'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProcessesKey(args: InferRequestType<typeof client.processes.$get>) {
  return ['processes', '/processes', args] as const
}

export function useGetProcesses<TError = unknown>(
  args: InferRequestType<typeof client.processes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProcessesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.processes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProcesses<TError = unknown>(
  args: InferRequestType<typeof client.processes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProcessesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.processes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProcessesProcessIdKey(
  args: InferRequestType<(typeof client.processes)[':processId']['$get']>,
) {
  return ['processes', '/processes/:processId', args] as const
}

export function useGetProcessesProcessId<TError = unknown>(
  args: InferRequestType<(typeof client.processes)[':processId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.processes)[':processId']['$get']>>>
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
        ? getGetProcessesProcessIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.processes)[':processId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.processes[':processId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProcessesProcessId<TError = unknown>(
  args: InferRequestType<(typeof client.processes)[':processId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.processes)[':processId']['$get']>>>
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
        ? getGetProcessesProcessIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.processes)[':processId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.processes[':processId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSendersKey(args: InferRequestType<typeof client.senders.$get>) {
  return ['senders', '/senders', args] as const
}

export function useGetSenders<TError = unknown>(
  args: InferRequestType<typeof client.senders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSendersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.senders.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSenders<TError = unknown>(
  args: InferRequestType<typeof client.senders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSendersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.senders.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSendersKey() {
  return ['senders', '/senders', 'POST'] as const
}

export function usePostSenders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.senders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.senders.$post> }) =>
        parseResponse(client.senders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSendersDomainsKey() {
  return ['senders', '/senders/domains'] as const
}

export function useGetSendersDomains<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.domains.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSendersDomainsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.domains.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.senders.domains.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSendersDomains<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.domains.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSendersDomainsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.domains.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.senders.domains.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSendersDomainsKey() {
  return ['senders', '/senders/domains', 'POST'] as const
}

export function usePostSendersDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.domains.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.senders.domains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendersDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.senders.domains.$post> }) =>
        parseResponse(client.senders.domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSendersDomainsDomainNameKey(
  args: InferRequestType<(typeof client.senders.domains)[':domainName']['$get']>,
) {
  return ['senders', '/senders/domains/:domainName', args] as const
}

export function useGetSendersDomainsDomainName<TError = unknown>(
  args: InferRequestType<(typeof client.senders.domains)[':domainName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.senders.domains)[':domainName']['$get']>>
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
        ? getGetSendersDomainsDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.senders.domains)[':domainName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.senders.domains[':domainName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSendersDomainsDomainName<TError = unknown>(
  args: InferRequestType<(typeof client.senders.domains)[':domainName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.senders.domains)[':domainName']['$get']>>
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
        ? getGetSendersDomainsDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.senders.domains)[':domainName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.senders.domains[':domainName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSendersDomainsDomainNameKey() {
  return ['senders', '/senders/domains/:domainName', 'DELETE'] as const
}

export function useDeleteSendersDomainsDomainName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.senders.domains)[':domainName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.senders.domains)[':domainName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSendersDomainsDomainNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.senders.domains)[':domainName']['$delete']> },
      ) => parseResponse(client.senders.domains[':domainName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSendersDomainsDomainNameAuthenticateKey() {
  return ['senders', '/senders/domains/:domainName/authenticate', 'PUT'] as const
}

export function usePutSendersDomainsDomainNameAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.senders.domains)[':domainName']['authenticate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSendersDomainsDomainNameAuthenticateKey()
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
            (typeof client.senders.domains)[':domainName']['authenticate']['$put']
          >
        },
      ) =>
        parseResponse(client.senders.domains[':domainName'].authenticate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSendersIpsKey() {
  return ['senders', '/senders/ips'] as const
}

export function useGetSendersIps<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.ips.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSendersIpsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.ips.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.senders.ips.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSendersIps<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.ips.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSendersIpsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.ips.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.senders.ips.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSendersSenderIdKey() {
  return ['senders', '/senders/:senderId', 'PUT'] as const
}

export function usePutSendersSenderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.senders)[':senderId']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.senders)[':senderId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSendersSenderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.senders)[':senderId']['$put']> },
      ) => parseResponse(client.senders[':senderId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSendersSenderIdKey() {
  return ['senders', '/senders/:senderId', 'DELETE'] as const
}

export function useDeleteSendersSenderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.senders)[':senderId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.senders)[':senderId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSendersSenderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.senders)[':senderId']['$delete']> },
      ) => parseResponse(client.senders[':senderId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSendersSenderIdIpsKey(
  args: InferRequestType<(typeof client.senders)[':senderId']['ips']['$get']>,
) {
  return ['senders', '/senders/:senderId/ips', args] as const
}

export function useGetSendersSenderIdIps<TError = unknown>(
  args: InferRequestType<(typeof client.senders)[':senderId']['ips']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.senders)[':senderId']['ips']['$get']>>
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
        ? getGetSendersSenderIdIpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.senders)[':senderId']['ips']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.senders[':senderId'].ips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSendersSenderIdIps<TError = unknown>(
  args: InferRequestType<(typeof client.senders)[':senderId']['ips']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.senders)[':senderId']['ips']['$get']>>
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
        ? getGetSendersSenderIdIpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.senders)[':senderId']['ips']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.senders[':senderId'].ips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSendersSenderIdValidateKey() {
  return ['senders', '/senders/:senderId/validate', 'PUT'] as const
}

export function usePutSendersSenderIdValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.senders)[':senderId']['validate']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.senders)[':senderId']['validate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSendersSenderIdValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.senders)[':senderId']['validate']['$put']> },
      ) => parseResponse(client.senders[':senderId'].validate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksKey(args: InferRequestType<typeof client.webhooks.$get>) {
  return ['webhooks', '/webhooks', args] as const
}

export function useGetWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.webhooks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.webhooks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostWebhooksKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function usePostWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.$post> }) =>
        parseResponse(client.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksExportKey() {
  return ['webhooks', '/webhooks/export', 'POST'] as const
}

export function usePostWebhooksExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.export.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.export.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.export.$post> }) =>
        parseResponse(client.webhooks.export.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksWebhookIdKey(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhookId', args] as const
}

export function useGetWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
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
        ? getGetWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':webhookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
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
        ? getGetWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':webhookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWebhooksWebhookIdKey() {
  return ['webhooks', '/webhooks/:webhookId', 'PUT'] as const
}

export function usePutWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':webhookId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':webhookId']['$put']> },
      ) => parseResponse(client.webhooks[':webhookId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhooksWebhookIdKey() {
  return ['webhooks', '/webhooks/:webhookId', 'DELETE'] as const
}

export function useDeleteWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']> },
      ) => parseResponse(client.webhooks[':webhookId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFeedsKey(args: InferRequestType<typeof client.feeds.$get>) {
  return ['feeds', '/feeds', args] as const
}

export function useGetFeeds<TError = unknown>(
  args: InferRequestType<typeof client.feeds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeedsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.feeds.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFeeds<TError = unknown>(
  args: InferRequestType<typeof client.feeds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeedsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.feeds.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostFeedsKey() {
  return ['feeds', '/feeds', 'POST'] as const
}

export function usePostFeeds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.feeds.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeedsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.feeds.$post> }) =>
        parseResponse(client.feeds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFeedsUuidKey(args: InferRequestType<(typeof client.feeds)[':uuid']['$get']>) {
  return ['feeds', '/feeds/:uuid', args] as const
}

export function useGetFeedsUuid<TError = unknown>(
  args: InferRequestType<(typeof client.feeds)[':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':uuid']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFeedsUuidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':uuid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.feeds[':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeedsUuid<TError = unknown>(
  args: InferRequestType<(typeof client.feeds)[':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':uuid']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFeedsUuidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':uuid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.feeds[':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFeedsUuidKey() {
  return ['feeds', '/feeds/:uuid', 'PUT'] as const
}

export function usePutFeedsUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':uuid']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.feeds)[':uuid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFeedsUuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.feeds)[':uuid']['$put']> }) =>
        parseResponse(client.feeds[':uuid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFeedsUuidKey() {
  return ['feeds', '/feeds/:uuid', 'DELETE'] as const
}

export function useDeleteFeedsUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':uuid']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.feeds)[':uuid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFeedsUuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.feeds)[':uuid']['$delete']> },
      ) => parseResponse(client.feeds[':uuid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostObjectsObjectTypeBatchUpsertKey() {
  return ['objects', '/objects/:object_type/batch/upsert', 'POST'] as const
}

export function usePostObjectsObjectTypeBatchUpsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects)[':object_type']['batch']['upsert']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.objects)[':object_type']['batch']['upsert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObjectsObjectTypeBatchUpsertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.objects)[':object_type']['batch']['upsert']['$post']>
        },
      ) => parseResponse(client.objects[':object_type'].batch.upsert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetObjectsObjectTypeRecordsKey(
  args: InferRequestType<(typeof client.objects)[':object_type']['records']['$get']>,
) {
  return ['objects', '/objects/:object_type/records', args] as const
}

export function useGetObjectsObjectTypeRecords<TError = unknown>(
  args: InferRequestType<(typeof client.objects)[':object_type']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects)[':object_type']['records']['$get']>>
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
        ? getGetObjectsObjectTypeRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects)[':object_type']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.objects[':object_type'].records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectsObjectTypeRecords<TError = unknown>(
  args: InferRequestType<(typeof client.objects)[':object_type']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects)[':object_type']['records']['$get']>>
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
        ? getGetObjectsObjectTypeRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects)[':object_type']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.objects[':object_type'].records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostObjectsObjectTypeBatchDeleteKey() {
  return ['objects', '/objects/:object_type/batch/delete', 'POST'] as const
}

export function usePostObjectsObjectTypeBatchDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects)[':object_type']['batch']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.objects)[':object_type']['batch']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObjectsObjectTypeBatchDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.objects)[':object_type']['batch']['delete']['$post']>
        },
      ) => parseResponse(client.objects[':object_type'].batch.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetObjectsObjectTypeAssociatedRecordsKey(
  args: InferRequestType<(typeof client.objects)[':object_type']['associated-records']['$get']>,
) {
  return ['objects', '/objects/:object_type/associated-records', args] as const
}

export function useGetObjectsObjectTypeAssociatedRecords<TError = unknown>(
  args: InferRequestType<(typeof client.objects)[':object_type']['associated-records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.objects)[':object_type']['associated-records']['$get']>
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
        ? getGetObjectsObjectTypeAssociatedRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.objects)[':object_type']['associated-records']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.objects[':object_type']['associated-records'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectsObjectTypeAssociatedRecords<TError = unknown>(
  args: InferRequestType<(typeof client.objects)[':object_type']['associated-records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.objects)[':object_type']['associated-records']['$get']>
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
        ? getGetObjectsObjectTypeAssociatedRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.objects)[':object_type']['associated-records']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.objects[':object_type']['associated-records'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetContactsKey(args: InferRequestType<typeof client.contacts.$get>) {
  return ['contacts', '/contacts', args] as const
}

export function useGetContacts<TError = unknown>(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.contacts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetContacts<TError = unknown>(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.contacts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostContactsKey() {
  return ['contacts', '/contacts', 'POST'] as const
}

export function usePostContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.contacts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contacts.$post> }) =>
        parseResponse(client.contacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsAttributesKey() {
  return ['contacts', '/contacts/attributes'] as const
}

export function useGetContactsAttributes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.attributes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactsAttributesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contacts.attributes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.attributes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsAttributes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.attributes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactsAttributesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.contacts.attributes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.attributes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutContactsAttributesAttributeCategoryAttributeNameKey() {
  return ['contacts', '/contacts/attributes/:attributeCategory/:attributeName', 'PUT'] as const
}

export function usePutContactsAttributesAttributeCategoryAttributeName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContactsAttributesAttributeCategoryAttributeNameKey()
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
            (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.contacts.attributes[':attributeCategory'][':attributeName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostContactsAttributesAttributeCategoryAttributeNameKey() {
  return ['contacts', '/contacts/attributes/:attributeCategory/:attributeName', 'POST'] as const
}

export function usePostContactsAttributesAttributeCategoryAttributeName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsAttributesAttributeCategoryAttributeNameKey()
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
            (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.contacts.attributes[':attributeCategory'][':attributeName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteContactsAttributesAttributeCategoryAttributeNameKey() {
  return ['contacts', '/contacts/attributes/:attributeCategory/:attributeName', 'DELETE'] as const
}

export function useDeleteContactsAttributesAttributeCategoryAttributeName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactsAttributesAttributeCategoryAttributeNameKey()
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
            (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.contacts.attributes[':attributeCategory'][':attributeName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteContactsAttributesAttributeTypeMultipleChoiceAttributeMultipleChoiceAttributeOptionKey() {
  return [
    'contacts',
    '/contacts/attributes/:attributeType/:multipleChoiceAttribute/:multipleChoiceAttributeOption',
    'DELETE',
  ] as const
}

export function useDeleteContactsAttributesAttributeTypeMultipleChoiceAttributeMultipleChoiceAttributeOption<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.contacts.attributes)[':attributeType'][':multipleChoiceAttribute'][':multipleChoiceAttributeOption']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteContactsAttributesAttributeTypeMultipleChoiceAttributeMultipleChoiceAttributeOptionKey()
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
            (typeof client.contacts.attributes)[':attributeType'][':multipleChoiceAttribute'][':multipleChoiceAttributeOption']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.contacts.attributes[':attributeType'][':multipleChoiceAttribute'][
            ':multipleChoiceAttributeOption'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostContactsBatchKey() {
  return ['contacts', '/contacts/batch', 'POST'] as const
}

export function usePostContactsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.batch.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.contacts.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contacts.batch.$post> }) =>
        parseResponse(client.contacts.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactsDoubleOptinConfirmationKey() {
  return ['contacts', '/contacts/doubleOptinConfirmation', 'POST'] as const
}

export function usePostContactsDoubleOptinConfirmation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.contacts.doubleOptinConfirmation.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.contacts.doubleOptinConfirmation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsDoubleOptinConfirmationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.contacts.doubleOptinConfirmation.$post> },
      ) => parseResponse(client.contacts.doubleOptinConfirmation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactsExportKey() {
  return ['contacts', '/contacts/export', 'POST'] as const
}

export function usePostContactsExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.export.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.contacts.export.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contacts.export.$post> }) =>
        parseResponse(client.contacts.export.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsFoldersKey(
  args: InferRequestType<typeof client.contacts.folders.$get>,
) {
  return ['contacts', '/contacts/folders', args] as const
}

export function useGetContactsFolders<TError = unknown>(
  args: InferRequestType<typeof client.contacts.folders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.folders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.folders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsFolders<TError = unknown>(
  args: InferRequestType<typeof client.contacts.folders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.folders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.folders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactsFoldersKey() {
  return ['contacts', '/contacts/folders', 'POST'] as const
}

export function usePostContactsFolders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.folders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.contacts.folders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsFoldersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contacts.folders.$post> }) =>
        parseResponse(client.contacts.folders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsFoldersFolderIdKey(
  args: InferRequestType<(typeof client.contacts.folders)[':folderId']['$get']>,
) {
  return ['contacts', '/contacts/folders/:folderId', args] as const
}

export function useGetContactsFoldersFolderId<TError = unknown>(
  args: InferRequestType<(typeof client.contacts.folders)[':folderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['$get']>>
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
        ? getGetContactsFoldersFolderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.folders[':folderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsFoldersFolderId<TError = unknown>(
  args: InferRequestType<(typeof client.contacts.folders)[':folderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['$get']>>
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
        ? getGetContactsFoldersFolderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.folders[':folderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutContactsFoldersFolderIdKey() {
  return ['contacts', '/contacts/folders/:folderId', 'PUT'] as const
}

export function usePutContactsFoldersFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.contacts.folders)[':folderId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContactsFoldersFolderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contacts.folders)[':folderId']['$put']> },
      ) => parseResponse(client.contacts.folders[':folderId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteContactsFoldersFolderIdKey() {
  return ['contacts', '/contacts/folders/:folderId', 'DELETE'] as const
}

export function useDeleteContactsFoldersFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.contacts.folders)[':folderId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactsFoldersFolderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.contacts.folders)[':folderId']['$delete']> },
      ) => parseResponse(client.contacts.folders[':folderId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsFoldersFolderIdListsKey(
  args: InferRequestType<(typeof client.contacts.folders)[':folderId']['lists']['$get']>,
) {
  return ['contacts', '/contacts/folders/:folderId/lists', args] as const
}

export function useGetContactsFoldersFolderIdLists<TError = unknown>(
  args: InferRequestType<(typeof client.contacts.folders)[':folderId']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['lists']['$get']>>
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
        ? getGetContactsFoldersFolderIdListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contacts.folders[':folderId'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsFoldersFolderIdLists<TError = unknown>(
  args: InferRequestType<(typeof client.contacts.folders)[':folderId']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['lists']['$get']>>
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
        ? getGetContactsFoldersFolderIdListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contacts.folders[':folderId'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactsImportKey() {
  return ['contacts', '/contacts/import', 'POST'] as const
}

export function usePostContactsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.import.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.contacts.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contacts.import.$post> }) =>
        parseResponse(client.contacts.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsListsKey(args: InferRequestType<typeof client.contacts.lists.$get>) {
  return ['contacts', '/contacts/lists', args] as const
}

export function useGetContactsLists<TError = unknown>(
  args: InferRequestType<typeof client.contacts.lists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.lists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactsListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.lists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsLists<TError = unknown>(
  args: InferRequestType<typeof client.contacts.lists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.lists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactsListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.lists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactsListsKey() {
  return ['contacts', '/contacts/lists', 'POST'] as const
}

export function usePostContactsLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.lists.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.contacts.lists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contacts.lists.$post> }) =>
        parseResponse(client.contacts.lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsListsListIdKey(
  args: InferRequestType<(typeof client.contacts.lists)[':listId']['$get']>,
) {
  return ['contacts', '/contacts/lists/:listId', args] as const
}

export function useGetContactsListsListId<TError = unknown>(
  args: InferRequestType<(typeof client.contacts.lists)[':listId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['$get']>>
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
        ? getGetContactsListsListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.lists[':listId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsListsListId<TError = unknown>(
  args: InferRequestType<(typeof client.contacts.lists)[':listId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['$get']>>
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
        ? getGetContactsListsListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.lists[':listId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutContactsListsListIdKey() {
  return ['contacts', '/contacts/lists/:listId', 'PUT'] as const
}

export function usePutContactsListsListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.contacts.lists)[':listId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContactsListsListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contacts.lists)[':listId']['$put']> },
      ) => parseResponse(client.contacts.lists[':listId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteContactsListsListIdKey() {
  return ['contacts', '/contacts/lists/:listId', 'DELETE'] as const
}

export function useDeleteContactsListsListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.contacts.lists)[':listId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactsListsListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contacts.lists)[':listId']['$delete']> },
      ) => parseResponse(client.contacts.lists[':listId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsListsListIdContactsKey(
  args: InferRequestType<(typeof client.contacts.lists)[':listId']['contacts']['$get']>,
) {
  return ['contacts', '/contacts/lists/:listId/contacts', args] as const
}

export function useGetContactsListsListIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.contacts.lists)[':listId']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['contacts']['$get']>>
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
        ? getGetContactsListsListIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contacts.lists[':listId'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsListsListIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.contacts.lists)[':listId']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['contacts']['$get']>>
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
        ? getGetContactsListsListIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contacts.lists[':listId'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactsListsListIdContactsAddKey() {
  return ['contacts', '/contacts/lists/:listId/contacts/add', 'POST'] as const
}

export function usePostContactsListsListIdContactsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['contacts']['add']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contacts.lists)[':listId']['contacts']['add']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsListsListIdContactsAddKey()
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
            (typeof client.contacts.lists)[':listId']['contacts']['add']['$post']
          >
        },
      ) => parseResponse(client.contacts.lists[':listId'].contacts.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactsListsListIdContactsRemoveKey() {
  return ['contacts', '/contacts/lists/:listId/contacts/remove', 'POST'] as const
}

export function usePostContactsListsListIdContactsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.contacts.lists)[':listId']['contacts']['remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsListsListIdContactsRemoveKey()
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
            (typeof client.contacts.lists)[':listId']['contacts']['remove']['$post']
          >
        },
      ) =>
        parseResponse(client.contacts.lists[':listId'].contacts.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsSegmentsKey(
  args: InferRequestType<typeof client.contacts.segments.$get>,
) {
  return ['contacts', '/contacts/segments', args] as const
}

export function useGetContactsSegments<TError = unknown>(
  args: InferRequestType<typeof client.contacts.segments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.segments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.segments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsSegments<TError = unknown>(
  args: InferRequestType<typeof client.contacts.segments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.segments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContactsSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.segments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactsConsentGroupsKey(
  args: InferRequestType<(typeof client.contacts)['consent-groups']['$get']>,
) {
  return ['contacts', '/contacts/consent-groups', args] as const
}

export function useGetContactsConsentGroups<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)['consent-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)['consent-groups']['$get']>>
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
        ? getGetContactsConsentGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)['consent-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts['consent-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsConsentGroups<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)['consent-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)['consent-groups']['$get']>>
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
        ? getGetContactsConsentGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)['consent-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts['consent-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactsConsentGroupsKey() {
  return ['contacts', '/contacts/consent-groups', 'POST'] as const
}

export function usePostContactsConsentGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)['consent-groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)['consent-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsConsentGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contacts)['consent-groups']['$post']> },
      ) => parseResponse(client.contacts['consent-groups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsConsentGroupsIdKey(
  args: InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$get']>,
) {
  return ['contacts', '/contacts/consent-groups/:id', args] as const
}

export function useGetContactsConsentGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)['consent-groups'][':id']['$get']>>
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
        ? getGetContactsConsentGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)['consent-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts['consent-groups'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsConsentGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)['consent-groups'][':id']['$get']>>
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
        ? getGetContactsConsentGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)['consent-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts['consent-groups'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutContactsConsentGroupsIdKey() {
  return ['contacts', '/contacts/consent-groups/:id', 'PUT'] as const
}

export function usePutContactsConsentGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)['consent-groups'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContactsConsentGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$put']> },
      ) => parseResponse(client.contacts['consent-groups'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteContactsConsentGroupsIdKey() {
  return ['contacts', '/contacts/consent-groups/:id', 'DELETE'] as const
}

export function useDeleteContactsConsentGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)['consent-groups'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactsConsentGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$delete']> },
      ) => parseResponse(client.contacts['consent-groups'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsIdentifierKey(
  args: InferRequestType<(typeof client.contacts)[':identifier']['$get']>,
) {
  return ['contacts', '/contacts/:identifier', args] as const
}

export function useGetContactsIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':identifier']['$get']>>>
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
        ? getGetContactsIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':identifier']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':identifier']['$get']>>>
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
        ? getGetContactsIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':identifier']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutContactsIdentifierKey() {
  return ['contacts', '/contacts/:identifier', 'PUT'] as const
}

export function usePutContactsIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':identifier']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)[':identifier']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContactsIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contacts)[':identifier']['$put']> },
      ) => parseResponse(client.contacts[':identifier'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteContactsIdentifierKey() {
  return ['contacts', '/contacts/:identifier', 'DELETE'] as const
}

export function useDeleteContactsIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)[':identifier']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactsIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contacts)[':identifier']['$delete']> },
      ) => parseResponse(client.contacts[':identifier'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsIdentifierCampaignStatsKey(
  args: InferRequestType<(typeof client.contacts)[':identifier']['campaignStats']['$get']>,
) {
  return ['contacts', '/contacts/:identifier/campaignStats', args] as const
}

export function useGetContactsIdentifierCampaignStats<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':identifier']['campaignStats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':identifier']['campaignStats']['$get']>>
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
        ? getGetContactsIdentifierCampaignStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':identifier']['campaignStats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contacts[':identifier'].campaignStats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsIdentifierCampaignStats<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':identifier']['campaignStats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':identifier']['campaignStats']['$get']>>
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
        ? getGetContactsIdentifierCampaignStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':identifier']['campaignStats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contacts[':identifier'].campaignStats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsAgentOnlinePingKey() {
  return ['conversations', '/conversations/agentOnlinePing', 'POST'] as const
}

export function usePostConversationsAgentOnlinePing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.agentOnlinePing.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversations.agentOnlinePing.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsAgentOnlinePingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.conversations.agentOnlinePing.$post> },
      ) => parseResponse(client.conversations.agentOnlinePing.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsMessagesKey() {
  return ['conversations', '/conversations/messages', 'POST'] as const
}

export function usePostConversationsMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.messages.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversations.messages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.conversations.messages.$post> },
      ) => parseResponse(client.conversations.messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsMessagesIdKey(
  args: InferRequestType<(typeof client.conversations.messages)[':id']['$get']>,
) {
  return ['conversations', '/conversations/messages/:id', args] as const
}

export function useGetConversationsMessagesId<TError = unknown>(
  args: InferRequestType<(typeof client.conversations.messages)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.messages)[':id']['$get']>>
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
        ? getGetConversationsMessagesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.messages)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.messages[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsMessagesId<TError = unknown>(
  args: InferRequestType<(typeof client.conversations.messages)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.messages)[':id']['$get']>>
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
        ? getGetConversationsMessagesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.messages)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.messages[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutConversationsMessagesIdKey() {
  return ['conversations', '/conversations/messages/:id', 'PUT'] as const
}

export function usePutConversationsMessagesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.messages)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations.messages)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversationsMessagesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.conversations.messages)[':id']['$put']> },
      ) => parseResponse(client.conversations.messages[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsMessagesIdKey() {
  return ['conversations', '/conversations/messages/:id', 'DELETE'] as const
}

export function useDeleteConversationsMessagesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.messages)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.conversations.messages)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsMessagesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations.messages)[':id']['$delete']> },
      ) => parseResponse(client.conversations.messages[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsPushedMessagesKey() {
  return ['conversations', '/conversations/pushedMessages', 'POST'] as const
}

export function usePostConversationsPushedMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.pushedMessages.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversations.pushedMessages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsPushedMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.conversations.pushedMessages.$post> },
      ) => parseResponse(client.conversations.pushedMessages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsPushedMessagesIdKey(
  args: InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$get']>,
) {
  return ['conversations', '/conversations/pushedMessages/:id', args] as const
}

export function useGetConversationsPushedMessagesId<TError = unknown>(
  args: InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.pushedMessages)[':id']['$get']>>
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
        ? getGetConversationsPushedMessagesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.pushedMessages)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conversations.pushedMessages[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsPushedMessagesId<TError = unknown>(
  args: InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.pushedMessages)[':id']['$get']>>
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
        ? getGetConversationsPushedMessagesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.pushedMessages)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.conversations.pushedMessages[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutConversationsPushedMessagesIdKey() {
  return ['conversations', '/conversations/pushedMessages/:id', 'PUT'] as const
}

export function usePutConversationsPushedMessagesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.pushedMessages)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversationsPushedMessagesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$put']> },
      ) => parseResponse(client.conversations.pushedMessages[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConversationsPushedMessagesIdKey() {
  return ['conversations', '/conversations/pushedMessages/:id', 'DELETE'] as const
}

export function useDeleteConversationsPushedMessagesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.pushedMessages)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConversationsPushedMessagesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$delete']>
        },
      ) => parseResponse(client.conversations.pushedMessages[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConversationsVisitorGroupKey() {
  return ['conversations', '/conversations/visitorGroup', 'PUT'] as const
}

export function usePutConversationsVisitorGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.visitorGroup.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversations.visitorGroup.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConversationsVisitorGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.conversations.visitorGroup.$put> },
      ) => parseResponse(client.conversations.visitorGroup.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCategoriesKey(args: InferRequestType<typeof client.categories.$get>) {
  return ['categories', '/categories', args] as const
}

export function useGetCategories<TError = unknown>(
  args: InferRequestType<typeof client.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategories<TError = unknown>(
  args: InferRequestType<typeof client.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCategoriesKey() {
  return ['categories', '/categories', 'POST'] as const
}

export function usePostCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.categories.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.categories.$post> }) =>
        parseResponse(client.categories.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCategoriesBatchKey() {
  return ['categories', '/categories/batch', 'POST'] as const
}

export function usePostCategoriesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.batch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.categories.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCategoriesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.categories.batch.$post> }) =>
        parseResponse(client.categories.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCategoriesIdKey(
  args: InferRequestType<(typeof client.categories)[':id']['$get']>,
) {
  return ['categories', '/categories/:id', args] as const
}

export function useGetCategoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCategoriesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCategoriesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCouponCollectionsKey(
  args: InferRequestType<typeof client.couponCollections.$get>,
) {
  return ['couponCollections', '/couponCollections', args] as const
}

export function useGetCouponCollections<TError = unknown>(
  args: InferRequestType<typeof client.couponCollections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.couponCollections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCouponCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.couponCollections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.couponCollections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCouponCollections<TError = unknown>(
  args: InferRequestType<typeof client.couponCollections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.couponCollections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCouponCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.couponCollections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.couponCollections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCouponCollectionsKey() {
  return ['couponCollections', '/couponCollections', 'POST'] as const
}

export function usePostCouponCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.couponCollections.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.couponCollections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCouponCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.couponCollections.$post> }) =>
        parseResponse(client.couponCollections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCouponCollectionsIdKey(
  args: InferRequestType<(typeof client.couponCollections)[':id']['$get']>,
) {
  return ['couponCollections', '/couponCollections/:id', args] as const
}

export function useGetCouponCollectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.couponCollections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.couponCollections)[':id']['$get']>>
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
        ? getGetCouponCollectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.couponCollections)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.couponCollections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCouponCollectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.couponCollections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.couponCollections)[':id']['$get']>>
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
        ? getGetCouponCollectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.couponCollections)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.couponCollections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchCouponCollectionsIdKey() {
  return ['couponCollections', '/couponCollections/:id', 'PATCH'] as const
}

export function usePatchCouponCollectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.couponCollections)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.couponCollections)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCouponCollectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.couponCollections)[':id']['$patch']> },
      ) => parseResponse(client.couponCollections[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCouponsKey() {
  return ['coupons', '/coupons', 'POST'] as const
}

export function usePostCoupons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.coupons.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCouponsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.coupons.$post> }) =>
        parseResponse(client.coupons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEcommerceActivateKey() {
  return ['ecommerce', '/ecommerce/activate', 'POST'] as const
}

export function usePostEcommerceActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.activate.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEcommerceActivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.ecommerce.activate.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEcommerceAttributionMetricsKey(
  args: InferRequestType<typeof client.ecommerce.attribution.metrics.$get>,
) {
  return ['ecommerce', '/ecommerce/attribution/metrics', args] as const
}

export function useGetEcommerceAttributionMetrics<TError = unknown>(
  args: InferRequestType<typeof client.ecommerce.attribution.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.ecommerce.attribution.metrics.$get>>
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
        ? getGetEcommerceAttributionMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.ecommerce.attribution.metrics.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ecommerce.attribution.metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcommerceAttributionMetrics<TError = unknown>(
  args: InferRequestType<typeof client.ecommerce.attribution.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.ecommerce.attribution.metrics.$get>>
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
        ? getGetEcommerceAttributionMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.ecommerce.attribution.metrics.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ecommerce.attribution.metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEcommerceAttributionMetricsConversionSourceConversionSourceIdKey(
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

export function useGetEcommerceAttributionMetricsConversionSourceConversionSourceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ecommerce.attribution.metrics)[':conversionSource'][':conversionSourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcommerceAttributionMetricsConversionSourceConversionSourceIdKey(args)
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
                (typeof client.ecommerce.attribution.metrics)[':conversionSource'][':conversionSourceId']['$get']
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
          client.ecommerce.attribution.metrics[':conversionSource'][':conversionSourceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcommerceAttributionMetricsConversionSourceConversionSourceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ecommerce.attribution.metrics)[':conversionSource'][':conversionSourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcommerceAttributionMetricsConversionSourceConversionSourceIdKey(args)
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
                (typeof client.ecommerce.attribution.metrics)[':conversionSource'][':conversionSourceId']['$get']
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
          client.ecommerce.attribution.metrics[':conversionSource'][':conversionSourceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEcommerceAttributionProductsConversionSourceConversionSourceIdKey(
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

export function useGetEcommerceAttributionProductsConversionSourceConversionSourceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ecommerce.attribution.products)[':conversionSource'][':conversionSourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcommerceAttributionProductsConversionSourceConversionSourceIdKey(args)
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
                (typeof client.ecommerce.attribution.products)[':conversionSource'][':conversionSourceId']['$get']
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
          client.ecommerce.attribution.products[':conversionSource'][':conversionSourceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcommerceAttributionProductsConversionSourceConversionSourceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ecommerce.attribution.products)[':conversionSource'][':conversionSourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcommerceAttributionProductsConversionSourceConversionSourceIdKey(args)
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
                (typeof client.ecommerce.attribution.products)[':conversionSource'][':conversionSourceId']['$get']
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
          client.ecommerce.attribution.products[':conversionSource'][':conversionSourceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEcommerceConfigDisplayCurrencyKey() {
  return ['ecommerce', '/ecommerce/config/displayCurrency'] as const
}

export function useGetEcommerceConfigDisplayCurrency<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ecommerce.config.displayCurrency.$get>>
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
        ? getGetEcommerceConfigDisplayCurrencyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.ecommerce.config.displayCurrency.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ecommerce.config.displayCurrency.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcommerceConfigDisplayCurrency<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ecommerce.config.displayCurrency.$get>>
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
        ? getGetEcommerceConfigDisplayCurrencyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.ecommerce.config.displayCurrency.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ecommerce.config.displayCurrency.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEcommerceConfigDisplayCurrencyKey() {
  return ['ecommerce', '/ecommerce/config/displayCurrency', 'POST'] as const
}

export function usePostEcommerceConfigDisplayCurrency<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ecommerce.config.displayCurrency.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ecommerce.config.displayCurrency.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEcommerceConfigDisplayCurrencyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ecommerce.config.displayCurrency.$post> },
      ) => parseResponse(client.ecommerce.config.displayCurrency.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrdersKey(args: InferRequestType<typeof client.orders.$get>) {
  return ['orders', '/orders', args] as const
}

export function useGetOrders<TError = unknown>(
  args: InferRequestType<typeof client.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.orders.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetOrders<TError = unknown>(
  args: InferRequestType<typeof client.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.orders.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostOrdersStatusKey() {
  return ['orders', '/orders/status', 'POST'] as const
}

export function usePostOrdersStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.status.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.orders.status.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.orders.status.$post> }) =>
        parseResponse(client.orders.status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersStatusBatchKey() {
  return ['orders', '/orders/status/batch', 'POST'] as const
}

export function usePostOrdersStatusBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.status.batch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.orders.status.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersStatusBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.orders.status.batch.$post> }) =>
        parseResponse(client.orders.status.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsRequestsKey() {
  return ['payments', '/payments/requests', 'POST'] as const
}

export function usePostPaymentsRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.requests.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.payments.requests.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payments.requests.$post> }) =>
        parseResponse(client.payments.requests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentsRequestsIdKey(
  args: InferRequestType<(typeof client.payments.requests)[':id']['$get']>,
) {
  return ['payments', '/payments/requests/:id', args] as const
}

export function useGetPaymentsRequestsId<TError = unknown>(
  args: InferRequestType<(typeof client.payments.requests)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payments.requests)[':id']['$get']>>
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
        ? getGetPaymentsRequestsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payments.requests)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payments.requests[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentsRequestsId<TError = unknown>(
  args: InferRequestType<(typeof client.payments.requests)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payments.requests)[':id']['$get']>>
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
        ? getGetPaymentsRequestsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payments.requests)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payments.requests[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePaymentsRequestsIdKey() {
  return ['payments', '/payments/requests/:id', 'DELETE'] as const
}

export function useDeletePaymentsRequestsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payments.requests)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.payments.requests)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePaymentsRequestsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.payments.requests)[':id']['$delete']> },
      ) => parseResponse(client.payments.requests[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductsKey(args: InferRequestType<typeof client.products.$get>) {
  return ['products', '/products', args] as const
}

export function useGetProducts<TError = unknown>(
  args: InferRequestType<typeof client.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.products.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetProducts<TError = unknown>(
  args: InferRequestType<typeof client.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.products.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostProductsKey() {
  return ['products', '/products', 'POST'] as const
}

export function usePostProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.products.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.products.$post> }) =>
        parseResponse(client.products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProductsBatchKey() {
  return ['products', '/products/batch', 'POST'] as const
}

export function usePostProductsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.batch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.products.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.products.batch.$post> }) =>
        parseResponse(client.products.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductsIdKey(
  args: InferRequestType<(typeof client.products)[':id']['$get']>,
) {
  return ['products', '/products/:id', args] as const
}

export function useGetProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.products)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetProductsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.products)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetProductsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProductsIdAlertsTypeKey() {
  return ['products', '/products/:id/alerts/:type', 'POST'] as const
}

export function usePostProductsIdAlertsType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products)[':id']['alerts'][':type']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.products)[':id']['alerts'][':type']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductsIdAlertsTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.products)[':id']['alerts'][':type']['$post']> },
      ) => parseResponse(client.products[':id'].alerts[':type'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventsKey(args: InferRequestType<typeof client.events.$get>) {
  return ['events', '/events', args] as const
}

export function useGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.events.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.events.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostEventsKey() {
  return ['events', '/events', 'POST'] as const
}

export function usePostEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.events.$post> }) =>
        parseResponse(client.events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventsBatchKey() {
  return ['events', '/events/batch', 'POST'] as const
}

export function usePostEventsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.batch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.events.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.events.batch.$post> }) =>
        parseResponse(client.events.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInboundEventsKey(args: InferRequestType<typeof client.inbound.events.$get>) {
  return ['inbound', '/inbound/events', args] as const
}

export function useGetInboundEvents<TError = unknown>(
  args: InferRequestType<typeof client.inbound.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbound.events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInboundEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbound.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inbound.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboundEvents<TError = unknown>(
  args: InferRequestType<typeof client.inbound.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbound.events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInboundEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbound.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inbound.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInboundEventsUuidKey(
  args: InferRequestType<(typeof client.inbound.events)[':uuid']['$get']>,
) {
  return ['inbound', '/inbound/events/:uuid', args] as const
}

export function useGetInboundEventsUuid<TError = unknown>(
  args: InferRequestType<(typeof client.inbound.events)[':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.inbound.events)[':uuid']['$get']>>>
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
        ? getGetInboundEventsUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.inbound.events)[':uuid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inbound.events[':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboundEventsUuid<TError = unknown>(
  args: InferRequestType<(typeof client.inbound.events)[':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.inbound.events)[':uuid']['$get']>>>
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
        ? getGetInboundEventsUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.inbound.events)[':uuid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inbound.events[':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInboundAttachmentsDownloadTokenKey(
  args: InferRequestType<(typeof client.inbound.attachments)[':downloadToken']['$get']>,
) {
  return ['inbound', '/inbound/attachments/:downloadToken', args] as const
}

export function useGetInboundAttachmentsDownloadToken<TError = unknown>(
  args: InferRequestType<(typeof client.inbound.attachments)[':downloadToken']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inbound.attachments)[':downloadToken']['$get']>>
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
        ? getGetInboundAttachmentsDownloadTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inbound.attachments)[':downloadToken']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.inbound.attachments[':downloadToken'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboundAttachmentsDownloadToken<TError = unknown>(
  args: InferRequestType<(typeof client.inbound.attachments)[':downloadToken']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inbound.attachments)[':downloadToken']['$get']>>
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
        ? getGetInboundAttachmentsDownloadTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inbound.attachments)[':downloadToken']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.inbound.attachments[':downloadToken'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLoyaltyBalanceProgramsPidActiveBalanceKey(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['active-balance']['$get']
  >,
) {
  return ['loyalty', '/loyalty/balance/programs/:pid/active-balance', args] as const
}

export function useGetLoyaltyBalanceProgramsPidActiveBalance<TError = unknown>(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['active-balance']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.loyalty.balance.programs)[':pid']['active-balance']['$get']>
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
        ? getGetLoyaltyBalanceProgramsPidActiveBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.loyalty.balance.programs)[':pid']['active-balance']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.loyalty.balance.programs[':pid']['active-balance'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoyaltyBalanceProgramsPidActiveBalance<TError = unknown>(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['active-balance']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.loyalty.balance.programs)[':pid']['active-balance']['$get']>
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
        ? getGetLoyaltyBalanceProgramsPidActiveBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.loyalty.balance.programs)[':pid']['active-balance']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.loyalty.balance.programs[':pid']['active-balance'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLoyaltyBalanceProgramsPidBalanceDefinitionsKey(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$get']
  >,
) {
  return ['loyalty', '/loyalty/balance/programs/:pid/balance-definitions', args] as const
}

export function useGetLoyaltyBalanceProgramsPidBalanceDefinitions<TError = unknown>(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLoyaltyBalanceProgramsPidBalanceDefinitionsKey(args)
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
                (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$get']
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
          client.loyalty.balance.programs[':pid']['balance-definitions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoyaltyBalanceProgramsPidBalanceDefinitions<TError = unknown>(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLoyaltyBalanceProgramsPidBalanceDefinitionsKey(args)
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
                (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$get']
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
          client.loyalty.balance.programs[':pid']['balance-definitions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostLoyaltyBalanceProgramsPidBalanceDefinitionsKey() {
  return ['loyalty', '/loyalty/balance/programs/:pid/balance-definitions', 'POST'] as const
}

export function usePostLoyaltyBalanceProgramsPidBalanceDefinitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoyaltyBalanceProgramsPidBalanceDefinitionsKey()
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
            (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.balance.programs[':pid']['balance-definitions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLoyaltyBalanceProgramsPidBalanceDefinitionsBdidKey(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$get']
  >,
) {
  return ['loyalty', '/loyalty/balance/programs/:pid/balance-definitions/:bdid', args] as const
}

export function useGetLoyaltyBalanceProgramsPidBalanceDefinitionsBdid<TError = unknown>(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLoyaltyBalanceProgramsPidBalanceDefinitionsBdidKey(args)
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
                (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$get']
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
          client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoyaltyBalanceProgramsPidBalanceDefinitionsBdid<TError = unknown>(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLoyaltyBalanceProgramsPidBalanceDefinitionsBdidKey(args)
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
                (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$get']
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
          client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutLoyaltyBalanceProgramsPidBalanceDefinitionsBdidKey() {
  return ['loyalty', '/loyalty/balance/programs/:pid/balance-definitions/:bdid', 'PUT'] as const
}

export function usePutLoyaltyBalanceProgramsPidBalanceDefinitionsBdid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLoyaltyBalanceProgramsPidBalanceDefinitionsBdidKey()
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
            (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$put']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidKey() {
  return ['loyalty', '/loyalty/balance/programs/:pid/balance-definitions/:bdid', 'DELETE'] as const
}

export function useDeleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidKey()
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
            (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsKey() {
  return [
    'loyalty',
    '/loyalty/balance/programs/:pid/balance-definitions/:bdid/limits',
    'POST',
  ] as const
}

export function usePostLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimits<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsKey()
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
            (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits']['$post']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].limits.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidKey(
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

export function useGetLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlid<TError = unknown>(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidKey(args)
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
                (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$get']
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
          client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].limits[
            ':blid'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidKey(args)
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
                (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$get']
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
          client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].limits[
            ':blid'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidKey() {
  return [
    'loyalty',
    '/loyalty/balance/programs/:pid/balance-definitions/:bdid/limits/:blid',
    'PUT',
  ] as const
}

export function usePutLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidKey()
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
            (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$put']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].limits[
            ':blid'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidKey() {
  return [
    'loyalty',
    '/loyalty/balance/programs/:pid/balance-definitions/:bdid/limits/:blid',
    'DELETE',
  ] as const
}

export function useDeleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidKey()
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
            (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].limits[
            ':blid'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLoyaltyBalanceProgramsPidContactBalancesKey(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['contact-balances']['$get']
  >,
) {
  return ['loyalty', '/loyalty/balance/programs/:pid/contact-balances', args] as const
}

export function useGetLoyaltyBalanceProgramsPidContactBalances<TError = unknown>(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['contact-balances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLoyaltyBalanceProgramsPidContactBalancesKey(args)
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
                (typeof client.loyalty.balance.programs)[':pid']['contact-balances']['$get']
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
          client.loyalty.balance.programs[':pid']['contact-balances'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoyaltyBalanceProgramsPidContactBalances<TError = unknown>(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['contact-balances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLoyaltyBalanceProgramsPidContactBalancesKey(args)
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
                (typeof client.loyalty.balance.programs)[':pid']['contact-balances']['$get']
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
          client.loyalty.balance.programs[':pid']['contact-balances'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostLoyaltyBalanceProgramsPidCreateOrderKey() {
  return ['loyalty', '/loyalty/balance/programs/:pid/create-order', 'POST'] as const
}

export function usePostLoyaltyBalanceProgramsPidCreateOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.loyalty.balance.programs)[':pid']['create-order']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoyaltyBalanceProgramsPidCreateOrderKey()
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
            (typeof client.loyalty.balance.programs)[':pid']['create-order']['$post']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.balance.programs[':pid']['create-order'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLoyaltyBalanceProgramsPidSubscriptionsCidBalancesKey(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$get']
  >,
) {
  return ['loyalty', '/loyalty/balance/programs/:pid/subscriptions/:cid/balances', args] as const
}

export function useGetLoyaltyBalanceProgramsPidSubscriptionsCidBalances<TError = unknown>(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLoyaltyBalanceProgramsPidSubscriptionsCidBalancesKey(args)
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
                (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$get']
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
          client.loyalty.balance.programs[':pid'].subscriptions[':cid'].balances.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoyaltyBalanceProgramsPidSubscriptionsCidBalances<TError = unknown>(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLoyaltyBalanceProgramsPidSubscriptionsCidBalancesKey(args)
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
                (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$get']
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
          client.loyalty.balance.programs[':pid'].subscriptions[':cid'].balances.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostLoyaltyBalanceProgramsPidSubscriptionsCidBalancesKey() {
  return ['loyalty', '/loyalty/balance/programs/:pid/subscriptions/:cid/balances', 'POST'] as const
}

export function usePostLoyaltyBalanceProgramsPidSubscriptionsCidBalances<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoyaltyBalanceProgramsPidSubscriptionsCidBalancesKey()
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
            (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$post']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.balance.programs[':pid'].subscriptions[':cid'].balances.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLoyaltyBalanceProgramsPidTransactionHistoryKey(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['transaction-history']['$get']
  >,
) {
  return ['loyalty', '/loyalty/balance/programs/:pid/transaction-history', args] as const
}

export function useGetLoyaltyBalanceProgramsPidTransactionHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['transaction-history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLoyaltyBalanceProgramsPidTransactionHistoryKey(args)
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
                (typeof client.loyalty.balance.programs)[':pid']['transaction-history']['$get']
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
          client.loyalty.balance.programs[':pid']['transaction-history'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoyaltyBalanceProgramsPidTransactionHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['transaction-history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLoyaltyBalanceProgramsPidTransactionHistoryKey(args)
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
                (typeof client.loyalty.balance.programs)[':pid']['transaction-history']['$get']
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
          client.loyalty.balance.programs[':pid']['transaction-history'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostLoyaltyBalanceProgramsPidTransactionsKey() {
  return ['loyalty', '/loyalty/balance/programs/:pid/transactions', 'POST'] as const
}

export function usePostLoyaltyBalanceProgramsPidTransactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.loyalty.balance.programs)[':pid']['transactions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoyaltyBalanceProgramsPidTransactionsKey()
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
            (typeof client.loyalty.balance.programs)[':pid']['transactions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.balance.programs[':pid'].transactions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLoyaltyBalanceProgramsPidTransactionsTidCancelKey() {
  return ['loyalty', '/loyalty/balance/programs/:pid/transactions/:tid/cancel', 'POST'] as const
}

export function usePostLoyaltyBalanceProgramsPidTransactionsTidCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['transactions'][':tid']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoyaltyBalanceProgramsPidTransactionsTidCancelKey()
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
            (typeof client.loyalty.balance.programs)[':pid']['transactions'][':tid']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.balance.programs[':pid'].transactions[':tid'].cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLoyaltyBalanceProgramsPidTransactionsTidCompleteKey() {
  return ['loyalty', '/loyalty/balance/programs/:pid/transactions/:tid/complete', 'POST'] as const
}

export function usePostLoyaltyBalanceProgramsPidTransactionsTidComplete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['transactions'][':tid']['complete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoyaltyBalanceProgramsPidTransactionsTidCompleteKey()
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
            (typeof client.loyalty.balance.programs)[':pid']['transactions'][':tid']['complete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.balance.programs[':pid'].transactions[':tid'].complete.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLoyaltyConfigProgramsKey(
  args: InferRequestType<typeof client.loyalty.config.programs.$get>,
) {
  return ['loyalty', '/loyalty/config/programs', args] as const
}

export function useGetLoyaltyConfigPrograms<TError = unknown>(
  args: InferRequestType<typeof client.loyalty.config.programs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.loyalty.config.programs.$get>>>
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
        ? getGetLoyaltyConfigProgramsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.loyalty.config.programs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.loyalty.config.programs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoyaltyConfigPrograms<TError = unknown>(
  args: InferRequestType<typeof client.loyalty.config.programs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.loyalty.config.programs.$get>>>
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
        ? getGetLoyaltyConfigProgramsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.loyalty.config.programs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.loyalty.config.programs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLoyaltyConfigProgramsKey() {
  return ['loyalty', '/loyalty/config/programs', 'POST'] as const
}

export function usePostLoyaltyConfigPrograms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.loyalty.config.programs.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.loyalty.config.programs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoyaltyConfigProgramsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.loyalty.config.programs.$post> },
      ) => parseResponse(client.loyalty.config.programs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLoyaltyConfigProgramsPidKey(
  args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$get']>,
) {
  return ['loyalty', '/loyalty/config/programs/:pid', args] as const
}

export function useGetLoyaltyConfigProgramsPid<TError = unknown>(
  args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['$get']>>
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
        ? getGetLoyaltyConfigProgramsPidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.loyalty.config.programs[':pid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoyaltyConfigProgramsPid<TError = unknown>(
  args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['$get']>>
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
        ? getGetLoyaltyConfigProgramsPidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.loyalty.config.programs[':pid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLoyaltyConfigProgramsPidKey() {
  return ['loyalty', '/loyalty/config/programs/:pid', 'PUT'] as const
}

export function usePutLoyaltyConfigProgramsPid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLoyaltyConfigProgramsPidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$put']> },
      ) => parseResponse(client.loyalty.config.programs[':pid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLoyaltyConfigProgramsPidKey() {
  return ['loyalty', '/loyalty/config/programs/:pid', 'DELETE'] as const
}

export function useDeleteLoyaltyConfigProgramsPid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLoyaltyConfigProgramsPidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$delete']> },
      ) => parseResponse(client.loyalty.config.programs[':pid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchLoyaltyConfigProgramsPidKey() {
  return ['loyalty', '/loyalty/config/programs/:pid', 'PATCH'] as const
}

export function usePatchLoyaltyConfigProgramsPid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchLoyaltyConfigProgramsPidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$patch']> },
      ) => parseResponse(client.loyalty.config.programs[':pid'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLoyaltyConfigProgramsPidAccountInfoKey(
  args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['account-info']['$get']>,
) {
  return ['loyalty', '/loyalty/config/programs/:pid/account-info', args] as const
}

export function useGetLoyaltyConfigProgramsPidAccountInfo<TError = unknown>(
  args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['account-info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.loyalty.config.programs)[':pid']['account-info']['$get']>
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
        ? getGetLoyaltyConfigProgramsPidAccountInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.loyalty.config.programs)[':pid']['account-info']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.loyalty.config.programs[':pid']['account-info'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoyaltyConfigProgramsPidAccountInfo<TError = unknown>(
  args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['account-info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.loyalty.config.programs)[':pid']['account-info']['$get']>
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
        ? getGetLoyaltyConfigProgramsPidAccountInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.loyalty.config.programs)[':pid']['account-info']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.loyalty.config.programs[':pid']['account-info'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteLoyaltyConfigProgramsPidContactCidKey() {
  return ['loyalty', '/loyalty/config/programs/:pid/contact/:cid', 'DELETE'] as const
}

export function useDeleteLoyaltyConfigProgramsPidContactCid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.loyalty.config.programs)[':pid']['contact'][':cid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLoyaltyConfigProgramsPidContactCidKey()
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
            (typeof client.loyalty.config.programs)[':pid']['contact'][':cid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.config.programs[':pid'].contact[':cid'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLoyaltyConfigProgramsPidPublishKey() {
  return ['loyalty', '/loyalty/config/programs/:pid/publish', 'POST'] as const
}

export function usePostLoyaltyConfigProgramsPidPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['publish']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.loyalty.config.programs)[':pid']['publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoyaltyConfigProgramsPidPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['publish']['$post']>
        },
      ) => parseResponse(client.loyalty.config.programs[':pid'].publish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLoyaltyConfigProgramsPidSubscriptionMembersKey() {
  return ['loyalty', '/loyalty/config/programs/:pid/subscription-members', 'POST'] as const
}

export function usePostLoyaltyConfigProgramsPidSubscriptionMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.loyalty.config.programs)[':pid']['subscription-members']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoyaltyConfigProgramsPidSubscriptionMembersKey()
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
            (typeof client.loyalty.config.programs)[':pid']['subscription-members']['$post']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.config.programs[':pid']['subscription-members'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteLoyaltyConfigProgramsPidSubscriptionMembersKey() {
  return ['loyalty', '/loyalty/config/programs/:pid/subscription-members', 'DELETE'] as const
}

export function useDeleteLoyaltyConfigProgramsPidSubscriptionMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.loyalty.config.programs)[':pid']['subscription-members']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLoyaltyConfigProgramsPidSubscriptionMembersKey()
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
            (typeof client.loyalty.config.programs)[':pid']['subscription-members']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.config.programs[':pid']['subscription-members'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLoyaltyConfigProgramsPidSubscriptionsKey() {
  return ['loyalty', '/loyalty/config/programs/:pid/subscriptions', 'POST'] as const
}

export function usePostLoyaltyConfigProgramsPidSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.loyalty.config.programs)[':pid']['subscriptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoyaltyConfigProgramsPidSubscriptionsKey()
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
            (typeof client.loyalty.config.programs)[':pid']['subscriptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.config.programs[':pid'].subscriptions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLoyaltyOfferProgramsPidCodePoolsCpidCodesCountKey(
  args: InferRequestType<
    (typeof client.loyalty.offer.programs)[':pid']['code-pools'][':cpid']['codes-count']['$get']
  >,
) {
  return ['loyalty', '/loyalty/offer/programs/:pid/code-pools/:cpid/codes-count', args] as const
}

export function useGetLoyaltyOfferProgramsPidCodePoolsCpidCodesCount<TError = unknown>(
  args: InferRequestType<
    (typeof client.loyalty.offer.programs)[':pid']['code-pools'][':cpid']['codes-count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLoyaltyOfferProgramsPidCodePoolsCpidCodesCountKey(args)
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
                (typeof client.loyalty.offer.programs)[':pid']['code-pools'][':cpid']['codes-count']['$get']
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
          client.loyalty.offer.programs[':pid']['code-pools'][':cpid']['codes-count'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoyaltyOfferProgramsPidCodePoolsCpidCodesCount<TError = unknown>(
  args: InferRequestType<
    (typeof client.loyalty.offer.programs)[':pid']['code-pools'][':cpid']['codes-count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLoyaltyOfferProgramsPidCodePoolsCpidCodesCountKey(args)
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
                (typeof client.loyalty.offer.programs)[':pid']['code-pools'][':cpid']['codes-count']['$get']
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
          client.loyalty.offer.programs[':pid']['code-pools'][':cpid']['codes-count'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLoyaltyOfferProgramsPidOffersKey(
  args: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$get']>,
) {
  return ['loyalty', '/loyalty/offer/programs/:pid/offers', args] as const
}

export function useGetLoyaltyOfferProgramsPidOffers<TError = unknown>(
  args: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$get']>>
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
        ? getGetLoyaltyOfferProgramsPidOffersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.loyalty.offer.programs[':pid'].offers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoyaltyOfferProgramsPidOffers<TError = unknown>(
  args: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$get']>>
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
        ? getGetLoyaltyOfferProgramsPidOffersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.loyalty.offer.programs[':pid'].offers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLoyaltyOfferProgramsPidOffersKey() {
  return ['loyalty', '/loyalty/offer/programs/:pid/offers', 'POST'] as const
}

export function usePostLoyaltyOfferProgramsPidOffers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoyaltyOfferProgramsPidOffersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$post']>
        },
      ) => parseResponse(client.loyalty.offer.programs[':pid'].offers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLoyaltyOfferProgramsPidRewardsAttributeKey() {
  return ['loyalty', '/loyalty/offer/programs/:pid/rewards/attribute', 'POST'] as const
}

export function usePostLoyaltyOfferProgramsPidRewardsAttribute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.loyalty.offer.programs)[':pid']['rewards']['attribute']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoyaltyOfferProgramsPidRewardsAttributeKey()
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
            (typeof client.loyalty.offer.programs)[':pid']['rewards']['attribute']['$post']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.offer.programs[':pid'].rewards.attribute.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLoyaltyOfferProgramsPidRewardsRedeemKey() {
  return ['loyalty', '/loyalty/offer/programs/:pid/rewards/redeem', 'POST'] as const
}

export function usePostLoyaltyOfferProgramsPidRewardsRedeem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['rewards']['redeem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoyaltyOfferProgramsPidRewardsRedeemKey()
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
            (typeof client.loyalty.offer.programs)[':pid']['rewards']['redeem']['$post']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.offer.programs[':pid'].rewards.redeem.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLoyaltyOfferProgramsPidRewardsRedeemTidCompleteKey() {
  return ['loyalty', '/loyalty/offer/programs/:pid/rewards/redeem/:tid/complete', 'POST'] as const
}

export function usePostLoyaltyOfferProgramsPidRewardsRedeemTidComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.loyalty.offer.programs)[':pid']['rewards']['redeem'][':tid']['complete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoyaltyOfferProgramsPidRewardsRedeemTidCompleteKey()
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
            (typeof client.loyalty.offer.programs)[':pid']['rewards']['redeem'][':tid']['complete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.offer.programs[':pid'].rewards.redeem[':tid'].complete.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteLoyaltyOfferProgramsPidRewardsRevokeKey() {
  return ['loyalty', '/loyalty/offer/programs/:pid/rewards/revoke', 'DELETE'] as const
}

export function useDeleteLoyaltyOfferProgramsPidRewardsRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['rewards']['revoke']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLoyaltyOfferProgramsPidRewardsRevokeKey()
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
            (typeof client.loyalty.offer.programs)[':pid']['rewards']['revoke']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.offer.programs[':pid'].rewards.revoke.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLoyaltyOfferProgramsPidRewardsValidateKey() {
  return ['loyalty', '/loyalty/offer/programs/:pid/rewards/validate', 'POST'] as const
}

export function usePostLoyaltyOfferProgramsPidRewardsValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['rewards']['validate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoyaltyOfferProgramsPidRewardsValidateKey()
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
            (typeof client.loyalty.offer.programs)[':pid']['rewards']['validate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.offer.programs[':pid'].rewards.validate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLoyaltyOfferProgramsPidRewardsRidKey(
  args: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['rewards'][':rid']['$get']>,
) {
  return ['loyalty', '/loyalty/offer/programs/:pid/rewards/:rid', args] as const
}

export function useGetLoyaltyOfferProgramsPidRewardsRid<TError = unknown>(
  args: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['rewards'][':rid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.loyalty.offer.programs)[':pid']['rewards'][':rid']['$get']>
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
        ? getGetLoyaltyOfferProgramsPidRewardsRidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.loyalty.offer.programs)[':pid']['rewards'][':rid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.loyalty.offer.programs[':pid'].rewards[':rid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoyaltyOfferProgramsPidRewardsRid<TError = unknown>(
  args: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['rewards'][':rid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.loyalty.offer.programs)[':pid']['rewards'][':rid']['$get']>
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
        ? getGetLoyaltyOfferProgramsPidRewardsRidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.loyalty.offer.programs)[':pid']['rewards'][':rid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.loyalty.offer.programs[':pid'].rewards[':rid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLoyaltyOfferProgramsPidVouchersKey(
  args: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['vouchers']['$get']>,
) {
  return ['loyalty', '/loyalty/offer/programs/:pid/vouchers', args] as const
}

export function useGetLoyaltyOfferProgramsPidVouchers<TError = unknown>(
  args: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['vouchers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.loyalty.offer.programs)[':pid']['vouchers']['$get']>>
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
        ? getGetLoyaltyOfferProgramsPidVouchersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.loyalty.offer.programs)[':pid']['vouchers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.loyalty.offer.programs[':pid'].vouchers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoyaltyOfferProgramsPidVouchers<TError = unknown>(
  args: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['vouchers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.loyalty.offer.programs)[':pid']['vouchers']['$get']>>
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
        ? getGetLoyaltyOfferProgramsPidVouchersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.loyalty.offer.programs)[':pid']['vouchers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.loyalty.offer.programs[':pid'].vouchers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLoyaltyTierProgramsPidContactsCidTiersTidKey() {
  return ['loyalty', '/loyalty/tier/programs/:pid/contacts/:cid/tiers/:tid', 'POST'] as const
}

export function usePostLoyaltyTierProgramsPidContactsCidTiersTid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.loyalty.tier.programs)[':pid']['contacts'][':cid']['tiers'][':tid']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoyaltyTierProgramsPidContactsCidTiersTidKey()
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
            (typeof client.loyalty.tier.programs)[':pid']['contacts'][':cid']['tiers'][':tid']['$post']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.tier.programs[':pid'].contacts[':cid'].tiers[':tid'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLoyaltyTierProgramsPidTierGroupsKey(
  args: InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$get']>,
) {
  return ['loyalty', '/loyalty/tier/programs/:pid/tier-groups', args] as const
}

export function useGetLoyaltyTierProgramsPidTierGroups<TError = unknown>(
  args: InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$get']>
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
        ? getGetLoyaltyTierProgramsPidTierGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.loyalty.tier.programs[':pid']['tier-groups'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoyaltyTierProgramsPidTierGroups<TError = unknown>(
  args: InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$get']>
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
        ? getGetLoyaltyTierProgramsPidTierGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.loyalty.tier.programs[':pid']['tier-groups'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostLoyaltyTierProgramsPidTierGroupsKey() {
  return ['loyalty', '/loyalty/tier/programs/:pid/tier-groups', 'POST'] as const
}

export function usePostLoyaltyTierProgramsPidTierGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoyaltyTierProgramsPidTierGroupsKey()
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
            (typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$post']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.tier.programs[':pid']['tier-groups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLoyaltyTierProgramsPidTierGroupsGidKey(
  args: InferRequestType<
    (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$get']
  >,
) {
  return ['loyalty', '/loyalty/tier/programs/:pid/tier-groups/:gid', args] as const
}

export function useGetLoyaltyTierProgramsPidTierGroupsGid<TError = unknown>(
  args: InferRequestType<
    (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLoyaltyTierProgramsPidTierGroupsGidKey(args)
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
                (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$get']
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
          client.loyalty.tier.programs[':pid']['tier-groups'][':gid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoyaltyTierProgramsPidTierGroupsGid<TError = unknown>(
  args: InferRequestType<
    (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLoyaltyTierProgramsPidTierGroupsGidKey(args)
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
                (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$get']
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
          client.loyalty.tier.programs[':pid']['tier-groups'][':gid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutLoyaltyTierProgramsPidTierGroupsGidKey() {
  return ['loyalty', '/loyalty/tier/programs/:pid/tier-groups/:gid', 'PUT'] as const
}

export function usePutLoyaltyTierProgramsPidTierGroupsGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLoyaltyTierProgramsPidTierGroupsGidKey()
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
            (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$put']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.tier.programs[':pid']['tier-groups'][':gid'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteLoyaltyTierProgramsPidTierGroupsGidKey() {
  return ['loyalty', '/loyalty/tier/programs/:pid/tier-groups/:gid', 'DELETE'] as const
}

export function useDeleteLoyaltyTierProgramsPidTierGroupsGid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLoyaltyTierProgramsPidTierGroupsGidKey()
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
            (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.tier.programs[':pid']['tier-groups'][':gid'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLoyaltyTierProgramsPidTierGroupsGidTiersKey() {
  return ['loyalty', '/loyalty/tier/programs/:pid/tier-groups/:gid/tiers', 'POST'] as const
}

export function usePostLoyaltyTierProgramsPidTierGroupsGidTiers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['tiers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoyaltyTierProgramsPidTierGroupsGidTiersKey()
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
            (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['tiers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.tier.programs[':pid']['tier-groups'][':gid'].tiers.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLoyaltyTierProgramsPidTiersKey(
  args: InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tiers']['$get']>,
) {
  return ['loyalty', '/loyalty/tier/programs/:pid/tiers', args] as const
}

export function useGetLoyaltyTierProgramsPidTiers<TError = unknown>(
  args: InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tiers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tiers']['$get']>>
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
        ? getGetLoyaltyTierProgramsPidTiersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tiers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.loyalty.tier.programs[':pid'].tiers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoyaltyTierProgramsPidTiers<TError = unknown>(
  args: InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tiers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tiers']['$get']>>
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
        ? getGetLoyaltyTierProgramsPidTiersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tiers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.loyalty.tier.programs[':pid'].tiers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLoyaltyTierProgramsPidTiersTidKey() {
  return ['loyalty', '/loyalty/tier/programs/:pid/tiers/:tid', 'PUT'] as const
}

export function usePutLoyaltyTierProgramsPidTiersTid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tiers'][':tid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLoyaltyTierProgramsPidTiersTidKey()
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
            (typeof client.loyalty.tier.programs)[':pid']['tiers'][':tid']['$put']
          >
        },
      ) =>
        parseResponse(client.loyalty.tier.programs[':pid'].tiers[':tid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLoyaltyTierProgramsPidTiersTidKey() {
  return ['loyalty', '/loyalty/tier/programs/:pid/tiers/:tid', 'DELETE'] as const
}

export function useDeleteLoyaltyTierProgramsPidTiersTid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tiers'][':tid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLoyaltyTierProgramsPidTiersTidKey()
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
            (typeof client.loyalty.tier.programs)[':pid']['tiers'][':tid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.loyalty.tier.programs[':pid'].tiers[':tid'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWalletPassesPassIdInstallUrlContactIdKey(
  args: InferRequestType<
    (typeof client.wallet.passes)[':passId']['installUrl'][':contactId']['$get']
  >,
) {
  return ['wallet', '/wallet/passes/:passId/installUrl/:contactId', args] as const
}

export function useGetWalletPassesPassIdInstallUrlContactId<TError = unknown>(
  args: InferRequestType<
    (typeof client.wallet.passes)[':passId']['installUrl'][':contactId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWalletPassesPassIdInstallUrlContactIdKey(args)
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
                (typeof client.wallet.passes)[':passId']['installUrl'][':contactId']['$get']
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
          client.wallet.passes[':passId'].installUrl[':contactId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletPassesPassIdInstallUrlContactId<TError = unknown>(
  args: InferRequestType<
    (typeof client.wallet.passes)[':passId']['installUrl'][':contactId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWalletPassesPassIdInstallUrlContactIdKey(args)
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
                (typeof client.wallet.passes)[':passId']['installUrl'][':contactId']['$get']
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
          client.wallet.passes[':passId'].installUrl[':contactId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWalletPassesInstallationIdRedeemKey() {
  return ['wallet', '/wallet/passes/:installationId/redeem', 'POST'] as const
}

export function usePostWalletPassesInstallationIdRedeem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wallet.passes)[':installationId']['redeem']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wallet.passes)[':installationId']['redeem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletPassesInstallationIdRedeemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.wallet.passes)[':installationId']['redeem']['$post']>
        },
      ) => parseResponse(client.wallet.passes[':installationId'].redeem.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmailCampaignsKey(args: InferRequestType<typeof client.emailCampaigns.$get>) {
  return ['emailCampaigns', '/emailCampaigns', args] as const
}

export function useGetEmailCampaigns<TError = unknown>(
  args: InferRequestType<typeof client.emailCampaigns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emailCampaigns.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailCampaignsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emailCampaigns.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emailCampaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailCampaigns<TError = unknown>(
  args: InferRequestType<typeof client.emailCampaigns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emailCampaigns.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailCampaignsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emailCampaigns.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emailCampaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmailCampaignsKey() {
  return ['emailCampaigns', '/emailCampaigns', 'POST'] as const
}

export function usePostEmailCampaigns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emailCampaigns.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.emailCampaigns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailCampaignsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.emailCampaigns.$post> }) =>
        parseResponse(client.emailCampaigns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEmailCampaignsImagesKey() {
  return ['emailCampaigns', '/emailCampaigns/images', 'POST'] as const
}

export function usePostEmailCampaignsImages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.emailCampaigns.images.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.emailCampaigns.images.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailCampaignsImagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.emailCampaigns.images.$post> },
      ) => parseResponse(client.emailCampaigns.images.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmailCampaignsCampaignIdKey(
  args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$get']>,
) {
  return ['emailCampaigns', '/emailCampaigns/:campaignId', args] as const
}

export function useGetEmailCampaignsCampaignId<TError = unknown>(
  args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['$get']>>
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
        ? getGetEmailCampaignsCampaignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emailCampaigns[':campaignId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailCampaignsCampaignId<TError = unknown>(
  args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['$get']>>
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
        ? getGetEmailCampaignsCampaignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emailCampaigns[':campaignId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEmailCampaignsCampaignIdKey() {
  return ['emailCampaigns', '/emailCampaigns/:campaignId', 'PUT'] as const
}

export function usePutEmailCampaignsCampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmailCampaignsCampaignIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$put']> },
      ) => parseResponse(client.emailCampaigns[':campaignId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmailCampaignsCampaignIdKey() {
  return ['emailCampaigns', '/emailCampaigns/:campaignId', 'DELETE'] as const
}

export function useDeleteEmailCampaignsCampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmailCampaignsCampaignIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$delete']> },
      ) => parseResponse(client.emailCampaigns[':campaignId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmailCampaignsCampaignIdAbTestCampaignResultKey(
  args: InferRequestType<
    (typeof client.emailCampaigns)[':campaignId']['abTestCampaignResult']['$get']
  >,
) {
  return ['emailCampaigns', '/emailCampaigns/:campaignId/abTestCampaignResult', args] as const
}

export function useGetEmailCampaignsCampaignIdAbTestCampaignResult<TError = unknown>(
  args: InferRequestType<
    (typeof client.emailCampaigns)[':campaignId']['abTestCampaignResult']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEmailCampaignsCampaignIdAbTestCampaignResultKey(args)
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
                (typeof client.emailCampaigns)[':campaignId']['abTestCampaignResult']['$get']
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
          client.emailCampaigns[':campaignId'].abTestCampaignResult.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailCampaignsCampaignIdAbTestCampaignResult<TError = unknown>(
  args: InferRequestType<
    (typeof client.emailCampaigns)[':campaignId']['abTestCampaignResult']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEmailCampaignsCampaignIdAbTestCampaignResultKey(args)
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
                (typeof client.emailCampaigns)[':campaignId']['abTestCampaignResult']['$get']
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
          client.emailCampaigns[':campaignId'].abTestCampaignResult.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEmailCampaignsCampaignIdExportRecipientsKey() {
  return ['emailCampaigns', '/emailCampaigns/:campaignId/exportRecipients', 'POST'] as const
}

export function usePostEmailCampaignsCampaignIdExportRecipients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.emailCampaigns)[':campaignId']['exportRecipients']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailCampaignsCampaignIdExportRecipientsKey()
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
            (typeof client.emailCampaigns)[':campaignId']['exportRecipients']['$post']
          >
        },
      ) =>
        parseResponse(
          client.emailCampaigns[':campaignId'].exportRecipients.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEmailCampaignsCampaignIdSendNowKey() {
  return ['emailCampaigns', '/emailCampaigns/:campaignId/sendNow', 'POST'] as const
}

export function usePostEmailCampaignsCampaignIdSendNow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['sendNow']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sendNow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailCampaignsCampaignIdSendNowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sendNow']['$post']>
        },
      ) => parseResponse(client.emailCampaigns[':campaignId'].sendNow.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEmailCampaignsCampaignIdSendReportKey() {
  return ['emailCampaigns', '/emailCampaigns/:campaignId/sendReport', 'POST'] as const
}

export function usePostEmailCampaignsCampaignIdSendReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sendReport']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailCampaignsCampaignIdSendReportKey()
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
            (typeof client.emailCampaigns)[':campaignId']['sendReport']['$post']
          >
        },
      ) => parseResponse(client.emailCampaigns[':campaignId'].sendReport.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEmailCampaignsCampaignIdSendTestKey() {
  return ['emailCampaigns', '/emailCampaigns/:campaignId/sendTest', 'POST'] as const
}

export function usePostEmailCampaignsCampaignIdSendTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['sendTest']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sendTest']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailCampaignsCampaignIdSendTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sendTest']['$post']>
        },
      ) => parseResponse(client.emailCampaigns[':campaignId'].sendTest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmailCampaignsCampaignIdSharedUrlKey(
  args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sharedUrl']['$get']>,
) {
  return ['emailCampaigns', '/emailCampaigns/:campaignId/sharedUrl', args] as const
}

export function useGetEmailCampaignsCampaignIdSharedUrl<TError = unknown>(
  args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sharedUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['sharedUrl']['$get']>>
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
        ? getGetEmailCampaignsCampaignIdSharedUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['sharedUrl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.emailCampaigns[':campaignId'].sharedUrl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailCampaignsCampaignIdSharedUrl<TError = unknown>(
  args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sharedUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['sharedUrl']['$get']>>
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
        ? getGetEmailCampaignsCampaignIdSharedUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['sharedUrl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.emailCampaigns[':campaignId'].sharedUrl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEmailCampaignsCampaignIdStatusKey() {
  return ['emailCampaigns', '/emailCampaigns/:campaignId/status', 'PUT'] as const
}

export function usePutEmailCampaignsCampaignIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.emailCampaigns)[':campaignId']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmailCampaignsCampaignIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['status']['$put']>
        },
      ) => parseResponse(client.emailCampaigns[':campaignId'].status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSmsCampaignsKey(args: InferRequestType<typeof client.smsCampaigns.$get>) {
  return ['smsCampaigns', '/smsCampaigns', args] as const
}

export function useGetSmsCampaigns<TError = unknown>(
  args: InferRequestType<typeof client.smsCampaigns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smsCampaigns.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmsCampaignsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smsCampaigns.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smsCampaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmsCampaigns<TError = unknown>(
  args: InferRequestType<typeof client.smsCampaigns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smsCampaigns.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmsCampaignsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smsCampaigns.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smsCampaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSmsCampaignsKey() {
  return ['smsCampaigns', '/smsCampaigns', 'POST'] as const
}

export function usePostSmsCampaigns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smsCampaigns.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.smsCampaigns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmsCampaignsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.smsCampaigns.$post> }) =>
        parseResponse(client.smsCampaigns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSmsCampaignsCampaignIdKey(
  args: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$get']>,
) {
  return ['smsCampaigns', '/smsCampaigns/:campaignId', args] as const
}

export function useGetSmsCampaignsCampaignId<TError = unknown>(
  args: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['$get']>>
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
        ? getGetSmsCampaignsCampaignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smsCampaigns[':campaignId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmsCampaignsCampaignId<TError = unknown>(
  args: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['$get']>>
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
        ? getGetSmsCampaignsCampaignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smsCampaigns[':campaignId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSmsCampaignsCampaignIdKey() {
  return ['smsCampaigns', '/smsCampaigns/:campaignId', 'PUT'] as const
}

export function usePutSmsCampaignsCampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSmsCampaignsCampaignIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$put']> },
      ) => parseResponse(client.smsCampaigns[':campaignId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSmsCampaignsCampaignIdKey() {
  return ['smsCampaigns', '/smsCampaigns/:campaignId', 'DELETE'] as const
}

export function useDeleteSmsCampaignsCampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSmsCampaignsCampaignIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$delete']> },
      ) => parseResponse(client.smsCampaigns[':campaignId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSmsCampaignsCampaignIdExportRecipientsKey() {
  return ['smsCampaigns', '/smsCampaigns/:campaignId/exportRecipients', 'POST'] as const
}

export function usePostSmsCampaignsCampaignIdExportRecipients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.smsCampaigns)[':campaignId']['exportRecipients']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmsCampaignsCampaignIdExportRecipientsKey()
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
            (typeof client.smsCampaigns)[':campaignId']['exportRecipients']['$post']
          >
        },
      ) =>
        parseResponse(
          client.smsCampaigns[':campaignId'].exportRecipients.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSmsCampaignsCampaignIdSendNowKey() {
  return ['smsCampaigns', '/smsCampaigns/:campaignId/sendNow', 'POST'] as const
}

export function usePostSmsCampaignsCampaignIdSendNow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['sendNow']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.smsCampaigns)[':campaignId']['sendNow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmsCampaignsCampaignIdSendNowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['sendNow']['$post']>
        },
      ) => parseResponse(client.smsCampaigns[':campaignId'].sendNow.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSmsCampaignsCampaignIdSendReportKey() {
  return ['smsCampaigns', '/smsCampaigns/:campaignId/sendReport', 'POST'] as const
}

export function usePostSmsCampaignsCampaignIdSendReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['sendReport']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.smsCampaigns)[':campaignId']['sendReport']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmsCampaignsCampaignIdSendReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['sendReport']['$post']>
        },
      ) => parseResponse(client.smsCampaigns[':campaignId'].sendReport.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSmsCampaignsCampaignIdSendTestKey() {
  return ['smsCampaigns', '/smsCampaigns/:campaignId/sendTest', 'POST'] as const
}

export function usePostSmsCampaignsCampaignIdSendTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['sendTest']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.smsCampaigns)[':campaignId']['sendTest']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmsCampaignsCampaignIdSendTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['sendTest']['$post']>
        },
      ) => parseResponse(client.smsCampaigns[':campaignId'].sendTest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSmsCampaignsCampaignIdStatusKey() {
  return ['smsCampaigns', '/smsCampaigns/:campaignId/status', 'PUT'] as const
}

export function usePutSmsCampaignsCampaignIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.smsCampaigns)[':campaignId']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSmsCampaignsCampaignIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['status']['$put']> },
      ) => parseResponse(client.smsCampaigns[':campaignId'].status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWhatsappCampaignsKey(
  args: InferRequestType<typeof client.whatsappCampaigns.$get>,
) {
  return ['whatsappCampaigns', '/whatsappCampaigns', args] as const
}

export function useGetWhatsappCampaigns<TError = unknown>(
  args: InferRequestType<typeof client.whatsappCampaigns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWhatsappCampaignsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whatsappCampaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWhatsappCampaigns<TError = unknown>(
  args: InferRequestType<typeof client.whatsappCampaigns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWhatsappCampaignsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whatsappCampaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWhatsappCampaignsKey() {
  return ['whatsappCampaigns', '/whatsappCampaigns', 'POST'] as const
}

export function usePostWhatsappCampaigns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.whatsappCampaigns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWhatsappCampaignsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.whatsappCampaigns.$post> }) =>
        parseResponse(client.whatsappCampaigns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWhatsappCampaignsConfigKey() {
  return ['whatsappCampaigns', '/whatsappCampaigns/config'] as const
}

export function useGetWhatsappCampaignsConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.config.$get>>>
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
        ? getGetWhatsappCampaignsConfigKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whatsappCampaigns.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWhatsappCampaignsConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.config.$get>>>
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
        ? getGetWhatsappCampaignsConfigKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whatsappCampaigns.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWhatsappCampaignsTemplateKey() {
  return ['whatsappCampaigns', '/whatsappCampaigns/template', 'POST'] as const
}

export function usePostWhatsappCampaignsTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.template.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.whatsappCampaigns.template.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWhatsappCampaignsTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.whatsappCampaigns.template.$post> },
      ) => parseResponse(client.whatsappCampaigns.template.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWhatsappCampaignsTemplateListKey(
  args: InferRequestType<(typeof client.whatsappCampaigns)['template-list']['$get']>,
) {
  return ['whatsappCampaigns', '/whatsappCampaigns/template-list', args] as const
}

export function useGetWhatsappCampaignsTemplateList<TError = unknown>(
  args: InferRequestType<(typeof client.whatsappCampaigns)['template-list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsappCampaigns)['template-list']['$get']>>
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
        ? getGetWhatsappCampaignsTemplateListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsappCampaigns)['template-list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.whatsappCampaigns['template-list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWhatsappCampaignsTemplateList<TError = unknown>(
  args: InferRequestType<(typeof client.whatsappCampaigns)['template-list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsappCampaigns)['template-list']['$get']>>
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
        ? getGetWhatsappCampaignsTemplateListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsappCampaigns)['template-list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.whatsappCampaigns['template-list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWhatsappCampaignsTemplateApprovalTemplateIdKey() {
  return ['whatsappCampaigns', '/whatsappCampaigns/template/approval/:templateId', 'POST'] as const
}

export function usePostWhatsappCampaignsTemplateApprovalTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.whatsappCampaigns.template.approval)[':templateId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWhatsappCampaignsTemplateApprovalTemplateIdKey()
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
            (typeof client.whatsappCampaigns.template.approval)[':templateId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.whatsappCampaigns.template.approval[':templateId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWhatsappCampaignsCampaignIdKey(
  args: InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$get']>,
) {
  return ['whatsappCampaigns', '/whatsappCampaigns/:campaignId', args] as const
}

export function useGetWhatsappCampaignsCampaignId<TError = unknown>(
  args: InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsappCampaigns)[':campaignId']['$get']>>
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
        ? getGetWhatsappCampaignsCampaignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsappCampaigns)[':campaignId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whatsappCampaigns[':campaignId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWhatsappCampaignsCampaignId<TError = unknown>(
  args: InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsappCampaigns)[':campaignId']['$get']>>
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
        ? getGetWhatsappCampaignsCampaignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsappCampaigns)[':campaignId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whatsappCampaigns[':campaignId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWhatsappCampaignsCampaignIdKey() {
  return ['whatsappCampaigns', '/whatsappCampaigns/:campaignId', 'PUT'] as const
}

export function usePutWhatsappCampaignsCampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsappCampaigns)[':campaignId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWhatsappCampaignsCampaignIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$put']> },
      ) => parseResponse(client.whatsappCampaigns[':campaignId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWhatsappCampaignsCampaignIdKey() {
  return ['whatsappCampaigns', '/whatsappCampaigns/:campaignId', 'DELETE'] as const
}

export function useDeleteWhatsappCampaignsCampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsappCampaigns)[':campaignId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWhatsappCampaignsCampaignIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$delete']> },
      ) => parseResponse(client.whatsappCampaigns[':campaignId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesKey(args: InferRequestType<typeof client.companies.$get>) {
  return ['companies', '/companies', args] as const
}

export function useGetCompanies<TError = unknown>(
  args: InferRequestType<typeof client.companies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCompaniesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanies<TError = unknown>(
  args: InferRequestType<typeof client.companies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCompaniesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCompaniesKey() {
  return ['companies', '/companies', 'POST'] as const
}

export function usePostCompanies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.companies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.companies.$post> }) =>
        parseResponse(client.companies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCompaniesImportKey() {
  return ['companies', '/companies/import', 'POST'] as const
}

export function usePostCompaniesImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.import.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.companies.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.companies.import.$post> }) =>
        parseResponse(client.companies.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCompaniesLinkUnlinkIdKey() {
  return ['companies', '/companies/link-unlink/:id', 'PATCH'] as const
}

export function usePatchCompaniesLinkUnlinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)['link-unlink'][':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.companies)['link-unlink'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCompaniesLinkUnlinkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.companies)['link-unlink'][':id']['$patch']> },
      ) => parseResponse(client.companies['link-unlink'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompaniesIdKey(
  args: InferRequestType<(typeof client.companies)[':id']['$get']>,
) {
  return ['companies', '/companies/:id', args] as const
}

export function useGetCompaniesId<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCompaniesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompaniesId<TError = unknown>(
  args: InferRequestType<(typeof client.companies)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCompaniesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.companies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCompaniesIdKey() {
  return ['companies', '/companies/:id', 'DELETE'] as const
}

export function useDeleteCompaniesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCompaniesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.companies)[':id']['$delete']> },
      ) => parseResponse(client.companies[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCompaniesIdKey() {
  return ['companies', '/companies/:id', 'PATCH'] as const
}

export function usePatchCompaniesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.companies)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCompaniesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.companies)[':id']['$patch']> },
      ) => parseResponse(client.companies[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrmAttributesKey() {
  return ['crm', '/crm/attributes', 'POST'] as const
}

export function usePostCrmAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.crm.attributes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.crm.attributes.$post> }) =>
        parseResponse(client.crm.attributes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCrmAttributesIdKey() {
  return ['crm', '/crm/attributes/:id', 'DELETE'] as const
}

export function useDeleteCrmAttributesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.attributes)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.attributes)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmAttributesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.crm.attributes)[':id']['$delete']> },
      ) => parseResponse(client.crm.attributes[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmAttributesIdKey() {
  return ['crm', '/crm/attributes/:id', 'PATCH'] as const
}

export function usePatchCrmAttributesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.attributes)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.attributes)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmAttributesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.crm.attributes)[':id']['$patch']> },
      ) => parseResponse(client.crm.attributes[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmAttributesCompaniesKey() {
  return ['crm', '/crm/attributes/companies'] as const
}

export function useGetCrmAttributesCompanies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.companies.$get>>>
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
        ? getGetCrmAttributesCompaniesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.companies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.attributes.companies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmAttributesCompanies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.companies.$get>>>
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
        ? getGetCrmAttributesCompaniesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.companies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.attributes.companies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCrmAttributesDealsKey() {
  return ['crm', '/crm/attributes/deals'] as const
}

export function useGetCrmAttributesDeals<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.deals.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrmAttributesDealsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.deals.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.attributes.deals.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmAttributesDeals<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.deals.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrmAttributesDealsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.deals.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.attributes.deals.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCrmDealsKey(args: InferRequestType<typeof client.crm.deals.$get>) {
  return ['crm', '/crm/deals', args] as const
}

export function useGetCrmDeals<TError = unknown>(
  args: InferRequestType<typeof client.crm.deals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.deals.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrmDealsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.deals.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.deals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmDeals<TError = unknown>(
  args: InferRequestType<typeof client.crm.deals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.deals.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrmDealsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.deals.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.deals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCrmDealsKey() {
  return ['crm', '/crm/deals', 'POST'] as const
}

export function usePostCrmDeals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.deals.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.crm.deals.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmDealsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.crm.deals.$post> }) =>
        parseResponse(client.crm.deals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrmDealsImportKey() {
  return ['crm', '/crm/deals/import', 'POST'] as const
}

export function usePostCrmDealsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.deals.import.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.crm.deals.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmDealsImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.crm.deals.import.$post> }) =>
        parseResponse(client.crm.deals.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmDealsLinkUnlinkIdKey() {
  return ['crm', '/crm/deals/link-unlink/:id', 'PATCH'] as const
}

export function usePatchCrmDealsLinkUnlinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.deals)['link-unlink'][':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.deals)['link-unlink'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmDealsLinkUnlinkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.crm.deals)['link-unlink'][':id']['$patch']> },
      ) => parseResponse(client.crm.deals['link-unlink'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmDealsIdKey(
  args: InferRequestType<(typeof client.crm.deals)[':id']['$get']>,
) {
  return ['crm', '/crm/deals/:id', args] as const
}

export function useGetCrmDealsId<TError = unknown>(
  args: InferRequestType<(typeof client.crm.deals)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.deals)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCrmDealsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.deals)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.deals[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmDealsId<TError = unknown>(
  args: InferRequestType<(typeof client.crm.deals)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.deals)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCrmDealsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.deals)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.deals[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCrmDealsIdKey() {
  return ['crm', '/crm/deals/:id', 'DELETE'] as const
}

export function useDeleteCrmDealsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.deals)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.deals)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmDealsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.crm.deals)[':id']['$delete']> },
      ) => parseResponse(client.crm.deals[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmDealsIdKey() {
  return ['crm', '/crm/deals/:id', 'PATCH'] as const
}

export function usePatchCrmDealsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.deals)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.deals)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmDealsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.crm.deals)[':id']['$patch']> },
      ) => parseResponse(client.crm.deals[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmFilesKey(args: InferRequestType<typeof client.crm.files.$get>) {
  return ['crm', '/crm/files', args] as const
}

export function useGetCrmFiles<TError = unknown>(
  args: InferRequestType<typeof client.crm.files.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.files.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrmFilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.files.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmFiles<TError = unknown>(
  args: InferRequestType<typeof client.crm.files.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.files.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrmFilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.files.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCrmFilesKey() {
  return ['crm', '/crm/files', 'POST'] as const
}

export function usePostCrmFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.files.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.crm.files.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.crm.files.$post> }) =>
        parseResponse(client.crm.files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmFilesIdKey(
  args: InferRequestType<(typeof client.crm.files)[':id']['$get']>,
) {
  return ['crm', '/crm/files/:id', args] as const
}

export function useGetCrmFilesId<TError = unknown>(
  args: InferRequestType<(typeof client.crm.files)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.files)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCrmFilesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.files)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.files[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmFilesId<TError = unknown>(
  args: InferRequestType<(typeof client.crm.files)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.files)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCrmFilesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.files)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.files[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCrmFilesIdKey() {
  return ['crm', '/crm/files/:id', 'DELETE'] as const
}

export function useDeleteCrmFilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.files)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.files)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmFilesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.crm.files)[':id']['$delete']> },
      ) => parseResponse(client.crm.files[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmFilesIdDataKey(
  args: InferRequestType<(typeof client.crm.files)[':id']['data']['$get']>,
) {
  return ['crm', '/crm/files/:id/data', args] as const
}

export function useGetCrmFilesIdData<TError = unknown>(
  args: InferRequestType<(typeof client.crm.files)[':id']['data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.files)[':id']['data']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetCrmFilesIdDataKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.files)[':id']['data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.files[':id'].data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmFilesIdData<TError = unknown>(
  args: InferRequestType<(typeof client.crm.files)[':id']['data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.files)[':id']['data']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetCrmFilesIdDataKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.files)[':id']['data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.files[':id'].data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCrmNotesKey(args: InferRequestType<typeof client.crm.notes.$get>) {
  return ['crm', '/crm/notes', args] as const
}

export function useGetCrmNotes<TError = unknown>(
  args: InferRequestType<typeof client.crm.notes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrmNotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmNotes<TError = unknown>(
  args: InferRequestType<typeof client.crm.notes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrmNotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCrmNotesKey() {
  return ['crm', '/crm/notes', 'POST'] as const
}

export function usePostCrmNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.crm.notes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.crm.notes.$post> }) =>
        parseResponse(client.crm.notes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmNotesIdKey(
  args: InferRequestType<(typeof client.crm.notes)[':id']['$get']>,
) {
  return ['crm', '/crm/notes/:id', args] as const
}

export function useGetCrmNotesId<TError = unknown>(
  args: InferRequestType<(typeof client.crm.notes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCrmNotesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.notes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmNotesId<TError = unknown>(
  args: InferRequestType<(typeof client.crm.notes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCrmNotesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.notes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCrmNotesIdKey() {
  return ['crm', '/crm/notes/:id', 'DELETE'] as const
}

export function useDeleteCrmNotesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.notes)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmNotesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.crm.notes)[':id']['$delete']> },
      ) => parseResponse(client.crm.notes[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmNotesIdKey() {
  return ['crm', '/crm/notes/:id', 'PATCH'] as const
}

export function usePatchCrmNotesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.notes)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmNotesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.crm.notes)[':id']['$patch']> },
      ) => parseResponse(client.crm.notes[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmPipelineDetailsKey() {
  return ['crm', '/crm/pipeline/details'] as const
}

export function useGetCrmPipelineDetails<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrmPipelineDetailsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.pipeline.details.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmPipelineDetails<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrmPipelineDetailsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.pipeline.details.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCrmPipelineDetailsAllKey() {
  return ['crm', '/crm/pipeline/details/all'] as const
}

export function useGetCrmPipelineDetailsAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.all.$get>>>
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
        ? getGetCrmPipelineDetailsAllKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.pipeline.details.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmPipelineDetailsAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.all.$get>>>
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
        ? getGetCrmPipelineDetailsAllKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.pipeline.details.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCrmPipelineDetailsPipelineIDKey(
  args: InferRequestType<(typeof client.crm.pipeline.details)[':pipelineID']['$get']>,
) {
  return ['crm', '/crm/pipeline/details/:pipelineID', args] as const
}

export function useGetCrmPipelineDetailsPipelineID<TError = unknown>(
  args: InferRequestType<(typeof client.crm.pipeline.details)[':pipelineID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.pipeline.details)[':pipelineID']['$get']>>
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
        ? getGetCrmPipelineDetailsPipelineIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.pipeline.details)[':pipelineID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.pipeline.details[':pipelineID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmPipelineDetailsPipelineID<TError = unknown>(
  args: InferRequestType<(typeof client.crm.pipeline.details)[':pipelineID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.pipeline.details)[':pipelineID']['$get']>>
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
        ? getGetCrmPipelineDetailsPipelineIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.pipeline.details)[':pipelineID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.pipeline.details[':pipelineID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCrmTasksKey(args: InferRequestType<typeof client.crm.tasks.$get>) {
  return ['crm', '/crm/tasks', args] as const
}

export function useGetCrmTasks<TError = unknown>(
  args: InferRequestType<typeof client.crm.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrmTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmTasks<TError = unknown>(
  args: InferRequestType<typeof client.crm.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrmTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCrmTasksKey() {
  return ['crm', '/crm/tasks', 'POST'] as const
}

export function usePostCrmTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.crm.tasks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.crm.tasks.$post> }) =>
        parseResponse(client.crm.tasks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmTasksIdKey(
  args: InferRequestType<(typeof client.crm.tasks)[':id']['$get']>,
) {
  return ['crm', '/crm/tasks/:id', args] as const
}

export function useGetCrmTasksId<TError = unknown>(
  args: InferRequestType<(typeof client.crm.tasks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.tasks)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCrmTasksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.tasks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.tasks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmTasksId<TError = unknown>(
  args: InferRequestType<(typeof client.crm.tasks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.tasks)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCrmTasksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.tasks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.tasks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCrmTasksIdKey() {
  return ['crm', '/crm/tasks/:id', 'DELETE'] as const
}

export function useDeleteCrmTasksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.tasks)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.tasks)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmTasksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.crm.tasks)[':id']['$delete']> },
      ) => parseResponse(client.crm.tasks[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmTasksIdKey() {
  return ['crm', '/crm/tasks/:id', 'PATCH'] as const
}

export function usePatchCrmTasksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.tasks)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.tasks)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmTasksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.crm.tasks)[':id']['$patch']> },
      ) => parseResponse(client.crm.tasks[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmTasktypesKey() {
  return ['crm', '/crm/tasktypes'] as const
}

export function useGetCrmTasktypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasktypes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrmTasktypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasktypes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.tasktypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmTasktypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasktypes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrmTasktypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasktypes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.tasktypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWhatsappSendMessageKey() {
  return ['whatsapp', '/whatsapp/sendMessage', 'POST'] as const
}

export function usePostWhatsappSendMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp.sendMessage.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.whatsapp.sendMessage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWhatsappSendMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.whatsapp.sendMessage.$post> },
      ) => parseResponse(client.whatsapp.sendMessage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWhatsappStatisticsEventsKey(
  args: InferRequestType<typeof client.whatsapp.statistics.events.$get>,
) {
  return ['whatsapp', '/whatsapp/statistics/events', args] as const
}

export function useGetWhatsappStatisticsEvents<TError = unknown>(
  args: InferRequestType<typeof client.whatsapp.statistics.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp.statistics.events.$get>>>
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
        ? getGetWhatsappStatisticsEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp.statistics.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whatsapp.statistics.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWhatsappStatisticsEvents<TError = unknown>(
  args: InferRequestType<typeof client.whatsapp.statistics.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp.statistics.events.$get>>>
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
        ? getGetWhatsappStatisticsEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp.statistics.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.whatsapp.statistics.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSmtpBlockedContactsKey(
  args: InferRequestType<typeof client.smtp.blockedContacts.$get>,
) {
  return ['smtp', '/smtp/blockedContacts', args] as const
}

export function useGetSmtpBlockedContacts<TError = unknown>(
  args: InferRequestType<typeof client.smtp.blockedContacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedContacts.$get>>>
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
        ? getGetSmtpBlockedContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedContacts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smtp.blockedContacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmtpBlockedContacts<TError = unknown>(
  args: InferRequestType<typeof client.smtp.blockedContacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedContacts.$get>>>
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
        ? getGetSmtpBlockedContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedContacts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smtp.blockedContacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSmtpBlockedContactsEmailKey() {
  return ['smtp', '/smtp/blockedContacts/:email', 'DELETE'] as const
}

export function useDeleteSmtpBlockedContactsEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.blockedContacts)[':email']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.smtp.blockedContacts)[':email']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSmtpBlockedContactsEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.smtp.blockedContacts)[':email']['$delete']> },
      ) => parseResponse(client.smtp.blockedContacts[':email'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSmtpBlockedDomainsKey() {
  return ['smtp', '/smtp/blockedDomains'] as const
}

export function useGetSmtpBlockedDomains<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedDomains.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmtpBlockedDomainsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedDomains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smtp.blockedDomains.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmtpBlockedDomains<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedDomains.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmtpBlockedDomainsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedDomains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smtp.blockedDomains.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSmtpBlockedDomainsKey() {
  return ['smtp', '/smtp/blockedDomains', 'POST'] as const
}

export function usePostSmtpBlockedDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedDomains.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.smtp.blockedDomains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmtpBlockedDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.smtp.blockedDomains.$post> }) =>
        parseResponse(client.smtp.blockedDomains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSmtpBlockedDomainsDomainKey() {
  return ['smtp', '/smtp/blockedDomains/:domain', 'DELETE'] as const
}

export function useDeleteSmtpBlockedDomainsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.blockedDomains)[':domain']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.smtp.blockedDomains)[':domain']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSmtpBlockedDomainsDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.smtp.blockedDomains)[':domain']['$delete']> },
      ) => parseResponse(client.smtp.blockedDomains[':domain'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSmtpDeleteHardbouncesKey() {
  return ['smtp', '/smtp/deleteHardbounces', 'POST'] as const
}

export function usePostSmtpDeleteHardbounces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.smtp.deleteHardbounces.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.smtp.deleteHardbounces.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmtpDeleteHardbouncesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.smtp.deleteHardbounces.$post> },
      ) => parseResponse(client.smtp.deleteHardbounces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSmtpEmailKey() {
  return ['smtp', '/smtp/email', 'POST'] as const
}

export function usePostSmtpEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.email.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.smtp.email.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmtpEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.smtp.email.$post> }) =>
        parseResponse(client.smtp.email.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSmtpEmailIdentifierKey() {
  return ['smtp', '/smtp/email/:identifier', 'DELETE'] as const
}

export function useDeleteSmtpEmailIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.email)[':identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.smtp.email)[':identifier']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSmtpEmailIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.smtp.email)[':identifier']['$delete']> },
      ) => parseResponse(client.smtp.email[':identifier'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSmtpEmailStatusIdentifierKey(
  args: InferRequestType<(typeof client.smtp.emailStatus)[':identifier']['$get']>,
) {
  return ['smtp', '/smtp/emailStatus/:identifier', args] as const
}

export function useGetSmtpEmailStatusIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.smtp.emailStatus)[':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.emailStatus)[':identifier']['$get']>>
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
        ? getGetSmtpEmailStatusIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.emailStatus)[':identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smtp.emailStatus[':identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmtpEmailStatusIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.smtp.emailStatus)[':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.emailStatus)[':identifier']['$get']>>
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
        ? getGetSmtpEmailStatusIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.emailStatus)[':identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smtp.emailStatus[':identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSmtpEmailsKey(args: InferRequestType<typeof client.smtp.emails.$get>) {
  return ['smtp', '/smtp/emails', args] as const
}

export function useGetSmtpEmails<TError = unknown>(
  args: InferRequestType<typeof client.smtp.emails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.emails.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmtpEmailsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.emails.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smtp.emails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmtpEmails<TError = unknown>(
  args: InferRequestType<typeof client.smtp.emails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.emails.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmtpEmailsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.emails.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smtp.emails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSmtpEmailsUuidKey(
  args: InferRequestType<(typeof client.smtp.emails)[':uuid']['$get']>,
) {
  return ['smtp', '/smtp/emails/:uuid', args] as const
}

export function useGetSmtpEmailsUuid<TError = unknown>(
  args: InferRequestType<(typeof client.smtp.emails)[':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.smtp.emails)[':uuid']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSmtpEmailsUuidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.smtp.emails)[':uuid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smtp.emails[':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmtpEmailsUuid<TError = unknown>(
  args: InferRequestType<(typeof client.smtp.emails)[':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.smtp.emails)[':uuid']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSmtpEmailsUuidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.smtp.emails)[':uuid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smtp.emails[':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSmtpLogIdentifierKey() {
  return ['smtp', '/smtp/log/:identifier', 'DELETE'] as const
}

export function useDeleteSmtpLogIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.log)[':identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.smtp.log)[':identifier']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSmtpLogIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.smtp.log)[':identifier']['$delete']> },
      ) => parseResponse(client.smtp.log[':identifier'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSmtpStatisticsAggregatedReportKey(
  args: InferRequestType<typeof client.smtp.statistics.aggregatedReport.$get>,
) {
  return ['smtp', '/smtp/statistics/aggregatedReport', args] as const
}

export function useGetSmtpStatisticsAggregatedReport<TError = unknown>(
  args: InferRequestType<typeof client.smtp.statistics.aggregatedReport.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.smtp.statistics.aggregatedReport.$get>>
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
        ? getGetSmtpStatisticsAggregatedReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.smtp.statistics.aggregatedReport.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smtp.statistics.aggregatedReport.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmtpStatisticsAggregatedReport<TError = unknown>(
  args: InferRequestType<typeof client.smtp.statistics.aggregatedReport.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.smtp.statistics.aggregatedReport.$get>>
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
        ? getGetSmtpStatisticsAggregatedReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.smtp.statistics.aggregatedReport.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smtp.statistics.aggregatedReport.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSmtpStatisticsEventsKey(
  args: InferRequestType<typeof client.smtp.statistics.events.$get>,
) {
  return ['smtp', '/smtp/statistics/events', args] as const
}

export function useGetSmtpStatisticsEvents<TError = unknown>(
  args: InferRequestType<typeof client.smtp.statistics.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.events.$get>>>
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
        ? getGetSmtpStatisticsEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smtp.statistics.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmtpStatisticsEvents<TError = unknown>(
  args: InferRequestType<typeof client.smtp.statistics.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.events.$get>>>
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
        ? getGetSmtpStatisticsEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smtp.statistics.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSmtpStatisticsReportsKey(
  args: InferRequestType<typeof client.smtp.statistics.reports.$get>,
) {
  return ['smtp', '/smtp/statistics/reports', args] as const
}

export function useGetSmtpStatisticsReports<TError = unknown>(
  args: InferRequestType<typeof client.smtp.statistics.reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.reports.$get>>>
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
        ? getGetSmtpStatisticsReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.reports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smtp.statistics.reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmtpStatisticsReports<TError = unknown>(
  args: InferRequestType<typeof client.smtp.statistics.reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.reports.$get>>>
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
        ? getGetSmtpStatisticsReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.reports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smtp.statistics.reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSmtpTemplatePreviewKey() {
  return ['smtp', '/smtp/template/preview', 'POST'] as const
}

export function usePostSmtpTemplatePreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.smtp.template.preview.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.smtp.template.preview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmtpTemplatePreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.smtp.template.preview.$post> },
      ) => parseResponse(client.smtp.template.preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSmtpTemplatesKey(args: InferRequestType<typeof client.smtp.templates.$get>) {
  return ['smtp', '/smtp/templates', args] as const
}

export function useGetSmtpTemplates<TError = unknown>(
  args: InferRequestType<typeof client.smtp.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmtpTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smtp.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmtpTemplates<TError = unknown>(
  args: InferRequestType<typeof client.smtp.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmtpTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smtp.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSmtpTemplatesKey() {
  return ['smtp', '/smtp/templates', 'POST'] as const
}

export function usePostSmtpTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.templates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.smtp.templates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmtpTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.smtp.templates.$post> }) =>
        parseResponse(client.smtp.templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSmtpTemplatesTemplateIdKey(
  args: InferRequestType<(typeof client.smtp.templates)[':templateId']['$get']>,
) {
  return ['smtp', '/smtp/templates/:templateId', args] as const
}

export function useGetSmtpTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.smtp.templates)[':templateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.templates)[':templateId']['$get']>>
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
        ? getGetSmtpTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.templates)[':templateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smtp.templates[':templateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmtpTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.smtp.templates)[':templateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.templates)[':templateId']['$get']>>
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
        ? getGetSmtpTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.templates)[':templateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.smtp.templates[':templateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSmtpTemplatesTemplateIdKey() {
  return ['smtp', '/smtp/templates/:templateId', 'PUT'] as const
}

export function usePutSmtpTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.templates)[':templateId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.smtp.templates)[':templateId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSmtpTemplatesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.smtp.templates)[':templateId']['$put']> },
      ) => parseResponse(client.smtp.templates[':templateId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSmtpTemplatesTemplateIdKey() {
  return ['smtp', '/smtp/templates/:templateId', 'DELETE'] as const
}

export function useDeleteSmtpTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.templates)[':templateId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.smtp.templates)[':templateId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSmtpTemplatesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.smtp.templates)[':templateId']['$delete']> },
      ) => parseResponse(client.smtp.templates[':templateId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSmtpTemplatesTemplateIdSendTestKey() {
  return ['smtp', '/smtp/templates/:templateId/sendTest', 'POST'] as const
}

export function usePostSmtpTemplatesTemplateIdSendTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.templates)[':templateId']['sendTest']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.smtp.templates)[':templateId']['sendTest']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmtpTemplatesTemplateIdSendTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.smtp.templates)[':templateId']['sendTest']['$post']>
        },
      ) => parseResponse(client.smtp.templates[':templateId'].sendTest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransactionalSMSSendKey() {
  return ['transactionalSMS', '/transactionalSMS/send', 'POST'] as const
}

export function usePostTransactionalSMSSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transactionalSMS.send.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transactionalSMS.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionalSMSSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transactionalSMS.send.$post> },
      ) => parseResponse(client.transactionalSMS.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransactionalSMSSmsKey() {
  return ['transactionalSMS', '/transactionalSMS/sms', 'POST'] as const
}

export function usePostTransactionalSMSSms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transactionalSMS.sms.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transactionalSMS.sms.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionalSMSSmsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transactionalSMS.sms.$post> },
      ) => parseResponse(client.transactionalSMS.sms.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransactionalSMSStatisticsAggregatedReportKey(
  args: InferRequestType<typeof client.transactionalSMS.statistics.aggregatedReport.$get>,
) {
  return ['transactionalSMS', '/transactionalSMS/statistics/aggregatedReport', args] as const
}

export function useGetTransactionalSMSStatisticsAggregatedReport<TError = unknown>(
  args: InferRequestType<typeof client.transactionalSMS.statistics.aggregatedReport.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.transactionalSMS.statistics.aggregatedReport.$get>>
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
        ? getGetTransactionalSMSStatisticsAggregatedReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.transactionalSMS.statistics.aggregatedReport.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.transactionalSMS.statistics.aggregatedReport.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactionalSMSStatisticsAggregatedReport<TError = unknown>(
  args: InferRequestType<typeof client.transactionalSMS.statistics.aggregatedReport.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.transactionalSMS.statistics.aggregatedReport.$get>>
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
        ? getGetTransactionalSMSStatisticsAggregatedReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.transactionalSMS.statistics.aggregatedReport.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.transactionalSMS.statistics.aggregatedReport.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTransactionalSMSStatisticsEventsKey(
  args: InferRequestType<typeof client.transactionalSMS.statistics.events.$get>,
) {
  return ['transactionalSMS', '/transactionalSMS/statistics/events', args] as const
}

export function useGetTransactionalSMSStatisticsEvents<TError = unknown>(
  args: InferRequestType<typeof client.transactionalSMS.statistics.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.transactionalSMS.statistics.events.$get>>
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
        ? getGetTransactionalSMSStatisticsEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.transactionalSMS.statistics.events.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.transactionalSMS.statistics.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactionalSMSStatisticsEvents<TError = unknown>(
  args: InferRequestType<typeof client.transactionalSMS.statistics.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.transactionalSMS.statistics.events.$get>>
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
        ? getGetTransactionalSMSStatisticsEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.transactionalSMS.statistics.events.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.transactionalSMS.statistics.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTransactionalSMSStatisticsReportsKey(
  args: InferRequestType<typeof client.transactionalSMS.statistics.reports.$get>,
) {
  return ['transactionalSMS', '/transactionalSMS/statistics/reports', args] as const
}

export function useGetTransactionalSMSStatisticsReports<TError = unknown>(
  args: InferRequestType<typeof client.transactionalSMS.statistics.reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.transactionalSMS.statistics.reports.$get>>
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
        ? getGetTransactionalSMSStatisticsReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.transactionalSMS.statistics.reports.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.transactionalSMS.statistics.reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactionalSMSStatisticsReports<TError = unknown>(
  args: InferRequestType<typeof client.transactionalSMS.statistics.reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.transactionalSMS.statistics.reports.$get>>
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
        ? getGetTransactionalSMSStatisticsReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.transactionalSMS.statistics.reports.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.transactionalSMS.statistics.reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTransactionalSMSTemplatesKey(
  args: InferRequestType<typeof client.transactionalSMS.templates.$get>,
) {
  return ['transactionalSMS', '/transactionalSMS/templates', args] as const
}

export function useGetTransactionalSMSTemplates<TError = unknown>(
  args: InferRequestType<typeof client.transactionalSMS.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.transactionalSMS.templates.$get>>>
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
        ? getGetTransactionalSMSTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.transactionalSMS.templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactionalSMS.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactionalSMSTemplates<TError = unknown>(
  args: InferRequestType<typeof client.transactionalSMS.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.transactionalSMS.templates.$get>>>
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
        ? getGetTransactionalSMSTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.transactionalSMS.templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactionalSMS.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
