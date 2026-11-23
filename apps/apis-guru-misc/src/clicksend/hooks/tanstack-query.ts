import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePutAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$put>>>>>,
        TError,
        InferRequestType<typeof client.account.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$post>>>>>,
        TError,
        InferRequestType<typeof client.account.$post>,
        TOnMutateResult
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

export function usePutAccountVerifySend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountVerifySendMutationOptions<TError, TOnMutateResult>(
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

export function usePutAccountVerifyVerifyActivationToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountVerifyVerifyActivationTokenMutationOptions<
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

export function useAccountUsageYearMonthType<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountUsageYearMonthTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountUsageYearMonthType<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountUsageYearMonthTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAutomationsEmailReceipt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.email.receipt.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.automations.email.receipt.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationsEmailReceiptQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAutomationsEmailReceiptQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAutomationsEmailReceipt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.email.receipt.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.automations.email.receipt.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationsEmailReceiptQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAutomationsEmailReceiptQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostAutomationsEmailReceipt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.automations.email.receipt.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.automations.email.receipt.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAutomationsEmailReceiptMutationOptions<TError, TOnMutateResult>(
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

export function useAutomationsEmailReceiptRuleId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAutomationsEmailReceiptRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationsEmailReceiptRuleId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAutomationsEmailReceiptRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutAutomationsEmailReceiptRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAutomationsEmailReceiptRuleIdMutationOptions<
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

export function useDeleteAutomationsEmailReceiptRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAutomationsEmailReceiptRuleIdMutationOptions<
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

export function useAutomationsFaxInbound<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.inbound.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.inbound.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationsFaxInboundQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAutomationsFaxInboundQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAutomationsFaxInbound<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.inbound.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.inbound.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationsFaxInboundQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAutomationsFaxInboundQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostAutomationsFaxInbound<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.inbound.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.automations.fax.inbound.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAutomationsFaxInboundMutationOptions<TError, TOnMutateResult>(
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

export function useAutomationsFaxInboundInboundRuleId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAutomationsFaxInboundInboundRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationsFaxInboundInboundRuleId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAutomationsFaxInboundInboundRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutAutomationsFaxInboundInboundRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAutomationsFaxInboundInboundRuleIdMutationOptions<
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

export function useDeleteAutomationsFaxInboundInboundRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAutomationsFaxInboundInboundRuleIdMutationOptions<
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

export function useAutomationsFaxReceipts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.receipts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.receipts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationsFaxReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAutomationsFaxReceiptsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAutomationsFaxReceipts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.receipts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.receipts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationsFaxReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAutomationsFaxReceiptsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostAutomationsFaxReceipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.automations.fax.receipts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.automations.fax.receipts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAutomationsFaxReceiptsMutationOptions<TError, TOnMutateResult>(
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

export function useAutomationsFaxReceiptsRuleId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAutomationsFaxReceiptsRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationsFaxReceiptsRuleId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAutomationsFaxReceiptsRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutAutomationsFaxReceiptsRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAutomationsFaxReceiptsRuleIdMutationOptions<
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

export function useDeleteAutomationsFaxReceiptsRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAutomationsFaxReceiptsRuleIdMutationOptions<
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

export function useAutomationsSmsInbound<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.inbound.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.inbound.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationsSmsInboundQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAutomationsSmsInboundQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAutomationsSmsInbound<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.inbound.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.inbound.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationsSmsInboundQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAutomationsSmsInboundQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostAutomationsSmsInboundIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAutomationsSmsInboundIndexMutationOptions<
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

export function useAutomationsSmsInboundInboundRuleId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAutomationsSmsInboundInboundRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationsSmsInboundInboundRuleId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAutomationsSmsInboundInboundRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutAutomationsSmsInboundInboundRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAutomationsSmsInboundInboundRuleIdMutationOptions<
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

export function useDeleteAutomationsSmsInboundInboundRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAutomationsSmsInboundInboundRuleIdMutationOptions<
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

export function useAutomationsSmsReceipts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.receipts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.receipts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationsSmsReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAutomationsSmsReceiptsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAutomationsSmsReceipts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.receipts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.receipts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationsSmsReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAutomationsSmsReceiptsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostAutomationsSmsReceipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.automations.sms.receipts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.automations.sms.receipts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAutomationsSmsReceiptsMutationOptions<TError, TOnMutateResult>(
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

export function useAutomationsSmsReceiptsReceiptRuleId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAutomationsSmsReceiptsReceiptRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationsSmsReceiptsReceiptRuleId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAutomationsSmsReceiptsReceiptRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutAutomationsSmsReceiptsReceiptRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAutomationsSmsReceiptsReceiptRuleIdMutationOptions<
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

export function useDeleteAutomationsSmsReceiptsReceiptRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAutomationsSmsReceiptsReceiptRuleIdMutationOptions<
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

export function useAutomationsVoiceReceipts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.voice.receipts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.automations.voice.receipts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationsVoiceReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAutomationsVoiceReceiptsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAutomationsVoiceReceipts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.automations.voice.receipts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.automations.voice.receipts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationsVoiceReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAutomationsVoiceReceiptsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostAutomationsVoiceReceipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAutomationsVoiceReceiptsMutationOptions<TError, TOnMutateResult>(
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

export function useAutomationsVoiceReceiptsReceiptRuleId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAutomationsVoiceReceiptsReceiptRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationsVoiceReceiptsReceiptRuleId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAutomationsVoiceReceiptsReceiptRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutAutomationsVoiceReceiptsReceiptRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAutomationsVoiceReceiptsReceiptRuleIdMutationOptions<
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

export function useDeleteAutomationsVoiceReceiptsReceiptRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAutomationsVoiceReceiptsReceiptRuleIdMutationOptions<
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

export function useContactSuggestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-suggestions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContactSuggestionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContactSuggestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-suggestions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContactSuggestionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCountriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCountriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDeliveryIssues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-issues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-issues']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeliveryIssuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDeliveryIssuesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDeliveryIssues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-issues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-issues']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeliveryIssuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDeliveryIssuesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostDeliveryIssues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-issues']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['delivery-issues']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeliveryIssuesMutationOptions<TError, TOnMutateResult>(
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

export function useEmailCampaigns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['email-campaigns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['email-campaigns']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailCampaignsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEmailCampaignsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEmailCampaigns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['email-campaigns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['email-campaigns']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailCampaignsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEmailCampaignsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostEmailCampaignsPrice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmailCampaignsPriceMutationOptions<TError, TOnMutateResult>(
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

export function usePostEmailCampaignsSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmailCampaignsSendMutationOptions<TError, TOnMutateResult>(
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

export function useEmailCampaignsCampaignIdHistory<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEmailCampaignsCampaignIdHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmailCampaignsCampaignIdHistory<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEmailCampaignsCampaignIdHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useEmailCampaignsEmailCampaignId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEmailCampaignsEmailCampaignIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmailCampaignsEmailCampaignId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEmailCampaignsEmailCampaignIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutEmailCampaignsEmailCampaignId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutEmailCampaignsEmailCampaignIdMutationOptions<
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

export function usePutEmailCampaignsEmailCampaignIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutEmailCampaignsEmailCampaignIdCancelMutationOptions<
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

export function usePutEmailAddressVerifyEmailAddressIdSend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutEmailAddressVerifyEmailAddressIdSendMutationOptions<
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

export function usePutEmailAddressVerifyEmailAddressIdVerifyActivationToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutEmailAddressVerifyEmailAddressIdVerifyActivationTokenMutationOptions<
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

export function useEmailAddresses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.addresses.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.addresses.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEmailAddressesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEmailAddressesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEmailAddresses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.addresses.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.addresses.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEmailAddressesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEmailAddressesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostEmailAddresses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.addresses.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.email.addresses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmailAddressesMutationOptions<TError, TOnMutateResult>(
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

export function useEmailAddressesEmailAddressId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEmailAddressesEmailAddressIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmailAddressesEmailAddressId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEmailAddressesEmailAddressIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useDeleteEmailAddressesEmailAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEmailAddressesEmailAddressIdMutationOptions<
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

export function useEmailHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.history.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.history.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEmailHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEmailHistoryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEmailHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.history.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.history.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEmailHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEmailHistoryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEmailHistoryExportFilenameFilenameQueryKey(
  args: InferRequestType<(typeof client.email.history)['export?filename=:filename']['$get']>,
) {
  return ['email', '/email/history/export?filename=:filename', args] as const
}

export function getEmailHistoryExportFilenameFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email.history)['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.email.history)['export?filename=:filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email.history)['export?filename=:filename']['$get']>>
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
        client.email.history['export?filename=:filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEmailHistoryExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email.history)['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.email.history)['export?filename=:filename']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.email.history)['export?filename=:filename']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailHistoryExportFilenameFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEmailHistoryExportFilenameFilenameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmailHistoryExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email.history)['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.email.history)['export?filename=:filename']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.email.history)['export?filename=:filename']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailHistoryExportFilenameFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEmailHistoryExportFilenameFilenameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useEmailMasterTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.email)['master-templates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEmailMasterTemplatesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEmailMasterTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.email)['master-templates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEmailMasterTemplatesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useEmailMasterTemplatesCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email)['master-templates-categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEmailMasterTemplatesCategoriesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmailMasterTemplatesCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email)['master-templates-categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEmailMasterTemplatesCategoriesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useEmailMasterTemplatesCategoriesCategoryId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEmailMasterTemplatesCategoriesCategoryIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmailMasterTemplatesCategoriesCategoryId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEmailMasterTemplatesCategoriesCategoryIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useEmailMasterTemplatesCategoriesCategoryIdMasterTemplates<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEmailMasterTemplatesCategoriesCategoryIdMasterTemplatesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmailMasterTemplatesCategoriesCategoryIdMasterTemplates<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEmailMasterTemplatesCategoriesCategoryIdMasterTemplatesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useEmailMasterTemplatesTemplateId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEmailMasterTemplatesTemplateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmailMasterTemplatesTemplateId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEmailMasterTemplatesTemplateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostEmailPrice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.price.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.email.price.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmailPriceMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostEmailReceipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.receipts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.email.receipts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmailReceiptsMutationOptions<TError, TOnMutateResult>(
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

export function usePostEmailSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.send.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.email.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmailSendMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useEmailTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEmailTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEmailTemplatesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEmailTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEmailTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEmailTemplatesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostEmailTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.templates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.email.templates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmailTemplatesMutationOptions<TError, TOnMutateResult>(
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

export function usePostEmailTemplatesImagesTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmailTemplatesImagesTemplateIdMutationOptions<
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

export function useEmailTemplatesTemplateId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEmailTemplatesTemplateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmailTemplatesTemplateId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEmailTemplatesTemplateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutEmailTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutEmailTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteEmailTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEmailTemplatesTemplateIdMutationOptions<
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

export function getFaxHistoryExportFilenameFilenameQueryKey(
  args: InferRequestType<(typeof client.fax.history)['export?filename=:filename']['$get']>,
) {
  return ['fax', '/fax/history/export?filename=:filename', args] as const
}

export function getFaxHistoryExportFilenameFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fax.history)['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fax.history)['export?filename=:filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fax.history)['export?filename=:filename']['$get']>>
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
        client.fax.history['export?filename=:filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFaxHistoryExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fax.history)['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fax.history)['export?filename=:filename']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fax.history)['export?filename=:filename']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFaxHistoryExportFilenameFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getFaxHistoryExportFilenameFilenameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFaxHistoryExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fax.history)['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fax.history)['export?filename=:filename']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fax.history)['export?filename=:filename']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFaxHistoryExportFilenameFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getFaxHistoryExportFilenameFilenameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByQueryKey(
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

export function getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.fax)['history?date_from=:date_from&date_to=:date_to&q=:q&order_by=:order_by']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByQueryKey>
  >({
    queryKey: getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fax['history?date_from=:date_from&date_to=:date_to&q=:q&order_by=:order_by'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderBy<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.fax)['history?date_from=:date_from&date_to=:date_to&q=:q&order_by=:order_by']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderBy<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.fax)['history?date_from=:date_from&date_to=:date_to&q=:q&order_by=:order_by']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostFaxPrice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.price.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.fax.price.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFaxPriceMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useFaxReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.receipts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.receipts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFaxReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFaxReceiptsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFaxReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.receipts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.receipts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFaxReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFaxReceiptsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostFaxReceipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.receipts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.fax.receipts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFaxReceiptsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutFaxReceiptsRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.fax)['receipts-read']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.fax)['receipts-read']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFaxReceiptsReadMutationOptions<TError, TOnMutateResult>(
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

export function useFaxReceiptsMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fax.receipts)[':message_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fax.receipts)[':message_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFaxReceiptsMessageIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFaxReceiptsMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fax.receipts)[':message_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fax.receipts)[':message_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFaxReceiptsMessageIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostFaxSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.send.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.fax.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFaxSendMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutForgotPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['forgot-password']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['forgot-password']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutForgotPasswordMutationOptions<TError, TOnMutateResult>(
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

export function usePutForgotPasswordVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutForgotPasswordVerifyMutationOptions<TError, TOnMutateResult>(
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

export function usePutForgotUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['forgot-username']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['forgot-username']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutForgotUsernameMutationOptions<TError, TOnMutateResult>(
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

export function useLists<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLists<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$post>>>>>,
        TError,
        InferRequestType<typeof client.lists.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutListsFromListIdContactsContactIdToListId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutListsFromListIdContactsContactIdToListIdMutationOptions<
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

export function useListsListId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':list_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsListIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListsListIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListsListId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':list_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsListIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListsListIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePutListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.lists)[':list_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutListsListIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.lists)[':list_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteListsListIdMutationOptions<TError, TOnMutateResult>(
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

export function useListsListIdContacts<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListsListIdContactsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListsListIdContacts<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListsListIdContactsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostListsListIdContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListsListIdContactsMutationOptions<TError, TOnMutateResult>(
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

export function useListsListIdContactsContactId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getListsListIdContactsContactIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseListsListIdContactsContactId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getListsListIdContactsContactIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutListsListIdContactsContactId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutListsListIdContactsContactIdMutationOptions<
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

export function useDeleteListsListIdContactsContactId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteListsListIdContactsContactIdMutationOptions<
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

export function getListsListIdExportFilenameFilenameQueryKey(
  args: InferRequestType<(typeof client.lists)[':list_id']['export?filename=:filename']['$get']>,
) {
  return ['lists', '/lists/:list_id/export?filename=:filename', args] as const
}

export function getListsListIdExportFilenameFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':list_id']['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':list_id']['export?filename=:filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.lists)[':list_id']['export?filename=:filename']['$get']>
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
        client.lists[':list_id']['export?filename=:filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useListsListIdExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':list_id']['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':list_id']['export?filename=:filename']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.lists)[':list_id']['export?filename=:filename']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsListIdExportFilenameFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getListsListIdExportFilenameFilenameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseListsListIdExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':list_id']['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':list_id']['export?filename=:filename']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.lists)[':list_id']['export?filename=:filename']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsListIdExportFilenameFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getListsListIdExportFilenameFilenameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostListsListIdImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListsListIdImportMutationOptions<TError, TOnMutateResult>(
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

export function usePostListsListIdImportCsvPreview<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListsListIdImportCsvPreviewMutationOptions<
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

export function useListsListIdImportFields<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getListsListIdImportFieldsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseListsListIdImportFields<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getListsListIdImportFieldsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutListsListIdRemoveDuplicates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutListsListIdRemoveDuplicatesMutationOptions<
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

export function usePutListsListIdRemoveOptedOutContactsOptOutListId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutListsListIdRemoveOptedOutContactsOptOutListIdMutationOptions<
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

export function usePutMmsCancelAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.mms)['cancel-all']['$put']>>>
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMmsCancelAllMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMmsHistoryExportFilenameFilenameQueryKey(
  args: InferRequestType<(typeof client.mms.history)['export?filename=:filename']['$get']>,
) {
  return ['mms', '/mms/history/export?filename=:filename', args] as const
}

export function getMmsHistoryExportFilenameFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mms.history)['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mms.history)['export?filename=:filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mms.history)['export?filename=:filename']['$get']>>
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
        client.mms.history['export?filename=:filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMmsHistoryExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mms.history)['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mms.history)['export?filename=:filename']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mms.history)['export?filename=:filename']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMmsHistoryExportFilenameFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMmsHistoryExportFilenameFilenameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMmsHistoryExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mms.history)['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mms.history)['export?filename=:filename']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mms.history)['export?filename=:filename']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMmsHistoryExportFilenameFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMmsHistoryExportFilenameFilenameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToQueryKey(
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

export function getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mms)['history?q=:q&order_by=:order_by&date_from=:date_from&date_to=:date_to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToQueryKey>
  >({
    queryKey: getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mms['history?q=:q&order_by=:order_by&date_from=:date_from&date_to=:date_to'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateTo<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mms)['history?q=:q&order_by=:order_by&date_from=:date_from&date_to=:date_to']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateTo<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mms)['history?q=:q&order_by=:order_by&date_from=:date_from&date_to=:date_to']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostMmsPrice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mms.price.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.mms.price.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMmsPriceMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useMmsReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mms.receipts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mms.receipts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMmsReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMmsReceiptsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMmsReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mms.receipts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mms.receipts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMmsReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMmsReceiptsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePutMmsReceiptsRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.mms)['receipts-read']['$put']>>>
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMmsReceiptsReadMutationOptions<TError, TOnMutateResult>(
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

export function useMmsReceiptsMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mms.receipts)[':message_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mms.receipts)[':message_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMmsReceiptsMessageIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMmsReceiptsMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mms.receipts)[':message_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mms.receipts)[':message_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMmsReceiptsMessageIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostMmsSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mms.send.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.mms.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMmsSendMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutMmsMessageIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMmsMessageIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function useNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNumbersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNumbersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostNumbersBuyDedicatedNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNumbersBuyDedicatedNumberMutationOptions<TError, TOnMutateResult>(
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

export function getNumbersSearchCountrySearch1SearchType2QueryKey(
  args: InferRequestType<
    (typeof client.numbers.search)[':country?:search=1&:search_type=2']['$get']
  >,
) {
  return ['numbers', '/numbers/search/:country?:search=1&:search_type=2', args] as const
}

export function getNumbersSearchCountrySearch1SearchType2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.numbers.search)[':country?:search=1&:search_type=2']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.numbers.search)[':country?:search=1&:search_type=2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.numbers.search)[':country?:search=1&:search_type=2']['$get']>
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
        client.numbers.search[':country?:search=1&:search_type=2'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNumbersSearchCountrySearch1SearchType2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.numbers.search)[':country?:search=1&:search_type=2']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.numbers.search)[':country?:search=1&:search_type=2']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getNumbersSearchCountrySearch1SearchType2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNumbersSearchCountrySearch1SearchType2QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNumbersSearchCountrySearch1SearchType2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.numbers.search)[':country?:search=1&:search_type=2']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.numbers.search)[':country?:search=1&:search_type=2']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getNumbersSearchCountrySearch1SearchType2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNumbersSearchCountrySearch1SearchType2QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostDirectMailCampaigns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.post)['direct-mail']['campaigns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPostDirectMailCampaignsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePostDirectMailCampaigns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.post)['direct-mail']['campaigns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPostDirectMailCampaignsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostPostDirectMailCampaignsPrice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPostDirectMailCampaignsPriceMutationOptions<
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

export function usePostPostDirectMailCampaignsSend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPostDirectMailCampaignsSendMutationOptions<
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

export function getPostDirectMailLocationsSearchCountryQQueryQueryKey(
  args: InferRequestType<
    (typeof client.post)['direct-mail']['locations']['search'][':country']['?q=:query']['$get']
  >,
) {
  return ['post', '/post/direct-mail/locations/search/:country/?q=:query', args] as const
}

export function getPostDirectMailLocationsSearchCountryQQueryQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.post)['direct-mail']['locations']['search'][':country']['?q=:query']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getPostDirectMailLocationsSearchCountryQQueryQueryKey>
  >({
    queryKey: getPostDirectMailLocationsSearchCountryQQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.post['direct-mail'].locations.search[':country']['?q=:query'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePostDirectMailLocationsSearchCountryQQuery<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.post)['direct-mail']['locations']['search'][':country']['?q=:query']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPostDirectMailLocationsSearchCountryQQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPostDirectMailLocationsSearchCountryQQueryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePostDirectMailLocationsSearchCountryQQuery<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.post)['direct-mail']['locations']['search'][':country']['?q=:query']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPostDirectMailLocationsSearchCountryQQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPostDirectMailLocationsSearchCountryQQueryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostPostLettersDetectAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPostLettersDetectAddressMutationOptions<TError, TOnMutateResult>(
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

export function usePostLettersHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.letters.history.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.post.letters.history.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostLettersHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPostLettersHistoryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePostLettersHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.letters.history.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.post.letters.history.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostLettersHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPostLettersHistoryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLettersHistoryExportFilenameFilenameQueryKey(
  args: InferRequestType<(typeof client.post.letters.history)['export?filename=:filename']['$get']>,
) {
  return ['post', '/post/letters/history/export?filename=:filename', args] as const
}

export function getPostLettersHistoryExportFilenameFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.post.letters.history)['export?filename=:filename']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.post.letters.history)['export?filename=:filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.post.letters.history)['export?filename=:filename']['$get']>
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
        client.post.letters.history['export?filename=:filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePostLettersHistoryExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.post.letters.history)['export?filename=:filename']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.post.letters.history)['export?filename=:filename']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.post.letters.history)['export?filename=:filename']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostLettersHistoryExportFilenameFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPostLettersHistoryExportFilenameFilenameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePostLettersHistoryExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.post.letters.history)['export?filename=:filename']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.post.letters.history)['export?filename=:filename']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.post.letters.history)['export?filename=:filename']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostLettersHistoryExportFilenameFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPostLettersHistoryExportFilenameFilenameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostPostLettersPrice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.post.letters.price.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.post.letters.price.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPostLettersPriceMutationOptions<TError, TOnMutateResult>(
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

export function usePostPostLettersSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.post.letters.send.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.post.letters.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPostLettersSendMutationOptions<TError, TOnMutateResult>(
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

export function getPostPostcardsExportFilenameFilenameQueryKey(
  args: InferRequestType<(typeof client.post.postcards)['export?filename=:filename']['$get']>,
) {
  return ['post', '/post/postcards/export?filename=:filename', args] as const
}

export function getPostPostcardsExportFilenameFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.post.postcards)['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.post.postcards)['export?filename=:filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.post.postcards)['export?filename=:filename']['$get']>>
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
        client.post.postcards['export?filename=:filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePostPostcardsExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.post.postcards)['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.post.postcards)['export?filename=:filename']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.post.postcards)['export?filename=:filename']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostPostcardsExportFilenameFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPostPostcardsExportFilenameFilenameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePostPostcardsExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.post.postcards)['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.post.postcards)['export?filename=:filename']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.post.postcards)['export?filename=:filename']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostPostcardsExportFilenameFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPostPostcardsExportFilenameFilenameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostPostcardsHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.postcards.history.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.post.postcards.history.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostPostcardsHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPostPostcardsHistoryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePostPostcardsHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.postcards.history.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.post.postcards.history.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostPostcardsHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPostPostcardsHistoryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostPostPostcardsPrice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.post.postcards.price.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.post.postcards.price.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPostPostcardsPriceMutationOptions<TError, TOnMutateResult>(
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

export function usePostPostPostcardsSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.post.postcards.send.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.post.postcards.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPostPostcardsSendMutationOptions<TError, TOnMutateResult>(
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

export function usePostReturnAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.post)['return-addresses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPostReturnAddressesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePostReturnAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.post)['return-addresses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPostReturnAddressesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostPostReturnAddresses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPostReturnAddressesMutationOptions<TError, TOnMutateResult>(
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

export function usePostReturnAddressesReturnAddressId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPostReturnAddressesReturnAddressIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePostReturnAddressesReturnAddressId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPostReturnAddressesReturnAddressIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutPostReturnAddressesReturnAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPostReturnAddressesReturnAddressIdMutationOptions<
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

export function useDeletePostReturnAddressesReturnAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.post)['return-addresses'][':return_address_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePostReturnAddressesReturnAddressIdMutationOptions<
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

export function getPricingCountryCurrencyCurrencyQueryKey(
  args: InferRequestType<(typeof client.pricing)[':country?currency=:currency']['$get']>,
) {
  return ['pricing', '/pricing/:country?currency=:currency', args] as const
}

export function getPricingCountryCurrencyCurrencyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pricing)[':country?currency=:currency']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pricing)[':country?currency=:currency']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pricing)[':country?currency=:currency']['$get']>>
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
        client.pricing[':country?currency=:currency'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePricingCountryCurrencyCurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pricing)[':country?currency=:currency']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pricing)[':country?currency=:currency']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pricing)[':country?currency=:currency']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPricingCountryCurrencyCurrencyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPricingCountryCurrencyCurrencyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePricingCountryCurrencyCurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pricing)[':country?currency=:currency']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pricing)[':country?currency=:currency']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pricing)[':country?currency=:currency']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPricingCountryCurrencyCurrencyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPricingCountryCurrencyCurrencyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRechargeCreditCard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recharge)['credit-card']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRechargeCreditCardQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRechargeCreditCard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recharge)['credit-card']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRechargeCreditCardQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePutRechargeCreditCard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRechargeCreditCardMutationOptions<TError, TOnMutateResult>(
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

export function getRechargePackagesCountryCountryQueryKey(
  args: InferRequestType<(typeof client.recharge)['packages?country=:country']['$get']>,
) {
  return ['recharge', '/recharge/packages?country=:country', args] as const
}

export function getRechargePackagesCountryCountryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recharge)['packages?country=:country']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recharge)['packages?country=:country']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recharge)['packages?country=:country']['$get']>>
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
        client.recharge['packages?country=:country'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRechargePackagesCountryCountry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recharge)['packages?country=:country']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recharge)['packages?country=:country']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recharge)['packages?country=:country']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRechargePackagesCountryCountryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRechargePackagesCountryCountryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRechargePackagesCountryCountry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recharge)['packages?country=:country']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recharge)['packages?country=:country']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recharge)['packages?country=:country']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRechargePackagesCountryCountryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRechargePackagesCountryCountryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutRechargePurchasePackageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRechargePurchasePackageIdMutationOptions<TError, TOnMutateResult>(
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

export function useRechargeTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recharge.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recharge.transactions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRechargeTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRechargeTransactionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRechargeTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recharge.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recharge.transactions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRechargeTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRechargeTransactionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useRechargeTransactionsTransactionId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRechargeTransactionsTransactionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRechargeTransactionsTransactionId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRechargeTransactionsTransactionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useReferralAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.referral.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.referral.accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReferralAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReferralAccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReferralAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.referral.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.referral.accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReferralAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReferralAccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useReseller<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getResellerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getResellerQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReseller<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getResellerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getResellerQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePutReseller<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.$put>>>>>,
        TError,
        InferRequestType<typeof client.reseller.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutResellerMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useResellerAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reseller.accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResellerAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getResellerAccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseResellerAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reseller.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reseller.accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResellerAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getResellerAccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostResellerAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reseller.accounts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.reseller.accounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostResellerAccountsMutationOptions<TError, TOnMutateResult>(
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

export function usePostResellerAccountsPublic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostResellerAccountsPublicMutationOptions<TError, TOnMutateResult>(
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

export function useResellerAccountsClientUserId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getResellerAccountsClientUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResellerAccountsClientUserId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResellerAccountsClientUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutResellerAccountsClientUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutResellerAccountsClientUserIdMutationOptions<
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

export function usePutResellerTransferCredit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutResellerTransferCreditMutationOptions<TError, TOnMutateResult>(
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

export function useResellerSubdomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reseller)[':subdomain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reseller)[':subdomain']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getResellerSubdomainQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseResellerSubdomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reseller)[':subdomain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reseller)[':subdomain']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getResellerSubdomainQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSdkDownloadType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['sdk-download'][':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sdk-download'][':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSdkDownloadTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSdkDownloadType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['sdk-download'][':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sdk-download'][':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSdkDownloadTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSearchContactsListsQQQueryKey(
  args: InferRequestType<(typeof client.search)['contacts-lists?q=:q']['$get']>,
) {
  return ['search', '/search/contacts-lists?q=:q', args] as const
}

export function getSearchContactsListsQQQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['contacts-lists?q=:q']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)['contacts-lists?q=:q']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.search)['contacts-lists?q=:q']['$get']>>
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
        client.search['contacts-lists?q=:q'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSearchContactsListsQQ<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['contacts-lists?q=:q']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)['contacts-lists?q=:q']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.search)['contacts-lists?q=:q']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchContactsListsQQQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSearchContactsListsQQQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSearchContactsListsQQ<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)['contacts-lists?q=:q']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)['contacts-lists?q=:q']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.search)['contacts-lists?q=:q']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchContactsListsQQQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSearchContactsListsQQQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSmsCampaigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sms-campaigns']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['sms-campaigns']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmsCampaignsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSmsCampaignsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSmsCampaigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sms-campaigns']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['sms-campaigns']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmsCampaignsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSmsCampaignsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostSmsCampaignsPrice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmsCampaignsPriceMutationOptions<TError, TOnMutateResult>(
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

export function usePostSmsCampaignsSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmsCampaignsSendMutationOptions<TError, TOnMutateResult>(
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

export function getSmsCampaignsCampaignIdLinkExportFilenameFilenameQueryKey(
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

export function getSmsCampaignsCampaignIdLinkExportFilenameFilenameQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['sms-campaigns'][':campaign_id']['link-export?filename=:filename']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSmsCampaignsCampaignIdLinkExportFilenameFilenameQueryKey>
  >({
    queryKey: getSmsCampaignsCampaignIdLinkExportFilenameFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sms-campaigns'][':campaign_id']['link-export?filename=:filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSmsCampaignsCampaignIdLinkExportFilenameFilename<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['sms-campaigns'][':campaign_id']['link-export?filename=:filename']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSmsCampaignsCampaignIdLinkExportFilenameFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSmsCampaignsCampaignIdLinkExportFilenameFilenameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSmsCampaignsCampaignIdLinkExportFilenameFilename<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['sms-campaigns'][':campaign_id']['link-export?filename=:filename']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSmsCampaignsCampaignIdLinkExportFilenameFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSmsCampaignsCampaignIdLinkExportFilenameFilenameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSmsCampaignsCampaignIdLinkStatistics<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSmsCampaignsCampaignIdLinkStatisticsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSmsCampaignsCampaignIdLinkStatistics<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSmsCampaignsCampaignIdLinkStatisticsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSmsCampaignsCampaignIdLinkTracking<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSmsCampaignsCampaignIdLinkTrackingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSmsCampaignsCampaignIdLinkTracking<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSmsCampaignsCampaignIdLinkTrackingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSmsCampaignsSmsCampaignId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSmsCampaignsSmsCampaignIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSmsCampaignsSmsCampaignId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSmsCampaignsSmsCampaignIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutSmsCampaignsSmsCampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSmsCampaignsSmsCampaignIdMutationOptions<TError, TOnMutateResult>(
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

export function usePutSmsCampaignsSmsCampaignIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSmsCampaignsSmsCampaignIdCancelMutationOptions<
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

export function usePutSmsCancelAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['cancel-all']['$put']>>>
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSmsCancelAllMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useSmsEmailSms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['email-sms']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['email-sms']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmsEmailSmsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSmsEmailSmsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSmsEmailSms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['email-sms']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['email-sms']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmsEmailSmsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSmsEmailSmsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostSmsEmailSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['email-sms']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.sms)['email-sms']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmsEmailSmsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useSmsEmailSmsStrippedStrings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sms)['email-sms-stripped-strings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSmsEmailSmsStrippedStringsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSmsEmailSmsStrippedStrings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sms)['email-sms-stripped-strings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSmsEmailSmsStrippedStringsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostSmsEmailSmsStrippedStrings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmsEmailSmsStrippedStringsMutationOptions<
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

export function useSmsEmailSmsStrippedStringsRuleId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSmsEmailSmsStrippedStringsRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSmsEmailSmsStrippedStringsRuleId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSmsEmailSmsStrippedStringsRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutSmsEmailSmsStrippedStringsRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSmsEmailSmsStrippedStringsRuleIdMutationOptions<
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

export function useDeleteSmsEmailSmsStrippedStringsRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSmsEmailSmsStrippedStringsRuleIdMutationOptions<
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

export function useSmsEmailSmsEmailAddressId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSmsEmailSmsEmailAddressIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSmsEmailSmsEmailAddressId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSmsEmailSmsEmailAddressIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutSmsEmailSmsEmailAddressId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSmsEmailSmsEmailAddressIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteSmsEmailSmsEmailAddressId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSmsEmailSmsEmailAddressIdMutationOptions<
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

export function getSmsHistoryExportFilenameFilenameQueryKey(
  args: InferRequestType<(typeof client.sms.history)['export?filename=:filename']['$get']>,
) {
  return ['sms', '/sms/history/export?filename=:filename', args] as const
}

export function getSmsHistoryExportFilenameFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sms.history)['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sms.history)['export?filename=:filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sms.history)['export?filename=:filename']['$get']>>
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
        client.sms.history['export?filename=:filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSmsHistoryExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sms.history)['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sms.history)['export?filename=:filename']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sms.history)['export?filename=:filename']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmsHistoryExportFilenameFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSmsHistoryExportFilenameFilenameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSmsHistoryExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sms.history)['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sms.history)['export?filename=:filename']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sms.history)['export?filename=:filename']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmsHistoryExportFilenameFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSmsHistoryExportFilenameFilenameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSmsHistoryDateFromDateFromDateToDateToQueryKey(
  args: InferRequestType<
    (typeof client.sms)['history?date_from=:date_from&date_to=:date_to']['$get']
  >,
) {
  return ['sms', '/sms/history?date_from=:date_from&date_to=:date_to', args] as const
}

export function getSmsHistoryDateFromDateFromDateToDateToQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sms)['history?date_from=:date_from&date_to=:date_to']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sms)['history?date_from=:date_from&date_to=:date_to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sms)['history?date_from=:date_from&date_to=:date_to']['$get']>
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
        client.sms['history?date_from=:date_from&date_to=:date_to'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSmsHistoryDateFromDateFromDateToDateTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sms)['history?date_from=:date_from&date_to=:date_to']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sms)['history?date_from=:date_from&date_to=:date_to']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSmsHistoryDateFromDateFromDateToDateToQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSmsHistoryDateFromDateFromDateToDateToQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSmsHistoryDateFromDateFromDateToDateTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sms)['history?date_from=:date_from&date_to=:date_to']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sms)['history?date_from=:date_from&date_to=:date_to']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSmsHistoryDateFromDateFromDateToDateToQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSmsHistoryDateFromDateFromDateToDateToQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSmsInbound<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.inbound.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.inbound.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSmsInboundQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSmsInboundQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSmsInbound<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.inbound.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.inbound.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSmsInboundQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSmsInboundQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostSmsInbound<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.inbound.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sms.inbound.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmsInboundMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutSmsInboundRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['inbound-read']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.sms)['inbound-read']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSmsInboundReadMutationOptions<TError, TOnMutateResult>(
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

export function usePutSmsInboundReadMessageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSmsInboundReadMessageIdMutationOptions<TError, TOnMutateResult>(
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

export function useSmsInboundOutboundMessageId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSmsInboundOutboundMessageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSmsInboundOutboundMessageId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSmsInboundOutboundMessageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostSmsPrice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.price.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sms.price.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmsPriceMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useSmsReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.receipts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.receipts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSmsReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSmsReceiptsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSmsReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.receipts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.receipts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSmsReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSmsReceiptsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostSmsReceipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.receipts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sms.receipts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmsReceiptsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutSmsReceiptsRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sms)['receipts-read']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.sms)['receipts-read']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSmsReceiptsReadMutationOptions<TError, TOnMutateResult>(
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

export function useSmsReceiptsMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sms.receipts)[':message_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sms.receipts)[':message_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSmsReceiptsMessageIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSmsReceiptsMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sms.receipts)[':message_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sms.receipts)[':message_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSmsReceiptsMessageIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostSmsSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.send.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sms.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmsSendMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useSmsTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSmsTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSmsTemplatesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSmsTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSmsTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSmsTemplatesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostSmsTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.templates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sms.templates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmsTemplatesMutationOptions<TError, TOnMutateResult>(
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

export function usePutSmsTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSmsTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteSmsTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSmsTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
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

export function usePutSmsMessageIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSmsMessageIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function useStatisticsSms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.sms.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.sms.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatisticsSmsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatisticsSmsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatisticsSms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.sms.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.sms.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatisticsSmsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatisticsSmsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useStatisticsVoice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.voice.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.voice.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatisticsVoiceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatisticsVoiceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatisticsVoice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.voice.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.voice.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatisticsVoiceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatisticsVoiceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSubaccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSubaccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSubaccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSubaccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSubaccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSubaccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostSubaccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.subaccounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSubaccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useSubaccountsSubaccountId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSubaccountsSubaccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubaccountsSubaccountId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSubaccountsSubaccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutSubaccountsSubaccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSubaccountsSubaccountIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteSubaccountsSubaccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSubaccountsSubaccountIdMutationOptions<TError, TOnMutateResult>(
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

export function usePutSubaccountsSubaccountIdRegenApiKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSubaccountsSubaccountIdRegenApiKeyMutationOptions<
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

export function useTimezones<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezones.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezones.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTimezonesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTimezonesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTimezones<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezones.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezones.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTimezonesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTimezonesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUploadsConvertConvertMutationKey() {
  return ['uploads?convert=:convert', '/uploads?convert=:convert', 'POST'] as const
}

export function getPostUploadsConvertConvertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['uploads?convert=:convert']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['uploads?convert=:convert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadsConvertConvertMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['uploads?convert=:convert']['$post']>) {
      return parseResponse(client['uploads?convert=:convert'].$post(args, options))
    },
  })
}

