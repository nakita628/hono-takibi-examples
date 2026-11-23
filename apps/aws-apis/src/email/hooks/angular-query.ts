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

export function getActionCloneReceiptRuleSetQueryKey(
  args: InferRequestType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CloneReceiptRuleSet', '/#Action=CloneReceiptRuleSet', keyArgs] as const
}

export function getActionCloneReceiptRuleSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCloneReceiptRuleSetQueryKey>
  >({
    queryKey: getActionCloneReceiptRuleSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CloneReceiptRuleSet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionCloneReceiptRuleSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCloneReceiptRuleSetQueryKey>
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
      ...getActionCloneReceiptRuleSetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionCloneReceiptRuleSetMutationKey() {
  return ['#Action=CloneReceiptRuleSet', '/#Action=CloneReceiptRuleSet', 'POST'] as const
}

export function getPostActionCloneReceiptRuleSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CloneReceiptRuleSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CloneReceiptRuleSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCloneReceiptRuleSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CloneReceiptRuleSet']['$post']>,
    ) {
      return parseResponse(client['#Action=CloneReceiptRuleSet'].$post(args, options))
    },
  })
}

export function injectPostActionCloneReceiptRuleSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CloneReceiptRuleSet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CloneReceiptRuleSet']['$post']>,
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
    const mutationDefaults = getPostActionCloneReceiptRuleSetMutationOptions<
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

export function getActionCreateConfigurationSetQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateConfigurationSet', '/#Action=CreateConfigurationSet', keyArgs] as const
}

export function getActionCreateConfigurationSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateConfigurationSetQueryKey>
  >({
    queryKey: getActionCreateConfigurationSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateConfigurationSet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionCreateConfigurationSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateConfigurationSet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationSet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateConfigurationSetQueryKey>
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
      ...getActionCreateConfigurationSetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionCreateConfigurationSetMutationKey() {
  return ['#Action=CreateConfigurationSet', '/#Action=CreateConfigurationSet', 'POST'] as const
}

export function getPostActionCreateConfigurationSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateConfigurationSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateConfigurationSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateConfigurationSet']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateConfigurationSet'].$post(args, options))
    },
  })
}

export function injectPostActionCreateConfigurationSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationSet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateConfigurationSet']['$post']>,
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
    const mutationDefaults = getPostActionCreateConfigurationSetMutationOptions<
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

export function getActionCreateConfigurationSetEventDestinationQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateConfigurationSetEventDestination',
    '/#Action=CreateConfigurationSetEventDestination',
    keyArgs,
  ] as const
}

export function getActionCreateConfigurationSetEventDestinationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateConfigurationSetEventDestinationQueryKey>
  >({
    queryKey: getActionCreateConfigurationSetEventDestinationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateConfigurationSetEventDestination'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionCreateConfigurationSetEventDestination<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateConfigurationSetEventDestinationQueryKey>
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
      ...getActionCreateConfigurationSetEventDestinationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionCreateConfigurationSetEventDestinationMutationKey() {
  return [
    '#Action=CreateConfigurationSetEventDestination',
    '/#Action=CreateConfigurationSetEventDestination',
    'POST',
  ] as const
}

export function getPostActionCreateConfigurationSetEventDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=CreateConfigurationSetEventDestination']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateConfigurationSetEventDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=CreateConfigurationSetEventDestination']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=CreateConfigurationSetEventDestination'].$post(args, options),
      )
    },
  })
}

export function injectPostActionCreateConfigurationSetEventDestination<
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
                  (typeof client)['#Action=CreateConfigurationSetEventDestination']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#Action=CreateConfigurationSetEventDestination']['$post']
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
    const mutationDefaults = getPostActionCreateConfigurationSetEventDestinationMutationOptions<
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

export function getActionCreateConfigurationSetTrackingOptionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateConfigurationSetTrackingOptions',
    '/#Action=CreateConfigurationSetTrackingOptions',
    keyArgs,
  ] as const
}

export function getActionCreateConfigurationSetTrackingOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateConfigurationSetTrackingOptionsQueryKey>
  >({
    queryKey: getActionCreateConfigurationSetTrackingOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateConfigurationSetTrackingOptions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionCreateConfigurationSetTrackingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateConfigurationSetTrackingOptionsQueryKey>
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
      ...getActionCreateConfigurationSetTrackingOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionCreateConfigurationSetTrackingOptionsMutationKey() {
  return [
    '#Action=CreateConfigurationSetTrackingOptions',
    '/#Action=CreateConfigurationSetTrackingOptions',
    'POST',
  ] as const
}

export function getPostActionCreateConfigurationSetTrackingOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateConfigurationSetTrackingOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=CreateConfigurationSetTrackingOptions'].$post(args, options),
      )
    },
  })
}

export function injectPostActionCreateConfigurationSetTrackingOptions<
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
                  (typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$post']>,
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
    const mutationDefaults = getPostActionCreateConfigurationSetTrackingOptionsMutationOptions<
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

export function getActionCreateCustomVerificationEmailTemplateQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateCustomVerificationEmailTemplate',
    '/#Action=CreateCustomVerificationEmailTemplate',
    keyArgs,
  ] as const
}

export function getActionCreateCustomVerificationEmailTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateCustomVerificationEmailTemplateQueryKey>
  >({
    queryKey: getActionCreateCustomVerificationEmailTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateCustomVerificationEmailTemplate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionCreateCustomVerificationEmailTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateCustomVerificationEmailTemplateQueryKey>
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
      ...getActionCreateCustomVerificationEmailTemplateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionCreateCustomVerificationEmailTemplateMutationKey() {
  return [
    '#Action=CreateCustomVerificationEmailTemplate',
    '/#Action=CreateCustomVerificationEmailTemplate',
    'POST',
  ] as const
}

export function getPostActionCreateCustomVerificationEmailTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateCustomVerificationEmailTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=CreateCustomVerificationEmailTemplate'].$post(args, options),
      )
    },
  })
}

export function injectPostActionCreateCustomVerificationEmailTemplate<
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
                  (typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$post']>,
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
    const mutationDefaults = getPostActionCreateCustomVerificationEmailTemplateMutationOptions<
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

export function getActionCreateReceiptFilterQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptFilter']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateReceiptFilter', '/#Action=CreateReceiptFilter', keyArgs] as const
}

export function getActionCreateReceiptFilterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateReceiptFilter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptFilter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateReceiptFilter']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateReceiptFilterQueryKey>
  >({
    queryKey: getActionCreateReceiptFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateReceiptFilter'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionCreateReceiptFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateReceiptFilter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateReceiptFilter']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateReceiptFilter']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateReceiptFilterQueryKey>
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
      ...getActionCreateReceiptFilterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionCreateReceiptFilterMutationKey() {
  return ['#Action=CreateReceiptFilter', '/#Action=CreateReceiptFilter', 'POST'] as const
}

export function getPostActionCreateReceiptFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateReceiptFilter']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateReceiptFilter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateReceiptFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateReceiptFilter']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateReceiptFilter'].$post(args, options))
    },
  })
}

export function injectPostActionCreateReceiptFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateReceiptFilter']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateReceiptFilter']['$post']>,
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
    const mutationDefaults = getPostActionCreateReceiptFilterMutationOptions<
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

export function getActionCreateReceiptRuleQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptRule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateReceiptRule', '/#Action=CreateReceiptRule', keyArgs] as const
}

export function getActionCreateReceiptRuleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptRule']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateReceiptRuleQueryKey>
  >({
    queryKey: getActionCreateReceiptRuleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateReceiptRule'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionCreateReceiptRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateReceiptRule']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRule']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateReceiptRuleQueryKey>
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
      ...getActionCreateReceiptRuleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionCreateReceiptRuleMutationKey() {
  return ['#Action=CreateReceiptRule', '/#Action=CreateReceiptRule', 'POST'] as const
}

export function getPostActionCreateReceiptRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateReceiptRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateReceiptRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateReceiptRule']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateReceiptRule'].$post(args, options))
    },
  })
}

export function injectPostActionCreateReceiptRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRule']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateReceiptRule']['$post']>,
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
    const mutationDefaults = getPostActionCreateReceiptRuleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionCreateReceiptRuleSetQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateReceiptRuleSet', '/#Action=CreateReceiptRuleSet', keyArgs] as const
}

export function getActionCreateReceiptRuleSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateReceiptRuleSetQueryKey>
  >({
    queryKey: getActionCreateReceiptRuleSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateReceiptRuleSet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionCreateReceiptRuleSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateReceiptRuleSetQueryKey>
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
      ...getActionCreateReceiptRuleSetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionCreateReceiptRuleSetMutationKey() {
  return ['#Action=CreateReceiptRuleSet', '/#Action=CreateReceiptRuleSet', 'POST'] as const
}

export function getPostActionCreateReceiptRuleSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRuleSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateReceiptRuleSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateReceiptRuleSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateReceiptRuleSet']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateReceiptRuleSet'].$post(args, options))
    },
  })
}

export function injectPostActionCreateReceiptRuleSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRuleSet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateReceiptRuleSet']['$post']>,
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
    const mutationDefaults = getPostActionCreateReceiptRuleSetMutationOptions<
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

export function getActionCreateTemplateQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateTemplate', '/#Action=CreateTemplate', keyArgs] as const
}

export function getActionCreateTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTemplate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTemplate']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateTemplateQueryKey>
  >({
    queryKey: getActionCreateTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateTemplate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionCreateTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTemplate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateTemplate']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateTemplate']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateTemplateQueryKey>
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
      ...getActionCreateTemplateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionCreateTemplateMutationKey() {
  return ['#Action=CreateTemplate', '/#Action=CreateTemplate', 'POST'] as const
}

export function getPostActionCreateTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateTemplate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateTemplate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateTemplateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateTemplate']['$post']>) {
      return parseResponse(client['#Action=CreateTemplate'].$post(args, options))
    },
  })
}

