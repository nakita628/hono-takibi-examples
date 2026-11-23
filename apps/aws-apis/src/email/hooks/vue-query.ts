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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CloneReceiptRuleSet', '/#Action=CloneReceiptRuleSet', keyArgs] as const
}

export function getActionCloneReceiptRuleSetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCloneReceiptRuleSetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CloneReceiptRuleSet'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCloneReceiptRuleSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCloneReceiptRuleSetQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCloneReceiptRuleSetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCloneReceiptRuleSetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CloneReceiptRuleSet'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionCloneReceiptRuleSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCloneReceiptRuleSetMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateConfigurationSetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateConfigurationSet']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateConfigurationSet', '/#Action=CreateConfigurationSet', keyArgs] as const
}

export function getActionCreateConfigurationSetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateConfigurationSet']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateConfigurationSetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateConfigurationSet'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateConfigurationSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateConfigurationSet']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationSet']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationSet']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateConfigurationSetQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateConfigurationSetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateConfigurationSetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateConfigurationSet'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionCreateConfigurationSet<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationSet']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateConfigurationSet']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateConfigurationSetMutationOptions<
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

export function getActionCreateConfigurationSetEventDestinationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CreateConfigurationSetEventDestination',
    '/#Action=CreateConfigurationSetEventDestination',
    keyArgs,
  ] as const
}

export function getActionCreateConfigurationSetEventDestinationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateConfigurationSetEventDestinationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateConfigurationSetEventDestination'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateConfigurationSetEventDestination<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']>
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
                    (typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']
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
                    (typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionCreateConfigurationSetEventDestinationQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateConfigurationSetEventDestinationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateConfigurationSetEventDestinationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateConfigurationSetEventDestination'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionCreateConfigurationSetEventDestination<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateConfigurationSetEventDestinationMutationOptions<
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

export function getActionCreateConfigurationSetTrackingOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CreateConfigurationSetTrackingOptions',
    '/#Action=CreateConfigurationSetTrackingOptions',
    keyArgs,
  ] as const
}

export function getActionCreateConfigurationSetTrackingOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateConfigurationSetTrackingOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateConfigurationSetTrackingOptions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateConfigurationSetTrackingOptions<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']>
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
                    (typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']
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
                    (typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionCreateConfigurationSetTrackingOptionsQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateConfigurationSetTrackingOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateConfigurationSetTrackingOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateConfigurationSetTrackingOptions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionCreateConfigurationSetTrackingOptions<
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
                    (typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$post']
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
  const mutationDefaults = getPostActionCreateConfigurationSetTrackingOptionsMutationOptions<
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

export function getActionCreateCustomVerificationEmailTemplateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CreateCustomVerificationEmailTemplate',
    '/#Action=CreateCustomVerificationEmailTemplate',
    keyArgs,
  ] as const
}

export function getActionCreateCustomVerificationEmailTemplateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateCustomVerificationEmailTemplateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateCustomVerificationEmailTemplate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateCustomVerificationEmailTemplate<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']>
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
                    (typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']
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
                    (typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionCreateCustomVerificationEmailTemplateQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateCustomVerificationEmailTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateCustomVerificationEmailTemplateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateCustomVerificationEmailTemplate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionCreateCustomVerificationEmailTemplate<
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
                    (typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$post']
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
  const mutationDefaults = getPostActionCreateCustomVerificationEmailTemplateMutationOptions<
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

export function getActionCreateReceiptFilterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateReceiptFilter']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateReceiptFilter', '/#Action=CreateReceiptFilter', keyArgs] as const
}

export function getActionCreateReceiptFilterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateReceiptFilter']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateReceiptFilterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateReceiptFilter'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateReceiptFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateReceiptFilter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateReceiptFilter']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateReceiptFilter']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateReceiptFilter']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateReceiptFilterQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=CreateReceiptFilter']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateReceiptFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateReceiptFilterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateReceiptFilter'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionCreateReceiptFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateReceiptFilterMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateReceiptRuleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateReceiptRule']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateReceiptRule', '/#Action=CreateReceiptRule', keyArgs] as const
}

export function getActionCreateReceiptRuleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateReceiptRule']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateReceiptRuleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateReceiptRule'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateReceiptRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateReceiptRule']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRule']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRule']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateReceiptRuleQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateReceiptRuleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateReceiptRuleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateReceiptRule'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionCreateReceiptRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateReceiptRuleMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateReceiptRuleSetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateReceiptRuleSet', '/#Action=CreateReceiptRuleSet', keyArgs] as const
}

export function getActionCreateReceiptRuleSetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateReceiptRuleSetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateReceiptRuleSet'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateReceiptRuleSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateReceiptRuleSetQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateReceiptRuleSetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateReceiptRuleSetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateReceiptRuleSet'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionCreateReceiptRuleSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateReceiptRuleSetMutationOptions<
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

export function getActionCreateTemplateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateTemplate']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateTemplate', '/#Action=CreateTemplate', keyArgs] as const
}

export function getActionCreateTemplateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateTemplate']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateTemplateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateTemplate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTemplate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateTemplate']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateTemplate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateTemplate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateTemplateQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTemplate']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateTemplateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateTemplate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionCreateTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateTemplateMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteConfigurationSetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteConfigurationSet', '/#Action=DeleteConfigurationSet', keyArgs] as const
}

export function getActionDeleteConfigurationSetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteConfigurationSetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteConfigurationSet'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteConfigurationSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteConfigurationSetQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteConfigurationSetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteConfigurationSetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteConfigurationSet'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteConfigurationSet<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationSet']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteConfigurationSet']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteConfigurationSetMutationOptions<
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

export function getActionDeleteConfigurationSetEventDestinationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteConfigurationSetEventDestination',
    '/#Action=DeleteConfigurationSetEventDestination',
    keyArgs,
  ] as const
}

export function getActionDeleteConfigurationSetEventDestinationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteConfigurationSetEventDestinationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteConfigurationSetEventDestination'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteConfigurationSetEventDestination<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']>
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
                    (typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']
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
                    (typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionDeleteConfigurationSetEventDestinationQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteConfigurationSetEventDestinationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteConfigurationSetEventDestinationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteConfigurationSetEventDestination'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteConfigurationSetEventDestination<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteConfigurationSetEventDestinationMutationOptions<
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

export function getActionDeleteConfigurationSetTrackingOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteConfigurationSetTrackingOptions',
    '/#Action=DeleteConfigurationSetTrackingOptions',
    keyArgs,
  ] as const
}

export function getActionDeleteConfigurationSetTrackingOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteConfigurationSetTrackingOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteConfigurationSetTrackingOptions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteConfigurationSetTrackingOptions<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']>
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
                    (typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']
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
                    (typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionDeleteConfigurationSetTrackingOptionsQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteConfigurationSetTrackingOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteConfigurationSetTrackingOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteConfigurationSetTrackingOptions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteConfigurationSetTrackingOptions<
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
                    (typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$post']
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
  const mutationDefaults = getPostActionDeleteConfigurationSetTrackingOptionsMutationOptions<
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

export function getActionDeleteCustomVerificationEmailTemplateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteCustomVerificationEmailTemplate',
    '/#Action=DeleteCustomVerificationEmailTemplate',
    keyArgs,
  ] as const
}

export function getActionDeleteCustomVerificationEmailTemplateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteCustomVerificationEmailTemplateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteCustomVerificationEmailTemplate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteCustomVerificationEmailTemplate<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']>
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
                    (typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']
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
                    (typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionDeleteCustomVerificationEmailTemplateQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteCustomVerificationEmailTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteCustomVerificationEmailTemplateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteCustomVerificationEmailTemplate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteCustomVerificationEmailTemplate<
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
                    (typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$post']
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
  const mutationDefaults = getPostActionDeleteCustomVerificationEmailTemplateMutationOptions<
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

export function getActionDeleteIdentityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteIdentity']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteIdentity', '/#Action=DeleteIdentity', keyArgs] as const
}

export function getActionDeleteIdentityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteIdentity']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteIdentityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteIdentity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteIdentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteIdentity']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteIdentity']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteIdentity']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteIdentity']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteIdentityQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteIdentity']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteIdentityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteIdentityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteIdentity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteIdentity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteIdentityMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteIdentityPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteIdentityPolicy', '/#Action=DeleteIdentityPolicy', keyArgs] as const
}

export function getActionDeleteIdentityPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteIdentityPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteIdentityPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteIdentityPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteIdentityPolicyQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteIdentityPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteIdentityPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteIdentityPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteIdentityPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteIdentityPolicyMutationOptions<
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

export function getActionDeleteReceiptFilterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteReceiptFilter', '/#Action=DeleteReceiptFilter', keyArgs] as const
}

export function getActionDeleteReceiptFilterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteReceiptFilterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteReceiptFilter'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteReceiptFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteReceiptFilterQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteReceiptFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteReceiptFilterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteReceiptFilter'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteReceiptFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteReceiptFilterMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteReceiptRuleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteReceiptRule']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteReceiptRule', '/#Action=DeleteReceiptRule', keyArgs] as const
}

export function getActionDeleteReceiptRuleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteReceiptRule']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteReceiptRuleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteReceiptRule'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteReceiptRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteReceiptRule']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRule']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRule']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteReceiptRuleQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteReceiptRuleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteReceiptRuleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteReceiptRule'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteReceiptRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteReceiptRuleMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteReceiptRuleSetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteReceiptRuleSet', '/#Action=DeleteReceiptRuleSet', keyArgs] as const
}

export function getActionDeleteReceiptRuleSetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteReceiptRuleSetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteReceiptRuleSet'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteReceiptRuleSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteReceiptRuleSetQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteReceiptRuleSetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteReceiptRuleSetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteReceiptRuleSet'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteReceiptRuleSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteReceiptRuleSetMutationOptions<
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

export function getActionDeleteTemplateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteTemplate']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteTemplate', '/#Action=DeleteTemplate', keyArgs] as const
}

export function getActionDeleteTemplateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteTemplate']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteTemplateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteTemplate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTemplate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteTemplate']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteTemplate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteTemplate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteTemplateQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTemplate']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteTemplateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteTemplate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteTemplateMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteVerifiedEmailAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteVerifiedEmailAddress',
    '/#Action=DeleteVerifiedEmailAddress',
    keyArgs,
  ] as const
}

export function getActionDeleteVerifiedEmailAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteVerifiedEmailAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteVerifiedEmailAddress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteVerifiedEmailAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteVerifiedEmailAddressQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteVerifiedEmailAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteVerifiedEmailAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteVerifiedEmailAddress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteVerifiedEmailAddress<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteVerifiedEmailAddressMutationOptions<
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

export function getActionDescribeActiveReceiptRuleSetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeActiveReceiptRuleSet',
    '/#Action=DescribeActiveReceiptRuleSet',
    keyArgs,
  ] as const
}

export function getActionDescribeActiveReceiptRuleSetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeActiveReceiptRuleSetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeActiveReceiptRuleSet'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeActiveReceiptRuleSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeActiveReceiptRuleSetQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeActiveReceiptRuleSetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeActiveReceiptRuleSetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeActiveReceiptRuleSet'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeActiveReceiptRuleSet<
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
                  ReturnType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeActiveReceiptRuleSetMutationOptions<
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

export function getActionDescribeConfigurationSetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeConfigurationSet', '/#Action=DescribeConfigurationSet', keyArgs] as const
}

export function getActionDescribeConfigurationSetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeConfigurationSetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeConfigurationSet'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeConfigurationSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeConfigurationSetQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeConfigurationSetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeConfigurationSetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeConfigurationSet'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeConfigurationSet<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSet']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeConfigurationSet']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeConfigurationSetMutationOptions<
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

export function getActionDescribeReceiptRuleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeReceiptRule']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeReceiptRule', '/#Action=DescribeReceiptRule', keyArgs] as const
}

export function getActionDescribeReceiptRuleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeReceiptRule']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeReceiptRuleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeReceiptRule'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeReceiptRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeReceiptRule']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRule']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRule']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeReceiptRuleQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeReceiptRuleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeReceiptRuleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeReceiptRule'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeReceiptRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeReceiptRuleMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeReceiptRuleSetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeReceiptRuleSet', '/#Action=DescribeReceiptRuleSet', keyArgs] as const
}

export function getActionDescribeReceiptRuleSetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeReceiptRuleSetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeReceiptRuleSet'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeReceiptRuleSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeReceiptRuleSetQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeReceiptRuleSetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeReceiptRuleSetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeReceiptRuleSet'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeReceiptRuleSet<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeReceiptRuleSet']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeReceiptRuleSet']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeReceiptRuleSetMutationOptions<
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

export function getActionGetAccountSendingEnabledQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetAccountSendingEnabled', '/#Action=GetAccountSendingEnabled', keyArgs] as const
}

export function getActionGetAccountSendingEnabledQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetAccountSendingEnabledQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetAccountSendingEnabled'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetAccountSendingEnabled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetAccountSendingEnabledQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetAccountSendingEnabledQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetAccountSendingEnabledQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetAccountSendingEnabled'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionGetAccountSendingEnabled<
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
                Awaited<ReturnType<(typeof client)['#Action=GetAccountSendingEnabled']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetAccountSendingEnabled']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetAccountSendingEnabledMutationOptions<
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

export function getActionGetCustomVerificationEmailTemplateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=GetCustomVerificationEmailTemplate',
    '/#Action=GetCustomVerificationEmailTemplate',
    keyArgs,
  ] as const
}

export function getActionGetCustomVerificationEmailTemplateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetCustomVerificationEmailTemplateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetCustomVerificationEmailTemplate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetCustomVerificationEmailTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionGetCustomVerificationEmailTemplateQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetCustomVerificationEmailTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetCustomVerificationEmailTemplateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetCustomVerificationEmailTemplate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionGetCustomVerificationEmailTemplate<
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
                  ReturnType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetCustomVerificationEmailTemplateMutationOptions<
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

export function getActionGetIdentityDkimAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=GetIdentityDkimAttributes',
    '/#Action=GetIdentityDkimAttributes',
    keyArgs,
  ] as const
}

export function getActionGetIdentityDkimAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetIdentityDkimAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetIdentityDkimAttributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetIdentityDkimAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetIdentityDkimAttributesQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetIdentityDkimAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetIdentityDkimAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetIdentityDkimAttributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionGetIdentityDkimAttributes<
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
                Awaited<ReturnType<(typeof client)['#Action=GetIdentityDkimAttributes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetIdentityDkimAttributes']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetIdentityDkimAttributesMutationOptions<
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

export function getActionGetIdentityMailFromDomainAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=GetIdentityMailFromDomainAttributes',
    '/#Action=GetIdentityMailFromDomainAttributes',
    keyArgs,
  ] as const
}

export function getActionGetIdentityMailFromDomainAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetIdentityMailFromDomainAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetIdentityMailFromDomainAttributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetIdentityMailFromDomainAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionGetIdentityMailFromDomainAttributesQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetIdentityMailFromDomainAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetIdentityMailFromDomainAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetIdentityMailFromDomainAttributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionGetIdentityMailFromDomainAttributes<
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
                    (typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetIdentityMailFromDomainAttributesMutationOptions<
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

export function getActionGetIdentityNotificationAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=GetIdentityNotificationAttributes',
    '/#Action=GetIdentityNotificationAttributes',
    keyArgs,
  ] as const
}

export function getActionGetIdentityNotificationAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetIdentityNotificationAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetIdentityNotificationAttributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetIdentityNotificationAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionGetIdentityNotificationAttributesQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetIdentityNotificationAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetIdentityNotificationAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetIdentityNotificationAttributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionGetIdentityNotificationAttributes<
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
                  ReturnType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetIdentityNotificationAttributesMutationOptions<
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

export function getActionGetIdentityPoliciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetIdentityPolicies']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetIdentityPolicies', '/#Action=GetIdentityPolicies', keyArgs] as const
}

export function getActionGetIdentityPoliciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetIdentityPolicies']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetIdentityPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetIdentityPolicies'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetIdentityPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetIdentityPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetIdentityPolicies']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetIdentityPolicies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetIdentityPolicies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetIdentityPoliciesQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=GetIdentityPolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetIdentityPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetIdentityPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetIdentityPolicies'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionGetIdentityPolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetIdentityPoliciesMutationOptions<TError, TOnMutateResult>(
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

export function getActionGetIdentityVerificationAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=GetIdentityVerificationAttributes',
    '/#Action=GetIdentityVerificationAttributes',
    keyArgs,
  ] as const
}

export function getActionGetIdentityVerificationAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetIdentityVerificationAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetIdentityVerificationAttributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetIdentityVerificationAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionGetIdentityVerificationAttributesQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetIdentityVerificationAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetIdentityVerificationAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetIdentityVerificationAttributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionGetIdentityVerificationAttributes<
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
                  ReturnType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetIdentityVerificationAttributesMutationOptions<
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

export function getActionGetSendQuotaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetSendQuota']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetSendQuota', '/#Action=GetSendQuota', keyArgs] as const
}

export function getActionGetSendQuotaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetSendQuota']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetSendQuotaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetSendQuota'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetSendQuota<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetSendQuota']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetSendQuota']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetSendQuota']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetSendQuota']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetSendQuotaQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetSendQuota']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetSendQuotaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetSendQuotaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetSendQuota'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionGetSendQuota<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetSendQuotaMutationOptions<TError, TOnMutateResult>(
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

export function getActionGetSendStatisticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetSendStatistics']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetSendStatistics', '/#Action=GetSendStatistics', keyArgs] as const
}

export function getActionGetSendStatisticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetSendStatistics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetSendStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetSendStatistics'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetSendStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetSendStatistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetSendStatistics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetSendStatistics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetSendStatistics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetSendStatisticsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=GetSendStatistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetSendStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetSendStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetSendStatistics'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionGetSendStatistics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetSendStatisticsMutationOptions<TError, TOnMutateResult>(
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

export function getActionGetTemplateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetTemplate']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetTemplate', '/#Action=GetTemplate', keyArgs] as const
}

export function getActionGetTemplateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetTemplate']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetTemplateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetTemplate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetTemplate']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetTemplateQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetTemplateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetTemplate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionGetTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetTemplateMutationOptions<TError, TOnMutateResult>(
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

export function getActionListConfigurationSetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListConfigurationSets']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListConfigurationSets', '/#Action=ListConfigurationSets', keyArgs] as const
}

export function getActionListConfigurationSetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListConfigurationSets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListConfigurationSetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListConfigurationSets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListConfigurationSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListConfigurationSets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListConfigurationSets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListConfigurationSets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListConfigurationSets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListConfigurationSetsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=ListConfigurationSets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListConfigurationSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListConfigurationSetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListConfigurationSets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionListConfigurationSets<
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
                Awaited<ReturnType<(typeof client)['#Action=ListConfigurationSets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListConfigurationSets']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListConfigurationSetsMutationOptions<
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

export function getActionListCustomVerificationEmailTemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ListCustomVerificationEmailTemplates',
    '/#Action=ListCustomVerificationEmailTemplates',
    keyArgs,
  ] as const
}

export function getActionListCustomVerificationEmailTemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListCustomVerificationEmailTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListCustomVerificationEmailTemplates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListCustomVerificationEmailTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']>
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
                    (typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']
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
                    (typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionListCustomVerificationEmailTemplatesQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListCustomVerificationEmailTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListCustomVerificationEmailTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListCustomVerificationEmailTemplates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionListCustomVerificationEmailTemplates<
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
                    (typeof client)['#Action=ListCustomVerificationEmailTemplates']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=ListCustomVerificationEmailTemplates']['$post']
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
  const mutationDefaults = getPostActionListCustomVerificationEmailTemplatesMutationOptions<
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

export function getActionListIdentitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListIdentities']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListIdentities', '/#Action=ListIdentities', keyArgs] as const
}

export function getActionListIdentitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListIdentities']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListIdentitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListIdentities'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListIdentities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListIdentities']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListIdentities']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListIdentities']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListIdentities']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListIdentitiesQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListIdentities']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListIdentitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListIdentitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListIdentities'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionListIdentities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListIdentitiesMutationOptions<TError, TOnMutateResult>(
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

export function getActionListIdentityPoliciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListIdentityPolicies']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListIdentityPolicies', '/#Action=ListIdentityPolicies', keyArgs] as const
}

export function getActionListIdentityPoliciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListIdentityPolicies']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListIdentityPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListIdentityPolicies'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListIdentityPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListIdentityPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListIdentityPolicies']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListIdentityPolicies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListIdentityPolicies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListIdentityPoliciesQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=ListIdentityPolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListIdentityPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListIdentityPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListIdentityPolicies'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionListIdentityPolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListIdentityPoliciesMutationOptions<
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

export function getActionListReceiptFiltersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListReceiptFilters']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListReceiptFilters', '/#Action=ListReceiptFilters', keyArgs] as const
}