export function usePostUploadsConvertConvert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['uploads?convert=:convert']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['uploads?convert=:convert']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUploadsConvertConvertMutationOptions<TError, TOnMutateResult>(
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

export function usePutVoiceCancelAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.voice)['cancel-all']['$put']>>>
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVoiceCancelAllMutationOptions<TError, TOnMutateResult>(
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

export function getVoiceHistoryExportFilenameFilenameQueryKey(
  args: InferRequestType<(typeof client.voice.history)['export?filename=:filename']['$get']>,
) {
  return ['voice', '/voice/history/export?filename=:filename', args] as const
}

export function getVoiceHistoryExportFilenameFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.voice.history)['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.voice.history)['export?filename=:filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.voice.history)['export?filename=:filename']['$get']>>
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
        client.voice.history['export?filename=:filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVoiceHistoryExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.voice.history)['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.voice.history)['export?filename=:filename']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.voice.history)['export?filename=:filename']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVoiceHistoryExportFilenameFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getVoiceHistoryExportFilenameFilenameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVoiceHistoryExportFilenameFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.voice.history)['export?filename=:filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.voice.history)['export?filename=:filename']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.voice.history)['export?filename=:filename']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVoiceHistoryExportFilenameFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getVoiceHistoryExportFilenameFilenameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVoiceHistoryDateFromDateFromDateToDateToQueryKey(
  args: InferRequestType<
    (typeof client.voice)['history?date_from=:date_from&date_to=:date_to']['$get']
  >,
) {
  return ['voice', '/voice/history?date_from=:date_from&date_to=:date_to', args] as const
}