export function injectPostActionCreateTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateTemplate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateTemplate']['$post']>,
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
    const mutationDefaults = getPostActionCreateTemplateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDeleteConfigurationSetQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteConfigurationSet', '/#Action=DeleteConfigurationSet', keyArgs] as const
}

export function getActionDeleteConfigurationSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteConfigurationSetQueryKey>
  >({
    queryKey: getActionDeleteConfigurationSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteConfigurationSet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteConfigurationSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteConfigurationSetQueryKey>
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
      ...getActionDeleteConfigurationSetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeleteConfigurationSetMutationKey() {
  return ['#Action=DeleteConfigurationSet', '/#Action=DeleteConfigurationSet', 'POST'] as const
}

export function getPostActionDeleteConfigurationSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteConfigurationSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteConfigurationSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSet']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteConfigurationSet'].$post(args, options))
    },
  })
}

export function injectPostActionDeleteConfigurationSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationSet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteConfigurationSet']['$post']>,
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
    const mutationDefaults = getPostActionDeleteConfigurationSetMutationOptions<
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

export function getActionDeleteConfigurationSetEventDestinationQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteConfigurationSetEventDestination',
    '/#Action=DeleteConfigurationSetEventDestination',
    keyArgs,
  ] as const
}

export function getActionDeleteConfigurationSetEventDestinationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteConfigurationSetEventDestinationQueryKey>
  >({
    queryKey: getActionDeleteConfigurationSetEventDestinationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteConfigurationSetEventDestination'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteConfigurationSetEventDestination<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteConfigurationSetEventDestinationQueryKey>
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
      ...getActionDeleteConfigurationSetEventDestinationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeleteConfigurationSetEventDestinationMutationKey() {
  return [
    '#Action=DeleteConfigurationSetEventDestination',
    '/#Action=DeleteConfigurationSetEventDestination',
    'POST',
  ] as const
}

export function getPostActionDeleteConfigurationSetEventDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=DeleteConfigurationSetEventDestination']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteConfigurationSetEventDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=DeleteConfigurationSetEventDestination']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=DeleteConfigurationSetEventDestination'].$post(args, options),
      )
    },
  })
}

export function injectPostActionDeleteConfigurationSetEventDestination<
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
                  (typeof client)['#Action=DeleteConfigurationSetEventDestination']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#Action=DeleteConfigurationSetEventDestination']['$post']
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
    const mutationDefaults = getPostActionDeleteConfigurationSetEventDestinationMutationOptions<
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

export function getActionDeleteConfigurationSetTrackingOptionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteConfigurationSetTrackingOptions',
    '/#Action=DeleteConfigurationSetTrackingOptions',
    keyArgs,
  ] as const
}

export function getActionDeleteConfigurationSetTrackingOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteConfigurationSetTrackingOptionsQueryKey>
  >({
    queryKey: getActionDeleteConfigurationSetTrackingOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteConfigurationSetTrackingOptions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteConfigurationSetTrackingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteConfigurationSetTrackingOptionsQueryKey>
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
      ...getActionDeleteConfigurationSetTrackingOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeleteConfigurationSetTrackingOptionsMutationKey() {
  return [
    '#Action=DeleteConfigurationSetTrackingOptions',
    '/#Action=DeleteConfigurationSetTrackingOptions',
    'POST',
  ] as const
}

export function getPostActionDeleteConfigurationSetTrackingOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteConfigurationSetTrackingOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=DeleteConfigurationSetTrackingOptions'].$post(args, options),
      )
    },
  })
}

export function injectPostActionDeleteConfigurationSetTrackingOptions<
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
                  (typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$post']>,
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
    const mutationDefaults = getPostActionDeleteConfigurationSetTrackingOptionsMutationOptions<
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

export function getActionDeleteCustomVerificationEmailTemplateQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteCustomVerificationEmailTemplate',
    '/#Action=DeleteCustomVerificationEmailTemplate',
    keyArgs,
  ] as const
}

export function getActionDeleteCustomVerificationEmailTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteCustomVerificationEmailTemplateQueryKey>
  >({
    queryKey: getActionDeleteCustomVerificationEmailTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteCustomVerificationEmailTemplate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteCustomVerificationEmailTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteCustomVerificationEmailTemplateQueryKey>
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
      ...getActionDeleteCustomVerificationEmailTemplateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeleteCustomVerificationEmailTemplateMutationKey() {
  return [
    '#Action=DeleteCustomVerificationEmailTemplate',
    '/#Action=DeleteCustomVerificationEmailTemplate',
    'POST',
  ] as const
}

export function getPostActionDeleteCustomVerificationEmailTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteCustomVerificationEmailTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=DeleteCustomVerificationEmailTemplate'].$post(args, options),
      )
    },
  })
}

export function injectPostActionDeleteCustomVerificationEmailTemplate<
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
                  (typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$post']>,
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
    const mutationDefaults = getPostActionDeleteCustomVerificationEmailTemplateMutationOptions<
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

export function getActionDeleteIdentityQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteIdentity']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteIdentity', '/#Action=DeleteIdentity', keyArgs] as const
}

export function getActionDeleteIdentityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteIdentity']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteIdentity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteIdentity']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteIdentityQueryKey>
  >({
    queryKey: getActionDeleteIdentityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteIdentity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteIdentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteIdentity']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteIdentity']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteIdentity']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteIdentityQueryKey>
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
      ...getActionDeleteIdentityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeleteIdentityMutationKey() {
  return ['#Action=DeleteIdentity', '/#Action=DeleteIdentity', 'POST'] as const
}

export function getPostActionDeleteIdentityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteIdentity']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteIdentity']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteIdentityMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteIdentity']['$post']>) {
      return parseResponse(client['#Action=DeleteIdentity'].$post(args, options))
    },
  })
}

export function injectPostActionDeleteIdentity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteIdentity']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteIdentity']['$post']>,
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
    const mutationDefaults = getPostActionDeleteIdentityMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDeleteIdentityPolicyQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteIdentityPolicy', '/#Action=DeleteIdentityPolicy', keyArgs] as const
}

export function getActionDeleteIdentityPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteIdentityPolicyQueryKey>
  >({
    queryKey: getActionDeleteIdentityPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteIdentityPolicy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteIdentityPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteIdentityPolicyQueryKey>
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
      ...getActionDeleteIdentityPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeleteIdentityPolicyMutationKey() {
  return ['#Action=DeleteIdentityPolicy', '/#Action=DeleteIdentityPolicy', 'POST'] as const
}

export function getPostActionDeleteIdentityPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteIdentityPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteIdentityPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteIdentityPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteIdentityPolicy']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteIdentityPolicy'].$post(args, options))
    },
  })
}

export function injectPostActionDeleteIdentityPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteIdentityPolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteIdentityPolicy']['$post']>,
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
    const mutationDefaults = getPostActionDeleteIdentityPolicyMutationOptions<
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

export function getActionDeleteReceiptFilterQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteReceiptFilter', '/#Action=DeleteReceiptFilter', keyArgs] as const
}

export function getActionDeleteReceiptFilterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteReceiptFilterQueryKey>
  >({
    queryKey: getActionDeleteReceiptFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteReceiptFilter'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteReceiptFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteReceiptFilterQueryKey>
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
      ...getActionDeleteReceiptFilterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeleteReceiptFilterMutationKey() {
  return ['#Action=DeleteReceiptFilter', '/#Action=DeleteReceiptFilter', 'POST'] as const
}

export function getPostActionDeleteReceiptFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptFilter']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteReceiptFilter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteReceiptFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteReceiptFilter']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteReceiptFilter'].$post(args, options))
    },
  })
}

export function injectPostActionDeleteReceiptFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptFilter']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteReceiptFilter']['$post']>,
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
    const mutationDefaults = getPostActionDeleteReceiptFilterMutationOptions<
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

export function getActionDeleteReceiptRuleQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptRule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteReceiptRule', '/#Action=DeleteReceiptRule', keyArgs] as const
}

export function getActionDeleteReceiptRuleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptRule']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteReceiptRuleQueryKey>
  >({
    queryKey: getActionDeleteReceiptRuleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteReceiptRule'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteReceiptRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteReceiptRule']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRule']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteReceiptRuleQueryKey>
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
      ...getActionDeleteReceiptRuleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeleteReceiptRuleMutationKey() {
  return ['#Action=DeleteReceiptRule', '/#Action=DeleteReceiptRule', 'POST'] as const
}

export function getPostActionDeleteReceiptRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteReceiptRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteReceiptRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteReceiptRule']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteReceiptRule'].$post(args, options))
    },
  })
}

export function injectPostActionDeleteReceiptRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRule']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteReceiptRule']['$post']>,
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
    const mutationDefaults = getPostActionDeleteReceiptRuleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDeleteReceiptRuleSetQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteReceiptRuleSet', '/#Action=DeleteReceiptRuleSet', keyArgs] as const
}

export function getActionDeleteReceiptRuleSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteReceiptRuleSetQueryKey>
  >({
    queryKey: getActionDeleteReceiptRuleSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteReceiptRuleSet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteReceiptRuleSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteReceiptRuleSetQueryKey>
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
      ...getActionDeleteReceiptRuleSetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeleteReceiptRuleSetMutationKey() {
  return ['#Action=DeleteReceiptRuleSet', '/#Action=DeleteReceiptRuleSet', 'POST'] as const
}

export function getPostActionDeleteReceiptRuleSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRuleSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteReceiptRuleSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteReceiptRuleSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteReceiptRuleSet']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteReceiptRuleSet'].$post(args, options))
    },
  })
}

export function injectPostActionDeleteReceiptRuleSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRuleSet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteReceiptRuleSet']['$post']>,
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
    const mutationDefaults = getPostActionDeleteReceiptRuleSetMutationOptions<
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

export function getActionDeleteTemplateQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteTemplate', '/#Action=DeleteTemplate', keyArgs] as const
}

