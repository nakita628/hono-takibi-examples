import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getApplicationKey() {
  return ['application'] as const
}

export function getAssetReportKey() {
  return ['asset_report'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getBankTransferKey() {
  return ['bank_transfer'] as const
}

export function getBetaKey() {
  return ['beta'] as const
}

export function getCategoriesKey() {
  return ['categories'] as const
}

export function getCreditKey() {
  return ['credit'] as const
}

export function getDashboardUserKey() {
  return ['dashboard_user'] as const
}

export function getDepositSwitchKey() {
  return ['deposit_switch'] as const
}

export function getEmployersKey() {
  return ['employers'] as const
}

export function getEmploymentKey() {
  return ['employment'] as const
}

export function getFdxKey() {
  return ['fdx'] as const
}

export function getIdentityKey() {
  return ['identity'] as const
}

export function getIdentityVerificationKey() {
  return ['identity_verification'] as const
}

export function getIncomeKey() {
  return ['income'] as const
}

export function getInstitutionsKey() {
  return ['institutions'] as const
}

export function getInvestmentsKey() {
  return ['investments'] as const
}

export function getItemKey() {
  return ['item'] as const
}

export function getLiabilitiesKey() {
  return ['liabilities'] as const
}

export function getLinkKey() {
  return ['link'] as const
}

export function getLinkDeliveryKey() {
  return ['link_delivery'] as const
}

export function getPartnerKey() {
  return ['partner'] as const
}

export function getPaymentInitiationKey() {
  return ['payment_initiation'] as const
}

export function getPaymentProfileKey() {
  return ['payment_profile'] as const
}

export function getProcessorKey() {
  return ['processor'] as const
}

export function getSandboxKey() {
  return ['sandbox'] as const
}

export function getSignalKey() {
  return ['signal'] as const
}

export function getTransactionsKey() {
  return ['transactions'] as const
}

export function getTransferKey() {
  return ['transfer'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getWalletKey() {
  return ['wallet'] as const
}

export function getWatchlistScreeningKey() {
  return ['watchlist_screening'] as const
}

export function getWebhookVerificationKeyKey() {
  return ['webhook_verification_key'] as const
}

export function getPostAccountsBalanceGetMutationKey() {
  return ['accounts', '/accounts/balance/get', 'POST'] as const
}

export function getPostAccountsBalanceGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accounts.balance.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.accounts.balance.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsBalanceGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.balance.get.$post>) {
      return parseResponse(client.accounts.balance.get.$post(args, options))
    },
  })
}

export function usePostAccountsBalanceGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accounts.balance.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.accounts.balance.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsBalanceGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountsGetMutationKey() {
  return ['accounts', '/accounts/get', 'POST'] as const
}

export function getPostAccountsGetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.accounts.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.get.$post>) {
      return parseResponse(client.accounts.get.$post(args, options))
    },
  })
}

export function usePostAccountsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.accounts.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsGetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApplicationGetMutationKey() {
  return ['application', '/application/get', 'POST'] as const
}

export function getPostApplicationGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.application.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.application.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.application.get.$post>) {
      return parseResponse(client.application.get.$post(args, options))
    },
  })
}

export function usePostApplicationGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.application.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.application.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApplicationGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostAssetReportAuditCopyCreateMutationKey() {
  return ['asset_report', '/asset_report/audit_copy/create', 'POST'] as const
}

export function getPostAssetReportAuditCopyCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.asset_report.audit_copy.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.asset_report.audit_copy.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetReportAuditCopyCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.asset_report.audit_copy.create.$post>) {
      return parseResponse(client.asset_report.audit_copy.create.$post(args, options))
    },
  })
}

export function usePostAssetReportAuditCopyCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.asset_report.audit_copy.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.asset_report.audit_copy.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAssetReportAuditCopyCreateMutationOptions<
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

export function getPostAssetReportAuditCopyGetMutationKey() {
  return ['asset_report', '/asset_report/audit_copy/get', 'POST'] as const
}

export function getPostAssetReportAuditCopyGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.audit_copy.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.asset_report.audit_copy.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetReportAuditCopyGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.asset_report.audit_copy.get.$post>) {
      return parseResponse(client.asset_report.audit_copy.get.$post(args, options))
    },
  })
}

export function usePostAssetReportAuditCopyGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.asset_report.audit_copy.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.asset_report.audit_copy.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAssetReportAuditCopyGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostAssetReportAuditCopyRemoveMutationKey() {
  return ['asset_report', '/asset_report/audit_copy/remove', 'POST'] as const
}

export function getPostAssetReportAuditCopyRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.asset_report.audit_copy.remove.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.asset_report.audit_copy.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetReportAuditCopyRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.asset_report.audit_copy.remove.$post>) {
      return parseResponse(client.asset_report.audit_copy.remove.$post(args, options))
    },
  })
}

export function usePostAssetReportAuditCopyRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.asset_report.audit_copy.remove.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.asset_report.audit_copy.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAssetReportAuditCopyRemoveMutationOptions<
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

export function getPostAssetReportCreateMutationKey() {
  return ['asset_report', '/asset_report/create', 'POST'] as const
}

export function getPostAssetReportCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.asset_report.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetReportCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.asset_report.create.$post>) {
      return parseResponse(client.asset_report.create.$post(args, options))
    },
  })
}

export function usePostAssetReportCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.asset_report.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAssetReportCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostAssetReportFilterMutationKey() {
  return ['asset_report', '/asset_report/filter', 'POST'] as const
}

export function getPostAssetReportFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.filter.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.asset_report.filter.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetReportFilterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.asset_report.filter.$post>) {
      return parseResponse(client.asset_report.filter.$post(args, options))
    },
  })
}

export function usePostAssetReportFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.filter.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.asset_report.filter.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAssetReportFilterMutationOptions<TError, TOnMutateResult>(
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

export function getPostAssetReportGetMutationKey() {
  return ['asset_report', '/asset_report/get', 'POST'] as const
}

export function getPostAssetReportGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.asset_report.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetReportGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.asset_report.get.$post>) {
      return parseResponse(client.asset_report.get.$post(args, options))
    },
  })
}

export function usePostAssetReportGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.asset_report.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAssetReportGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostAssetReportPdfGetMutationKey() {
  return ['asset_report', '/asset_report/pdf/get', 'POST'] as const
}

export function getPostAssetReportPdfGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.pdf.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.asset_report.pdf.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetReportPdfGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.asset_report.pdf.get.$post>) {
      return parseResponse(client.asset_report.pdf.get.$post(args, options))
    },
  })
}

export function usePostAssetReportPdfGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.pdf.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.asset_report.pdf.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAssetReportPdfGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostAssetReportRefreshMutationKey() {
  return ['asset_report', '/asset_report/refresh', 'POST'] as const
}

export function getPostAssetReportRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.refresh.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.asset_report.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetReportRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.asset_report.refresh.$post>) {
      return parseResponse(client.asset_report.refresh.$post(args, options))
    },
  })
}

export function usePostAssetReportRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.refresh.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.asset_report.refresh.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAssetReportRefreshMutationOptions<TError, TOnMutateResult>(
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

export function getPostAssetReportRemoveMutationKey() {
  return ['asset_report', '/asset_report/remove', 'POST'] as const
}

export function getPostAssetReportRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.remove.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.asset_report.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetReportRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.asset_report.remove.$post>) {
      return parseResponse(client.asset_report.remove.$post(args, options))
    },
  })
}

export function usePostAssetReportRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.remove.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.asset_report.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAssetReportRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthGetMutationKey() {
  return ['auth', '/auth/get', 'POST'] as const
}

export function getPostAuthGetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.get.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.get.$post>) {
      return parseResponse(client.auth.get.$post(args, options))
    },
  })
}

export function usePostAuthGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthGetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBankTransferBalanceGetMutationKey() {
  return ['bank_transfer', '/bank_transfer/balance/get', 'POST'] as const
}

export function getPostBankTransferBalanceGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.balance.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.bank_transfer.balance.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBankTransferBalanceGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bank_transfer.balance.get.$post>) {
      return parseResponse(client.bank_transfer.balance.get.$post(args, options))
    },
  })
}

export function usePostBankTransferBalanceGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.balance.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.bank_transfer.balance.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBankTransferBalanceGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostBankTransferCancelMutationKey() {
  return ['bank_transfer', '/bank_transfer/cancel', 'POST'] as const
}

export function getPostBankTransferCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.cancel.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.bank_transfer.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBankTransferCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bank_transfer.cancel.$post>) {
      return parseResponse(client.bank_transfer.cancel.$post(args, options))
    },
  })
}

export function usePostBankTransferCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.cancel.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.bank_transfer.cancel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBankTransferCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostBankTransferCreateMutationKey() {
  return ['bank_transfer', '/bank_transfer/create', 'POST'] as const
}

export function getPostBankTransferCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.bank_transfer.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBankTransferCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bank_transfer.create.$post>) {
      return parseResponse(client.bank_transfer.create.$post(args, options))
    },
  })
}

export function usePostBankTransferCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.bank_transfer.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBankTransferCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostBankTransferEventListMutationKey() {
  return ['bank_transfer', '/bank_transfer/event/list', 'POST'] as const
}

export function getPostBankTransferEventListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.event.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.bank_transfer.event.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBankTransferEventListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bank_transfer.event.list.$post>) {
      return parseResponse(client.bank_transfer.event.list.$post(args, options))
    },
  })
}

export function usePostBankTransferEventList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.event.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.bank_transfer.event.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBankTransferEventListMutationOptions<TError, TOnMutateResult>(
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

export function getPostBankTransferEventSyncMutationKey() {
  return ['bank_transfer', '/bank_transfer/event/sync', 'POST'] as const
}

export function getPostBankTransferEventSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.event.sync.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.bank_transfer.event.sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBankTransferEventSyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bank_transfer.event.sync.$post>) {
      return parseResponse(client.bank_transfer.event.sync.$post(args, options))
    },
  })
}

export function usePostBankTransferEventSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.event.sync.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.bank_transfer.event.sync.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBankTransferEventSyncMutationOptions<TError, TOnMutateResult>(
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

export function getPostBankTransferGetMutationKey() {
  return ['bank_transfer', '/bank_transfer/get', 'POST'] as const
}

export function getPostBankTransferGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.bank_transfer.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBankTransferGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bank_transfer.get.$post>) {
      return parseResponse(client.bank_transfer.get.$post(args, options))
    },
  })
}

export function usePostBankTransferGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.bank_transfer.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBankTransferGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostBankTransferListMutationKey() {
  return ['bank_transfer', '/bank_transfer/list', 'POST'] as const
}

export function getPostBankTransferListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.bank_transfer.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBankTransferListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bank_transfer.list.$post>) {
      return parseResponse(client.bank_transfer.list.$post(args, options))
    },
  })
}

export function usePostBankTransferList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.bank_transfer.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBankTransferListMutationOptions<TError, TOnMutateResult>(
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

export function getPostBankTransferMigrateAccountMutationKey() {
  return ['bank_transfer', '/bank_transfer/migrate_account', 'POST'] as const
}

export function getPostBankTransferMigrateAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.migrate_account.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.bank_transfer.migrate_account.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBankTransferMigrateAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bank_transfer.migrate_account.$post>) {
      return parseResponse(client.bank_transfer.migrate_account.$post(args, options))
    },
  })
}

export function usePostBankTransferMigrateAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.bank_transfer.migrate_account.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.bank_transfer.migrate_account.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBankTransferMigrateAccountMutationOptions<
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

export function getPostBankTransferSweepGetMutationKey() {
  return ['bank_transfer', '/bank_transfer/sweep/get', 'POST'] as const
}

export function getPostBankTransferSweepGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.sweep.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.bank_transfer.sweep.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBankTransferSweepGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bank_transfer.sweep.get.$post>) {
      return parseResponse(client.bank_transfer.sweep.get.$post(args, options))
    },
  })
}

export function usePostBankTransferSweepGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.sweep.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.bank_transfer.sweep.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBankTransferSweepGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostBankTransferSweepListMutationKey() {
  return ['bank_transfer', '/bank_transfer/sweep/list', 'POST'] as const
}

export function getPostBankTransferSweepListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.sweep.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.bank_transfer.sweep.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBankTransferSweepListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bank_transfer.sweep.list.$post>) {
      return parseResponse(client.bank_transfer.sweep.list.$post(args, options))
    },
  })
}

export function usePostBankTransferSweepList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.sweep.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.bank_transfer.sweep.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBankTransferSweepListMutationOptions<TError, TOnMutateResult>(
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

export function getPostBetaCreditV1BankEmploymentGetMutationKey() {
  return ['beta', '/beta/credit/v1/bank_employment/get', 'POST'] as const
}

export function getPostBetaCreditV1BankEmploymentGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beta.credit.v1.bank_employment.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.beta.credit.v1.bank_employment.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetaCreditV1BankEmploymentGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.beta.credit.v1.bank_employment.get.$post>,
    ) {
      return parseResponse(client.beta.credit.v1.bank_employment.get.$post(args, options))
    },
  })
}

