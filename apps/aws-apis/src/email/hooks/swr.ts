import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionCloneReceiptRuleSetKey() {
  return ['#Action=CloneReceiptRuleSet'] as const
}

export function getActionCreateConfigurationSetKey() {
  return ['#Action=CreateConfigurationSet'] as const
}

export function getActionCreateConfigurationSetEventDestinationKey() {
  return ['#Action=CreateConfigurationSetEventDestination'] as const
}

export function getActionCreateConfigurationSetTrackingOptionsKey() {
  return ['#Action=CreateConfigurationSetTrackingOptions'] as const
}

export function getActionCreateCustomVerificationEmailTemplateKey() {
  return ['#Action=CreateCustomVerificationEmailTemplate'] as const
}

export function getActionCreateReceiptFilterKey() {
  return ['#Action=CreateReceiptFilter'] as const
}

export function getActionCreateReceiptRuleKey() {
  return ['#Action=CreateReceiptRule'] as const
}

export function getActionCreateReceiptRuleSetKey() {
  return ['#Action=CreateReceiptRuleSet'] as const
}

export function getActionCreateTemplateKey() {
  return ['#Action=CreateTemplate'] as const
}

export function getActionDeleteConfigurationSetKey() {
  return ['#Action=DeleteConfigurationSet'] as const
}

export function getActionDeleteConfigurationSetEventDestinationKey() {
  return ['#Action=DeleteConfigurationSetEventDestination'] as const
}

export function getActionDeleteConfigurationSetTrackingOptionsKey() {
  return ['#Action=DeleteConfigurationSetTrackingOptions'] as const
}

export function getActionDeleteCustomVerificationEmailTemplateKey() {
  return ['#Action=DeleteCustomVerificationEmailTemplate'] as const
}

export function getActionDeleteIdentityKey() {
  return ['#Action=DeleteIdentity'] as const
}

export function getActionDeleteIdentityPolicyKey() {
  return ['#Action=DeleteIdentityPolicy'] as const
}

export function getActionDeleteReceiptFilterKey() {
  return ['#Action=DeleteReceiptFilter'] as const
}

export function getActionDeleteReceiptRuleKey() {
  return ['#Action=DeleteReceiptRule'] as const
}

export function getActionDeleteReceiptRuleSetKey() {
  return ['#Action=DeleteReceiptRuleSet'] as const
}

export function getActionDeleteTemplateKey() {
  return ['#Action=DeleteTemplate'] as const
}

export function getActionDeleteVerifiedEmailAddressKey() {
  return ['#Action=DeleteVerifiedEmailAddress'] as const
}

export function getActionDescribeActiveReceiptRuleSetKey() {
  return ['#Action=DescribeActiveReceiptRuleSet'] as const
}

export function getActionDescribeConfigurationSetKey() {
  return ['#Action=DescribeConfigurationSet'] as const
}

export function getActionDescribeReceiptRuleKey() {
  return ['#Action=DescribeReceiptRule'] as const
}

export function getActionDescribeReceiptRuleSetKey() {
  return ['#Action=DescribeReceiptRuleSet'] as const
}

export function getActionGetAccountSendingEnabledKey() {
  return ['#Action=GetAccountSendingEnabled'] as const
}

export function getActionGetCustomVerificationEmailTemplateKey() {
  return ['#Action=GetCustomVerificationEmailTemplate'] as const
}

export function getActionGetIdentityDkimAttributesKey() {
  return ['#Action=GetIdentityDkimAttributes'] as const
}

export function getActionGetIdentityMailFromDomainAttributesKey() {
  return ['#Action=GetIdentityMailFromDomainAttributes'] as const
}

export function getActionGetIdentityNotificationAttributesKey() {
  return ['#Action=GetIdentityNotificationAttributes'] as const
}

export function getActionGetIdentityPoliciesKey() {
  return ['#Action=GetIdentityPolicies'] as const
}

export function getActionGetIdentityVerificationAttributesKey() {
  return ['#Action=GetIdentityVerificationAttributes'] as const
}

export function getActionGetSendQuotaKey() {
  return ['#Action=GetSendQuota'] as const
}

export function getActionGetSendStatisticsKey() {
  return ['#Action=GetSendStatistics'] as const
}

export function getActionGetTemplateKey() {
  return ['#Action=GetTemplate'] as const
}

export function getActionListConfigurationSetsKey() {
  return ['#Action=ListConfigurationSets'] as const
}

export function getActionListCustomVerificationEmailTemplatesKey() {
  return ['#Action=ListCustomVerificationEmailTemplates'] as const
}

export function getActionListIdentitiesKey() {
  return ['#Action=ListIdentities'] as const
}

export function getActionListIdentityPoliciesKey() {
  return ['#Action=ListIdentityPolicies'] as const
}

export function getActionListReceiptFiltersKey() {
  return ['#Action=ListReceiptFilters'] as const
}

export function getActionListReceiptRuleSetsKey() {
  return ['#Action=ListReceiptRuleSets'] as const
}

export function getActionListTemplatesKey() {
  return ['#Action=ListTemplates'] as const
}

export function getActionListVerifiedEmailAddressesKey() {
  return ['#Action=ListVerifiedEmailAddresses'] as const
}

export function getActionPutConfigurationSetDeliveryOptionsKey() {
  return ['#Action=PutConfigurationSetDeliveryOptions'] as const
}

export function getActionPutIdentityPolicyKey() {
  return ['#Action=PutIdentityPolicy'] as const
}

export function getActionReorderReceiptRuleSetKey() {
  return ['#Action=ReorderReceiptRuleSet'] as const
}

export function getActionSendBounceKey() {
  return ['#Action=SendBounce'] as const
}

export function getActionSendBulkTemplatedEmailKey() {
  return ['#Action=SendBulkTemplatedEmail'] as const
}

export function getActionSendCustomVerificationEmailKey() {
  return ['#Action=SendCustomVerificationEmail'] as const
}

export function getActionSendEmailKey() {
  return ['#Action=SendEmail'] as const
}

export function getActionSendRawEmailKey() {
  return ['#Action=SendRawEmail'] as const
}

export function getActionSendTemplatedEmailKey() {
  return ['#Action=SendTemplatedEmail'] as const
}

export function getActionSetActiveReceiptRuleSetKey() {
  return ['#Action=SetActiveReceiptRuleSet'] as const
}

export function getActionSetIdentityDkimEnabledKey() {
  return ['#Action=SetIdentityDkimEnabled'] as const
}

export function getActionSetIdentityFeedbackForwardingEnabledKey() {
  return ['#Action=SetIdentityFeedbackForwardingEnabled'] as const
}

export function getActionSetIdentityHeadersInNotificationsEnabledKey() {
  return ['#Action=SetIdentityHeadersInNotificationsEnabled'] as const
}

export function getActionSetIdentityMailFromDomainKey() {
  return ['#Action=SetIdentityMailFromDomain'] as const
}

export function getActionSetIdentityNotificationTopicKey() {
  return ['#Action=SetIdentityNotificationTopic'] as const
}

export function getActionSetReceiptRulePositionKey() {
  return ['#Action=SetReceiptRulePosition'] as const
}

export function getActionTestRenderTemplateKey() {
  return ['#Action=TestRenderTemplate'] as const
}

export function getActionUpdateAccountSendingEnabledKey() {
  return ['#Action=UpdateAccountSendingEnabled'] as const
}

export function getActionUpdateConfigurationSetEventDestinationKey() {
  return ['#Action=UpdateConfigurationSetEventDestination'] as const
}

export function getActionUpdateConfigurationSetReputationMetricsEnabledKey() {
  return ['#Action=UpdateConfigurationSetReputationMetricsEnabled'] as const
}

export function getActionUpdateConfigurationSetSendingEnabledKey() {
  return ['#Action=UpdateConfigurationSetSendingEnabled'] as const
}

export function getActionUpdateConfigurationSetTrackingOptionsKey() {
  return ['#Action=UpdateConfigurationSetTrackingOptions'] as const
}

export function getActionUpdateCustomVerificationEmailTemplateKey() {
  return ['#Action=UpdateCustomVerificationEmailTemplate'] as const
}

export function getActionUpdateReceiptRuleKey() {
  return ['#Action=UpdateReceiptRule'] as const
}

export function getActionUpdateTemplateKey() {
  return ['#Action=UpdateTemplate'] as const
}

export function getActionVerifyDomainDkimKey() {
  return ['#Action=VerifyDomainDkim'] as const
}

export function getActionVerifyDomainIdentityKey() {
  return ['#Action=VerifyDomainIdentity'] as const
}

