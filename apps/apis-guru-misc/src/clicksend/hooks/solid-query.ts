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

export function createAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAccountQueryKey>
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
    return { ...getAccountQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutAccountMutationKey() {
  return ['account', '/account', 'PUT'] as const
}

export function getPutAccountMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$put>>>>>,
    TError,
    InferRequestType<typeof client.account.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.$put>) {
      return parseResponse(client.account.$put(args, options))
    },
  })
}

export function createPutAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.account.$put>,
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
    const mutationDefaults = getPutAccountMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function getPutAccountVerifySendMutationKey() {
  return ['account-verify', '/account-verify/send', 'PUT'] as const
}

export function getPutAccountVerifySendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['account-verify']['send']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['account-verify']['send']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountVerifySendMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['account-verify']['send']['$put']>) {
      return parseResponse(client['account-verify'].send.$put(args, options))
    },
  })
}

export function createPutAccountVerifySend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['account-verify']['send']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['account-verify']['send']['$put']>,
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
    const mutationDefaults = getPutAccountVerifySendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutAccountVerifyVerifyActivationTokenMutationKey() {
  return ['account-verify', '/account-verify/verify/:activation_token', 'PUT'] as const
}

export function getPutAccountVerifyVerifyActivationTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['account-verify']['verify'][':activation_token']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountVerifyVerifyActivationTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['account-verify']['verify'][':activation_token']['$put']
      >,
    ) {
      return parseResponse(client['account-verify'].verify[':activation_token'].$put(args, options))
    },
  })
}

export function createPutAccountVerifyVerifyActivationToken<
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
                    (typeof client)['account-verify']['verify'][':activation_token']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['account-verify']['verify'][':activation_token']['$put']
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
    const mutationDefaults = getPutAccountVerifyVerifyActivationTokenMutationOptions<
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

export function getAccountUsageYearMonthTypeQueryKey(
  args: InferRequestType<(typeof client.account.usage)[':year'][':month'][':type']['$get']>,
) {
  return ['account', '/account/usage/:year/:month/:type', args] as const
}

export function getAccountUsageYearMonthTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.usage)[':year'][':month'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.usage)[':year'][':month'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.usage)[':year'][':month'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountUsageYearMonthTypeQueryKey>
  >({
    queryKey: getAccountUsageYearMonthTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.usage[':year'][':month'][':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountUsageYearMonthType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.usage)[':year'][':month'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.usage)[':year'][':month'][':type']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.usage)[':year'][':month'][':type']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountUsageYearMonthTypeQueryKey>
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
      ...getAccountUsageYearMonthTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAutomationsEmailReceiptQueryKey() {
  return ['automations', '/automations/email/receipt'] as const
}

export function getAutomationsEmailReceiptQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.email.receipt.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.email.receipt.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationsEmailReceiptQueryKey>
  >({
    queryKey: getAutomationsEmailReceiptQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.automations.email.receipt.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAutomationsEmailReceipt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.email.receipt.$get>>>
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
                Awaited<ReturnType<typeof client.automations.email.receipt.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAutomationsEmailReceiptQueryKey>
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
    return { ...getAutomationsEmailReceiptQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostAutomationsEmailReceiptMutationKey() {
  return ['automations', '/automations/email/receipt', 'POST'] as const
}

export function getPostAutomationsEmailReceiptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.email.receipt.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.automations.email.receipt.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAutomationsEmailReceiptMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.automations.email.receipt.$post>) {
      return parseResponse(client.automations.email.receipt.$post(args, options))
    },
  })
}

export function createPostAutomationsEmailReceipt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.automations.email.receipt.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.automations.email.receipt.$post>,
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
    const mutationDefaults = getPostAutomationsEmailReceiptMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAutomationsEmailReceiptRuleIdQueryKey(
  args: InferRequestType<(typeof client.automations.email.receipt)[':rule_id']['$get']>,
) {
  return ['automations', '/automations/email/receipt/:rule_id', args] as const
}

export function getAutomationsEmailReceiptRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automations.email.receipt)[':rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automations.email.receipt)[':rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations.email.receipt)[':rule_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationsEmailReceiptRuleIdQueryKey>
  >({
    queryKey: getAutomationsEmailReceiptRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automations.email.receipt[':rule_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAutomationsEmailReceiptRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automations.email.receipt)[':rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.automations.email.receipt)[':rule_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.automations.email.receipt)[':rule_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAutomationsEmailReceiptRuleIdQueryKey>
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
      ...getAutomationsEmailReceiptRuleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAutomationsEmailReceiptRuleIdMutationKey() {
  return ['automations', '/automations/email/receipt/:rule_id', 'PUT'] as const
}

export function getPutAutomationsEmailReceiptRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations.email.receipt)[':rule_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.automations.email.receipt)[':rule_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAutomationsEmailReceiptRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.automations.email.receipt)[':rule_id']['$put']>,
    ) {
      return parseResponse(client.automations.email.receipt[':rule_id'].$put(args, options))
    },
  })
}

export function createPutAutomationsEmailReceiptRuleId<
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
                Awaited<ReturnType<(typeof client.automations.email.receipt)[':rule_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.automations.email.receipt)[':rule_id']['$put']>,
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
    const mutationDefaults = getPutAutomationsEmailReceiptRuleIdMutationOptions<
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

export function getDeleteAutomationsEmailReceiptRuleIdMutationKey() {
  return ['automations', '/automations/email/receipt/:rule_id', 'DELETE'] as const
}

export function getDeleteAutomationsEmailReceiptRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations.email.receipt)[':rule_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.automations.email.receipt)[':rule_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAutomationsEmailReceiptRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.automations.email.receipt)[':rule_id']['$delete']>,
    ) {
      return parseResponse(client.automations.email.receipt[':rule_id'].$delete(args, options))
    },
  })
}

export function createDeleteAutomationsEmailReceiptRuleId<
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
                  ReturnType<(typeof client.automations.email.receipt)[':rule_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.automations.email.receipt)[':rule_id']['$delete']>,
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
    const mutationDefaults = getDeleteAutomationsEmailReceiptRuleIdMutationOptions<
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

export function getAutomationsFaxInboundQueryKey() {
  return ['automations', '/automations/fax/inbound'] as const
}

export function getAutomationsFaxInboundQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.inbound.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.inbound.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationsFaxInboundQueryKey>
  >({
    queryKey: getAutomationsFaxInboundQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.automations.fax.inbound.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAutomationsFaxInbound<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.inbound.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.inbound.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAutomationsFaxInboundQueryKey>
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
    return { ...getAutomationsFaxInboundQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostAutomationsFaxInboundMutationKey() {
  return ['automations', '/automations/fax/inbound', 'POST'] as const
}

export function getPostAutomationsFaxInboundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.inbound.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.automations.fax.inbound.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAutomationsFaxInboundMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.automations.fax.inbound.$post>) {
      return parseResponse(client.automations.fax.inbound.$post(args, options))
    },
  })
}

export function createPostAutomationsFaxInbound<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.inbound.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.automations.fax.inbound.$post>,
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
    const mutationDefaults = getPostAutomationsFaxInboundMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAutomationsFaxInboundInboundRuleIdQueryKey(
  args: InferRequestType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$get']>,
) {
  return ['automations', '/automations/fax/inbound/:inbound_rule_id', args] as const
}

export function getAutomationsFaxInboundInboundRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationsFaxInboundInboundRuleIdQueryKey>
  >({
    queryKey: getAutomationsFaxInboundInboundRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automations.fax.inbound[':inbound_rule_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAutomationsFaxInboundInboundRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAutomationsFaxInboundInboundRuleIdQueryKey>
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
      ...getAutomationsFaxInboundInboundRuleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAutomationsFaxInboundInboundRuleIdMutationKey() {
  return ['automations', '/automations/fax/inbound/:inbound_rule_id', 'PUT'] as const
}

export function getPutAutomationsFaxInboundInboundRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAutomationsFaxInboundInboundRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$put']>,
    ) {
      return parseResponse(client.automations.fax.inbound[':inbound_rule_id'].$put(args, options))
    },
  })
}

export function createPutAutomationsFaxInboundInboundRuleId<
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
                  ReturnType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$put']>,
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
    const mutationDefaults = getPutAutomationsFaxInboundInboundRuleIdMutationOptions<
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

export function getDeleteAutomationsFaxInboundInboundRuleIdMutationKey() {
  return ['automations', '/automations/fax/inbound/:inbound_rule_id', 'DELETE'] as const
}

export function getDeleteAutomationsFaxInboundInboundRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAutomationsFaxInboundInboundRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automations.fax.inbound)[':inbound_rule_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.automations.fax.inbound[':inbound_rule_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAutomationsFaxInboundInboundRuleId<
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
                  ReturnType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$delete']>,
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
    const mutationDefaults = getDeleteAutomationsFaxInboundInboundRuleIdMutationOptions<
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

export function getAutomationsFaxReceiptsQueryKey() {
  return ['automations', '/automations/fax/receipts'] as const
}

export function getAutomationsFaxReceiptsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.receipts.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.receipts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationsFaxReceiptsQueryKey>
  >({
    queryKey: getAutomationsFaxReceiptsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.automations.fax.receipts.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAutomationsFaxReceipts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.receipts.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.receipts.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAutomationsFaxReceiptsQueryKey>
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
    return { ...getAutomationsFaxReceiptsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostAutomationsFaxReceiptsMutationKey() {
  return ['automations', '/automations/fax/receipts', 'POST'] as const
}

export function getPostAutomationsFaxReceiptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.receipts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.automations.fax.receipts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAutomationsFaxReceiptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.automations.fax.receipts.$post>) {
      return parseResponse(client.automations.fax.receipts.$post(args, options))
    },
  })
}

export function createPostAutomationsFaxReceipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.automations.fax.receipts.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.automations.fax.receipts.$post>,
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
    const mutationDefaults = getPostAutomationsFaxReceiptsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAutomationsFaxReceiptsRuleIdQueryKey(
  args: InferRequestType<(typeof client.automations.fax.receipts)[':rule_id']['$get']>,
) {
  return ['automations', '/automations/fax/receipts/:rule_id', args] as const
}

export function getAutomationsFaxReceiptsRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automations.fax.receipts)[':rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automations.fax.receipts)[':rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations.fax.receipts)[':rule_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationsFaxReceiptsRuleIdQueryKey>
  >({
    queryKey: getAutomationsFaxReceiptsRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automations.fax.receipts[':rule_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAutomationsFaxReceiptsRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automations.fax.receipts)[':rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.automations.fax.receipts)[':rule_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.automations.fax.receipts)[':rule_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAutomationsFaxReceiptsRuleIdQueryKey>
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
      ...getAutomationsFaxReceiptsRuleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAutomationsFaxReceiptsRuleIdMutationKey() {
  return ['automations', '/automations/fax/receipts/:rule_id', 'PUT'] as const
}

export function getPutAutomationsFaxReceiptsRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations.fax.receipts)[':rule_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.automations.fax.receipts)[':rule_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAutomationsFaxReceiptsRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.automations.fax.receipts)[':rule_id']['$put']>,
    ) {
      return parseResponse(client.automations.fax.receipts[':rule_id'].$put(args, options))
    },
  })
}

export function createPutAutomationsFaxReceiptsRuleId<
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
                Awaited<ReturnType<(typeof client.automations.fax.receipts)[':rule_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.automations.fax.receipts)[':rule_id']['$put']>,
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
    const mutationDefaults = getPutAutomationsFaxReceiptsRuleIdMutationOptions<
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

export function getDeleteAutomationsFaxReceiptsRuleIdMutationKey() {
  return ['automations', '/automations/fax/receipts/:rule_id', 'DELETE'] as const
}

export function getDeleteAutomationsFaxReceiptsRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations.fax.receipts)[':rule_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.automations.fax.receipts)[':rule_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAutomationsFaxReceiptsRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.automations.fax.receipts)[':rule_id']['$delete']>,
    ) {
      return parseResponse(client.automations.fax.receipts[':rule_id'].$delete(args, options))
    },
  })
}

export function createDeleteAutomationsFaxReceiptsRuleId<
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
                Awaited<ReturnType<(typeof client.automations.fax.receipts)[':rule_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.automations.fax.receipts)[':rule_id']['$delete']>,
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
    const mutationDefaults = getDeleteAutomationsFaxReceiptsRuleIdMutationOptions<
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

export function getAutomationsSmsInboundQueryKey() {
  return ['automations', '/automations/sms/inbound'] as const
}

export function getAutomationsSmsInboundQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.inbound.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.inbound.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationsSmsInboundQueryKey>
  >({
    queryKey: getAutomationsSmsInboundQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.automations.sms.inbound.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAutomationsSmsInbound<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.inbound.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.inbound.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAutomationsSmsInboundQueryKey>
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
    return { ...getAutomationsSmsInboundQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostAutomationsSmsInboundIndexMutationKey() {
  return ['automations', '/automations/sms/inbound/', 'POST'] as const
}

export function getPostAutomationsSmsInboundIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.inbound.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.automations.sms.inbound.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAutomationsSmsInboundIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.automations.sms.inbound.index.$post>) {
      return parseResponse(client.automations.sms.inbound.index.$post(args, options))
    },
  })
}

export function createPostAutomationsSmsInboundIndex<
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
                Awaited<ReturnType<typeof client.automations.sms.inbound.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.automations.sms.inbound.index.$post>,
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
    const mutationDefaults = getPostAutomationsSmsInboundIndexMutationOptions<
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

export function getAutomationsSmsInboundInboundRuleIdQueryKey(
  args: InferRequestType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$get']>,
) {
  return ['automations', '/automations/sms/inbound/:inbound_rule_id', args] as const
}

export function getAutomationsSmsInboundInboundRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationsSmsInboundInboundRuleIdQueryKey>
  >({
    queryKey: getAutomationsSmsInboundInboundRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automations.sms.inbound[':inbound_rule_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAutomationsSmsInboundInboundRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAutomationsSmsInboundInboundRuleIdQueryKey>
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
      ...getAutomationsSmsInboundInboundRuleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAutomationsSmsInboundInboundRuleIdMutationKey() {
  return ['automations', '/automations/sms/inbound/:inbound_rule_id', 'PUT'] as const
}

export function getPutAutomationsSmsInboundInboundRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAutomationsSmsInboundInboundRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$put']>,
    ) {
      return parseResponse(client.automations.sms.inbound[':inbound_rule_id'].$put(args, options))
    },
  })
}

export function createPutAutomationsSmsInboundInboundRuleId<
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
                  ReturnType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$put']>,
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
    const mutationDefaults = getPutAutomationsSmsInboundInboundRuleIdMutationOptions<
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

export function getDeleteAutomationsSmsInboundInboundRuleIdMutationKey() {
  return ['automations', '/automations/sms/inbound/:inbound_rule_id', 'DELETE'] as const
}

export function getDeleteAutomationsSmsInboundInboundRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAutomationsSmsInboundInboundRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automations.sms.inbound)[':inbound_rule_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.automations.sms.inbound[':inbound_rule_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAutomationsSmsInboundInboundRuleId<
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
                  ReturnType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$delete']>,
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
    const mutationDefaults = getDeleteAutomationsSmsInboundInboundRuleIdMutationOptions<
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

export function getAutomationsSmsReceiptsQueryKey() {
  return ['automations', '/automations/sms/receipts'] as const
}

export function getAutomationsSmsReceiptsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.receipts.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.receipts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationsSmsReceiptsQueryKey>
  >({
    queryKey: getAutomationsSmsReceiptsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.automations.sms.receipts.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAutomationsSmsReceipts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.receipts.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.receipts.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAutomationsSmsReceiptsQueryKey>
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
    return { ...getAutomationsSmsReceiptsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostAutomationsSmsReceiptsMutationKey() {
  return ['automations', '/automations/sms/receipts', 'POST'] as const
}

export function getPostAutomationsSmsReceiptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.receipts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.automations.sms.receipts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAutomationsSmsReceiptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.automations.sms.receipts.$post>) {
      return parseResponse(client.automations.sms.receipts.$post(args, options))
    },
  })
}

export function createPostAutomationsSmsReceipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.automations.sms.receipts.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.automations.sms.receipts.$post>,
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
    const mutationDefaults = getPostAutomationsSmsReceiptsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAutomationsSmsReceiptsReceiptRuleIdQueryKey(
  args: InferRequestType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$get']>,
) {
  return ['automations', '/automations/sms/receipts/:receipt_rule_id', args] as const
}

export function getAutomationsSmsReceiptsReceiptRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationsSmsReceiptsReceiptRuleIdQueryKey>
  >({
    queryKey: getAutomationsSmsReceiptsReceiptRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automations.sms.receipts[':receipt_rule_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAutomationsSmsReceiptsReceiptRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.automations.sms.receipts)[':receipt_rule_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAutomationsSmsReceiptsReceiptRuleIdQueryKey>
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
      ...getAutomationsSmsReceiptsReceiptRuleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAutomationsSmsReceiptsReceiptRuleIdMutationKey() {
  return ['automations', '/automations/sms/receipts/:receipt_rule_id', 'PUT'] as const
}

export function getPutAutomationsSmsReceiptsReceiptRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAutomationsSmsReceiptsReceiptRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$put']>,
    ) {
      return parseResponse(client.automations.sms.receipts[':receipt_rule_id'].$put(args, options))
    },
  })
}

export function createPutAutomationsSmsReceiptsReceiptRuleId<
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
                  ReturnType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$put']>,
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
    const mutationDefaults = getPutAutomationsSmsReceiptsReceiptRuleIdMutationOptions<
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

export function getDeleteAutomationsSmsReceiptsReceiptRuleIdMutationKey() {
  return ['automations', '/automations/sms/receipts/:receipt_rule_id', 'DELETE'] as const
}

export function getDeleteAutomationsSmsReceiptsReceiptRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAutomationsSmsReceiptsReceiptRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automations.sms.receipts)[':receipt_rule_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.automations.sms.receipts[':receipt_rule_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAutomationsSmsReceiptsReceiptRuleId<
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
                    (typeof client.automations.sms.receipts)[':receipt_rule_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$delete']>,
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
    const mutationDefaults = getDeleteAutomationsSmsReceiptsReceiptRuleIdMutationOptions<
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

export function getAutomationsVoiceReceiptsQueryKey() {
  return ['automations', '/automations/voice/receipts'] as const
}

export function getAutomationsVoiceReceiptsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.voice.receipts.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.voice.receipts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationsVoiceReceiptsQueryKey>
  >({
    queryKey: getAutomationsVoiceReceiptsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.automations.voice.receipts.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAutomationsVoiceReceipts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.voice.receipts.$get>>>
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
                Awaited<ReturnType<typeof client.automations.voice.receipts.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAutomationsVoiceReceiptsQueryKey>
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
    return { ...getAutomationsVoiceReceiptsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostAutomationsVoiceReceiptsMutationKey() {
  return ['automations', '/automations/voice/receipts', 'POST'] as const
}

export function getPostAutomationsVoiceReceiptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.automations.voice.receipts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.automations.voice.receipts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAutomationsVoiceReceiptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.automations.voice.receipts.$post>) {
      return parseResponse(client.automations.voice.receipts.$post(args, options))
    },
  })
}

export function createPostAutomationsVoiceReceipts<
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
                Awaited<ReturnType<typeof client.automations.voice.receipts.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.automations.voice.receipts.$post>,
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
    const mutationDefaults = getPostAutomationsVoiceReceiptsMutationOptions<
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

export function getAutomationsVoiceReceiptsReceiptRuleIdQueryKey(
  args: InferRequestType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$get']>,
) {
  return ['automations', '/automations/voice/receipts/:receipt_rule_id', args] as const
}

export function getAutomationsVoiceReceiptsReceiptRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationsVoiceReceiptsReceiptRuleIdQueryKey>
  >({
    queryKey: getAutomationsVoiceReceiptsReceiptRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automations.voice.receipts[':receipt_rule_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAutomationsVoiceReceiptsReceiptRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.automations.voice.receipts)[':receipt_rule_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAutomationsVoiceReceiptsReceiptRuleIdQueryKey>
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
      ...getAutomationsVoiceReceiptsReceiptRuleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAutomationsVoiceReceiptsReceiptRuleIdMutationKey() {
  return ['automations', '/automations/voice/receipts/:receipt_rule_id', 'PUT'] as const
}

export function getPutAutomationsVoiceReceiptsReceiptRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAutomationsVoiceReceiptsReceiptRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automations.voice.receipts)[':receipt_rule_id']['$put']
      >,
    ) {
      return parseResponse(
        client.automations.voice.receipts[':receipt_rule_id'].$put(args, options),
      )
    },
  })
}

export function createPutAutomationsVoiceReceiptsReceiptRuleId<
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
                  ReturnType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$put']>,
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
    const mutationDefaults = getPutAutomationsVoiceReceiptsReceiptRuleIdMutationOptions<
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

export function getDeleteAutomationsVoiceReceiptsReceiptRuleIdMutationKey() {
  return ['automations', '/automations/voice/receipts/:receipt_rule_id', 'DELETE'] as const
}

export function getDeleteAutomationsVoiceReceiptsReceiptRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAutomationsVoiceReceiptsReceiptRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automations.voice.receipts)[':receipt_rule_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.automations.voice.receipts[':receipt_rule_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAutomationsVoiceReceiptsReceiptRuleId<
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
                    (typeof client.automations.voice.receipts)[':receipt_rule_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.automations.voice.receipts)[':receipt_rule_id']['$delete']
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
    const mutationDefaults = getDeleteAutomationsVoiceReceiptsReceiptRuleIdMutationOptions<
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

export function getContactSuggestionsQueryKey() {
  return ['contact-suggestions', '/contact-suggestions'] as const
}

export function getContactSuggestionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-suggestions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-suggestions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactSuggestionsQueryKey>
  >({
    queryKey: getContactSuggestionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['contact-suggestions'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContactSuggestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-suggestions']['$get']>>>
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
                Awaited<ReturnType<(typeof client)['contact-suggestions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getContactSuggestionsQueryKey>
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
    return { ...getContactSuggestionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCountriesQueryKey() {
  return ['countries', '/countries'] as const
}

export function getCountriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCountriesQueryKey>
  >({
    queryKey: getCountriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.countries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCountriesQueryKey>
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
    return { ...getCountriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDeliveryIssuesQueryKey() {
  return ['delivery-issues', '/delivery-issues'] as const
}

export function getDeliveryIssuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-issues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-issues']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeliveryIssuesQueryKey>
  >({
    queryKey: getDeliveryIssuesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['delivery-issues'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDeliveryIssues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-issues']['$get']>>>
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
              typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-issues']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDeliveryIssuesQueryKey>
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
    return { ...getDeliveryIssuesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostDeliveryIssuesMutationKey() {
  return ['delivery-issues', '/delivery-issues', 'POST'] as const
}

export function getPostDeliveryIssuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-issues']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['delivery-issues']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeliveryIssuesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['delivery-issues']['$post']>) {
      return parseResponse(client['delivery-issues'].$post(args, options))
    },
  })
}

export function createPostDeliveryIssues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-issues']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['delivery-issues']['$post']>,
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
    const mutationDefaults = getPostDeliveryIssuesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEmailCampaignsQueryKey() {
  return ['email-campaigns', '/email-campaigns'] as const
}

export function getEmailCampaignsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['email-campaigns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['email-campaigns']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailCampaignsQueryKey>
  >({
    queryKey: getEmailCampaignsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['email-campaigns'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEmailCampaigns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['email-campaigns']['$get']>>>
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
              typeof parseResponse<Awaited<ReturnType<(typeof client)['email-campaigns']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEmailCampaignsQueryKey>
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
    return { ...getEmailCampaignsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostEmailCampaignsPriceMutationKey() {
  return ['email-campaigns', '/email-campaigns/price', 'POST'] as const
}

export function getPostEmailCampaignsPriceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['email-campaigns']['price']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['email-campaigns']['price']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailCampaignsPriceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['email-campaigns']['price']['$post']>) {
      return parseResponse(client['email-campaigns'].price.$post(args, options))
    },
  })
}

export function createPostEmailCampaignsPrice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['email-campaigns']['price']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['email-campaigns']['price']['$post']>,
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
    const mutationDefaults = getPostEmailCampaignsPriceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEmailCampaignsSendMutationKey() {
  return ['email-campaigns', '/email-campaigns/send', 'POST'] as const
}

export function getPostEmailCampaignsSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['email-campaigns']['send']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['email-campaigns']['send']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailCampaignsSendMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['email-campaigns']['send']['$post']>) {
      return parseResponse(client['email-campaigns'].send.$post(args, options))
    },
  })
}

export function createPostEmailCampaignsSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['email-campaigns']['send']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['email-campaigns']['send']['$post']>,
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
    const mutationDefaults = getPostEmailCampaignsSendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEmailCampaignsCampaignIdHistoryQueryKey(
  args: InferRequestType<(typeof client)['email-campaigns'][':campaign_id']['history']['$get']>,
) {
  return ['email-campaigns', '/email-campaigns/:campaign_id/history', args] as const
}

export function getEmailCampaignsCampaignIdHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['email-campaigns'][':campaign_id']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['email-campaigns'][':campaign_id']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['email-campaigns'][':campaign_id']['history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailCampaignsCampaignIdHistoryQueryKey>
  >({
    queryKey: getEmailCampaignsCampaignIdHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['email-campaigns'][':campaign_id'].history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEmailCampaignsCampaignIdHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['email-campaigns'][':campaign_id']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['email-campaigns'][':campaign_id']['history']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['email-campaigns'][':campaign_id']['history']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEmailCampaignsCampaignIdHistoryQueryKey>
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
      ...getEmailCampaignsCampaignIdHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEmailCampaignsEmailCampaignIdQueryKey(
  args: InferRequestType<(typeof client)['email-campaigns'][':email_campaign_id']['$get']>,
) {
  return ['email-campaigns', '/email-campaigns/:email_campaign_id', args] as const
}

export function getEmailCampaignsEmailCampaignIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['email-campaigns'][':email_campaign_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['email-campaigns'][':email_campaign_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['email-campaigns'][':email_campaign_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailCampaignsEmailCampaignIdQueryKey>
  >({
    queryKey: getEmailCampaignsEmailCampaignIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['email-campaigns'][':email_campaign_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEmailCampaignsEmailCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['email-campaigns'][':email_campaign_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['email-campaigns'][':email_campaign_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['email-campaigns'][':email_campaign_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEmailCampaignsEmailCampaignIdQueryKey>
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
      ...getEmailCampaignsEmailCampaignIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutEmailCampaignsEmailCampaignIdMutationKey() {
  return ['email-campaigns', '/email-campaigns/:email_campaign_id', 'PUT'] as const
}

export function getPutEmailCampaignsEmailCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['email-campaigns'][':email_campaign_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['email-campaigns'][':email_campaign_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEmailCampaignsEmailCampaignIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['email-campaigns'][':email_campaign_id']['$put']>,
    ) {
      return parseResponse(client['email-campaigns'][':email_campaign_id'].$put(args, options))
    },
  })
}

export function createPutEmailCampaignsEmailCampaignId<
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
                  ReturnType<(typeof client)['email-campaigns'][':email_campaign_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['email-campaigns'][':email_campaign_id']['$put']>,
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
    const mutationDefaults = getPutEmailCampaignsEmailCampaignIdMutationOptions<
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

export function getPutEmailCampaignsEmailCampaignIdCancelMutationKey() {
  return ['email-campaigns', '/email-campaigns/:email_campaign_id/cancel', 'PUT'] as const
}

export function getPutEmailCampaignsEmailCampaignIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['email-campaigns'][':email_campaign_id']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEmailCampaignsEmailCampaignIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['email-campaigns'][':email_campaign_id']['cancel']['$put']
      >,
    ) {
      return parseResponse(
        client['email-campaigns'][':email_campaign_id'].cancel.$put(args, options),
      )
    },
  })
}

export function createPutEmailCampaignsEmailCampaignIdCancel<
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
                    (typeof client)['email-campaigns'][':email_campaign_id']['cancel']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['email-campaigns'][':email_campaign_id']['cancel']['$put']
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
    const mutationDefaults = getPutEmailCampaignsEmailCampaignIdCancelMutationOptions<
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

export function getPutEmailAddressVerifyEmailAddressIdSendMutationKey() {
  return ['email', '/email/address-verify/:email_address_id/send', 'PUT'] as const
}

export function getPutEmailAddressVerifyEmailAddressIdSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.email)['address-verify'][':email_address_id']['send']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEmailAddressVerifyEmailAddressIdSendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.email)['address-verify'][':email_address_id']['send']['$put']
      >,
    ) {
      return parseResponse(
        client.email['address-verify'][':email_address_id'].send.$put(args, options),
      )
    },
  })
}

export function createPutEmailAddressVerifyEmailAddressIdSend<
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
                    (typeof client.email)['address-verify'][':email_address_id']['send']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.email)['address-verify'][':email_address_id']['send']['$put']
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
    const mutationDefaults = getPutEmailAddressVerifyEmailAddressIdSendMutationOptions<
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

export function getPutEmailAddressVerifyEmailAddressIdVerifyActivationTokenMutationKey() {
  return [
    'email',
    '/email/address-verify/:email_address_id/verify/:activation_token',
    'PUT',
  ] as const
}

export function getPutEmailAddressVerifyEmailAddressIdVerifyActivationTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.email)['address-verify'][':email_address_id']['verify'][':activation_token']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmailAddressVerifyEmailAddressIdVerifyActivationTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.email)['address-verify'][':email_address_id']['verify'][':activation_token']['$put']
      >,
    ) {
      return parseResponse(
        client.email['address-verify'][':email_address_id'].verify[':activation_token'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutEmailAddressVerifyEmailAddressIdVerifyActivationToken<
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
                    (typeof client.email)['address-verify'][':email_address_id']['verify'][':activation_token']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.email)['address-verify'][':email_address_id']['verify'][':activation_token']['$put']
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
    const mutationDefaults =
      getPutEmailAddressVerifyEmailAddressIdVerifyActivationTokenMutationOptions<
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

export function getEmailAddressesQueryKey() {
  return ['email', '/email/addresses'] as const
}

export function getEmailAddressesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.addresses.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.addresses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmailAddressesQueryKey>
  >({
    queryKey: getEmailAddressesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.email.addresses.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEmailAddresses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.addresses.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.email.addresses.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEmailAddressesQueryKey>
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
    return { ...getEmailAddressesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostEmailAddressesMutationKey() {
  return ['email', '/email/addresses', 'POST'] as const
}

export function getPostEmailAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.addresses.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.email.addresses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailAddressesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.email.addresses.$post>) {
      return parseResponse(client.email.addresses.$post(args, options))
    },
  })
}

export function createPostEmailAddresses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.email.addresses.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.email.addresses.$post>,
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
    const mutationDefaults = getPostEmailAddressesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEmailAddressesEmailAddressIdQueryKey(
  args: InferRequestType<(typeof client.email.addresses)[':email_address_id']['$get']>,
) {
  return ['email', '/email/addresses/:email_address_id', args] as const
}

export function getEmailAddressesEmailAddressIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email.addresses)[':email_address_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.email.addresses)[':email_address_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email.addresses)[':email_address_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailAddressesEmailAddressIdQueryKey>
  >({
    queryKey: getEmailAddressesEmailAddressIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.email.addresses[':email_address_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEmailAddressesEmailAddressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email.addresses)[':email_address_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.email.addresses)[':email_address_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.email.addresses)[':email_address_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEmailAddressesEmailAddressIdQueryKey>
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
      ...getEmailAddressesEmailAddressIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteEmailAddressesEmailAddressIdMutationKey() {
  return ['email', '/email/addresses/:email_address_id', 'DELETE'] as const
}

export function getDeleteEmailAddressesEmailAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email.addresses)[':email_address_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.email.addresses)[':email_address_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmailAddressesEmailAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.email.addresses)[':email_address_id']['$delete']>,
    ) {
      return parseResponse(client.email.addresses[':email_address_id'].$delete(args, options))
    },
  })
}