export function usePostBetaCreditV1BankEmploymentGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.beta.credit.v1.bank_employment.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.beta.credit.v1.bank_employment.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBetaCreditV1BankEmploymentGetMutationOptions<
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

export function getPostBetaTransactionsRulesV1CreateMutationKey() {
  return ['beta', '/beta/transactions/rules/v1/create', 'POST'] as const
}

export function getPostBetaTransactionsRulesV1CreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beta.transactions.rules.v1.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.beta.transactions.rules.v1.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetaTransactionsRulesV1CreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.beta.transactions.rules.v1.create.$post>,
    ) {
      return parseResponse(client.beta.transactions.rules.v1.create.$post(args, options))
    },
  })
}

export function usePostBetaTransactionsRulesV1Create<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.beta.transactions.rules.v1.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.beta.transactions.rules.v1.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBetaTransactionsRulesV1CreateMutationOptions<
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

export function getPostBetaTransactionsRulesV1ListMutationKey() {
  return ['beta', '/beta/transactions/rules/v1/list', 'POST'] as const
}

export function getPostBetaTransactionsRulesV1ListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beta.transactions.rules.v1.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.beta.transactions.rules.v1.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetaTransactionsRulesV1ListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beta.transactions.rules.v1.list.$post>) {
      return parseResponse(client.beta.transactions.rules.v1.list.$post(args, options))
    },
  })
}

export function usePostBetaTransactionsRulesV1List<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.beta.transactions.rules.v1.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.beta.transactions.rules.v1.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBetaTransactionsRulesV1ListMutationOptions<
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

export function getPostBetaTransactionsRulesV1RemoveMutationKey() {
  return ['beta', '/beta/transactions/rules/v1/remove', 'POST'] as const
}

export function getPostBetaTransactionsRulesV1RemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beta.transactions.rules.v1.remove.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.beta.transactions.rules.v1.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetaTransactionsRulesV1RemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.beta.transactions.rules.v1.remove.$post>,
    ) {
      return parseResponse(client.beta.transactions.rules.v1.remove.$post(args, options))
    },
  })
}

export function usePostBetaTransactionsRulesV1Remove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.beta.transactions.rules.v1.remove.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.beta.transactions.rules.v1.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBetaTransactionsRulesV1RemoveMutationOptions<
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

export function getPostBetaTransactionsV1EnhanceMutationKey() {
  return ['beta', '/beta/transactions/v1/enhance', 'POST'] as const
}

export function getPostBetaTransactionsV1EnhanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beta.transactions.v1.enhance.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.beta.transactions.v1.enhance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetaTransactionsV1EnhanceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beta.transactions.v1.enhance.$post>) {
      return parseResponse(client.beta.transactions.v1.enhance.$post(args, options))
    },
  })
}

export function usePostBetaTransactionsV1Enhance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.beta.transactions.v1.enhance.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.beta.transactions.v1.enhance.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBetaTransactionsV1EnhanceMutationOptions<TError, TOnMutateResult>(
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

export function getPostCategoriesGetMutationKey() {
  return ['categories', '/categories/get', 'POST'] as const
}

export function getPostCategoriesGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.categories.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCategoriesGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.categories.get.$post>) {
      return parseResponse(client.categories.get.$post(args, options))
    },
  })
}

export function usePostCategoriesGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.categories.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCategoriesGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreditAssetReportFreddieMacGetMutationKey() {
  return ['credit', '/credit/asset_report/freddie_mac/get', 'POST'] as const
}

export function getPostCreditAssetReportFreddieMacGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit.asset_report.freddie_mac.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.credit.asset_report.freddie_mac.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditAssetReportFreddieMacGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.credit.asset_report.freddie_mac.get.$post>,
    ) {
      return parseResponse(client.credit.asset_report.freddie_mac.get.$post(args, options))
    },
  })
}

export function usePostCreditAssetReportFreddieMacGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.credit.asset_report.freddie_mac.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.credit.asset_report.freddie_mac.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreditAssetReportFreddieMacGetMutationOptions<
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

export function getPostCreditAuditCopyTokenCreateMutationKey() {
  return ['credit', '/credit/audit_copy_token/create', 'POST'] as const
}

export function getPostCreditAuditCopyTokenCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit.audit_copy_token.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.credit.audit_copy_token.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditAuditCopyTokenCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credit.audit_copy_token.create.$post>) {
      return parseResponse(client.credit.audit_copy_token.create.$post(args, options))
    },
  })
}

export function usePostCreditAuditCopyTokenCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.credit.audit_copy_token.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.credit.audit_copy_token.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreditAuditCopyTokenCreateMutationOptions<
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

export function getPostCreditAuditCopyTokenRemoveMutationKey() {
  return ['credit', '/credit/audit_copy_token/remove', 'POST'] as const
}

export function getPostCreditAuditCopyTokenRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit.audit_copy_token.remove.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.credit.audit_copy_token.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditAuditCopyTokenRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credit.audit_copy_token.remove.$post>) {
      return parseResponse(client.credit.audit_copy_token.remove.$post(args, options))
    },
  })
}

export function usePostCreditAuditCopyTokenRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.credit.audit_copy_token.remove.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.credit.audit_copy_token.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreditAuditCopyTokenRemoveMutationOptions<
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

export function getPostCreditAuditCopyTokenUpdateMutationKey() {
  return ['credit', '/credit/audit_copy_token/update', 'POST'] as const
}

export function getPostCreditAuditCopyTokenUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit.audit_copy_token.update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.credit.audit_copy_token.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditAuditCopyTokenUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credit.audit_copy_token.update.$post>) {
      return parseResponse(client.credit.audit_copy_token.update.$post(args, options))
    },
  })
}

export function usePostCreditAuditCopyTokenUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.credit.audit_copy_token.update.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.credit.audit_copy_token.update.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreditAuditCopyTokenUpdateMutationOptions<
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

export function getPostCreditBankIncomeGetMutationKey() {
  return ['credit', '/credit/bank_income/get', 'POST'] as const
}

export function getPostCreditBankIncomeGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credit.bank_income.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.credit.bank_income.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditBankIncomeGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credit.bank_income.get.$post>) {
      return parseResponse(client.credit.bank_income.get.$post(args, options))
    },
  })
}

export function usePostCreditBankIncomeGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.credit.bank_income.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.credit.bank_income.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreditBankIncomeGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreditBankIncomePdfGetMutationKey() {
  return ['credit', '/credit/bank_income/pdf/get', 'POST'] as const
}

export function getPostCreditBankIncomePdfGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credit.bank_income.pdf.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.credit.bank_income.pdf.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditBankIncomePdfGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credit.bank_income.pdf.get.$post>) {
      return parseResponse(client.credit.bank_income.pdf.get.$post(args, options))
    },
  })
}

export function usePostCreditBankIncomePdfGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.credit.bank_income.pdf.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.credit.bank_income.pdf.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreditBankIncomePdfGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreditBankIncomeRefreshMutationKey() {
  return ['credit', '/credit/bank_income/refresh', 'POST'] as const
}

export function getPostCreditBankIncomeRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credit.bank_income.refresh.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.credit.bank_income.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditBankIncomeRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credit.bank_income.refresh.$post>) {
      return parseResponse(client.credit.bank_income.refresh.$post(args, options))
    },
  })
}

export function usePostCreditBankIncomeRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.credit.bank_income.refresh.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.credit.bank_income.refresh.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreditBankIncomeRefreshMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreditEmploymentGetMutationKey() {
  return ['credit', '/credit/employment/get', 'POST'] as const
}

export function getPostCreditEmploymentGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credit.employment.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.credit.employment.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditEmploymentGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credit.employment.get.$post>) {
      return parseResponse(client.credit.employment.get.$post(args, options))
    },
  })
}

export function usePostCreditEmploymentGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.credit.employment.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.credit.employment.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreditEmploymentGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreditFreddieMacReportsGetMutationKey() {
  return ['credit', '/credit/freddie_mac/reports/get', 'POST'] as const
}

export function getPostCreditFreddieMacReportsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit.freddie_mac.reports.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.credit.freddie_mac.reports.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditFreddieMacReportsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credit.freddie_mac.reports.get.$post>) {
      return parseResponse(client.credit.freddie_mac.reports.get.$post(args, options))
    },
  })
}

export function usePostCreditFreddieMacReportsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.credit.freddie_mac.reports.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.credit.freddie_mac.reports.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreditFreddieMacReportsGetMutationOptions<
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

export function getPostCreditPayrollIncomeGetMutationKey() {
  return ['credit', '/credit/payroll_income/get', 'POST'] as const
}

export function getPostCreditPayrollIncomeGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credit.payroll_income.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.credit.payroll_income.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditPayrollIncomeGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credit.payroll_income.get.$post>) {
      return parseResponse(client.credit.payroll_income.get.$post(args, options))
    },
  })
}

export function usePostCreditPayrollIncomeGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.credit.payroll_income.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.credit.payroll_income.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreditPayrollIncomeGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreditPayrollIncomePrecheckMutationKey() {
  return ['credit', '/credit/payroll_income/precheck', 'POST'] as const
}

export function getPostCreditPayrollIncomePrecheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit.payroll_income.precheck.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.credit.payroll_income.precheck.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditPayrollIncomePrecheckMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credit.payroll_income.precheck.$post>) {
      return parseResponse(client.credit.payroll_income.precheck.$post(args, options))
    },
  })
}

export function usePostCreditPayrollIncomePrecheck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.credit.payroll_income.precheck.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.credit.payroll_income.precheck.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreditPayrollIncomePrecheckMutationOptions<
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

export function getPostCreditPayrollIncomeRefreshMutationKey() {
  return ['credit', '/credit/payroll_income/refresh', 'POST'] as const
}

export function getPostCreditPayrollIncomeRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credit.payroll_income.refresh.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.credit.payroll_income.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditPayrollIncomeRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credit.payroll_income.refresh.$post>) {
      return parseResponse(client.credit.payroll_income.refresh.$post(args, options))
    },
  })
}

export function usePostCreditPayrollIncomeRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.credit.payroll_income.refresh.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.credit.payroll_income.refresh.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreditPayrollIncomeRefreshMutationOptions<
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

export function getPostCreditRelayCreateMutationKey() {
  return ['credit', '/credit/relay/create', 'POST'] as const
}

export function getPostCreditRelayCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit.relay.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.credit.relay.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditRelayCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credit.relay.create.$post>) {
      return parseResponse(client.credit.relay.create.$post(args, options))
    },
  })
}

export function usePostCreditRelayCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.credit.relay.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.credit.relay.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreditRelayCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreditRelayGetMutationKey() {
  return ['credit', '/credit/relay/get', 'POST'] as const
}

export function getPostCreditRelayGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit.relay.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.credit.relay.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditRelayGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credit.relay.get.$post>) {
      return parseResponse(client.credit.relay.get.$post(args, options))
    },
  })
}

export function usePostCreditRelayGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.credit.relay.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.credit.relay.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreditRelayGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreditRelayRefreshMutationKey() {
  return ['credit', '/credit/relay/refresh', 'POST'] as const
}

export function getPostCreditRelayRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credit.relay.refresh.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.credit.relay.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditRelayRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credit.relay.refresh.$post>) {
      return parseResponse(client.credit.relay.refresh.$post(args, options))
    },
  })
}

export function usePostCreditRelayRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.credit.relay.refresh.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.credit.relay.refresh.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreditRelayRefreshMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreditRelayRemoveMutationKey() {
  return ['credit', '/credit/relay/remove', 'POST'] as const
}

export function getPostCreditRelayRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit.relay.remove.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.credit.relay.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditRelayRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credit.relay.remove.$post>) {
      return parseResponse(client.credit.relay.remove.$post(args, options))
    },
  })
}

export function usePostCreditRelayRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.credit.relay.remove.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.credit.relay.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreditRelayRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreditSessionsGetMutationKey() {
  return ['credit', '/credit/sessions/get', 'POST'] as const
}

export function getPostCreditSessionsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit.sessions.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.credit.sessions.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditSessionsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credit.sessions.get.$post>) {
      return parseResponse(client.credit.sessions.get.$post(args, options))
    },
  })
}

export function usePostCreditSessionsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.credit.sessions.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.credit.sessions.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreditSessionsGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostDashboardUserGetMutationKey() {
  return ['dashboard_user', '/dashboard_user/get', 'POST'] as const
}

export function getPostDashboardUserGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard_user.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dashboard_user.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDashboardUserGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dashboard_user.get.$post>) {
      return parseResponse(client.dashboard_user.get.$post(args, options))
    },
  })
}

export function usePostDashboardUserGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dashboard_user.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dashboard_user.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDashboardUserGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostDashboardUserListMutationKey() {
  return ['dashboard_user', '/dashboard_user/list', 'POST'] as const
}