export function getActionVerifyEmailAddressKey() {
  return ['#Action=VerifyEmailAddress'] as const
}

export function getActionVerifyEmailIdentityKey() {
  return ['#Action=VerifyEmailIdentity'] as const
}

export function getGetActionCloneReceiptRuleSetKey(
  args: InferRequestType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CloneReceiptRuleSet', '/#Action=CloneReceiptRuleSet', keyArgs] as const
}

export function useGetActionCloneReceiptRuleSet<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCloneReceiptRuleSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CloneReceiptRuleSet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCloneReceiptRuleSet<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCloneReceiptRuleSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CloneReceiptRuleSet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCloneReceiptRuleSetKey() {
  return ['#Action=CloneReceiptRuleSet', '/#Action=CloneReceiptRuleSet', 'POST'] as const
}

export function usePostActionCloneReceiptRuleSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CloneReceiptRuleSet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CloneReceiptRuleSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCloneReceiptRuleSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CloneReceiptRuleSet']['$post']> },
      ) => parseResponse(client['#Action=CloneReceiptRuleSet'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateConfigurationSetKey(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateConfigurationSet', '/#Action=CreateConfigurationSet', keyArgs] as const
}

export function useGetActionCreateConfigurationSet<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationSet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationSet']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateConfigurationSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationSet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateConfigurationSet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateConfigurationSet<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationSet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationSet']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateConfigurationSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationSet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateConfigurationSet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateConfigurationSetKey() {
  return ['#Action=CreateConfigurationSet', '/#Action=CreateConfigurationSet', 'POST'] as const
}

export function usePostActionCreateConfigurationSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationSet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateConfigurationSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateConfigurationSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateConfigurationSet']['$post']> },
      ) => parseResponse(client['#Action=CreateConfigurationSet'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateConfigurationSetEventDestinationKey(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateConfigurationSetEventDestination',
    '/#Action=CreateConfigurationSetEventDestination',
    keyArgs,
  ] as const
}

export function useGetActionCreateConfigurationSetEventDestination<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']>
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
        ? getGetActionCreateConfigurationSetEventDestinationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=CreateConfigurationSetEventDestination'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateConfigurationSetEventDestination<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']>
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
        ? getGetActionCreateConfigurationSetEventDestinationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=CreateConfigurationSetEventDestination'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateConfigurationSetEventDestinationKey() {
  return [
    '#Action=CreateConfigurationSetEventDestination',
    '/#Action=CreateConfigurationSetEventDestination',
    'POST',
  ] as const
}

export function usePostActionCreateConfigurationSetEventDestination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=CreateConfigurationSetEventDestination']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateConfigurationSetEventDestination']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateConfigurationSetEventDestinationKey()
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
            (typeof client)['#Action=CreateConfigurationSetEventDestination']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=CreateConfigurationSetEventDestination'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateConfigurationSetTrackingOptionsKey(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateConfigurationSetTrackingOptions',
    '/#Action=CreateConfigurationSetTrackingOptions',
    keyArgs,
  ] as const
}

export function useGetActionCreateConfigurationSetTrackingOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']>
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
        ? getGetActionCreateConfigurationSetTrackingOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=CreateConfigurationSetTrackingOptions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateConfigurationSetTrackingOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']>
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
        ? getGetActionCreateConfigurationSetTrackingOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=CreateConfigurationSetTrackingOptions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateConfigurationSetTrackingOptionsKey() {
  return [
    '#Action=CreateConfigurationSetTrackingOptions',
    '/#Action=CreateConfigurationSetTrackingOptions',
    'POST',
  ] as const
}

export function usePostActionCreateConfigurationSetTrackingOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateConfigurationSetTrackingOptionsKey()
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
            (typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=CreateConfigurationSetTrackingOptions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateCustomVerificationEmailTemplateKey(
  args: InferRequestType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateCustomVerificationEmailTemplate',
    '/#Action=CreateCustomVerificationEmailTemplate',
    keyArgs,
  ] as const
}

export function useGetActionCreateCustomVerificationEmailTemplate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']>
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
        ? getGetActionCreateCustomVerificationEmailTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=CreateCustomVerificationEmailTemplate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateCustomVerificationEmailTemplate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']>
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
        ? getGetActionCreateCustomVerificationEmailTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=CreateCustomVerificationEmailTemplate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateCustomVerificationEmailTemplateKey() {
  return [
    '#Action=CreateCustomVerificationEmailTemplate',
    '/#Action=CreateCustomVerificationEmailTemplate',
    'POST',
  ] as const
}

export function usePostActionCreateCustomVerificationEmailTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateCustomVerificationEmailTemplateKey()
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
            (typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=CreateCustomVerificationEmailTemplate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateReceiptFilterKey(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptFilter']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateReceiptFilter', '/#Action=CreateReceiptFilter', keyArgs] as const
}

export function useGetActionCreateReceiptFilter<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptFilter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateReceiptFilter']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateReceiptFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateReceiptFilter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateReceiptFilter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateReceiptFilter<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptFilter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateReceiptFilter']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateReceiptFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateReceiptFilter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateReceiptFilter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateReceiptFilterKey() {
  return ['#Action=CreateReceiptFilter', '/#Action=CreateReceiptFilter', 'POST'] as const
}

export function usePostActionCreateReceiptFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateReceiptFilter']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateReceiptFilter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateReceiptFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateReceiptFilter']['$post']> },
      ) => parseResponse(client['#Action=CreateReceiptFilter'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateReceiptRuleKey(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptRule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateReceiptRule', '/#Action=CreateReceiptRule', keyArgs] as const
}

export function useGetActionCreateReceiptRule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptRule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRule']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateReceiptRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateReceiptRule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateReceiptRule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptRule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRule']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateReceiptRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateReceiptRule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateReceiptRuleKey() {
  return ['#Action=CreateReceiptRule', '/#Action=CreateReceiptRule', 'POST'] as const
}

export function usePostActionCreateReceiptRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateReceiptRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateReceiptRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateReceiptRule']['$post']> },
      ) => parseResponse(client['#Action=CreateReceiptRule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateReceiptRuleSetKey(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateReceiptRuleSet', '/#Action=CreateReceiptRuleSet', keyArgs] as const
}

export function useGetActionCreateReceiptRuleSet<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateReceiptRuleSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateReceiptRuleSet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateReceiptRuleSet<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateReceiptRuleSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateReceiptRuleSet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateReceiptRuleSetKey() {
  return ['#Action=CreateReceiptRuleSet', '/#Action=CreateReceiptRuleSet', 'POST'] as const
}

export function usePostActionCreateReceiptRuleSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRuleSet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateReceiptRuleSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateReceiptRuleSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateReceiptRuleSet']['$post']> },
      ) => parseResponse(client['#Action=CreateReceiptRuleSet'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateTemplateKey(
  args: InferRequestType<(typeof client)['#Action=CreateTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateTemplate', '/#Action=CreateTemplate', keyArgs] as const
}

export function useGetActionCreateTemplate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateTemplate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateTemplate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateTemplate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateTemplate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateTemplate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateTemplate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateTemplate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateTemplate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateTemplate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateTemplateKey() {
  return ['#Action=CreateTemplate', '/#Action=CreateTemplate', 'POST'] as const
}

export function usePostActionCreateTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateTemplate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateTemplate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateTemplate']['$post']> },
      ) => parseResponse(client['#Action=CreateTemplate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteConfigurationSetKey(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteConfigurationSet', '/#Action=DeleteConfigurationSet', keyArgs] as const
}

export function useGetActionDeleteConfigurationSet<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteConfigurationSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteConfigurationSet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteConfigurationSet<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteConfigurationSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteConfigurationSet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteConfigurationSetKey() {
  return ['#Action=DeleteConfigurationSet', '/#Action=DeleteConfigurationSet', 'POST'] as const
}

export function usePostActionDeleteConfigurationSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationSet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteConfigurationSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteConfigurationSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteConfigurationSet']['$post']> },
      ) => parseResponse(client['#Action=DeleteConfigurationSet'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteConfigurationSetEventDestinationKey(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteConfigurationSetEventDestination',
    '/#Action=DeleteConfigurationSetEventDestination',
    keyArgs,
  ] as const
}

export function useGetActionDeleteConfigurationSetEventDestination<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']>
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
        ? getGetActionDeleteConfigurationSetEventDestinationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DeleteConfigurationSetEventDestination'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteConfigurationSetEventDestination<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']>
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
        ? getGetActionDeleteConfigurationSetEventDestinationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DeleteConfigurationSetEventDestination'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteConfigurationSetEventDestinationKey() {
  return [
    '#Action=DeleteConfigurationSetEventDestination',
    '/#Action=DeleteConfigurationSetEventDestination',
    'POST',
  ] as const
}