export function getActionDeleteTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTemplate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTemplate']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteTemplateQueryKey>
  >({
    queryKey: getActionDeleteTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteTemplate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTemplate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteTemplate']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteTemplate']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteTemplateQueryKey>
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
      ...getActionDeleteTemplateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeleteTemplateMutationKey() {
  return ['#Action=DeleteTemplate', '/#Action=DeleteTemplate', 'POST'] as const
}

export function getPostActionDeleteTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteTemplate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteTemplate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteTemplateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteTemplate']['$post']>) {
      return parseResponse(client['#Action=DeleteTemplate'].$post(args, options))
    },
  })
}

export function injectPostActionDeleteTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteTemplate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteTemplate']['$post']>,
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
    const mutationDefaults = getPostActionDeleteTemplateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDeleteVerifiedEmailAddressQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteVerifiedEmailAddress',
    '/#Action=DeleteVerifiedEmailAddress',
    keyArgs,
  ] as const
}

export function getActionDeleteVerifiedEmailAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteVerifiedEmailAddressQueryKey>
  >({
    queryKey: getActionDeleteVerifiedEmailAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteVerifiedEmailAddress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteVerifiedEmailAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteVerifiedEmailAddressQueryKey>
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
      ...getActionDeleteVerifiedEmailAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeleteVerifiedEmailAddressMutationKey() {
  return [
    '#Action=DeleteVerifiedEmailAddress',
    '/#Action=DeleteVerifiedEmailAddress',
    'POST',
  ] as const
}

export function getPostActionDeleteVerifiedEmailAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteVerifiedEmailAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteVerifiedEmailAddress'].$post(args, options))
    },
  })
}

export function injectPostActionDeleteVerifiedEmailAddress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$post']>,
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
    const mutationDefaults = getPostActionDeleteVerifiedEmailAddressMutationOptions<
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

export function getActionDescribeActiveReceiptRuleSetQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeActiveReceiptRuleSet',
    '/#Action=DescribeActiveReceiptRuleSet',
    keyArgs,
  ] as const
}

export function getActionDescribeActiveReceiptRuleSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeActiveReceiptRuleSetQueryKey>
  >({
    queryKey: getActionDescribeActiveReceiptRuleSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeActiveReceiptRuleSet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeActiveReceiptRuleSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeActiveReceiptRuleSetQueryKey>
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
      ...getActionDescribeActiveReceiptRuleSetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeActiveReceiptRuleSetMutationKey() {
  return [
    '#Action=DescribeActiveReceiptRuleSet',
    '/#Action=DescribeActiveReceiptRuleSet',
    'POST',
  ] as const
}

export function getPostActionDescribeActiveReceiptRuleSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeActiveReceiptRuleSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeActiveReceiptRuleSet'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeActiveReceiptRuleSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$post']>,
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
    const mutationDefaults = getPostActionDescribeActiveReceiptRuleSetMutationOptions<
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

export function getActionDescribeConfigurationSetQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeConfigurationSet', '/#Action=DescribeConfigurationSet', keyArgs] as const
}

export function getActionDescribeConfigurationSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeConfigurationSetQueryKey>
  >({
    queryKey: getActionDescribeConfigurationSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeConfigurationSet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeConfigurationSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeConfigurationSetQueryKey>
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
      ...getActionDescribeConfigurationSetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeConfigurationSetMutationKey() {
  return ['#Action=DescribeConfigurationSet', '/#Action=DescribeConfigurationSet', 'POST'] as const
}

export function getPostActionDescribeConfigurationSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeConfigurationSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeConfigurationSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeConfigurationSet']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeConfigurationSet'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeConfigurationSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeConfigurationSet']['$post']>,
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
    const mutationDefaults = getPostActionDescribeConfigurationSetMutationOptions<
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

export function getActionDescribeReceiptRuleQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeReceiptRule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeReceiptRule', '/#Action=DescribeReceiptRule', keyArgs] as const
}

export function getActionDescribeReceiptRuleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeReceiptRule']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeReceiptRuleQueryKey>
  >({
    queryKey: getActionDescribeReceiptRuleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeReceiptRule'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeReceiptRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeReceiptRule']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRule']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeReceiptRuleQueryKey>
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
      ...getActionDescribeReceiptRuleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeReceiptRuleMutationKey() {
  return ['#Action=DescribeReceiptRule', '/#Action=DescribeReceiptRule', 'POST'] as const
}

export function getPostActionDescribeReceiptRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeReceiptRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeReceiptRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeReceiptRule']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeReceiptRule'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeReceiptRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRule']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeReceiptRule']['$post']>,
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
    const mutationDefaults = getPostActionDescribeReceiptRuleMutationOptions<
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

export function getActionDescribeReceiptRuleSetQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeReceiptRuleSet', '/#Action=DescribeReceiptRuleSet', keyArgs] as const
}

export function getActionDescribeReceiptRuleSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeReceiptRuleSetQueryKey>
  >({
    queryKey: getActionDescribeReceiptRuleSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeReceiptRuleSet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeReceiptRuleSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeReceiptRuleSetQueryKey>
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
      ...getActionDescribeReceiptRuleSetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeReceiptRuleSetMutationKey() {
  return ['#Action=DescribeReceiptRuleSet', '/#Action=DescribeReceiptRuleSet', 'POST'] as const
}

export function getPostActionDescribeReceiptRuleSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRuleSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeReceiptRuleSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeReceiptRuleSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeReceiptRuleSet']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeReceiptRuleSet'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeReceiptRuleSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRuleSet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeReceiptRuleSet']['$post']>,
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
    const mutationDefaults = getPostActionDescribeReceiptRuleSetMutationOptions<
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

export function getActionGetAccountSendingEnabledQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetAccountSendingEnabled', '/#Action=GetAccountSendingEnabled', keyArgs] as const
}

export function getActionGetAccountSendingEnabledQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetAccountSendingEnabledQueryKey>
  >({
    queryKey: getActionGetAccountSendingEnabledQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetAccountSendingEnabled'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionGetAccountSendingEnabled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetAccountSendingEnabledQueryKey>
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
      ...getActionGetAccountSendingEnabledQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionGetAccountSendingEnabledMutationKey() {
  return ['#Action=GetAccountSendingEnabled', '/#Action=GetAccountSendingEnabled', 'POST'] as const
}

export function getPostActionGetAccountSendingEnabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetAccountSendingEnabled']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetAccountSendingEnabled']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetAccountSendingEnabledMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetAccountSendingEnabled']['$post']>,
    ) {
      return parseResponse(client['#Action=GetAccountSendingEnabled'].$post(args, options))
    },
  })
}

export function injectPostActionGetAccountSendingEnabled<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetAccountSendingEnabled']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetAccountSendingEnabled']['$post']>,
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
    const mutationDefaults = getPostActionGetAccountSendingEnabledMutationOptions<
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

export function getActionGetCustomVerificationEmailTemplateQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetCustomVerificationEmailTemplate',
    '/#Action=GetCustomVerificationEmailTemplate',
    keyArgs,
  ] as const
}

export function getActionGetCustomVerificationEmailTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetCustomVerificationEmailTemplateQueryKey>
  >({
    queryKey: getActionGetCustomVerificationEmailTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetCustomVerificationEmailTemplate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionGetCustomVerificationEmailTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetCustomVerificationEmailTemplateQueryKey>
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
      ...getActionGetCustomVerificationEmailTemplateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionGetCustomVerificationEmailTemplateMutationKey() {
  return [
    '#Action=GetCustomVerificationEmailTemplate',
    '/#Action=GetCustomVerificationEmailTemplate',
    'POST',
  ] as const
}

export function getPostActionGetCustomVerificationEmailTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetCustomVerificationEmailTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=GetCustomVerificationEmailTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=GetCustomVerificationEmailTemplate'].$post(args, options),
      )
    },
  })
}

export function injectPostActionGetCustomVerificationEmailTemplate<
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
                ReturnType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$post']>,
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
    const mutationDefaults = getPostActionGetCustomVerificationEmailTemplateMutationOptions<
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

export function getActionGetIdentityDkimAttributesQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetIdentityDkimAttributes',
    '/#Action=GetIdentityDkimAttributes',
    keyArgs,
  ] as const
}

export function getActionGetIdentityDkimAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetIdentityDkimAttributesQueryKey>
  >({
    queryKey: getActionGetIdentityDkimAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetIdentityDkimAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionGetIdentityDkimAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetIdentityDkimAttributesQueryKey>
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
      ...getActionGetIdentityDkimAttributesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionGetIdentityDkimAttributesMutationKey() {
  return [
    '#Action=GetIdentityDkimAttributes',
    '/#Action=GetIdentityDkimAttributes',
    'POST',
  ] as const
}

export function getPostActionGetIdentityDkimAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetIdentityDkimAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetIdentityDkimAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetIdentityDkimAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetIdentityDkimAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=GetIdentityDkimAttributes'].$post(args, options))
    },
  })
}

export function injectPostActionGetIdentityDkimAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetIdentityDkimAttributes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetIdentityDkimAttributes']['$post']>,
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
    const mutationDefaults = getPostActionGetIdentityDkimAttributesMutationOptions<
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

export function getActionGetIdentityMailFromDomainAttributesQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetIdentityMailFromDomainAttributes',
    '/#Action=GetIdentityMailFromDomainAttributes',
    keyArgs,
  ] as const
}

export function getActionGetIdentityMailFromDomainAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetIdentityMailFromDomainAttributesQueryKey>
  >({
    queryKey: getActionGetIdentityMailFromDomainAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetIdentityMailFromDomainAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionGetIdentityMailFromDomainAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetIdentityMailFromDomainAttributesQueryKey>
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
      ...getActionGetIdentityMailFromDomainAttributesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionGetIdentityMailFromDomainAttributesMutationKey() {
  return [
    '#Action=GetIdentityMailFromDomainAttributes',
    '/#Action=GetIdentityMailFromDomainAttributes',
    'POST',
  ] as const
}

export function getPostActionGetIdentityMailFromDomainAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetIdentityMailFromDomainAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=GetIdentityMailFromDomainAttributes'].$post(args, options),
      )
    },
  })
}

export function injectPostActionGetIdentityMailFromDomainAttributes<
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
                ReturnType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$post']>,
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
    const mutationDefaults = getPostActionGetIdentityMailFromDomainAttributesMutationOptions<
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

export function getActionGetIdentityNotificationAttributesQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetIdentityNotificationAttributes',
    '/#Action=GetIdentityNotificationAttributes',
    keyArgs,
  ] as const
}

export function getActionGetIdentityNotificationAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetIdentityNotificationAttributesQueryKey>
  >({
    queryKey: getActionGetIdentityNotificationAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetIdentityNotificationAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionGetIdentityNotificationAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=GetIdentityNotificationAttributes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetIdentityNotificationAttributesQueryKey>
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
      ...getActionGetIdentityNotificationAttributesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionGetIdentityNotificationAttributesMutationKey() {
  return [
    '#Action=GetIdentityNotificationAttributes',
    '/#Action=GetIdentityNotificationAttributes',
    'POST',
  ] as const
}

export function getPostActionGetIdentityNotificationAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetIdentityNotificationAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=GetIdentityNotificationAttributes'].$post(args, options))
    },
  })
}

export function injectPostActionGetIdentityNotificationAttributes<
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
                ReturnType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$post']>,
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
    const mutationDefaults = getPostActionGetIdentityNotificationAttributesMutationOptions<
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

export function getActionGetIdentityPoliciesQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetIdentityPolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetIdentityPolicies', '/#Action=GetIdentityPolicies', keyArgs] as const
}

export function getActionGetIdentityPoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetIdentityPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetIdentityPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetIdentityPolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetIdentityPoliciesQueryKey>
  >({
    queryKey: getActionGetIdentityPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetIdentityPolicies'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionGetIdentityPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetIdentityPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=GetIdentityPolicies']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetIdentityPolicies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetIdentityPoliciesQueryKey>
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
      ...getActionGetIdentityPoliciesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionGetIdentityPoliciesMutationKey() {
  return ['#Action=GetIdentityPolicies', '/#Action=GetIdentityPolicies', 'POST'] as const
}

export function getPostActionGetIdentityPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetIdentityPolicies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetIdentityPolicies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetIdentityPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetIdentityPolicies']['$post']>,
    ) {
      return parseResponse(client['#Action=GetIdentityPolicies'].$post(args, options))
    },
  })
}

export function injectPostActionGetIdentityPolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetIdentityPolicies']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetIdentityPolicies']['$post']>,
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
    const mutationDefaults = getPostActionGetIdentityPoliciesMutationOptions<
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

export function getActionGetIdentityVerificationAttributesQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetIdentityVerificationAttributes',
    '/#Action=GetIdentityVerificationAttributes',
    keyArgs,
  ] as const
}

export function getActionGetIdentityVerificationAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetIdentityVerificationAttributesQueryKey>
  >({
    queryKey: getActionGetIdentityVerificationAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetIdentityVerificationAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionGetIdentityVerificationAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=GetIdentityVerificationAttributes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetIdentityVerificationAttributesQueryKey>
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
      ...getActionGetIdentityVerificationAttributesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionGetIdentityVerificationAttributesMutationKey() {
  return [
    '#Action=GetIdentityVerificationAttributes',
    '/#Action=GetIdentityVerificationAttributes',
    'POST',
  ] as const
}

export function getPostActionGetIdentityVerificationAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetIdentityVerificationAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=GetIdentityVerificationAttributes'].$post(args, options))
    },
  })
}

export function injectPostActionGetIdentityVerificationAttributes<
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
                ReturnType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$post']>,
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
    const mutationDefaults = getPostActionGetIdentityVerificationAttributesMutationOptions<
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

export function getActionGetSendQuotaQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetSendQuota']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetSendQuota', '/#Action=GetSendQuota', keyArgs] as const
}

export function getActionGetSendQuotaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetSendQuota']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetSendQuota']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetSendQuota']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetSendQuotaQueryKey>
  >({
    queryKey: getActionGetSendQuotaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetSendQuota'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionGetSendQuota<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetSendQuota']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=GetSendQuota']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetSendQuota']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetSendQuotaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionGetSendQuotaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionGetSendQuotaMutationKey() {
  return ['#Action=GetSendQuota', '/#Action=GetSendQuota', 'POST'] as const
}

export function getPostActionGetSendQuotaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetSendQuota']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetSendQuota']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetSendQuotaMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetSendQuota']['$post']>) {
      return parseResponse(client['#Action=GetSendQuota'].$post(args, options))
    },
  })
}

export function injectPostActionGetSendQuota<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetSendQuota']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetSendQuota']['$post']>,
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
    const mutationDefaults = getPostActionGetSendQuotaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionGetSendStatisticsQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetSendStatistics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetSendStatistics', '/#Action=GetSendStatistics', keyArgs] as const
}

export function getActionGetSendStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetSendStatistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetSendStatistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSendStatistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetSendStatisticsQueryKey>
  >({
    queryKey: getActionGetSendStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetSendStatistics'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionGetSendStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetSendStatistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=GetSendStatistics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetSendStatistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetSendStatisticsQueryKey>
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
      ...getActionGetSendStatisticsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionGetSendStatisticsMutationKey() {
  return ['#Action=GetSendStatistics', '/#Action=GetSendStatistics', 'POST'] as const
}

export function getPostActionGetSendStatisticsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSendStatistics']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetSendStatistics']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetSendStatisticsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetSendStatistics']['$post']>,
    ) {
      return parseResponse(client['#Action=GetSendStatistics'].$post(args, options))
    },
  })
}

export function injectPostActionGetSendStatistics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetSendStatistics']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetSendStatistics']['$post']>,
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
    const mutationDefaults = getPostActionGetSendStatisticsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionGetTemplateQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetTemplate', '/#Action=GetTemplate', keyArgs] as const
}

export function getActionGetTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetTemplateQueryKey>
  >({
    queryKey: getActionGetTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetTemplate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionGetTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=GetTemplate']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetTemplateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionGetTemplateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionGetTemplateMutationKey() {
  return ['#Action=GetTemplate', '/#Action=GetTemplate', 'POST'] as const
}

export function getPostActionGetTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetTemplate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetTemplateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetTemplate']['$post']>) {
      return parseResponse(client['#Action=GetTemplate'].$post(args, options))
    },
  })
}

export function injectPostActionGetTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetTemplate']['$post']>,
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
    const mutationDefaults = getPostActionGetTemplateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionListConfigurationSetsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListConfigurationSets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListConfigurationSets', '/#Action=ListConfigurationSets', keyArgs] as const
}

export function getActionListConfigurationSetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListConfigurationSets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListConfigurationSets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListConfigurationSets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListConfigurationSetsQueryKey>
  >({
    queryKey: getActionListConfigurationSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListConfigurationSets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionListConfigurationSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListConfigurationSets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListConfigurationSets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListConfigurationSets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListConfigurationSetsQueryKey>
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
      ...getActionListConfigurationSetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionListConfigurationSetsMutationKey() {
  return ['#Action=ListConfigurationSets', '/#Action=ListConfigurationSets', 'POST'] as const
}

export function getPostActionListConfigurationSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListConfigurationSets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListConfigurationSets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListConfigurationSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListConfigurationSets']['$post']>,
    ) {
      return parseResponse(client['#Action=ListConfigurationSets'].$post(args, options))
    },
  })
}

export function injectPostActionListConfigurationSets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListConfigurationSets']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListConfigurationSets']['$post']>,
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
    const mutationDefaults = getPostActionListConfigurationSetsMutationOptions<
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

export function getActionListCustomVerificationEmailTemplatesQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ListCustomVerificationEmailTemplates',
    '/#Action=ListCustomVerificationEmailTemplates',
    keyArgs,
  ] as const
}

export function getActionListCustomVerificationEmailTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListCustomVerificationEmailTemplatesQueryKey>
  >({
    queryKey: getActionListCustomVerificationEmailTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListCustomVerificationEmailTemplates'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionListCustomVerificationEmailTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListCustomVerificationEmailTemplatesQueryKey>
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
      ...getActionListCustomVerificationEmailTemplatesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionListCustomVerificationEmailTemplatesMutationKey() {
  return [
    '#Action=ListCustomVerificationEmailTemplates',
    '/#Action=ListCustomVerificationEmailTemplates',
    'POST',
  ] as const
}

export function getPostActionListCustomVerificationEmailTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListCustomVerificationEmailTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=ListCustomVerificationEmailTemplates']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=ListCustomVerificationEmailTemplates'].$post(args, options),
      )
    },
  })
}

export function injectPostActionListCustomVerificationEmailTemplates<
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
                ReturnType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$post']>,
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
    const mutationDefaults = getPostActionListCustomVerificationEmailTemplatesMutationOptions<
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

export function getActionListIdentitiesQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListIdentities']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListIdentities', '/#Action=ListIdentities', keyArgs] as const
}

export function getActionListIdentitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListIdentities']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListIdentities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListIdentities']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListIdentitiesQueryKey>
  >({
    queryKey: getActionListIdentitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListIdentities'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionListIdentities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListIdentities']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListIdentities']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListIdentities']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListIdentitiesQueryKey>
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
      ...getActionListIdentitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionListIdentitiesMutationKey() {
  return ['#Action=ListIdentities', '/#Action=ListIdentities', 'POST'] as const
}

export function getPostActionListIdentitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListIdentities']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListIdentities']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListIdentitiesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListIdentities']['$post']>) {
      return parseResponse(client['#Action=ListIdentities'].$post(args, options))
    },
  })
}

export function injectPostActionListIdentities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListIdentities']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListIdentities']['$post']>,
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
    const mutationDefaults = getPostActionListIdentitiesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionListIdentityPoliciesQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListIdentityPolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListIdentityPolicies', '/#Action=ListIdentityPolicies', keyArgs] as const
}