export function getPostDashboardUserListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard_user.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dashboard_user.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDashboardUserListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dashboard_user.list.$post>) {
      return parseResponse(client.dashboard_user.list.$post(args, options))
    },
  })
}

export function usePostDashboardUserList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dashboard_user.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dashboard_user.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDashboardUserListMutationOptions<TError, TOnMutateResult>(
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

export function getPostDepositSwitchAltCreateMutationKey() {
  return ['deposit_switch', '/deposit_switch/alt/create', 'POST'] as const
}

export function getPostDepositSwitchAltCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deposit_switch.alt.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.deposit_switch.alt.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDepositSwitchAltCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deposit_switch.alt.create.$post>) {
      return parseResponse(client.deposit_switch.alt.create.$post(args, options))
    },
  })
}

export function usePostDepositSwitchAltCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.deposit_switch.alt.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.deposit_switch.alt.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDepositSwitchAltCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostDepositSwitchCreateMutationKey() {
  return ['deposit_switch', '/deposit_switch/create', 'POST'] as const
}

export function getPostDepositSwitchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deposit_switch.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.deposit_switch.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDepositSwitchCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deposit_switch.create.$post>) {
      return parseResponse(client.deposit_switch.create.$post(args, options))
    },
  })
}

export function usePostDepositSwitchCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.deposit_switch.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.deposit_switch.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDepositSwitchCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostDepositSwitchGetMutationKey() {
  return ['deposit_switch', '/deposit_switch/get', 'POST'] as const
}

export function getPostDepositSwitchGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deposit_switch.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.deposit_switch.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDepositSwitchGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deposit_switch.get.$post>) {
      return parseResponse(client.deposit_switch.get.$post(args, options))
    },
  })
}

export function usePostDepositSwitchGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.deposit_switch.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.deposit_switch.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDepositSwitchGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostDepositSwitchTokenCreateMutationKey() {
  return ['deposit_switch', '/deposit_switch/token/create', 'POST'] as const
}

export function getPostDepositSwitchTokenCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deposit_switch.token.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.deposit_switch.token.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDepositSwitchTokenCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deposit_switch.token.create.$post>) {
      return parseResponse(client.deposit_switch.token.create.$post(args, options))
    },
  })
}

export function usePostDepositSwitchTokenCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.deposit_switch.token.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.deposit_switch.token.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDepositSwitchTokenCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostEmployersSearchMutationKey() {
  return ['employers', '/employers/search', 'POST'] as const
}

export function getPostEmployersSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.employers.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.employers.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployersSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.employers.search.$post>) {
      return parseResponse(client.employers.search.$post(args, options))
    },
  })
}

export function usePostEmployersSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.employers.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.employers.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmployersSearchMutationOptions<TError, TOnMutateResult>(
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

export function getPostEmploymentVerificationGetMutationKey() {
  return ['employment', '/employment/verification/get', 'POST'] as const
}

export function getPostEmploymentVerificationGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.employment.verification.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.employment.verification.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmploymentVerificationGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.employment.verification.get.$post>) {
      return parseResponse(client.employment.verification.get.$post(args, options))
    },
  })
}

export function usePostEmploymentVerificationGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.employment.verification.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.employment.verification.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmploymentVerificationGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostFdxNotificationsMutationKey() {
  return ['fdx', '/fdx/notifications', 'POST'] as const
}

export function getPostFdxNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fdx.notifications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.fdx.notifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFdxNotificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fdx.notifications.$post>) {
      return parseResponse(client.fdx.notifications.$post(args, options))
    },
  })
}

export function usePostFdxNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fdx.notifications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.fdx.notifications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFdxNotificationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostIdentityGetMutationKey() {
  return ['identity', '/identity/get', 'POST'] as const
}

export function getPostIdentityGetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identity.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.identity.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIdentityGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.identity.get.$post>) {
      return parseResponse(client.identity.get.$post(args, options))
    },
  })
}

export function usePostIdentityGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identity.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.identity.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIdentityGetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostIdentityMatchMutationKey() {
  return ['identity', '/identity/match', 'POST'] as const
}

export function getPostIdentityMatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identity.match.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.identity.match.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIdentityMatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.identity.match.$post>) {
      return parseResponse(client.identity.match.$post(args, options))
    },
  })
}

export function usePostIdentityMatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identity.match.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.identity.match.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIdentityMatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostIdentityVerificationCreateMutationKey() {
  return ['identity_verification', '/identity_verification/create', 'POST'] as const
}

export function getPostIdentityVerificationCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.identity_verification.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.identity_verification.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIdentityVerificationCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.identity_verification.create.$post>) {
      return parseResponse(client.identity_verification.create.$post(args, options))
    },
  })
}

export function usePostIdentityVerificationCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.identity_verification.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.identity_verification.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIdentityVerificationCreateMutationOptions<
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

export function getPostIdentityVerificationGetMutationKey() {
  return ['identity_verification', '/identity_verification/get', 'POST'] as const
}

export function getPostIdentityVerificationGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.identity_verification.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.identity_verification.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIdentityVerificationGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.identity_verification.get.$post>) {
      return parseResponse(client.identity_verification.get.$post(args, options))
    },
  })
}

export function usePostIdentityVerificationGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.identity_verification.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.identity_verification.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIdentityVerificationGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostIdentityVerificationListMutationKey() {
  return ['identity_verification', '/identity_verification/list', 'POST'] as const
}

export function getPostIdentityVerificationListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.identity_verification.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.identity_verification.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIdentityVerificationListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.identity_verification.list.$post>) {
      return parseResponse(client.identity_verification.list.$post(args, options))
    },
  })
}

export function usePostIdentityVerificationList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.identity_verification.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.identity_verification.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIdentityVerificationListMutationOptions<TError, TOnMutateResult>(
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

export function getPostIdentityVerificationRetryMutationKey() {
  return ['identity_verification', '/identity_verification/retry', 'POST'] as const
}

export function getPostIdentityVerificationRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.identity_verification.retry.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.identity_verification.retry.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIdentityVerificationRetryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.identity_verification.retry.$post>) {
      return parseResponse(client.identity_verification.retry.$post(args, options))
    },
  })
}

export function usePostIdentityVerificationRetry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.identity_verification.retry.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.identity_verification.retry.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIdentityVerificationRetryMutationOptions<TError, TOnMutateResult>(
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

export function getPostIncomeVerificationCreateMutationKey() {
  return ['income', '/income/verification/create', 'POST'] as const
}

export function getPostIncomeVerificationCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.income.verification.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.income.verification.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIncomeVerificationCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.income.verification.create.$post>) {
      return parseResponse(client.income.verification.create.$post(args, options))
    },
  })
}

export function usePostIncomeVerificationCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.income.verification.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.income.verification.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIncomeVerificationCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostIncomeVerificationDocumentsDownloadMutationKey() {
  return ['income', '/income/verification/documents/download', 'POST'] as const
}

export function getPostIncomeVerificationDocumentsDownloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.income.verification.documents.download.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.income.verification.documents.download.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIncomeVerificationDocumentsDownloadMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.income.verification.documents.download.$post>,
    ) {
      return parseResponse(client.income.verification.documents.download.$post(args, options))
    },
  })
}

export function usePostIncomeVerificationDocumentsDownload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.income.verification.documents.download.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.income.verification.documents.download.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIncomeVerificationDocumentsDownloadMutationOptions<
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

export function getPostIncomeVerificationPaystubsGetMutationKey() {
  return ['income', '/income/verification/paystubs/get', 'POST'] as const
}

export function getPostIncomeVerificationPaystubsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.income.verification.paystubs.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.income.verification.paystubs.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIncomeVerificationPaystubsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.income.verification.paystubs.get.$post>) {
      return parseResponse(client.income.verification.paystubs.get.$post(args, options))
    },
  })
}

export function usePostIncomeVerificationPaystubsGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.income.verification.paystubs.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.income.verification.paystubs.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIncomeVerificationPaystubsGetMutationOptions<
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

export function getPostIncomeVerificationPrecheckMutationKey() {
  return ['income', '/income/verification/precheck', 'POST'] as const
}

export function getPostIncomeVerificationPrecheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.income.verification.precheck.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.income.verification.precheck.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIncomeVerificationPrecheckMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.income.verification.precheck.$post>) {
      return parseResponse(client.income.verification.precheck.$post(args, options))
    },
  })
}

export function usePostIncomeVerificationPrecheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.income.verification.precheck.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.income.verification.precheck.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIncomeVerificationPrecheckMutationOptions<
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

export function getPostIncomeVerificationTaxformsGetMutationKey() {
  return ['income', '/income/verification/taxforms/get', 'POST'] as const
}

export function getPostIncomeVerificationTaxformsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.income.verification.taxforms.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.income.verification.taxforms.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIncomeVerificationTaxformsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.income.verification.taxforms.get.$post>) {
      return parseResponse(client.income.verification.taxforms.get.$post(args, options))
    },
  })
}

export function usePostIncomeVerificationTaxformsGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.income.verification.taxforms.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.income.verification.taxforms.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIncomeVerificationTaxformsGetMutationOptions<
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

export function getPostInstitutionsGetMutationKey() {
  return ['institutions', '/institutions/get', 'POST'] as const
}

export function getPostInstitutionsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.institutions.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.institutions.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInstitutionsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.institutions.get.$post>) {
      return parseResponse(client.institutions.get.$post(args, options))
    },
  })
}

export function usePostInstitutionsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.institutions.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.institutions.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInstitutionsGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostInstitutionsGetByIdMutationKey() {
  return ['institutions', '/institutions/get_by_id', 'POST'] as const
}

export function getPostInstitutionsGetByIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.institutions.get_by_id.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.institutions.get_by_id.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInstitutionsGetByIdMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.institutions.get_by_id.$post>) {
      return parseResponse(client.institutions.get_by_id.$post(args, options))
    },
  })
}

export function usePostInstitutionsGetById<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.institutions.get_by_id.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.institutions.get_by_id.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInstitutionsGetByIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostInstitutionsSearchMutationKey() {
  return ['institutions', '/institutions/search', 'POST'] as const
}

export function getPostInstitutionsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.institutions.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.institutions.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInstitutionsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.institutions.search.$post>) {
      return parseResponse(client.institutions.search.$post(args, options))
    },
  })
}

export function usePostInstitutionsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.institutions.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.institutions.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInstitutionsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getPostInvestmentsHoldingsGetMutationKey() {
  return ['investments', '/investments/holdings/get', 'POST'] as const
}

export function getPostInvestmentsHoldingsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.investments.holdings.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.investments.holdings.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvestmentsHoldingsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.investments.holdings.get.$post>) {
      return parseResponse(client.investments.holdings.get.$post(args, options))
    },
  })
}

export function usePostInvestmentsHoldingsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.investments.holdings.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.investments.holdings.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInvestmentsHoldingsGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostInvestmentsTransactionsGetMutationKey() {
  return ['investments', '/investments/transactions/get', 'POST'] as const
}

export function getPostInvestmentsTransactionsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.investments.transactions.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.investments.transactions.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvestmentsTransactionsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.investments.transactions.get.$post>) {
      return parseResponse(client.investments.transactions.get.$post(args, options))
    },
  })
}

export function usePostInvestmentsTransactionsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.investments.transactions.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.investments.transactions.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInvestmentsTransactionsGetMutationOptions<
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

export function getPostItemAccessTokenInvalidateMutationKey() {
  return ['item', '/item/access_token/invalidate', 'POST'] as const
}

export function getPostItemAccessTokenInvalidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.item.access_token.invalidate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.item.access_token.invalidate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemAccessTokenInvalidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.item.access_token.invalidate.$post>) {
      return parseResponse(client.item.access_token.invalidate.$post(args, options))
    },
  })
}

export function usePostItemAccessTokenInvalidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.item.access_token.invalidate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.item.access_token.invalidate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostItemAccessTokenInvalidateMutationOptions<TError, TOnMutateResult>(
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

export function getPostItemActivityListMutationKey() {
  return ['item', '/item/activity/list', 'POST'] as const
}

export function getPostItemActivityListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.activity.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.item.activity.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemActivityListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.item.activity.list.$post>) {
      return parseResponse(client.item.activity.list.$post(args, options))
    },
  })
}

export function usePostItemActivityList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.item.activity.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.item.activity.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostItemActivityListMutationOptions<TError, TOnMutateResult>(
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

export function getPostItemApplicationListMutationKey() {
  return ['item', '/item/application/list', 'POST'] as const
}

export function getPostItemApplicationListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.item.application.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.item.application.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemApplicationListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.item.application.list.$post>) {
      return parseResponse(client.item.application.list.$post(args, options))
    },
  })
}