export function createDeleteEmailAddressesEmailAddressId<
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
                Awaited<ReturnType<(typeof client.email.addresses)[':email_address_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.email.addresses)[':email_address_id']['$delete']>,
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
    const mutationDefaults = getDeleteEmailAddressesEmailAddressIdMutationOptions<
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

export function getEmailHistoryQueryKey() {
  return ['email', '/email/history'] as const
}

export function getEmailHistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.history.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.history.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmailHistoryQueryKey>
  >({
    queryKey: getEmailHistoryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.email.history.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEmailHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.history.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.history.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getEmailHistoryQueryKey>
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
    return { ...getEmailHistoryQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getEmailHistoryExportFilenameFilenameQueryKey(
  args: InferRequestType<(typeof client.email.history)['export?filename={filename}']['$get']>,
) {
  return ['email', '/email/history/export?filename={filename}', args] as const
}

export function getEmailHistoryExportFilenameFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email.history)['export?filename={filename}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.email.history)['export?filename={filename}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email.history)['export?filename={filename}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailHistoryExportFilenameFilenameQueryKey>
  >({
    queryKey: getEmailHistoryExportFilenameFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.email.history['export?filename={filename}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEmailHistoryExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email.history)['export?filename={filename}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.email.history)['export?filename={filename}']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.email.history)['export?filename={filename}']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEmailHistoryExportFilenameFilenameQueryKey>
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
      ...getEmailHistoryExportFilenameFilenameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEmailMasterTemplatesQueryKey() {
  return ['email', '/email/master-templates'] as const
}

export function getEmailMasterTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.email)['master-templates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.email)['master-templates']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailMasterTemplatesQueryKey>
  >({
    queryKey: getEmailMasterTemplatesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.email['master-templates'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEmailMasterTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.email)['master-templates']['$get']>>>
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
                Awaited<ReturnType<(typeof client.email)['master-templates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEmailMasterTemplatesQueryKey>
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
    return { ...getEmailMasterTemplatesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getEmailMasterTemplatesCategoriesQueryKey() {
  return ['email', '/email/master-templates-categories'] as const
}

export function getEmailMasterTemplatesCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email)['master-templates-categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email)['master-templates-categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailMasterTemplatesCategoriesQueryKey>
  >({
    queryKey: getEmailMasterTemplatesCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.email['master-templates-categories'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEmailMasterTemplatesCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email)['master-templates-categories']['$get']>>
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
                Awaited<ReturnType<(typeof client.email)['master-templates-categories']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEmailMasterTemplatesCategoriesQueryKey>
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
      ...getEmailMasterTemplatesCategoriesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEmailMasterTemplatesCategoriesCategoryIdQueryKey(
  args: InferRequestType<
    (typeof client.email)['master-templates-categories'][':category_id']['$get']
  >,
) {
  return ['email', '/email/master-templates-categories/:category_id', args] as const
}

export function getEmailMasterTemplatesCategoriesCategoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.email)['master-templates-categories'][':category_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.email)['master-templates-categories'][':category_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.email)['master-templates-categories'][':category_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailMasterTemplatesCategoriesCategoryIdQueryKey>
  >({
    queryKey: getEmailMasterTemplatesCategoriesCategoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.email['master-templates-categories'][':category_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEmailMasterTemplatesCategoriesCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.email)['master-templates-categories'][':category_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.email)['master-templates-categories'][':category_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getEmailMasterTemplatesCategoriesCategoryIdQueryKey>
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
      ...getEmailMasterTemplatesCategoriesCategoryIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getEmailMasterTemplatesCategoriesCategoryIdMasterTemplatesQueryKey(
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

export function getEmailMasterTemplatesCategoriesCategoryIdMasterTemplatesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.email)['master-templates-categories'][':category_id']['master-templates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getEmailMasterTemplatesCategoriesCategoryIdMasterTemplatesQueryKey>
  >({
    queryKey: getEmailMasterTemplatesCategoriesCategoryIdMasterTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.email['master-templates-categories'][':category_id']['master-templates'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEmailMasterTemplatesCategoriesCategoryIdMasterTemplates<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.email)['master-templates-categories'][':category_id']['master-templates']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getEmailMasterTemplatesCategoriesCategoryIdMasterTemplatesQueryKey>
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
      ...getEmailMasterTemplatesCategoriesCategoryIdMasterTemplatesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getEmailMasterTemplatesTemplateIdQueryKey(
  args: InferRequestType<(typeof client.email)['master-templates'][':template_id']['$get']>,
) {
  return ['email', '/email/master-templates/:template_id', args] as const
}

export function getEmailMasterTemplatesTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email)['master-templates'][':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.email)['master-templates'][':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email)['master-templates'][':template_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailMasterTemplatesTemplateIdQueryKey>
  >({
    queryKey: getEmailMasterTemplatesTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.email['master-templates'][':template_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEmailMasterTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email)['master-templates'][':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.email)['master-templates'][':template_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.email)['master-templates'][':template_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEmailMasterTemplatesTemplateIdQueryKey>
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
      ...getEmailMasterTemplatesTemplateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostEmailPriceMutationKey() {
  return ['email', '/email/price', 'POST'] as const
}

export function getPostEmailPriceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.price.$post>>>>>,
    TError,
    InferRequestType<typeof client.email.price.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailPriceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.email.price.$post>) {
      return parseResponse(client.email.price.$post(args, options))
    },
  })
}

export function createPostEmailPrice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.price.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.email.price.$post>,
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
    const mutationDefaults = getPostEmailPriceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEmailReceiptsMutationKey() {
  return ['email', '/email/receipts', 'POST'] as const
}

export function getPostEmailReceiptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.receipts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.email.receipts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailReceiptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.email.receipts.$post>) {
      return parseResponse(client.email.receipts.$post(args, options))
    },
  })
}

export function createPostEmailReceipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.email.receipts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.email.receipts.$post>,
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
    const mutationDefaults = getPostEmailReceiptsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEmailSendMutationKey() {
  return ['email', '/email/send', 'POST'] as const
}

export function getPostEmailSendMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.send.$post>>>>>,
    TError,
    InferRequestType<typeof client.email.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.email.send.$post>) {
      return parseResponse(client.email.send.$post(args, options))
    },
  })
}

export function createPostEmailSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.send.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.email.send.$post>,
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
    const mutationDefaults = getPostEmailSendMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEmailTemplatesQueryKey() {
  return ['email', '/email/templates'] as const
}

export function getEmailTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.templates.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmailTemplatesQueryKey>
  >({
    queryKey: getEmailTemplatesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.email.templates.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEmailTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.email.templates.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEmailTemplatesQueryKey>
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
    return { ...getEmailTemplatesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostEmailTemplatesMutationKey() {
  return ['email', '/email/templates', 'POST'] as const
}

export function getPostEmailTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.templates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.email.templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.email.templates.$post>) {
      return parseResponse(client.email.templates.$post(args, options))
    },
  })
}

export function createPostEmailTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.email.templates.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.email.templates.$post>,
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
    const mutationDefaults = getPostEmailTemplatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEmailTemplatesImagesTemplateIdMutationKey() {
  return ['email', '/email/templates-images/:template_id', 'POST'] as const
}

export function getPostEmailTemplatesImagesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email)['templates-images'][':template_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.email)['templates-images'][':template_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailTemplatesImagesTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.email)['templates-images'][':template_id']['$post']>,
    ) {
      return parseResponse(client.email['templates-images'][':template_id'].$post(args, options))
    },
  })
}

export function createPostEmailTemplatesImagesTemplateId<
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
                  ReturnType<(typeof client.email)['templates-images'][':template_id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.email)['templates-images'][':template_id']['$post']>,
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
    const mutationDefaults = getPostEmailTemplatesImagesTemplateIdMutationOptions<
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

export function getEmailTemplatesTemplateIdQueryKey(
  args: InferRequestType<(typeof client.email.templates)[':template_id']['$get']>,
) {
  return ['email', '/email/templates/:template_id', args] as const
}

export function getEmailTemplatesTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email.templates)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.email.templates)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email.templates)[':template_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailTemplatesTemplateIdQueryKey>
  >({
    queryKey: getEmailTemplatesTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.email.templates[':template_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEmailTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email.templates)[':template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.email.templates)[':template_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.email.templates)[':template_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEmailTemplatesTemplateIdQueryKey>
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
      ...getEmailTemplatesTemplateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutEmailTemplatesTemplateIdMutationKey() {
  return ['email', '/email/templates/:template_id', 'PUT'] as const
}

export function getPutEmailTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email.templates)[':template_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.email.templates)[':template_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEmailTemplatesTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.email.templates)[':template_id']['$put']>,
    ) {
      return parseResponse(client.email.templates[':template_id'].$put(args, options))
    },
  })
}

export function createPutEmailTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.email.templates)[':template_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.email.templates)[':template_id']['$put']>,
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
    const mutationDefaults = getPutEmailTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteEmailTemplatesTemplateIdMutationKey() {
  return ['email', '/email/templates/:template_id', 'DELETE'] as const
}

export function getDeleteEmailTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email.templates)[':template_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.email.templates)[':template_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmailTemplatesTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.email.templates)[':template_id']['$delete']>,
    ) {
      return parseResponse(client.email.templates[':template_id'].$delete(args, options))
    },
  })
}

export function createDeleteEmailTemplatesTemplateId<
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
                Awaited<ReturnType<(typeof client.email.templates)[':template_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.email.templates)[':template_id']['$delete']>,
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
    const mutationDefaults = getDeleteEmailTemplatesTemplateIdMutationOptions<
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

export function getFaxHistoryExportFilenameFilenameQueryKey(
  args: InferRequestType<(typeof client.fax.history)['export?filename={filename}']['$get']>,
) {
  return ['fax', '/fax/history/export?filename={filename}', args] as const
}

export function getFaxHistoryExportFilenameFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fax.history)['export?filename={filename}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fax.history)['export?filename={filename}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fax.history)['export?filename={filename}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFaxHistoryExportFilenameFilenameQueryKey>
  >({
    queryKey: getFaxHistoryExportFilenameFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fax.history['export?filename={filename}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFaxHistoryExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fax.history)['export?filename={filename}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.fax.history)['export?filename={filename}']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.fax.history)['export?filename={filename}']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFaxHistoryExportFilenameFilenameQueryKey>
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
      ...getFaxHistoryExportFilenameFilenameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByQueryKey(
  args: InferRequestType<
    (typeof client.fax)['history?date_from={date_from}&date_to={date_to}&q={q}&order_by={order_by}']['$get']
  >,
) {
  return [
    'fax',
    '/fax/history?date_from={date_from}&date_to={date_to}&q={q}&order_by={order_by}',
    args,
  ] as const
}

export function getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.fax)['history?date_from={date_from}&date_to={date_to}&q={q}&order_by={order_by}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.fax)['history?date_from={date_from}&date_to={date_to}&q={q}&order_by={order_by}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.fax)['history?date_from={date_from}&date_to={date_to}&q={q}&order_by={order_by}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByQueryKey>
  >({
    queryKey: getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fax[
          'history?date_from={date_from}&date_to={date_to}&q={q}&order_by={order_by}'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderBy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.fax)['history?date_from={date_from}&date_to={date_to}&q={q}&order_by={order_by}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.fax)['history?date_from={date_from}&date_to={date_to}&q={q}&order_by={order_by}']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.fax)['history?date_from={date_from}&date_to={date_to}&q={q}&order_by={order_by}']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByQueryKey>
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
      ...getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostFaxPriceMutationKey() {
  return ['fax', '/fax/price', 'POST'] as const
}

export function getPostFaxPriceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.price.$post>>>>>,
    TError,
    InferRequestType<typeof client.fax.price.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFaxPriceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fax.price.$post>) {
      return parseResponse(client.fax.price.$post(args, options))
    },
  })
}

export function createPostFaxPrice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.price.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.fax.price.$post>,
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
    const mutationDefaults = getPostFaxPriceMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFaxReceiptsQueryKey() {
  return ['fax', '/fax/receipts'] as const
}

export function getFaxReceiptsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.receipts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.receipts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFaxReceiptsQueryKey>
  >({
    queryKey: getFaxReceiptsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.fax.receipts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFaxReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.receipts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.receipts.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getFaxReceiptsQueryKey>
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
    return { ...getFaxReceiptsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostFaxReceiptsMutationKey() {
  return ['fax', '/fax/receipts', 'POST'] as const
}

export function getPostFaxReceiptsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.receipts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.fax.receipts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFaxReceiptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fax.receipts.$post>) {
      return parseResponse(client.fax.receipts.$post(args, options))
    },
  })
}

export function createPostFaxReceipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.receipts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.fax.receipts.$post>,
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
    const mutationDefaults = getPostFaxReceiptsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutFaxReceiptsReadMutationKey() {
  return ['fax', '/fax/receipts-read', 'PUT'] as const
}

export function getPutFaxReceiptsReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.fax)['receipts-read']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.fax)['receipts-read']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFaxReceiptsReadMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.fax)['receipts-read']['$put']>) {
      return parseResponse(client.fax['receipts-read'].$put(args, options))
    },
  })
}

export function createPutFaxReceiptsRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fax)['receipts-read']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.fax)['receipts-read']['$put']>,
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
    const mutationDefaults = getPutFaxReceiptsReadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFaxReceiptsMessageIdQueryKey(
  args: InferRequestType<(typeof client.fax.receipts)[':message_id']['$get']>,
) {
  return ['fax', '/fax/receipts/:message_id', args] as const
}

export function getFaxReceiptsMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fax.receipts)[':message_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fax.receipts)[':message_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fax.receipts)[':message_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFaxReceiptsMessageIdQueryKey>
  >({
    queryKey: getFaxReceiptsMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fax.receipts[':message_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFaxReceiptsMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fax.receipts)[':message_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.fax.receipts)[':message_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fax.receipts)[':message_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFaxReceiptsMessageIdQueryKey>
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
      ...getFaxReceiptsMessageIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostFaxSendMutationKey() {
  return ['fax', '/fax/send', 'POST'] as const
}

export function getPostFaxSendMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.send.$post>>>>>,
    TError,
    InferRequestType<typeof client.fax.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFaxSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fax.send.$post>) {
      return parseResponse(client.fax.send.$post(args, options))
    },
  })
}

export function createPostFaxSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.send.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.fax.send.$post>,
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
    const mutationDefaults = getPostFaxSendMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutForgotPasswordMutationKey() {
  return ['forgot-password', '/forgot-password', 'PUT'] as const
}

export function getPutForgotPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['forgot-password']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['forgot-password']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutForgotPasswordMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['forgot-password']['$put']>) {
      return parseResponse(client['forgot-password'].$put(args, options))
    },
  })
}

