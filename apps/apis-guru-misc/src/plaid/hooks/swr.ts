import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostAccountsBalanceGetKey() {
  return ['accounts', '/accounts/balance/get', 'POST'] as const
}

export function usePostAccountsBalanceGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accounts.balance.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.accounts.balance.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsBalanceGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.accounts.balance.get.$post> },
      ) => parseResponse(client.accounts.balance.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsGetKey() {
  return ['accounts', '/accounts/get', 'POST'] as const
}

export function usePostAccountsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.accounts.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.accounts.get.$post> }) =>
        parseResponse(client.accounts.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApplicationGetKey() {
  return ['application', '/application/get', 'POST'] as const
}

export function usePostApplicationGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.application.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.application.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApplicationGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.application.get.$post> }) =>
        parseResponse(client.application.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetReportAuditCopyCreateKey() {
  return ['asset_report', '/asset_report/audit_copy/create', 'POST'] as const
}

export function usePostAssetReportAuditCopyCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.asset_report.audit_copy.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.asset_report.audit_copy.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetReportAuditCopyCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.asset_report.audit_copy.create.$post> },
      ) => parseResponse(client.asset_report.audit_copy.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetReportAuditCopyGetKey() {
  return ['asset_report', '/asset_report/audit_copy/get', 'POST'] as const
}

export function usePostAssetReportAuditCopyGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.audit_copy.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.asset_report.audit_copy.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetReportAuditCopyGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.asset_report.audit_copy.get.$post> },
      ) => parseResponse(client.asset_report.audit_copy.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetReportAuditCopyRemoveKey() {
  return ['asset_report', '/asset_report/audit_copy/remove', 'POST'] as const
}

export function usePostAssetReportAuditCopyRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.asset_report.audit_copy.remove.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.asset_report.audit_copy.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetReportAuditCopyRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.asset_report.audit_copy.remove.$post> },
      ) => parseResponse(client.asset_report.audit_copy.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetReportCreateKey() {
  return ['asset_report', '/asset_report/create', 'POST'] as const
}

export function usePostAssetReportCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.asset_report.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetReportCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.asset_report.create.$post> }) =>
        parseResponse(client.asset_report.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetReportFilterKey() {
  return ['asset_report', '/asset_report/filter', 'POST'] as const
}

export function usePostAssetReportFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.filter.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.asset_report.filter.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetReportFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.asset_report.filter.$post> }) =>
        parseResponse(client.asset_report.filter.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetReportGetKey() {
  return ['asset_report', '/asset_report/get', 'POST'] as const
}

export function usePostAssetReportGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.asset_report.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetReportGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.asset_report.get.$post> }) =>
        parseResponse(client.asset_report.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetReportPdfGetKey() {
  return ['asset_report', '/asset_report/pdf/get', 'POST'] as const
}

export function usePostAssetReportPdfGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.pdf.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.asset_report.pdf.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetReportPdfGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.asset_report.pdf.get.$post> },
      ) => parseResponse(client.asset_report.pdf.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetReportRefreshKey() {
  return ['asset_report', '/asset_report/refresh', 'POST'] as const
}

export function usePostAssetReportRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.refresh.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.asset_report.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetReportRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.asset_report.refresh.$post> },
      ) => parseResponse(client.asset_report.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetReportRemoveKey() {
  return ['asset_report', '/asset_report/remove', 'POST'] as const
}

export function usePostAssetReportRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.remove.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.asset_report.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetReportRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.asset_report.remove.$post> }) =>
        parseResponse(client.asset_report.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthGetKey() {
  return ['auth', '/auth/get', 'POST'] as const
}

export function usePostAuthGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.get.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.auth.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.get.$post> }) =>
        parseResponse(client.auth.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBankTransferBalanceGetKey() {
  return ['bank_transfer', '/bank_transfer/balance/get', 'POST'] as const
}

export function usePostBankTransferBalanceGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.balance.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.bank_transfer.balance.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankTransferBalanceGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.bank_transfer.balance.get.$post> },
      ) => parseResponse(client.bank_transfer.balance.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBankTransferCancelKey() {
  return ['bank_transfer', '/bank_transfer/cancel', 'POST'] as const
}

export function usePostBankTransferCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.cancel.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.bank_transfer.cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankTransferCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.bank_transfer.cancel.$post> },
      ) => parseResponse(client.bank_transfer.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBankTransferCreateKey() {
  return ['bank_transfer', '/bank_transfer/create', 'POST'] as const
}

export function usePostBankTransferCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.bank_transfer.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankTransferCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.bank_transfer.create.$post> },
      ) => parseResponse(client.bank_transfer.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBankTransferEventListKey() {
  return ['bank_transfer', '/bank_transfer/event/list', 'POST'] as const
}

export function usePostBankTransferEventList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.event.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.bank_transfer.event.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankTransferEventListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.bank_transfer.event.list.$post> },
      ) => parseResponse(client.bank_transfer.event.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBankTransferEventSyncKey() {
  return ['bank_transfer', '/bank_transfer/event/sync', 'POST'] as const
}

export function usePostBankTransferEventSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.event.sync.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.bank_transfer.event.sync.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankTransferEventSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.bank_transfer.event.sync.$post> },
      ) => parseResponse(client.bank_transfer.event.sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBankTransferGetKey() {
  return ['bank_transfer', '/bank_transfer/get', 'POST'] as const
}

export function usePostBankTransferGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.bank_transfer.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankTransferGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bank_transfer.get.$post> }) =>
        parseResponse(client.bank_transfer.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBankTransferListKey() {
  return ['bank_transfer', '/bank_transfer/list', 'POST'] as const
}

export function usePostBankTransferList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.bank_transfer.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankTransferListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bank_transfer.list.$post> }) =>
        parseResponse(client.bank_transfer.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBankTransferMigrateAccountKey() {
  return ['bank_transfer', '/bank_transfer/migrate_account', 'POST'] as const
}

export function usePostBankTransferMigrateAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.migrate_account.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.bank_transfer.migrate_account.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankTransferMigrateAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.bank_transfer.migrate_account.$post> },
      ) => parseResponse(client.bank_transfer.migrate_account.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBankTransferSweepGetKey() {
  return ['bank_transfer', '/bank_transfer/sweep/get', 'POST'] as const
}

export function usePostBankTransferSweepGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.sweep.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.bank_transfer.sweep.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankTransferSweepGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.bank_transfer.sweep.get.$post> },
      ) => parseResponse(client.bank_transfer.sweep.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBankTransferSweepListKey() {
  return ['bank_transfer', '/bank_transfer/sweep/list', 'POST'] as const
}

export function usePostBankTransferSweepList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.sweep.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.bank_transfer.sweep.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankTransferSweepListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.bank_transfer.sweep.list.$post> },
      ) => parseResponse(client.bank_transfer.sweep.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBetaCreditV1BankEmploymentGetKey() {
  return ['beta', '/beta/credit/v1/bank_employment/get', 'POST'] as const
}

export function usePostBetaCreditV1BankEmploymentGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beta.credit.v1.bank_employment.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beta.credit.v1.bank_employment.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetaCreditV1BankEmploymentGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beta.credit.v1.bank_employment.get.$post> },
      ) => parseResponse(client.beta.credit.v1.bank_employment.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBetaTransactionsRulesV1CreateKey() {
  return ['beta', '/beta/transactions/rules/v1/create', 'POST'] as const
}

export function usePostBetaTransactionsRulesV1Create<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beta.transactions.rules.v1.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beta.transactions.rules.v1.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetaTransactionsRulesV1CreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beta.transactions.rules.v1.create.$post> },
      ) => parseResponse(client.beta.transactions.rules.v1.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBetaTransactionsRulesV1ListKey() {
  return ['beta', '/beta/transactions/rules/v1/list', 'POST'] as const
}

export function usePostBetaTransactionsRulesV1List<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beta.transactions.rules.v1.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beta.transactions.rules.v1.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetaTransactionsRulesV1ListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beta.transactions.rules.v1.list.$post> },
      ) => parseResponse(client.beta.transactions.rules.v1.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBetaTransactionsRulesV1RemoveKey() {
  return ['beta', '/beta/transactions/rules/v1/remove', 'POST'] as const
}

export function usePostBetaTransactionsRulesV1Remove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beta.transactions.rules.v1.remove.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beta.transactions.rules.v1.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetaTransactionsRulesV1RemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beta.transactions.rules.v1.remove.$post> },
      ) => parseResponse(client.beta.transactions.rules.v1.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBetaTransactionsV1EnhanceKey() {
  return ['beta', '/beta/transactions/v1/enhance', 'POST'] as const
}

export function usePostBetaTransactionsV1Enhance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beta.transactions.v1.enhance.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beta.transactions.v1.enhance.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetaTransactionsV1EnhanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beta.transactions.v1.enhance.$post> },
      ) => parseResponse(client.beta.transactions.v1.enhance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCategoriesGetKey() {
  return ['categories', '/categories/get', 'POST'] as const
}

export function usePostCategoriesGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.categories.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCategoriesGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.categories.get.$post> }) =>
        parseResponse(client.categories.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditAssetReportFreddieMacGetKey() {
  return ['credit', '/credit/asset_report/freddie_mac/get', 'POST'] as const
}

export function usePostCreditAssetReportFreddieMacGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit.asset_report.freddie_mac.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.asset_report.freddie_mac.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditAssetReportFreddieMacGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.credit.asset_report.freddie_mac.get.$post> },
      ) => parseResponse(client.credit.asset_report.freddie_mac.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditAuditCopyTokenCreateKey() {
  return ['credit', '/credit/audit_copy_token/create', 'POST'] as const
}

export function usePostCreditAuditCopyTokenCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit.audit_copy_token.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.audit_copy_token.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditAuditCopyTokenCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.credit.audit_copy_token.create.$post> },
      ) => parseResponse(client.credit.audit_copy_token.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditAuditCopyTokenRemoveKey() {
  return ['credit', '/credit/audit_copy_token/remove', 'POST'] as const
}

export function usePostCreditAuditCopyTokenRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit.audit_copy_token.remove.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.audit_copy_token.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditAuditCopyTokenRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.credit.audit_copy_token.remove.$post> },
      ) => parseResponse(client.credit.audit_copy_token.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditAuditCopyTokenUpdateKey() {
  return ['credit', '/credit/audit_copy_token/update', 'POST'] as const
}

export function usePostCreditAuditCopyTokenUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit.audit_copy_token.update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.audit_copy_token.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditAuditCopyTokenUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.credit.audit_copy_token.update.$post> },
      ) => parseResponse(client.credit.audit_copy_token.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditBankIncomeGetKey() {
  return ['credit', '/credit/bank_income/get', 'POST'] as const
}

export function usePostCreditBankIncomeGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credit.bank_income.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.bank_income.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditBankIncomeGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.credit.bank_income.get.$post> },
      ) => parseResponse(client.credit.bank_income.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditBankIncomePdfGetKey() {
  return ['credit', '/credit/bank_income/pdf/get', 'POST'] as const
}

export function usePostCreditBankIncomePdfGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credit.bank_income.pdf.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.bank_income.pdf.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditBankIncomePdfGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.credit.bank_income.pdf.get.$post> },
      ) => parseResponse(client.credit.bank_income.pdf.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditBankIncomeRefreshKey() {
  return ['credit', '/credit/bank_income/refresh', 'POST'] as const
}

export function usePostCreditBankIncomeRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credit.bank_income.refresh.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.bank_income.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditBankIncomeRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.credit.bank_income.refresh.$post> },
      ) => parseResponse(client.credit.bank_income.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditEmploymentGetKey() {
  return ['credit', '/credit/employment/get', 'POST'] as const
}

export function usePostCreditEmploymentGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credit.employment.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.employment.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditEmploymentGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.credit.employment.get.$post> },
      ) => parseResponse(client.credit.employment.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditFreddieMacReportsGetKey() {
  return ['credit', '/credit/freddie_mac/reports/get', 'POST'] as const
}

export function usePostCreditFreddieMacReportsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit.freddie_mac.reports.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.freddie_mac.reports.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditFreddieMacReportsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.credit.freddie_mac.reports.get.$post> },
      ) => parseResponse(client.credit.freddie_mac.reports.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditPayrollIncomeGetKey() {
  return ['credit', '/credit/payroll_income/get', 'POST'] as const
}

export function usePostCreditPayrollIncomeGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credit.payroll_income.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.payroll_income.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditPayrollIncomeGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.credit.payroll_income.get.$post> },
      ) => parseResponse(client.credit.payroll_income.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditPayrollIncomePrecheckKey() {
  return ['credit', '/credit/payroll_income/precheck', 'POST'] as const
}

export function usePostCreditPayrollIncomePrecheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit.payroll_income.precheck.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.payroll_income.precheck.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditPayrollIncomePrecheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.credit.payroll_income.precheck.$post> },
      ) => parseResponse(client.credit.payroll_income.precheck.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditPayrollIncomeRefreshKey() {
  return ['credit', '/credit/payroll_income/refresh', 'POST'] as const
}

export function usePostCreditPayrollIncomeRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credit.payroll_income.refresh.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.payroll_income.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditPayrollIncomeRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.credit.payroll_income.refresh.$post> },
      ) => parseResponse(client.credit.payroll_income.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditRelayCreateKey() {
  return ['credit', '/credit/relay/create', 'POST'] as const
}

export function usePostCreditRelayCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit.relay.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.relay.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditRelayCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.credit.relay.create.$post> }) =>
        parseResponse(client.credit.relay.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditRelayGetKey() {
  return ['credit', '/credit/relay/get', 'POST'] as const
}

export function usePostCreditRelayGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit.relay.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.relay.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditRelayGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.credit.relay.get.$post> }) =>
        parseResponse(client.credit.relay.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditRelayRefreshKey() {
  return ['credit', '/credit/relay/refresh', 'POST'] as const
}

export function usePostCreditRelayRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credit.relay.refresh.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.relay.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditRelayRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.credit.relay.refresh.$post> },
      ) => parseResponse(client.credit.relay.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditRelayRemoveKey() {
  return ['credit', '/credit/relay/remove', 'POST'] as const
}

export function usePostCreditRelayRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit.relay.remove.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.relay.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditRelayRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.credit.relay.remove.$post> }) =>
        parseResponse(client.credit.relay.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditSessionsGetKey() {
  return ['credit', '/credit/sessions/get', 'POST'] as const
}

export function usePostCreditSessionsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit.sessions.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.sessions.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditSessionsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.credit.sessions.get.$post> }) =>
        parseResponse(client.credit.sessions.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDashboardUserGetKey() {
  return ['dashboard_user', '/dashboard_user/get', 'POST'] as const
}

export function usePostDashboardUserGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard_user.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dashboard_user.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDashboardUserGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dashboard_user.get.$post> }) =>
        parseResponse(client.dashboard_user.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDashboardUserListKey() {
  return ['dashboard_user', '/dashboard_user/list', 'POST'] as const
}

export function usePostDashboardUserList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard_user.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dashboard_user.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDashboardUserListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dashboard_user.list.$post> }) =>
        parseResponse(client.dashboard_user.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDepositSwitchAltCreateKey() {
  return ['deposit_switch', '/deposit_switch/alt/create', 'POST'] as const
}

export function usePostDepositSwitchAltCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deposit_switch.alt.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.deposit_switch.alt.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDepositSwitchAltCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.deposit_switch.alt.create.$post> },
      ) => parseResponse(client.deposit_switch.alt.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDepositSwitchCreateKey() {
  return ['deposit_switch', '/deposit_switch/create', 'POST'] as const
}

export function usePostDepositSwitchCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deposit_switch.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.deposit_switch.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDepositSwitchCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.deposit_switch.create.$post> },
      ) => parseResponse(client.deposit_switch.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDepositSwitchGetKey() {
  return ['deposit_switch', '/deposit_switch/get', 'POST'] as const
}

export function usePostDepositSwitchGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deposit_switch.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.deposit_switch.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDepositSwitchGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deposit_switch.get.$post> }) =>
        parseResponse(client.deposit_switch.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDepositSwitchTokenCreateKey() {
  return ['deposit_switch', '/deposit_switch/token/create', 'POST'] as const
}

export function usePostDepositSwitchTokenCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deposit_switch.token.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.deposit_switch.token.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDepositSwitchTokenCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.deposit_switch.token.create.$post> },
      ) => parseResponse(client.deposit_switch.token.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEmployersSearchKey() {
  return ['employers', '/employers/search', 'POST'] as const
}

export function usePostEmployersSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.employers.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.employers.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployersSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.employers.search.$post> }) =>
        parseResponse(client.employers.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEmploymentVerificationGetKey() {
  return ['employment', '/employment/verification/get', 'POST'] as const
}

export function usePostEmploymentVerificationGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.employment.verification.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.employment.verification.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmploymentVerificationGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.employment.verification.get.$post> },
      ) => parseResponse(client.employment.verification.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFdxNotificationsKey() {
  return ['fdx', '/fdx/notifications', 'POST'] as const
}

export function usePostFdxNotifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fdx.notifications.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.fdx.notifications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFdxNotificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fdx.notifications.$post> }) =>
        parseResponse(client.fdx.notifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIdentityGetKey() {
  return ['identity', '/identity/get', 'POST'] as const
}

export function usePostIdentityGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identity.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.identity.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdentityGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.identity.get.$post> }) =>
        parseResponse(client.identity.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIdentityMatchKey() {
  return ['identity', '/identity/match', 'POST'] as const
}

export function usePostIdentityMatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identity.match.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.identity.match.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdentityMatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.identity.match.$post> }) =>
        parseResponse(client.identity.match.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIdentityVerificationCreateKey() {
  return ['identity_verification', '/identity_verification/create', 'POST'] as const
}

export function usePostIdentityVerificationCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.identity_verification.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.identity_verification.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdentityVerificationCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.identity_verification.create.$post> },
      ) => parseResponse(client.identity_verification.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIdentityVerificationGetKey() {
  return ['identity_verification', '/identity_verification/get', 'POST'] as const
}

export function usePostIdentityVerificationGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.identity_verification.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.identity_verification.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdentityVerificationGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.identity_verification.get.$post> },
      ) => parseResponse(client.identity_verification.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIdentityVerificationListKey() {
  return ['identity_verification', '/identity_verification/list', 'POST'] as const
}

export function usePostIdentityVerificationList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.identity_verification.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.identity_verification.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdentityVerificationListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.identity_verification.list.$post> },
      ) => parseResponse(client.identity_verification.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIdentityVerificationRetryKey() {
  return ['identity_verification', '/identity_verification/retry', 'POST'] as const
}

export function usePostIdentityVerificationRetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.identity_verification.retry.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.identity_verification.retry.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdentityVerificationRetryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.identity_verification.retry.$post> },
      ) => parseResponse(client.identity_verification.retry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIncomeVerificationCreateKey() {
  return ['income', '/income/verification/create', 'POST'] as const
}

export function usePostIncomeVerificationCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.income.verification.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.income.verification.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncomeVerificationCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.income.verification.create.$post> },
      ) => parseResponse(client.income.verification.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIncomeVerificationDocumentsDownloadKey() {
  return ['income', '/income/verification/documents/download', 'POST'] as const
}

export function usePostIncomeVerificationDocumentsDownload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.income.verification.documents.download.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.income.verification.documents.download.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncomeVerificationDocumentsDownloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.income.verification.documents.download.$post> },
      ) => parseResponse(client.income.verification.documents.download.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIncomeVerificationPaystubsGetKey() {
  return ['income', '/income/verification/paystubs/get', 'POST'] as const
}

export function usePostIncomeVerificationPaystubsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.income.verification.paystubs.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.income.verification.paystubs.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncomeVerificationPaystubsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.income.verification.paystubs.get.$post> },
      ) => parseResponse(client.income.verification.paystubs.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIncomeVerificationPrecheckKey() {
  return ['income', '/income/verification/precheck', 'POST'] as const
}

export function usePostIncomeVerificationPrecheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.income.verification.precheck.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.income.verification.precheck.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncomeVerificationPrecheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.income.verification.precheck.$post> },
      ) => parseResponse(client.income.verification.precheck.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIncomeVerificationTaxformsGetKey() {
  return ['income', '/income/verification/taxforms/get', 'POST'] as const
}

export function usePostIncomeVerificationTaxformsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.income.verification.taxforms.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.income.verification.taxforms.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncomeVerificationTaxformsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.income.verification.taxforms.get.$post> },
      ) => parseResponse(client.income.verification.taxforms.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInstitutionsGetKey() {
  return ['institutions', '/institutions/get', 'POST'] as const
}

export function usePostInstitutionsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.institutions.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.institutions.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstitutionsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.institutions.get.$post> }) =>
        parseResponse(client.institutions.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInstitutionsGetByIdKey() {
  return ['institutions', '/institutions/get_by_id', 'POST'] as const
}

export function usePostInstitutionsGetById<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.institutions.get_by_id.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.institutions.get_by_id.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstitutionsGetByIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.institutions.get_by_id.$post> },
      ) => parseResponse(client.institutions.get_by_id.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInstitutionsSearchKey() {
  return ['institutions', '/institutions/search', 'POST'] as const
}

export function usePostInstitutionsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.institutions.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.institutions.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstitutionsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.institutions.search.$post> }) =>
        parseResponse(client.institutions.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvestmentsHoldingsGetKey() {
  return ['investments', '/investments/holdings/get', 'POST'] as const
}

export function usePostInvestmentsHoldingsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.investments.holdings.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.investments.holdings.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvestmentsHoldingsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.investments.holdings.get.$post> },
      ) => parseResponse(client.investments.holdings.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvestmentsTransactionsGetKey() {
  return ['investments', '/investments/transactions/get', 'POST'] as const
}

export function usePostInvestmentsTransactionsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.investments.transactions.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.investments.transactions.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvestmentsTransactionsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.investments.transactions.get.$post> },
      ) => parseResponse(client.investments.transactions.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemAccessTokenInvalidateKey() {
  return ['item', '/item/access_token/invalidate', 'POST'] as const
}

export function usePostItemAccessTokenInvalidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.item.access_token.invalidate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.item.access_token.invalidate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemAccessTokenInvalidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.item.access_token.invalidate.$post> },
      ) => parseResponse(client.item.access_token.invalidate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemActivityListKey() {
  return ['item', '/item/activity/list', 'POST'] as const
}

export function usePostItemActivityList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.activity.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.item.activity.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemActivityListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.item.activity.list.$post> }) =>
        parseResponse(client.item.activity.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemApplicationListKey() {
  return ['item', '/item/application/list', 'POST'] as const
}

export function usePostItemApplicationList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.item.application.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.item.application.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemApplicationListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.item.application.list.$post> },
      ) => parseResponse(client.item.application.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemApplicationScopesUpdateKey() {
  return ['item', '/item/application/scopes/update', 'POST'] as const
}

export function usePostItemApplicationScopesUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.item.application.scopes.update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.item.application.scopes.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemApplicationScopesUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.item.application.scopes.update.$post> },
      ) => parseResponse(client.item.application.scopes.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemGetKey() {
  return ['item', '/item/get', 'POST'] as const
}

export function usePostItemGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.get.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.item.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.item.get.$post> }) =>
        parseResponse(client.item.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemImportKey() {
  return ['item', '/item/import', 'POST'] as const
}

export function usePostItemImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.import.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.item.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.item.import.$post> }) =>
        parseResponse(client.item.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemPublicTokenCreateKey() {
  return ['item', '/item/public_token/create', 'POST'] as const
}

export function usePostItemPublicTokenCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.item.public_token.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.item.public_token.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemPublicTokenCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.item.public_token.create.$post> },
      ) => parseResponse(client.item.public_token.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemPublicTokenExchangeKey() {
  return ['item', '/item/public_token/exchange', 'POST'] as const
}

export function usePostItemPublicTokenExchange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.item.public_token.exchange.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.item.public_token.exchange.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemPublicTokenExchangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.item.public_token.exchange.$post> },
      ) => parseResponse(client.item.public_token.exchange.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemRemoveKey() {
  return ['item', '/item/remove', 'POST'] as const
}

export function usePostItemRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.remove.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.item.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.item.remove.$post> }) =>
        parseResponse(client.item.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemWebhookUpdateKey() {
  return ['item', '/item/webhook/update', 'POST'] as const
}

export function usePostItemWebhookUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.webhook.update.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.item.webhook.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemWebhookUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.item.webhook.update.$post> }) =>
        parseResponse(client.item.webhook.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLiabilitiesGetKey() {
  return ['liabilities', '/liabilities/get', 'POST'] as const
}

export function usePostLiabilitiesGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liabilities.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.liabilities.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiabilitiesGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.liabilities.get.$post> }) =>
        parseResponse(client.liabilities.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLinkOauthCorrelationIdExchangeKey() {
  return ['link', '/link/oauth/correlation_id/exchange', 'POST'] as const
}

export function usePostLinkOauthCorrelationIdExchange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.link.oauth.correlation_id.exchange.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.link.oauth.correlation_id.exchange.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinkOauthCorrelationIdExchangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.link.oauth.correlation_id.exchange.$post> },
      ) => parseResponse(client.link.oauth.correlation_id.exchange.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLinkTokenCreateKey() {
  return ['link', '/link/token/create', 'POST'] as const
}

export function usePostLinkTokenCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.link.token.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.link.token.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinkTokenCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.link.token.create.$post> }) =>
        parseResponse(client.link.token.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLinkTokenGetKey() {
  return ['link', '/link/token/get', 'POST'] as const
}

export function usePostLinkTokenGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.link.token.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.link.token.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinkTokenGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.link.token.get.$post> }) =>
        parseResponse(client.link.token.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLinkDeliveryCreateKey() {
  return ['link_delivery', '/link_delivery/create', 'POST'] as const
}

export function usePostLinkDeliveryCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.link_delivery.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.link_delivery.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinkDeliveryCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.link_delivery.create.$post> },
      ) => parseResponse(client.link_delivery.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLinkDeliveryGetKey() {
  return ['link_delivery', '/link_delivery/get', 'POST'] as const
}

export function usePostLinkDeliveryGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.link_delivery.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.link_delivery.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLinkDeliveryGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.link_delivery.get.$post> }) =>
        parseResponse(client.link_delivery.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPartnerCustomerCreateKey() {
  return ['partner', '/partner/customer/create', 'POST'] as const
}

export function usePostPartnerCustomerCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.partner.customer.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.partner.customer.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPartnerCustomerCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.partner.customer.create.$post> },
      ) => parseResponse(client.partner.customer.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPartnerCustomerEnableKey() {
  return ['partner', '/partner/customer/enable', 'POST'] as const
}

export function usePostPartnerCustomerEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.partner.customer.enable.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.partner.customer.enable.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPartnerCustomerEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.partner.customer.enable.$post> },
      ) => parseResponse(client.partner.customer.enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPartnerCustomerGetKey() {
  return ['partner', '/partner/customer/get', 'POST'] as const
}

export function usePostPartnerCustomerGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.partner.customer.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.partner.customer.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPartnerCustomerGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.partner.customer.get.$post> },
      ) => parseResponse(client.partner.customer.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPartnerCustomerOauthInstitutionsGetKey() {
  return ['partner', '/partner/customer/oauth_institutions/get', 'POST'] as const
}

export function usePostPartnerCustomerOauthInstitutionsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.partner.customer.oauth_institutions.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.partner.customer.oauth_institutions.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPartnerCustomerOauthInstitutionsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.partner.customer.oauth_institutions.get.$post> },
      ) => parseResponse(client.partner.customer.oauth_institutions.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPartnerCustomerRemoveKey() {
  return ['partner', '/partner/customer/remove', 'POST'] as const
}

export function usePostPartnerCustomerRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.partner.customer.remove.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.partner.customer.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPartnerCustomerRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.partner.customer.remove.$post> },
      ) => parseResponse(client.partner.customer.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentInitiationConsentCreateKey() {
  return ['payment_initiation', '/payment_initiation/consent/create', 'POST'] as const
}

export function usePostPaymentInitiationConsentCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.consent.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_initiation.consent.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentInitiationConsentCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.payment_initiation.consent.create.$post> },
      ) => parseResponse(client.payment_initiation.consent.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentInitiationConsentGetKey() {
  return ['payment_initiation', '/payment_initiation/consent/get', 'POST'] as const
}

export function usePostPaymentInitiationConsentGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.consent.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_initiation.consent.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentInitiationConsentGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.payment_initiation.consent.get.$post> },
      ) => parseResponse(client.payment_initiation.consent.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentInitiationConsentPaymentExecuteKey() {
  return ['payment_initiation', '/payment_initiation/consent/payment/execute', 'POST'] as const
}

export function usePostPaymentInitiationConsentPaymentExecute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.consent.payment.execute.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_initiation.consent.payment.execute.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentInitiationConsentPaymentExecuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.payment_initiation.consent.payment.execute.$post>
        },
      ) =>
        parseResponse(client.payment_initiation.consent.payment.execute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentInitiationConsentRevokeKey() {
  return ['payment_initiation', '/payment_initiation/consent/revoke', 'POST'] as const
}

export function usePostPaymentInitiationConsentRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.consent.revoke.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_initiation.consent.revoke.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentInitiationConsentRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.payment_initiation.consent.revoke.$post> },
      ) => parseResponse(client.payment_initiation.consent.revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentInitiationPaymentCreateKey() {
  return ['payment_initiation', '/payment_initiation/payment/create', 'POST'] as const
}

export function usePostPaymentInitiationPaymentCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.payment.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_initiation.payment.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentInitiationPaymentCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.payment_initiation.payment.create.$post> },
      ) => parseResponse(client.payment_initiation.payment.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentInitiationPaymentGetKey() {
  return ['payment_initiation', '/payment_initiation/payment/get', 'POST'] as const
}

export function usePostPaymentInitiationPaymentGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.payment.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_initiation.payment.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentInitiationPaymentGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.payment_initiation.payment.get.$post> },
      ) => parseResponse(client.payment_initiation.payment.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentInitiationPaymentListKey() {
  return ['payment_initiation', '/payment_initiation/payment/list', 'POST'] as const
}

export function usePostPaymentInitiationPaymentList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.payment.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_initiation.payment.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentInitiationPaymentListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.payment_initiation.payment.list.$post> },
      ) => parseResponse(client.payment_initiation.payment.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentInitiationPaymentReverseKey() {
  return ['payment_initiation', '/payment_initiation/payment/reverse', 'POST'] as const
}

export function usePostPaymentInitiationPaymentReverse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.payment.reverse.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_initiation.payment.reverse.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentInitiationPaymentReverseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.payment_initiation.payment.reverse.$post> },
      ) => parseResponse(client.payment_initiation.payment.reverse.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentInitiationPaymentTokenCreateKey() {
  return ['payment_initiation', '/payment_initiation/payment/token/create', 'POST'] as const
}

export function usePostPaymentInitiationPaymentTokenCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.payment.token.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_initiation.payment.token.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentInitiationPaymentTokenCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.payment_initiation.payment.token.create.$post> },
      ) => parseResponse(client.payment_initiation.payment.token.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentInitiationRecipientCreateKey() {
  return ['payment_initiation', '/payment_initiation/recipient/create', 'POST'] as const
}

export function usePostPaymentInitiationRecipientCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.recipient.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_initiation.recipient.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentInitiationRecipientCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.payment_initiation.recipient.create.$post> },
      ) => parseResponse(client.payment_initiation.recipient.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentInitiationRecipientGetKey() {
  return ['payment_initiation', '/payment_initiation/recipient/get', 'POST'] as const
}

export function usePostPaymentInitiationRecipientGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.recipient.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_initiation.recipient.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentInitiationRecipientGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.payment_initiation.recipient.get.$post> },
      ) => parseResponse(client.payment_initiation.recipient.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentInitiationRecipientListKey() {
  return ['payment_initiation', '/payment_initiation/recipient/list', 'POST'] as const
}

export function usePostPaymentInitiationRecipientList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_initiation.recipient.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_initiation.recipient.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentInitiationRecipientListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.payment_initiation.recipient.list.$post> },
      ) => parseResponse(client.payment_initiation.recipient.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentProfileCreateKey() {
  return ['payment_profile', '/payment_profile/create', 'POST'] as const
}

export function usePostPaymentProfileCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.payment_profile.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_profile.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentProfileCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.payment_profile.create.$post> },
      ) => parseResponse(client.payment_profile.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentProfileGetKey() {
  return ['payment_profile', '/payment_profile/get', 'POST'] as const
}

export function usePostPaymentProfileGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_profile.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_profile.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentProfileGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payment_profile.get.$post> }) =>
        parseResponse(client.payment_profile.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentProfileRemoveKey() {
  return ['payment_profile', '/payment_profile/remove', 'POST'] as const
}

export function usePostPaymentProfileRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.payment_profile.remove.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_profile.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentProfileRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.payment_profile.remove.$post> },
      ) => parseResponse(client.payment_profile.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProcessorApexProcessorTokenCreateKey() {
  return ['processor', '/processor/apex/processor_token/create', 'POST'] as const
}

export function usePostProcessorApexProcessorTokenCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.apex.processor_token.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.apex.processor_token.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorApexProcessorTokenCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.processor.apex.processor_token.create.$post> },
      ) => parseResponse(client.processor.apex.processor_token.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProcessorAuthGetKey() {
  return ['processor', '/processor/auth/get', 'POST'] as const
}

export function usePostProcessorAuthGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processor.auth.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.auth.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorAuthGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.processor.auth.get.$post> }) =>
        parseResponse(client.processor.auth.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProcessorBalanceGetKey() {
  return ['processor', '/processor/balance/get', 'POST'] as const
}

export function usePostProcessorBalanceGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.processor.balance.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.balance.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorBalanceGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.processor.balance.get.$post> },
      ) => parseResponse(client.processor.balance.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProcessorBankTransferCreateKey() {
  return ['processor', '/processor/bank_transfer/create', 'POST'] as const
}

export function usePostProcessorBankTransferCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.bank_transfer.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.bank_transfer.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorBankTransferCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.processor.bank_transfer.create.$post> },
      ) => parseResponse(client.processor.bank_transfer.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProcessorIdentityGetKey() {
  return ['processor', '/processor/identity/get', 'POST'] as const
}

export function usePostProcessorIdentityGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.processor.identity.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.identity.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorIdentityGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.processor.identity.get.$post> },
      ) => parseResponse(client.processor.identity.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProcessorSignalDecisionReportKey() {
  return ['processor', '/processor/signal/decision/report', 'POST'] as const
}

export function usePostProcessorSignalDecisionReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.signal.decision.report.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.signal.decision.report.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorSignalDecisionReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.processor.signal.decision.report.$post> },
      ) => parseResponse(client.processor.signal.decision.report.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProcessorSignalEvaluateKey() {
  return ['processor', '/processor/signal/evaluate', 'POST'] as const
}

export function usePostProcessorSignalEvaluate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.processor.signal.evaluate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.signal.evaluate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorSignalEvaluateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.processor.signal.evaluate.$post> },
      ) => parseResponse(client.processor.signal.evaluate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProcessorSignalReturnReportKey() {
  return ['processor', '/processor/signal/return/report', 'POST'] as const
}

export function usePostProcessorSignalReturnReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.signal.return.report.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.signal.return.report.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorSignalReturnReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.processor.signal.return.report.$post> },
      ) => parseResponse(client.processor.signal.return.report.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProcessorStripeBankAccountTokenCreateKey() {
  return ['processor', '/processor/stripe/bank_account_token/create', 'POST'] as const
}

export function usePostProcessorStripeBankAccountTokenCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.stripe.bank_account_token.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.stripe.bank_account_token.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorStripeBankAccountTokenCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.processor.stripe.bank_account_token.create.$post>
        },
      ) =>
        parseResponse(client.processor.stripe.bank_account_token.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProcessorTokenCreateKey() {
  return ['processor', '/processor/token/create', 'POST'] as const
}

export function usePostProcessorTokenCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.processor.token.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.token.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorTokenCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.processor.token.create.$post> },
      ) => parseResponse(client.processor.token.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxBankTransferFireWebhookKey() {
  return ['sandbox', '/sandbox/bank_transfer/fire_webhook', 'POST'] as const
}

export function usePostSandboxBankTransferFireWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.bank_transfer.fire_webhook.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.bank_transfer.fire_webhook.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxBankTransferFireWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.bank_transfer.fire_webhook.$post> },
      ) => parseResponse(client.sandbox.bank_transfer.fire_webhook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxBankTransferSimulateKey() {
  return ['sandbox', '/sandbox/bank_transfer/simulate', 'POST'] as const
}

export function usePostSandboxBankTransferSimulate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.bank_transfer.simulate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.bank_transfer.simulate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxBankTransferSimulateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.bank_transfer.simulate.$post> },
      ) => parseResponse(client.sandbox.bank_transfer.simulate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxIncomeFireWebhookKey() {
  return ['sandbox', '/sandbox/income/fire_webhook', 'POST'] as const
}

export function usePostSandboxIncomeFireWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.income.fire_webhook.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.income.fire_webhook.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxIncomeFireWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.income.fire_webhook.$post> },
      ) => parseResponse(client.sandbox.income.fire_webhook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxItemFireWebhookKey() {
  return ['sandbox', '/sandbox/item/fire_webhook', 'POST'] as const
}

export function usePostSandboxItemFireWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.item.fire_webhook.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.item.fire_webhook.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxItemFireWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.item.fire_webhook.$post> },
      ) => parseResponse(client.sandbox.item.fire_webhook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxItemResetLoginKey() {
  return ['sandbox', '/sandbox/item/reset_login', 'POST'] as const
}

export function usePostSandboxItemResetLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.item.reset_login.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.item.reset_login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxItemResetLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.item.reset_login.$post> },
      ) => parseResponse(client.sandbox.item.reset_login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxItemSetVerificationStatusKey() {
  return ['sandbox', '/sandbox/item/set_verification_status', 'POST'] as const
}

export function usePostSandboxItemSetVerificationStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.item.set_verification_status.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.item.set_verification_status.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxItemSetVerificationStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.sandbox.item.set_verification_status.$post> },
      ) => parseResponse(client.sandbox.item.set_verification_status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxOauthSelectAccountsKey() {
  return ['sandbox', '/sandbox/oauth/select_accounts', 'POST'] as const
}

export function usePostSandboxOauthSelectAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.oauth.select_accounts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.oauth.select_accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxOauthSelectAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.oauth.select_accounts.$post> },
      ) => parseResponse(client.sandbox.oauth.select_accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxPaymentProfileResetLoginKey() {
  return ['sandbox', '/sandbox/payment_profile/reset_login', 'POST'] as const
}

export function usePostSandboxPaymentProfileResetLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.payment_profile.reset_login.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.payment_profile.reset_login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxPaymentProfileResetLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.payment_profile.reset_login.$post> },
      ) => parseResponse(client.sandbox.payment_profile.reset_login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxProcessorTokenCreateKey() {
  return ['sandbox', '/sandbox/processor_token/create', 'POST'] as const
}

export function usePostSandboxProcessorTokenCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.processor_token.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.processor_token.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxProcessorTokenCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.processor_token.create.$post> },
      ) => parseResponse(client.sandbox.processor_token.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxPublicTokenCreateKey() {
  return ['sandbox', '/sandbox/public_token/create', 'POST'] as const
}

export function usePostSandboxPublicTokenCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.public_token.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.public_token.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxPublicTokenCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.public_token.create.$post> },
      ) => parseResponse(client.sandbox.public_token.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxTransferFireWebhookKey() {
  return ['sandbox', '/sandbox/transfer/fire_webhook', 'POST'] as const
}

export function usePostSandboxTransferFireWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.transfer.fire_webhook.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.transfer.fire_webhook.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxTransferFireWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.transfer.fire_webhook.$post> },
      ) => parseResponse(client.sandbox.transfer.fire_webhook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxTransferRepaymentSimulateKey() {
  return ['sandbox', '/sandbox/transfer/repayment/simulate', 'POST'] as const
}

export function usePostSandboxTransferRepaymentSimulate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.transfer.repayment.simulate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.transfer.repayment.simulate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxTransferRepaymentSimulateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.transfer.repayment.simulate.$post> },
      ) => parseResponse(client.sandbox.transfer.repayment.simulate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxTransferSimulateKey() {
  return ['sandbox', '/sandbox/transfer/simulate', 'POST'] as const
}

export function usePostSandboxTransferSimulate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.transfer.simulate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.transfer.simulate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxTransferSimulateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.transfer.simulate.$post> },
      ) => parseResponse(client.sandbox.transfer.simulate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxTransferSweepSimulateKey() {
  return ['sandbox', '/sandbox/transfer/sweep/simulate', 'POST'] as const
}

export function usePostSandboxTransferSweepSimulate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.transfer.sweep.simulate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.transfer.sweep.simulate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxTransferSweepSimulateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.transfer.sweep.simulate.$post> },
      ) => parseResponse(client.sandbox.transfer.sweep.simulate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxTransferTestClockAdvanceKey() {
  return ['sandbox', '/sandbox/transfer/test_clock/advance', 'POST'] as const
}

export function usePostSandboxTransferTestClockAdvance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.transfer.test_clock.advance.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.transfer.test_clock.advance.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxTransferTestClockAdvanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.transfer.test_clock.advance.$post> },
      ) => parseResponse(client.sandbox.transfer.test_clock.advance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxTransferTestClockCreateKey() {
  return ['sandbox', '/sandbox/transfer/test_clock/create', 'POST'] as const
}

export function usePostSandboxTransferTestClockCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.transfer.test_clock.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.transfer.test_clock.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxTransferTestClockCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.transfer.test_clock.create.$post> },
      ) => parseResponse(client.sandbox.transfer.test_clock.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxTransferTestClockGetKey() {
  return ['sandbox', '/sandbox/transfer/test_clock/get', 'POST'] as const
}

export function usePostSandboxTransferTestClockGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.transfer.test_clock.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.transfer.test_clock.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxTransferTestClockGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.transfer.test_clock.get.$post> },
      ) => parseResponse(client.sandbox.transfer.test_clock.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxTransferTestClockListKey() {
  return ['sandbox', '/sandbox/transfer/test_clock/list', 'POST'] as const
}

export function usePostSandboxTransferTestClockList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.transfer.test_clock.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.transfer.test_clock.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxTransferTestClockListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.transfer.test_clock.list.$post> },
      ) => parseResponse(client.sandbox.transfer.test_clock.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSignalDecisionReportKey() {
  return ['signal', '/signal/decision/report', 'POST'] as const
}

export function usePostSignalDecisionReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.signal.decision.report.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.signal.decision.report.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignalDecisionReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.signal.decision.report.$post> },
      ) => parseResponse(client.signal.decision.report.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSignalEvaluateKey() {
  return ['signal', '/signal/evaluate', 'POST'] as const
}

export function usePostSignalEvaluate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signal.evaluate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.signal.evaluate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignalEvaluateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.signal.evaluate.$post> }) =>
        parseResponse(client.signal.evaluate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSignalPrepareKey() {
  return ['signal', '/signal/prepare', 'POST'] as const
}

export function usePostSignalPrepare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signal.prepare.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.signal.prepare.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignalPrepareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.signal.prepare.$post> }) =>
        parseResponse(client.signal.prepare.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSignalReturnReportKey() {
  return ['signal', '/signal/return/report', 'POST'] as const
}

export function usePostSignalReturnReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.signal.return.report.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.signal.return.report.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignalReturnReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.signal.return.report.$post> },
      ) => parseResponse(client.signal.return.report.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransactionsEnrichKey() {
  return ['transactions', '/transactions/enrich', 'POST'] as const
}

export function usePostTransactionsEnrich<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.enrich.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transactions.enrich.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionsEnrichKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transactions.enrich.$post> }) =>
        parseResponse(client.transactions.enrich.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransactionsGetKey() {
  return ['transactions', '/transactions/get', 'POST'] as const
}

export function usePostTransactionsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transactions.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transactions.get.$post> }) =>
        parseResponse(client.transactions.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransactionsRecurringGetKey() {
  return ['transactions', '/transactions/recurring/get', 'POST'] as const
}

export function usePostTransactionsRecurringGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transactions.recurring.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transactions.recurring.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionsRecurringGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transactions.recurring.get.$post> },
      ) => parseResponse(client.transactions.recurring.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransactionsRefreshKey() {
  return ['transactions', '/transactions/refresh', 'POST'] as const
}

export function usePostTransactionsRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transactions.refresh.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transactions.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionsRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transactions.refresh.$post> },
      ) => parseResponse(client.transactions.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransactionsSyncKey() {
  return ['transactions', '/transactions/sync', 'POST'] as const
}

export function usePostTransactionsSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.sync.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transactions.sync.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionsSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transactions.sync.$post> }) =>
        parseResponse(client.transactions.sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferAuthorizationCreateKey() {
  return ['transfer', '/transfer/authorization/create', 'POST'] as const
}

export function usePostTransferAuthorizationCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.authorization.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.authorization.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferAuthorizationCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.authorization.create.$post> },
      ) => parseResponse(client.transfer.authorization.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferCancelKey() {
  return ['transfer', '/transfer/cancel', 'POST'] as const
}

export function usePostTransferCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.cancel.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transfer.cancel.$post> }) =>
        parseResponse(client.transfer.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferCapabilitiesGetKey() {
  return ['transfer', '/transfer/capabilities/get', 'POST'] as const
}

export function usePostTransferCapabilitiesGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.capabilities.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.capabilities.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferCapabilitiesGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.capabilities.get.$post> },
      ) => parseResponse(client.transfer.capabilities.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferCreateKey() {
  return ['transfer', '/transfer/create', 'POST'] as const
}

export function usePostTransferCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transfer.create.$post> }) =>
        parseResponse(client.transfer.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferEventListKey() {
  return ['transfer', '/transfer/event/list', 'POST'] as const
}

export function usePostTransferEventList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.event.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.event.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferEventListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transfer.event.list.$post> }) =>
        parseResponse(client.transfer.event.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferEventSyncKey() {
  return ['transfer', '/transfer/event/sync', 'POST'] as const
}

export function usePostTransferEventSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.event.sync.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.event.sync.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferEventSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transfer.event.sync.$post> }) =>
        parseResponse(client.transfer.event.sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferGetKey() {
  return ['transfer', '/transfer/get', 'POST'] as const
}

export function usePostTransferGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transfer.get.$post> }) =>
        parseResponse(client.transfer.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferIntentCreateKey() {
  return ['transfer', '/transfer/intent/create', 'POST'] as const
}

export function usePostTransferIntentCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.intent.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.intent.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferIntentCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.intent.create.$post> },
      ) => parseResponse(client.transfer.intent.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferIntentGetKey() {
  return ['transfer', '/transfer/intent/get', 'POST'] as const
}

export function usePostTransferIntentGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.intent.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.intent.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferIntentGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transfer.intent.get.$post> }) =>
        parseResponse(client.transfer.intent.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferListKey() {
  return ['transfer', '/transfer/list', 'POST'] as const
}

export function usePostTransferList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transfer.list.$post> }) =>
        parseResponse(client.transfer.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferMigrateAccountKey() {
  return ['transfer', '/transfer/migrate_account', 'POST'] as const
}

export function usePostTransferMigrateAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.migrate_account.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.migrate_account.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferMigrateAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.migrate_account.$post> },
      ) => parseResponse(client.transfer.migrate_account.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferOriginatorCreateKey() {
  return ['transfer', '/transfer/originator/create', 'POST'] as const
}

export function usePostTransferOriginatorCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.originator.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.originator.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferOriginatorCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.originator.create.$post> },
      ) => parseResponse(client.transfer.originator.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferOriginatorGetKey() {
  return ['transfer', '/transfer/originator/get', 'POST'] as const
}

export function usePostTransferOriginatorGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.originator.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.originator.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferOriginatorGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.originator.get.$post> },
      ) => parseResponse(client.transfer.originator.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferOriginatorListKey() {
  return ['transfer', '/transfer/originator/list', 'POST'] as const
}

export function usePostTransferOriginatorList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.originator.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.originator.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferOriginatorListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.originator.list.$post> },
      ) => parseResponse(client.transfer.originator.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferQuestionnaireCreateKey() {
  return ['transfer', '/transfer/questionnaire/create', 'POST'] as const
}

export function usePostTransferQuestionnaireCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.questionnaire.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.questionnaire.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferQuestionnaireCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.questionnaire.create.$post> },
      ) => parseResponse(client.transfer.questionnaire.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferRecurringCancelKey() {
  return ['transfer', '/transfer/recurring/cancel', 'POST'] as const
}

export function usePostTransferRecurringCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.recurring.cancel.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.recurring.cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferRecurringCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.recurring.cancel.$post> },
      ) => parseResponse(client.transfer.recurring.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferRecurringCreateKey() {
  return ['transfer', '/transfer/recurring/create', 'POST'] as const
}

export function usePostTransferRecurringCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.recurring.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.recurring.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferRecurringCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.recurring.create.$post> },
      ) => parseResponse(client.transfer.recurring.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferRecurringGetKey() {
  return ['transfer', '/transfer/recurring/get', 'POST'] as const
}

export function usePostTransferRecurringGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.recurring.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.recurring.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferRecurringGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.recurring.get.$post> },
      ) => parseResponse(client.transfer.recurring.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferRecurringListKey() {
  return ['transfer', '/transfer/recurring/list', 'POST'] as const
}

export function usePostTransferRecurringList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.recurring.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.recurring.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferRecurringListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.recurring.list.$post> },
      ) => parseResponse(client.transfer.recurring.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferRefundCancelKey() {
  return ['transfer', '/transfer/refund/cancel', 'POST'] as const
}

export function usePostTransferRefundCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.refund.cancel.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.refund.cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferRefundCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.refund.cancel.$post> },
      ) => parseResponse(client.transfer.refund.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferRefundCreateKey() {
  return ['transfer', '/transfer/refund/create', 'POST'] as const
}

export function usePostTransferRefundCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.refund.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.refund.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferRefundCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.refund.create.$post> },
      ) => parseResponse(client.transfer.refund.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferRefundGetKey() {
  return ['transfer', '/transfer/refund/get', 'POST'] as const
}

export function usePostTransferRefundGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.refund.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.refund.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferRefundGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transfer.refund.get.$post> }) =>
        parseResponse(client.transfer.refund.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferRepaymentListKey() {
  return ['transfer', '/transfer/repayment/list', 'POST'] as const
}

export function usePostTransferRepaymentList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.repayment.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.repayment.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferRepaymentListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.repayment.list.$post> },
      ) => parseResponse(client.transfer.repayment.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferRepaymentReturnListKey() {
  return ['transfer', '/transfer/repayment/return/list', 'POST'] as const
}

export function usePostTransferRepaymentReturnList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transfer.repayment.return.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.repayment.return.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferRepaymentReturnListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.repayment.return.list.$post> },
      ) => parseResponse(client.transfer.repayment.return.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferSweepGetKey() {
  return ['transfer', '/transfer/sweep/get', 'POST'] as const
}

export function usePostTransferSweepGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.sweep.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.sweep.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferSweepGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transfer.sweep.get.$post> }) =>
        parseResponse(client.transfer.sweep.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferSweepListKey() {
  return ['transfer', '/transfer/sweep/list', 'POST'] as const
}

export function usePostTransferSweepList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.sweep.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.sweep.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferSweepListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transfer.sweep.list.$post> }) =>
        parseResponse(client.transfer.sweep.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserCreateKey() {
  return ['user', '/user/create', 'POST'] as const
}

export function usePostUserCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.create.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.user.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.create.$post> }) =>
        parseResponse(client.user.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWalletCreateKey() {
  return ['wallet', '/wallet/create', 'POST'] as const
}

export function usePostWalletCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.wallet.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.wallet.create.$post> }) =>
        parseResponse(client.wallet.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWalletGetKey() {
  return ['wallet', '/wallet/get', 'POST'] as const
}

export function usePostWalletGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.get.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.wallet.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.wallet.get.$post> }) =>
        parseResponse(client.wallet.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWalletListKey() {
  return ['wallet', '/wallet/list', 'POST'] as const
}

export function usePostWalletList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.list.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.wallet.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.wallet.list.$post> }) =>
        parseResponse(client.wallet.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWalletTransactionExecuteKey() {
  return ['wallet', '/wallet/transaction/execute', 'POST'] as const
}

export function usePostWalletTransactionExecute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wallet.transaction.execute.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.wallet.transaction.execute.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletTransactionExecuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.wallet.transaction.execute.$post> },
      ) => parseResponse(client.wallet.transaction.execute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWalletTransactionGetKey() {
  return ['wallet', '/wallet/transaction/get', 'POST'] as const
}

export function usePostWalletTransactionGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wallet.transaction.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.wallet.transaction.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletTransactionGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.wallet.transaction.get.$post> },
      ) => parseResponse(client.wallet.transaction.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWalletTransactionListKey() {
  return ['wallet', '/wallet/transaction/list', 'POST'] as const
}

export function usePostWalletTransactionList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wallet.transaction.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.wallet.transaction.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletTransactionListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.wallet.transaction.list.$post> },
      ) => parseResponse(client.wallet.transaction.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWatchlistScreeningEntityCreateKey() {
  return ['watchlist_screening', '/watchlist_screening/entity/create', 'POST'] as const
}

export function usePostWatchlistScreeningEntityCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.entity.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.watchlist_screening.entity.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatchlistScreeningEntityCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.watchlist_screening.entity.create.$post> },
      ) => parseResponse(client.watchlist_screening.entity.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWatchlistScreeningEntityGetKey() {
  return ['watchlist_screening', '/watchlist_screening/entity/get', 'POST'] as const
}

export function usePostWatchlistScreeningEntityGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.entity.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.watchlist_screening.entity.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatchlistScreeningEntityGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.watchlist_screening.entity.get.$post> },
      ) => parseResponse(client.watchlist_screening.entity.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWatchlistScreeningEntityHistoryListKey() {
  return ['watchlist_screening', '/watchlist_screening/entity/history/list', 'POST'] as const
}

export function usePostWatchlistScreeningEntityHistoryList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.entity.history.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.watchlist_screening.entity.history.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatchlistScreeningEntityHistoryListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.watchlist_screening.entity.history.list.$post> },
      ) => parseResponse(client.watchlist_screening.entity.history.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWatchlistScreeningEntityHitListKey() {
  return ['watchlist_screening', '/watchlist_screening/entity/hit/list', 'POST'] as const
}

export function usePostWatchlistScreeningEntityHitList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.entity.hit.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.watchlist_screening.entity.hit.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatchlistScreeningEntityHitListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.watchlist_screening.entity.hit.list.$post> },
      ) => parseResponse(client.watchlist_screening.entity.hit.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWatchlistScreeningEntityListKey() {
  return ['watchlist_screening', '/watchlist_screening/entity/list', 'POST'] as const
}

export function usePostWatchlistScreeningEntityList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.entity.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.watchlist_screening.entity.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatchlistScreeningEntityListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.watchlist_screening.entity.list.$post> },
      ) => parseResponse(client.watchlist_screening.entity.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWatchlistScreeningEntityProgramGetKey() {
  return ['watchlist_screening', '/watchlist_screening/entity/program/get', 'POST'] as const
}

export function usePostWatchlistScreeningEntityProgramGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.entity.program.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.watchlist_screening.entity.program.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatchlistScreeningEntityProgramGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.watchlist_screening.entity.program.get.$post> },
      ) => parseResponse(client.watchlist_screening.entity.program.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWatchlistScreeningEntityProgramListKey() {
  return ['watchlist_screening', '/watchlist_screening/entity/program/list', 'POST'] as const
}

export function usePostWatchlistScreeningEntityProgramList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.entity.program.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.watchlist_screening.entity.program.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatchlistScreeningEntityProgramListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.watchlist_screening.entity.program.list.$post> },
      ) => parseResponse(client.watchlist_screening.entity.program.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWatchlistScreeningEntityReviewCreateKey() {
  return ['watchlist_screening', '/watchlist_screening/entity/review/create', 'POST'] as const
}

export function usePostWatchlistScreeningEntityReviewCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.entity.review.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.watchlist_screening.entity.review.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatchlistScreeningEntityReviewCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.watchlist_screening.entity.review.create.$post> },
      ) => parseResponse(client.watchlist_screening.entity.review.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWatchlistScreeningEntityReviewListKey() {
  return ['watchlist_screening', '/watchlist_screening/entity/review/list', 'POST'] as const
}

export function usePostWatchlistScreeningEntityReviewList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.entity.review.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.watchlist_screening.entity.review.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatchlistScreeningEntityReviewListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.watchlist_screening.entity.review.list.$post> },
      ) => parseResponse(client.watchlist_screening.entity.review.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWatchlistScreeningEntityUpdateKey() {
  return ['watchlist_screening', '/watchlist_screening/entity/update', 'POST'] as const
}

export function usePostWatchlistScreeningEntityUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.entity.update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.watchlist_screening.entity.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatchlistScreeningEntityUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.watchlist_screening.entity.update.$post> },
      ) => parseResponse(client.watchlist_screening.entity.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWatchlistScreeningIndividualCreateKey() {
  return ['watchlist_screening', '/watchlist_screening/individual/create', 'POST'] as const
}

export function usePostWatchlistScreeningIndividualCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.individual.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.watchlist_screening.individual.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatchlistScreeningIndividualCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.watchlist_screening.individual.create.$post> },
      ) => parseResponse(client.watchlist_screening.individual.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWatchlistScreeningIndividualGetKey() {
  return ['watchlist_screening', '/watchlist_screening/individual/get', 'POST'] as const
}

export function usePostWatchlistScreeningIndividualGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.individual.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.watchlist_screening.individual.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatchlistScreeningIndividualGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.watchlist_screening.individual.get.$post> },
      ) => parseResponse(client.watchlist_screening.individual.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWatchlistScreeningIndividualHistoryListKey() {
  return ['watchlist_screening', '/watchlist_screening/individual/history/list', 'POST'] as const
}

export function usePostWatchlistScreeningIndividualHistoryList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.individual.history.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.watchlist_screening.individual.history.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatchlistScreeningIndividualHistoryListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.watchlist_screening.individual.history.list.$post>
        },
      ) =>
        parseResponse(client.watchlist_screening.individual.history.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWatchlistScreeningIndividualHitListKey() {
  return ['watchlist_screening', '/watchlist_screening/individual/hit/list', 'POST'] as const
}

export function usePostWatchlistScreeningIndividualHitList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.individual.hit.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.watchlist_screening.individual.hit.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatchlistScreeningIndividualHitListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.watchlist_screening.individual.hit.list.$post> },
      ) => parseResponse(client.watchlist_screening.individual.hit.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWatchlistScreeningIndividualListKey() {
  return ['watchlist_screening', '/watchlist_screening/individual/list', 'POST'] as const
}

export function usePostWatchlistScreeningIndividualList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.individual.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.watchlist_screening.individual.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatchlistScreeningIndividualListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.watchlist_screening.individual.list.$post> },
      ) => parseResponse(client.watchlist_screening.individual.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWatchlistScreeningIndividualProgramGetKey() {
  return ['watchlist_screening', '/watchlist_screening/individual/program/get', 'POST'] as const
}

export function usePostWatchlistScreeningIndividualProgramGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.individual.program.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.watchlist_screening.individual.program.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatchlistScreeningIndividualProgramGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.watchlist_screening.individual.program.get.$post>
        },
      ) =>
        parseResponse(client.watchlist_screening.individual.program.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWatchlistScreeningIndividualProgramListKey() {
  return ['watchlist_screening', '/watchlist_screening/individual/program/list', 'POST'] as const
}

export function usePostWatchlistScreeningIndividualProgramList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.individual.program.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.watchlist_screening.individual.program.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatchlistScreeningIndividualProgramListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.watchlist_screening.individual.program.list.$post>
        },
      ) =>
        parseResponse(client.watchlist_screening.individual.program.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWatchlistScreeningIndividualReviewCreateKey() {
  return ['watchlist_screening', '/watchlist_screening/individual/review/create', 'POST'] as const
}

export function usePostWatchlistScreeningIndividualReviewCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.individual.review.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.watchlist_screening.individual.review.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatchlistScreeningIndividualReviewCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.watchlist_screening.individual.review.create.$post>
        },
      ) =>
        parseResponse(
          client.watchlist_screening.individual.review.create.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWatchlistScreeningIndividualReviewListKey() {
  return ['watchlist_screening', '/watchlist_screening/individual/review/list', 'POST'] as const
}

export function usePostWatchlistScreeningIndividualReviewList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.individual.review.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.watchlist_screening.individual.review.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatchlistScreeningIndividualReviewListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.watchlist_screening.individual.review.list.$post>
        },
      ) =>
        parseResponse(client.watchlist_screening.individual.review.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWatchlistScreeningIndividualUpdateKey() {
  return ['watchlist_screening', '/watchlist_screening/individual/update', 'POST'] as const
}

export function usePostWatchlistScreeningIndividualUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.watchlist_screening.individual.update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.watchlist_screening.individual.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatchlistScreeningIndividualUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.watchlist_screening.individual.update.$post> },
      ) => parseResponse(client.watchlist_screening.individual.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhookVerificationKeyGetKey() {
  return ['webhook_verification_key', '/webhook_verification_key/get', 'POST'] as const
}

export function usePostWebhookVerificationKeyGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.webhook_verification_key.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhook_verification_key.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookVerificationKeyGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.webhook_verification_key.get.$post> },
      ) => parseResponse(client.webhook_verification_key.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