export function getActionListIdentityPoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListIdentityPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListIdentityPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListIdentityPolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListIdentityPoliciesQueryKey>
  >({
    queryKey: getActionListIdentityPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListIdentityPolicies'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionListIdentityPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListIdentityPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListIdentityPolicies']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListIdentityPolicies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListIdentityPoliciesQueryKey>
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
      ...getActionListIdentityPoliciesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionListIdentityPoliciesMutationKey() {
  return ['#Action=ListIdentityPolicies', '/#Action=ListIdentityPolicies', 'POST'] as const
}

export function getPostActionListIdentityPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListIdentityPolicies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListIdentityPolicies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListIdentityPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListIdentityPolicies']['$post']>,
    ) {
      return parseResponse(client['#Action=ListIdentityPolicies'].$post(args, options))
    },
  })
}

export function injectPostActionListIdentityPolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListIdentityPolicies']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListIdentityPolicies']['$post']>,
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
    const mutationDefaults = getPostActionListIdentityPoliciesMutationOptions<
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

export function getActionListReceiptFiltersQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListReceiptFilters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListReceiptFilters', '/#Action=ListReceiptFilters', keyArgs] as const
}

export function getActionListReceiptFiltersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListReceiptFilters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListReceiptFilters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListReceiptFilters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListReceiptFiltersQueryKey>
  >({
    queryKey: getActionListReceiptFiltersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListReceiptFilters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionListReceiptFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListReceiptFilters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListReceiptFilters']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListReceiptFilters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListReceiptFiltersQueryKey>
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
      ...getActionListReceiptFiltersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionListReceiptFiltersMutationKey() {
  return ['#Action=ListReceiptFilters', '/#Action=ListReceiptFilters', 'POST'] as const
}

export function getPostActionListReceiptFiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListReceiptFilters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListReceiptFilters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListReceiptFiltersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListReceiptFilters']['$post']>,
    ) {
      return parseResponse(client['#Action=ListReceiptFilters'].$post(args, options))
    },
  })
}

export function injectPostActionListReceiptFilters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListReceiptFilters']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListReceiptFilters']['$post']>,
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
    const mutationDefaults = getPostActionListReceiptFiltersMutationOptions<
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

export function getActionListReceiptRuleSetsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListReceiptRuleSets', '/#Action=ListReceiptRuleSets', keyArgs] as const
}

export function getActionListReceiptRuleSetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListReceiptRuleSetsQueryKey>
  >({
    queryKey: getActionListReceiptRuleSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListReceiptRuleSets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionListReceiptRuleSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListReceiptRuleSetsQueryKey>
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
      ...getActionListReceiptRuleSetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionListReceiptRuleSetsMutationKey() {
  return ['#Action=ListReceiptRuleSets', '/#Action=ListReceiptRuleSets', 'POST'] as const
}

export function getPostActionListReceiptRuleSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListReceiptRuleSets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListReceiptRuleSets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListReceiptRuleSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListReceiptRuleSets']['$post']>,
    ) {
      return parseResponse(client['#Action=ListReceiptRuleSets'].$post(args, options))
    },
  })
}

export function injectPostActionListReceiptRuleSets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListReceiptRuleSets']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListReceiptRuleSets']['$post']>,
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
    const mutationDefaults = getPostActionListReceiptRuleSetsMutationOptions<
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

export function getActionListTemplatesQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListTemplates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListTemplates', '/#Action=ListTemplates', keyArgs] as const
}

export function getActionListTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTemplates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListTemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTemplates']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListTemplatesQueryKey>
  >({
    queryKey: getActionListTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListTemplates'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionListTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTemplates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListTemplates']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListTemplates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionListTemplatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionListTemplatesMutationKey() {
  return ['#Action=ListTemplates', '/#Action=ListTemplates', 'POST'] as const
}

export function getPostActionListTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTemplates']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListTemplates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListTemplates']['$post']>) {
      return parseResponse(client['#Action=ListTemplates'].$post(args, options))
    },
  })
}

export function injectPostActionListTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListTemplates']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListTemplates']['$post']>,
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
    const mutationDefaults = getPostActionListTemplatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionListVerifiedEmailAddressesQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ListVerifiedEmailAddresses',
    '/#Action=ListVerifiedEmailAddresses',
    keyArgs,
  ] as const
}

export function getActionListVerifiedEmailAddressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListVerifiedEmailAddressesQueryKey>
  >({
    queryKey: getActionListVerifiedEmailAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListVerifiedEmailAddresses'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionListVerifiedEmailAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListVerifiedEmailAddressesQueryKey>
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
      ...getActionListVerifiedEmailAddressesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionListVerifiedEmailAddressesMutationKey() {
  return [
    '#Action=ListVerifiedEmailAddresses',
    '/#Action=ListVerifiedEmailAddresses',
    'POST',
  ] as const
}

export function getPostActionListVerifiedEmailAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListVerifiedEmailAddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$post']>,
    ) {
      return parseResponse(client['#Action=ListVerifiedEmailAddresses'].$post(args, options))
    },
  })
}

export function injectPostActionListVerifiedEmailAddresses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$post']>,
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
    const mutationDefaults = getPostActionListVerifiedEmailAddressesMutationOptions<
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

export function getActionPutConfigurationSetDeliveryOptionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=PutConfigurationSetDeliveryOptions',
    '/#Action=PutConfigurationSetDeliveryOptions',
    keyArgs,
  ] as const
}

export function getActionPutConfigurationSetDeliveryOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutConfigurationSetDeliveryOptionsQueryKey>
  >({
    queryKey: getActionPutConfigurationSetDeliveryOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PutConfigurationSetDeliveryOptions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionPutConfigurationSetDeliveryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutConfigurationSetDeliveryOptionsQueryKey>
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
      ...getActionPutConfigurationSetDeliveryOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionPutConfigurationSetDeliveryOptionsMutationKey() {
  return [
    '#Action=PutConfigurationSetDeliveryOptions',
    '/#Action=PutConfigurationSetDeliveryOptions',
    'POST',
  ] as const
}

export function getPostActionPutConfigurationSetDeliveryOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutConfigurationSetDeliveryOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=PutConfigurationSetDeliveryOptions'].$post(args, options),
      )
    },
  })
}

export function injectPostActionPutConfigurationSetDeliveryOptions<
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
                ReturnType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$post']>,
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
    const mutationDefaults = getPostActionPutConfigurationSetDeliveryOptionsMutationOptions<
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

export function getActionPutIdentityPolicyQueryKey(
  args: InferRequestType<(typeof client)['#Action=PutIdentityPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutIdentityPolicy', '/#Action=PutIdentityPolicy', keyArgs] as const
}

export function getActionPutIdentityPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutIdentityPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutIdentityPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutIdentityPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutIdentityPolicyQueryKey>
  >({
    queryKey: getActionPutIdentityPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PutIdentityPolicy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionPutIdentityPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutIdentityPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=PutIdentityPolicy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutIdentityPolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutIdentityPolicyQueryKey>
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
      ...getActionPutIdentityPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionPutIdentityPolicyMutationKey() {
  return ['#Action=PutIdentityPolicy', '/#Action=PutIdentityPolicy', 'POST'] as const
}

export function getPostActionPutIdentityPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutIdentityPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutIdentityPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutIdentityPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=PutIdentityPolicy']['$post']>,
    ) {
      return parseResponse(client['#Action=PutIdentityPolicy'].$post(args, options))
    },
  })
}

export function injectPostActionPutIdentityPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutIdentityPolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=PutIdentityPolicy']['$post']>,
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
    const mutationDefaults = getPostActionPutIdentityPolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionReorderReceiptRuleSetQueryKey(
  args: InferRequestType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ReorderReceiptRuleSet', '/#Action=ReorderReceiptRuleSet', keyArgs] as const
}

export function getActionReorderReceiptRuleSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionReorderReceiptRuleSetQueryKey>
  >({
    queryKey: getActionReorderReceiptRuleSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ReorderReceiptRuleSet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionReorderReceiptRuleSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionReorderReceiptRuleSetQueryKey>
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
      ...getActionReorderReceiptRuleSetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionReorderReceiptRuleSetMutationKey() {
  return ['#Action=ReorderReceiptRuleSet', '/#Action=ReorderReceiptRuleSet', 'POST'] as const
}

export function getPostActionReorderReceiptRuleSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ReorderReceiptRuleSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ReorderReceiptRuleSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionReorderReceiptRuleSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ReorderReceiptRuleSet']['$post']>,
    ) {
      return parseResponse(client['#Action=ReorderReceiptRuleSet'].$post(args, options))
    },
  })
}

export function injectPostActionReorderReceiptRuleSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ReorderReceiptRuleSet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ReorderReceiptRuleSet']['$post']>,
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
    const mutationDefaults = getPostActionReorderReceiptRuleSetMutationOptions<
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

export function getActionSendBounceQueryKey(
  args: InferRequestType<(typeof client)['#Action=SendBounce']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SendBounce', '/#Action=SendBounce', keyArgs] as const
}

export function getActionSendBounceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendBounce']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SendBounce']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendBounce']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSendBounceQueryKey>
  >({
    queryKey: getActionSendBounceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SendBounce'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectActionSendBounce<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendBounce']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SendBounce']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendBounce']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSendBounceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionSendBounceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionSendBounceMutationKey() {
  return ['#Action=SendBounce', '/#Action=SendBounce', 'POST'] as const
}

export function getPostActionSendBounceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendBounce']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SendBounce']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSendBounceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=SendBounce']['$post']>) {
      return parseResponse(client['#Action=SendBounce'].$post(args, options))
    },
  })
}

export function injectPostActionSendBounce<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SendBounce']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SendBounce']['$post']>,
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
    const mutationDefaults = getPostActionSendBounceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionSendBulkTemplatedEmailQueryKey(
  args: InferRequestType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SendBulkTemplatedEmail', '/#Action=SendBulkTemplatedEmail', keyArgs] as const
}

export function getActionSendBulkTemplatedEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSendBulkTemplatedEmailQueryKey>
  >({
    queryKey: getActionSendBulkTemplatedEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SendBulkTemplatedEmail'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionSendBulkTemplatedEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSendBulkTemplatedEmailQueryKey>
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
      ...getActionSendBulkTemplatedEmailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionSendBulkTemplatedEmailMutationKey() {
  return ['#Action=SendBulkTemplatedEmail', '/#Action=SendBulkTemplatedEmail', 'POST'] as const
}

export function getPostActionSendBulkTemplatedEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SendBulkTemplatedEmail']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SendBulkTemplatedEmail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSendBulkTemplatedEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SendBulkTemplatedEmail']['$post']>,
    ) {
      return parseResponse(client['#Action=SendBulkTemplatedEmail'].$post(args, options))
    },
  })
}

export function injectPostActionSendBulkTemplatedEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SendBulkTemplatedEmail']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SendBulkTemplatedEmail']['$post']>,
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
    const mutationDefaults = getPostActionSendBulkTemplatedEmailMutationOptions<
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

export function getActionSendCustomVerificationEmailQueryKey(
  args: InferRequestType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SendCustomVerificationEmail',
    '/#Action=SendCustomVerificationEmail',
    keyArgs,
  ] as const
}

export function getActionSendCustomVerificationEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSendCustomVerificationEmailQueryKey>
  >({
    queryKey: getActionSendCustomVerificationEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SendCustomVerificationEmail'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionSendCustomVerificationEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSendCustomVerificationEmailQueryKey>
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
      ...getActionSendCustomVerificationEmailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionSendCustomVerificationEmailMutationKey() {
  return [
    '#Action=SendCustomVerificationEmail',
    '/#Action=SendCustomVerificationEmail',
    'POST',
  ] as const
}

export function getPostActionSendCustomVerificationEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SendCustomVerificationEmail']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SendCustomVerificationEmail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSendCustomVerificationEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SendCustomVerificationEmail']['$post']>,
    ) {
      return parseResponse(client['#Action=SendCustomVerificationEmail'].$post(args, options))
    },
  })
}

export function injectPostActionSendCustomVerificationEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SendCustomVerificationEmail']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SendCustomVerificationEmail']['$post']>,
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
    const mutationDefaults = getPostActionSendCustomVerificationEmailMutationOptions<
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

export function getActionSendEmailQueryKey(
  args: InferRequestType<(typeof client)['#Action=SendEmail']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SendEmail', '/#Action=SendEmail', keyArgs] as const
}

export function getActionSendEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendEmail']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SendEmail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendEmail']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSendEmailQueryKey>
  >({
    queryKey: getActionSendEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SendEmail'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectActionSendEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendEmail']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SendEmail']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendEmail']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSendEmailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionSendEmailQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionSendEmailMutationKey() {
  return ['#Action=SendEmail', '/#Action=SendEmail', 'POST'] as const
}

export function getPostActionSendEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendEmail']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SendEmail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSendEmailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=SendEmail']['$post']>) {
      return parseResponse(client['#Action=SendEmail'].$post(args, options))
    },
  })
}

export function injectPostActionSendEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendEmail']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SendEmail']['$post']>,
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
    const mutationDefaults = getPostActionSendEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionSendRawEmailQueryKey(
  args: InferRequestType<(typeof client)['#Action=SendRawEmail']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SendRawEmail', '/#Action=SendRawEmail', keyArgs] as const
}

export function getActionSendRawEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendRawEmail']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SendRawEmail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendRawEmail']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSendRawEmailQueryKey>
  >({
    queryKey: getActionSendRawEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SendRawEmail'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionSendRawEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendRawEmail']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SendRawEmail']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SendRawEmail']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSendRawEmailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionSendRawEmailQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionSendRawEmailMutationKey() {
  return ['#Action=SendRawEmail', '/#Action=SendRawEmail', 'POST'] as const
}

export function getPostActionSendRawEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendRawEmail']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SendRawEmail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSendRawEmailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=SendRawEmail']['$post']>) {
      return parseResponse(client['#Action=SendRawEmail'].$post(args, options))
    },
  })
}

export function injectPostActionSendRawEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SendRawEmail']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SendRawEmail']['$post']>,
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
    const mutationDefaults = getPostActionSendRawEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionSendTemplatedEmailQueryKey(
  args: InferRequestType<(typeof client)['#Action=SendTemplatedEmail']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SendTemplatedEmail', '/#Action=SendTemplatedEmail', keyArgs] as const
}

export function getActionSendTemplatedEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SendTemplatedEmail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SendTemplatedEmail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SendTemplatedEmail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSendTemplatedEmailQueryKey>
  >({
    queryKey: getActionSendTemplatedEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SendTemplatedEmail'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionSendTemplatedEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SendTemplatedEmail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SendTemplatedEmail']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SendTemplatedEmail']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSendTemplatedEmailQueryKey>
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
      ...getActionSendTemplatedEmailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionSendTemplatedEmailMutationKey() {
  return ['#Action=SendTemplatedEmail', '/#Action=SendTemplatedEmail', 'POST'] as const
}

export function getPostActionSendTemplatedEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SendTemplatedEmail']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SendTemplatedEmail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSendTemplatedEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SendTemplatedEmail']['$post']>,
    ) {
      return parseResponse(client['#Action=SendTemplatedEmail'].$post(args, options))
    },
  })
}

export function injectPostActionSendTemplatedEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SendTemplatedEmail']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SendTemplatedEmail']['$post']>,
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
    const mutationDefaults = getPostActionSendTemplatedEmailMutationOptions<
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

export function getActionSetActiveReceiptRuleSetQueryKey(
  args: InferRequestType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetActiveReceiptRuleSet', '/#Action=SetActiveReceiptRuleSet', keyArgs] as const
}

export function getActionSetActiveReceiptRuleSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetActiveReceiptRuleSetQueryKey>
  >({
    queryKey: getActionSetActiveReceiptRuleSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetActiveReceiptRuleSet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionSetActiveReceiptRuleSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetActiveReceiptRuleSetQueryKey>
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
      ...getActionSetActiveReceiptRuleSetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionSetActiveReceiptRuleSetMutationKey() {
  return ['#Action=SetActiveReceiptRuleSet', '/#Action=SetActiveReceiptRuleSet', 'POST'] as const
}

export function getPostActionSetActiveReceiptRuleSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetActiveReceiptRuleSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$post']>,
    ) {
      return parseResponse(client['#Action=SetActiveReceiptRuleSet'].$post(args, options))
    },
  })
}

export function injectPostActionSetActiveReceiptRuleSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$post']>,
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
    const mutationDefaults = getPostActionSetActiveReceiptRuleSetMutationOptions<
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

export function getActionSetIdentityDkimEnabledQueryKey(
  args: InferRequestType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetIdentityDkimEnabled', '/#Action=SetIdentityDkimEnabled', keyArgs] as const
}

export function getActionSetIdentityDkimEnabledQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetIdentityDkimEnabledQueryKey>
  >({
    queryKey: getActionSetIdentityDkimEnabledQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetIdentityDkimEnabled'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionSetIdentityDkimEnabled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetIdentityDkimEnabledQueryKey>
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
      ...getActionSetIdentityDkimEnabledQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionSetIdentityDkimEnabledMutationKey() {
  return ['#Action=SetIdentityDkimEnabled', '/#Action=SetIdentityDkimEnabled', 'POST'] as const
}

export function getPostActionSetIdentityDkimEnabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetIdentityDkimEnabled']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetIdentityDkimEnabled']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetIdentityDkimEnabledMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SetIdentityDkimEnabled']['$post']>,
    ) {
      return parseResponse(client['#Action=SetIdentityDkimEnabled'].$post(args, options))
    },
  })
}

export function injectPostActionSetIdentityDkimEnabled<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetIdentityDkimEnabled']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SetIdentityDkimEnabled']['$post']>,
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
    const mutationDefaults = getPostActionSetIdentityDkimEnabledMutationOptions<
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

export function getActionSetIdentityFeedbackForwardingEnabledQueryKey(
  args: InferRequestType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SetIdentityFeedbackForwardingEnabled',
    '/#Action=SetIdentityFeedbackForwardingEnabled',
    keyArgs,
  ] as const
}

export function getActionSetIdentityFeedbackForwardingEnabledQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetIdentityFeedbackForwardingEnabledQueryKey>
  >({
    queryKey: getActionSetIdentityFeedbackForwardingEnabledQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetIdentityFeedbackForwardingEnabled'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionSetIdentityFeedbackForwardingEnabled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetIdentityFeedbackForwardingEnabledQueryKey>
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
      ...getActionSetIdentityFeedbackForwardingEnabledQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionSetIdentityFeedbackForwardingEnabledMutationKey() {
  return [
    '#Action=SetIdentityFeedbackForwardingEnabled',
    '/#Action=SetIdentityFeedbackForwardingEnabled',
    'POST',
  ] as const
}

export function getPostActionSetIdentityFeedbackForwardingEnabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetIdentityFeedbackForwardingEnabledMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=SetIdentityFeedbackForwardingEnabled'].$post(args, options),
      )
    },
  })
}

export function injectPostActionSetIdentityFeedbackForwardingEnabled<
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
                ReturnType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$post']>,
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
    const mutationDefaults = getPostActionSetIdentityFeedbackForwardingEnabledMutationOptions<
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

export function getActionSetIdentityHeadersInNotificationsEnabledQueryKey(
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

export function getActionSetIdentityHeadersInNotificationsEnabledQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetIdentityHeadersInNotificationsEnabledQueryKey>
  >({
    queryKey: getActionSetIdentityHeadersInNotificationsEnabledQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetIdentityHeadersInNotificationsEnabled'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionSetIdentityHeadersInNotificationsEnabled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getActionSetIdentityHeadersInNotificationsEnabledQueryKey>
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
      ...getActionSetIdentityHeadersInNotificationsEnabledQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionSetIdentityHeadersInNotificationsEnabledMutationKey() {
  return [
    '#Action=SetIdentityHeadersInNotificationsEnabled',
    '/#Action=SetIdentityHeadersInNotificationsEnabled',
    'POST',
  ] as const
}

export function getPostActionSetIdentityHeadersInNotificationsEnabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetIdentityHeadersInNotificationsEnabledMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=SetIdentityHeadersInNotificationsEnabled'].$post(args, options),
      )
    },
  })
}