export function createPutForgotPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['forgot-password']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['forgot-password']['$put']>,
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
    const mutationDefaults = getPutForgotPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutForgotPasswordVerifyMutationKey() {
  return ['forgot-password', '/forgot-password/verify', 'PUT'] as const
}

export function getPutForgotPasswordVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['forgot-password']['verify']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['forgot-password']['verify']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutForgotPasswordVerifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['forgot-password']['verify']['$put']>) {
      return parseResponse(client['forgot-password'].verify.$put(args, options))
    },
  })
}

export function createPutForgotPasswordVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['forgot-password']['verify']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['forgot-password']['verify']['$put']>,
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
    const mutationDefaults = getPutForgotPasswordVerifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutForgotUsernameMutationKey() {
  return ['forgot-username', '/forgot-username', 'PUT'] as const
}

export function getPutForgotUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['forgot-username']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['forgot-username']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutForgotUsernameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['forgot-username']['$put']>) {
      return parseResponse(client['forgot-username'].$put(args, options))
    },
  })
}

export function createPutForgotUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['forgot-username']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['forgot-username']['$put']>,
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
    const mutationDefaults = getPutForgotUsernameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getListsQueryKey() {
  return ['lists', '/lists'] as const
}

export function getListsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListsQueryKey>
  >({
    queryKey: getListsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.lists.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLists<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getListsQueryKey>
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
    return { ...getListsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostListsMutationKey() {
  return ['lists', '/lists', 'POST'] as const
}

export function getPostListsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$post>>>>>,
    TError,
    InferRequestType<typeof client.lists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lists.$post>) {
      return parseResponse(client.lists.$post(args, options))
    },
  })
}

export function createPostLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$post>>>>>,
          TError,
          InferRequestType<typeof client.lists.$post>,
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
    const mutationDefaults = getPostListsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutListsFromListIdContactsContactIdToListIdMutationKey() {
  return ['lists', '/lists/:from_list_id/contacts/:contact_id/:to_list_id', 'PUT'] as const
}

export function getPutListsFromListIdContactsContactIdToListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.lists)[':from_list_id']['contacts'][':contact_id'][':to_list_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutListsFromListIdContactsContactIdToListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.lists)[':from_list_id']['contacts'][':contact_id'][':to_list_id']['$put']
      >,
    ) {
      return parseResponse(
        client.lists[':from_list_id'].contacts[':contact_id'][':to_list_id'].$put(args, options),
      )
    },
  })
}

export function createPutListsFromListIdContactsContactIdToListId<
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
                    (typeof client.lists)[':from_list_id']['contacts'][':contact_id'][':to_list_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.lists)[':from_list_id']['contacts'][':contact_id'][':to_list_id']['$put']
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
    const mutationDefaults = getPutListsFromListIdContactsContactIdToListIdMutationOptions<
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

export function getListsListIdQueryKey(
  args: InferRequestType<(typeof client.lists)[':list_id']['$get']>,
) {
  return ['lists', '/lists/:list_id', args] as const
}

export function getListsListIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':list_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsListIdQueryKey>
  >({
    queryKey: getListsListIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':list_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createListsListId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)[':list_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getListsListIdQueryKey>
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
    return { ...getListsListIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutListsListIdMutationKey() {
  return ['lists', '/lists/:list_id', 'PUT'] as const
}

export function getPutListsListIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':list_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListsListIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':list_id']['$put']>) {
      return parseResponse(client.lists[':list_id'].$put(args, options))
    },
  })
}

export function createPutListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':list_id']['$put']>,
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
    const mutationDefaults = getPutListsListIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteListsListIdMutationKey() {
  return ['lists', '/lists/:list_id', 'DELETE'] as const
}

export function getDeleteListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':list_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteListsListIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':list_id']['$delete']>) {
      return parseResponse(client.lists[':list_id'].$delete(args, options))
    },
  })
}

export function createDeleteListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':list_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':list_id']['$delete']>,
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
    const mutationDefaults = getDeleteListsListIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getListsListIdContactsQueryKey(
  args: InferRequestType<(typeof client.lists)[':list_id']['contacts']['$get']>,
) {
  return ['lists', '/lists/:list_id/contacts', args] as const
}

export function getListsListIdContactsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':list_id']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':list_id']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':list_id']['contacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsListIdContactsQueryKey>
  >({
    queryKey: getListsListIdContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':list_id'].contacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListsListIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':list_id']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)[':list_id']['contacts']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':list_id']['contacts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getListsListIdContactsQueryKey>
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
    return { ...getListsListIdContactsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostListsListIdContactsMutationKey() {
  return ['lists', '/lists/:list_id/contacts', 'POST'] as const
}

export function getPostListsListIdContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':list_id']['contacts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':list_id']['contacts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListsListIdContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lists)[':list_id']['contacts']['$post']>,
    ) {
      return parseResponse(client.lists[':list_id'].contacts.$post(args, options))
    },
  })
}

export function createPostListsListIdContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':list_id']['contacts']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':list_id']['contacts']['$post']>,
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
    const mutationDefaults = getPostListsListIdContactsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getListsListIdContactsContactIdQueryKey(
  args: InferRequestType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$get']>,
) {
  return ['lists', '/lists/:list_id/contacts/:contact_id', args] as const
}

export function getListsListIdContactsContactIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsListIdContactsContactIdQueryKey>
  >({
    queryKey: getListsListIdContactsContactIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':list_id'].contacts[':contact_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListsListIdContactsContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.lists)[':list_id']['contacts'][':contact_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getListsListIdContactsContactIdQueryKey>
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
      ...getListsListIdContactsContactIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutListsListIdContactsContactIdMutationKey() {
  return ['lists', '/lists/:list_id/contacts/:contact_id', 'PUT'] as const
}

export function getPutListsListIdContactsContactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListsListIdContactsContactIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$put']>,
    ) {
      return parseResponse(client.lists[':list_id'].contacts[':contact_id'].$put(args, options))
    },
  })
}

export function createPutListsListIdContactsContactId<
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
                  ReturnType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$put']>,
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
    const mutationDefaults = getPutListsListIdContactsContactIdMutationOptions<
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

export function getDeleteListsListIdContactsContactIdMutationKey() {
  return ['lists', '/lists/:list_id/contacts/:contact_id', 'DELETE'] as const
}

export function getDeleteListsListIdContactsContactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteListsListIdContactsContactIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.lists)[':list_id']['contacts'][':contact_id']['$delete']
      >,
    ) {
      return parseResponse(client.lists[':list_id'].contacts[':contact_id'].$delete(args, options))
    },
  })
}

export function createDeleteListsListIdContactsContactId<
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
                    (typeof client.lists)[':list_id']['contacts'][':contact_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$delete']>,
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
    const mutationDefaults = getDeleteListsListIdContactsContactIdMutationOptions<
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

export function getListsListIdExportFilenameFilenameQueryKey(
  args: InferRequestType<(typeof client.lists)[':list_id']['export?filename={filename}']['$get']>,
) {
  return ['lists', '/lists/:list_id/export?filename={filename}', args] as const
}

export function getListsListIdExportFilenameFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':list_id']['export?filename={filename}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':list_id']['export?filename={filename}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.lists)[':list_id']['export?filename={filename}']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsListIdExportFilenameFilenameQueryKey>
  >({
    queryKey: getListsListIdExportFilenameFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':list_id']['export?filename={filename}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListsListIdExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':list_id']['export?filename={filename}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.lists)[':list_id']['export?filename={filename}']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.lists)[':list_id']['export?filename={filename}']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getListsListIdExportFilenameFilenameQueryKey>
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
      ...getListsListIdExportFilenameFilenameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostListsListIdImportMutationKey() {
  return ['lists', '/lists/:list_id/import', 'POST'] as const
}

export function getPostListsListIdImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':list_id']['import']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':list_id']['import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListsListIdImportMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':list_id']['import']['$post']>) {
      return parseResponse(client.lists[':list_id'].import.$post(args, options))
    },
  })
}

export function createPostListsListIdImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':list_id']['import']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':list_id']['import']['$post']>,
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
    const mutationDefaults = getPostListsListIdImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostListsListIdImportCsvPreviewMutationKey() {
  return ['lists', '/lists/:list_id/import-csv-preview', 'POST'] as const
}

export function getPostListsListIdImportCsvPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':list_id']['import-csv-preview']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':list_id']['import-csv-preview']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListsListIdImportCsvPreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lists)[':list_id']['import-csv-preview']['$post']>,
    ) {
      return parseResponse(client.lists[':list_id']['import-csv-preview'].$post(args, options))
    },
  })
}

export function createPostListsListIdImportCsvPreview<
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
                  ReturnType<(typeof client.lists)[':list_id']['import-csv-preview']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':list_id']['import-csv-preview']['$post']>,
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
    const mutationDefaults = getPostListsListIdImportCsvPreviewMutationOptions<
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

export function getListsListIdImportFieldsQueryKey(
  args: InferRequestType<(typeof client.lists)[':list_id']['import-fields']['$get']>,
) {
  return ['lists', '/lists/:list_id/import-fields', args] as const
}

export function getListsListIdImportFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':list_id']['import-fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':list_id']['import-fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':list_id']['import-fields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsListIdImportFieldsQueryKey>
  >({
    queryKey: getListsListIdImportFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':list_id']['import-fields'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListsListIdImportFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':list_id']['import-fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)[':list_id']['import-fields']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':list_id']['import-fields']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getListsListIdImportFieldsQueryKey>
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
      ...getListsListIdImportFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutListsListIdRemoveDuplicatesMutationKey() {
  return ['lists', '/lists/:list_id/remove-duplicates', 'PUT'] as const
}

export function getPutListsListIdRemoveDuplicatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':list_id']['remove-duplicates']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':list_id']['remove-duplicates']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListsListIdRemoveDuplicatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lists)[':list_id']['remove-duplicates']['$put']>,
    ) {
      return parseResponse(client.lists[':list_id']['remove-duplicates'].$put(args, options))
    },
  })
}

export function createPutListsListIdRemoveDuplicates<
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
                Awaited<ReturnType<(typeof client.lists)[':list_id']['remove-duplicates']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':list_id']['remove-duplicates']['$put']>,
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
    const mutationDefaults = getPutListsListIdRemoveDuplicatesMutationOptions<
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

export function getPutListsListIdRemoveOptedOutContactsOptOutListIdMutationKey() {
  return ['lists', '/lists/:list_id/remove-opted-out-contacts/:opt_out_list_id', 'PUT'] as const
}

export function getPutListsListIdRemoveOptedOutContactsOptOutListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.lists)[':list_id']['remove-opted-out-contacts'][':opt_out_list_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutListsListIdRemoveOptedOutContactsOptOutListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.lists)[':list_id']['remove-opted-out-contacts'][':opt_out_list_id']['$put']
      >,
    ) {
      return parseResponse(
        client.lists[':list_id']['remove-opted-out-contacts'][':opt_out_list_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutListsListIdRemoveOptedOutContactsOptOutListId<
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
                    (typeof client.lists)[':list_id']['remove-opted-out-contacts'][':opt_out_list_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.lists)[':list_id']['remove-opted-out-contacts'][':opt_out_list_id']['$put']
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
    const mutationDefaults = getPutListsListIdRemoveOptedOutContactsOptOutListIdMutationOptions<
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

export function getPutMmsCancelAllMutationKey() {
  return ['mms', '/mms/cancel-all', 'PUT'] as const
}

export function getPutMmsCancelAllMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mms)['cancel-all']['$put']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutMmsCancelAllMutationKey(),
    async mutationFn() {
      return parseResponse(client.mms['cancel-all'].$put(undefined, options))
    },
  })
}

export function createPutMmsCancelAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.mms)['cancel-all']['$put']>>>
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
    const mutationDefaults = getPutMmsCancelAllMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMmsHistoryExportFilenameFilenameQueryKey(
  args: InferRequestType<(typeof client.mms.history)['export?filename={filename}']['$get']>,
) {
  return ['mms', '/mms/history/export?filename={filename}', args] as const
}

export function getMmsHistoryExportFilenameFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mms.history)['export?filename={filename}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mms.history)['export?filename={filename}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mms.history)['export?filename={filename}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMmsHistoryExportFilenameFilenameQueryKey>
  >({
    queryKey: getMmsHistoryExportFilenameFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mms.history['export?filename={filename}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMmsHistoryExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mms.history)['export?filename={filename}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mms.history)['export?filename={filename}']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mms.history)['export?filename={filename}']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMmsHistoryExportFilenameFilenameQueryKey>
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
      ...getMmsHistoryExportFilenameFilenameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToQueryKey(
  args: InferRequestType<
    (typeof client.mms)['history?q={q}&order_by={order_by}&date_from={date_from}&date_to={date_to}']['$get']
  >,
) {
  return [
    'mms',
    '/mms/history?q={q}&order_by={order_by}&date_from={date_from}&date_to={date_to}',
    args,
  ] as const
}

export function getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.mms)['history?q={q}&order_by={order_by}&date_from={date_from}&date_to={date_to}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mms)['history?q={q}&order_by={order_by}&date_from={date_from}&date_to={date_to}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mms)['history?q={q}&order_by={order_by}&date_from={date_from}&date_to={date_to}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToQueryKey>
  >({
    queryKey: getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mms[
          'history?q={q}&order_by={order_by}&date_from={date_from}&date_to={date_to}'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.mms)['history?q={q}&order_by={order_by}&date_from={date_from}&date_to={date_to}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mms)['history?q={q}&order_by={order_by}&date_from={date_from}&date_to={date_to}']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.mms)['history?q={q}&order_by={order_by}&date_from={date_from}&date_to={date_to}']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToQueryKey>
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
      ...getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostMmsPriceMutationKey() {
  return ['mms', '/mms/price', 'POST'] as const
}

export function getPostMmsPriceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mms.price.$post>>>>>,
    TError,
    InferRequestType<typeof client.mms.price.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMmsPriceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mms.price.$post>) {
      return parseResponse(client.mms.price.$post(args, options))
    },
  })
}

export function createPostMmsPrice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mms.price.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.mms.price.$post>,
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
    const mutationDefaults = getPostMmsPriceMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMmsReceiptsQueryKey() {
  return ['mms', '/mms/receipts'] as const
}

export function getMmsReceiptsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mms.receipts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mms.receipts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMmsReceiptsQueryKey>
  >({
    queryKey: getMmsReceiptsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mms.receipts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMmsReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mms.receipts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mms.receipts.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMmsReceiptsQueryKey>
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
    return { ...getMmsReceiptsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutMmsReceiptsReadMutationKey() {
  return ['mms', '/mms/receipts-read', 'PUT'] as const
}

export function getPutMmsReceiptsReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mms)['receipts-read']['$put']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutMmsReceiptsReadMutationKey(),
    async mutationFn() {
      return parseResponse(client.mms['receipts-read'].$put(undefined, options))
    },
  })
}

export function createPutMmsReceiptsRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mms)['receipts-read']['$put']>>
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
    const mutationDefaults = getPutMmsReceiptsReadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMmsReceiptsMessageIdQueryKey(
  args: InferRequestType<(typeof client.mms.receipts)[':message_id']['$get']>,
) {
  return ['mms', '/mms/receipts/:message_id', args] as const
}

export function getMmsReceiptsMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mms.receipts)[':message_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mms.receipts)[':message_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mms.receipts)[':message_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMmsReceiptsMessageIdQueryKey>
  >({
    queryKey: getMmsReceiptsMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mms.receipts[':message_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMmsReceiptsMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mms.receipts)[':message_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mms.receipts)[':message_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mms.receipts)[':message_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMmsReceiptsMessageIdQueryKey>
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
      ...getMmsReceiptsMessageIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostMmsSendMutationKey() {
  return ['mms', '/mms/send', 'POST'] as const
}

export function getPostMmsSendMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mms.send.$post>>>>>,
    TError,
    InferRequestType<typeof client.mms.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMmsSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mms.send.$post>) {
      return parseResponse(client.mms.send.$post(args, options))
    },
  })
}

