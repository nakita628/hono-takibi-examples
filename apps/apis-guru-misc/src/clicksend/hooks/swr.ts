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

export function getAccountVerifyKey() {
  return ['account-verify'] as const
}

export function getAutomationsKey() {
  return ['automations'] as const
}

export function getContactSuggestionsKey() {
  return ['contact-suggestions'] as const
}

export function getCountriesKey() {
  return ['countries'] as const
}

export function getDeliveryIssuesKey() {
  return ['delivery-issues'] as const
}

export function getEmailKey() {
  return ['email'] as const
}

export function getEmailCampaignsKey() {
  return ['email-campaigns'] as const
}

export function getFaxKey() {
  return ['fax'] as const
}

export function getForgotPasswordKey() {
  return ['forgot-password'] as const
}

export function getForgotUsernameKey() {
  return ['forgot-username'] as const
}

export function getListsKey() {
  return ['lists'] as const
}

export function getMmsKey() {
  return ['mms'] as const
}

export function getNumbersKey() {
  return ['numbers'] as const
}

export function getPostKey() {
  return ['post'] as const
}

export function getPricingKey() {
  return ['pricing'] as const
}

export function getRechargeKey() {
  return ['recharge'] as const
}

export function getReferralKey() {
  return ['referral'] as const
}

export function getResellerKey() {
  return ['reseller'] as const
}