export function getActionListReceiptFiltersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListReceiptFilters']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListReceiptFiltersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListReceiptFilters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListReceiptFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListReceiptFilters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListReceiptFilters']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListReceiptFilters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListReceiptFilters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListReceiptFiltersQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=ListReceiptFilters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListReceiptFiltersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListReceiptFiltersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListReceiptFilters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionListReceiptFilters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListReceiptFiltersMutationOptions<TError, TOnMutateResult>(
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

export function getActionListReceiptRuleSetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListReceiptRuleSets', '/#Action=ListReceiptRuleSets', keyArgs] as const
}

export function getActionListReceiptRuleSetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListReceiptRuleSetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListReceiptRuleSets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListReceiptRuleSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListReceiptRuleSetsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListReceiptRuleSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListReceiptRuleSetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListReceiptRuleSets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionListReceiptRuleSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListReceiptRuleSetsMutationOptions<TError, TOnMutateResult>(
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

export function getActionListTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListTemplates']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListTemplates', '/#Action=ListTemplates', keyArgs] as const
}

export function getActionListTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListTemplates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListTemplates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTemplates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListTemplates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListTemplates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListTemplates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListTemplatesQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTemplates']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListTemplates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionListTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListTemplatesMutationOptions<TError, TOnMutateResult>(
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

export function getActionListVerifiedEmailAddressesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ListVerifiedEmailAddresses',
    '/#Action=ListVerifiedEmailAddresses',
    keyArgs,
  ] as const
}

export function getActionListVerifiedEmailAddressesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListVerifiedEmailAddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListVerifiedEmailAddresses'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListVerifiedEmailAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListVerifiedEmailAddressesQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListVerifiedEmailAddressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListVerifiedEmailAddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListVerifiedEmailAddresses'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionListVerifiedEmailAddresses<
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
                Awaited<ReturnType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListVerifiedEmailAddressesMutationOptions<
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

export function getActionPutConfigurationSetDeliveryOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=PutConfigurationSetDeliveryOptions',
    '/#Action=PutConfigurationSetDeliveryOptions',
    keyArgs,
  ] as const
}

export function getActionPutConfigurationSetDeliveryOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPutConfigurationSetDeliveryOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=PutConfigurationSetDeliveryOptions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPutConfigurationSetDeliveryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionPutConfigurationSetDeliveryOptionsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutConfigurationSetDeliveryOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPutConfigurationSetDeliveryOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=PutConfigurationSetDeliveryOptions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionPutConfigurationSetDeliveryOptions<
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
                  ReturnType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutConfigurationSetDeliveryOptionsMutationOptions<
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

export function getActionPutIdentityPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutIdentityPolicy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=PutIdentityPolicy', '/#Action=PutIdentityPolicy', keyArgs] as const
}

export function getActionPutIdentityPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutIdentityPolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPutIdentityPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=PutIdentityPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPutIdentityPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutIdentityPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutIdentityPolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutIdentityPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutIdentityPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionPutIdentityPolicyQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=PutIdentityPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutIdentityPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPutIdentityPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=PutIdentityPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionPutIdentityPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutIdentityPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getActionReorderReceiptRuleSetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ReorderReceiptRuleSet', '/#Action=ReorderReceiptRuleSet', keyArgs] as const
}

export function getActionReorderReceiptRuleSetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionReorderReceiptRuleSetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ReorderReceiptRuleSet'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionReorderReceiptRuleSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionReorderReceiptRuleSetQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionReorderReceiptRuleSetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionReorderReceiptRuleSetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ReorderReceiptRuleSet'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionReorderReceiptRuleSet<
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
                Awaited<ReturnType<(typeof client)['#Action=ReorderReceiptRuleSet']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ReorderReceiptRuleSet']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionReorderReceiptRuleSetMutationOptions<
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

export function getActionSendBounceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SendBounce']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SendBounce', '/#Action=SendBounce', keyArgs] as const
}

export function getActionSendBounceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SendBounce']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSendBounceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SendBounce'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSendBounce<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendBounce']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SendBounce']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SendBounce']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SendBounce']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSendBounceQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendBounce']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSendBounceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSendBounceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SendBounce'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionSendBounce<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSendBounceMutationOptions<TError, TOnMutateResult>(
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

export function getActionSendBulkTemplatedEmailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SendBulkTemplatedEmail', '/#Action=SendBulkTemplatedEmail', keyArgs] as const
}

export function getActionSendBulkTemplatedEmailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSendBulkTemplatedEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SendBulkTemplatedEmail'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSendBulkTemplatedEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSendBulkTemplatedEmailQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSendBulkTemplatedEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSendBulkTemplatedEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SendBulkTemplatedEmail'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionSendBulkTemplatedEmail<
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
                Awaited<ReturnType<(typeof client)['#Action=SendBulkTemplatedEmail']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SendBulkTemplatedEmail']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSendBulkTemplatedEmailMutationOptions<
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

export function getActionSendCustomVerificationEmailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=SendCustomVerificationEmail',
    '/#Action=SendCustomVerificationEmail',
    keyArgs,
  ] as const
}

export function getActionSendCustomVerificationEmailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSendCustomVerificationEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SendCustomVerificationEmail'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSendCustomVerificationEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSendCustomVerificationEmailQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSendCustomVerificationEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSendCustomVerificationEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SendCustomVerificationEmail'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionSendCustomVerificationEmail<
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
                Awaited<ReturnType<(typeof client)['#Action=SendCustomVerificationEmail']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SendCustomVerificationEmail']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSendCustomVerificationEmailMutationOptions<
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