export function createPostMmsSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mms.send.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.mms.send.$post>,
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
    const mutationDefaults = getPostMmsSendMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutMmsMessageIdCancelMutationKey() {
  return ['mms', '/mms/:message_id/cancel', 'PUT'] as const
}

export function getPutMmsMessageIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mms)[':message_id']['cancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mms)[':message_id']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMmsMessageIdCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.mms)[':message_id']['cancel']['$put']>) {
      return parseResponse(client.mms[':message_id'].cancel.$put(args, options))
    },
  })
}

export function createPutMmsMessageIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mms)[':message_id']['cancel']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mms)[':message_id']['cancel']['$put']>,
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
    const mutationDefaults = getPutMmsMessageIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNumbersQueryKey() {
  return ['numbers', '/numbers'] as const
}

export function getNumbersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNumbersQueryKey>
  >({
    queryKey: getNumbersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNumbersQueryKey>
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
    return { ...getNumbersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostNumbersBuyDedicatedNumberMutationKey() {
  return ['numbers', '/numbers/buy/:dedicated_number', 'POST'] as const
}

export function getPostNumbersBuyDedicatedNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.numbers.buy)[':dedicated_number']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.numbers.buy)[':dedicated_number']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNumbersBuyDedicatedNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.numbers.buy)[':dedicated_number']['$post']>,
    ) {
      return parseResponse(client.numbers.buy[':dedicated_number'].$post(args, options))
    },
  })
}

export function createPostNumbersBuyDedicatedNumber<
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
                Awaited<ReturnType<(typeof client.numbers.buy)[':dedicated_number']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.numbers.buy)[':dedicated_number']['$post']>,
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
    const mutationDefaults = getPostNumbersBuyDedicatedNumberMutationOptions<
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

export function getNumbersSearchCountrySearch1SearchType2QueryKey(
  args: InferRequestType<
    (typeof client.numbers.search)[':country?{search}=1&{search_type}=2']['$get']
  >,
) {
  return ['numbers', '/numbers/search/:country?{search}=1&{search_type}=2', args] as const
}

export function getNumbersSearchCountrySearch1SearchType2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.numbers.search)[':country?{search}=1&{search_type}=2']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.numbers.search)[':country?{search}=1&{search_type}=2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.numbers.search)[':country?{search}=1&{search_type}=2']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersSearchCountrySearch1SearchType2QueryKey>
  >({
    queryKey: getNumbersSearchCountrySearch1SearchType2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.search[':country?{search}=1&{search_type}=2'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNumbersSearchCountrySearch1SearchType2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.numbers.search)[':country?{search}=1&{search_type}=2']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.numbers.search)[':country?{search}=1&{search_type}=2']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.numbers.search)[':country?{search}=1&{search_type}=2']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNumbersSearchCountrySearch1SearchType2QueryKey>
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
      ...getNumbersSearchCountrySearch1SearchType2QueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostDirectMailCampaignsQueryKey() {
  return ['post', '/post/direct-mail/campaigns'] as const
}

export function getPostDirectMailCampaignsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.post)['direct-mail']['campaigns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.post)['direct-mail']['campaigns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostDirectMailCampaignsQueryKey>
  >({
    queryKey: getPostDirectMailCampaignsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.post['direct-mail'].campaigns.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostDirectMailCampaigns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.post)['direct-mail']['campaigns']['$get']>>
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
                Awaited<ReturnType<(typeof client.post)['direct-mail']['campaigns']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPostDirectMailCampaignsQueryKey>
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
    return { ...getPostDirectMailCampaignsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostPostDirectMailCampaignsPriceMutationKey() {
  return ['post', '/post/direct-mail/campaigns/price', 'POST'] as const
}

export function getPostPostDirectMailCampaignsPriceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.post)['direct-mail']['campaigns']['price']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.post)['direct-mail']['campaigns']['price']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPostDirectMailCampaignsPriceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.post)['direct-mail']['campaigns']['price']['$post']>,
    ) {
      return parseResponse(client.post['direct-mail'].campaigns.price.$post(args, options))
    },
  })
}

export function createPostPostDirectMailCampaignsPrice<
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
                  ReturnType<(typeof client.post)['direct-mail']['campaigns']['price']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.post)['direct-mail']['campaigns']['price']['$post']>,
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
    const mutationDefaults = getPostPostDirectMailCampaignsPriceMutationOptions<
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

export function getPostPostDirectMailCampaignsSendMutationKey() {
  return ['post', '/post/direct-mail/campaigns/send', 'POST'] as const
}

export function getPostPostDirectMailCampaignsSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.post)['direct-mail']['campaigns']['send']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.post)['direct-mail']['campaigns']['send']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPostDirectMailCampaignsSendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.post)['direct-mail']['campaigns']['send']['$post']>,
    ) {
      return parseResponse(client.post['direct-mail'].campaigns.send.$post(args, options))
    },
  })
}

export function createPostPostDirectMailCampaignsSend<
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
                  ReturnType<(typeof client.post)['direct-mail']['campaigns']['send']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.post)['direct-mail']['campaigns']['send']['$post']>,
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
    const mutationDefaults = getPostPostDirectMailCampaignsSendMutationOptions<
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

export function getPostDirectMailLocationsSearchCountryQQueryQueryKey(
  args: InferRequestType<
    (typeof client.post)['direct-mail']['locations']['search'][':country']['?q={query}']['$get']
  >,
) {
  return ['post', '/post/direct-mail/locations/search/:country/?q={query}', args] as const
}

export function getPostDirectMailLocationsSearchCountryQQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.post)['direct-mail']['locations']['search'][':country']['?q={query}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.post)['direct-mail']['locations']['search'][':country']['?q={query}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.post)['direct-mail']['locations']['search'][':country']['?q={query}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostDirectMailLocationsSearchCountryQQueryQueryKey>
  >({
    queryKey: getPostDirectMailLocationsSearchCountryQQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.post['direct-mail'].locations.search[':country']['?q={query}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostDirectMailLocationsSearchCountryQQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.post)['direct-mail']['locations']['search'][':country']['?q={query}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.post)['direct-mail']['locations']['search'][':country']['?q={query}']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.post)['direct-mail']['locations']['search'][':country']['?q={query}']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPostDirectMailLocationsSearchCountryQQueryQueryKey>
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
      ...getPostDirectMailLocationsSearchCountryQQueryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostPostLettersDetectAddressMutationKey() {
  return ['post', '/post/letters/detect-address', 'POST'] as const
}

export function getPostPostLettersDetectAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.post.letters)['detect-address']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.post.letters)['detect-address']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPostLettersDetectAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.post.letters)['detect-address']['$post']>,
    ) {
      return parseResponse(client.post.letters['detect-address'].$post(args, options))
    },
  })
}

export function createPostPostLettersDetectAddress<
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
                Awaited<ReturnType<(typeof client.post.letters)['detect-address']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.post.letters)['detect-address']['$post']>,
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
    const mutationDefaults = getPostPostLettersDetectAddressMutationOptions<
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

export function getPostLettersHistoryQueryKey() {
  return ['post', '/post/letters/history'] as const
}

export function getPostLettersHistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.letters.history.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.letters.history.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPostLettersHistoryQueryKey>
  >({
    queryKey: getPostLettersHistoryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.post.letters.history.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostLettersHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.letters.history.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.post.letters.history.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPostLettersHistoryQueryKey>
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
    return { ...getPostLettersHistoryQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostLettersHistoryExportFilenameFilenameQueryKey(
  args: InferRequestType<
    (typeof client.post.letters.history)['export?filename={filename}']['$get']
  >,
) {
  return ['post', '/post/letters/history/export?filename={filename}', args] as const
}

export function getPostLettersHistoryExportFilenameFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.post.letters.history)['export?filename={filename}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.post.letters.history)['export?filename={filename}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.post.letters.history)['export?filename={filename}']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostLettersHistoryExportFilenameFilenameQueryKey>
  >({
    queryKey: getPostLettersHistoryExportFilenameFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.post.letters.history['export?filename={filename}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostLettersHistoryExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.post.letters.history)['export?filename={filename}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.post.letters.history)['export?filename={filename}']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.post.letters.history)['export?filename={filename}']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPostLettersHistoryExportFilenameFilenameQueryKey>
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
      ...getPostLettersHistoryExportFilenameFilenameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostPostLettersPriceMutationKey() {
  return ['post', '/post/letters/price', 'POST'] as const
}

export function getPostPostLettersPriceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.letters.price.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.post.letters.price.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPostLettersPriceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.post.letters.price.$post>) {
      return parseResponse(client.post.letters.price.$post(args, options))
    },
  })
}

export function createPostPostLettersPrice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.post.letters.price.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.post.letters.price.$post>,
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
    const mutationDefaults = getPostPostLettersPriceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPostLettersSendMutationKey() {
  return ['post', '/post/letters/send', 'POST'] as const
}

export function getPostPostLettersSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.letters.send.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.post.letters.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPostLettersSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.post.letters.send.$post>) {
      return parseResponse(client.post.letters.send.$post(args, options))
    },
  })
}

export function createPostPostLettersSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.post.letters.send.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.post.letters.send.$post>,
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
    const mutationDefaults = getPostPostLettersSendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPostcardsExportFilenameFilenameQueryKey(
  args: InferRequestType<(typeof client.post.postcards)['export?filename={filename}']['$get']>,
) {
  return ['post', '/post/postcards/export?filename={filename}', args] as const
}

export function getPostPostcardsExportFilenameFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.post.postcards)['export?filename={filename}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.post.postcards)['export?filename={filename}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.post.postcards)['export?filename={filename}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostPostcardsExportFilenameFilenameQueryKey>
  >({
    queryKey: getPostPostcardsExportFilenameFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.post.postcards['export?filename={filename}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostPostcardsExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.post.postcards)['export?filename={filename}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.post.postcards)['export?filename={filename}']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.post.postcards)['export?filename={filename}']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPostPostcardsExportFilenameFilenameQueryKey>
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
      ...getPostPostcardsExportFilenameFilenameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPostcardsHistoryQueryKey() {
  return ['post', '/post/postcards/history'] as const
}

export function getPostPostcardsHistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.postcards.history.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.post.postcards.history.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostPostcardsHistoryQueryKey>
  >({
    queryKey: getPostPostcardsHistoryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.post.postcards.history.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostPostcardsHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.postcards.history.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.post.postcards.history.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPostPostcardsHistoryQueryKey>
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
    return { ...getPostPostcardsHistoryQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostPostPostcardsPriceMutationKey() {
  return ['post', '/post/postcards/price', 'POST'] as const
}

export function getPostPostPostcardsPriceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.post.postcards.price.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.post.postcards.price.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPostPostcardsPriceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.post.postcards.price.$post>) {
      return parseResponse(client.post.postcards.price.$post(args, options))
    },
  })
}

export function createPostPostPostcardsPrice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.post.postcards.price.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.post.postcards.price.$post>,
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
    const mutationDefaults = getPostPostPostcardsPriceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPostPostcardsSendMutationKey() {
  return ['post', '/post/postcards/send', 'POST'] as const
}

export function getPostPostPostcardsSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.postcards.send.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.post.postcards.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPostPostcardsSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.post.postcards.send.$post>) {
      return parseResponse(client.post.postcards.send.$post(args, options))
    },
  })
}

export function createPostPostPostcardsSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.post.postcards.send.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.post.postcards.send.$post>,
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
    const mutationDefaults = getPostPostPostcardsSendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostReturnAddressesQueryKey() {
  return ['post', '/post/return-addresses'] as const
}

export function getPostReturnAddressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.post)['return-addresses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.post)['return-addresses']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostReturnAddressesQueryKey>
  >({
    queryKey: getPostReturnAddressesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.post['return-addresses'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostReturnAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.post)['return-addresses']['$get']>>>
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
                Awaited<ReturnType<(typeof client.post)['return-addresses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPostReturnAddressesQueryKey>
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
    return { ...getPostReturnAddressesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostPostReturnAddressesMutationKey() {
  return ['post', '/post/return-addresses', 'POST'] as const
}

export function getPostPostReturnAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.post)['return-addresses']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.post)['return-addresses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPostReturnAddressesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.post)['return-addresses']['$post']>) {
      return parseResponse(client.post['return-addresses'].$post(args, options))
    },
  })
}

export function createPostPostReturnAddresses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.post)['return-addresses']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.post)['return-addresses']['$post']>,
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
    const mutationDefaults = getPostPostReturnAddressesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostReturnAddressesReturnAddressIdQueryKey(
  args: InferRequestType<(typeof client.post)['return-addresses'][':return_address_id']['$get']>,
) {
  return ['post', '/post/return-addresses/:return_address_id', args] as const
}

export function getPostReturnAddressesReturnAddressIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.post)['return-addresses'][':return_address_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.post)['return-addresses'][':return_address_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.post)['return-addresses'][':return_address_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostReturnAddressesReturnAddressIdQueryKey>
  >({
    queryKey: getPostReturnAddressesReturnAddressIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.post['return-addresses'][':return_address_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPostReturnAddressesReturnAddressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.post)['return-addresses'][':return_address_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.post)['return-addresses'][':return_address_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.post)['return-addresses'][':return_address_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPostReturnAddressesReturnAddressIdQueryKey>
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
      ...getPostReturnAddressesReturnAddressIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutPostReturnAddressesReturnAddressIdMutationKey() {
  return ['post', '/post/return-addresses/:return_address_id', 'PUT'] as const
}

export function getPutPostReturnAddressesReturnAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.post)['return-addresses'][':return_address_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPostReturnAddressesReturnAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.post)['return-addresses'][':return_address_id']['$put']
      >,
    ) {
      return parseResponse(
        client.post['return-addresses'][':return_address_id'].$put(args, options),
      )
    },
  })
}

export function createPutPostReturnAddressesReturnAddressId<
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
                  ReturnType<(typeof client.post)['return-addresses'][':return_address_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.post)['return-addresses'][':return_address_id']['$put']>,
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
    const mutationDefaults = getPutPostReturnAddressesReturnAddressIdMutationOptions<
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

export function getDeletePostReturnAddressesReturnAddressIdMutationKey() {
  return ['post', '/post/return-addresses/:return_address_id', 'DELETE'] as const
}

export function getDeletePostReturnAddressesReturnAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.post)['return-addresses'][':return_address_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePostReturnAddressesReturnAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.post)['return-addresses'][':return_address_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.post['return-addresses'][':return_address_id'].$delete(args, options),
      )
    },
  })
}