export function usePostActionDeleteConfigurationSetEventDestination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DeleteConfigurationSetEventDestination']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteConfigurationSetEventDestination']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteConfigurationSetEventDestinationKey()
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
            (typeof client)['#Action=DeleteConfigurationSetEventDestination']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=DeleteConfigurationSetEventDestination'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteConfigurationSetTrackingOptionsKey(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteConfigurationSetTrackingOptions',
    '/#Action=DeleteConfigurationSetTrackingOptions',
    keyArgs,
  ] as const
}

export function useGetActionDeleteConfigurationSetTrackingOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']>
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
        ? getGetActionDeleteConfigurationSetTrackingOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DeleteConfigurationSetTrackingOptions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteConfigurationSetTrackingOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']>
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
        ? getGetActionDeleteConfigurationSetTrackingOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DeleteConfigurationSetTrackingOptions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteConfigurationSetTrackingOptionsKey() {
  return [
    '#Action=DeleteConfigurationSetTrackingOptions',
    '/#Action=DeleteConfigurationSetTrackingOptions',
    'POST',
  ] as const
}

export function usePostActionDeleteConfigurationSetTrackingOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteConfigurationSetTrackingOptionsKey()
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
            (typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=DeleteConfigurationSetTrackingOptions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteCustomVerificationEmailTemplateKey(
  args: InferRequestType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteCustomVerificationEmailTemplate',
    '/#Action=DeleteCustomVerificationEmailTemplate',
    keyArgs,
  ] as const
}

export function useGetActionDeleteCustomVerificationEmailTemplate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']>
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
        ? getGetActionDeleteCustomVerificationEmailTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DeleteCustomVerificationEmailTemplate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteCustomVerificationEmailTemplate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']>
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
        ? getGetActionDeleteCustomVerificationEmailTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DeleteCustomVerificationEmailTemplate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteCustomVerificationEmailTemplateKey() {
  return [
    '#Action=DeleteCustomVerificationEmailTemplate',
    '/#Action=DeleteCustomVerificationEmailTemplate',
    'POST',
  ] as const
}

export function usePostActionDeleteCustomVerificationEmailTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteCustomVerificationEmailTemplateKey()
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
            (typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=DeleteCustomVerificationEmailTemplate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteIdentityKey(
  args: InferRequestType<(typeof client)['#Action=DeleteIdentity']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteIdentity', '/#Action=DeleteIdentity', keyArgs] as const
}

export function useGetActionDeleteIdentity<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteIdentity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteIdentity']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteIdentityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteIdentity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteIdentity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteIdentity<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteIdentity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteIdentity']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteIdentityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteIdentity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteIdentity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteIdentityKey() {
  return ['#Action=DeleteIdentity', '/#Action=DeleteIdentity', 'POST'] as const
}

export function usePostActionDeleteIdentity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteIdentity']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteIdentity']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteIdentityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteIdentity']['$post']> },
      ) => parseResponse(client['#Action=DeleteIdentity'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteIdentityPolicyKey(
  args: InferRequestType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteIdentityPolicy', '/#Action=DeleteIdentityPolicy', keyArgs] as const
}

export function useGetActionDeleteIdentityPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteIdentityPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteIdentityPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteIdentityPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteIdentityPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteIdentityPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteIdentityPolicyKey() {
  return ['#Action=DeleteIdentityPolicy', '/#Action=DeleteIdentityPolicy', 'POST'] as const
}

export function usePostActionDeleteIdentityPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteIdentityPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteIdentityPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteIdentityPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteIdentityPolicy']['$post']> },
      ) => parseResponse(client['#Action=DeleteIdentityPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteReceiptFilterKey(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteReceiptFilter', '/#Action=DeleteReceiptFilter', keyArgs] as const
}

export function useGetActionDeleteReceiptFilter<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteReceiptFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteReceiptFilter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteReceiptFilter<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteReceiptFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteReceiptFilter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteReceiptFilterKey() {
  return ['#Action=DeleteReceiptFilter', '/#Action=DeleteReceiptFilter', 'POST'] as const
}

export function usePostActionDeleteReceiptFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptFilter']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteReceiptFilter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteReceiptFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteReceiptFilter']['$post']> },
      ) => parseResponse(client['#Action=DeleteReceiptFilter'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteReceiptRuleKey(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptRule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteReceiptRule', '/#Action=DeleteReceiptRule', keyArgs] as const
}

export function useGetActionDeleteReceiptRule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptRule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRule']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteReceiptRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteReceiptRule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteReceiptRule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptRule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRule']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteReceiptRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteReceiptRule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteReceiptRuleKey() {
  return ['#Action=DeleteReceiptRule', '/#Action=DeleteReceiptRule', 'POST'] as const
}

export function usePostActionDeleteReceiptRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteReceiptRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteReceiptRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteReceiptRule']['$post']> },
      ) => parseResponse(client['#Action=DeleteReceiptRule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteReceiptRuleSetKey(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteReceiptRuleSet', '/#Action=DeleteReceiptRuleSet', keyArgs] as const
}

export function useGetActionDeleteReceiptRuleSet<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteReceiptRuleSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteReceiptRuleSet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteReceiptRuleSet<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteReceiptRuleSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteReceiptRuleSet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteReceiptRuleSetKey() {
  return ['#Action=DeleteReceiptRuleSet', '/#Action=DeleteReceiptRuleSet', 'POST'] as const
}

export function usePostActionDeleteReceiptRuleSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRuleSet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteReceiptRuleSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteReceiptRuleSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteReceiptRuleSet']['$post']> },
      ) => parseResponse(client['#Action=DeleteReceiptRuleSet'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteTemplateKey(
  args: InferRequestType<(typeof client)['#Action=DeleteTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteTemplate', '/#Action=DeleteTemplate', keyArgs] as const
}

export function useGetActionDeleteTemplate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteTemplate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteTemplate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteTemplate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteTemplate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteTemplate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteTemplate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteTemplate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteTemplate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteTemplate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteTemplateKey() {
  return ['#Action=DeleteTemplate', '/#Action=DeleteTemplate', 'POST'] as const
}

export function usePostActionDeleteTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteTemplate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteTemplate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteTemplate']['$post']> },
      ) => parseResponse(client['#Action=DeleteTemplate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteVerifiedEmailAddressKey(
  args: InferRequestType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteVerifiedEmailAddress',
    '/#Action=DeleteVerifiedEmailAddress',
    keyArgs,
  ] as const
}

export function useGetActionDeleteVerifiedEmailAddress<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteVerifiedEmailAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteVerifiedEmailAddress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteVerifiedEmailAddress<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteVerifiedEmailAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteVerifiedEmailAddress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteVerifiedEmailAddressKey() {
  return [
    '#Action=DeleteVerifiedEmailAddress',
    '/#Action=DeleteVerifiedEmailAddress',
    'POST',
  ] as const
}

export function usePostActionDeleteVerifiedEmailAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteVerifiedEmailAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$post']>
        },
      ) => parseResponse(client['#Action=DeleteVerifiedEmailAddress'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeActiveReceiptRuleSetKey(
  args: InferRequestType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeActiveReceiptRuleSet',
    '/#Action=DescribeActiveReceiptRuleSet',
    keyArgs,
  ] as const
}

export function useGetActionDescribeActiveReceiptRuleSet<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeActiveReceiptRuleSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeActiveReceiptRuleSet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeActiveReceiptRuleSet<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeActiveReceiptRuleSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeActiveReceiptRuleSet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeActiveReceiptRuleSetKey() {
  return [
    '#Action=DescribeActiveReceiptRuleSet',
    '/#Action=DescribeActiveReceiptRuleSet',
    'POST',
  ] as const
}

export function usePostActionDescribeActiveReceiptRuleSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeActiveReceiptRuleSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeActiveReceiptRuleSet'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeConfigurationSetKey(
  args: InferRequestType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeConfigurationSet', '/#Action=DescribeConfigurationSet', keyArgs] as const
}

export function useGetActionDescribeConfigurationSet<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeConfigurationSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeConfigurationSet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeConfigurationSet<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeConfigurationSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeConfigurationSet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeConfigurationSetKey() {
  return ['#Action=DescribeConfigurationSet', '/#Action=DescribeConfigurationSet', 'POST'] as const
}

export function usePostActionDescribeConfigurationSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeConfigurationSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeConfigurationSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeConfigurationSet']['$post']> },
      ) => parseResponse(client['#Action=DescribeConfigurationSet'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeReceiptRuleKey(
  args: InferRequestType<(typeof client)['#Action=DescribeReceiptRule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeReceiptRule', '/#Action=DescribeReceiptRule', keyArgs] as const
}

export function useGetActionDescribeReceiptRule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeReceiptRule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRule']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeReceiptRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeReceiptRule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeReceiptRule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeReceiptRule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRule']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeReceiptRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeReceiptRule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeReceiptRuleKey() {
  return ['#Action=DescribeReceiptRule', '/#Action=DescribeReceiptRule', 'POST'] as const
}

export function usePostActionDescribeReceiptRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeReceiptRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeReceiptRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeReceiptRule']['$post']> },
      ) => parseResponse(client['#Action=DescribeReceiptRule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeReceiptRuleSetKey(
  args: InferRequestType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeReceiptRuleSet', '/#Action=DescribeReceiptRuleSet', keyArgs] as const
}

export function useGetActionDescribeReceiptRuleSet<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeReceiptRuleSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeReceiptRuleSet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeReceiptRuleSet<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDescribeReceiptRuleSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeReceiptRuleSet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeReceiptRuleSetKey() {
  return ['#Action=DescribeReceiptRuleSet', '/#Action=DescribeReceiptRuleSet', 'POST'] as const
}

export function usePostActionDescribeReceiptRuleSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRuleSet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeReceiptRuleSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeReceiptRuleSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeReceiptRuleSet']['$post']> },
      ) => parseResponse(client['#Action=DescribeReceiptRuleSet'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetAccountSendingEnabledKey(
  args: InferRequestType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetAccountSendingEnabled', '/#Action=GetAccountSendingEnabled', keyArgs] as const
}

export function useGetActionGetAccountSendingEnabled<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetAccountSendingEnabledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetAccountSendingEnabled'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetAccountSendingEnabled<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetAccountSendingEnabledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetAccountSendingEnabled'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetAccountSendingEnabledKey() {
  return ['#Action=GetAccountSendingEnabled', '/#Action=GetAccountSendingEnabled', 'POST'] as const
}

export function usePostActionGetAccountSendingEnabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetAccountSendingEnabled']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetAccountSendingEnabled']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetAccountSendingEnabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=GetAccountSendingEnabled']['$post']> },
      ) => parseResponse(client['#Action=GetAccountSendingEnabled'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetCustomVerificationEmailTemplateKey(
  args: InferRequestType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetCustomVerificationEmailTemplate',
    '/#Action=GetCustomVerificationEmailTemplate',
    keyArgs,
  ] as const
}

export function useGetActionGetCustomVerificationEmailTemplate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']>
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
        ? getGetActionGetCustomVerificationEmailTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=GetCustomVerificationEmailTemplate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetCustomVerificationEmailTemplate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']>
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
        ? getGetActionGetCustomVerificationEmailTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=GetCustomVerificationEmailTemplate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetCustomVerificationEmailTemplateKey() {
  return [
    '#Action=GetCustomVerificationEmailTemplate',
    '/#Action=GetCustomVerificationEmailTemplate',
    'POST',
  ] as const
}

export function usePostActionGetCustomVerificationEmailTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetCustomVerificationEmailTemplateKey()
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
            (typeof client)['#Action=GetCustomVerificationEmailTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=GetCustomVerificationEmailTemplate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetIdentityDkimAttributesKey(
  args: InferRequestType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetIdentityDkimAttributes',
    '/#Action=GetIdentityDkimAttributes',
    keyArgs,
  ] as const
}

export function useGetActionGetIdentityDkimAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetIdentityDkimAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetIdentityDkimAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetIdentityDkimAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetIdentityDkimAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetIdentityDkimAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetIdentityDkimAttributesKey() {
  return [
    '#Action=GetIdentityDkimAttributes',
    '/#Action=GetIdentityDkimAttributes',
    'POST',
  ] as const
}

export function usePostActionGetIdentityDkimAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetIdentityDkimAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetIdentityDkimAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetIdentityDkimAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=GetIdentityDkimAttributes']['$post']> },
      ) => parseResponse(client['#Action=GetIdentityDkimAttributes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetIdentityMailFromDomainAttributesKey(
  args: InferRequestType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetIdentityMailFromDomainAttributes',
    '/#Action=GetIdentityMailFromDomainAttributes',
    keyArgs,
  ] as const
}

export function useGetActionGetIdentityMailFromDomainAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']>
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
        ? getGetActionGetIdentityMailFromDomainAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=GetIdentityMailFromDomainAttributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetIdentityMailFromDomainAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']>
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
        ? getGetActionGetIdentityMailFromDomainAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=GetIdentityMailFromDomainAttributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetIdentityMailFromDomainAttributesKey() {
  return [
    '#Action=GetIdentityMailFromDomainAttributes',
    '/#Action=GetIdentityMailFromDomainAttributes',
    'POST',
  ] as const
}

export function usePostActionGetIdentityMailFromDomainAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetIdentityMailFromDomainAttributesKey()
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
            (typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=GetIdentityMailFromDomainAttributes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetIdentityNotificationAttributesKey(
  args: InferRequestType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetIdentityNotificationAttributes',
    '/#Action=GetIdentityNotificationAttributes',
    keyArgs,
  ] as const
}

export function useGetActionGetIdentityNotificationAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$get']>
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
        ? getGetActionGetIdentityNotificationAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=GetIdentityNotificationAttributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetIdentityNotificationAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$get']>
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
        ? getGetActionGetIdentityNotificationAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=GetIdentityNotificationAttributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetIdentityNotificationAttributesKey() {
  return [
    '#Action=GetIdentityNotificationAttributes',
    '/#Action=GetIdentityNotificationAttributes',
    'POST',
  ] as const
}

export function usePostActionGetIdentityNotificationAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetIdentityNotificationAttributesKey()
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
            (typeof client)['#Action=GetIdentityNotificationAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=GetIdentityNotificationAttributes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetIdentityPoliciesKey(
  args: InferRequestType<(typeof client)['#Action=GetIdentityPolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetIdentityPolicies', '/#Action=GetIdentityPolicies', keyArgs] as const
}

export function useGetActionGetIdentityPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetIdentityPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetIdentityPolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetIdentityPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetIdentityPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetIdentityPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetIdentityPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetIdentityPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetIdentityPolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetIdentityPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetIdentityPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetIdentityPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetIdentityPoliciesKey() {
  return ['#Action=GetIdentityPolicies', '/#Action=GetIdentityPolicies', 'POST'] as const
}

export function usePostActionGetIdentityPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetIdentityPolicies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetIdentityPolicies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetIdentityPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetIdentityPolicies']['$post']> },
      ) => parseResponse(client['#Action=GetIdentityPolicies'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetIdentityVerificationAttributesKey(
  args: InferRequestType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetIdentityVerificationAttributes',
    '/#Action=GetIdentityVerificationAttributes',
    keyArgs,
  ] as const
}

export function useGetActionGetIdentityVerificationAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$get']>
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
        ? getGetActionGetIdentityVerificationAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=GetIdentityVerificationAttributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetIdentityVerificationAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$get']>
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
        ? getGetActionGetIdentityVerificationAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=GetIdentityVerificationAttributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetIdentityVerificationAttributesKey() {
  return [
    '#Action=GetIdentityVerificationAttributes',
    '/#Action=GetIdentityVerificationAttributes',
    'POST',
  ] as const
}

export function usePostActionGetIdentityVerificationAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetIdentityVerificationAttributesKey()
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
            (typeof client)['#Action=GetIdentityVerificationAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=GetIdentityVerificationAttributes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetSendQuotaKey(
  args: InferRequestType<(typeof client)['#Action=GetSendQuota']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetSendQuota', '/#Action=GetSendQuota', keyArgs] as const
}

export function useGetActionGetSendQuota<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetSendQuota']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetSendQuota']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetSendQuotaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetSendQuota']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetSendQuota'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetSendQuota<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetSendQuota']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetSendQuota']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetSendQuotaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetSendQuota']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetSendQuota'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetSendQuotaKey() {
  return ['#Action=GetSendQuota', '/#Action=GetSendQuota', 'POST'] as const
}