export function getSdkDownloadKey() {
  return ['sdk-download'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getSmsKey() {
  return ['sms'] as const
}

export function getSmsCampaignsKey() {
  return ['sms-campaigns'] as const
}

export function getStatisticsKey() {
  return ['statistics'] as const
}

export function getSubaccountsKey() {
  return ['subaccounts'] as const
}

export function getTimezonesKey() {
  return ['timezones'] as const
}

export function getUploadsConvertConvertKey() {
  return ['uploads?convert={convert}'] as const
}

export function getVoiceKey() {
  return ['voice'] as const
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

export function getPutAccountKey() {
  return ['account', '/account', 'PUT'] as const
}

export function usePutAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.account.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.$put> }) =>
        parseResponse(client.account.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountKey() {
  return ['account', '/account', 'POST'] as const
}

export function usePostAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.account.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.$post> }) =>
        parseResponse(client.account.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccountVerifySendKey() {
  return ['account-verify', '/account-verify/send', 'PUT'] as const
}

export function usePutAccountVerifySend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['account-verify']['send']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['account-verify']['send']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountVerifySendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['account-verify']['send']['$put']> },
      ) => parseResponse(client['account-verify'].send.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccountVerifyVerifyActivationTokenKey() {
  return ['account-verify', '/account-verify/verify/:activation_token', 'PUT'] as const
}

export function usePutAccountVerifyVerifyActivationToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['account-verify']['verify'][':activation_token']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['account-verify']['verify'][':activation_token']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountVerifyVerifyActivationTokenKey()
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
            (typeof client)['account-verify']['verify'][':activation_token']['$put']
          >
        },
      ) =>
        parseResponse(
          client['account-verify'].verify[':activation_token'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountUsageYearMonthTypeKey(
  args: InferRequestType<(typeof client.account.usage)[':year'][':month'][':type']['$get']>,
) {
  return ['account', '/account/usage/:year/:month/:type', args] as const
}

export function useGetAccountUsageYearMonthType<TError = unknown>(
  args: InferRequestType<(typeof client.account.usage)[':year'][':month'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.usage)[':year'][':month'][':type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountUsageYearMonthTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.usage)[':year'][':month'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.usage[':year'][':month'][':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountUsageYearMonthType<TError = unknown>(
  args: InferRequestType<(typeof client.account.usage)[':year'][':month'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.usage)[':year'][':month'][':type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountUsageYearMonthTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.usage)[':year'][':month'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.usage[':year'][':month'][':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAutomationsEmailReceiptKey() {
  return ['automations', '/automations/email/receipt'] as const
}

export function useGetAutomationsEmailReceipt<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.email.receipt.$get>>>
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
        ? getGetAutomationsEmailReceiptKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.automations.email.receipt.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automations.email.receipt.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationsEmailReceipt<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.email.receipt.$get>>>
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
        ? getGetAutomationsEmailReceiptKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.automations.email.receipt.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automations.email.receipt.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAutomationsEmailReceiptKey() {
  return ['automations', '/automations/email/receipt', 'POST'] as const
}

export function usePostAutomationsEmailReceipt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.email.receipt.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.automations.email.receipt.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationsEmailReceiptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.automations.email.receipt.$post> },
      ) => parseResponse(client.automations.email.receipt.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationsEmailReceiptRuleIdKey(
  args: InferRequestType<(typeof client.automations.email.receipt)[':rule_id']['$get']>,
) {
  return ['automations', '/automations/email/receipt/:rule_id', args] as const
}

export function useGetAutomationsEmailReceiptRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.automations.email.receipt)[':rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations.email.receipt)[':rule_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationsEmailReceiptRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations.email.receipt)[':rule_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.automations.email.receipt[':rule_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationsEmailReceiptRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.automations.email.receipt)[':rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations.email.receipt)[':rule_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationsEmailReceiptRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations.email.receipt)[':rule_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.automations.email.receipt[':rule_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAutomationsEmailReceiptRuleIdKey() {
  return ['automations', '/automations/email/receipt/:rule_id', 'PUT'] as const
}

export function usePutAutomationsEmailReceiptRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations.email.receipt)[':rule_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automations.email.receipt)[':rule_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAutomationsEmailReceiptRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.automations.email.receipt)[':rule_id']['$put']> },
      ) => parseResponse(client.automations.email.receipt[':rule_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAutomationsEmailReceiptRuleIdKey() {
  return ['automations', '/automations/email/receipt/:rule_id', 'DELETE'] as const
}

export function useDeleteAutomationsEmailReceiptRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations.email.receipt)[':rule_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automations.email.receipt)[':rule_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAutomationsEmailReceiptRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.automations.email.receipt)[':rule_id']['$delete']>
        },
      ) => parseResponse(client.automations.email.receipt[':rule_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationsFaxInboundKey() {
  return ['automations', '/automations/fax/inbound'] as const
}

export function useGetAutomationsFaxInbound<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.inbound.$get>>>
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
        ? getGetAutomationsFaxInboundKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.inbound.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automations.fax.inbound.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationsFaxInbound<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.inbound.$get>>>
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
        ? getGetAutomationsFaxInboundKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.inbound.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automations.fax.inbound.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAutomationsFaxInboundKey() {
  return ['automations', '/automations/fax/inbound', 'POST'] as const
}

export function usePostAutomationsFaxInbound<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.inbound.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.automations.fax.inbound.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationsFaxInboundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.automations.fax.inbound.$post> },
      ) => parseResponse(client.automations.fax.inbound.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationsFaxInboundInboundRuleIdKey(
  args: InferRequestType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$get']>,
) {
  return ['automations', '/automations/fax/inbound/:inbound_rule_id', args] as const
}

export function useGetAutomationsFaxInboundInboundRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationsFaxInboundInboundRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.automations.fax.inbound[':inbound_rule_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationsFaxInboundInboundRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationsFaxInboundInboundRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.automations.fax.inbound[':inbound_rule_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAutomationsFaxInboundInboundRuleIdKey() {
  return ['automations', '/automations/fax/inbound/:inbound_rule_id', 'PUT'] as const
}

export function usePutAutomationsFaxInboundInboundRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAutomationsFaxInboundInboundRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$put']>
        },
      ) =>
        parseResponse(client.automations.fax.inbound[':inbound_rule_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAutomationsFaxInboundInboundRuleIdKey() {
  return ['automations', '/automations/fax/inbound/:inbound_rule_id', 'DELETE'] as const
}

export function useDeleteAutomationsFaxInboundInboundRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAutomationsFaxInboundInboundRuleIdKey()
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
            (typeof client.automations.fax.inbound)[':inbound_rule_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.automations.fax.inbound[':inbound_rule_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationsFaxReceiptsKey() {
  return ['automations', '/automations/fax/receipts'] as const
}

export function useGetAutomationsFaxReceipts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.receipts.$get>>>
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
        ? getGetAutomationsFaxReceiptsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.receipts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automations.fax.receipts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationsFaxReceipts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.receipts.$get>>>
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
        ? getGetAutomationsFaxReceiptsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.receipts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automations.fax.receipts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAutomationsFaxReceiptsKey() {
  return ['automations', '/automations/fax/receipts', 'POST'] as const
}

export function usePostAutomationsFaxReceipts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.receipts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.automations.fax.receipts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationsFaxReceiptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.automations.fax.receipts.$post> },
      ) => parseResponse(client.automations.fax.receipts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationsFaxReceiptsRuleIdKey(
  args: InferRequestType<(typeof client.automations.fax.receipts)[':rule_id']['$get']>,
) {
  return ['automations', '/automations/fax/receipts/:rule_id', args] as const
}

export function useGetAutomationsFaxReceiptsRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.automations.fax.receipts)[':rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations.fax.receipts)[':rule_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationsFaxReceiptsRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations.fax.receipts)[':rule_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.automations.fax.receipts[':rule_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationsFaxReceiptsRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.automations.fax.receipts)[':rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations.fax.receipts)[':rule_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationsFaxReceiptsRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations.fax.receipts)[':rule_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.automations.fax.receipts[':rule_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAutomationsFaxReceiptsRuleIdKey() {
  return ['automations', '/automations/fax/receipts/:rule_id', 'PUT'] as const
}

export function usePutAutomationsFaxReceiptsRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations.fax.receipts)[':rule_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automations.fax.receipts)[':rule_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAutomationsFaxReceiptsRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.automations.fax.receipts)[':rule_id']['$put']> },
      ) => parseResponse(client.automations.fax.receipts[':rule_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAutomationsFaxReceiptsRuleIdKey() {
  return ['automations', '/automations/fax/receipts/:rule_id', 'DELETE'] as const
}

export function useDeleteAutomationsFaxReceiptsRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations.fax.receipts)[':rule_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automations.fax.receipts)[':rule_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAutomationsFaxReceiptsRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.automations.fax.receipts)[':rule_id']['$delete']>
        },
      ) => parseResponse(client.automations.fax.receipts[':rule_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationsSmsInboundKey() {
  return ['automations', '/automations/sms/inbound'] as const
}

export function useGetAutomationsSmsInbound<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.inbound.$get>>>
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
        ? getGetAutomationsSmsInboundKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.inbound.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automations.sms.inbound.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationsSmsInbound<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.inbound.$get>>>
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
        ? getGetAutomationsSmsInboundKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.inbound.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automations.sms.inbound.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAutomationsSmsInboundIndexKey() {
  return ['automations', '/automations/sms/inbound/', 'POST'] as const
}

export function usePostAutomationsSmsInboundIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.inbound.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.automations.sms.inbound.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationsSmsInboundIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.automations.sms.inbound.index.$post> },
      ) => parseResponse(client.automations.sms.inbound.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationsSmsInboundInboundRuleIdKey(
  args: InferRequestType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$get']>,
) {
  return ['automations', '/automations/sms/inbound/:inbound_rule_id', args] as const
}

export function useGetAutomationsSmsInboundInboundRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationsSmsInboundInboundRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.automations.sms.inbound[':inbound_rule_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationsSmsInboundInboundRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationsSmsInboundInboundRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.automations.sms.inbound[':inbound_rule_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAutomationsSmsInboundInboundRuleIdKey() {
  return ['automations', '/automations/sms/inbound/:inbound_rule_id', 'PUT'] as const
}

export function usePutAutomationsSmsInboundInboundRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAutomationsSmsInboundInboundRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$put']>
        },
      ) =>
        parseResponse(client.automations.sms.inbound[':inbound_rule_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAutomationsSmsInboundInboundRuleIdKey() {
  return ['automations', '/automations/sms/inbound/:inbound_rule_id', 'DELETE'] as const
}

export function useDeleteAutomationsSmsInboundInboundRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAutomationsSmsInboundInboundRuleIdKey()
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
            (typeof client.automations.sms.inbound)[':inbound_rule_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.automations.sms.inbound[':inbound_rule_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationsSmsReceiptsKey() {
  return ['automations', '/automations/sms/receipts'] as const
}

export function useGetAutomationsSmsReceipts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.receipts.$get>>>
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
        ? getGetAutomationsSmsReceiptsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.receipts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automations.sms.receipts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationsSmsReceipts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.receipts.$get>>>
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
        ? getGetAutomationsSmsReceiptsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.receipts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automations.sms.receipts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAutomationsSmsReceiptsKey() {
  return ['automations', '/automations/sms/receipts', 'POST'] as const
}

export function usePostAutomationsSmsReceipts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.receipts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.automations.sms.receipts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationsSmsReceiptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.automations.sms.receipts.$post> },
      ) => parseResponse(client.automations.sms.receipts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationsSmsReceiptsReceiptRuleIdKey(
  args: InferRequestType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$get']>,
) {
  return ['automations', '/automations/sms/receipts/:receipt_rule_id', args] as const
}

export function useGetAutomationsSmsReceiptsReceiptRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$get']>
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
        ? getGetAutomationsSmsReceiptsReceiptRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.automations.sms.receipts[':receipt_rule_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationsSmsReceiptsReceiptRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$get']>
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
        ? getGetAutomationsSmsReceiptsReceiptRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.automations.sms.receipts[':receipt_rule_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAutomationsSmsReceiptsReceiptRuleIdKey() {
  return ['automations', '/automations/sms/receipts/:receipt_rule_id', 'PUT'] as const
}

export function usePutAutomationsSmsReceiptsReceiptRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAutomationsSmsReceiptsReceiptRuleIdKey()
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
            (typeof client.automations.sms.receipts)[':receipt_rule_id']['$put']
          >
        },
      ) =>
        parseResponse(client.automations.sms.receipts[':receipt_rule_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAutomationsSmsReceiptsReceiptRuleIdKey() {
  return ['automations', '/automations/sms/receipts/:receipt_rule_id', 'DELETE'] as const
}

export function useDeleteAutomationsSmsReceiptsReceiptRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAutomationsSmsReceiptsReceiptRuleIdKey()
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
            (typeof client.automations.sms.receipts)[':receipt_rule_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.automations.sms.receipts[':receipt_rule_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationsVoiceReceiptsKey() {
  return ['automations', '/automations/voice/receipts'] as const
}

export function useGetAutomationsVoiceReceipts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.voice.receipts.$get>>>
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
        ? getGetAutomationsVoiceReceiptsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.automations.voice.receipts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automations.voice.receipts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationsVoiceReceipts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.voice.receipts.$get>>>
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
        ? getGetAutomationsVoiceReceiptsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.automations.voice.receipts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automations.voice.receipts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAutomationsVoiceReceiptsKey() {
  return ['automations', '/automations/voice/receipts', 'POST'] as const
}

export function usePostAutomationsVoiceReceipts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.voice.receipts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.automations.voice.receipts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationsVoiceReceiptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.automations.voice.receipts.$post> },
      ) => parseResponse(client.automations.voice.receipts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationsVoiceReceiptsReceiptRuleIdKey(
  args: InferRequestType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$get']>,
) {
  return ['automations', '/automations/voice/receipts/:receipt_rule_id', args] as const
}

export function useGetAutomationsVoiceReceiptsReceiptRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$get']>
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
        ? getGetAutomationsVoiceReceiptsReceiptRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.automations.voice.receipts[':receipt_rule_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationsVoiceReceiptsReceiptRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$get']>
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
        ? getGetAutomationsVoiceReceiptsReceiptRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.automations.voice.receipts[':receipt_rule_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAutomationsVoiceReceiptsReceiptRuleIdKey() {
  return ['automations', '/automations/voice/receipts/:receipt_rule_id', 'PUT'] as const
}

export function usePutAutomationsVoiceReceiptsReceiptRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAutomationsVoiceReceiptsReceiptRuleIdKey()
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
            (typeof client.automations.voice.receipts)[':receipt_rule_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.automations.voice.receipts[':receipt_rule_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAutomationsVoiceReceiptsReceiptRuleIdKey() {
  return ['automations', '/automations/voice/receipts/:receipt_rule_id', 'DELETE'] as const
}

export function useDeleteAutomationsVoiceReceiptsReceiptRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAutomationsVoiceReceiptsReceiptRuleIdKey()
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
            (typeof client.automations.voice.receipts)[':receipt_rule_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.automations.voice.receipts[':receipt_rule_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetContactSuggestionsKey() {
  return ['contact-suggestions', '/contact-suggestions'] as const
}

export function useGetContactSuggestions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-suggestions']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactSuggestionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-suggestions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['contact-suggestions'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactSuggestions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-suggestions']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactSuggestionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-suggestions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['contact-suggestions'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCountriesKey() {
  return ['countries', '/countries'] as const
}

export function useGetCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCountriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.countries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCountriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.countries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDeliveryIssuesKey() {
  return ['delivery-issues', '/delivery-issues'] as const
}

export function useGetDeliveryIssues<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-issues']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeliveryIssuesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-issues']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['delivery-issues'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeliveryIssues<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-issues']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeliveryIssuesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-issues']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['delivery-issues'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDeliveryIssuesKey() {
  return ['delivery-issues', '/delivery-issues', 'POST'] as const
}

export function usePostDeliveryIssues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-issues']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['delivery-issues']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeliveryIssuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['delivery-issues']['$post']> },
      ) => parseResponse(client['delivery-issues'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmailCampaignsKey() {
  return ['email-campaigns', '/email-campaigns'] as const
}

export function useGetEmailCampaigns<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['email-campaigns']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailCampaignsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['email-campaigns']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['email-campaigns'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailCampaigns<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['email-campaigns']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailCampaignsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['email-campaigns']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['email-campaigns'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmailCampaignsPriceKey() {
  return ['email-campaigns', '/email-campaigns/price', 'POST'] as const
}

export function usePostEmailCampaignsPrice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['email-campaigns']['price']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['email-campaigns']['price']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailCampaignsPriceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['email-campaigns']['price']['$post']> },
      ) => parseResponse(client['email-campaigns'].price.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEmailCampaignsSendKey() {
  return ['email-campaigns', '/email-campaigns/send', 'POST'] as const
}

export function usePostEmailCampaignsSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['email-campaigns']['send']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['email-campaigns']['send']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailCampaignsSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['email-campaigns']['send']['$post']> },
      ) => parseResponse(client['email-campaigns'].send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmailCampaignsCampaignIdHistoryKey(
  args: InferRequestType<(typeof client)['email-campaigns'][':campaign_id']['history']['$get']>,
) {
  return ['email-campaigns', '/email-campaigns/:campaign_id/history', args] as const
}

export function useGetEmailCampaignsCampaignIdHistory<TError = unknown>(
  args: InferRequestType<(typeof client)['email-campaigns'][':campaign_id']['history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['email-campaigns'][':campaign_id']['history']['$get']>
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
        ? getGetEmailCampaignsCampaignIdHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['email-campaigns'][':campaign_id']['history']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['email-campaigns'][':campaign_id'].history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailCampaignsCampaignIdHistory<TError = unknown>(
  args: InferRequestType<(typeof client)['email-campaigns'][':campaign_id']['history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['email-campaigns'][':campaign_id']['history']['$get']>
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
        ? getGetEmailCampaignsCampaignIdHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['email-campaigns'][':campaign_id']['history']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['email-campaigns'][':campaign_id'].history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmailCampaignsEmailCampaignIdKey(
  args: InferRequestType<(typeof client)['email-campaigns'][':email_campaign_id']['$get']>,
) {
  return ['email-campaigns', '/email-campaigns/:email_campaign_id', args] as const
}

export function useGetEmailCampaignsEmailCampaignId<TError = unknown>(
  args: InferRequestType<(typeof client)['email-campaigns'][':email_campaign_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['email-campaigns'][':email_campaign_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEmailCampaignsEmailCampaignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['email-campaigns'][':email_campaign_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['email-campaigns'][':email_campaign_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailCampaignsEmailCampaignId<TError = unknown>(
  args: InferRequestType<(typeof client)['email-campaigns'][':email_campaign_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['email-campaigns'][':email_campaign_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEmailCampaignsEmailCampaignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['email-campaigns'][':email_campaign_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['email-campaigns'][':email_campaign_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEmailCampaignsEmailCampaignIdKey() {
  return ['email-campaigns', '/email-campaigns/:email_campaign_id', 'PUT'] as const
}

export function usePutEmailCampaignsEmailCampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['email-campaigns'][':email_campaign_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['email-campaigns'][':email_campaign_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmailCampaignsEmailCampaignIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['email-campaigns'][':email_campaign_id']['$put']>
        },
      ) => parseResponse(client['email-campaigns'][':email_campaign_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutEmailCampaignsEmailCampaignIdCancelKey() {
  return ['email-campaigns', '/email-campaigns/:email_campaign_id/cancel', 'PUT'] as const
}

export function usePutEmailCampaignsEmailCampaignIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['email-campaigns'][':email_campaign_id']['cancel']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['email-campaigns'][':email_campaign_id']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmailCampaignsEmailCampaignIdCancelKey()
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
            (typeof client)['email-campaigns'][':email_campaign_id']['cancel']['$put']
          >
        },
      ) =>
        parseResponse(
          client['email-campaigns'][':email_campaign_id'].cancel.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutEmailAddressVerifyEmailAddressIdSendKey() {
  return ['email', '/email/address-verify/:email_address_id/send', 'PUT'] as const
}

export function usePutEmailAddressVerifyEmailAddressIdSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.email)['address-verify'][':email_address_id']['send']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.email)['address-verify'][':email_address_id']['send']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmailAddressVerifyEmailAddressIdSendKey()
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
            (typeof client.email)['address-verify'][':email_address_id']['send']['$put']
          >
        },
      ) =>
        parseResponse(
          client.email['address-verify'][':email_address_id'].send.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutEmailAddressVerifyEmailAddressIdVerifyActivationTokenKey() {
  return [
    'email',
    '/email/address-verify/:email_address_id/verify/:activation_token',
    'PUT',
  ] as const
}

export function usePutEmailAddressVerifyEmailAddressIdVerifyActivationToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.email)['address-verify'][':email_address_id']['verify'][':activation_token']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.email)['address-verify'][':email_address_id']['verify'][':activation_token']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmailAddressVerifyEmailAddressIdVerifyActivationTokenKey()
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
            (typeof client.email)['address-verify'][':email_address_id']['verify'][':activation_token']['$put']
          >
        },
      ) =>
        parseResponse(
          client.email['address-verify'][':email_address_id'].verify[':activation_token'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmailAddressesKey() {
  return ['email', '/email/addresses'] as const
}

export function useGetEmailAddresses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.addresses.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailAddressesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.addresses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.email.addresses.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailAddresses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.addresses.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailAddressesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.addresses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.email.addresses.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmailAddressesKey() {
  return ['email', '/email/addresses', 'POST'] as const
}

export function usePostEmailAddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.addresses.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.email.addresses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailAddressesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.email.addresses.$post> }) =>
        parseResponse(client.email.addresses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmailAddressesEmailAddressIdKey(
  args: InferRequestType<(typeof client.email.addresses)[':email_address_id']['$get']>,
) {
  return ['email', '/email/addresses/:email_address_id', args] as const
}

export function useGetEmailAddressesEmailAddressId<TError = unknown>(
  args: InferRequestType<(typeof client.email.addresses)[':email_address_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email.addresses)[':email_address_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEmailAddressesEmailAddressIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email.addresses)[':email_address_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.email.addresses[':email_address_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailAddressesEmailAddressId<TError = unknown>(
  args: InferRequestType<(typeof client.email.addresses)[':email_address_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email.addresses)[':email_address_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEmailAddressesEmailAddressIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email.addresses)[':email_address_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.email.addresses[':email_address_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmailAddressesEmailAddressIdKey() {
  return ['email', '/email/addresses/:email_address_id', 'DELETE'] as const
}

export function useDeleteEmailAddressesEmailAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email.addresses)[':email_address_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.email.addresses)[':email_address_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmailAddressesEmailAddressIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.email.addresses)[':email_address_id']['$delete']>
        },
      ) => parseResponse(client.email.addresses[':email_address_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmailHistoryKey() {
  return ['email', '/email/history'] as const
}

export function useGetEmailHistory<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.history.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailHistoryKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.history.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.email.history.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailHistory<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.history.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailHistoryKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.history.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.email.history.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmailHistoryExportFilenameFilenameKey(
  args: InferRequestType<(typeof client.email.history)['export?filename=:filename']['$get']>,
) {
  return ['email', '/email/history/export?filename=:filename', args] as const
}

export function useGetEmailHistoryExportFilenameFilename<TError = unknown>(
  args: InferRequestType<(typeof client.email.history)['export?filename=:filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email.history)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEmailHistoryExportFilenameFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email.history)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.email.history['export?filename=:filename'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailHistoryExportFilenameFilename<TError = unknown>(
  args: InferRequestType<(typeof client.email.history)['export?filename=:filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email.history)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEmailHistoryExportFilenameFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email.history)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.email.history['export?filename=:filename'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmailMasterTemplatesKey() {
  return ['email', '/email/master-templates'] as const
}

export function useGetEmailMasterTemplates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.email)['master-templates']['$get']>>>
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
        ? getGetEmailMasterTemplatesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email)['master-templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.email['master-templates'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailMasterTemplates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.email)['master-templates']['$get']>>>
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
        ? getGetEmailMasterTemplatesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email)['master-templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.email['master-templates'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmailMasterTemplatesCategoriesKey() {
  return ['email', '/email/master-templates-categories'] as const
}

export function useGetEmailMasterTemplatesCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email)['master-templates-categories']['$get']>>
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
        ? getGetEmailMasterTemplatesCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email)['master-templates-categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.email['master-templates-categories'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailMasterTemplatesCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email)['master-templates-categories']['$get']>>
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
        ? getGetEmailMasterTemplatesCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email)['master-templates-categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.email['master-templates-categories'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmailMasterTemplatesCategoriesCategoryIdKey(
  args: InferRequestType<
    (typeof client.email)['master-templates-categories'][':category_id']['$get']
  >,
) {
  return ['email', '/email/master-templates-categories/:category_id', args] as const
}

export function useGetEmailMasterTemplatesCategoriesCategoryId<TError = unknown>(
  args: InferRequestType<
    (typeof client.email)['master-templates-categories'][':category_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.email)['master-templates-categories'][':category_id']['$get']
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
        ? getGetEmailMasterTemplatesCategoriesCategoryIdKey(args)
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
                (typeof client.email)['master-templates-categories'][':category_id']['$get']
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
          client.email['master-templates-categories'][':category_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailMasterTemplatesCategoriesCategoryId<TError = unknown>(
  args: InferRequestType<
    (typeof client.email)['master-templates-categories'][':category_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.email)['master-templates-categories'][':category_id']['$get']
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
        ? getGetEmailMasterTemplatesCategoriesCategoryIdKey(args)
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
                (typeof client.email)['master-templates-categories'][':category_id']['$get']
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
          client.email['master-templates-categories'][':category_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmailMasterTemplatesCategoriesCategoryIdMasterTemplatesKey(
  args: InferRequestType<
    (typeof client.email)['master-templates-categories'][':category_id']['master-templates']['$get']
  >,
) {
  return [
    'email',
    '/email/master-templates-categories/:category_id/master-templates',
    args,
  ] as const
}

export function useGetEmailMasterTemplatesCategoriesCategoryIdMasterTemplates<TError = unknown>(
  args: InferRequestType<
    (typeof client.email)['master-templates-categories'][':category_id']['master-templates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.email)['master-templates-categories'][':category_id']['master-templates']['$get']
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
        ? getGetEmailMasterTemplatesCategoriesCategoryIdMasterTemplatesKey(args)
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
                (typeof client.email)['master-templates-categories'][':category_id']['master-templates']['$get']
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
          client.email['master-templates-categories'][':category_id']['master-templates'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailMasterTemplatesCategoriesCategoryIdMasterTemplates<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.email)['master-templates-categories'][':category_id']['master-templates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.email)['master-templates-categories'][':category_id']['master-templates']['$get']
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
        ? getGetEmailMasterTemplatesCategoriesCategoryIdMasterTemplatesKey(args)
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
                (typeof client.email)['master-templates-categories'][':category_id']['master-templates']['$get']
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
          client.email['master-templates-categories'][':category_id']['master-templates'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmailMasterTemplatesTemplateIdKey(
  args: InferRequestType<(typeof client.email)['master-templates'][':template_id']['$get']>,
) {
  return ['email', '/email/master-templates/:template_id', args] as const
}

export function useGetEmailMasterTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.email)['master-templates'][':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email)['master-templates'][':template_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEmailMasterTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email)['master-templates'][':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.email['master-templates'][':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailMasterTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.email)['master-templates'][':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email)['master-templates'][':template_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEmailMasterTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email)['master-templates'][':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.email['master-templates'][':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmailPriceKey() {
  return ['email', '/email/price', 'POST'] as const
}

export function usePostEmailPrice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.price.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.email.price.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailPriceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.email.price.$post> }) =>
        parseResponse(client.email.price.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEmailReceiptsKey() {
  return ['email', '/email/receipts', 'POST'] as const
}

export function usePostEmailReceipts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.receipts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.email.receipts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailReceiptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.email.receipts.$post> }) =>
        parseResponse(client.email.receipts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEmailSendKey() {
  return ['email', '/email/send', 'POST'] as const
}

export function usePostEmailSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.send.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.email.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.email.send.$post> }) =>
        parseResponse(client.email.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmailTemplatesKey() {
  return ['email', '/email/templates'] as const
}

export function useGetEmailTemplates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.templates.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailTemplatesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.email.templates.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailTemplates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.templates.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailTemplatesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.email.templates.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmailTemplatesKey() {
  return ['email', '/email/templates', 'POST'] as const
}

export function usePostEmailTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.templates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.email.templates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.email.templates.$post> }) =>
        parseResponse(client.email.templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEmailTemplatesImagesTemplateIdKey() {
  return ['email', '/email/templates-images/:template_id', 'POST'] as const
}

export function usePostEmailTemplatesImagesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email)['templates-images'][':template_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.email)['templates-images'][':template_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailTemplatesImagesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.email)['templates-images'][':template_id']['$post']>
        },
      ) =>
        parseResponse(client.email['templates-images'][':template_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmailTemplatesTemplateIdKey(
  args: InferRequestType<(typeof client.email.templates)[':template_id']['$get']>,
) {
  return ['email', '/email/templates/:template_id', args] as const
}

export function useGetEmailTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.email.templates)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email.templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEmailTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email.templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.email.templates[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.email.templates)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email.templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEmailTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.email.templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.email.templates[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEmailTemplatesTemplateIdKey() {
  return ['email', '/email/templates/:template_id', 'PUT'] as const
}

export function usePutEmailTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email.templates)[':template_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.email.templates)[':template_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmailTemplatesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.email.templates)[':template_id']['$put']> },
      ) => parseResponse(client.email.templates[':template_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmailTemplatesTemplateIdKey() {
  return ['email', '/email/templates/:template_id', 'DELETE'] as const
}

export function useDeleteEmailTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email.templates)[':template_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.email.templates)[':template_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmailTemplatesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.email.templates)[':template_id']['$delete']> },
      ) => parseResponse(client.email.templates[':template_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFaxHistoryExportFilenameFilenameKey(
  args: InferRequestType<(typeof client.fax.history)['export?filename=:filename']['$get']>,
) {
  return ['fax', '/fax/history/export?filename=:filename', args] as const
}

export function useGetFaxHistoryExportFilenameFilename<TError = unknown>(
  args: InferRequestType<(typeof client.fax.history)['export?filename=:filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fax.history)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFaxHistoryExportFilenameFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fax.history)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.fax.history['export?filename=:filename'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFaxHistoryExportFilenameFilename<TError = unknown>(
  args: InferRequestType<(typeof client.fax.history)['export?filename=:filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fax.history)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFaxHistoryExportFilenameFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fax.history)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.fax.history['export?filename=:filename'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByKey(
  args: InferRequestType<
    (typeof client.fax)['history?date_from=:date_from&date_to=:date_to&q=:q&order_by=:order_by']['$get']
  >,
) {
  return [
    'fax',
    '/fax/history?date_from=:date_from&date_to=:date_to&q=:q&order_by=:order_by',
    args,
  ] as const
}

export function useGetFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderBy<TError = unknown>(
  args: InferRequestType<
    (typeof client.fax)['history?date_from=:date_from&date_to=:date_to&q=:q&order_by=:order_by']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.fax)['history?date_from=:date_from&date_to=:date_to&q=:q&order_by=:order_by']['$get']
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
        ? getGetFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByKey(args)
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
                (typeof client.fax)['history?date_from=:date_from&date_to=:date_to&q=:q&order_by=:order_by']['$get']
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
          client.fax['history?date_from=:date_from&date_to=:date_to&q=:q&order_by=:order_by'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderBy<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.fax)['history?date_from=:date_from&date_to=:date_to&q=:q&order_by=:order_by']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.fax)['history?date_from=:date_from&date_to=:date_to&q=:q&order_by=:order_by']['$get']
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
        ? getGetFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByKey(args)
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
                (typeof client.fax)['history?date_from=:date_from&date_to=:date_to&q=:q&order_by=:order_by']['$get']
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
          client.fax['history?date_from=:date_from&date_to=:date_to&q=:q&order_by=:order_by'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostFaxPriceKey() {
  return ['fax', '/fax/price', 'POST'] as const
}

export function usePostFaxPrice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.price.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.fax.price.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFaxPriceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fax.price.$post> }) =>
        parseResponse(client.fax.price.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFaxReceiptsKey() {
  return ['fax', '/fax/receipts'] as const
}

export function useGetFaxReceipts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.receipts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFaxReceiptsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.receipts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fax.receipts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFaxReceipts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.receipts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFaxReceiptsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.receipts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fax.receipts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFaxReceiptsKey() {
  return ['fax', '/fax/receipts', 'POST'] as const
}

export function usePostFaxReceipts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.receipts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.fax.receipts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFaxReceiptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fax.receipts.$post> }) =>
        parseResponse(client.fax.receipts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutFaxReceiptsReadKey() {
  return ['fax', '/fax/receipts-read', 'PUT'] as const
}

export function usePutFaxReceiptsRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.fax)['receipts-read']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.fax)['receipts-read']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFaxReceiptsReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.fax)['receipts-read']['$put']> },
      ) => parseResponse(client.fax['receipts-read'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFaxReceiptsMessageIdKey(
  args: InferRequestType<(typeof client.fax.receipts)[':message_id']['$get']>,
) {
  return ['fax', '/fax/receipts/:message_id', args] as const
}

export function useGetFaxReceiptsMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.fax.receipts)[':message_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fax.receipts)[':message_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFaxReceiptsMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fax.receipts)[':message_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fax.receipts[':message_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFaxReceiptsMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.fax.receipts)[':message_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fax.receipts)[':message_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFaxReceiptsMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fax.receipts)[':message_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fax.receipts[':message_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFaxSendKey() {
  return ['fax', '/fax/send', 'POST'] as const
}

export function usePostFaxSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.send.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.fax.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFaxSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fax.send.$post> }) =>
        parseResponse(client.fax.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutForgotPasswordKey() {
  return ['forgot-password', '/forgot-password', 'PUT'] as const
}

export function usePutForgotPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['forgot-password']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['forgot-password']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutForgotPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['forgot-password']['$put']> },
      ) => parseResponse(client['forgot-password'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutForgotPasswordVerifyKey() {
  return ['forgot-password', '/forgot-password/verify', 'PUT'] as const
}

export function usePutForgotPasswordVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['forgot-password']['verify']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['forgot-password']['verify']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutForgotPasswordVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['forgot-password']['verify']['$put']> },
      ) => parseResponse(client['forgot-password'].verify.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutForgotUsernameKey() {
  return ['forgot-username', '/forgot-username', 'PUT'] as const
}

export function usePutForgotUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['forgot-username']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['forgot-username']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutForgotUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['forgot-username']['$put']> },
      ) => parseResponse(client['forgot-username'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListsKey() {
  return ['lists', '/lists'] as const
}

export function useGetLists<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetListsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLists<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetListsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostListsKey() {
  return ['lists', '/lists', 'POST'] as const
}

export function usePostLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.lists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.lists.$post> }) =>
        parseResponse(client.lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutListsFromListIdContactsContactIdToListIdKey() {
  return ['lists', '/lists/:from_list_id/contacts/:contact_id/:to_list_id', 'PUT'] as const
}

export function usePutListsFromListIdContactsContactIdToListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.lists)[':from_list_id']['contacts'][':contact_id'][':to_list_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.lists)[':from_list_id']['contacts'][':contact_id'][':to_list_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutListsFromListIdContactsContactIdToListIdKey()
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
            (typeof client.lists)[':from_list_id']['contacts'][':contact_id'][':to_list_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.lists[':from_list_id'].contacts[':contact_id'][':to_list_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetListsListIdKey(
  args: InferRequestType<(typeof client.lists)[':list_id']['$get']>,
) {
  return ['lists', '/lists/:list_id', args] as const
}

export function useGetListsListId<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':list_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsListIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':list_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsListId<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':list_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsListIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':list_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutListsListIdKey() {
  return ['lists', '/lists/:list_id', 'PUT'] as const
}

export function usePutListsListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':list_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutListsListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lists)[':list_id']['$put']> },
      ) => parseResponse(client.lists[':list_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteListsListIdKey() {
  return ['lists', '/lists/:list_id', 'DELETE'] as const
}

export function useDeleteListsListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':list_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteListsListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lists)[':list_id']['$delete']> },
      ) => parseResponse(client.lists[':list_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListsListIdContactsKey(
  args: InferRequestType<(typeof client.lists)[':list_id']['contacts']['$get']>,
) {
  return ['lists', '/lists/:list_id/contacts', args] as const
}

export function useGetListsListIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':list_id']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':list_id']['contacts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListsListIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':list_id']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':list_id'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsListIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':list_id']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':list_id']['contacts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListsListIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':list_id']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':list_id'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostListsListIdContactsKey() {
  return ['lists', '/lists/:list_id/contacts', 'POST'] as const
}