export function createDeletePostReturnAddressesReturnAddressId<
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
                    (typeof client.post)['return-addresses'][':return_address_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.post)['return-addresses'][':return_address_id']['$delete']
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
    const mutationDefaults = getDeletePostReturnAddressesReturnAddressIdMutationOptions<
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

export function getPricingCountryCurrencyCurrencyQueryKey(
  args: InferRequestType<(typeof client.pricing)[':country?currency={currency}']['$get']>,
) {
  return ['pricing', '/pricing/:country?currency={currency}', args] as const
}

export function getPricingCountryCurrencyCurrencyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pricing)[':country?currency={currency}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pricing)[':country?currency={currency}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pricing)[':country?currency={currency}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPricingCountryCurrencyCurrencyQueryKey>
  >({
    queryKey: getPricingCountryCurrencyCurrencyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pricing[':country?currency={currency}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPricingCountryCurrencyCurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pricing)[':country?currency={currency}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pricing)[':country?currency={currency}']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pricing)[':country?currency={currency}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPricingCountryCurrencyCurrencyQueryKey>
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
      ...getPricingCountryCurrencyCurrencyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRechargeCreditCardQueryKey() {
  return ['recharge', '/recharge/credit-card'] as const
}

export function getRechargeCreditCardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recharge)['credit-card']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.recharge)['credit-card']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRechargeCreditCardQueryKey>
  >({
    queryKey: getRechargeCreditCardQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.recharge['credit-card'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRechargeCreditCard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recharge)['credit-card']['$get']>>>
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
                Awaited<ReturnType<(typeof client.recharge)['credit-card']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRechargeCreditCardQueryKey>
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
    return { ...getRechargeCreditCardQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutRechargeCreditCardMutationKey() {
  return ['recharge', '/recharge/credit-card', 'PUT'] as const
}

export function getPutRechargeCreditCardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.recharge)['credit-card']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.recharge)['credit-card']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRechargeCreditCardMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.recharge)['credit-card']['$put']>) {
      return parseResponse(client.recharge['credit-card'].$put(args, options))
    },
  })
}

export function createPutRechargeCreditCard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recharge)['credit-card']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.recharge)['credit-card']['$put']>,
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
    const mutationDefaults = getPutRechargeCreditCardMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRechargePackagesCountryCountryQueryKey(
  args: InferRequestType<(typeof client.recharge)['packages?country={country}']['$get']>,
) {
  return ['recharge', '/recharge/packages?country={country}', args] as const
}

export function getRechargePackagesCountryCountryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recharge)['packages?country={country}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recharge)['packages?country={country}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recharge)['packages?country={country}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRechargePackagesCountryCountryQueryKey>
  >({
    queryKey: getRechargePackagesCountryCountryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recharge['packages?country={country}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRechargePackagesCountryCountry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recharge)['packages?country={country}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.recharge)['packages?country={country}']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recharge)['packages?country={country}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRechargePackagesCountryCountryQueryKey>
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
      ...getRechargePackagesCountryCountryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutRechargePurchasePackageIdMutationKey() {
  return ['recharge', '/recharge/purchase/:package_id', 'PUT'] as const
}

export function getPutRechargePurchasePackageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recharge.purchase)[':package_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.recharge.purchase)[':package_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRechargePurchasePackageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.recharge.purchase)[':package_id']['$put']>,
    ) {
      return parseResponse(client.recharge.purchase[':package_id'].$put(args, options))
    },
  })
}

export function createPutRechargePurchasePackageId<
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
                Awaited<ReturnType<(typeof client.recharge.purchase)[':package_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.recharge.purchase)[':package_id']['$put']>,
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
    const mutationDefaults = getPutRechargePurchasePackageIdMutationOptions<
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

export function getRechargeTransactionsQueryKey() {
  return ['recharge', '/recharge/transactions'] as const
}

export function getRechargeTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recharge.transactions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recharge.transactions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRechargeTransactionsQueryKey>
  >({
    queryKey: getRechargeTransactionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.recharge.transactions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRechargeTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recharge.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recharge.transactions.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRechargeTransactionsQueryKey>
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
    return { ...getRechargeTransactionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getRechargeTransactionsTransactionIdQueryKey(
  args: InferRequestType<(typeof client.recharge.transactions)[':transaction_id']['$get']>,
) {
  return ['recharge', '/recharge/transactions/:transaction_id', args] as const
}

export function getRechargeTransactionsTransactionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recharge.transactions)[':transaction_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recharge.transactions)[':transaction_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recharge.transactions)[':transaction_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRechargeTransactionsTransactionIdQueryKey>
  >({
    queryKey: getRechargeTransactionsTransactionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recharge.transactions[':transaction_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRechargeTransactionsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recharge.transactions)[':transaction_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.recharge.transactions)[':transaction_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.recharge.transactions)[':transaction_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRechargeTransactionsTransactionIdQueryKey>
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
      ...getRechargeTransactionsTransactionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getReferralAccountsQueryKey() {
  return ['referral', '/referral/accounts'] as const
}

export function getReferralAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.referral.accounts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.referral.accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReferralAccountsQueryKey>
  >({
    queryKey: getReferralAccountsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.referral.accounts.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReferralAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.referral.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.referral.accounts.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReferralAccountsQueryKey>
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
    return { ...getReferralAccountsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getResellerQueryKey() {
  return ['reseller', '/reseller'] as const
}

export function getResellerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getResellerQueryKey>
  >({
    queryKey: getResellerQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.reseller.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReseller<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getResellerQueryKey>
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
    return { ...getResellerQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutResellerMutationKey() {
  return ['reseller', '/reseller', 'PUT'] as const
}

export function getPutResellerMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.$put>>>>>,
    TError,
    InferRequestType<typeof client.reseller.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutResellerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reseller.$put>) {
      return parseResponse(client.reseller.$put(args, options))
    },
  })
}

export function createPutReseller<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.reseller.$put>,
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
    const mutationDefaults = getPutResellerMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getResellerAccountsQueryKey() {
  return ['reseller', '/reseller/accounts'] as const
}

export function getResellerAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.accounts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getResellerAccountsQueryKey>
  >({
    queryKey: getResellerAccountsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.reseller.accounts.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createResellerAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reseller.accounts.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getResellerAccountsQueryKey>
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
    return { ...getResellerAccountsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostResellerAccountsMutationKey() {
  return ['reseller', '/reseller/accounts', 'POST'] as const
}

export function getPostResellerAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.accounts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.reseller.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResellerAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reseller.accounts.$post>) {
      return parseResponse(client.reseller.accounts.$post(args, options))
    },
  })
}

export function createPostResellerAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reseller.accounts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.reseller.accounts.$post>,
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
    const mutationDefaults = getPostResellerAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostResellerAccountsPublicMutationKey() {
  return ['reseller', '/reseller/accounts-public', 'POST'] as const
}

export function getPostResellerAccountsPublicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reseller)['accounts-public']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.reseller)['accounts-public']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostResellerAccountsPublicMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.reseller)['accounts-public']['$post']>) {
      return parseResponse(client.reseller['accounts-public'].$post(args, options))
    },
  })
}

export function createPostResellerAccountsPublic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reseller)['accounts-public']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.reseller)['accounts-public']['$post']>,
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
    const mutationDefaults = getPostResellerAccountsPublicMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getResellerAccountsClientUserIdQueryKey(
  args: InferRequestType<(typeof client.reseller.accounts)[':client_user_id']['$get']>,
) {
  return ['reseller', '/reseller/accounts/:client_user_id', args] as const
}

export function getResellerAccountsClientUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reseller.accounts)[':client_user_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reseller.accounts)[':client_user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reseller.accounts)[':client_user_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResellerAccountsClientUserIdQueryKey>
  >({
    queryKey: getResellerAccountsClientUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reseller.accounts[':client_user_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createResellerAccountsClientUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reseller.accounts)[':client_user_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.reseller.accounts)[':client_user_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reseller.accounts)[':client_user_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getResellerAccountsClientUserIdQueryKey>
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
      ...getResellerAccountsClientUserIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutResellerAccountsClientUserIdMutationKey() {
  return ['reseller', '/reseller/accounts/:client_user_id', 'PUT'] as const
}

export function getPutResellerAccountsClientUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reseller.accounts)[':client_user_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.reseller.accounts)[':client_user_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutResellerAccountsClientUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.reseller.accounts)[':client_user_id']['$put']>,
    ) {
      return parseResponse(client.reseller.accounts[':client_user_id'].$put(args, options))
    },
  })
}

export function createPutResellerAccountsClientUserId<
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
                Awaited<ReturnType<(typeof client.reseller.accounts)[':client_user_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.reseller.accounts)[':client_user_id']['$put']>,
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
    const mutationDefaults = getPutResellerAccountsClientUserIdMutationOptions<
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

export function getPutResellerTransferCreditMutationKey() {
  return ['reseller', '/reseller/transfer-credit', 'PUT'] as const
}

export function getPutResellerTransferCreditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reseller)['transfer-credit']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.reseller)['transfer-credit']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutResellerTransferCreditMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.reseller)['transfer-credit']['$put']>) {
      return parseResponse(client.reseller['transfer-credit'].$put(args, options))
    },
  })
}

export function createPutResellerTransferCredit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reseller)['transfer-credit']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.reseller)['transfer-credit']['$put']>,
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
    const mutationDefaults = getPutResellerTransferCreditMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getResellerSubdomainQueryKey(
  args: InferRequestType<(typeof client.reseller)[':subdomain']['$get']>,
) {
  return ['reseller', '/reseller/:subdomain', args] as const
}