export function getVoiceHistoryDateFromDateFromDateToDateToQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.voice)['history?date_from=:date_from&date_to=:date_to']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.voice)['history?date_from=:date_from&date_to=:date_to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getVoiceHistoryDateFromDateFromDateToDateToQueryKey>
  >({
    queryKey: getVoiceHistoryDateFromDateFromDateToDateToQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.voice['history?date_from=:date_from&date_to=:date_to'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVoiceHistoryDateFromDateFromDateToDateTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.voice)['history?date_from=:date_from&date_to=:date_to']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.voice)['history?date_from=:date_from&date_to=:date_to']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getVoiceHistoryDateFromDateFromDateToDateToQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getVoiceHistoryDateFromDateFromDateToDateToQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVoiceHistoryDateFromDateFromDateToDateTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.voice)['history?date_from=:date_from&date_to=:date_to']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.voice)['history?date_from=:date_from&date_to=:date_to']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getVoiceHistoryDateFromDateFromDateToDateToQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getVoiceHistoryDateFromDateFromDateToDateToQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useVoiceLang<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.lang.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.lang.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVoiceLangQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVoiceLangQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVoiceLang<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.lang.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.lang.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVoiceLangQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVoiceLangQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostVoicePrice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.price.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.voice.price.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVoicePriceMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useVoiceReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.receipts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.receipts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVoiceReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVoiceReceiptsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVoiceReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.receipts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.receipts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVoiceReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVoiceReceiptsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostVoiceReceipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.receipts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.voice.receipts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVoiceReceiptsMutationOptions<TError, TOnMutateResult>(
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

export function getPutVoiceReceiptsReadDateBeforeDateBeforeMutationKey() {
  return ['voice', '/voice/receipts-read?date_before=:date_before', 'PUT'] as const
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
            ReturnType<(typeof client.voice)['receipts-read?date_before=:date_before']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.voice)['receipts-read?date_before=:date_before']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVoiceReceiptsReadDateBeforeDateBeforeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.voice)['receipts-read?date_before=:date_before']['$put']
      >,
    ) {
      return parseResponse(
        client.voice['receipts-read?date_before=:date_before'].$put(args, options),
      )
    },
  })
}

export function usePutVoiceReceiptsReadDateBeforeDateBefore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.voice)['receipts-read?date_before=:date_before']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVoiceReceiptsReadDateBeforeDateBeforeMutationOptions<
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

export function useVoiceReceiptsMessageId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getVoiceReceiptsMessageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVoiceReceiptsMessageId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getVoiceReceiptsMessageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostVoiceSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.send.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.voice.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVoiceSendMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutVoiceMessageIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVoiceMessageIdCancelMutationOptions<TError, TOnMutateResult>(
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