export function usePostItemApplicationList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.item.application.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.item.application.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostItemApplicationListMutationOptions<TError, TOnMutateResult>(
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

export function getPostItemApplicationScopesUpdateMutationKey() {
  return ['item', '/item/application/scopes/update', 'POST'] as const
}

export function getPostItemApplicationScopesUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.item.application.scopes.update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.item.application.scopes.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemApplicationScopesUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.item.application.scopes.update.$post>) {
      return parseResponse(client.item.application.scopes.update.$post(args, options))
    },
  })
}

export function usePostItemApplicationScopesUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.item.application.scopes.update.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.item.application.scopes.update.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostItemApplicationScopesUpdateMutationOptions<
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

export function getPostItemGetMutationKey() {
  return ['item', '/item/get', 'POST'] as const
}

export function getPostItemGetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.get.$post>>>>>,
    TError,
    InferRequestType<typeof client.item.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.item.get.$post>) {
      return parseResponse(client.item.get.$post(args, options))
    },
  })
}

export function usePostItemGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.item.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostItemGetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostItemImportMutationKey() {
  return ['item', '/item/import', 'POST'] as const
}

export function getPostItemImportMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.import.$post>>>>>,
    TError,
    InferRequestType<typeof client.item.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.item.import.$post>) {
      return parseResponse(client.item.import.$post(args, options))
    },
  })
}

export function usePostItemImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.import.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.item.import.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostItemImportMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostItemPublicTokenCreateMutationKey() {
  return ['item', '/item/public_token/create', 'POST'] as const
}

export function getPostItemPublicTokenCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.item.public_token.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.item.public_token.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemPublicTokenCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.item.public_token.create.$post>) {
      return parseResponse(client.item.public_token.create.$post(args, options))
    },
  })
}

export function usePostItemPublicTokenCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.item.public_token.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.item.public_token.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostItemPublicTokenCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostItemPublicTokenExchangeMutationKey() {
  return ['item', '/item/public_token/exchange', 'POST'] as const
}

export function getPostItemPublicTokenExchangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.item.public_token.exchange.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.item.public_token.exchange.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemPublicTokenExchangeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.item.public_token.exchange.$post>) {
      return parseResponse(client.item.public_token.exchange.$post(args, options))
    },
  })
}

export function usePostItemPublicTokenExchange<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.item.public_token.exchange.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.item.public_token.exchange.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostItemPublicTokenExchangeMutationOptions<TError, TOnMutateResult>(
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

export function getPostItemRemoveMutationKey() {
  return ['item', '/item/remove', 'POST'] as const
}

export function getPostItemRemoveMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.remove.$post>>>>>,
    TError,
    InferRequestType<typeof client.item.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.item.remove.$post>) {
      return parseResponse(client.item.remove.$post(args, options))
    },
  })
}

export function usePostItemRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.remove.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.item.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostItemRemoveMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostItemWebhookUpdateMutationKey() {
  return ['item', '/item/webhook/update', 'POST'] as const
}

export function getPostItemWebhookUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.webhook.update.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.item.webhook.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemWebhookUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.item.webhook.update.$post>) {
      return parseResponse(client.item.webhook.update.$post(args, options))
    },
  })
}

export function usePostItemWebhookUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.item.webhook.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.item.webhook.update.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostItemWebhookUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getPostLiabilitiesGetMutationKey() {
  return ['liabilities', '/liabilities/get', 'POST'] as const
}

export function getPostLiabilitiesGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liabilities.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.liabilities.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLiabilitiesGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.liabilities.get.$post>) {
      return parseResponse(client.liabilities.get.$post(args, options))
    },
  })
}

export function usePostLiabilitiesGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liabilities.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.liabilities.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLiabilitiesGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostLinkOauthCorrelationIdExchangeMutationKey() {
  return ['link', '/link/oauth/correlation_id/exchange', 'POST'] as const
}

export function getPostLinkOauthCorrelationIdExchangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.link.oauth.correlation_id.exchange.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.link.oauth.correlation_id.exchange.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLinkOauthCorrelationIdExchangeMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.link.oauth.correlation_id.exchange.$post>,
    ) {
      return parseResponse(client.link.oauth.correlation_id.exchange.$post(args, options))
    },
  })
}

export function usePostLinkOauthCorrelationIdExchange<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.link.oauth.correlation_id.exchange.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.link.oauth.correlation_id.exchange.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinkOauthCorrelationIdExchangeMutationOptions<
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

export function getPostLinkTokenCreateMutationKey() {
  return ['link', '/link/token/create', 'POST'] as const
}

export function getPostLinkTokenCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.link.token.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.link.token.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLinkTokenCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.link.token.create.$post>) {
      return parseResponse(client.link.token.create.$post(args, options))
    },
  })
}

export function usePostLinkTokenCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.link.token.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.link.token.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinkTokenCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostLinkTokenGetMutationKey() {
  return ['link', '/link/token/get', 'POST'] as const
}

export function getPostLinkTokenGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.link.token.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.link.token.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLinkTokenGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.link.token.get.$post>) {
      return parseResponse(client.link.token.get.$post(args, options))
    },
  })
}

export function usePostLinkTokenGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.link.token.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.link.token.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinkTokenGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostLinkDeliveryCreateMutationKey() {
  return ['link_delivery', '/link_delivery/create', 'POST'] as const
}

export function getPostLinkDeliveryCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.link_delivery.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.link_delivery.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLinkDeliveryCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.link_delivery.create.$post>) {
      return parseResponse(client.link_delivery.create.$post(args, options))
    },
  })
}

export function usePostLinkDeliveryCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.link_delivery.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.link_delivery.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinkDeliveryCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostLinkDeliveryGetMutationKey() {
  return ['link_delivery', '/link_delivery/get', 'POST'] as const
}

export function getPostLinkDeliveryGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.link_delivery.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.link_delivery.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLinkDeliveryGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.link_delivery.get.$post>) {
      return parseResponse(client.link_delivery.get.$post(args, options))
    },
  })
}

export function usePostLinkDeliveryGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.link_delivery.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.link_delivery.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinkDeliveryGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostPartnerCustomerCreateMutationKey() {
  return ['partner', '/partner/customer/create', 'POST'] as const
}

export function getPostPartnerCustomerCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.partner.customer.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.partner.customer.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPartnerCustomerCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.partner.customer.create.$post>) {
      return parseResponse(client.partner.customer.create.$post(args, options))
    },
  })
}

export function usePostPartnerCustomerCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.partner.customer.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.partner.customer.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPartnerCustomerCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostPartnerCustomerEnableMutationKey() {
  return ['partner', '/partner/customer/enable', 'POST'] as const
}

export function getPostPartnerCustomerEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.partner.customer.enable.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.partner.customer.enable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPartnerCustomerEnableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.partner.customer.enable.$post>) {
      return parseResponse(client.partner.customer.enable.$post(args, options))
    },
  })
}

export function usePostPartnerCustomerEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.partner.customer.enable.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.partner.customer.enable.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPartnerCustomerEnableMutationOptions<TError, TOnMutateResult>(
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

export function getPostPartnerCustomerGetMutationKey() {
  return ['partner', '/partner/customer/get', 'POST'] as const
}

export function getPostPartnerCustomerGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.partner.customer.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.partner.customer.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPartnerCustomerGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.partner.customer.get.$post>) {
      return parseResponse(client.partner.customer.get.$post(args, options))
    },
  })
}

export function usePostPartnerCustomerGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.partner.customer.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.partner.customer.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPartnerCustomerGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostPartnerCustomerOauthInstitutionsGetMutationKey() {
  return ['partner', '/partner/customer/oauth_institutions/get', 'POST'] as const
}

export function getPostPartnerCustomerOauthInstitutionsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.partner.customer.oauth_institutions.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.partner.customer.oauth_institutions.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPartnerCustomerOauthInstitutionsGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.partner.customer.oauth_institutions.get.$post>,
    ) {
      return parseResponse(client.partner.customer.oauth_institutions.get.$post(args, options))
    },
  })
}

export function usePostPartnerCustomerOauthInstitutionsGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.partner.customer.oauth_institutions.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.partner.customer.oauth_institutions.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPartnerCustomerOauthInstitutionsGetMutationOptions<
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

export function getPostPartnerCustomerRemoveMutationKey() {
  return ['partner', '/partner/customer/remove', 'POST'] as const
}

export function getPostPartnerCustomerRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.partner.customer.remove.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.partner.customer.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPartnerCustomerRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.partner.customer.remove.$post>) {
      return parseResponse(client.partner.customer.remove.$post(args, options))
    },
  })
}

export function usePostPartnerCustomerRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.partner.customer.remove.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.partner.customer.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPartnerCustomerRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getPostPaymentInitiationConsentCreateMutationKey() {
  return ['payment_initiation', '/payment_initiation/consent/create', 'POST'] as const
}

export function getPostPaymentInitiationConsentCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.consent.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.payment_initiation.consent.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentInitiationConsentCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.payment_initiation.consent.create.$post>,
    ) {
      return parseResponse(client.payment_initiation.consent.create.$post(args, options))
    },
  })
}

export function usePostPaymentInitiationConsentCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.payment_initiation.consent.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.payment_initiation.consent.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentInitiationConsentCreateMutationOptions<
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

export function getPostPaymentInitiationConsentGetMutationKey() {
  return ['payment_initiation', '/payment_initiation/consent/get', 'POST'] as const
}

export function getPostPaymentInitiationConsentGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.consent.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.payment_initiation.consent.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentInitiationConsentGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payment_initiation.consent.get.$post>) {
      return parseResponse(client.payment_initiation.consent.get.$post(args, options))
    },
  })
}

export function usePostPaymentInitiationConsentGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.payment_initiation.consent.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.payment_initiation.consent.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentInitiationConsentGetMutationOptions<
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

export function getPostPaymentInitiationConsentPaymentExecuteMutationKey() {
  return ['payment_initiation', '/payment_initiation/consent/payment/execute', 'POST'] as const
}

export function getPostPaymentInitiationConsentPaymentExecuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.consent.payment.execute.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.payment_initiation.consent.payment.execute.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentInitiationConsentPaymentExecuteMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.payment_initiation.consent.payment.execute.$post>,
    ) {
      return parseResponse(client.payment_initiation.consent.payment.execute.$post(args, options))
    },
  })
}

export function usePostPaymentInitiationConsentPaymentExecute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.payment_initiation.consent.payment.execute.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.payment_initiation.consent.payment.execute.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentInitiationConsentPaymentExecuteMutationOptions<
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

export function getPostPaymentInitiationConsentRevokeMutationKey() {
  return ['payment_initiation', '/payment_initiation/consent/revoke', 'POST'] as const
}

export function getPostPaymentInitiationConsentRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.consent.revoke.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.payment_initiation.consent.revoke.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentInitiationConsentRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.payment_initiation.consent.revoke.$post>,
    ) {
      return parseResponse(client.payment_initiation.consent.revoke.$post(args, options))
    },
  })
}

export function usePostPaymentInitiationConsentRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.payment_initiation.consent.revoke.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.payment_initiation.consent.revoke.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentInitiationConsentRevokeMutationOptions<
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

export function getPostPaymentInitiationPaymentCreateMutationKey() {
  return ['payment_initiation', '/payment_initiation/payment/create', 'POST'] as const
}

export function getPostPaymentInitiationPaymentCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.payment.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.payment_initiation.payment.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentInitiationPaymentCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.payment_initiation.payment.create.$post>,
    ) {
      return parseResponse(client.payment_initiation.payment.create.$post(args, options))
    },
  })
}

export function usePostPaymentInitiationPaymentCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.payment_initiation.payment.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.payment_initiation.payment.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentInitiationPaymentCreateMutationOptions<
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

export function getPostPaymentInitiationPaymentGetMutationKey() {
  return ['payment_initiation', '/payment_initiation/payment/get', 'POST'] as const
}

export function getPostPaymentInitiationPaymentGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.payment.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.payment_initiation.payment.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentInitiationPaymentGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payment_initiation.payment.get.$post>) {
      return parseResponse(client.payment_initiation.payment.get.$post(args, options))
    },
  })
}

export function usePostPaymentInitiationPaymentGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.payment_initiation.payment.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.payment_initiation.payment.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentInitiationPaymentGetMutationOptions<
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

export function getPostPaymentInitiationPaymentListMutationKey() {
  return ['payment_initiation', '/payment_initiation/payment/list', 'POST'] as const
}

export function getPostPaymentInitiationPaymentListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.payment.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.payment_initiation.payment.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentInitiationPaymentListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payment_initiation.payment.list.$post>) {
      return parseResponse(client.payment_initiation.payment.list.$post(args, options))
    },
  })
}

export function usePostPaymentInitiationPaymentList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.payment_initiation.payment.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.payment_initiation.payment.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentInitiationPaymentListMutationOptions<
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

export function getPostPaymentInitiationPaymentReverseMutationKey() {
  return ['payment_initiation', '/payment_initiation/payment/reverse', 'POST'] as const
}

export function getPostPaymentInitiationPaymentReverseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.payment.reverse.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.payment_initiation.payment.reverse.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentInitiationPaymentReverseMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.payment_initiation.payment.reverse.$post>,
    ) {
      return parseResponse(client.payment_initiation.payment.reverse.$post(args, options))
    },
  })
}

export function usePostPaymentInitiationPaymentReverse<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.payment_initiation.payment.reverse.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.payment_initiation.payment.reverse.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentInitiationPaymentReverseMutationOptions<
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

export function getPostPaymentInitiationPaymentTokenCreateMutationKey() {
  return ['payment_initiation', '/payment_initiation/payment/token/create', 'POST'] as const
}

export function getPostPaymentInitiationPaymentTokenCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.payment.token.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.payment_initiation.payment.token.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentInitiationPaymentTokenCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.payment_initiation.payment.token.create.$post>,
    ) {
      return parseResponse(client.payment_initiation.payment.token.create.$post(args, options))
    },
  })
}

export function usePostPaymentInitiationPaymentTokenCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.payment_initiation.payment.token.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.payment_initiation.payment.token.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentInitiationPaymentTokenCreateMutationOptions<
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

export function getPostPaymentInitiationRecipientCreateMutationKey() {
  return ['payment_initiation', '/payment_initiation/recipient/create', 'POST'] as const
}

export function getPostPaymentInitiationRecipientCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.recipient.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.payment_initiation.recipient.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentInitiationRecipientCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.payment_initiation.recipient.create.$post>,
    ) {
      return parseResponse(client.payment_initiation.recipient.create.$post(args, options))
    },
  })
}

export function usePostPaymentInitiationRecipientCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.payment_initiation.recipient.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.payment_initiation.recipient.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentInitiationRecipientCreateMutationOptions<
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

export function getPostPaymentInitiationRecipientGetMutationKey() {
  return ['payment_initiation', '/payment_initiation/recipient/get', 'POST'] as const
}

export function getPostPaymentInitiationRecipientGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.recipient.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.payment_initiation.recipient.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentInitiationRecipientGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payment_initiation.recipient.get.$post>) {
      return parseResponse(client.payment_initiation.recipient.get.$post(args, options))
    },
  })
}

export function usePostPaymentInitiationRecipientGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.payment_initiation.recipient.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.payment_initiation.recipient.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentInitiationRecipientGetMutationOptions<
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

export function getPostPaymentInitiationRecipientListMutationKey() {
  return ['payment_initiation', '/payment_initiation/recipient/list', 'POST'] as const
}

export function getPostPaymentInitiationRecipientListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.recipient.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.payment_initiation.recipient.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentInitiationRecipientListMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.payment_initiation.recipient.list.$post>,
    ) {
      return parseResponse(client.payment_initiation.recipient.list.$post(args, options))
    },
  })
}

export function usePostPaymentInitiationRecipientList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.payment_initiation.recipient.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.payment_initiation.recipient.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentInitiationRecipientListMutationOptions<
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

export function getPostPaymentProfileCreateMutationKey() {
  return ['payment_profile', '/payment_profile/create', 'POST'] as const
}

export function getPostPaymentProfileCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.payment_profile.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.payment_profile.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentProfileCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payment_profile.create.$post>) {
      return parseResponse(client.payment_profile.create.$post(args, options))
    },
  })
}

export function usePostPaymentProfileCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.payment_profile.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.payment_profile.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentProfileCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostPaymentProfileGetMutationKey() {
  return ['payment_profile', '/payment_profile/get', 'POST'] as const
}

export function getPostPaymentProfileGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_profile.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.payment_profile.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentProfileGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payment_profile.get.$post>) {
      return parseResponse(client.payment_profile.get.$post(args, options))
    },
  })
}

export function usePostPaymentProfileGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.payment_profile.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.payment_profile.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentProfileGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostPaymentProfileRemoveMutationKey() {
  return ['payment_profile', '/payment_profile/remove', 'POST'] as const
}

export function getPostPaymentProfileRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.payment_profile.remove.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.payment_profile.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentProfileRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payment_profile.remove.$post>) {
      return parseResponse(client.payment_profile.remove.$post(args, options))
    },
  })
}

export function usePostPaymentProfileRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.payment_profile.remove.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.payment_profile.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentProfileRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getPostProcessorApexProcessorTokenCreateMutationKey() {
  return ['processor', '/processor/apex/processor_token/create', 'POST'] as const
}

export function getPostProcessorApexProcessorTokenCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.apex.processor_token.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.processor.apex.processor_token.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorApexProcessorTokenCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.processor.apex.processor_token.create.$post>,
    ) {
      return parseResponse(client.processor.apex.processor_token.create.$post(args, options))
    },
  })
}

export function usePostProcessorApexProcessorTokenCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.processor.apex.processor_token.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.processor.apex.processor_token.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProcessorApexProcessorTokenCreateMutationOptions<
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

export function getPostProcessorAuthGetMutationKey() {
  return ['processor', '/processor/auth/get', 'POST'] as const
}

export function getPostProcessorAuthGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processor.auth.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.processor.auth.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorAuthGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.processor.auth.get.$post>) {
      return parseResponse(client.processor.auth.get.$post(args, options))
    },
  })
}

export function usePostProcessorAuthGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.processor.auth.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.processor.auth.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProcessorAuthGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostProcessorBalanceGetMutationKey() {
  return ['processor', '/processor/balance/get', 'POST'] as const
}

export function getPostProcessorBalanceGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.processor.balance.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.processor.balance.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorBalanceGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.processor.balance.get.$post>) {
      return parseResponse(client.processor.balance.get.$post(args, options))
    },
  })
}

export function usePostProcessorBalanceGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.processor.balance.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.processor.balance.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProcessorBalanceGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostProcessorBankTransferCreateMutationKey() {
  return ['processor', '/processor/bank_transfer/create', 'POST'] as const
}

export function getPostProcessorBankTransferCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.bank_transfer.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.processor.bank_transfer.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorBankTransferCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.processor.bank_transfer.create.$post>) {
      return parseResponse(client.processor.bank_transfer.create.$post(args, options))
    },
  })
}

export function usePostProcessorBankTransferCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.processor.bank_transfer.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.processor.bank_transfer.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProcessorBankTransferCreateMutationOptions<
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

export function getPostProcessorIdentityGetMutationKey() {
  return ['processor', '/processor/identity/get', 'POST'] as const
}

export function getPostProcessorIdentityGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.processor.identity.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.processor.identity.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorIdentityGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.processor.identity.get.$post>) {
      return parseResponse(client.processor.identity.get.$post(args, options))
    },
  })
}

export function usePostProcessorIdentityGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.processor.identity.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.processor.identity.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProcessorIdentityGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostProcessorSignalDecisionReportMutationKey() {
  return ['processor', '/processor/signal/decision/report', 'POST'] as const
}

export function getPostProcessorSignalDecisionReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.signal.decision.report.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.processor.signal.decision.report.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorSignalDecisionReportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.processor.signal.decision.report.$post>) {
      return parseResponse(client.processor.signal.decision.report.$post(args, options))
    },
  })
}

export function usePostProcessorSignalDecisionReport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.processor.signal.decision.report.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.processor.signal.decision.report.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProcessorSignalDecisionReportMutationOptions<
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

export function getPostProcessorSignalEvaluateMutationKey() {
  return ['processor', '/processor/signal/evaluate', 'POST'] as const
}

export function getPostProcessorSignalEvaluateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.processor.signal.evaluate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.processor.signal.evaluate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorSignalEvaluateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.processor.signal.evaluate.$post>) {
      return parseResponse(client.processor.signal.evaluate.$post(args, options))
    },
  })
}

export function usePostProcessorSignalEvaluate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.processor.signal.evaluate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.processor.signal.evaluate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProcessorSignalEvaluateMutationOptions<TError, TOnMutateResult>(
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

export function getPostProcessorSignalReturnReportMutationKey() {
  return ['processor', '/processor/signal/return/report', 'POST'] as const
}

export function getPostProcessorSignalReturnReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.signal.return.report.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.processor.signal.return.report.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorSignalReturnReportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.processor.signal.return.report.$post>) {
      return parseResponse(client.processor.signal.return.report.$post(args, options))
    },
  })
}

export function usePostProcessorSignalReturnReport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.processor.signal.return.report.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.processor.signal.return.report.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProcessorSignalReturnReportMutationOptions<
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

export function getPostProcessorStripeBankAccountTokenCreateMutationKey() {
  return ['processor', '/processor/stripe/bank_account_token/create', 'POST'] as const
}

export function getPostProcessorStripeBankAccountTokenCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.stripe.bank_account_token.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.processor.stripe.bank_account_token.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorStripeBankAccountTokenCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.processor.stripe.bank_account_token.create.$post>,
    ) {
      return parseResponse(client.processor.stripe.bank_account_token.create.$post(args, options))
    },
  })
}

export function usePostProcessorStripeBankAccountTokenCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.processor.stripe.bank_account_token.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.processor.stripe.bank_account_token.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProcessorStripeBankAccountTokenCreateMutationOptions<
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

export function getPostProcessorTokenCreateMutationKey() {
  return ['processor', '/processor/token/create', 'POST'] as const
}

export function getPostProcessorTokenCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.processor.token.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.processor.token.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorTokenCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.processor.token.create.$post>) {
      return parseResponse(client.processor.token.create.$post(args, options))
    },
  })
}

export function usePostProcessorTokenCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.processor.token.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.processor.token.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProcessorTokenCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostSandboxBankTransferFireWebhookMutationKey() {
  return ['sandbox', '/sandbox/bank_transfer/fire_webhook', 'POST'] as const
}

export function getPostSandboxBankTransferFireWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.bank_transfer.fire_webhook.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.bank_transfer.fire_webhook.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxBankTransferFireWebhookMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.sandbox.bank_transfer.fire_webhook.$post>,
    ) {
      return parseResponse(client.sandbox.bank_transfer.fire_webhook.$post(args, options))
    },
  })
}

export function usePostSandboxBankTransferFireWebhook<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sandbox.bank_transfer.fire_webhook.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sandbox.bank_transfer.fire_webhook.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxBankTransferFireWebhookMutationOptions<
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

export function getPostSandboxBankTransferSimulateMutationKey() {
  return ['sandbox', '/sandbox/bank_transfer/simulate', 'POST'] as const
}

export function getPostSandboxBankTransferSimulateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.bank_transfer.simulate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.bank_transfer.simulate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxBankTransferSimulateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.bank_transfer.simulate.$post>) {
      return parseResponse(client.sandbox.bank_transfer.simulate.$post(args, options))
    },
  })
}

export function usePostSandboxBankTransferSimulate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sandbox.bank_transfer.simulate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sandbox.bank_transfer.simulate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxBankTransferSimulateMutationOptions<
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

export function getPostSandboxIncomeFireWebhookMutationKey() {
  return ['sandbox', '/sandbox/income/fire_webhook', 'POST'] as const
}

export function getPostSandboxIncomeFireWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.income.fire_webhook.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.income.fire_webhook.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxIncomeFireWebhookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.income.fire_webhook.$post>) {
      return parseResponse(client.sandbox.income.fire_webhook.$post(args, options))
    },
  })
}

export function usePostSandboxIncomeFireWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sandbox.income.fire_webhook.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sandbox.income.fire_webhook.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxIncomeFireWebhookMutationOptions<TError, TOnMutateResult>(
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

export function getPostSandboxItemFireWebhookMutationKey() {
  return ['sandbox', '/sandbox/item/fire_webhook', 'POST'] as const
}

export function getPostSandboxItemFireWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.item.fire_webhook.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.item.fire_webhook.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxItemFireWebhookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.item.fire_webhook.$post>) {
      return parseResponse(client.sandbox.item.fire_webhook.$post(args, options))
    },
  })
}

export function usePostSandboxItemFireWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.item.fire_webhook.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sandbox.item.fire_webhook.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxItemFireWebhookMutationOptions<TError, TOnMutateResult>(
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

export function getPostSandboxItemResetLoginMutationKey() {
  return ['sandbox', '/sandbox/item/reset_login', 'POST'] as const
}

export function getPostSandboxItemResetLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.item.reset_login.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.item.reset_login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxItemResetLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.item.reset_login.$post>) {
      return parseResponse(client.sandbox.item.reset_login.$post(args, options))
    },
  })
}

export function usePostSandboxItemResetLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.item.reset_login.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sandbox.item.reset_login.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxItemResetLoginMutationOptions<TError, TOnMutateResult>(
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

export function getPostSandboxItemSetVerificationStatusMutationKey() {
  return ['sandbox', '/sandbox/item/set_verification_status', 'POST'] as const
}

export function getPostSandboxItemSetVerificationStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.item.set_verification_status.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.item.set_verification_status.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxItemSetVerificationStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.sandbox.item.set_verification_status.$post>,
    ) {
      return parseResponse(client.sandbox.item.set_verification_status.$post(args, options))
    },
  })
}

export function usePostSandboxItemSetVerificationStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sandbox.item.set_verification_status.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sandbox.item.set_verification_status.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxItemSetVerificationStatusMutationOptions<
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

export function getPostSandboxOauthSelectAccountsMutationKey() {
  return ['sandbox', '/sandbox/oauth/select_accounts', 'POST'] as const
}

export function getPostSandboxOauthSelectAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.oauth.select_accounts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.oauth.select_accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxOauthSelectAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.oauth.select_accounts.$post>) {
      return parseResponse(client.sandbox.oauth.select_accounts.$post(args, options))
    },
  })
}

export function usePostSandboxOauthSelectAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sandbox.oauth.select_accounts.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sandbox.oauth.select_accounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxOauthSelectAccountsMutationOptions<
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

export function getPostSandboxPaymentProfileResetLoginMutationKey() {
  return ['sandbox', '/sandbox/payment_profile/reset_login', 'POST'] as const
}

export function getPostSandboxPaymentProfileResetLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.payment_profile.reset_login.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.payment_profile.reset_login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxPaymentProfileResetLoginMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.sandbox.payment_profile.reset_login.$post>,
    ) {
      return parseResponse(client.sandbox.payment_profile.reset_login.$post(args, options))
    },
  })
}

export function usePostSandboxPaymentProfileResetLogin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sandbox.payment_profile.reset_login.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sandbox.payment_profile.reset_login.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxPaymentProfileResetLoginMutationOptions<
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

export function getPostSandboxProcessorTokenCreateMutationKey() {
  return ['sandbox', '/sandbox/processor_token/create', 'POST'] as const
}

export function getPostSandboxProcessorTokenCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.processor_token.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.processor_token.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxProcessorTokenCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.processor_token.create.$post>) {
      return parseResponse(client.sandbox.processor_token.create.$post(args, options))
    },
  })
}

export function usePostSandboxProcessorTokenCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sandbox.processor_token.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sandbox.processor_token.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxProcessorTokenCreateMutationOptions<
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

export function getPostSandboxPublicTokenCreateMutationKey() {
  return ['sandbox', '/sandbox/public_token/create', 'POST'] as const
}

export function getPostSandboxPublicTokenCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.public_token.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.public_token.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxPublicTokenCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.public_token.create.$post>) {
      return parseResponse(client.sandbox.public_token.create.$post(args, options))
    },
  })
}

export function usePostSandboxPublicTokenCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sandbox.public_token.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sandbox.public_token.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxPublicTokenCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostSandboxTransferFireWebhookMutationKey() {
  return ['sandbox', '/sandbox/transfer/fire_webhook', 'POST'] as const
}

export function getPostSandboxTransferFireWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.transfer.fire_webhook.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.transfer.fire_webhook.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxTransferFireWebhookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.transfer.fire_webhook.$post>) {
      return parseResponse(client.sandbox.transfer.fire_webhook.$post(args, options))
    },
  })
}

export function usePostSandboxTransferFireWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sandbox.transfer.fire_webhook.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sandbox.transfer.fire_webhook.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxTransferFireWebhookMutationOptions<
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

export function getPostSandboxTransferRepaymentSimulateMutationKey() {
  return ['sandbox', '/sandbox/transfer/repayment/simulate', 'POST'] as const
}

export function getPostSandboxTransferRepaymentSimulateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.transfer.repayment.simulate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.transfer.repayment.simulate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxTransferRepaymentSimulateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.sandbox.transfer.repayment.simulate.$post>,
    ) {
      return parseResponse(client.sandbox.transfer.repayment.simulate.$post(args, options))
    },
  })
}

export function usePostSandboxTransferRepaymentSimulate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sandbox.transfer.repayment.simulate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sandbox.transfer.repayment.simulate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxTransferRepaymentSimulateMutationOptions<
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

export function getPostSandboxTransferSimulateMutationKey() {
  return ['sandbox', '/sandbox/transfer/simulate', 'POST'] as const
}

export function getPostSandboxTransferSimulateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.transfer.simulate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.transfer.simulate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxTransferSimulateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.transfer.simulate.$post>) {
      return parseResponse(client.sandbox.transfer.simulate.$post(args, options))
    },
  })
}

export function usePostSandboxTransferSimulate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.transfer.simulate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sandbox.transfer.simulate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxTransferSimulateMutationOptions<TError, TOnMutateResult>(
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

export function getPostSandboxTransferSweepSimulateMutationKey() {
  return ['sandbox', '/sandbox/transfer/sweep/simulate', 'POST'] as const
}

export function getPostSandboxTransferSweepSimulateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.transfer.sweep.simulate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.transfer.sweep.simulate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxTransferSweepSimulateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.transfer.sweep.simulate.$post>) {
      return parseResponse(client.sandbox.transfer.sweep.simulate.$post(args, options))
    },
  })
}

export function usePostSandboxTransferSweepSimulate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sandbox.transfer.sweep.simulate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sandbox.transfer.sweep.simulate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxTransferSweepSimulateMutationOptions<
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

export function getPostSandboxTransferTestClockAdvanceMutationKey() {
  return ['sandbox', '/sandbox/transfer/test_clock/advance', 'POST'] as const
}

export function getPostSandboxTransferTestClockAdvanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.transfer.test_clock.advance.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.transfer.test_clock.advance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxTransferTestClockAdvanceMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.sandbox.transfer.test_clock.advance.$post>,
    ) {
      return parseResponse(client.sandbox.transfer.test_clock.advance.$post(args, options))
    },
  })
}

export function usePostSandboxTransferTestClockAdvance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sandbox.transfer.test_clock.advance.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sandbox.transfer.test_clock.advance.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxTransferTestClockAdvanceMutationOptions<
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

export function getPostSandboxTransferTestClockCreateMutationKey() {
  return ['sandbox', '/sandbox/transfer/test_clock/create', 'POST'] as const
}

export function getPostSandboxTransferTestClockCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.transfer.test_clock.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.transfer.test_clock.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxTransferTestClockCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.sandbox.transfer.test_clock.create.$post>,
    ) {
      return parseResponse(client.sandbox.transfer.test_clock.create.$post(args, options))
    },
  })
}

export function usePostSandboxTransferTestClockCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sandbox.transfer.test_clock.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sandbox.transfer.test_clock.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxTransferTestClockCreateMutationOptions<
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

export function getPostSandboxTransferTestClockGetMutationKey() {
  return ['sandbox', '/sandbox/transfer/test_clock/get', 'POST'] as const
}

export function getPostSandboxTransferTestClockGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.transfer.test_clock.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.transfer.test_clock.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxTransferTestClockGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.transfer.test_clock.get.$post>) {
      return parseResponse(client.sandbox.transfer.test_clock.get.$post(args, options))
    },
  })
}

export function usePostSandboxTransferTestClockGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sandbox.transfer.test_clock.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sandbox.transfer.test_clock.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxTransferTestClockGetMutationOptions<
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

export function getPostSandboxTransferTestClockListMutationKey() {
  return ['sandbox', '/sandbox/transfer/test_clock/list', 'POST'] as const
}

export function getPostSandboxTransferTestClockListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.transfer.test_clock.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.transfer.test_clock.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxTransferTestClockListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.transfer.test_clock.list.$post>) {
      return parseResponse(client.sandbox.transfer.test_clock.list.$post(args, options))
    },
  })
}

export function usePostSandboxTransferTestClockList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sandbox.transfer.test_clock.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sandbox.transfer.test_clock.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxTransferTestClockListMutationOptions<
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

export function getPostSignalDecisionReportMutationKey() {
  return ['signal', '/signal/decision/report', 'POST'] as const
}

export function getPostSignalDecisionReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.signal.decision.report.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.signal.decision.report.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSignalDecisionReportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.signal.decision.report.$post>) {
      return parseResponse(client.signal.decision.report.$post(args, options))
    },
  })
}

export function usePostSignalDecisionReport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.signal.decision.report.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.signal.decision.report.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSignalDecisionReportMutationOptions<TError, TOnMutateResult>(
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

export function getPostSignalEvaluateMutationKey() {
  return ['signal', '/signal/evaluate', 'POST'] as const
}

export function getPostSignalEvaluateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signal.evaluate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.signal.evaluate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSignalEvaluateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.signal.evaluate.$post>) {
      return parseResponse(client.signal.evaluate.$post(args, options))
    },
  })
}

export function usePostSignalEvaluate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signal.evaluate.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.signal.evaluate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSignalEvaluateMutationOptions<TError, TOnMutateResult>(
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

export function getPostSignalPrepareMutationKey() {
  return ['signal', '/signal/prepare', 'POST'] as const
}

export function getPostSignalPrepareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signal.prepare.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.signal.prepare.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSignalPrepareMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.signal.prepare.$post>) {
      return parseResponse(client.signal.prepare.$post(args, options))
    },
  })
}

export function usePostSignalPrepare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signal.prepare.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.signal.prepare.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSignalPrepareMutationOptions<TError, TOnMutateResult>(
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

export function getPostSignalReturnReportMutationKey() {
  return ['signal', '/signal/return/report', 'POST'] as const
}

export function getPostSignalReturnReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.signal.return.report.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.signal.return.report.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSignalReturnReportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.signal.return.report.$post>) {
      return parseResponse(client.signal.return.report.$post(args, options))
    },
  })
}

export function usePostSignalReturnReport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.signal.return.report.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.signal.return.report.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSignalReturnReportMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransactionsEnrichMutationKey() {
  return ['transactions', '/transactions/enrich', 'POST'] as const
}

export function getPostTransactionsEnrichMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.enrich.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transactions.enrich.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsEnrichMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transactions.enrich.$post>) {
      return parseResponse(client.transactions.enrich.$post(args, options))
    },
  })
}

export function usePostTransactionsEnrich<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transactions.enrich.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transactions.enrich.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionsEnrichMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransactionsGetMutationKey() {
  return ['transactions', '/transactions/get', 'POST'] as const
}

export function getPostTransactionsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transactions.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transactions.get.$post>) {
      return parseResponse(client.transactions.get.$post(args, options))
    },
  })
}

export function usePostTransactionsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transactions.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transactions.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionsGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransactionsRecurringGetMutationKey() {
  return ['transactions', '/transactions/recurring/get', 'POST'] as const
}

export function getPostTransactionsRecurringGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transactions.recurring.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transactions.recurring.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsRecurringGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transactions.recurring.get.$post>) {
      return parseResponse(client.transactions.recurring.get.$post(args, options))
    },
  })
}

export function usePostTransactionsRecurringGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.transactions.recurring.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.transactions.recurring.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionsRecurringGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransactionsRefreshMutationKey() {
  return ['transactions', '/transactions/refresh', 'POST'] as const
}

export function getPostTransactionsRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transactions.refresh.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transactions.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transactions.refresh.$post>) {
      return parseResponse(client.transactions.refresh.$post(args, options))
    },
  })
}

export function usePostTransactionsRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transactions.refresh.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transactions.refresh.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionsRefreshMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransactionsSyncMutationKey() {
  return ['transactions', '/transactions/sync', 'POST'] as const
}

export function getPostTransactionsSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.sync.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transactions.sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsSyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transactions.sync.$post>) {
      return parseResponse(client.transactions.sync.$post(args, options))
    },
  })
}

export function usePostTransactionsSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transactions.sync.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transactions.sync.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionsSyncMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferAuthorizationCreateMutationKey() {
  return ['transfer', '/transfer/authorization/create', 'POST'] as const
}

export function getPostTransferAuthorizationCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.authorization.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.authorization.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferAuthorizationCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.authorization.create.$post>) {
      return parseResponse(client.transfer.authorization.create.$post(args, options))
    },
  })
}

export function usePostTransferAuthorizationCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.transfer.authorization.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.authorization.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferAuthorizationCreateMutationOptions<
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

export function getPostTransferCancelMutationKey() {
  return ['transfer', '/transfer/cancel', 'POST'] as const
}

export function getPostTransferCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.cancel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transfer.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.cancel.$post>) {
      return parseResponse(client.transfer.cancel.$post(args, options))
    },
  })
}

export function usePostTransferCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.cancel.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.transfer.cancel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferCapabilitiesGetMutationKey() {
  return ['transfer', '/transfer/capabilities/get', 'POST'] as const
}

export function getPostTransferCapabilitiesGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.capabilities.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.capabilities.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferCapabilitiesGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.capabilities.get.$post>) {
      return parseResponse(client.transfer.capabilities.get.$post(args, options))
    },
  })
}

export function usePostTransferCapabilitiesGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transfer.capabilities.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.capabilities.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferCapabilitiesGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferCreateMutationKey() {
  return ['transfer', '/transfer/create', 'POST'] as const
}