export function getResellerSubdomainQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reseller)[':subdomain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reseller)[':subdomain']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reseller)[':subdomain']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResellerSubdomainQueryKey>
  >({
    queryKey: getResellerSubdomainQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reseller[':subdomain'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createResellerSubdomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reseller)[':subdomain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.reseller)[':subdomain']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reseller)[':subdomain']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getResellerSubdomainQueryKey>
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
    return { ...getResellerSubdomainQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSdkDownloadTypeQueryKey(
  args: InferRequestType<(typeof client)['sdk-download'][':type']['$get']>,
) {
  return ['sdk-download', '/sdk-download/:type', args] as const
}

export function getSdkDownloadTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['sdk-download'][':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sdk-download'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sdk-download'][':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSdkDownloadTypeQueryKey>
  >({
    queryKey: getSdkDownloadTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sdk-download'][':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSdkDownloadType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['sdk-download'][':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['sdk-download'][':type']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sdk-download'][':type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSdkDownloadTypeQueryKey>
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
    return { ...getSdkDownloadTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSearchContactsListsQQQueryKey(
  args: InferRequestType<(typeof client.search)['contacts-lists?q={q}']['$get']>,
) {
  return ['search', '/search/contacts-lists?q={q}', args] as const
}

export function getSearchContactsListsQQQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['contacts-lists?q={q}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)['contacts-lists?q={q}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.search)['contacts-lists?q={q}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchContactsListsQQQueryKey>
  >({
    queryKey: getSearchContactsListsQQQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search['contacts-lists?q={q}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSearchContactsListsQQ<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['contacts-lists?q={q}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.search)['contacts-lists?q={q}']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search)['contacts-lists?q={q}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSearchContactsListsQQQueryKey>
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
      ...getSearchContactsListsQQQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSmsCampaignsQueryKey() {
  return ['sms-campaigns', '/sms-campaigns'] as const
}

export function getSmsCampaignsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sms-campaigns']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sms-campaigns']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmsCampaignsQueryKey>
  >({
    queryKey: getSmsCampaignsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['sms-campaigns'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSmsCampaigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sms-campaigns']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['sms-campaigns']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSmsCampaignsQueryKey>
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
    return { ...getSmsCampaignsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostSmsCampaignsPriceMutationKey() {
  return ['sms-campaigns', '/sms-campaigns/price', 'POST'] as const
}

export function getPostSmsCampaignsPriceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sms-campaigns']['price']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['sms-campaigns']['price']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsCampaignsPriceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['sms-campaigns']['price']['$post']>) {
      return parseResponse(client['sms-campaigns'].price.$post(args, options))
    },
  })
}

export function createPostSmsCampaignsPrice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sms-campaigns']['price']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['sms-campaigns']['price']['$post']>,
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
    const mutationDefaults = getPostSmsCampaignsPriceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSmsCampaignsSendMutationKey() {
  return ['sms-campaigns', '/sms-campaigns/send', 'POST'] as const
}

export function getPostSmsCampaignsSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sms-campaigns']['send']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['sms-campaigns']['send']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsCampaignsSendMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['sms-campaigns']['send']['$post']>) {
      return parseResponse(client['sms-campaigns'].send.$post(args, options))
    },
  })
}

export function createPostSmsCampaignsSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sms-campaigns']['send']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['sms-campaigns']['send']['$post']>,
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
    const mutationDefaults = getPostSmsCampaignsSendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSmsCampaignsCampaignIdLinkExportFilenameFilenameQueryKey(
  args: InferRequestType<
    (typeof client)['sms-campaigns'][':campaign_id']['link-export?filename={filename}']['$get']
  >,
) {
  return [
    'sms-campaigns',
    '/sms-campaigns/:campaign_id/link-export?filename={filename}',
    args,
  ] as const
}

export function getSmsCampaignsCampaignIdLinkExportFilenameFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sms-campaigns'][':campaign_id']['link-export?filename={filename}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['sms-campaigns'][':campaign_id']['link-export?filename={filename}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sms-campaigns'][':campaign_id']['link-export?filename={filename}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmsCampaignsCampaignIdLinkExportFilenameFilenameQueryKey>
  >({
    queryKey: getSmsCampaignsCampaignIdLinkExportFilenameFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sms-campaigns'][':campaign_id']['link-export?filename={filename}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSmsCampaignsCampaignIdLinkExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sms-campaigns'][':campaign_id']['link-export?filename={filename}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['sms-campaigns'][':campaign_id']['link-export?filename={filename}']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['sms-campaigns'][':campaign_id']['link-export?filename={filename}']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSmsCampaignsCampaignIdLinkExportFilenameFilenameQueryKey>
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
      ...getSmsCampaignsCampaignIdLinkExportFilenameFilenameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSmsCampaignsCampaignIdLinkStatisticsQueryKey(
  args: InferRequestType<
    (typeof client)['sms-campaigns'][':campaign_id']['link-statistics']['$get']
  >,
) {
  return ['sms-campaigns', '/sms-campaigns/:campaign_id/link-statistics', args] as const
}

export function getSmsCampaignsCampaignIdLinkStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['sms-campaigns'][':campaign_id']['link-statistics']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['sms-campaigns'][':campaign_id']['link-statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['sms-campaigns'][':campaign_id']['link-statistics']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmsCampaignsCampaignIdLinkStatisticsQueryKey>
  >({
    queryKey: getSmsCampaignsCampaignIdLinkStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sms-campaigns'][':campaign_id']['link-statistics'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSmsCampaignsCampaignIdLinkStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['sms-campaigns'][':campaign_id']['link-statistics']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['sms-campaigns'][':campaign_id']['link-statistics']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getSmsCampaignsCampaignIdLinkStatisticsQueryKey>
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
      ...getSmsCampaignsCampaignIdLinkStatisticsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSmsCampaignsCampaignIdLinkTrackingQueryKey(
  args: InferRequestType<(typeof client)['sms-campaigns'][':campaign_id']['link-tracking']['$get']>,
) {
  return ['sms-campaigns', '/sms-campaigns/:campaign_id/link-tracking', args] as const
}

export function getSmsCampaignsCampaignIdLinkTrackingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['sms-campaigns'][':campaign_id']['link-tracking']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sms-campaigns'][':campaign_id']['link-tracking']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['sms-campaigns'][':campaign_id']['link-tracking']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmsCampaignsCampaignIdLinkTrackingQueryKey>
  >({
    queryKey: getSmsCampaignsCampaignIdLinkTrackingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sms-campaigns'][':campaign_id']['link-tracking'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSmsCampaignsCampaignIdLinkTracking<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['sms-campaigns'][':campaign_id']['link-tracking']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['sms-campaigns'][':campaign_id']['link-tracking']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['sms-campaigns'][':campaign_id']['link-tracking']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSmsCampaignsCampaignIdLinkTrackingQueryKey>
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
      ...getSmsCampaignsCampaignIdLinkTrackingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSmsCampaignsSmsCampaignIdQueryKey(
  args: InferRequestType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$get']>,
) {
  return ['sms-campaigns', '/sms-campaigns/:sms_campaign_id', args] as const
}

export function getSmsCampaignsSmsCampaignIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmsCampaignsSmsCampaignIdQueryKey>
  >({
    queryKey: getSmsCampaignsSmsCampaignIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sms-campaigns'][':sms_campaign_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSmsCampaignsSmsCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSmsCampaignsSmsCampaignIdQueryKey>
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
      ...getSmsCampaignsSmsCampaignIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutSmsCampaignsSmsCampaignIdMutationKey() {
  return ['sms-campaigns', '/sms-campaigns/:sms_campaign_id', 'PUT'] as const
}

export function getPutSmsCampaignsSmsCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSmsCampaignsSmsCampaignIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$put']>,
    ) {
      return parseResponse(client['sms-campaigns'][':sms_campaign_id'].$put(args, options))
    },
  })
}

export function createPutSmsCampaignsSmsCampaignId<
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
                Awaited<ReturnType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$put']>,
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
    const mutationDefaults = getPutSmsCampaignsSmsCampaignIdMutationOptions<
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

export function getPutSmsCampaignsSmsCampaignIdCancelMutationKey() {
  return ['sms-campaigns', '/sms-campaigns/:sms_campaign_id/cancel', 'PUT'] as const
}

export function getPutSmsCampaignsSmsCampaignIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['sms-campaigns'][':sms_campaign_id']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSmsCampaignsSmsCampaignIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sms-campaigns'][':sms_campaign_id']['cancel']['$put']
      >,
    ) {
      return parseResponse(client['sms-campaigns'][':sms_campaign_id'].cancel.$put(args, options))
    },
  })
}

export function createPutSmsCampaignsSmsCampaignIdCancel<
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
                  ReturnType<(typeof client)['sms-campaigns'][':sms_campaign_id']['cancel']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['sms-campaigns'][':sms_campaign_id']['cancel']['$put']>,
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
    const mutationDefaults = getPutSmsCampaignsSmsCampaignIdCancelMutationOptions<
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

export function getPutSmsCancelAllMutationKey() {
  return ['sms', '/sms/cancel-all', 'PUT'] as const
}

export function getPutSmsCancelAllMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['cancel-all']['$put']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutSmsCancelAllMutationKey(),
    async mutationFn() {
      return parseResponse(client.sms['cancel-all'].$put(undefined, options))
    },
  })
}

export function createPutSmsCancelAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['cancel-all']['$put']>>>
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
    const mutationDefaults = getPutSmsCancelAllMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSmsEmailSmsQueryKey() {
  return ['sms', '/sms/email-sms'] as const
}

export function getSmsEmailSmsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['email-sms']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['email-sms']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmsEmailSmsQueryKey>
  >({
    queryKey: getSmsEmailSmsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sms['email-sms'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSmsEmailSms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['email-sms']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['email-sms']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSmsEmailSmsQueryKey>
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
    return { ...getSmsEmailSmsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostSmsEmailSmsMutationKey() {
  return ['sms', '/sms/email-sms', 'POST'] as const
}

export function getPostSmsEmailSmsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['email-sms']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sms)['email-sms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsEmailSmsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sms)['email-sms']['$post']>) {
      return parseResponse(client.sms['email-sms'].$post(args, options))
    },
  })
}

export function createPostSmsEmailSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['email-sms']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.sms)['email-sms']['$post']>,
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
    const mutationDefaults = getPostSmsEmailSmsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSmsEmailSmsStrippedStringsQueryKey() {
  return ['sms', '/sms/email-sms-stripped-strings'] as const
}

export function getSmsEmailSmsStrippedStringsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sms)['email-sms-stripped-strings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms)['email-sms-stripped-strings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmsEmailSmsStrippedStringsQueryKey>
  >({
    queryKey: getSmsEmailSmsStrippedStringsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sms['email-sms-stripped-strings'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSmsEmailSmsStrippedStrings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sms)['email-sms-stripped-strings']['$get']>>
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
                Awaited<ReturnType<(typeof client.sms)['email-sms-stripped-strings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSmsEmailSmsStrippedStringsQueryKey>
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
    return { ...getSmsEmailSmsStrippedStringsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostSmsEmailSmsStrippedStringsMutationKey() {
  return ['sms', '/sms/email-sms-stripped-strings', 'POST'] as const
}

export function getPostSmsEmailSmsStrippedStringsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms)['email-sms-stripped-strings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sms)['email-sms-stripped-strings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsEmailSmsStrippedStringsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sms)['email-sms-stripped-strings']['$post']>,
    ) {
      return parseResponse(client.sms['email-sms-stripped-strings'].$post(args, options))
    },
  })
}

export function createPostSmsEmailSmsStrippedStrings<
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
                Awaited<ReturnType<(typeof client.sms)['email-sms-stripped-strings']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sms)['email-sms-stripped-strings']['$post']>,
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
    const mutationDefaults = getPostSmsEmailSmsStrippedStringsMutationOptions<
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

export function getSmsEmailSmsStrippedStringsRuleIdQueryKey(
  args: InferRequestType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$get']>,
) {
  return ['sms', '/sms/email-sms-stripped-strings/:rule_id', args] as const
}

export function getSmsEmailSmsStrippedStringsRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmsEmailSmsStrippedStringsRuleIdQueryKey>
  >({
    queryKey: getSmsEmailSmsStrippedStringsRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sms['email-sms-stripped-strings'][':rule_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSmsEmailSmsStrippedStringsRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSmsEmailSmsStrippedStringsRuleIdQueryKey>
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
      ...getSmsEmailSmsStrippedStringsRuleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutSmsEmailSmsStrippedStringsRuleIdMutationKey() {
  return ['sms', '/sms/email-sms-stripped-strings/:rule_id', 'PUT'] as const
}

export function getPutSmsEmailSmsStrippedStringsRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSmsEmailSmsStrippedStringsRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$put']>,
    ) {
      return parseResponse(client.sms['email-sms-stripped-strings'][':rule_id'].$put(args, options))
    },
  })
}

export function createPutSmsEmailSmsStrippedStringsRuleId<
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
                  ReturnType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$put']>,
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
    const mutationDefaults = getPutSmsEmailSmsStrippedStringsRuleIdMutationOptions<
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

export function getDeleteSmsEmailSmsStrippedStringsRuleIdMutationKey() {
  return ['sms', '/sms/email-sms-stripped-strings/:rule_id', 'DELETE'] as const
}

export function getDeleteSmsEmailSmsStrippedStringsRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSmsEmailSmsStrippedStringsRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.sms['email-sms-stripped-strings'][':rule_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteSmsEmailSmsStrippedStringsRuleId<
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
                    (typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$delete']
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
    const mutationDefaults = getDeleteSmsEmailSmsStrippedStringsRuleIdMutationOptions<
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

export function getSmsEmailSmsEmailAddressIdQueryKey(
  args: InferRequestType<(typeof client.sms)['email-sms'][':email_address_id']['$get']>,
) {
  return ['sms', '/sms/email-sms/:email_address_id', args] as const
}

export function getSmsEmailSmsEmailAddressIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sms)['email-sms'][':email_address_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sms)['email-sms'][':email_address_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms)['email-sms'][':email_address_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmsEmailSmsEmailAddressIdQueryKey>
  >({
    queryKey: getSmsEmailSmsEmailAddressIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sms['email-sms'][':email_address_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSmsEmailSmsEmailAddressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sms)['email-sms'][':email_address_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sms)['email-sms'][':email_address_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sms)['email-sms'][':email_address_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSmsEmailSmsEmailAddressIdQueryKey>
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
      ...getSmsEmailSmsEmailAddressIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutSmsEmailSmsEmailAddressIdMutationKey() {
  return ['sms', '/sms/email-sms/:email_address_id', 'PUT'] as const
}

export function getPutSmsEmailSmsEmailAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms)['email-sms'][':email_address_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sms)['email-sms'][':email_address_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSmsEmailSmsEmailAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sms)['email-sms'][':email_address_id']['$put']>,
    ) {
      return parseResponse(client.sms['email-sms'][':email_address_id'].$put(args, options))
    },
  })
}

export function createPutSmsEmailSmsEmailAddressId<
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
                Awaited<ReturnType<(typeof client.sms)['email-sms'][':email_address_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sms)['email-sms'][':email_address_id']['$put']>,
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
    const mutationDefaults = getPutSmsEmailSmsEmailAddressIdMutationOptions<
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

export function getDeleteSmsEmailSmsEmailAddressIdMutationKey() {
  return ['sms', '/sms/email-sms/:email_address_id', 'DELETE'] as const
}

export function getDeleteSmsEmailSmsEmailAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms)['email-sms'][':email_address_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sms)['email-sms'][':email_address_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSmsEmailSmsEmailAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sms)['email-sms'][':email_address_id']['$delete']>,
    ) {
      return parseResponse(client.sms['email-sms'][':email_address_id'].$delete(args, options))
    },
  })
}

export function createDeleteSmsEmailSmsEmailAddressId<
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
                  ReturnType<(typeof client.sms)['email-sms'][':email_address_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sms)['email-sms'][':email_address_id']['$delete']>,
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
    const mutationDefaults = getDeleteSmsEmailSmsEmailAddressIdMutationOptions<
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

export function getSmsHistoryExportFilenameFilenameQueryKey(
  args: InferRequestType<(typeof client.sms.history)['export?filename={filename}']['$get']>,
) {
  return ['sms', '/sms/history/export?filename={filename}', args] as const
}

export function getSmsHistoryExportFilenameFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sms.history)['export?filename={filename}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sms.history)['export?filename={filename}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms.history)['export?filename={filename}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmsHistoryExportFilenameFilenameQueryKey>
  >({
    queryKey: getSmsHistoryExportFilenameFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sms.history['export?filename={filename}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSmsHistoryExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sms.history)['export?filename={filename}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sms.history)['export?filename={filename}']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sms.history)['export?filename={filename}']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSmsHistoryExportFilenameFilenameQueryKey>
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
      ...getSmsHistoryExportFilenameFilenameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSmsHistoryDateFromDateFromDateToDateToQueryKey(
  args: InferRequestType<
    (typeof client.sms)['history?date_from={date_from}&date_to={date_to}']['$get']
  >,
) {
  return ['sms', '/sms/history?date_from={date_from}&date_to={date_to}', args] as const
}

export function getSmsHistoryDateFromDateFromDateToDateToQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sms)['history?date_from={date_from}&date_to={date_to}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sms)['history?date_from={date_from}&date_to={date_to}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sms)['history?date_from={date_from}&date_to={date_to}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmsHistoryDateFromDateFromDateToDateToQueryKey>
  >({
    queryKey: getSmsHistoryDateFromDateFromDateToDateToQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sms['history?date_from={date_from}&date_to={date_to}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSmsHistoryDateFromDateFromDateToDateTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sms)['history?date_from={date_from}&date_to={date_to}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.sms)['history?date_from={date_from}&date_to={date_to}']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.sms)['history?date_from={date_from}&date_to={date_to}']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSmsHistoryDateFromDateFromDateToDateToQueryKey>
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
      ...getSmsHistoryDateFromDateFromDateToDateToQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSmsInboundQueryKey() {
  return ['sms', '/sms/inbound'] as const
}

export function getSmsInboundQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.inbound.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.inbound.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSmsInboundQueryKey>
  >({
    queryKey: getSmsInboundQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sms.inbound.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSmsInbound<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.inbound.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.inbound.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSmsInboundQueryKey>
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
    return { ...getSmsInboundQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostSmsInboundMutationKey() {
  return ['sms', '/sms/inbound', 'POST'] as const
}

export function getPostSmsInboundMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.inbound.$post>>>>>,
    TError,
    InferRequestType<typeof client.sms.inbound.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsInboundMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sms.inbound.$post>) {
      return parseResponse(client.sms.inbound.$post(args, options))
    },
  })
}

export function createPostSmsInbound<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.inbound.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sms.inbound.$post>,
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
    const mutationDefaults = getPostSmsInboundMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutSmsInboundReadMutationKey() {
  return ['sms', '/sms/inbound-read', 'PUT'] as const
}

export function getPutSmsInboundReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['inbound-read']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sms)['inbound-read']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSmsInboundReadMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sms)['inbound-read']['$put']>) {
      return parseResponse(client.sms['inbound-read'].$put(args, options))
    },
  })
}

export function createPutSmsInboundRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['inbound-read']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.sms)['inbound-read']['$put']>,
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
    const mutationDefaults = getPutSmsInboundReadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutSmsInboundReadMessageIdMutationKey() {
  return ['sms', '/sms/inbound-read/:message_id', 'PUT'] as const
}

export function getPutSmsInboundReadMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms)['inbound-read'][':message_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sms)['inbound-read'][':message_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSmsInboundReadMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sms)['inbound-read'][':message_id']['$put']>,
    ) {
      return parseResponse(client.sms['inbound-read'][':message_id'].$put(args, options))
    },
  })
}

export function createPutSmsInboundReadMessageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sms)['inbound-read'][':message_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sms)['inbound-read'][':message_id']['$put']>,
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
    const mutationDefaults = getPutSmsInboundReadMessageIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSmsInboundOutboundMessageIdQueryKey(
  args: InferRequestType<(typeof client.sms.inbound)[':outbound_message_id']['$get']>,
) {
  return ['sms', '/sms/inbound/:outbound_message_id', args] as const
}

export function getSmsInboundOutboundMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sms.inbound)[':outbound_message_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sms.inbound)[':outbound_message_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms.inbound)[':outbound_message_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmsInboundOutboundMessageIdQueryKey>
  >({
    queryKey: getSmsInboundOutboundMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sms.inbound[':outbound_message_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSmsInboundOutboundMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sms.inbound)[':outbound_message_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sms.inbound)[':outbound_message_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sms.inbound)[':outbound_message_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSmsInboundOutboundMessageIdQueryKey>
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
      ...getSmsInboundOutboundMessageIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSmsPriceMutationKey() {
  return ['sms', '/sms/price', 'POST'] as const
}

export function getPostSmsPriceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.price.$post>>>>>,
    TError,
    InferRequestType<typeof client.sms.price.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsPriceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sms.price.$post>) {
      return parseResponse(client.sms.price.$post(args, options))
    },
  })
}

export function createPostSmsPrice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.price.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sms.price.$post>,
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
    const mutationDefaults = getPostSmsPriceMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSmsReceiptsQueryKey() {
  return ['sms', '/sms/receipts'] as const
}

export function getSmsReceiptsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.receipts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.receipts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSmsReceiptsQueryKey>
  >({
    queryKey: getSmsReceiptsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sms.receipts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSmsReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.receipts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.receipts.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSmsReceiptsQueryKey>
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
    return { ...getSmsReceiptsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostSmsReceiptsMutationKey() {
  return ['sms', '/sms/receipts', 'POST'] as const
}

export function getPostSmsReceiptsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.receipts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sms.receipts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsReceiptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sms.receipts.$post>) {
      return parseResponse(client.sms.receipts.$post(args, options))
    },
  })
}

export function createPostSmsReceipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.receipts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sms.receipts.$post>,
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
    const mutationDefaults = getPostSmsReceiptsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutSmsReceiptsReadMutationKey() {
  return ['sms', '/sms/receipts-read', 'PUT'] as const
}

export function getPutSmsReceiptsReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['receipts-read']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sms)['receipts-read']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSmsReceiptsReadMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sms)['receipts-read']['$put']>) {
      return parseResponse(client.sms['receipts-read'].$put(args, options))
    },
  })
}

export function createPutSmsReceiptsRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sms)['receipts-read']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sms)['receipts-read']['$put']>,
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
    const mutationDefaults = getPutSmsReceiptsReadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSmsReceiptsMessageIdQueryKey(
  args: InferRequestType<(typeof client.sms.receipts)[':message_id']['$get']>,
) {
  return ['sms', '/sms/receipts/:message_id', args] as const
}