export function usePostActionGetSendQuota<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetSendQuota']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetSendQuota']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetSendQuotaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetSendQuota']['$post']> },
      ) => parseResponse(client['#Action=GetSendQuota'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetSendStatisticsKey(
  args: InferRequestType<(typeof client)['#Action=GetSendStatistics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetSendStatistics', '/#Action=GetSendStatistics', keyArgs] as const
}

export function useGetActionGetSendStatistics<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetSendStatistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSendStatistics']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetSendStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSendStatistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetSendStatistics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetSendStatistics<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetSendStatistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSendStatistics']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetSendStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSendStatistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetSendStatistics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetSendStatisticsKey() {
  return ['#Action=GetSendStatistics', '/#Action=GetSendStatistics', 'POST'] as const
}

export function usePostActionGetSendStatistics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSendStatistics']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetSendStatistics']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetSendStatisticsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetSendStatistics']['$post']> },
      ) => parseResponse(client['#Action=GetSendStatistics'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetTemplateKey(
  args: InferRequestType<(typeof client)['#Action=GetTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetTemplate', '/#Action=GetTemplate', keyArgs] as const
}

export function useGetActionGetTemplate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetTemplate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetTemplate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetTemplate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetTemplate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetTemplate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetTemplateKey() {
  return ['#Action=GetTemplate', '/#Action=GetTemplate', 'POST'] as const
}

export function usePostActionGetTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetTemplate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetTemplate']['$post']> },
      ) => parseResponse(client['#Action=GetTemplate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListConfigurationSetsKey(
  args: InferRequestType<(typeof client)['#Action=ListConfigurationSets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListConfigurationSets', '/#Action=ListConfigurationSets', keyArgs] as const
}

export function useGetActionListConfigurationSets<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListConfigurationSets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListConfigurationSets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListConfigurationSetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListConfigurationSets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListConfigurationSets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListConfigurationSets<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListConfigurationSets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListConfigurationSets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListConfigurationSetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListConfigurationSets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListConfigurationSets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListConfigurationSetsKey() {
  return ['#Action=ListConfigurationSets', '/#Action=ListConfigurationSets', 'POST'] as const
}

export function usePostActionListConfigurationSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListConfigurationSets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListConfigurationSets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListConfigurationSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ListConfigurationSets']['$post']> },
      ) => parseResponse(client['#Action=ListConfigurationSets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListCustomVerificationEmailTemplatesKey(
  args: InferRequestType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ListCustomVerificationEmailTemplates',
    '/#Action=ListCustomVerificationEmailTemplates',
    keyArgs,
  ] as const
}

export function useGetActionListCustomVerificationEmailTemplates<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']>
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
        ? getGetActionListCustomVerificationEmailTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=ListCustomVerificationEmailTemplates'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListCustomVerificationEmailTemplates<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']>
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
        ? getGetActionListCustomVerificationEmailTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=ListCustomVerificationEmailTemplates'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionListCustomVerificationEmailTemplatesKey() {
  return [
    '#Action=ListCustomVerificationEmailTemplates',
    '/#Action=ListCustomVerificationEmailTemplates',
    'POST',
  ] as const
}

export function usePostActionListCustomVerificationEmailTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListCustomVerificationEmailTemplatesKey()
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
            (typeof client)['#Action=ListCustomVerificationEmailTemplates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=ListCustomVerificationEmailTemplates'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionListIdentitiesKey(
  args: InferRequestType<(typeof client)['#Action=ListIdentities']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListIdentities', '/#Action=ListIdentities', keyArgs] as const
}

export function useGetActionListIdentities<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListIdentities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListIdentities']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListIdentitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListIdentities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListIdentities'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListIdentities<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListIdentities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListIdentities']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListIdentitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListIdentities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListIdentities'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListIdentitiesKey() {
  return ['#Action=ListIdentities', '/#Action=ListIdentities', 'POST'] as const
}

export function usePostActionListIdentities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListIdentities']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListIdentities']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListIdentitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListIdentities']['$post']> },
      ) => parseResponse(client['#Action=ListIdentities'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListIdentityPoliciesKey(
  args: InferRequestType<(typeof client)['#Action=ListIdentityPolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListIdentityPolicies', '/#Action=ListIdentityPolicies', keyArgs] as const
}

export function useGetActionListIdentityPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListIdentityPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListIdentityPolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListIdentityPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListIdentityPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListIdentityPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListIdentityPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListIdentityPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListIdentityPolicies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListIdentityPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListIdentityPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListIdentityPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListIdentityPoliciesKey() {
  return ['#Action=ListIdentityPolicies', '/#Action=ListIdentityPolicies', 'POST'] as const
}

export function usePostActionListIdentityPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListIdentityPolicies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListIdentityPolicies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListIdentityPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ListIdentityPolicies']['$post']> },
      ) => parseResponse(client['#Action=ListIdentityPolicies'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListReceiptFiltersKey(
  args: InferRequestType<(typeof client)['#Action=ListReceiptFilters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListReceiptFilters', '/#Action=ListReceiptFilters', keyArgs] as const
}

export function useGetActionListReceiptFilters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListReceiptFilters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListReceiptFilters']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListReceiptFiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListReceiptFilters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListReceiptFilters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListReceiptFilters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListReceiptFilters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListReceiptFilters']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListReceiptFiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListReceiptFilters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListReceiptFilters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListReceiptFiltersKey() {
  return ['#Action=ListReceiptFilters', '/#Action=ListReceiptFilters', 'POST'] as const
}

export function usePostActionListReceiptFilters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListReceiptFilters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListReceiptFilters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListReceiptFiltersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListReceiptFilters']['$post']> },
      ) => parseResponse(client['#Action=ListReceiptFilters'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListReceiptRuleSetsKey(
  args: InferRequestType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListReceiptRuleSets', '/#Action=ListReceiptRuleSets', keyArgs] as const
}

export function useGetActionListReceiptRuleSets<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListReceiptRuleSetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListReceiptRuleSets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListReceiptRuleSets<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListReceiptRuleSetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListReceiptRuleSets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListReceiptRuleSetsKey() {
  return ['#Action=ListReceiptRuleSets', '/#Action=ListReceiptRuleSets', 'POST'] as const
}

export function usePostActionListReceiptRuleSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListReceiptRuleSets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListReceiptRuleSets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListReceiptRuleSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListReceiptRuleSets']['$post']> },
      ) => parseResponse(client['#Action=ListReceiptRuleSets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListTemplatesKey(
  args: InferRequestType<(typeof client)['#Action=ListTemplates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListTemplates', '/#Action=ListTemplates', keyArgs] as const
}

export function useGetActionListTemplates<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListTemplates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListTemplates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListTemplates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListTemplates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListTemplates<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListTemplates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListTemplates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListTemplates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListTemplates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListTemplatesKey() {
  return ['#Action=ListTemplates', '/#Action=ListTemplates', 'POST'] as const
}

export function usePostActionListTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTemplates']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListTemplates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListTemplates']['$post']> },
      ) => parseResponse(client['#Action=ListTemplates'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListVerifiedEmailAddressesKey(
  args: InferRequestType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ListVerifiedEmailAddresses',
    '/#Action=ListVerifiedEmailAddresses',
    keyArgs,
  ] as const
}

export function useGetActionListVerifiedEmailAddresses<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListVerifiedEmailAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListVerifiedEmailAddresses'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListVerifiedEmailAddresses<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListVerifiedEmailAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListVerifiedEmailAddresses'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListVerifiedEmailAddressesKey() {
  return [
    '#Action=ListVerifiedEmailAddresses',
    '/#Action=ListVerifiedEmailAddresses',
    'POST',
  ] as const
}

export function usePostActionListVerifiedEmailAddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListVerifiedEmailAddressesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$post']>
        },
      ) => parseResponse(client['#Action=ListVerifiedEmailAddresses'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPutConfigurationSetDeliveryOptionsKey(
  args: InferRequestType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=PutConfigurationSetDeliveryOptions',
    '/#Action=PutConfigurationSetDeliveryOptions',
    keyArgs,
  ] as const
}

export function useGetActionPutConfigurationSetDeliveryOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']>
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
        ? getGetActionPutConfigurationSetDeliveryOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=PutConfigurationSetDeliveryOptions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPutConfigurationSetDeliveryOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']>
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
        ? getGetActionPutConfigurationSetDeliveryOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=PutConfigurationSetDeliveryOptions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionPutConfigurationSetDeliveryOptionsKey() {
  return [
    '#Action=PutConfigurationSetDeliveryOptions',
    '/#Action=PutConfigurationSetDeliveryOptions',
    'POST',
  ] as const
}

export function usePostActionPutConfigurationSetDeliveryOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPutConfigurationSetDeliveryOptionsKey()
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
            (typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=PutConfigurationSetDeliveryOptions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionPutIdentityPolicyKey(
  args: InferRequestType<(typeof client)['#Action=PutIdentityPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutIdentityPolicy', '/#Action=PutIdentityPolicy', keyArgs] as const
}

export function useGetActionPutIdentityPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutIdentityPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutIdentityPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutIdentityPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutIdentityPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutIdentityPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPutIdentityPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutIdentityPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutIdentityPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutIdentityPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutIdentityPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PutIdentityPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPutIdentityPolicyKey() {
  return ['#Action=PutIdentityPolicy', '/#Action=PutIdentityPolicy', 'POST'] as const
}

export function usePostActionPutIdentityPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutIdentityPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PutIdentityPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPutIdentityPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=PutIdentityPolicy']['$post']> },
      ) => parseResponse(client['#Action=PutIdentityPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionReorderReceiptRuleSetKey(
  args: InferRequestType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ReorderReceiptRuleSet', '/#Action=ReorderReceiptRuleSet', keyArgs] as const
}

export function useGetActionReorderReceiptRuleSet<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionReorderReceiptRuleSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ReorderReceiptRuleSet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionReorderReceiptRuleSet<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionReorderReceiptRuleSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ReorderReceiptRuleSet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionReorderReceiptRuleSetKey() {
  return ['#Action=ReorderReceiptRuleSet', '/#Action=ReorderReceiptRuleSet', 'POST'] as const
}

export function usePostActionReorderReceiptRuleSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ReorderReceiptRuleSet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ReorderReceiptRuleSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionReorderReceiptRuleSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ReorderReceiptRuleSet']['$post']> },
      ) => parseResponse(client['#Action=ReorderReceiptRuleSet'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSendBounceKey(
  args: InferRequestType<(typeof client)['#Action=SendBounce']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SendBounce', '/#Action=SendBounce', keyArgs] as const
}

export function useGetActionSendBounce<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SendBounce']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendBounce']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSendBounceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendBounce']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SendBounce'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSendBounce<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SendBounce']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendBounce']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSendBounceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendBounce']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SendBounce'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSendBounceKey() {
  return ['#Action=SendBounce', '/#Action=SendBounce', 'POST'] as const
}

export function usePostActionSendBounce<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendBounce']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SendBounce']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSendBounceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=SendBounce']['$post']> },
      ) => parseResponse(client['#Action=SendBounce'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSendBulkTemplatedEmailKey(
  args: InferRequestType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SendBulkTemplatedEmail', '/#Action=SendBulkTemplatedEmail', keyArgs] as const
}

export function useGetActionSendBulkTemplatedEmail<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSendBulkTemplatedEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SendBulkTemplatedEmail'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSendBulkTemplatedEmail<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSendBulkTemplatedEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SendBulkTemplatedEmail'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSendBulkTemplatedEmailKey() {
  return ['#Action=SendBulkTemplatedEmail', '/#Action=SendBulkTemplatedEmail', 'POST'] as const
}

export function usePostActionSendBulkTemplatedEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SendBulkTemplatedEmail']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SendBulkTemplatedEmail']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSendBulkTemplatedEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=SendBulkTemplatedEmail']['$post']> },
      ) => parseResponse(client['#Action=SendBulkTemplatedEmail'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSendCustomVerificationEmailKey(
  args: InferRequestType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SendCustomVerificationEmail',
    '/#Action=SendCustomVerificationEmail',
    keyArgs,
  ] as const
}

export function useGetActionSendCustomVerificationEmail<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSendCustomVerificationEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=SendCustomVerificationEmail'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSendCustomVerificationEmail<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSendCustomVerificationEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=SendCustomVerificationEmail'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSendCustomVerificationEmailKey() {
  return [
    '#Action=SendCustomVerificationEmail',
    '/#Action=SendCustomVerificationEmail',
    'POST',
  ] as const
}

export function usePostActionSendCustomVerificationEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SendCustomVerificationEmail']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SendCustomVerificationEmail']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSendCustomVerificationEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=SendCustomVerificationEmail']['$post']>
        },
      ) => parseResponse(client['#Action=SendCustomVerificationEmail'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSendEmailKey(
  args: InferRequestType<(typeof client)['#Action=SendEmail']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SendEmail', '/#Action=SendEmail', keyArgs] as const
}

export function useGetActionSendEmail<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SendEmail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendEmail']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSendEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendEmail']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SendEmail'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSendEmail<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SendEmail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendEmail']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSendEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendEmail']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SendEmail'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSendEmailKey() {
  return ['#Action=SendEmail', '/#Action=SendEmail', 'POST'] as const
}