export function getActionSendEmailQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SendEmail']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SendEmail', '/#Action=SendEmail', keyArgs] as const
}

export function getActionSendEmailQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SendEmail']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSendEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SendEmail'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSendEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendEmail']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SendEmail']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SendEmail']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SendEmail']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSendEmailQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendEmail']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSendEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSendEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SendEmail'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionSendEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SendEmail']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SendEmail']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSendEmailMutationOptions<TError, TOnMutateResult>(
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

export function getActionSendRawEmailQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SendRawEmail']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SendRawEmail', '/#Action=SendRawEmail', keyArgs] as const
}

export function getActionSendRawEmailQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SendRawEmail']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSendRawEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SendRawEmail'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSendRawEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendRawEmail']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SendRawEmail']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SendRawEmail']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SendRawEmail']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSendRawEmailQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SendRawEmail']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSendRawEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSendRawEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SendRawEmail'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionSendRawEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSendRawEmailMutationOptions<TError, TOnMutateResult>(
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

export function getActionSendTemplatedEmailQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SendTemplatedEmail']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SendTemplatedEmail', '/#Action=SendTemplatedEmail', keyArgs] as const
}

export function getActionSendTemplatedEmailQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SendTemplatedEmail']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSendTemplatedEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SendTemplatedEmail'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSendTemplatedEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SendTemplatedEmail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=SendTemplatedEmail']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SendTemplatedEmail']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SendTemplatedEmail']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSendTemplatedEmailQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=SendTemplatedEmail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSendTemplatedEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSendTemplatedEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SendTemplatedEmail'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionSendTemplatedEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSendTemplatedEmailMutationOptions<TError, TOnMutateResult>(
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

export function getActionSetActiveReceiptRuleSetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SetActiveReceiptRuleSet', '/#Action=SetActiveReceiptRuleSet', keyArgs] as const
}

export function getActionSetActiveReceiptRuleSetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSetActiveReceiptRuleSetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SetActiveReceiptRuleSet'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSetActiveReceiptRuleSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSetActiveReceiptRuleSetQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetActiveReceiptRuleSetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSetActiveReceiptRuleSetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SetActiveReceiptRuleSet'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionSetActiveReceiptRuleSet<
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
                Awaited<ReturnType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSetActiveReceiptRuleSetMutationOptions<
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

export function getActionSetIdentityDkimEnabledQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SetIdentityDkimEnabled', '/#Action=SetIdentityDkimEnabled', keyArgs] as const
}

export function getActionSetIdentityDkimEnabledQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSetIdentityDkimEnabledQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SetIdentityDkimEnabled'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSetIdentityDkimEnabled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSetIdentityDkimEnabledQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetIdentityDkimEnabledQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSetIdentityDkimEnabledQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SetIdentityDkimEnabled'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionSetIdentityDkimEnabled<
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
                Awaited<ReturnType<(typeof client)['#Action=SetIdentityDkimEnabled']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SetIdentityDkimEnabled']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSetIdentityDkimEnabledMutationOptions<
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

export function getActionSetIdentityFeedbackForwardingEnabledQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=SetIdentityFeedbackForwardingEnabled',
    '/#Action=SetIdentityFeedbackForwardingEnabled',
    keyArgs,
  ] as const
}

export function getActionSetIdentityFeedbackForwardingEnabledQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSetIdentityFeedbackForwardingEnabledQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SetIdentityFeedbackForwardingEnabled'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSetIdentityFeedbackForwardingEnabled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']>
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
                    (typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']
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
                    (typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionSetIdentityFeedbackForwardingEnabledQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetIdentityFeedbackForwardingEnabledQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSetIdentityFeedbackForwardingEnabledQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SetIdentityFeedbackForwardingEnabled'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionSetIdentityFeedbackForwardingEnabled<
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
                    (typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$post']
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
  const mutationDefaults = getPostActionSetIdentityFeedbackForwardingEnabledMutationOptions<
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

export function getActionSetIdentityHeadersInNotificationsEnabledQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=SetIdentityHeadersInNotificationsEnabled',
    '/#Action=SetIdentityHeadersInNotificationsEnabled',
    keyArgs,
  ] as const
}

export function getActionSetIdentityHeadersInNotificationsEnabledQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSetIdentityHeadersInNotificationsEnabledQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SetIdentityHeadersInNotificationsEnabled'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSetIdentityHeadersInNotificationsEnabled<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$get']>
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
                    (typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$get']
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
                    (typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionSetIdentityHeadersInNotificationsEnabledQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetIdentityHeadersInNotificationsEnabledQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSetIdentityHeadersInNotificationsEnabledQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SetIdentityHeadersInNotificationsEnabled'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionSetIdentityHeadersInNotificationsEnabled<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSetIdentityHeadersInNotificationsEnabledMutationOptions<
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

export function getActionSetIdentityMailFromDomainQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=SetIdentityMailFromDomain',
    '/#Action=SetIdentityMailFromDomain',
    keyArgs,
  ] as const
}

export function getActionSetIdentityMailFromDomainQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSetIdentityMailFromDomainQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SetIdentityMailFromDomain'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSetIdentityMailFromDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSetIdentityMailFromDomainQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetIdentityMailFromDomainQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSetIdentityMailFromDomainQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SetIdentityMailFromDomain'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionSetIdentityMailFromDomain<
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
                Awaited<ReturnType<(typeof client)['#Action=SetIdentityMailFromDomain']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SetIdentityMailFromDomain']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSetIdentityMailFromDomainMutationOptions<
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

export function getActionSetIdentityNotificationTopicQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=SetIdentityNotificationTopic',
    '/#Action=SetIdentityNotificationTopic',
    keyArgs,
  ] as const
}

export function getActionSetIdentityNotificationTopicQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSetIdentityNotificationTopicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SetIdentityNotificationTopic'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSetIdentityNotificationTopic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSetIdentityNotificationTopicQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetIdentityNotificationTopicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSetIdentityNotificationTopicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SetIdentityNotificationTopic'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionSetIdentityNotificationTopic<
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
                  ReturnType<(typeof client)['#Action=SetIdentityNotificationTopic']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SetIdentityNotificationTopic']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSetIdentityNotificationTopicMutationOptions<
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

export function getActionSetReceiptRulePositionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SetReceiptRulePosition', '/#Action=SetReceiptRulePosition', keyArgs] as const
}

export function getActionSetReceiptRulePositionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSetReceiptRulePositionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SetReceiptRulePosition'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSetReceiptRulePosition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSetReceiptRulePositionQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetReceiptRulePositionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSetReceiptRulePositionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SetReceiptRulePosition'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionSetReceiptRulePosition<
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
                Awaited<ReturnType<(typeof client)['#Action=SetReceiptRulePosition']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SetReceiptRulePosition']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSetReceiptRulePositionMutationOptions<
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

export function getActionTestRenderTemplateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TestRenderTemplate']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=TestRenderTemplate', '/#Action=TestRenderTemplate', keyArgs] as const
}

export function getActionTestRenderTemplateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TestRenderTemplate']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionTestRenderTemplateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=TestRenderTemplate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionTestRenderTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=TestRenderTemplate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TestRenderTemplate']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TestRenderTemplate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TestRenderTemplate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionTestRenderTemplateQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=TestRenderTemplate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionTestRenderTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionTestRenderTemplateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=TestRenderTemplate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionTestRenderTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionTestRenderTemplateMutationOptions<TError, TOnMutateResult>(
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

export function getActionUpdateAccountSendingEnabledQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=UpdateAccountSendingEnabled',
    '/#Action=UpdateAccountSendingEnabled',
    keyArgs,
  ] as const
}

export function getActionUpdateAccountSendingEnabledQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateAccountSendingEnabledQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateAccountSendingEnabled'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateAccountSendingEnabled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateAccountSendingEnabledQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateAccountSendingEnabledQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateAccountSendingEnabledQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateAccountSendingEnabled'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionUpdateAccountSendingEnabled<
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
                Awaited<ReturnType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUpdateAccountSendingEnabledMutationOptions<
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

export function getActionUpdateConfigurationSetEventDestinationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=UpdateConfigurationSetEventDestination',
    '/#Action=UpdateConfigurationSetEventDestination',
    keyArgs,
  ] as const
}

export function getActionUpdateConfigurationSetEventDestinationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateConfigurationSetEventDestinationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateConfigurationSetEventDestination'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateConfigurationSetEventDestination<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']>
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
                    (typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']
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
                    (typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionUpdateConfigurationSetEventDestinationQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateConfigurationSetEventDestinationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateConfigurationSetEventDestinationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateConfigurationSetEventDestination'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionUpdateConfigurationSetEventDestination<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUpdateConfigurationSetEventDestinationMutationOptions<
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

export function getActionUpdateConfigurationSetReputationMetricsEnabledQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=UpdateConfigurationSetReputationMetricsEnabled',
    '/#Action=UpdateConfigurationSetReputationMetricsEnabled',
    keyArgs,
  ] as const
}

export function getActionUpdateConfigurationSetReputationMetricsEnabledQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateConfigurationSetReputationMetricsEnabledQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateConfigurationSetReputationMetricsEnabled'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateConfigurationSetReputationMetricsEnabled<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$get']
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
                    (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$get']
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
                    (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionUpdateConfigurationSetReputationMetricsEnabledQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateConfigurationSetReputationMetricsEnabledQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getActionUpdateConfigurationSetReputationMetricsEnabledQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateConfigurationSetReputationMetricsEnabled'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionUpdateConfigurationSetReputationMetricsEnabled<
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
    getPostActionUpdateConfigurationSetReputationMetricsEnabledMutationOptions<
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

export function getActionUpdateConfigurationSetSendingEnabledQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=UpdateConfigurationSetSendingEnabled',
    '/#Action=UpdateConfigurationSetSendingEnabled',
    keyArgs,
  ] as const
}