export function getSmsReceiptsMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sms.receipts)[':message_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sms.receipts)[':message_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms.receipts)[':message_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmsReceiptsMessageIdQueryKey>
  >({
    queryKey: getSmsReceiptsMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sms.receipts[':message_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSmsReceiptsMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sms.receipts)[':message_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sms.receipts)[':message_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sms.receipts)[':message_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSmsReceiptsMessageIdQueryKey>
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
      ...getSmsReceiptsMessageIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSmsSendMutationKey() {
  return ['sms', '/sms/send', 'POST'] as const
}

export function getPostSmsSendMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.send.$post>>>>>,
    TError,
    InferRequestType<typeof client.sms.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sms.send.$post>) {
      return parseResponse(client.sms.send.$post(args, options))
    },
  })
}

export function createPostSmsSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.send.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sms.send.$post>,
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
    const mutationDefaults = getPostSmsSendMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSmsTemplatesQueryKey() {
  return ['sms', '/sms/templates'] as const
}

export function getSmsTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.templates.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSmsTemplatesQueryKey>
  >({
    queryKey: getSmsTemplatesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sms.templates.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSmsTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.templates.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSmsTemplatesQueryKey>
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
    return { ...getSmsTemplatesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostSmsTemplatesMutationKey() {
  return ['sms', '/sms/templates', 'POST'] as const
}

export function getPostSmsTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.templates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sms.templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sms.templates.$post>) {
      return parseResponse(client.sms.templates.$post(args, options))
    },
  })
}

export function createPostSmsTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.templates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sms.templates.$post>,
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
    const mutationDefaults = getPostSmsTemplatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutSmsTemplatesTemplateIdMutationKey() {
  return ['sms', '/sms/templates/:template_id', 'PUT'] as const
}

export function getPutSmsTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms.templates)[':template_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sms.templates)[':template_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSmsTemplatesTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sms.templates)[':template_id']['$put']>,
    ) {
      return parseResponse(client.sms.templates[':template_id'].$put(args, options))
    },
  })
}

export function createPutSmsTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sms.templates)[':template_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sms.templates)[':template_id']['$put']>,
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
    const mutationDefaults = getPutSmsTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteSmsTemplatesTemplateIdMutationKey() {
  return ['sms', '/sms/templates/:template_id', 'DELETE'] as const
}

export function getDeleteSmsTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms.templates)[':template_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sms.templates)[':template_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSmsTemplatesTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sms.templates)[':template_id']['$delete']>,
    ) {
      return parseResponse(client.sms.templates[':template_id'].$delete(args, options))
    },
  })
}

export function createDeleteSmsTemplatesTemplateId<
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
                Awaited<ReturnType<(typeof client.sms.templates)[':template_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sms.templates)[':template_id']['$delete']>,
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
    const mutationDefaults = getDeleteSmsTemplatesTemplateIdMutationOptions<
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

export function getPutSmsMessageIdCancelMutationKey() {
  return ['sms', '/sms/:message_id/cancel', 'PUT'] as const
}

export function getPutSmsMessageIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms)[':message_id']['cancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sms)[':message_id']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSmsMessageIdCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sms)[':message_id']['cancel']['$put']>) {
      return parseResponse(client.sms[':message_id'].cancel.$put(args, options))
    },
  })
}

export function createPutSmsMessageIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sms)[':message_id']['cancel']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sms)[':message_id']['cancel']['$put']>,
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
    const mutationDefaults = getPutSmsMessageIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStatisticsSmsQueryKey() {
  return ['statistics', '/statistics/sms'] as const
}

export function getStatisticsSmsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.sms.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.sms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatisticsSmsQueryKey>
  >({
    queryKey: getStatisticsSmsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.statistics.sms.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatisticsSms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.sms.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.sms.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getStatisticsSmsQueryKey>
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
    return { ...getStatisticsSmsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatisticsVoiceQueryKey() {
  return ['statistics', '/statistics/voice'] as const
}

export function getStatisticsVoiceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.voice.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.voice.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatisticsVoiceQueryKey>
  >({
    queryKey: getStatisticsVoiceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.statistics.voice.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatisticsVoice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.voice.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.statistics.voice.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatisticsVoiceQueryKey>
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
    return { ...getStatisticsVoiceQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSubaccountsQueryKey() {
  return ['subaccounts', '/subaccounts'] as const
}

export function getSubaccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSubaccountsQueryKey>
  >({
    queryKey: getSubaccountsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.subaccounts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSubaccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSubaccountsQueryKey>
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
    return { ...getSubaccountsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostSubaccountsMutationKey() {
  return ['subaccounts', '/subaccounts', 'POST'] as const
}

export function getPostSubaccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.$post>>>>>,
    TError,
    InferRequestType<typeof client.subaccounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubaccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subaccounts.$post>) {
      return parseResponse(client.subaccounts.$post(args, options))
    },
  })
}

export function createPostSubaccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.subaccounts.$post>,
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
    const mutationDefaults = getPostSubaccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSubaccountsSubaccountIdQueryKey(
  args: InferRequestType<(typeof client.subaccounts)[':subaccount_id']['$get']>,
) {
  return ['subaccounts', '/subaccounts/:subaccount_id', args] as const
}

export function getSubaccountsSubaccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subaccounts)[':subaccount_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subaccounts)[':subaccount_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subaccounts)[':subaccount_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubaccountsSubaccountIdQueryKey>
  >({
    queryKey: getSubaccountsSubaccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subaccounts[':subaccount_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubaccountsSubaccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subaccounts)[':subaccount_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.subaccounts)[':subaccount_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subaccounts)[':subaccount_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSubaccountsSubaccountIdQueryKey>
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
      ...getSubaccountsSubaccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutSubaccountsSubaccountIdMutationKey() {
  return ['subaccounts', '/subaccounts/:subaccount_id', 'PUT'] as const
}

export function getPutSubaccountsSubaccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subaccounts)[':subaccount_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subaccounts)[':subaccount_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSubaccountsSubaccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subaccounts)[':subaccount_id']['$put']>,
    ) {
      return parseResponse(client.subaccounts[':subaccount_id'].$put(args, options))
    },
  })
}

export function createPutSubaccountsSubaccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subaccounts)[':subaccount_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subaccounts)[':subaccount_id']['$put']>,
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
    const mutationDefaults = getPutSubaccountsSubaccountIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteSubaccountsSubaccountIdMutationKey() {
  return ['subaccounts', '/subaccounts/:subaccount_id', 'DELETE'] as const
}

export function getDeleteSubaccountsSubaccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subaccounts)[':subaccount_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subaccounts)[':subaccount_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSubaccountsSubaccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subaccounts)[':subaccount_id']['$delete']>,
    ) {
      return parseResponse(client.subaccounts[':subaccount_id'].$delete(args, options))
    },
  })
}

export function createDeleteSubaccountsSubaccountId<
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
                Awaited<ReturnType<(typeof client.subaccounts)[':subaccount_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subaccounts)[':subaccount_id']['$delete']>,
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
    const mutationDefaults = getDeleteSubaccountsSubaccountIdMutationOptions<
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

export function getPutSubaccountsSubaccountIdRegenApiKeyMutationKey() {
  return ['subaccounts', '/subaccounts/:subaccount_id/regen-api-key', 'PUT'] as const
}

export function getPutSubaccountsSubaccountIdRegenApiKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.subaccounts)[':subaccount_id']['regen-api-key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSubaccountsSubaccountIdRegenApiKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subaccounts)[':subaccount_id']['regen-api-key']['$put']
      >,
    ) {
      return parseResponse(
        client.subaccounts[':subaccount_id']['regen-api-key'].$put(args, options),
      )
    },
  })
}

export function createPutSubaccountsSubaccountIdRegenApiKey<
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
                  ReturnType<(typeof client.subaccounts)[':subaccount_id']['regen-api-key']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subaccounts)[':subaccount_id']['regen-api-key']['$put']>,
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
    const mutationDefaults = getPutSubaccountsSubaccountIdRegenApiKeyMutationOptions<
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

export function getTimezonesQueryKey() {
  return ['timezones', '/timezones'] as const
}

export function getTimezonesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezones.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezones.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimezonesQueryKey>
  >({
    queryKey: getTimezonesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.timezones.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTimezones<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezones.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezones.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getTimezonesQueryKey>
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
    return { ...getTimezonesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostUploadsConvertConvertMutationKey() {
  return ['uploads?convert={convert}', '/uploads?convert={convert}', 'POST'] as const
}

export function getPostUploadsConvertConvertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['uploads?convert={convert}']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['uploads?convert={convert}']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadsConvertConvertMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['uploads?convert={convert}']['$post']>,
    ) {
      return parseResponse(client['uploads?convert={convert}'].$post(args, options))
    },
  })
}

export function createPostUploadsConvertConvert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['uploads?convert={convert}']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['uploads?convert={convert}']['$post']>,
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
    const mutationDefaults = getPostUploadsConvertConvertMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVoiceCancelAllMutationKey() {
  return ['voice', '/voice/cancel-all', 'PUT'] as const
}

export function getPutVoiceCancelAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.voice)['cancel-all']['$put']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutVoiceCancelAllMutationKey(),
    async mutationFn() {
      return parseResponse(client.voice['cancel-all'].$put(undefined, options))
    },
  })
}

export function createPutVoiceCancelAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.voice)['cancel-all']['$put']>>>
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
    const mutationDefaults = getPutVoiceCancelAllMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVoiceHistoryExportFilenameFilenameQueryKey(
  args: InferRequestType<(typeof client.voice.history)['export?filename={filename}']['$get']>,
) {
  return ['voice', '/voice/history/export?filename={filename}', args] as const
}

export function getVoiceHistoryExportFilenameFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.voice.history)['export?filename={filename}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.voice.history)['export?filename={filename}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.voice.history)['export?filename={filename}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceHistoryExportFilenameFilenameQueryKey>
  >({
    queryKey: getVoiceHistoryExportFilenameFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.voice.history['export?filename={filename}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVoiceHistoryExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.voice.history)['export?filename={filename}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.voice.history)['export?filename={filename}']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.voice.history)['export?filename={filename}']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVoiceHistoryExportFilenameFilenameQueryKey>
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
      ...getVoiceHistoryExportFilenameFilenameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getVoiceHistoryDateFromDateFromDateToDateToQueryKey(
  args: InferRequestType<
    (typeof client.voice)['history?date_from={date_from}&date_to={date_to}']['$get']
  >,
) {
  return ['voice', '/voice/history?date_from={date_from}&date_to={date_to}', args] as const
}

export function getVoiceHistoryDateFromDateFromDateToDateToQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.voice)['history?date_from={date_from}&date_to={date_to}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.voice)['history?date_from={date_from}&date_to={date_to}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.voice)['history?date_from={date_from}&date_to={date_to}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceHistoryDateFromDateFromDateToDateToQueryKey>
  >({
    queryKey: getVoiceHistoryDateFromDateFromDateToDateToQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.voice['history?date_from={date_from}&date_to={date_to}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVoiceHistoryDateFromDateFromDateToDateTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.voice)['history?date_from={date_from}&date_to={date_to}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.voice)['history?date_from={date_from}&date_to={date_to}']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.voice)['history?date_from={date_from}&date_to={date_to}']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVoiceHistoryDateFromDateFromDateToDateToQueryKey>
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
      ...getVoiceHistoryDateFromDateFromDateToDateToQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getVoiceLangQueryKey() {
  return ['voice', '/voice/lang'] as const
}

export function getVoiceLangQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.lang.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.lang.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVoiceLangQueryKey>
  >({
    queryKey: getVoiceLangQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.voice.lang.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVoiceLang<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.lang.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.lang.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getVoiceLangQueryKey>
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
    return { ...getVoiceLangQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostVoicePriceMutationKey() {
  return ['voice', '/voice/price', 'POST'] as const
}

export function getPostVoicePriceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.price.$post>>>>>,
    TError,
    InferRequestType<typeof client.voice.price.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVoicePriceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.voice.price.$post>) {
      return parseResponse(client.voice.price.$post(args, options))
    },
  })
}

export function createPostVoicePrice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.price.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.voice.price.$post>,
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
    const mutationDefaults = getPostVoicePriceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVoiceReceiptsQueryKey() {
  return ['voice', '/voice/receipts'] as const
}

export function getVoiceReceiptsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.receipts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.receipts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceReceiptsQueryKey>
  >({
    queryKey: getVoiceReceiptsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.voice.receipts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVoiceReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.receipts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.receipts.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getVoiceReceiptsQueryKey>
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
    return { ...getVoiceReceiptsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostVoiceReceiptsMutationKey() {
  return ['voice', '/voice/receipts', 'POST'] as const
}

export function getPostVoiceReceiptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.receipts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.voice.receipts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVoiceReceiptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.voice.receipts.$post>) {
      return parseResponse(client.voice.receipts.$post(args, options))
    },
  })
}

export function createPostVoiceReceipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.voice.receipts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.voice.receipts.$post>,
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
    const mutationDefaults = getPostVoiceReceiptsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVoiceReceiptsReadDateBeforeDateBeforeMutationKey() {
  return ['voice', '/voice/receipts-read?date_before={date_before}', 'PUT'] as const
}

export function getPutVoiceReceiptsReadDateBeforeDateBeforeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.voice)['receipts-read?date_before={date_before}']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.voice)['receipts-read?date_before={date_before}']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVoiceReceiptsReadDateBeforeDateBeforeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.voice)['receipts-read?date_before={date_before}']['$put']
      >,
    ) {
      return parseResponse(
        client.voice['receipts-read?date_before={date_before}'].$put(args, options),
      )
    },
  })
}

export function createPutVoiceReceiptsReadDateBeforeDateBefore<
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
                    (typeof client.voice)['receipts-read?date_before={date_before}']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.voice)['receipts-read?date_before={date_before}']['$put']
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
    const mutationDefaults = getPutVoiceReceiptsReadDateBeforeDateBeforeMutationOptions<
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

export function getVoiceReceiptsMessageIdQueryKey(
  args: InferRequestType<(typeof client.voice.receipts)[':message_id']['$get']>,
) {
  return ['voice', '/voice/receipts/:message_id', args] as const
}

export function getVoiceReceiptsMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.voice.receipts)[':message_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.voice.receipts)[':message_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.voice.receipts)[':message_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceReceiptsMessageIdQueryKey>
  >({
    queryKey: getVoiceReceiptsMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.voice.receipts[':message_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVoiceReceiptsMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.voice.receipts)[':message_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.voice.receipts)[':message_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.voice.receipts)[':message_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVoiceReceiptsMessageIdQueryKey>
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
      ...getVoiceReceiptsMessageIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostVoiceSendMutationKey() {
  return ['voice', '/voice/send', 'POST'] as const
}

export function getPostVoiceSendMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.send.$post>>>>>,
    TError,
    InferRequestType<typeof client.voice.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVoiceSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.voice.send.$post>) {
      return parseResponse(client.voice.send.$post(args, options))
    },
  })
}

export function createPostVoiceSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.send.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.voice.send.$post>,
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
    const mutationDefaults = getPostVoiceSendMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutVoiceMessageIdCancelMutationKey() {
  return ['voice', '/voice/:message_id/cancel', 'PUT'] as const
}

export function getPutVoiceMessageIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.voice)[':message_id']['cancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.voice)[':message_id']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVoiceMessageIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.voice)[':message_id']['cancel']['$put']>,
    ) {
      return parseResponse(client.voice[':message_id'].cancel.$put(args, options))
    },
  })
}

export function createPutVoiceMessageIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.voice)[':message_id']['cancel']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.voice)[':message_id']['cancel']['$put']>,
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
    const mutationDefaults = getPutVoiceMessageIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