export function usePostActionSendEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendEmail']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SendEmail']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSendEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=SendEmail']['$post']> },
      ) => parseResponse(client['#Action=SendEmail'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSendRawEmailKey(
  args: InferRequestType<(typeof client)['#Action=SendRawEmail']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SendRawEmail', '/#Action=SendRawEmail', keyArgs] as const
}

export function useGetActionSendRawEmail<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SendRawEmail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendRawEmail']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSendRawEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendRawEmail']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SendRawEmail'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSendRawEmail<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SendRawEmail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendRawEmail']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSendRawEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendRawEmail']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SendRawEmail'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSendRawEmailKey() {
  return ['#Action=SendRawEmail', '/#Action=SendRawEmail', 'POST'] as const
}

export function usePostActionSendRawEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendRawEmail']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SendRawEmail']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSendRawEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=SendRawEmail']['$post']> },
      ) => parseResponse(client['#Action=SendRawEmail'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSendTemplatedEmailKey(
  args: InferRequestType<(typeof client)['#Action=SendTemplatedEmail']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SendTemplatedEmail', '/#Action=SendTemplatedEmail', keyArgs] as const
}

export function useGetActionSendTemplatedEmail<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SendTemplatedEmail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SendTemplatedEmail']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSendTemplatedEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SendTemplatedEmail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SendTemplatedEmail'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSendTemplatedEmail<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SendTemplatedEmail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SendTemplatedEmail']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSendTemplatedEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SendTemplatedEmail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SendTemplatedEmail'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSendTemplatedEmailKey() {
  return ['#Action=SendTemplatedEmail', '/#Action=SendTemplatedEmail', 'POST'] as const
}

export function usePostActionSendTemplatedEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SendTemplatedEmail']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SendTemplatedEmail']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSendTemplatedEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=SendTemplatedEmail']['$post']> },
      ) => parseResponse(client['#Action=SendTemplatedEmail'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetActiveReceiptRuleSetKey(
  args: InferRequestType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetActiveReceiptRuleSet', '/#Action=SetActiveReceiptRuleSet', keyArgs] as const
}

export function useGetActionSetActiveReceiptRuleSet<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetActiveReceiptRuleSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=SetActiveReceiptRuleSet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetActiveReceiptRuleSet<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetActiveReceiptRuleSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=SetActiveReceiptRuleSet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetActiveReceiptRuleSetKey() {
  return ['#Action=SetActiveReceiptRuleSet', '/#Action=SetActiveReceiptRuleSet', 'POST'] as const
}

export function usePostActionSetActiveReceiptRuleSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetActiveReceiptRuleSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$post']> },
      ) => parseResponse(client['#Action=SetActiveReceiptRuleSet'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetIdentityDkimEnabledKey(
  args: InferRequestType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetIdentityDkimEnabled', '/#Action=SetIdentityDkimEnabled', keyArgs] as const
}

export function useGetActionSetIdentityDkimEnabled<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetIdentityDkimEnabledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SetIdentityDkimEnabled'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetIdentityDkimEnabled<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetIdentityDkimEnabledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SetIdentityDkimEnabled'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetIdentityDkimEnabledKey() {
  return ['#Action=SetIdentityDkimEnabled', '/#Action=SetIdentityDkimEnabled', 'POST'] as const
}

export function usePostActionSetIdentityDkimEnabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetIdentityDkimEnabled']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetIdentityDkimEnabled']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetIdentityDkimEnabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=SetIdentityDkimEnabled']['$post']> },
      ) => parseResponse(client['#Action=SetIdentityDkimEnabled'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetIdentityFeedbackForwardingEnabledKey(
  args: InferRequestType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SetIdentityFeedbackForwardingEnabled',
    '/#Action=SetIdentityFeedbackForwardingEnabled',
    keyArgs,
  ] as const
}

export function useGetActionSetIdentityFeedbackForwardingEnabled<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']>
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
        ? getGetActionSetIdentityFeedbackForwardingEnabledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=SetIdentityFeedbackForwardingEnabled'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetIdentityFeedbackForwardingEnabled<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']>
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
        ? getGetActionSetIdentityFeedbackForwardingEnabledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=SetIdentityFeedbackForwardingEnabled'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetIdentityFeedbackForwardingEnabledKey() {
  return [
    '#Action=SetIdentityFeedbackForwardingEnabled',
    '/#Action=SetIdentityFeedbackForwardingEnabled',
    'POST',
  ] as const
}