export function usePostListsListIdContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':list_id']['contacts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':list_id']['contacts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListsListIdContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lists)[':list_id']['contacts']['$post']> },
      ) => parseResponse(client.lists[':list_id'].contacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListsListIdContactsContactIdKey(
  args: InferRequestType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$get']>,
) {
  return ['lists', '/lists/:list_id/contacts/:contact_id', args] as const
}

export function useGetListsListIdContactsContactId<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$get']>
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
        ? getGetListsListIdContactsContactIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lists[':list_id'].contacts[':contact_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsListIdContactsContactId<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$get']>
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
        ? getGetListsListIdContactsContactIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lists[':list_id'].contacts[':contact_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutListsListIdContactsContactIdKey() {
  return ['lists', '/lists/:list_id/contacts/:contact_id', 'PUT'] as const
}

export function usePutListsListIdContactsContactId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutListsListIdContactsContactIdKey()
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
            (typeof client.lists)[':list_id']['contacts'][':contact_id']['$put']
          >
        },
      ) => parseResponse(client.lists[':list_id'].contacts[':contact_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteListsListIdContactsContactIdKey() {
  return ['lists', '/lists/:list_id/contacts/:contact_id', 'DELETE'] as const
}

export function useDeleteListsListIdContactsContactId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteListsListIdContactsContactIdKey()
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
            (typeof client.lists)[':list_id']['contacts'][':contact_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.lists[':list_id'].contacts[':contact_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListsListIdExportFilenameFilenameKey(
  args: InferRequestType<(typeof client.lists)[':list_id']['export?filename=:filename']['$get']>,
) {
  return ['lists', '/lists/:list_id/export?filename=:filename', args] as const
}

export function useGetListsListIdExportFilenameFilename<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':list_id']['export?filename=:filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lists)[':list_id']['export?filename=:filename']['$get']>
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
        ? getGetListsListIdExportFilenameFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lists)[':list_id']['export?filename=:filename']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lists[':list_id']['export?filename=:filename'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsListIdExportFilenameFilename<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':list_id']['export?filename=:filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lists)[':list_id']['export?filename=:filename']['$get']>
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
        ? getGetListsListIdExportFilenameFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lists)[':list_id']['export?filename=:filename']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.lists[':list_id']['export?filename=:filename'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostListsListIdImportKey() {
  return ['lists', '/lists/:list_id/import', 'POST'] as const
}

export function usePostListsListIdImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':list_id']['import']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':list_id']['import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListsListIdImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lists)[':list_id']['import']['$post']> },
      ) => parseResponse(client.lists[':list_id'].import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListsListIdImportCsvPreviewKey() {
  return ['lists', '/lists/:list_id/import-csv-preview', 'POST'] as const
}

export function usePostListsListIdImportCsvPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':list_id']['import-csv-preview']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':list_id']['import-csv-preview']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListsListIdImportCsvPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.lists)[':list_id']['import-csv-preview']['$post']>
        },
      ) => parseResponse(client.lists[':list_id']['import-csv-preview'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListsListIdImportFieldsKey(
  args: InferRequestType<(typeof client.lists)[':list_id']['import-fields']['$get']>,
) {
  return ['lists', '/lists/:list_id/import-fields', args] as const
}

export function useGetListsListIdImportFields<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':list_id']['import-fields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':list_id']['import-fields']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListsListIdImportFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':list_id']['import-fields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lists[':list_id']['import-fields'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsListIdImportFields<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':list_id']['import-fields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':list_id']['import-fields']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetListsListIdImportFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':list_id']['import-fields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lists[':list_id']['import-fields'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutListsListIdRemoveDuplicatesKey() {
  return ['lists', '/lists/:list_id/remove-duplicates', 'PUT'] as const
}

export function usePutListsListIdRemoveDuplicates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':list_id']['remove-duplicates']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':list_id']['remove-duplicates']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutListsListIdRemoveDuplicatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.lists)[':list_id']['remove-duplicates']['$put']>
        },
      ) => parseResponse(client.lists[':list_id']['remove-duplicates'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutListsListIdRemoveOptedOutContactsOptOutListIdKey() {
  return ['lists', '/lists/:list_id/remove-opted-out-contacts/:opt_out_list_id', 'PUT'] as const
}

export function usePutListsListIdRemoveOptedOutContactsOptOutListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.lists)[':list_id']['remove-opted-out-contacts'][':opt_out_list_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.lists)[':list_id']['remove-opted-out-contacts'][':opt_out_list_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutListsListIdRemoveOptedOutContactsOptOutListIdKey()
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
            (typeof client.lists)[':list_id']['remove-opted-out-contacts'][':opt_out_list_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.lists[':list_id']['remove-opted-out-contacts'][':opt_out_list_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMmsCancelAllKey() {
  return ['mms', '/mms/cancel-all', 'PUT'] as const
}

export function usePutMmsCancelAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mms)['cancel-all']['$put']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMmsCancelAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.mms['cancel-all'].$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMmsHistoryExportFilenameFilenameKey(
  args: InferRequestType<(typeof client.mms.history)['export?filename=:filename']['$get']>,
) {
  return ['mms', '/mms/history/export?filename=:filename', args] as const
}

export function useGetMmsHistoryExportFilenameFilename<TError = unknown>(
  args: InferRequestType<(typeof client.mms.history)['export?filename=:filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mms.history)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMmsHistoryExportFilenameFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mms.history)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mms.history['export?filename=:filename'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMmsHistoryExportFilenameFilename<TError = unknown>(
  args: InferRequestType<(typeof client.mms.history)['export?filename=:filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mms.history)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMmsHistoryExportFilenameFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mms.history)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mms.history['export?filename=:filename'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToKey(
  args: InferRequestType<
    (typeof client.mms)['history?q=:q&order_by=:order_by&date_from=:date_from&date_to=:date_to']['$get']
  >,
) {
  return [
    'mms',
    '/mms/history?q=:q&order_by=:order_by&date_from=:date_from&date_to=:date_to',
    args,
  ] as const
}

export function useGetMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateTo<TError = unknown>(
  args: InferRequestType<
    (typeof client.mms)['history?q=:q&order_by=:order_by&date_from=:date_from&date_to=:date_to']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mms)['history?q=:q&order_by=:order_by&date_from=:date_from&date_to=:date_to']['$get']
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
        ? getGetMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToKey(args)
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
                (typeof client.mms)['history?q=:q&order_by=:order_by&date_from=:date_from&date_to=:date_to']['$get']
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
          client.mms['history?q=:q&order_by=:order_by&date_from=:date_from&date_to=:date_to'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateTo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.mms)['history?q=:q&order_by=:order_by&date_from=:date_from&date_to=:date_to']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mms)['history?q=:q&order_by=:order_by&date_from=:date_from&date_to=:date_to']['$get']
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
        ? getGetMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToKey(args)
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
                (typeof client.mms)['history?q=:q&order_by=:order_by&date_from=:date_from&date_to=:date_to']['$get']
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
          client.mms['history?q=:q&order_by=:order_by&date_from=:date_from&date_to=:date_to'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMmsPriceKey() {
  return ['mms', '/mms/price', 'POST'] as const
}

export function usePostMmsPrice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mms.price.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.mms.price.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMmsPriceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mms.price.$post> }) =>
        parseResponse(client.mms.price.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMmsReceiptsKey() {
  return ['mms', '/mms/receipts'] as const
}

export function useGetMmsReceipts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mms.receipts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMmsReceiptsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mms.receipts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mms.receipts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMmsReceipts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mms.receipts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMmsReceiptsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mms.receipts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mms.receipts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMmsReceiptsReadKey() {
  return ['mms', '/mms/receipts-read', 'PUT'] as const
}

export function usePutMmsReceiptsRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mms)['receipts-read']['$put']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMmsReceiptsReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.mms['receipts-read'].$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMmsReceiptsMessageIdKey(
  args: InferRequestType<(typeof client.mms.receipts)[':message_id']['$get']>,
) {
  return ['mms', '/mms/receipts/:message_id', args] as const
}

export function useGetMmsReceiptsMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.mms.receipts)[':message_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mms.receipts)[':message_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMmsReceiptsMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mms.receipts)[':message_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mms.receipts[':message_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMmsReceiptsMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.mms.receipts)[':message_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mms.receipts)[':message_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMmsReceiptsMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mms.receipts)[':message_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mms.receipts[':message_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMmsSendKey() {
  return ['mms', '/mms/send', 'POST'] as const
}

export function usePostMmsSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mms.send.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.mms.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMmsSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mms.send.$post> }) =>
        parseResponse(client.mms.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMmsMessageIdCancelKey() {
  return ['mms', '/mms/:message_id/cancel', 'PUT'] as const
}

export function usePutMmsMessageIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mms)[':message_id']['cancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mms)[':message_id']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMmsMessageIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.mms)[':message_id']['cancel']['$put']> },
      ) => parseResponse(client.mms[':message_id'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNumbersKey() {
  return ['numbers', '/numbers'] as const
}

export function useGetNumbers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumbersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumbersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.numbers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNumbersBuyDedicatedNumberKey() {
  return ['numbers', '/numbers/buy/:dedicated_number', 'POST'] as const
}

export function usePostNumbersBuyDedicatedNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.numbers.buy)[':dedicated_number']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.numbers.buy)[':dedicated_number']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNumbersBuyDedicatedNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.numbers.buy)[':dedicated_number']['$post']> },
      ) => parseResponse(client.numbers.buy[':dedicated_number'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNumbersSearchCountrySearch1SearchType2Key(
  args: InferRequestType<
    (typeof client.numbers.search)[':country?:search=1&:search_type=2']['$get']
  >,
) {
  return ['numbers', '/numbers/search/:country?:search=1&:search_type=2', args] as const
}

export function useGetNumbersSearchCountrySearch1SearchType2<TError = unknown>(
  args: InferRequestType<
    (typeof client.numbers.search)[':country?:search=1&:search_type=2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.numbers.search)[':country?:search=1&:search_type=2']['$get']
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
        ? getGetNumbersSearchCountrySearch1SearchType2Key(args)
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
                (typeof client.numbers.search)[':country?:search=1&:search_type=2']['$get']
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
          client.numbers.search[':country?:search=1&:search_type=2'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumbersSearchCountrySearch1SearchType2<TError = unknown>(
  args: InferRequestType<
    (typeof client.numbers.search)[':country?:search=1&:search_type=2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.numbers.search)[':country?:search=1&:search_type=2']['$get']
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
        ? getGetNumbersSearchCountrySearch1SearchType2Key(args)
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
                (typeof client.numbers.search)[':country?:search=1&:search_type=2']['$get']
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
          client.numbers.search[':country?:search=1&:search_type=2'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPostDirectMailCampaignsKey() {
  return ['post', '/post/direct-mail/campaigns'] as const
}

export function useGetPostDirectMailCampaigns<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.post)['direct-mail']['campaigns']['$get']>>
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
        ? getGetPostDirectMailCampaignsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.post)['direct-mail']['campaigns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.post['direct-mail'].campaigns.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostDirectMailCampaigns<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.post)['direct-mail']['campaigns']['$get']>>
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
        ? getGetPostDirectMailCampaignsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.post)['direct-mail']['campaigns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.post['direct-mail'].campaigns.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPostDirectMailCampaignsPriceKey() {
  return ['post', '/post/direct-mail/campaigns/price', 'POST'] as const
}

export function usePostPostDirectMailCampaignsPrice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.post)['direct-mail']['campaigns']['price']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.post)['direct-mail']['campaigns']['price']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostDirectMailCampaignsPriceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.post)['direct-mail']['campaigns']['price']['$post']>
        },
      ) => parseResponse(client.post['direct-mail'].campaigns.price.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPostDirectMailCampaignsSendKey() {
  return ['post', '/post/direct-mail/campaigns/send', 'POST'] as const
}

export function usePostPostDirectMailCampaignsSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.post)['direct-mail']['campaigns']['send']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.post)['direct-mail']['campaigns']['send']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostDirectMailCampaignsSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.post)['direct-mail']['campaigns']['send']['$post']>
        },
      ) => parseResponse(client.post['direct-mail'].campaigns.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPostDirectMailLocationsSearchCountryQQueryKey(
  args: InferRequestType<
    (typeof client.post)['direct-mail']['locations']['search'][':country']['?q=:query']['$get']
  >,
) {
  return ['post', '/post/direct-mail/locations/search/:country/?q=:query', args] as const
}

export function useGetPostDirectMailLocationsSearchCountryQQuery<TError = unknown>(
  args: InferRequestType<
    (typeof client.post)['direct-mail']['locations']['search'][':country']['?q=:query']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.post)['direct-mail']['locations']['search'][':country']['?q=:query']['$get']
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
        ? getGetPostDirectMailLocationsSearchCountryQQueryKey(args)
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
                (typeof client.post)['direct-mail']['locations']['search'][':country']['?q=:query']['$get']
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
          client.post['direct-mail'].locations.search[':country']['?q=:query'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostDirectMailLocationsSearchCountryQQuery<TError = unknown>(
  args: InferRequestType<
    (typeof client.post)['direct-mail']['locations']['search'][':country']['?q=:query']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.post)['direct-mail']['locations']['search'][':country']['?q=:query']['$get']
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
        ? getGetPostDirectMailLocationsSearchCountryQQueryKey(args)
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
                (typeof client.post)['direct-mail']['locations']['search'][':country']['?q=:query']['$get']
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
          client.post['direct-mail'].locations.search[':country']['?q=:query'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPostLettersDetectAddressKey() {
  return ['post', '/post/letters/detect-address', 'POST'] as const
}

export function usePostPostLettersDetectAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.post.letters)['detect-address']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.post.letters)['detect-address']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostLettersDetectAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.post.letters)['detect-address']['$post']> },
      ) => parseResponse(client.post.letters['detect-address'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPostLettersHistoryKey() {
  return ['post', '/post/letters/history'] as const
}

export function useGetPostLettersHistory<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.letters.history.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostLettersHistoryKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.post.letters.history.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.post.letters.history.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostLettersHistory<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.letters.history.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostLettersHistoryKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.post.letters.history.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.post.letters.history.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPostLettersHistoryExportFilenameFilenameKey(
  args: InferRequestType<(typeof client.post.letters.history)['export?filename=:filename']['$get']>,
) {
  return ['post', '/post/letters/history/export?filename=:filename', args] as const
}

export function useGetPostLettersHistoryExportFilenameFilename<TError = unknown>(
  args: InferRequestType<(typeof client.post.letters.history)['export?filename=:filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.post.letters.history)['export?filename=:filename']['$get']>
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
        ? getGetPostLettersHistoryExportFilenameFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.post.letters.history)['export?filename=:filename']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.post.letters.history['export?filename=:filename'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostLettersHistoryExportFilenameFilename<TError = unknown>(
  args: InferRequestType<(typeof client.post.letters.history)['export?filename=:filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.post.letters.history)['export?filename=:filename']['$get']>
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
        ? getGetPostLettersHistoryExportFilenameFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.post.letters.history)['export?filename=:filename']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.post.letters.history['export?filename=:filename'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPostLettersPriceKey() {
  return ['post', '/post/letters/price', 'POST'] as const
}

export function usePostPostLettersPrice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.letters.price.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.post.letters.price.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostLettersPriceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.post.letters.price.$post> }) =>
        parseResponse(client.post.letters.price.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPostLettersSendKey() {
  return ['post', '/post/letters/send', 'POST'] as const
}

export function usePostPostLettersSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.letters.send.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.post.letters.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostLettersSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.post.letters.send.$post> }) =>
        parseResponse(client.post.letters.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPostPostcardsExportFilenameFilenameKey(
  args: InferRequestType<(typeof client.post.postcards)['export?filename=:filename']['$get']>,
) {
  return ['post', '/post/postcards/export?filename=:filename', args] as const
}

export function useGetPostPostcardsExportFilenameFilename<TError = unknown>(
  args: InferRequestType<(typeof client.post.postcards)['export?filename=:filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.post.postcards)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPostPostcardsExportFilenameFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.post.postcards)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.post.postcards['export?filename=:filename'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostPostcardsExportFilenameFilename<TError = unknown>(
  args: InferRequestType<(typeof client.post.postcards)['export?filename=:filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.post.postcards)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPostPostcardsExportFilenameFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.post.postcards)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.post.postcards['export?filename=:filename'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPostPostcardsHistoryKey() {
  return ['post', '/post/postcards/history'] as const
}

export function useGetPostPostcardsHistory<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.post.postcards.history.$get>>>
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
        ? getGetPostPostcardsHistoryKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.post.postcards.history.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.post.postcards.history.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostPostcardsHistory<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.post.postcards.history.$get>>>
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
        ? getGetPostPostcardsHistoryKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.post.postcards.history.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.post.postcards.history.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPostPostcardsPriceKey() {
  return ['post', '/post/postcards/price', 'POST'] as const
}

export function usePostPostPostcardsPrice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.post.postcards.price.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.post.postcards.price.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostPostcardsPriceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.post.postcards.price.$post> },
      ) => parseResponse(client.post.postcards.price.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPostPostcardsSendKey() {
  return ['post', '/post/postcards/send', 'POST'] as const
}

export function usePostPostPostcardsSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.postcards.send.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.post.postcards.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostPostcardsSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.post.postcards.send.$post> }) =>
        parseResponse(client.post.postcards.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPostReturnAddressesKey() {
  return ['post', '/post/return-addresses'] as const
}

export function useGetPostReturnAddresses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.post)['return-addresses']['$get']>>>
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
        ? getGetPostReturnAddressesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.post)['return-addresses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.post['return-addresses'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostReturnAddresses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.post)['return-addresses']['$get']>>>
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
        ? getGetPostReturnAddressesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.post)['return-addresses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.post['return-addresses'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPostReturnAddressesKey() {
  return ['post', '/post/return-addresses', 'POST'] as const
}

export function usePostPostReturnAddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.post)['return-addresses']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.post)['return-addresses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostReturnAddressesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.post)['return-addresses']['$post']> },
      ) => parseResponse(client.post['return-addresses'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPostReturnAddressesReturnAddressIdKey(
  args: InferRequestType<(typeof client.post)['return-addresses'][':return_address_id']['$get']>,
) {
  return ['post', '/post/return-addresses/:return_address_id', args] as const
}

export function useGetPostReturnAddressesReturnAddressId<TError = unknown>(
  args: InferRequestType<(typeof client.post)['return-addresses'][':return_address_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.post)['return-addresses'][':return_address_id']['$get']>
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
        ? getGetPostReturnAddressesReturnAddressIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.post)['return-addresses'][':return_address_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.post['return-addresses'][':return_address_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostReturnAddressesReturnAddressId<TError = unknown>(
  args: InferRequestType<(typeof client.post)['return-addresses'][':return_address_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.post)['return-addresses'][':return_address_id']['$get']>
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
        ? getGetPostReturnAddressesReturnAddressIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.post)['return-addresses'][':return_address_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.post['return-addresses'][':return_address_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutPostReturnAddressesReturnAddressIdKey() {
  return ['post', '/post/return-addresses/:return_address_id', 'PUT'] as const
}

export function usePutPostReturnAddressesReturnAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.post)['return-addresses'][':return_address_id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.post)['return-addresses'][':return_address_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPostReturnAddressesReturnAddressIdKey()
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
            (typeof client.post)['return-addresses'][':return_address_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.post['return-addresses'][':return_address_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePostReturnAddressesReturnAddressIdKey() {
  return ['post', '/post/return-addresses/:return_address_id', 'DELETE'] as const
}

export function useDeletePostReturnAddressesReturnAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.post)['return-addresses'][':return_address_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.post)['return-addresses'][':return_address_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePostReturnAddressesReturnAddressIdKey()
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
            (typeof client.post)['return-addresses'][':return_address_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.post['return-addresses'][':return_address_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPricingCountryCurrencyCurrencyKey(
  args: InferRequestType<(typeof client.pricing)[':country?currency=:currency']['$get']>,
) {
  return ['pricing', '/pricing/:country?currency=:currency', args] as const
}

export function useGetPricingCountryCurrencyCurrency<TError = unknown>(
  args: InferRequestType<(typeof client.pricing)[':country?currency=:currency']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pricing)[':country?currency=:currency']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPricingCountryCurrencyCurrencyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pricing)[':country?currency=:currency']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pricing[':country?currency=:currency'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPricingCountryCurrencyCurrency<TError = unknown>(
  args: InferRequestType<(typeof client.pricing)[':country?currency=:currency']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pricing)[':country?currency=:currency']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPricingCountryCurrencyCurrencyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pricing)[':country?currency=:currency']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pricing[':country?currency=:currency'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRechargeCreditCardKey() {
  return ['recharge', '/recharge/credit-card'] as const
}

export function useGetRechargeCreditCard<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.recharge)['credit-card']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRechargeCreditCardKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recharge)['credit-card']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recharge['credit-card'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRechargeCreditCard<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.recharge)['credit-card']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRechargeCreditCardKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recharge)['credit-card']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recharge['credit-card'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRechargeCreditCardKey() {
  return ['recharge', '/recharge/credit-card', 'PUT'] as const
}

export function usePutRechargeCreditCard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.recharge)['credit-card']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.recharge)['credit-card']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRechargeCreditCardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.recharge)['credit-card']['$put']> },
      ) => parseResponse(client.recharge['credit-card'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRechargePackagesCountryCountryKey(
  args: InferRequestType<(typeof client.recharge)['packages?country=:country']['$get']>,
) {
  return ['recharge', '/recharge/packages?country=:country', args] as const
}

export function useGetRechargePackagesCountryCountry<TError = unknown>(
  args: InferRequestType<(typeof client.recharge)['packages?country=:country']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recharge)['packages?country=:country']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRechargePackagesCountryCountryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recharge)['packages?country=:country']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recharge['packages?country=:country'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRechargePackagesCountryCountry<TError = unknown>(
  args: InferRequestType<(typeof client.recharge)['packages?country=:country']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recharge)['packages?country=:country']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRechargePackagesCountryCountryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recharge)['packages?country=:country']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recharge['packages?country=:country'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRechargePurchasePackageIdKey() {
  return ['recharge', '/recharge/purchase/:package_id', 'PUT'] as const
}

export function usePutRechargePurchasePackageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recharge.purchase)[':package_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.recharge.purchase)[':package_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRechargePurchasePackageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.recharge.purchase)[':package_id']['$put']> },
      ) => parseResponse(client.recharge.purchase[':package_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRechargeTransactionsKey() {
  return ['recharge', '/recharge/transactions'] as const
}

export function useGetRechargeTransactions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recharge.transactions.$get>>>
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
        ? getGetRechargeTransactionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recharge.transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recharge.transactions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRechargeTransactions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recharge.transactions.$get>>>
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
        ? getGetRechargeTransactionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recharge.transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recharge.transactions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRechargeTransactionsTransactionIdKey(
  args: InferRequestType<(typeof client.recharge.transactions)[':transaction_id']['$get']>,
) {
  return ['recharge', '/recharge/transactions/:transaction_id', args] as const
}

export function useGetRechargeTransactionsTransactionId<TError = unknown>(
  args: InferRequestType<(typeof client.recharge.transactions)[':transaction_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recharge.transactions)[':transaction_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRechargeTransactionsTransactionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recharge.transactions)[':transaction_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recharge.transactions[':transaction_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRechargeTransactionsTransactionId<TError = unknown>(
  args: InferRequestType<(typeof client.recharge.transactions)[':transaction_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recharge.transactions)[':transaction_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRechargeTransactionsTransactionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recharge.transactions)[':transaction_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recharge.transactions[':transaction_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReferralAccountsKey() {
  return ['referral', '/referral/accounts'] as const
}

export function useGetReferralAccounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.referral.accounts.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReferralAccountsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.referral.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.referral.accounts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReferralAccounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.referral.accounts.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReferralAccountsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.referral.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.referral.accounts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResellerKey() {
  return ['reseller', '/reseller'] as const
}

export function useGetReseller<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetResellerKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reseller.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReseller<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetResellerKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reseller.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutResellerKey() {
  return ['reseller', '/reseller', 'PUT'] as const
}

export function usePutReseller<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.reseller.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutResellerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reseller.$put> }) =>
        parseResponse(client.reseller.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetResellerAccountsKey() {
  return ['reseller', '/reseller/accounts'] as const
}

export function useGetResellerAccounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.accounts.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetResellerAccountsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reseller.accounts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResellerAccounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.accounts.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetResellerAccountsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reseller.accounts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostResellerAccountsKey() {
  return ['reseller', '/reseller/accounts', 'POST'] as const
}

export function usePostResellerAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.accounts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.reseller.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResellerAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reseller.accounts.$post> }) =>
        parseResponse(client.reseller.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostResellerAccountsPublicKey() {
  return ['reseller', '/reseller/accounts-public', 'POST'] as const
}

export function usePostResellerAccountsPublic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reseller)['accounts-public']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reseller)['accounts-public']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResellerAccountsPublicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.reseller)['accounts-public']['$post']> },
      ) => parseResponse(client.reseller['accounts-public'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetResellerAccountsClientUserIdKey(
  args: InferRequestType<(typeof client.reseller.accounts)[':client_user_id']['$get']>,
) {
  return ['reseller', '/reseller/accounts/:client_user_id', args] as const
}

export function useGetResellerAccountsClientUserId<TError = unknown>(
  args: InferRequestType<(typeof client.reseller.accounts)[':client_user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reseller.accounts)[':client_user_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResellerAccountsClientUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reseller.accounts)[':client_user_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.reseller.accounts[':client_user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResellerAccountsClientUserId<TError = unknown>(
  args: InferRequestType<(typeof client.reseller.accounts)[':client_user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reseller.accounts)[':client_user_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResellerAccountsClientUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reseller.accounts)[':client_user_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.reseller.accounts[':client_user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutResellerAccountsClientUserIdKey() {
  return ['reseller', '/reseller/accounts/:client_user_id', 'PUT'] as const
}

export function usePutResellerAccountsClientUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reseller.accounts)[':client_user_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reseller.accounts)[':client_user_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutResellerAccountsClientUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.reseller.accounts)[':client_user_id']['$put']> },
      ) => parseResponse(client.reseller.accounts[':client_user_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutResellerTransferCreditKey() {
  return ['reseller', '/reseller/transfer-credit', 'PUT'] as const
}

export function usePutResellerTransferCredit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reseller)['transfer-credit']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reseller)['transfer-credit']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutResellerTransferCreditKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.reseller)['transfer-credit']['$put']> },
      ) => parseResponse(client.reseller['transfer-credit'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetResellerSubdomainKey(
  args: InferRequestType<(typeof client.reseller)[':subdomain']['$get']>,
) {
  return ['reseller', '/reseller/:subdomain', args] as const
}

export function useGetResellerSubdomain<TError = unknown>(
  args: InferRequestType<(typeof client.reseller)[':subdomain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reseller)[':subdomain']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResellerSubdomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reseller)[':subdomain']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reseller[':subdomain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResellerSubdomain<TError = unknown>(
  args: InferRequestType<(typeof client.reseller)[':subdomain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reseller)[':subdomain']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetResellerSubdomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reseller)[':subdomain']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reseller[':subdomain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSdkDownloadTypeKey(
  args: InferRequestType<(typeof client)['sdk-download'][':type']['$get']>,
) {
  return ['sdk-download', '/sdk-download/:type', args] as const
}

export function useGetSdkDownloadType<TError = unknown>(
  args: InferRequestType<(typeof client)['sdk-download'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sdk-download'][':type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSdkDownloadTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sdk-download'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sdk-download'][':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSdkDownloadType<TError = unknown>(
  args: InferRequestType<(typeof client)['sdk-download'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sdk-download'][':type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSdkDownloadTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sdk-download'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sdk-download'][':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchContactsListsQQKey(
  args: InferRequestType<(typeof client.search)['contacts-lists?q=:q']['$get']>,
) {
  return ['search', '/search/contacts-lists?q=:q', args] as const
}

export function useGetSearchContactsListsQQ<TError = unknown>(
  args: InferRequestType<(typeof client.search)['contacts-lists?q=:q']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search)['contacts-lists?q=:q']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchContactsListsQQKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search)['contacts-lists?q=:q']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search['contacts-lists?q=:q'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchContactsListsQQ<TError = unknown>(
  args: InferRequestType<(typeof client.search)['contacts-lists?q=:q']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search)['contacts-lists?q=:q']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchContactsListsQQKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search)['contacts-lists?q=:q']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search['contacts-lists?q=:q'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSmsCampaignsKey() {
  return ['sms-campaigns', '/sms-campaigns'] as const
}

export function useGetSmsCampaigns<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sms-campaigns']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmsCampaignsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['sms-campaigns']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sms-campaigns'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmsCampaigns<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sms-campaigns']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmsCampaignsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['sms-campaigns']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sms-campaigns'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSmsCampaignsPriceKey() {
  return ['sms-campaigns', '/sms-campaigns/price', 'POST'] as const
}

export function usePostSmsCampaignsPrice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sms-campaigns']['price']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['sms-campaigns']['price']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmsCampaignsPriceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['sms-campaigns']['price']['$post']> },
      ) => parseResponse(client['sms-campaigns'].price.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSmsCampaignsSendKey() {
  return ['sms-campaigns', '/sms-campaigns/send', 'POST'] as const
}

export function usePostSmsCampaignsSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sms-campaigns']['send']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['sms-campaigns']['send']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmsCampaignsSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['sms-campaigns']['send']['$post']> },
      ) => parseResponse(client['sms-campaigns'].send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSmsCampaignsCampaignIdLinkExportFilenameFilenameKey(
  args: InferRequestType<
    (typeof client)['sms-campaigns'][':campaign_id']['link-export?filename=:filename']['$get']
  >,
) {
  return [
    'sms-campaigns',
    '/sms-campaigns/:campaign_id/link-export?filename=:filename',
    args,
  ] as const
}

export function useGetSmsCampaignsCampaignIdLinkExportFilenameFilename<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sms-campaigns'][':campaign_id']['link-export?filename=:filename']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['sms-campaigns'][':campaign_id']['link-export?filename=:filename']['$get']
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
        ? getGetSmsCampaignsCampaignIdLinkExportFilenameFilenameKey(args)
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
                (typeof client)['sms-campaigns'][':campaign_id']['link-export?filename=:filename']['$get']
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
          client['sms-campaigns'][':campaign_id']['link-export?filename=:filename'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmsCampaignsCampaignIdLinkExportFilenameFilename<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sms-campaigns'][':campaign_id']['link-export?filename=:filename']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['sms-campaigns'][':campaign_id']['link-export?filename=:filename']['$get']
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
        ? getGetSmsCampaignsCampaignIdLinkExportFilenameFilenameKey(args)
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
                (typeof client)['sms-campaigns'][':campaign_id']['link-export?filename=:filename']['$get']
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
          client['sms-campaigns'][':campaign_id']['link-export?filename=:filename'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSmsCampaignsCampaignIdLinkStatisticsKey(
  args: InferRequestType<
    (typeof client)['sms-campaigns'][':campaign_id']['link-statistics']['$get']
  >,
) {
  return ['sms-campaigns', '/sms-campaigns/:campaign_id/link-statistics', args] as const
}

export function useGetSmsCampaignsCampaignIdLinkStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sms-campaigns'][':campaign_id']['link-statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['sms-campaigns'][':campaign_id']['link-statistics']['$get']
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
        ? getGetSmsCampaignsCampaignIdLinkStatisticsKey(args)
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
                (typeof client)['sms-campaigns'][':campaign_id']['link-statistics']['$get']
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
          client['sms-campaigns'][':campaign_id']['link-statistics'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmsCampaignsCampaignIdLinkStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sms-campaigns'][':campaign_id']['link-statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['sms-campaigns'][':campaign_id']['link-statistics']['$get']
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
        ? getGetSmsCampaignsCampaignIdLinkStatisticsKey(args)
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
                (typeof client)['sms-campaigns'][':campaign_id']['link-statistics']['$get']
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
          client['sms-campaigns'][':campaign_id']['link-statistics'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSmsCampaignsCampaignIdLinkTrackingKey(
  args: InferRequestType<(typeof client)['sms-campaigns'][':campaign_id']['link-tracking']['$get']>,
) {
  return ['sms-campaigns', '/sms-campaigns/:campaign_id/link-tracking', args] as const
}

export function useGetSmsCampaignsCampaignIdLinkTracking<TError = unknown>(
  args: InferRequestType<(typeof client)['sms-campaigns'][':campaign_id']['link-tracking']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['sms-campaigns'][':campaign_id']['link-tracking']['$get']>
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
        ? getGetSmsCampaignsCampaignIdLinkTrackingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['sms-campaigns'][':campaign_id']['link-tracking']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['sms-campaigns'][':campaign_id']['link-tracking'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmsCampaignsCampaignIdLinkTracking<TError = unknown>(
  args: InferRequestType<(typeof client)['sms-campaigns'][':campaign_id']['link-tracking']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['sms-campaigns'][':campaign_id']['link-tracking']['$get']>
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
        ? getGetSmsCampaignsCampaignIdLinkTrackingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['sms-campaigns'][':campaign_id']['link-tracking']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['sms-campaigns'][':campaign_id']['link-tracking'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSmsCampaignsSmsCampaignIdKey(
  args: InferRequestType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$get']>,
) {
  return ['sms-campaigns', '/sms-campaigns/:sms_campaign_id', args] as const
}

export function useGetSmsCampaignsSmsCampaignId<TError = unknown>(
  args: InferRequestType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSmsCampaignsSmsCampaignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['sms-campaigns'][':sms_campaign_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmsCampaignsSmsCampaignId<TError = unknown>(
  args: InferRequestType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSmsCampaignsSmsCampaignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['sms-campaigns'][':sms_campaign_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSmsCampaignsSmsCampaignIdKey() {
  return ['sms-campaigns', '/sms-campaigns/:sms_campaign_id', 'PUT'] as const
}

export function usePutSmsCampaignsSmsCampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSmsCampaignsSmsCampaignIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$put']> },
      ) => parseResponse(client['sms-campaigns'][':sms_campaign_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSmsCampaignsSmsCampaignIdCancelKey() {
  return ['sms-campaigns', '/sms-campaigns/:sms_campaign_id/cancel', 'PUT'] as const
}

export function usePutSmsCampaignsSmsCampaignIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['sms-campaigns'][':sms_campaign_id']['cancel']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['sms-campaigns'][':sms_campaign_id']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSmsCampaignsSmsCampaignIdCancelKey()
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
            (typeof client)['sms-campaigns'][':sms_campaign_id']['cancel']['$put']
          >
        },
      ) =>
        parseResponse(client['sms-campaigns'][':sms_campaign_id'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSmsCancelAllKey() {
  return ['sms', '/sms/cancel-all', 'PUT'] as const
}

export function usePutSmsCancelAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['cancel-all']['$put']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSmsCancelAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.sms['cancel-all'].$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSmsEmailSmsKey() {
  return ['sms', '/sms/email-sms'] as const
}

export function useGetSmsEmailSms<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['email-sms']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmsEmailSmsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['email-sms']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sms['email-sms'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmsEmailSms<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['email-sms']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmsEmailSmsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['email-sms']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sms['email-sms'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSmsEmailSmsKey() {
  return ['sms', '/sms/email-sms', 'POST'] as const
}

export function usePostSmsEmailSms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['email-sms']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sms)['email-sms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmsEmailSmsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sms)['email-sms']['$post']> },
      ) => parseResponse(client.sms['email-sms'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSmsEmailSmsStrippedStringsKey() {
  return ['sms', '/sms/email-sms-stripped-strings'] as const
}

export function useGetSmsEmailSmsStrippedStrings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms)['email-sms-stripped-strings']['$get']>>
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
        ? getGetSmsEmailSmsStrippedStringsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sms)['email-sms-stripped-strings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sms['email-sms-stripped-strings'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmsEmailSmsStrippedStrings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms)['email-sms-stripped-strings']['$get']>>
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
        ? getGetSmsEmailSmsStrippedStringsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sms)['email-sms-stripped-strings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sms['email-sms-stripped-strings'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSmsEmailSmsStrippedStringsKey() {
  return ['sms', '/sms/email-sms-stripped-strings', 'POST'] as const
}

export function usePostSmsEmailSmsStrippedStrings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms)['email-sms-stripped-strings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sms)['email-sms-stripped-strings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmsEmailSmsStrippedStringsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sms)['email-sms-stripped-strings']['$post']> },
      ) => parseResponse(client.sms['email-sms-stripped-strings'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSmsEmailSmsStrippedStringsRuleIdKey(
  args: InferRequestType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$get']>,
) {
  return ['sms', '/sms/email-sms-stripped-strings/:rule_id', args] as const
}

export function useGetSmsEmailSmsStrippedStringsRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$get']>
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
        ? getGetSmsEmailSmsStrippedStringsRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sms['email-sms-stripped-strings'][':rule_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmsEmailSmsStrippedStringsRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$get']>
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
        ? getGetSmsEmailSmsStrippedStringsRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sms['email-sms-stripped-strings'][':rule_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSmsEmailSmsStrippedStringsRuleIdKey() {
  return ['sms', '/sms/email-sms-stripped-strings/:rule_id', 'PUT'] as const
}

export function usePutSmsEmailSmsStrippedStringsRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSmsEmailSmsStrippedStringsRuleIdKey()
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
            (typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.sms['email-sms-stripped-strings'][':rule_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSmsEmailSmsStrippedStringsRuleIdKey() {
  return ['sms', '/sms/email-sms-stripped-strings/:rule_id', 'DELETE'] as const
}

export function useDeleteSmsEmailSmsStrippedStringsRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSmsEmailSmsStrippedStringsRuleIdKey()
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
            (typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.sms['email-sms-stripped-strings'][':rule_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSmsEmailSmsEmailAddressIdKey(
  args: InferRequestType<(typeof client.sms)['email-sms'][':email_address_id']['$get']>,
) {
  return ['sms', '/sms/email-sms/:email_address_id', args] as const
}

export function useGetSmsEmailSmsEmailAddressId<TError = unknown>(
  args: InferRequestType<(typeof client.sms)['email-sms'][':email_address_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sms)['email-sms'][':email_address_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSmsEmailSmsEmailAddressIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sms)['email-sms'][':email_address_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sms['email-sms'][':email_address_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmsEmailSmsEmailAddressId<TError = unknown>(
  args: InferRequestType<(typeof client.sms)['email-sms'][':email_address_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sms)['email-sms'][':email_address_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSmsEmailSmsEmailAddressIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sms)['email-sms'][':email_address_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sms['email-sms'][':email_address_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSmsEmailSmsEmailAddressIdKey() {
  return ['sms', '/sms/email-sms/:email_address_id', 'PUT'] as const
}

export function usePutSmsEmailSmsEmailAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms)['email-sms'][':email_address_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sms)['email-sms'][':email_address_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSmsEmailSmsEmailAddressIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sms)['email-sms'][':email_address_id']['$put']> },
      ) => parseResponse(client.sms['email-sms'][':email_address_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSmsEmailSmsEmailAddressIdKey() {
  return ['sms', '/sms/email-sms/:email_address_id', 'DELETE'] as const
}

export function useDeleteSmsEmailSmsEmailAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms)['email-sms'][':email_address_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sms)['email-sms'][':email_address_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSmsEmailSmsEmailAddressIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sms)['email-sms'][':email_address_id']['$delete']>
        },
      ) => parseResponse(client.sms['email-sms'][':email_address_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSmsHistoryExportFilenameFilenameKey(
  args: InferRequestType<(typeof client.sms.history)['export?filename=:filename']['$get']>,
) {
  return ['sms', '/sms/history/export?filename=:filename', args] as const
}

export function useGetSmsHistoryExportFilenameFilename<TError = unknown>(
  args: InferRequestType<(typeof client.sms.history)['export?filename=:filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sms.history)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSmsHistoryExportFilenameFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sms.history)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sms.history['export?filename=:filename'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmsHistoryExportFilenameFilename<TError = unknown>(
  args: InferRequestType<(typeof client.sms.history)['export?filename=:filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sms.history)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSmsHistoryExportFilenameFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sms.history)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sms.history['export?filename=:filename'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSmsHistoryDateFromDateFromDateToDateToKey(
  args: InferRequestType<
    (typeof client.sms)['history?date_from=:date_from&date_to=:date_to']['$get']
  >,
) {
  return ['sms', '/sms/history?date_from=:date_from&date_to=:date_to', args] as const
}

export function useGetSmsHistoryDateFromDateFromDateToDateTo<TError = unknown>(
  args: InferRequestType<
    (typeof client.sms)['history?date_from=:date_from&date_to=:date_to']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sms)['history?date_from=:date_from&date_to=:date_to']['$get']
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
        ? getGetSmsHistoryDateFromDateFromDateToDateToKey(args)
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
                (typeof client.sms)['history?date_from=:date_from&date_to=:date_to']['$get']
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
          client.sms['history?date_from=:date_from&date_to=:date_to'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmsHistoryDateFromDateFromDateToDateTo<TError = unknown>(
  args: InferRequestType<
    (typeof client.sms)['history?date_from=:date_from&date_to=:date_to']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sms)['history?date_from=:date_from&date_to=:date_to']['$get']
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
        ? getGetSmsHistoryDateFromDateFromDateToDateToKey(args)
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
                (typeof client.sms)['history?date_from=:date_from&date_to=:date_to']['$get']
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
          client.sms['history?date_from=:date_from&date_to=:date_to'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSmsInboundKey() {
  return ['sms', '/sms/inbound'] as const
}

export function useGetSmsInbound<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.inbound.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmsInboundKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.inbound.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sms.inbound.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmsInbound<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.inbound.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmsInboundKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.inbound.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sms.inbound.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSmsInboundKey() {
  return ['sms', '/sms/inbound', 'POST'] as const
}

export function usePostSmsInbound<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.inbound.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sms.inbound.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmsInboundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sms.inbound.$post> }) =>
        parseResponse(client.sms.inbound.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSmsInboundReadKey() {
  return ['sms', '/sms/inbound-read', 'PUT'] as const
}

export function usePutSmsInboundRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['inbound-read']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sms)['inbound-read']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSmsInboundReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sms)['inbound-read']['$put']> },
      ) => parseResponse(client.sms['inbound-read'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSmsInboundReadMessageIdKey() {
  return ['sms', '/sms/inbound-read/:message_id', 'PUT'] as const
}

export function usePutSmsInboundReadMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms)['inbound-read'][':message_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sms)['inbound-read'][':message_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSmsInboundReadMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sms)['inbound-read'][':message_id']['$put']> },
      ) => parseResponse(client.sms['inbound-read'][':message_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSmsInboundOutboundMessageIdKey(
  args: InferRequestType<(typeof client.sms.inbound)[':outbound_message_id']['$get']>,
) {
  return ['sms', '/sms/inbound/:outbound_message_id', args] as const
}

export function useGetSmsInboundOutboundMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.sms.inbound)[':outbound_message_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sms.inbound)[':outbound_message_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSmsInboundOutboundMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sms.inbound)[':outbound_message_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sms.inbound[':outbound_message_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmsInboundOutboundMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.sms.inbound)[':outbound_message_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sms.inbound)[':outbound_message_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSmsInboundOutboundMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sms.inbound)[':outbound_message_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sms.inbound[':outbound_message_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSmsPriceKey() {
  return ['sms', '/sms/price', 'POST'] as const
}

export function usePostSmsPrice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.price.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sms.price.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmsPriceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sms.price.$post> }) =>
        parseResponse(client.sms.price.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSmsReceiptsKey() {
  return ['sms', '/sms/receipts'] as const
}

export function useGetSmsReceipts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.receipts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmsReceiptsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.receipts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sms.receipts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmsReceipts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.receipts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmsReceiptsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.receipts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sms.receipts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSmsReceiptsKey() {
  return ['sms', '/sms/receipts', 'POST'] as const
}

export function usePostSmsReceipts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.receipts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sms.receipts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmsReceiptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sms.receipts.$post> }) =>
        parseResponse(client.sms.receipts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSmsReceiptsReadKey() {
  return ['sms', '/sms/receipts-read', 'PUT'] as const
}

export function usePutSmsReceiptsRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['receipts-read']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sms)['receipts-read']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSmsReceiptsReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sms)['receipts-read']['$put']> },
      ) => parseResponse(client.sms['receipts-read'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSmsReceiptsMessageIdKey(
  args: InferRequestType<(typeof client.sms.receipts)[':message_id']['$get']>,
) {
  return ['sms', '/sms/receipts/:message_id', args] as const
}

export function useGetSmsReceiptsMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.sms.receipts)[':message_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sms.receipts)[':message_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSmsReceiptsMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sms.receipts)[':message_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sms.receipts[':message_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmsReceiptsMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.sms.receipts)[':message_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sms.receipts)[':message_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSmsReceiptsMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sms.receipts)[':message_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sms.receipts[':message_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSmsSendKey() {
  return ['sms', '/sms/send', 'POST'] as const
}

export function usePostSmsSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.send.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sms.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmsSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sms.send.$post> }) =>
        parseResponse(client.sms.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSmsTemplatesKey() {
  return ['sms', '/sms/templates'] as const
}

export function useGetSmsTemplates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.templates.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmsTemplatesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sms.templates.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSmsTemplates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.templates.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmsTemplatesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sms.templates.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSmsTemplatesKey() {
  return ['sms', '/sms/templates', 'POST'] as const
}

export function usePostSmsTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.templates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sms.templates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmsTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sms.templates.$post> }) =>
        parseResponse(client.sms.templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSmsTemplatesTemplateIdKey() {
  return ['sms', '/sms/templates/:template_id', 'PUT'] as const
}

export function usePutSmsTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms.templates)[':template_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sms.templates)[':template_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSmsTemplatesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sms.templates)[':template_id']['$put']> },
      ) => parseResponse(client.sms.templates[':template_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSmsTemplatesTemplateIdKey() {
  return ['sms', '/sms/templates/:template_id', 'DELETE'] as const
}

export function useDeleteSmsTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms.templates)[':template_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sms.templates)[':template_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSmsTemplatesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sms.templates)[':template_id']['$delete']> },
      ) => parseResponse(client.sms.templates[':template_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSmsMessageIdCancelKey() {
  return ['sms', '/sms/:message_id/cancel', 'PUT'] as const
}

export function usePutSmsMessageIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms)[':message_id']['cancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sms)[':message_id']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSmsMessageIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sms)[':message_id']['cancel']['$put']> },
      ) => parseResponse(client.sms[':message_id'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStatisticsSmsKey() {
  return ['statistics', '/statistics/sms'] as const
}

export function useGetStatisticsSms<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.sms.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatisticsSmsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.sms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.statistics.sms.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatisticsSms<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.sms.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatisticsSmsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.sms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.statistics.sms.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatisticsVoiceKey() {
  return ['statistics', '/statistics/voice'] as const
}

export function useGetStatisticsVoice<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.voice.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatisticsVoiceKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.voice.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.statistics.voice.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatisticsVoice<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.voice.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatisticsVoiceKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.voice.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.statistics.voice.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubaccountsKey() {
  return ['subaccounts', '/subaccounts'] as const
}

export function useGetSubaccounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubaccountsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subaccounts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubaccounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubaccountsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subaccounts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSubaccountsKey() {
  return ['subaccounts', '/subaccounts', 'POST'] as const
}

export function usePostSubaccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.subaccounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubaccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.subaccounts.$post> }) =>
        parseResponse(client.subaccounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubaccountsSubaccountIdKey(
  args: InferRequestType<(typeof client.subaccounts)[':subaccount_id']['$get']>,
) {
  return ['subaccounts', '/subaccounts/:subaccount_id', args] as const
}

export function useGetSubaccountsSubaccountId<TError = unknown>(
  args: InferRequestType<(typeof client.subaccounts)[':subaccount_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subaccounts)[':subaccount_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubaccountsSubaccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subaccounts)[':subaccount_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subaccounts[':subaccount_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubaccountsSubaccountId<TError = unknown>(
  args: InferRequestType<(typeof client.subaccounts)[':subaccount_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subaccounts)[':subaccount_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSubaccountsSubaccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subaccounts)[':subaccount_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subaccounts[':subaccount_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSubaccountsSubaccountIdKey() {
  return ['subaccounts', '/subaccounts/:subaccount_id', 'PUT'] as const
}

export function usePutSubaccountsSubaccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subaccounts)[':subaccount_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subaccounts)[':subaccount_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSubaccountsSubaccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.subaccounts)[':subaccount_id']['$put']> },
      ) => parseResponse(client.subaccounts[':subaccount_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSubaccountsSubaccountIdKey() {
  return ['subaccounts', '/subaccounts/:subaccount_id', 'DELETE'] as const
}

export function useDeleteSubaccountsSubaccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subaccounts)[':subaccount_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subaccounts)[':subaccount_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSubaccountsSubaccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.subaccounts)[':subaccount_id']['$delete']> },
      ) => parseResponse(client.subaccounts[':subaccount_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSubaccountsSubaccountIdRegenApiKeyKey() {
  return ['subaccounts', '/subaccounts/:subaccount_id/regen-api-key', 'PUT'] as const
}

export function usePutSubaccountsSubaccountIdRegenApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.subaccounts)[':subaccount_id']['regen-api-key']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subaccounts)[':subaccount_id']['regen-api-key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSubaccountsSubaccountIdRegenApiKeyKey()
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
            (typeof client.subaccounts)[':subaccount_id']['regen-api-key']['$put']
          >
        },
      ) =>
        parseResponse(
          client.subaccounts[':subaccount_id']['regen-api-key'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTimezonesKey() {
  return ['timezones', '/timezones'] as const
}

export function useGetTimezones<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezones.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimezonesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezones.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.timezones.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimezones<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezones.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimezonesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezones.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.timezones.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUploadsConvertConvertKey() {
  return ['uploads?convert=:convert', '/uploads?convert=:convert', 'POST'] as const
}

export function usePostUploadsConvertConvert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['uploads?convert=:convert']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['uploads?convert=:convert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadsConvertConvertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['uploads?convert=:convert']['$post']> },
      ) => parseResponse(client['uploads?convert=:convert'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVoiceCancelAllKey() {
  return ['voice', '/voice/cancel-all', 'PUT'] as const
}

export function usePutVoiceCancelAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.voice)['cancel-all']['$put']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVoiceCancelAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.voice['cancel-all'].$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVoiceHistoryExportFilenameFilenameKey(
  args: InferRequestType<(typeof client.voice.history)['export?filename=:filename']['$get']>,
) {
  return ['voice', '/voice/history/export?filename=:filename', args] as const
}

export function useGetVoiceHistoryExportFilenameFilename<TError = unknown>(
  args: InferRequestType<(typeof client.voice.history)['export?filename=:filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.voice.history)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVoiceHistoryExportFilenameFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.voice.history)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.voice.history['export?filename=:filename'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVoiceHistoryExportFilenameFilename<TError = unknown>(
  args: InferRequestType<(typeof client.voice.history)['export?filename=:filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.voice.history)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVoiceHistoryExportFilenameFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.voice.history)['export?filename=:filename']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.voice.history['export?filename=:filename'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVoiceHistoryDateFromDateFromDateToDateToKey(
  args: InferRequestType<
    (typeof client.voice)['history?date_from=:date_from&date_to=:date_to']['$get']
  >,
) {
  return ['voice', '/voice/history?date_from=:date_from&date_to=:date_to', args] as const
}

export function useGetVoiceHistoryDateFromDateFromDateToDateTo<TError = unknown>(
  args: InferRequestType<
    (typeof client.voice)['history?date_from=:date_from&date_to=:date_to']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.voice)['history?date_from=:date_from&date_to=:date_to']['$get']
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
        ? getGetVoiceHistoryDateFromDateFromDateToDateToKey(args)
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
                (typeof client.voice)['history?date_from=:date_from&date_to=:date_to']['$get']
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
          client.voice['history?date_from=:date_from&date_to=:date_to'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVoiceHistoryDateFromDateFromDateToDateTo<TError = unknown>(
  args: InferRequestType<
    (typeof client.voice)['history?date_from=:date_from&date_to=:date_to']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.voice)['history?date_from=:date_from&date_to=:date_to']['$get']
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
        ? getGetVoiceHistoryDateFromDateFromDateToDateToKey(args)
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
                (typeof client.voice)['history?date_from=:date_from&date_to=:date_to']['$get']
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
          client.voice['history?date_from=:date_from&date_to=:date_to'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVoiceLangKey() {
  return ['voice', '/voice/lang'] as const
}

export function useGetVoiceLang<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.lang.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVoiceLangKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.lang.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.voice.lang.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVoiceLang<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.lang.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVoiceLangKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.lang.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.voice.lang.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVoicePriceKey() {
  return ['voice', '/voice/price', 'POST'] as const
}

export function usePostVoicePrice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.price.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.voice.price.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVoicePriceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.voice.price.$post> }) =>
        parseResponse(client.voice.price.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVoiceReceiptsKey() {
  return ['voice', '/voice/receipts'] as const
}

export function useGetVoiceReceipts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.receipts.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVoiceReceiptsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.receipts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.voice.receipts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVoiceReceipts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.receipts.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVoiceReceiptsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.receipts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.voice.receipts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVoiceReceiptsKey() {
  return ['voice', '/voice/receipts', 'POST'] as const
}

export function usePostVoiceReceipts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.receipts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.voice.receipts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVoiceReceiptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.voice.receipts.$post> }) =>
        parseResponse(client.voice.receipts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVoiceReceiptsReadDateBeforeDateBeforeKey() {
  return ['voice', '/voice/receipts-read?date_before=:date_before', 'PUT'] as const
}

export function usePutVoiceReceiptsReadDateBeforeDateBefore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.voice)['receipts-read?date_before=:date_before']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.voice)['receipts-read?date_before=:date_before']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVoiceReceiptsReadDateBeforeDateBeforeKey()
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
            (typeof client.voice)['receipts-read?date_before=:date_before']['$put']
          >
        },
      ) =>
        parseResponse(
          client.voice['receipts-read?date_before=:date_before'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVoiceReceiptsMessageIdKey(
  args: InferRequestType<(typeof client.voice.receipts)[':message_id']['$get']>,
) {
  return ['voice', '/voice/receipts/:message_id', args] as const
}

export function useGetVoiceReceiptsMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.voice.receipts)[':message_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.voice.receipts)[':message_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVoiceReceiptsMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.voice.receipts)[':message_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.voice.receipts[':message_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVoiceReceiptsMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.voice.receipts)[':message_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.voice.receipts)[':message_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVoiceReceiptsMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.voice.receipts)[':message_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.voice.receipts[':message_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVoiceSendKey() {
  return ['voice', '/voice/send', 'POST'] as const
}

export function usePostVoiceSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.send.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.voice.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVoiceSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.voice.send.$post> }) =>
        parseResponse(client.voice.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVoiceMessageIdCancelKey() {
  return ['voice', '/voice/:message_id/cancel', 'PUT'] as const
}

export function usePutVoiceMessageIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.voice)[':message_id']['cancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.voice)[':message_id']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVoiceMessageIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.voice)[':message_id']['cancel']['$put']> },
      ) => parseResponse(client.voice[':message_id'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