export function getActionUpdateConfigurationSetSendingEnabledQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateConfigurationSetSendingEnabledQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateConfigurationSetSendingEnabled'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateConfigurationSetSendingEnabled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']>
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
                    (typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']
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
                    (typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionUpdateConfigurationSetSendingEnabledQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateConfigurationSetSendingEnabledQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateConfigurationSetSendingEnabledQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateConfigurationSetSendingEnabled'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionUpdateConfigurationSetSendingEnabled<
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
                    (typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$post']
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
  const mutationDefaults = getPostActionUpdateConfigurationSetSendingEnabledMutationOptions<
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

export function getActionUpdateConfigurationSetTrackingOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=UpdateConfigurationSetTrackingOptions',
    '/#Action=UpdateConfigurationSetTrackingOptions',
    keyArgs,
  ] as const
}

export function getActionUpdateConfigurationSetTrackingOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateConfigurationSetTrackingOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateConfigurationSetTrackingOptions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateConfigurationSetTrackingOptions<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']>
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
                    (typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']
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
                    (typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionUpdateConfigurationSetTrackingOptionsQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateConfigurationSetTrackingOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateConfigurationSetTrackingOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateConfigurationSetTrackingOptions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionUpdateConfigurationSetTrackingOptions<
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
                    (typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$post']
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
  const mutationDefaults = getPostActionUpdateConfigurationSetTrackingOptionsMutationOptions<
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

export function getActionUpdateCustomVerificationEmailTemplateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=UpdateCustomVerificationEmailTemplate',
    '/#Action=UpdateCustomVerificationEmailTemplate',
    keyArgs,
  ] as const
}

export function getActionUpdateCustomVerificationEmailTemplateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateCustomVerificationEmailTemplateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateCustomVerificationEmailTemplate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateCustomVerificationEmailTemplate<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']>
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
                    (typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']
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
                    (typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionUpdateCustomVerificationEmailTemplateQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateCustomVerificationEmailTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateCustomVerificationEmailTemplateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateCustomVerificationEmailTemplate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionUpdateCustomVerificationEmailTemplate<
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
                    (typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$post']
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
  const mutationDefaults = getPostActionUpdateCustomVerificationEmailTemplateMutationOptions<
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

export function getActionUpdateReceiptRuleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateReceiptRule']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UpdateReceiptRule', '/#Action=UpdateReceiptRule', keyArgs] as const
}

export function getActionUpdateReceiptRuleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateReceiptRule']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateReceiptRuleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateReceiptRule'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateReceiptRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateReceiptRule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateReceiptRule']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateReceiptRule']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateReceiptRule']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateReceiptRuleQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=UpdateReceiptRule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateReceiptRuleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateReceiptRuleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateReceiptRule'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionUpdateReceiptRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUpdateReceiptRuleMutationOptions<TError, TOnMutateResult>(
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

export function getActionUpdateTemplateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateTemplate']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UpdateTemplate', '/#Action=UpdateTemplate', keyArgs] as const
}

export function getActionUpdateTemplateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateTemplate']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateTemplateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateTemplate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateTemplate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateTemplate']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateTemplate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateTemplate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateTemplateQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateTemplate']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateTemplateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateTemplate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionUpdateTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUpdateTemplateMutationOptions<TError, TOnMutateResult>(
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

export function getActionVerifyDomainDkimQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=VerifyDomainDkim']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=VerifyDomainDkim', '/#Action=VerifyDomainDkim', keyArgs] as const
}

export function getActionVerifyDomainDkimQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=VerifyDomainDkim']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionVerifyDomainDkimQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=VerifyDomainDkim'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionVerifyDomainDkim<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=VerifyDomainDkim']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=VerifyDomainDkim']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=VerifyDomainDkim']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=VerifyDomainDkim']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionVerifyDomainDkimQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=VerifyDomainDkim']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionVerifyDomainDkimQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionVerifyDomainDkimQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=VerifyDomainDkim'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionVerifyDomainDkim<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionVerifyDomainDkimMutationOptions<TError, TOnMutateResult>(
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

export function getActionVerifyDomainIdentityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=VerifyDomainIdentity', '/#Action=VerifyDomainIdentity', keyArgs] as const
}

export function getActionVerifyDomainIdentityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionVerifyDomainIdentityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=VerifyDomainIdentity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionVerifyDomainIdentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionVerifyDomainIdentityQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionVerifyDomainIdentityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionVerifyDomainIdentityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=VerifyDomainIdentity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionVerifyDomainIdentity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionVerifyDomainIdentityMutationOptions<
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

export function getActionVerifyEmailAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=VerifyEmailAddress']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=VerifyEmailAddress', '/#Action=VerifyEmailAddress', keyArgs] as const
}

export function getActionVerifyEmailAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=VerifyEmailAddress']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionVerifyEmailAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=VerifyEmailAddress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionVerifyEmailAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=VerifyEmailAddress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=VerifyEmailAddress']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=VerifyEmailAddress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=VerifyEmailAddress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionVerifyEmailAddressQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=VerifyEmailAddress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionVerifyEmailAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionVerifyEmailAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=VerifyEmailAddress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionVerifyEmailAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionVerifyEmailAddressMutationOptions<TError, TOnMutateResult>(
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

export function getActionVerifyEmailIdentityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=VerifyEmailIdentity', '/#Action=VerifyEmailIdentity', keyArgs] as const
}

export function getActionVerifyEmailIdentityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionVerifyEmailIdentityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=VerifyEmailIdentity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionVerifyEmailIdentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionVerifyEmailIdentityQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionVerifyEmailIdentityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionVerifyEmailIdentityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=VerifyEmailIdentity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionVerifyEmailIdentity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionVerifyEmailIdentityMutationOptions<TError, TOnMutateResult>(
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