export function usePostActionSetIdentityFeedbackForwardingEnabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetIdentityFeedbackForwardingEnabledKey()
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
            (typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=SetIdentityFeedbackForwardingEnabled'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetIdentityHeadersInNotificationsEnabledKey(
  args: InferRequestType<
    (typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SetIdentityHeadersInNotificationsEnabled',
    '/#Action=SetIdentityHeadersInNotificationsEnabled',
    keyArgs,
  ] as const
}

export function useGetActionSetIdentityHeadersInNotificationsEnabled<TError = unknown>(
  args: InferRequestType<
    (typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$get']
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
        ? getGetActionSetIdentityHeadersInNotificationsEnabledKey(args)
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
                (typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$get']
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
          client['#Action=SetIdentityHeadersInNotificationsEnabled'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetIdentityHeadersInNotificationsEnabled<TError = unknown>(
  args: InferRequestType<
    (typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$get']
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
        ? getGetActionSetIdentityHeadersInNotificationsEnabledKey(args)
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
                (typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$get']
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
          client['#Action=SetIdentityHeadersInNotificationsEnabled'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetIdentityHeadersInNotificationsEnabledKey() {
  return [
    '#Action=SetIdentityHeadersInNotificationsEnabled',
    '/#Action=SetIdentityHeadersInNotificationsEnabled',
    'POST',
  ] as const
}

export function usePostActionSetIdentityHeadersInNotificationsEnabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetIdentityHeadersInNotificationsEnabledKey()
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
            (typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=SetIdentityHeadersInNotificationsEnabled'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetIdentityMailFromDomainKey(
  args: InferRequestType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SetIdentityMailFromDomain',
    '/#Action=SetIdentityMailFromDomain',
    keyArgs,
  ] as const
}

export function useGetActionSetIdentityMailFromDomain<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetIdentityMailFromDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=SetIdentityMailFromDomain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetIdentityMailFromDomain<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetIdentityMailFromDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=SetIdentityMailFromDomain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetIdentityMailFromDomainKey() {
  return [
    '#Action=SetIdentityMailFromDomain',
    '/#Action=SetIdentityMailFromDomain',
    'POST',
  ] as const
}

export function usePostActionSetIdentityMailFromDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetIdentityMailFromDomain']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetIdentityMailFromDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetIdentityMailFromDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=SetIdentityMailFromDomain']['$post']> },
      ) => parseResponse(client['#Action=SetIdentityMailFromDomain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetIdentityNotificationTopicKey(
  args: InferRequestType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SetIdentityNotificationTopic',
    '/#Action=SetIdentityNotificationTopic',
    keyArgs,
  ] as const
}

export function useGetActionSetIdentityNotificationTopic<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetIdentityNotificationTopicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=SetIdentityNotificationTopic'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetIdentityNotificationTopic<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetIdentityNotificationTopicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=SetIdentityNotificationTopic'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetIdentityNotificationTopicKey() {
  return [
    '#Action=SetIdentityNotificationTopic',
    '/#Action=SetIdentityNotificationTopic',
    'POST',
  ] as const
}

export function usePostActionSetIdentityNotificationTopic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetIdentityNotificationTopic']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetIdentityNotificationTopic']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetIdentityNotificationTopicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=SetIdentityNotificationTopic']['$post']>
        },
      ) => parseResponse(client['#Action=SetIdentityNotificationTopic'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetReceiptRulePositionKey(
  args: InferRequestType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetReceiptRulePosition', '/#Action=SetReceiptRulePosition', keyArgs] as const
}

export function useGetActionSetReceiptRulePosition<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetReceiptRulePositionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SetReceiptRulePosition'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetReceiptRulePosition<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetReceiptRulePositionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SetReceiptRulePosition'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetReceiptRulePositionKey() {
  return ['#Action=SetReceiptRulePosition', '/#Action=SetReceiptRulePosition', 'POST'] as const
}

export function usePostActionSetReceiptRulePosition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetReceiptRulePosition']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetReceiptRulePosition']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetReceiptRulePositionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=SetReceiptRulePosition']['$post']> },
      ) => parseResponse(client['#Action=SetReceiptRulePosition'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionTestRenderTemplateKey(
  args: InferRequestType<(typeof client)['#Action=TestRenderTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=TestRenderTemplate', '/#Action=TestRenderTemplate', keyArgs] as const
}

export function useGetActionTestRenderTemplate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TestRenderTemplate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=TestRenderTemplate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionTestRenderTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=TestRenderTemplate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=TestRenderTemplate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionTestRenderTemplate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TestRenderTemplate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=TestRenderTemplate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionTestRenderTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=TestRenderTemplate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=TestRenderTemplate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionTestRenderTemplateKey() {
  return ['#Action=TestRenderTemplate', '/#Action=TestRenderTemplate', 'POST'] as const
}

export function usePostActionTestRenderTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=TestRenderTemplate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=TestRenderTemplate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionTestRenderTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=TestRenderTemplate']['$post']> },
      ) => parseResponse(client['#Action=TestRenderTemplate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateAccountSendingEnabledKey(
  args: InferRequestType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateAccountSendingEnabled',
    '/#Action=UpdateAccountSendingEnabled',
    keyArgs,
  ] as const
}

export function useGetActionUpdateAccountSendingEnabled<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateAccountSendingEnabledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UpdateAccountSendingEnabled'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateAccountSendingEnabled<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateAccountSendingEnabledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UpdateAccountSendingEnabled'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateAccountSendingEnabledKey() {
  return [
    '#Action=UpdateAccountSendingEnabled',
    '/#Action=UpdateAccountSendingEnabled',
    'POST',
  ] as const
}

export function usePostActionUpdateAccountSendingEnabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateAccountSendingEnabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$post']>
        },
      ) => parseResponse(client['#Action=UpdateAccountSendingEnabled'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateConfigurationSetEventDestinationKey(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateConfigurationSetEventDestination',
    '/#Action=UpdateConfigurationSetEventDestination',
    keyArgs,
  ] as const
}

export function useGetActionUpdateConfigurationSetEventDestination<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']>
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
        ? getGetActionUpdateConfigurationSetEventDestinationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=UpdateConfigurationSetEventDestination'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateConfigurationSetEventDestination<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']>
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
        ? getGetActionUpdateConfigurationSetEventDestinationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=UpdateConfigurationSetEventDestination'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateConfigurationSetEventDestinationKey() {
  return [
    '#Action=UpdateConfigurationSetEventDestination',
    '/#Action=UpdateConfigurationSetEventDestination',
    'POST',
  ] as const
}

export function usePostActionUpdateConfigurationSetEventDestination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=UpdateConfigurationSetEventDestination']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateConfigurationSetEventDestination']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateConfigurationSetEventDestinationKey()
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
            (typeof client)['#Action=UpdateConfigurationSetEventDestination']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=UpdateConfigurationSetEventDestination'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateConfigurationSetReputationMetricsEnabledKey(
  args: InferRequestType<
    (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateConfigurationSetReputationMetricsEnabled',
    '/#Action=UpdateConfigurationSetReputationMetricsEnabled',
    keyArgs,
  ] as const
}