export function injectPostActionSetIdentityHeadersInNotificationsEnabled<
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
                  (typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$post']
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
    const mutationDefaults = getPostActionSetIdentityHeadersInNotificationsEnabledMutationOptions<
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

export function getActionSetIdentityMailFromDomainQueryKey(
  args: InferRequestType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SetIdentityMailFromDomain',
    '/#Action=SetIdentityMailFromDomain',
    keyArgs,
  ] as const
}

export function getActionSetIdentityMailFromDomainQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetIdentityMailFromDomainQueryKey>
  >({
    queryKey: getActionSetIdentityMailFromDomainQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetIdentityMailFromDomain'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionSetIdentityMailFromDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetIdentityMailFromDomainQueryKey>
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
      ...getActionSetIdentityMailFromDomainQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionSetIdentityMailFromDomainMutationKey() {
  return [
    '#Action=SetIdentityMailFromDomain',
    '/#Action=SetIdentityMailFromDomain',
    'POST',
  ] as const
}

export function getPostActionSetIdentityMailFromDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetIdentityMailFromDomain']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetIdentityMailFromDomain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetIdentityMailFromDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SetIdentityMailFromDomain']['$post']>,
    ) {
      return parseResponse(client['#Action=SetIdentityMailFromDomain'].$post(args, options))
    },
  })
}

export function injectPostActionSetIdentityMailFromDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetIdentityMailFromDomain']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SetIdentityMailFromDomain']['$post']>,
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
    const mutationDefaults = getPostActionSetIdentityMailFromDomainMutationOptions<
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

export function getActionSetIdentityNotificationTopicQueryKey(
  args: InferRequestType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SetIdentityNotificationTopic',
    '/#Action=SetIdentityNotificationTopic',
    keyArgs,
  ] as const
}

export function getActionSetIdentityNotificationTopicQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetIdentityNotificationTopicQueryKey>
  >({
    queryKey: getActionSetIdentityNotificationTopicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetIdentityNotificationTopic'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionSetIdentityNotificationTopic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetIdentityNotificationTopicQueryKey>
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
      ...getActionSetIdentityNotificationTopicQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionSetIdentityNotificationTopicMutationKey() {
  return [
    '#Action=SetIdentityNotificationTopic',
    '/#Action=SetIdentityNotificationTopic',
    'POST',
  ] as const
}

export function getPostActionSetIdentityNotificationTopicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetIdentityNotificationTopic']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetIdentityNotificationTopic']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetIdentityNotificationTopicMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SetIdentityNotificationTopic']['$post']>,
    ) {
      return parseResponse(client['#Action=SetIdentityNotificationTopic'].$post(args, options))
    },
  })
}

export function injectPostActionSetIdentityNotificationTopic<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetIdentityNotificationTopic']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SetIdentityNotificationTopic']['$post']>,
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
    const mutationDefaults = getPostActionSetIdentityNotificationTopicMutationOptions<
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

export function getActionSetReceiptRulePositionQueryKey(
  args: InferRequestType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetReceiptRulePosition', '/#Action=SetReceiptRulePosition', keyArgs] as const
}

export function getActionSetReceiptRulePositionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetReceiptRulePositionQueryKey>
  >({
    queryKey: getActionSetReceiptRulePositionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetReceiptRulePosition'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionSetReceiptRulePosition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetReceiptRulePositionQueryKey>
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
      ...getActionSetReceiptRulePositionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionSetReceiptRulePositionMutationKey() {
  return ['#Action=SetReceiptRulePosition', '/#Action=SetReceiptRulePosition', 'POST'] as const
}

export function getPostActionSetReceiptRulePositionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetReceiptRulePosition']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetReceiptRulePosition']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetReceiptRulePositionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SetReceiptRulePosition']['$post']>,
    ) {
      return parseResponse(client['#Action=SetReceiptRulePosition'].$post(args, options))
    },
  })
}

export function injectPostActionSetReceiptRulePosition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetReceiptRulePosition']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SetReceiptRulePosition']['$post']>,
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
    const mutationDefaults = getPostActionSetReceiptRulePositionMutationOptions<
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

export function getActionTestRenderTemplateQueryKey(
  args: InferRequestType<(typeof client)['#Action=TestRenderTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=TestRenderTemplate', '/#Action=TestRenderTemplate', keyArgs] as const
}

export function getActionTestRenderTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=TestRenderTemplate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=TestRenderTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=TestRenderTemplate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionTestRenderTemplateQueryKey>
  >({
    queryKey: getActionTestRenderTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=TestRenderTemplate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionTestRenderTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=TestRenderTemplate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=TestRenderTemplate']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=TestRenderTemplate']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionTestRenderTemplateQueryKey>
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
      ...getActionTestRenderTemplateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionTestRenderTemplateMutationKey() {
  return ['#Action=TestRenderTemplate', '/#Action=TestRenderTemplate', 'POST'] as const
}

export function getPostActionTestRenderTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=TestRenderTemplate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=TestRenderTemplate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionTestRenderTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=TestRenderTemplate']['$post']>,
    ) {
      return parseResponse(client['#Action=TestRenderTemplate'].$post(args, options))
    },
  })
}

export function injectPostActionTestRenderTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=TestRenderTemplate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=TestRenderTemplate']['$post']>,
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
    const mutationDefaults = getPostActionTestRenderTemplateMutationOptions<
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

export function getActionUpdateAccountSendingEnabledQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateAccountSendingEnabled',
    '/#Action=UpdateAccountSendingEnabled',
    keyArgs,
  ] as const
}

export function getActionUpdateAccountSendingEnabledQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateAccountSendingEnabledQueryKey>
  >({
    queryKey: getActionUpdateAccountSendingEnabledQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateAccountSendingEnabled'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionUpdateAccountSendingEnabled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUpdateAccountSendingEnabledQueryKey>
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
      ...getActionUpdateAccountSendingEnabledQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionUpdateAccountSendingEnabledMutationKey() {
  return [
    '#Action=UpdateAccountSendingEnabled',
    '/#Action=UpdateAccountSendingEnabled',
    'POST',
  ] as const
}

export function getPostActionUpdateAccountSendingEnabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateAccountSendingEnabledMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateAccountSendingEnabled'].$post(args, options))
    },
  })
}

export function injectPostActionUpdateAccountSendingEnabled<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$post']>,
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
    const mutationDefaults = getPostActionUpdateAccountSendingEnabledMutationOptions<
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

export function getActionUpdateConfigurationSetEventDestinationQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateConfigurationSetEventDestination',
    '/#Action=UpdateConfigurationSetEventDestination',
    keyArgs,
  ] as const
}

export function getActionUpdateConfigurationSetEventDestinationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateConfigurationSetEventDestinationQueryKey>
  >({
    queryKey: getActionUpdateConfigurationSetEventDestinationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateConfigurationSetEventDestination'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionUpdateConfigurationSetEventDestination<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUpdateConfigurationSetEventDestinationQueryKey>
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
      ...getActionUpdateConfigurationSetEventDestinationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionUpdateConfigurationSetEventDestinationMutationKey() {
  return [
    '#Action=UpdateConfigurationSetEventDestination',
    '/#Action=UpdateConfigurationSetEventDestination',
    'POST',
  ] as const
}

export function getPostActionUpdateConfigurationSetEventDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=UpdateConfigurationSetEventDestination']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateConfigurationSetEventDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=UpdateConfigurationSetEventDestination']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=UpdateConfigurationSetEventDestination'].$post(args, options),
      )
    },
  })
}

export function injectPostActionUpdateConfigurationSetEventDestination<
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
                  (typeof client)['#Action=UpdateConfigurationSetEventDestination']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#Action=UpdateConfigurationSetEventDestination']['$post']
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
    const mutationDefaults = getPostActionUpdateConfigurationSetEventDestinationMutationOptions<
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

export function getActionUpdateConfigurationSetReputationMetricsEnabledQueryKey(
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

export function getActionUpdateConfigurationSetReputationMetricsEnabledQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getActionUpdateConfigurationSetReputationMetricsEnabledQueryKey>
  >({
    queryKey: getActionUpdateConfigurationSetReputationMetricsEnabledQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateConfigurationSetReputationMetricsEnabled'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionUpdateConfigurationSetReputationMetricsEnabled<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getActionUpdateConfigurationSetReputationMetricsEnabledQueryKey>
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
      ...getActionUpdateConfigurationSetReputationMetricsEnabledQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionUpdateConfigurationSetReputationMetricsEnabledMutationKey() {
  return [
    '#Action=UpdateConfigurationSetReputationMetricsEnabled',
    '/#Action=UpdateConfigurationSetReputationMetricsEnabled',
    'POST',
  ] as const
}

export function getPostActionUpdateConfigurationSetReputationMetricsEnabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateConfigurationSetReputationMetricsEnabledMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=UpdateConfigurationSetReputationMetricsEnabled'].$post(args, options),
      )
    },
  })
}

export function injectPostActionUpdateConfigurationSetReputationMetricsEnabled<
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
                  (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$post']
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
      getPostActionUpdateConfigurationSetReputationMetricsEnabledMutationOptions<
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

export function getActionUpdateConfigurationSetSendingEnabledQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateConfigurationSetSendingEnabled',
    '/#Action=UpdateConfigurationSetSendingEnabled',
    keyArgs,
  ] as const
}

export function getActionUpdateConfigurationSetSendingEnabledQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateConfigurationSetSendingEnabledQueryKey>
  >({
    queryKey: getActionUpdateConfigurationSetSendingEnabledQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateConfigurationSetSendingEnabled'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionUpdateConfigurationSetSendingEnabled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUpdateConfigurationSetSendingEnabledQueryKey>
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
      ...getActionUpdateConfigurationSetSendingEnabledQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionUpdateConfigurationSetSendingEnabledMutationKey() {
  return [
    '#Action=UpdateConfigurationSetSendingEnabled',
    '/#Action=UpdateConfigurationSetSendingEnabled',
    'POST',
  ] as const
}

export function getPostActionUpdateConfigurationSetSendingEnabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateConfigurationSetSendingEnabledMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=UpdateConfigurationSetSendingEnabled'].$post(args, options),
      )
    },
  })
}