export function getPostTransferCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transfer.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.create.$post>) {
      return parseResponse(client.transfer.create.$post(args, options))
    },
  })
}

export function usePostTransferCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.create.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.transfer.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferEventListMutationKey() {
  return ['transfer', '/transfer/event/list', 'POST'] as const
}

export function getPostTransferEventListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.event.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transfer.event.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferEventListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.event.list.$post>) {
      return parseResponse(client.transfer.event.list.$post(args, options))
    },
  })
}

export function usePostTransferEventList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transfer.event.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.event.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferEventListMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferEventSyncMutationKey() {
  return ['transfer', '/transfer/event/sync', 'POST'] as const
}

export function getPostTransferEventSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.event.sync.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transfer.event.sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferEventSyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.event.sync.$post>) {
      return parseResponse(client.transfer.event.sync.$post(args, options))
    },
  })
}

export function usePostTransferEventSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transfer.event.sync.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.event.sync.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferEventSyncMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferGetMutationKey() {
  return ['transfer', '/transfer/get', 'POST'] as const
}

export function getPostTransferGetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transfer.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.get.$post>) {
      return parseResponse(client.transfer.get.$post(args, options))
    },
  })
}

export function usePostTransferGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.transfer.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferGetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTransferIntentCreateMutationKey() {
  return ['transfer', '/transfer/intent/create', 'POST'] as const
}

export function getPostTransferIntentCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.intent.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.intent.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferIntentCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.intent.create.$post>) {
      return parseResponse(client.transfer.intent.create.$post(args, options))
    },
  })
}

export function usePostTransferIntentCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transfer.intent.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.intent.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferIntentCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferIntentGetMutationKey() {
  return ['transfer', '/transfer/intent/get', 'POST'] as const
}

export function getPostTransferIntentGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.intent.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transfer.intent.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferIntentGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.intent.get.$post>) {
      return parseResponse(client.transfer.intent.get.$post(args, options))
    },
  })
}

export function usePostTransferIntentGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transfer.intent.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.intent.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferIntentGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferListMutationKey() {
  return ['transfer', '/transfer/list', 'POST'] as const
}

export function getPostTransferListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transfer.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.list.$post>) {
      return parseResponse(client.transfer.list.$post(args, options))
    },
  })
}

export function usePostTransferList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.transfer.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferListMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferMigrateAccountMutationKey() {
  return ['transfer', '/transfer/migrate_account', 'POST'] as const
}

export function getPostTransferMigrateAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.migrate_account.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.migrate_account.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferMigrateAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.migrate_account.$post>) {
      return parseResponse(client.transfer.migrate_account.$post(args, options))
    },
  })
}

export function usePostTransferMigrateAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transfer.migrate_account.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.migrate_account.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferMigrateAccountMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferOriginatorCreateMutationKey() {
  return ['transfer', '/transfer/originator/create', 'POST'] as const
}

export function getPostTransferOriginatorCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.originator.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.originator.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferOriginatorCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.originator.create.$post>) {
      return parseResponse(client.transfer.originator.create.$post(args, options))
    },
  })
}

export function usePostTransferOriginatorCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.transfer.originator.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.originator.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferOriginatorCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferOriginatorGetMutationKey() {
  return ['transfer', '/transfer/originator/get', 'POST'] as const
}

export function getPostTransferOriginatorGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.originator.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.originator.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferOriginatorGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.originator.get.$post>) {
      return parseResponse(client.transfer.originator.get.$post(args, options))
    },
  })
}

export function usePostTransferOriginatorGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transfer.originator.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.originator.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferOriginatorGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferOriginatorListMutationKey() {
  return ['transfer', '/transfer/originator/list', 'POST'] as const
}

export function getPostTransferOriginatorListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.originator.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.originator.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferOriginatorListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.originator.list.$post>) {
      return parseResponse(client.transfer.originator.list.$post(args, options))
    },
  })
}

export function usePostTransferOriginatorList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transfer.originator.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.originator.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferOriginatorListMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferQuestionnaireCreateMutationKey() {
  return ['transfer', '/transfer/questionnaire/create', 'POST'] as const
}

export function getPostTransferQuestionnaireCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.questionnaire.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.questionnaire.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferQuestionnaireCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.questionnaire.create.$post>) {
      return parseResponse(client.transfer.questionnaire.create.$post(args, options))
    },
  })
}

export function usePostTransferQuestionnaireCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.transfer.questionnaire.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.questionnaire.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferQuestionnaireCreateMutationOptions<
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

export function getPostTransferRecurringCancelMutationKey() {
  return ['transfer', '/transfer/recurring/cancel', 'POST'] as const
}

export function getPostTransferRecurringCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.recurring.cancel.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.recurring.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferRecurringCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.recurring.cancel.$post>) {
      return parseResponse(client.transfer.recurring.cancel.$post(args, options))
    },
  })
}

export function usePostTransferRecurringCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transfer.recurring.cancel.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.recurring.cancel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferRecurringCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferRecurringCreateMutationKey() {
  return ['transfer', '/transfer/recurring/create', 'POST'] as const
}

export function getPostTransferRecurringCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.recurring.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.recurring.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferRecurringCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.recurring.create.$post>) {
      return parseResponse(client.transfer.recurring.create.$post(args, options))
    },
  })
}

export function usePostTransferRecurringCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transfer.recurring.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.recurring.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferRecurringCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferRecurringGetMutationKey() {
  return ['transfer', '/transfer/recurring/get', 'POST'] as const
}

export function getPostTransferRecurringGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.recurring.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.recurring.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferRecurringGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.recurring.get.$post>) {
      return parseResponse(client.transfer.recurring.get.$post(args, options))
    },
  })
}

export function usePostTransferRecurringGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transfer.recurring.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.recurring.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferRecurringGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferRecurringListMutationKey() {
  return ['transfer', '/transfer/recurring/list', 'POST'] as const
}

export function getPostTransferRecurringListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.recurring.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.recurring.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferRecurringListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.recurring.list.$post>) {
      return parseResponse(client.transfer.recurring.list.$post(args, options))
    },
  })
}

export function usePostTransferRecurringList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transfer.recurring.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.recurring.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferRecurringListMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferRefundCancelMutationKey() {
  return ['transfer', '/transfer/refund/cancel', 'POST'] as const
}

export function getPostTransferRefundCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.refund.cancel.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.refund.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferRefundCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.refund.cancel.$post>) {
      return parseResponse(client.transfer.refund.cancel.$post(args, options))
    },
  })
}

export function usePostTransferRefundCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transfer.refund.cancel.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.refund.cancel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferRefundCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferRefundCreateMutationKey() {
  return ['transfer', '/transfer/refund/create', 'POST'] as const
}

export function getPostTransferRefundCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.refund.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.refund.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferRefundCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.refund.create.$post>) {
      return parseResponse(client.transfer.refund.create.$post(args, options))
    },
  })
}

export function usePostTransferRefundCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transfer.refund.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.refund.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferRefundCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferRefundGetMutationKey() {
  return ['transfer', '/transfer/refund/get', 'POST'] as const
}

export function getPostTransferRefundGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.refund.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transfer.refund.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferRefundGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.refund.get.$post>) {
      return parseResponse(client.transfer.refund.get.$post(args, options))
    },
  })
}

export function usePostTransferRefundGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transfer.refund.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.refund.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferRefundGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferRepaymentListMutationKey() {
  return ['transfer', '/transfer/repayment/list', 'POST'] as const
}

export function getPostTransferRepaymentListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.repayment.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.repayment.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferRepaymentListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.repayment.list.$post>) {
      return parseResponse(client.transfer.repayment.list.$post(args, options))
    },
  })
}

export function usePostTransferRepaymentList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transfer.repayment.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.repayment.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferRepaymentListMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferRepaymentReturnListMutationKey() {
  return ['transfer', '/transfer/repayment/return/list', 'POST'] as const
}

export function getPostTransferRepaymentReturnListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transfer.repayment.return.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.repayment.return.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferRepaymentReturnListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.repayment.return.list.$post>) {
      return parseResponse(client.transfer.repayment.return.list.$post(args, options))
    },
  })
}

export function usePostTransferRepaymentReturnList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.transfer.repayment.return.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.repayment.return.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferRepaymentReturnListMutationOptions<
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

export function getPostTransferSweepGetMutationKey() {
  return ['transfer', '/transfer/sweep/get', 'POST'] as const
}

export function getPostTransferSweepGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.sweep.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transfer.sweep.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferSweepGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.sweep.get.$post>) {
      return parseResponse(client.transfer.sweep.get.$post(args, options))
    },
  })
}

export function usePostTransferSweepGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transfer.sweep.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.sweep.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferSweepGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransferSweepListMutationKey() {
  return ['transfer', '/transfer/sweep/list', 'POST'] as const
}

export function getPostTransferSweepListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.sweep.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transfer.sweep.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferSweepListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.sweep.list.$post>) {
      return parseResponse(client.transfer.sweep.list.$post(args, options))
    },
  })
}

export function usePostTransferSweepList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transfer.sweep.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transfer.sweep.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferSweepListMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserCreateMutationKey() {
  return ['user', '/user/create', 'POST'] as const
}

export function getPostUserCreateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.create.$post>>>>>,
    TError,
    InferRequestType<typeof client.user.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.create.$post>) {
      return parseResponse(client.user.create.$post(args, options))
    },
  })
}

export function usePostUserCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.create.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.user.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserCreateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostWalletCreateMutationKey() {
  return ['wallet', '/wallet/create', 'POST'] as const
}

export function getPostWalletCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.wallet.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wallet.create.$post>) {
      return parseResponse(client.wallet.create.$post(args, options))
    },
  })
}

export function usePostWalletCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.create.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.wallet.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostWalletGetMutationKey() {
  return ['wallet', '/wallet/get', 'POST'] as const
}

export function getPostWalletGetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.get.$post>>>>>,
    TError,
    InferRequestType<typeof client.wallet.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wallet.get.$post>) {
      return parseResponse(client.wallet.get.$post(args, options))
    },
  })
}

export function usePostWalletGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.wallet.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletGetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostWalletListMutationKey() {
  return ['wallet', '/wallet/list', 'POST'] as const
}

export function getPostWalletListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.list.$post>>>>>,
    TError,
    InferRequestType<typeof client.wallet.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wallet.list.$post>) {
      return parseResponse(client.wallet.list.$post(args, options))
    },
  })
}

export function usePostWalletList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.wallet.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletListMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostWalletTransactionExecuteMutationKey() {
  return ['wallet', '/wallet/transaction/execute', 'POST'] as const
}

export function getPostWalletTransactionExecuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wallet.transaction.execute.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.wallet.transaction.execute.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletTransactionExecuteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wallet.transaction.execute.$post>) {
      return parseResponse(client.wallet.transaction.execute.$post(args, options))
    },
  })
}

export function usePostWalletTransactionExecute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.wallet.transaction.execute.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.wallet.transaction.execute.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletTransactionExecuteMutationOptions<TError, TOnMutateResult>(
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

export function getPostWalletTransactionGetMutationKey() {
  return ['wallet', '/wallet/transaction/get', 'POST'] as const
}

export function getPostWalletTransactionGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wallet.transaction.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.wallet.transaction.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletTransactionGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wallet.transaction.get.$post>) {
      return parseResponse(client.wallet.transaction.get.$post(args, options))
    },
  })
}

export function usePostWalletTransactionGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wallet.transaction.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.wallet.transaction.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletTransactionGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostWalletTransactionListMutationKey() {
  return ['wallet', '/wallet/transaction/list', 'POST'] as const
}

export function getPostWalletTransactionListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wallet.transaction.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.wallet.transaction.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletTransactionListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wallet.transaction.list.$post>) {
      return parseResponse(client.wallet.transaction.list.$post(args, options))
    },
  })
}

export function usePostWalletTransactionList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wallet.transaction.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.wallet.transaction.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletTransactionListMutationOptions<TError, TOnMutateResult>(
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

export function getPostWatchlistScreeningEntityCreateMutationKey() {
  return ['watchlist_screening', '/watchlist_screening/entity/create', 'POST'] as const
}

export function getPostWatchlistScreeningEntityCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.entity.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.watchlist_screening.entity.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatchlistScreeningEntityCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.watchlist_screening.entity.create.$post>,
    ) {
      return parseResponse(client.watchlist_screening.entity.create.$post(args, options))
    },
  })
}

export function usePostWatchlistScreeningEntityCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.watchlist_screening.entity.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.watchlist_screening.entity.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatchlistScreeningEntityCreateMutationOptions<
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

export function getPostWatchlistScreeningEntityGetMutationKey() {
  return ['watchlist_screening', '/watchlist_screening/entity/get', 'POST'] as const
}

export function getPostWatchlistScreeningEntityGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.entity.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.watchlist_screening.entity.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatchlistScreeningEntityGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.watchlist_screening.entity.get.$post>) {
      return parseResponse(client.watchlist_screening.entity.get.$post(args, options))
    },
  })
}

export function usePostWatchlistScreeningEntityGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.watchlist_screening.entity.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.watchlist_screening.entity.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatchlistScreeningEntityGetMutationOptions<
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

export function getPostWatchlistScreeningEntityHistoryListMutationKey() {
  return ['watchlist_screening', '/watchlist_screening/entity/history/list', 'POST'] as const
}

export function getPostWatchlistScreeningEntityHistoryListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.entity.history.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.watchlist_screening.entity.history.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatchlistScreeningEntityHistoryListMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.watchlist_screening.entity.history.list.$post>,
    ) {
      return parseResponse(client.watchlist_screening.entity.history.list.$post(args, options))
    },
  })
}

export function usePostWatchlistScreeningEntityHistoryList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.watchlist_screening.entity.history.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.watchlist_screening.entity.history.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatchlistScreeningEntityHistoryListMutationOptions<
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

export function getPostWatchlistScreeningEntityHitListMutationKey() {
  return ['watchlist_screening', '/watchlist_screening/entity/hit/list', 'POST'] as const
}

export function getPostWatchlistScreeningEntityHitListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.entity.hit.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.watchlist_screening.entity.hit.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatchlistScreeningEntityHitListMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.watchlist_screening.entity.hit.list.$post>,
    ) {
      return parseResponse(client.watchlist_screening.entity.hit.list.$post(args, options))
    },
  })
}

export function usePostWatchlistScreeningEntityHitList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.watchlist_screening.entity.hit.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.watchlist_screening.entity.hit.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatchlistScreeningEntityHitListMutationOptions<
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

export function getPostWatchlistScreeningEntityListMutationKey() {
  return ['watchlist_screening', '/watchlist_screening/entity/list', 'POST'] as const
}

export function getPostWatchlistScreeningEntityListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.entity.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.watchlist_screening.entity.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatchlistScreeningEntityListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.watchlist_screening.entity.list.$post>) {
      return parseResponse(client.watchlist_screening.entity.list.$post(args, options))
    },
  })
}

export function usePostWatchlistScreeningEntityList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.watchlist_screening.entity.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.watchlist_screening.entity.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatchlistScreeningEntityListMutationOptions<
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

export function getPostWatchlistScreeningEntityProgramGetMutationKey() {
  return ['watchlist_screening', '/watchlist_screening/entity/program/get', 'POST'] as const
}

export function getPostWatchlistScreeningEntityProgramGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.entity.program.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.watchlist_screening.entity.program.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatchlistScreeningEntityProgramGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.watchlist_screening.entity.program.get.$post>,
    ) {
      return parseResponse(client.watchlist_screening.entity.program.get.$post(args, options))
    },
  })
}

export function usePostWatchlistScreeningEntityProgramGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.watchlist_screening.entity.program.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.watchlist_screening.entity.program.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatchlistScreeningEntityProgramGetMutationOptions<
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

export function getPostWatchlistScreeningEntityProgramListMutationKey() {
  return ['watchlist_screening', '/watchlist_screening/entity/program/list', 'POST'] as const
}

export function getPostWatchlistScreeningEntityProgramListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.entity.program.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.watchlist_screening.entity.program.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatchlistScreeningEntityProgramListMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.watchlist_screening.entity.program.list.$post>,
    ) {
      return parseResponse(client.watchlist_screening.entity.program.list.$post(args, options))
    },
  })
}

export function usePostWatchlistScreeningEntityProgramList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.watchlist_screening.entity.program.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.watchlist_screening.entity.program.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatchlistScreeningEntityProgramListMutationOptions<
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

export function getPostWatchlistScreeningEntityReviewCreateMutationKey() {
  return ['watchlist_screening', '/watchlist_screening/entity/review/create', 'POST'] as const
}

export function getPostWatchlistScreeningEntityReviewCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.entity.review.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.watchlist_screening.entity.review.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatchlistScreeningEntityReviewCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.watchlist_screening.entity.review.create.$post>,
    ) {
      return parseResponse(client.watchlist_screening.entity.review.create.$post(args, options))
    },
  })
}

export function usePostWatchlistScreeningEntityReviewCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.watchlist_screening.entity.review.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.watchlist_screening.entity.review.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatchlistScreeningEntityReviewCreateMutationOptions<
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

export function getPostWatchlistScreeningEntityReviewListMutationKey() {
  return ['watchlist_screening', '/watchlist_screening/entity/review/list', 'POST'] as const
}

export function getPostWatchlistScreeningEntityReviewListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.entity.review.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.watchlist_screening.entity.review.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatchlistScreeningEntityReviewListMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.watchlist_screening.entity.review.list.$post>,
    ) {
      return parseResponse(client.watchlist_screening.entity.review.list.$post(args, options))
    },
  })
}

export function usePostWatchlistScreeningEntityReviewList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.watchlist_screening.entity.review.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.watchlist_screening.entity.review.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatchlistScreeningEntityReviewListMutationOptions<
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

export function getPostWatchlistScreeningEntityUpdateMutationKey() {
  return ['watchlist_screening', '/watchlist_screening/entity/update', 'POST'] as const
}

export function getPostWatchlistScreeningEntityUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.entity.update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.watchlist_screening.entity.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatchlistScreeningEntityUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.watchlist_screening.entity.update.$post>,
    ) {
      return parseResponse(client.watchlist_screening.entity.update.$post(args, options))
    },
  })
}

export function usePostWatchlistScreeningEntityUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.watchlist_screening.entity.update.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.watchlist_screening.entity.update.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatchlistScreeningEntityUpdateMutationOptions<
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

export function getPostWatchlistScreeningIndividualCreateMutationKey() {
  return ['watchlist_screening', '/watchlist_screening/individual/create', 'POST'] as const
}

export function getPostWatchlistScreeningIndividualCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.individual.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.watchlist_screening.individual.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatchlistScreeningIndividualCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.watchlist_screening.individual.create.$post>,
    ) {
      return parseResponse(client.watchlist_screening.individual.create.$post(args, options))
    },
  })
}

export function usePostWatchlistScreeningIndividualCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.watchlist_screening.individual.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.watchlist_screening.individual.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatchlistScreeningIndividualCreateMutationOptions<
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

export function getPostWatchlistScreeningIndividualGetMutationKey() {
  return ['watchlist_screening', '/watchlist_screening/individual/get', 'POST'] as const
}

export function getPostWatchlistScreeningIndividualGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.individual.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.watchlist_screening.individual.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatchlistScreeningIndividualGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.watchlist_screening.individual.get.$post>,
    ) {
      return parseResponse(client.watchlist_screening.individual.get.$post(args, options))
    },
  })
}

export function usePostWatchlistScreeningIndividualGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.watchlist_screening.individual.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.watchlist_screening.individual.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatchlistScreeningIndividualGetMutationOptions<
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

export function getPostWatchlistScreeningIndividualHistoryListMutationKey() {
  return ['watchlist_screening', '/watchlist_screening/individual/history/list', 'POST'] as const
}

export function getPostWatchlistScreeningIndividualHistoryListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.individual.history.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.watchlist_screening.individual.history.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatchlistScreeningIndividualHistoryListMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.watchlist_screening.individual.history.list.$post>,
    ) {
      return parseResponse(client.watchlist_screening.individual.history.list.$post(args, options))
    },
  })
}

export function usePostWatchlistScreeningIndividualHistoryList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.watchlist_screening.individual.history.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.watchlist_screening.individual.history.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatchlistScreeningIndividualHistoryListMutationOptions<
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

export function getPostWatchlistScreeningIndividualHitListMutationKey() {
  return ['watchlist_screening', '/watchlist_screening/individual/hit/list', 'POST'] as const
}

export function getPostWatchlistScreeningIndividualHitListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.individual.hit.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.watchlist_screening.individual.hit.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatchlistScreeningIndividualHitListMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.watchlist_screening.individual.hit.list.$post>,
    ) {
      return parseResponse(client.watchlist_screening.individual.hit.list.$post(args, options))
    },
  })
}

export function usePostWatchlistScreeningIndividualHitList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.watchlist_screening.individual.hit.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.watchlist_screening.individual.hit.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatchlistScreeningIndividualHitListMutationOptions<
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

export function getPostWatchlistScreeningIndividualListMutationKey() {
  return ['watchlist_screening', '/watchlist_screening/individual/list', 'POST'] as const
}

export function getPostWatchlistScreeningIndividualListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.individual.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.watchlist_screening.individual.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatchlistScreeningIndividualListMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.watchlist_screening.individual.list.$post>,
    ) {
      return parseResponse(client.watchlist_screening.individual.list.$post(args, options))
    },
  })
}

export function usePostWatchlistScreeningIndividualList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.watchlist_screening.individual.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.watchlist_screening.individual.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatchlistScreeningIndividualListMutationOptions<
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

export function getPostWatchlistScreeningIndividualProgramGetMutationKey() {
  return ['watchlist_screening', '/watchlist_screening/individual/program/get', 'POST'] as const
}

export function getPostWatchlistScreeningIndividualProgramGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.individual.program.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.watchlist_screening.individual.program.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatchlistScreeningIndividualProgramGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.watchlist_screening.individual.program.get.$post>,
    ) {
      return parseResponse(client.watchlist_screening.individual.program.get.$post(args, options))
    },
  })
}

export function usePostWatchlistScreeningIndividualProgramGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.watchlist_screening.individual.program.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.watchlist_screening.individual.program.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatchlistScreeningIndividualProgramGetMutationOptions<
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

export function getPostWatchlistScreeningIndividualProgramListMutationKey() {
  return ['watchlist_screening', '/watchlist_screening/individual/program/list', 'POST'] as const
}

export function getPostWatchlistScreeningIndividualProgramListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.individual.program.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.watchlist_screening.individual.program.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatchlistScreeningIndividualProgramListMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.watchlist_screening.individual.program.list.$post>,
    ) {
      return parseResponse(client.watchlist_screening.individual.program.list.$post(args, options))
    },
  })
}

export function usePostWatchlistScreeningIndividualProgramList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.watchlist_screening.individual.program.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.watchlist_screening.individual.program.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatchlistScreeningIndividualProgramListMutationOptions<
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

export function getPostWatchlistScreeningIndividualReviewCreateMutationKey() {
  return ['watchlist_screening', '/watchlist_screening/individual/review/create', 'POST'] as const
}

export function getPostWatchlistScreeningIndividualReviewCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.individual.review.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.watchlist_screening.individual.review.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatchlistScreeningIndividualReviewCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.watchlist_screening.individual.review.create.$post>,
    ) {
      return parseResponse(client.watchlist_screening.individual.review.create.$post(args, options))
    },
  })
}

export function usePostWatchlistScreeningIndividualReviewCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.watchlist_screening.individual.review.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.watchlist_screening.individual.review.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatchlistScreeningIndividualReviewCreateMutationOptions<
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

export function getPostWatchlistScreeningIndividualReviewListMutationKey() {
  return ['watchlist_screening', '/watchlist_screening/individual/review/list', 'POST'] as const
}

export function getPostWatchlistScreeningIndividualReviewListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.individual.review.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.watchlist_screening.individual.review.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatchlistScreeningIndividualReviewListMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.watchlist_screening.individual.review.list.$post>,
    ) {
      return parseResponse(client.watchlist_screening.individual.review.list.$post(args, options))
    },
  })
}

export function usePostWatchlistScreeningIndividualReviewList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.watchlist_screening.individual.review.list.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.watchlist_screening.individual.review.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatchlistScreeningIndividualReviewListMutationOptions<
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

export function getPostWatchlistScreeningIndividualUpdateMutationKey() {
  return ['watchlist_screening', '/watchlist_screening/individual/update', 'POST'] as const
}

export function getPostWatchlistScreeningIndividualUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.individual.update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.watchlist_screening.individual.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatchlistScreeningIndividualUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.watchlist_screening.individual.update.$post>,
    ) {
      return parseResponse(client.watchlist_screening.individual.update.$post(args, options))
    },
  })
}

export function usePostWatchlistScreeningIndividualUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.watchlist_screening.individual.update.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.watchlist_screening.individual.update.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatchlistScreeningIndividualUpdateMutationOptions<
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

export function getPostWebhookVerificationKeyGetMutationKey() {
  return ['webhook_verification_key', '/webhook_verification_key/get', 'POST'] as const
}

export function getPostWebhookVerificationKeyGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.webhook_verification_key.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.webhook_verification_key.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhookVerificationKeyGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhook_verification_key.get.$post>) {
      return parseResponse(client.webhook_verification_key.get.$post(args, options))
    },
  })
}

export function usePostWebhookVerificationKeyGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.webhook_verification_key.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.webhook_verification_key.get.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhookVerificationKeyGetMutationOptions<TError, TOnMutateResult>(
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