export function useGetActionUpdateConfigurationSetReputationMetricsEnabled<TError = unknown>(
  args: InferRequestType<
    (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$get']
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
        ? getGetActionUpdateConfigurationSetReputationMetricsEnabledKey(args)
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
                (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$get']
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
          client['#Action=UpdateConfigurationSetReputationMetricsEnabled'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateConfigurationSetReputationMetricsEnabled<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$get']
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
        ? getGetActionUpdateConfigurationSetReputationMetricsEnabledKey(args)
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
                (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$get']
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
          client['#Action=UpdateConfigurationSetReputationMetricsEnabled'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateConfigurationSetReputationMetricsEnabledKey() {
  return [
    '#Action=UpdateConfigurationSetReputationMetricsEnabled',
    '/#Action=UpdateConfigurationSetReputationMetricsEnabled',
    'POST',
  ] as const
}

export function usePostActionUpdateConfigurationSetReputationMetricsEnabled<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateConfigurationSetReputationMetricsEnabledKey()
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
            (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=UpdateConfigurationSetReputationMetricsEnabled'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateConfigurationSetSendingEnabledKey(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateConfigurationSetSendingEnabled',
    '/#Action=UpdateConfigurationSetSendingEnabled',
    keyArgs,
  ] as const
}

export function useGetActionUpdateConfigurationSetSendingEnabled<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']>
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
        ? getGetActionUpdateConfigurationSetSendingEnabledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=UpdateConfigurationSetSendingEnabled'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateConfigurationSetSendingEnabled<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']>
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
        ? getGetActionUpdateConfigurationSetSendingEnabledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=UpdateConfigurationSetSendingEnabled'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateConfigurationSetSendingEnabledKey() {
  return [
    '#Action=UpdateConfigurationSetSendingEnabled',
    '/#Action=UpdateConfigurationSetSendingEnabled',
    'POST',
  ] as const
}

export function usePostActionUpdateConfigurationSetSendingEnabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateConfigurationSetSendingEnabledKey()
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
            (typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=UpdateConfigurationSetSendingEnabled'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateConfigurationSetTrackingOptionsKey(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateConfigurationSetTrackingOptions',
    '/#Action=UpdateConfigurationSetTrackingOptions',
    keyArgs,
  ] as const
}

export function useGetActionUpdateConfigurationSetTrackingOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']>
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
        ? getGetActionUpdateConfigurationSetTrackingOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=UpdateConfigurationSetTrackingOptions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateConfigurationSetTrackingOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']>
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
        ? getGetActionUpdateConfigurationSetTrackingOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=UpdateConfigurationSetTrackingOptions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateConfigurationSetTrackingOptionsKey() {
  return [
    '#Action=UpdateConfigurationSetTrackingOptions',
    '/#Action=UpdateConfigurationSetTrackingOptions',
    'POST',
  ] as const
}

export function usePostActionUpdateConfigurationSetTrackingOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateConfigurationSetTrackingOptionsKey()
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
            (typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=UpdateConfigurationSetTrackingOptions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateCustomVerificationEmailTemplateKey(
  args: InferRequestType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateCustomVerificationEmailTemplate',
    '/#Action=UpdateCustomVerificationEmailTemplate',
    keyArgs,
  ] as const
}

export function useGetActionUpdateCustomVerificationEmailTemplate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']>
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
        ? getGetActionUpdateCustomVerificationEmailTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=UpdateCustomVerificationEmailTemplate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateCustomVerificationEmailTemplate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']>
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
        ? getGetActionUpdateCustomVerificationEmailTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=UpdateCustomVerificationEmailTemplate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateCustomVerificationEmailTemplateKey() {
  return [
    '#Action=UpdateCustomVerificationEmailTemplate',
    '/#Action=UpdateCustomVerificationEmailTemplate',
    'POST',
  ] as const
}

export function usePostActionUpdateCustomVerificationEmailTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateCustomVerificationEmailTemplateKey()
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
            (typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=UpdateCustomVerificationEmailTemplate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateReceiptRuleKey(
  args: InferRequestType<(typeof client)['#Action=UpdateReceiptRule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateReceiptRule', '/#Action=UpdateReceiptRule', keyArgs] as const
}

export function useGetActionUpdateReceiptRule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateReceiptRule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateReceiptRule']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateReceiptRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateReceiptRule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateReceiptRule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateReceiptRule<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateReceiptRule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateReceiptRule']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateReceiptRuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateReceiptRule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateReceiptRule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateReceiptRuleKey() {
  return ['#Action=UpdateReceiptRule', '/#Action=UpdateReceiptRule', 'POST'] as const
}

export function usePostActionUpdateReceiptRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateReceiptRule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateReceiptRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateReceiptRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=UpdateReceiptRule']['$post']> },
      ) => parseResponse(client['#Action=UpdateReceiptRule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateTemplateKey(
  args: InferRequestType<(typeof client)['#Action=UpdateTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateTemplate', '/#Action=UpdateTemplate', keyArgs] as const
}

export function useGetActionUpdateTemplate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateTemplate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateTemplate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateTemplate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateTemplate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateTemplate<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateTemplate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateTemplate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUpdateTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateTemplate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UpdateTemplate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateTemplateKey() {
  return ['#Action=UpdateTemplate', '/#Action=UpdateTemplate', 'POST'] as const
}

export function usePostActionUpdateTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateTemplate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateTemplate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=UpdateTemplate']['$post']> },
      ) => parseResponse(client['#Action=UpdateTemplate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionVerifyDomainDkimKey(
  args: InferRequestType<(typeof client)['#Action=VerifyDomainDkim']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=VerifyDomainDkim', '/#Action=VerifyDomainDkim', keyArgs] as const
}

export function useGetActionVerifyDomainDkim<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=VerifyDomainDkim']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=VerifyDomainDkim']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionVerifyDomainDkimKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=VerifyDomainDkim']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=VerifyDomainDkim'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionVerifyDomainDkim<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=VerifyDomainDkim']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=VerifyDomainDkim']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionVerifyDomainDkimKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=VerifyDomainDkim']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=VerifyDomainDkim'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionVerifyDomainDkimKey() {
  return ['#Action=VerifyDomainDkim', '/#Action=VerifyDomainDkim', 'POST'] as const
}

export function usePostActionVerifyDomainDkim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=VerifyDomainDkim']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=VerifyDomainDkim']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionVerifyDomainDkimKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=VerifyDomainDkim']['$post']> },
      ) => parseResponse(client['#Action=VerifyDomainDkim'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionVerifyDomainIdentityKey(
  args: InferRequestType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=VerifyDomainIdentity', '/#Action=VerifyDomainIdentity', keyArgs] as const
}

export function useGetActionVerifyDomainIdentity<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionVerifyDomainIdentityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=VerifyDomainIdentity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionVerifyDomainIdentity<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionVerifyDomainIdentityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=VerifyDomainIdentity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionVerifyDomainIdentityKey() {
  return ['#Action=VerifyDomainIdentity', '/#Action=VerifyDomainIdentity', 'POST'] as const
}

export function usePostActionVerifyDomainIdentity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=VerifyDomainIdentity']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=VerifyDomainIdentity']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionVerifyDomainIdentityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=VerifyDomainIdentity']['$post']> },
      ) => parseResponse(client['#Action=VerifyDomainIdentity'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionVerifyEmailAddressKey(
  args: InferRequestType<(typeof client)['#Action=VerifyEmailAddress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=VerifyEmailAddress', '/#Action=VerifyEmailAddress', keyArgs] as const
}

export function useGetActionVerifyEmailAddress<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=VerifyEmailAddress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=VerifyEmailAddress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionVerifyEmailAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=VerifyEmailAddress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=VerifyEmailAddress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionVerifyEmailAddress<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=VerifyEmailAddress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=VerifyEmailAddress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionVerifyEmailAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=VerifyEmailAddress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=VerifyEmailAddress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionVerifyEmailAddressKey() {
  return ['#Action=VerifyEmailAddress', '/#Action=VerifyEmailAddress', 'POST'] as const
}

export function usePostActionVerifyEmailAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=VerifyEmailAddress']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=VerifyEmailAddress']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionVerifyEmailAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=VerifyEmailAddress']['$post']> },
      ) => parseResponse(client['#Action=VerifyEmailAddress'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionVerifyEmailIdentityKey(
  args: InferRequestType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=VerifyEmailIdentity', '/#Action=VerifyEmailIdentity', keyArgs] as const
}

export function useGetActionVerifyEmailIdentity<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionVerifyEmailIdentityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=VerifyEmailIdentity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionVerifyEmailIdentity<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionVerifyEmailIdentityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=VerifyEmailIdentity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionVerifyEmailIdentityKey() {
  return ['#Action=VerifyEmailIdentity', '/#Action=VerifyEmailIdentity', 'POST'] as const
}

export function usePostActionVerifyEmailIdentity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=VerifyEmailIdentity']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=VerifyEmailIdentity']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionVerifyEmailIdentityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=VerifyEmailIdentity']['$post']> },
      ) => parseResponse(client['#Action=VerifyEmailIdentity'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