export function injectPostActionUpdateConfigurationSetSendingEnabled<
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
                ReturnType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$post']>,
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
    const mutationDefaults = getPostActionUpdateConfigurationSetSendingEnabledMutationOptions<
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

export function getActionUpdateConfigurationSetTrackingOptionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateConfigurationSetTrackingOptions',
    '/#Action=UpdateConfigurationSetTrackingOptions',
    keyArgs,
  ] as const
}

export function getActionUpdateConfigurationSetTrackingOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateConfigurationSetTrackingOptionsQueryKey>
  >({
    queryKey: getActionUpdateConfigurationSetTrackingOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateConfigurationSetTrackingOptions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionUpdateConfigurationSetTrackingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUpdateConfigurationSetTrackingOptionsQueryKey>
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
      ...getActionUpdateConfigurationSetTrackingOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionUpdateConfigurationSetTrackingOptionsMutationKey() {
  return [
    '#Action=UpdateConfigurationSetTrackingOptions',
    '/#Action=UpdateConfigurationSetTrackingOptions',
    'POST',
  ] as const
}

export function getPostActionUpdateConfigurationSetTrackingOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateConfigurationSetTrackingOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=UpdateConfigurationSetTrackingOptions'].$post(args, options),
      )
    },
  })
}

export function injectPostActionUpdateConfigurationSetTrackingOptions<
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
                  (typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$post']>,
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
    const mutationDefaults = getPostActionUpdateConfigurationSetTrackingOptionsMutationOptions<
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

export function getActionUpdateCustomVerificationEmailTemplateQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateCustomVerificationEmailTemplate',
    '/#Action=UpdateCustomVerificationEmailTemplate',
    keyArgs,
  ] as const
}

export function getActionUpdateCustomVerificationEmailTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateCustomVerificationEmailTemplateQueryKey>
  >({
    queryKey: getActionUpdateCustomVerificationEmailTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateCustomVerificationEmailTemplate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionUpdateCustomVerificationEmailTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUpdateCustomVerificationEmailTemplateQueryKey>
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
      ...getActionUpdateCustomVerificationEmailTemplateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionUpdateCustomVerificationEmailTemplateMutationKey() {
  return [
    '#Action=UpdateCustomVerificationEmailTemplate',
    '/#Action=UpdateCustomVerificationEmailTemplate',
    'POST',
  ] as const
}

export function getPostActionUpdateCustomVerificationEmailTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateCustomVerificationEmailTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=UpdateCustomVerificationEmailTemplate'].$post(args, options),
      )
    },
  })
}

export function injectPostActionUpdateCustomVerificationEmailTemplate<
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
                  (typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$post']>,
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
    const mutationDefaults = getPostActionUpdateCustomVerificationEmailTemplateMutationOptions<
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

export function getActionUpdateReceiptRuleQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateReceiptRule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateReceiptRule', '/#Action=UpdateReceiptRule', keyArgs] as const
}

export function getActionUpdateReceiptRuleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateReceiptRule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateReceiptRule']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateReceiptRule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateReceiptRuleQueryKey>
  >({
    queryKey: getActionUpdateReceiptRuleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateReceiptRule'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionUpdateReceiptRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateReceiptRule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=UpdateReceiptRule']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateReceiptRule']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUpdateReceiptRuleQueryKey>
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
      ...getActionUpdateReceiptRuleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionUpdateReceiptRuleMutationKey() {
  return ['#Action=UpdateReceiptRule', '/#Action=UpdateReceiptRule', 'POST'] as const
}

export function getPostActionUpdateReceiptRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateReceiptRule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateReceiptRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateReceiptRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateReceiptRule']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateReceiptRule'].$post(args, options))
    },
  })
}

export function injectPostActionUpdateReceiptRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateReceiptRule']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=UpdateReceiptRule']['$post']>,
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
    const mutationDefaults = getPostActionUpdateReceiptRuleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionUpdateTemplateQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateTemplate', '/#Action=UpdateTemplate', keyArgs] as const
}

export function getActionUpdateTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateTemplate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateTemplate']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateTemplateQueryKey>
  >({
    queryKey: getActionUpdateTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateTemplate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionUpdateTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateTemplate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=UpdateTemplate']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateTemplate']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUpdateTemplateQueryKey>
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
      ...getActionUpdateTemplateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionUpdateTemplateMutationKey() {
  return ['#Action=UpdateTemplate', '/#Action=UpdateTemplate', 'POST'] as const
}

export function getPostActionUpdateTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateTemplate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateTemplate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateTemplateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=UpdateTemplate']['$post']>) {
      return parseResponse(client['#Action=UpdateTemplate'].$post(args, options))
    },
  })
}

export function injectPostActionUpdateTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateTemplate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=UpdateTemplate']['$post']>,
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
    const mutationDefaults = getPostActionUpdateTemplateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionVerifyDomainDkimQueryKey(
  args: InferRequestType<(typeof client)['#Action=VerifyDomainDkim']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=VerifyDomainDkim', '/#Action=VerifyDomainDkim', keyArgs] as const
}

export function getActionVerifyDomainDkimQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=VerifyDomainDkim']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=VerifyDomainDkim']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=VerifyDomainDkim']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionVerifyDomainDkimQueryKey>
  >({
    queryKey: getActionVerifyDomainDkimQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=VerifyDomainDkim'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionVerifyDomainDkim<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=VerifyDomainDkim']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=VerifyDomainDkim']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=VerifyDomainDkim']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionVerifyDomainDkimQueryKey>
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
      ...getActionVerifyDomainDkimQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionVerifyDomainDkimMutationKey() {
  return ['#Action=VerifyDomainDkim', '/#Action=VerifyDomainDkim', 'POST'] as const
}

export function getPostActionVerifyDomainDkimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=VerifyDomainDkim']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=VerifyDomainDkim']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionVerifyDomainDkimMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=VerifyDomainDkim']['$post']>) {
      return parseResponse(client['#Action=VerifyDomainDkim'].$post(args, options))
    },
  })
}

export function injectPostActionVerifyDomainDkim<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=VerifyDomainDkim']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=VerifyDomainDkim']['$post']>,
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
    const mutationDefaults = getPostActionVerifyDomainDkimMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionVerifyDomainIdentityQueryKey(
  args: InferRequestType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=VerifyDomainIdentity', '/#Action=VerifyDomainIdentity', keyArgs] as const
}

export function getActionVerifyDomainIdentityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionVerifyDomainIdentityQueryKey>
  >({
    queryKey: getActionVerifyDomainIdentityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=VerifyDomainIdentity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionVerifyDomainIdentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionVerifyDomainIdentityQueryKey>
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
      ...getActionVerifyDomainIdentityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionVerifyDomainIdentityMutationKey() {
  return ['#Action=VerifyDomainIdentity', '/#Action=VerifyDomainIdentity', 'POST'] as const
}

export function getPostActionVerifyDomainIdentityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=VerifyDomainIdentity']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=VerifyDomainIdentity']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionVerifyDomainIdentityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=VerifyDomainIdentity']['$post']>,
    ) {
      return parseResponse(client['#Action=VerifyDomainIdentity'].$post(args, options))
    },
  })
}

export function injectPostActionVerifyDomainIdentity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=VerifyDomainIdentity']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=VerifyDomainIdentity']['$post']>,
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
    const mutationDefaults = getPostActionVerifyDomainIdentityMutationOptions<
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

export function getActionVerifyEmailAddressQueryKey(
  args: InferRequestType<(typeof client)['#Action=VerifyEmailAddress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=VerifyEmailAddress', '/#Action=VerifyEmailAddress', keyArgs] as const
}

export function getActionVerifyEmailAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=VerifyEmailAddress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=VerifyEmailAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=VerifyEmailAddress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionVerifyEmailAddressQueryKey>
  >({
    queryKey: getActionVerifyEmailAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=VerifyEmailAddress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionVerifyEmailAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=VerifyEmailAddress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=VerifyEmailAddress']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=VerifyEmailAddress']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionVerifyEmailAddressQueryKey>
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
      ...getActionVerifyEmailAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionVerifyEmailAddressMutationKey() {
  return ['#Action=VerifyEmailAddress', '/#Action=VerifyEmailAddress', 'POST'] as const
}

export function getPostActionVerifyEmailAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=VerifyEmailAddress']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=VerifyEmailAddress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionVerifyEmailAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=VerifyEmailAddress']['$post']>,
    ) {
      return parseResponse(client['#Action=VerifyEmailAddress'].$post(args, options))
    },
  })
}

export function injectPostActionVerifyEmailAddress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=VerifyEmailAddress']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=VerifyEmailAddress']['$post']>,
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
    const mutationDefaults = getPostActionVerifyEmailAddressMutationOptions<
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

export function getActionVerifyEmailIdentityQueryKey(
  args: InferRequestType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=VerifyEmailIdentity', '/#Action=VerifyEmailIdentity', keyArgs] as const
}

export function getActionVerifyEmailIdentityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionVerifyEmailIdentityQueryKey>
  >({
    queryKey: getActionVerifyEmailIdentityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=VerifyEmailIdentity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionVerifyEmailIdentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionVerifyEmailIdentityQueryKey>
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
      ...getActionVerifyEmailIdentityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionVerifyEmailIdentityMutationKey() {
  return ['#Action=VerifyEmailIdentity', '/#Action=VerifyEmailIdentity', 'POST'] as const
}

export function getPostActionVerifyEmailIdentityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=VerifyEmailIdentity']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=VerifyEmailIdentity']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionVerifyEmailIdentityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=VerifyEmailIdentity']['$post']>,
    ) {
      return parseResponse(client['#Action=VerifyEmailIdentity'].$post(args, options))
    },
  })
}

export function injectPostActionVerifyEmailIdentity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=VerifyEmailIdentity']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=VerifyEmailIdentity']['$post']>,
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
    const mutationDefaults = getPostActionVerifyEmailIdentityMutationOptions<
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
