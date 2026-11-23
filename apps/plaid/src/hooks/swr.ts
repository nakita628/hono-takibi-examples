import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
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

export function getBeaconKey() {
  return ['beacon'] as const
}

export function getBetaKey() {
  return ['beta'] as const
}

export function getBusinessVerificationKey() {
  return ['business_verification'] as const
}

export function getCashflowReportKey() {
  return ['cashflow_report'] as const
}

export function getCategoriesKey() {
  return ['categories'] as const
}

export function getConsentKey() {
  return ['consent'] as const
}

export function getConsumerReportKey() {
  return ['consumer_report'] as const
}

export function getCraKey() {
  return ['cra'] as const
}

export function getCreditKey() {
  return ['credit'] as const
}

export function getDashboardUserKey() {
  return ['dashboard_user'] as const
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

export function getIdvClassicKey() {
  return ['idv_classic'] as const
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

export function getIssuesKey() {
  return ['issues'] as const
}

export function getItemKey() {
  return ['item'] as const
}

export function getItemsKey() {
  return ['items'] as const
}

export function getLiabilitiesKey() {
  return ['liabilities'] as const
}

export function getLinkKey() {
  return ['link'] as const
}

export function getNetworkKey() {
  return ['network'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
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

export function getProfileKey() {
  return ['profile'] as const
}

export function getProtectKey() {
  return ['protect'] as const
}

export function getSandboxKey() {
  return ['sandbox'] as const
}

export function getSessionKey() {
  return ['session'] as const
}

export function getSignalKey() {
  return ['signal'] as const
}

export function getStatementsKey() {
  return ['statements'] as const
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

export function getUserAccountKey() {
  return ['user_account'] as const
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

export function getPostAssetReportAuditCopyPdfGetKey() {
  return ['asset_report', '/asset_report/audit_copy/pdf/get', 'POST'] as const
}

export function usePostAssetReportAuditCopyPdfGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.asset_report.audit_copy.pdf.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.asset_report.audit_copy.pdf.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetReportAuditCopyPdfGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.asset_report.audit_copy.pdf.get.$post> },
      ) => parseResponse(client.asset_report.audit_copy.pdf.get.$post(arg, clientOptions)),
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

export function getPostCraMonitoringInsightsSubscribeKey() {
  return ['cra', '/cra/monitoring_insights/subscribe', 'POST'] as const
}

export function usePostCraMonitoringInsightsSubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.monitoring_insights.subscribe.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.monitoring_insights.subscribe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraMonitoringInsightsSubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cra.monitoring_insights.subscribe.$post> },
      ) => parseResponse(client.cra.monitoring_insights.subscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraMonitoringInsightsUnsubscribeKey() {
  return ['cra', '/cra/monitoring_insights/unsubscribe', 'POST'] as const
}

export function usePostCraMonitoringInsightsUnsubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.monitoring_insights.unsubscribe.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.monitoring_insights.unsubscribe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraMonitoringInsightsUnsubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cra.monitoring_insights.unsubscribe.$post> },
      ) => parseResponse(client.cra.monitoring_insights.unsubscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraMonitoringInsightsGetKey() {
  return ['cra', '/cra/monitoring_insights/get', 'POST'] as const
}

export function usePostCraMonitoringInsightsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cra.monitoring_insights.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.monitoring_insights.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraMonitoringInsightsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cra.monitoring_insights.get.$post> },
      ) => parseResponse(client.cra.monitoring_insights.get.$post(arg, clientOptions)),
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

export function getPostCraPartnerInsightsGetKey() {
  return ['cra', '/cra/partner_insights/get', 'POST'] as const
}

export function usePostCraPartnerInsightsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cra.partner_insights.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.partner_insights.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraPartnerInsightsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cra.partner_insights.get.$post> },
      ) => parseResponse(client.cra.partner_insights.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraCheckReportIncomeInsightsGetKey() {
  return ['cra', '/cra/check_report/income_insights/get', 'POST'] as const
}

export function usePostCraCheckReportIncomeInsightsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.check_report.income_insights.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.check_report.income_insights.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraCheckReportIncomeInsightsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.cra.check_report.income_insights.get.$post> },
      ) => parseResponse(client.cra.check_report.income_insights.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraCheckReportBaseReportGetKey() {
  return ['cra', '/cra/check_report/base_report/get', 'POST'] as const
}

export function usePostCraCheckReportBaseReportGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.check_report.base_report.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.check_report.base_report.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraCheckReportBaseReportGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cra.check_report.base_report.get.$post> },
      ) => parseResponse(client.cra.check_report.base_report.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraCheckReportPdfGetKey() {
  return ['cra', '/cra/check_report/pdf/get', 'POST'] as const
}

export function usePostCraCheckReportPdfGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cra.check_report.pdf.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.check_report.pdf.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraCheckReportPdfGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cra.check_report.pdf.get.$post> },
      ) => parseResponse(client.cra.check_report.pdf.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraCheckReportCreateKey() {
  return ['cra', '/cra/check_report/create', 'POST'] as const
}

export function usePostCraCheckReportCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cra.check_report.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.check_report.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraCheckReportCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cra.check_report.create.$post> },
      ) => parseResponse(client.cra.check_report.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraCheckReportPartnerInsightsGetKey() {
  return ['cra', '/cra/check_report/partner_insights/get', 'POST'] as const
}

export function usePostCraCheckReportPartnerInsightsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.check_report.partner_insights.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.check_report.partner_insights.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraCheckReportPartnerInsightsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.cra.check_report.partner_insights.get.$post> },
      ) => parseResponse(client.cra.check_report.partner_insights.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraCheckReportCashflowInsightsGetKey() {
  return ['cra', '/cra/check_report/cashflow_insights/get', 'POST'] as const
}

export function usePostCraCheckReportCashflowInsightsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.check_report.cashflow_insights.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.check_report.cashflow_insights.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraCheckReportCashflowInsightsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.cra.check_report.cashflow_insights.get.$post> },
      ) => parseResponse(client.cra.check_report.cashflow_insights.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraCheckReportLendScoreGetKey() {
  return ['cra', '/cra/check_report/lend_score/get', 'POST'] as const
}

export function usePostCraCheckReportLendScoreGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.check_report.lend_score.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.check_report.lend_score.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraCheckReportLendScoreGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cra.check_report.lend_score.get.$post> },
      ) => parseResponse(client.cra.check_report.lend_score.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraCheckReportNetworkInsightsGetKey() {
  return ['cra', '/cra/check_report/network_insights/get', 'POST'] as const
}

export function usePostCraCheckReportNetworkInsightsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.check_report.network_insights.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.check_report.network_insights.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraCheckReportNetworkInsightsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.cra.check_report.network_insights.get.$post> },
      ) => parseResponse(client.cra.check_report.network_insights.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraCheckReportVerificationGetKey() {
  return ['cra', '/cra/check_report/verification/get', 'POST'] as const
}

export function usePostCraCheckReportVerificationGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.check_report.verification.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.check_report.verification.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraCheckReportVerificationGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cra.check_report.verification.get.$post> },
      ) => parseResponse(client.cra.check_report.verification.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraCheckReportVerificationPdfGetKey() {
  return ['cra', '/cra/check_report/verification/pdf/get', 'POST'] as const
}

export function usePostCraCheckReportVerificationPdfGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.check_report.verification.pdf.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.check_report.verification.pdf.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraCheckReportVerificationPdfGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.cra.check_report.verification.pdf.get.$post> },
      ) => parseResponse(client.cra.check_report.verification.pdf.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraLoansApplicationsRegisterKey() {
  return ['cra', '/cra/loans/applications/register', 'POST'] as const
}

export function usePostCraLoansApplicationsRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.loans.applications.register.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.loans.applications.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraLoansApplicationsRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cra.loans.applications.register.$post> },
      ) => parseResponse(client.cra.loans.applications.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraLoansRegisterKey() {
  return ['cra', '/cra/loans/register', 'POST'] as const
}

export function usePostCraLoansRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cra.loans.register.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.loans.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraLoansRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cra.loans.register.$post> }) =>
        parseResponse(client.cra.loans.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraLoansUpdateKey() {
  return ['cra', '/cra/loans/update', 'POST'] as const
}

export function usePostCraLoansUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cra.loans.update.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.loans.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraLoansUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cra.loans.update.$post> }) =>
        parseResponse(client.cra.loans.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraLoansUnregisterKey() {
  return ['cra', '/cra/loans/unregister', 'POST'] as const
}

export function usePostCraLoansUnregister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cra.loans.unregister.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.loans.unregister.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraLoansUnregisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cra.loans.unregister.$post> },
      ) => parseResponse(client.cra.loans.unregister.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraServicingSubscriptionCreateKey() {
  return ['cra', '/cra/servicing/subscription/create', 'POST'] as const
}

export function usePostCraServicingSubscriptionCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.servicing.subscription.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.servicing.subscription.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraServicingSubscriptionCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cra.servicing.subscription.create.$post> },
      ) => parseResponse(client.cra.servicing.subscription.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraServicingSubscriptionDeleteKey() {
  return ['cra', '/cra/servicing/subscription/delete', 'POST'] as const
}

export function usePostCraServicingSubscriptionDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.servicing.subscription.delete.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.servicing.subscription.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraServicingSubscriptionDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cra.servicing.subscription.delete.$post> },
      ) => parseResponse(client.cra.servicing.subscription.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraServicingSubscriptionGetKey() {
  return ['cra', '/cra/servicing/subscription/get', 'POST'] as const
}

export function usePostCraServicingSubscriptionGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.servicing.subscription.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.servicing.subscription.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraServicingSubscriptionGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cra.servicing.subscription.get.$post> },
      ) => parseResponse(client.cra.servicing.subscription.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraServicingSubscriptionListKey() {
  return ['cra', '/cra/servicing/subscription/list', 'POST'] as const
}

export function usePostCraServicingSubscriptionList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.servicing.subscription.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.servicing.subscription.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraServicingSubscriptionListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cra.servicing.subscription.list.$post> },
      ) => parseResponse(client.cra.servicing.subscription.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraServicingSubscriptionUpdateKey() {
  return ['cra', '/cra/servicing/subscription/update', 'POST'] as const
}

export function usePostCraServicingSubscriptionUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.servicing.subscription.update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.servicing.subscription.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraServicingSubscriptionUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cra.servicing.subscription.update.$post> },
      ) => parseResponse(client.cra.servicing.subscription.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraReportCreateKey() {
  return ['cra', '/cra/report/create', 'POST'] as const
}

export function usePostCraReportCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cra.report.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.report.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraReportCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cra.report.create.$post> }) =>
        parseResponse(client.cra.report.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraReportGetKey() {
  return ['cra', '/cra/report/get', 'POST'] as const
}

export function usePostCraReportGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cra.report.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.report.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraReportGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cra.report.get.$post> }) =>
        parseResponse(client.cra.report.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCraCreditProfileReportGetKey() {
  return ['cra', '/cra/credit_profile/report/get', 'POST'] as const
}

export function usePostCraCreditProfileReportGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cra.credit_profile.report.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cra.credit_profile.report.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCraCreditProfileReportGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cra.credit_profile.report.get.$post> },
      ) => parseResponse(client.cra.credit_profile.report.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConsumerReportPdfGetKey() {
  return ['consumer_report', '/consumer_report/pdf/get', 'POST'] as const
}

export function usePostConsumerReportPdfGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.consumer_report.pdf.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.consumer_report.pdf.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConsumerReportPdfGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.consumer_report.pdf.get.$post> },
      ) => parseResponse(client.consumer_report.pdf.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthTokenKey() {
  return ['oauth', '/oauth/token', 'POST'] as const
}

export function usePostOauthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.oauth.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.token.$post> }) =>
        parseResponse(client.oauth.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthIntrospectKey() {
  return ['oauth', '/oauth/introspect', 'POST'] as const
}

export function usePostOauthIntrospect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.introspect.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.introspect.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthIntrospectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.introspect.$post> }) =>
        parseResponse(client.oauth.introspect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthRevokeKey() {
  return ['oauth', '/oauth/revoke', 'POST'] as const
}

export function usePostOauthRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.revoke.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.revoke.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.revoke.$post> }) =>
        parseResponse(client.oauth.revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStatementsListKey() {
  return ['statements', '/statements/list', 'POST'] as const
}

export function usePostStatementsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.statements.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStatementsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.statements.list.$post> }) =>
        parseResponse(client.statements.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStatementsDownloadKey() {
  return ['statements', '/statements/download', 'POST'] as const
}

export function usePostStatementsDownload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.download.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.statements.download.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStatementsDownloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.statements.download.$post> }) =>
        parseResponse(client.statements.download.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStatementsRefreshKey() {
  return ['statements', '/statements/refresh', 'POST'] as const
}

export function usePostStatementsRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.refresh.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.statements.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStatementsRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.statements.refresh.$post> }) =>
        parseResponse(client.statements.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConsentEventsGetKey() {
  return ['consent', '/consent/events/get', 'POST'] as const
}

export function usePostConsentEventsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consent.events.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.consent.events.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConsentEventsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.consent.events.get.$post> }) =>
        parseResponse(client.consent.events.get.$post(arg, clientOptions)),
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

export function getPostItemApplicationUnlinkKey() {
  return ['item', '/item/application/unlink', 'POST'] as const
}

export function usePostItemApplicationUnlink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.item.application.unlink.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.item.application.unlink.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemApplicationUnlinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.item.application.unlink.$post> },
      ) => parseResponse(client.item.application.unlink.$post(arg, clientOptions)),
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

export function getPostUserAccountSessionGetKey() {
  return ['user_account', '/user_account/session/get', 'POST'] as const
}

export function usePostUserAccountSessionGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_account.session.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_account.session.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserAccountSessionGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user_account.session.get.$post> },
      ) => parseResponse(client.user_account.session.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserAccountSessionEventSendKey() {
  return ['user_account', '/user_account/session/event/send', 'POST'] as const
}

export function usePostUserAccountSessionEventSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_account.session.event.send.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_account.session.event.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserAccountSessionEventSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user_account.session.event.send.$post> },
      ) => parseResponse(client.user_account.session.event.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProfileNetworkStatusGetKey() {
  return ['profile', '/profile/network_status/get', 'POST'] as const
}

export function usePostProfileNetworkStatusGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.profile.network_status.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.profile.network_status.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProfileNetworkStatusGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.profile.network_status.get.$post> },
      ) => parseResponse(client.profile.network_status.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNetworkStatusGetKey() {
  return ['network', '/network/status/get', 'POST'] as const
}

export function usePostNetworkStatusGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.status.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.network.status.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworkStatusGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.network.status.get.$post> }) =>
        parseResponse(client.network.status.get.$post(arg, clientOptions)),
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

export function getPostAuthVerifyKey() {
  return ['auth', '/auth/verify', 'POST'] as const
}

export function usePostAuthVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.verify.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.auth.verify.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.verify.$post> }) =>
        parseResponse(client.auth.verify.$post(arg, clientOptions)),
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

export function getPostSandboxTransactionsCreateKey() {
  return ['sandbox', '/sandbox/transactions/create', 'POST'] as const
}

export function usePostSandboxTransactionsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.transactions.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.transactions.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxTransactionsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.transactions.create.$post> },
      ) => parseResponse(client.sandbox.transactions.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCashflowReportRefreshKey() {
  return ['cashflow_report', '/cashflow_report/refresh', 'POST'] as const
}

export function usePostCashflowReportRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cashflow_report.refresh.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cashflow_report.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCashflowReportRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cashflow_report.refresh.$post> },
      ) => parseResponse(client.cashflow_report.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCashflowReportGetKey() {
  return ['cashflow_report', '/cashflow_report/get', 'POST'] as const
}

export function usePostCashflowReportGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cashflow_report.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cashflow_report.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCashflowReportGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cashflow_report.get.$post> }) =>
        parseResponse(client.cashflow_report.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCashflowReportTransactionsGetKey() {
  return ['cashflow_report', '/cashflow_report/transactions/get', 'POST'] as const
}

export function usePostCashflowReportTransactionsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cashflow_report.transactions.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cashflow_report.transactions.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCashflowReportTransactionsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cashflow_report.transactions.get.$post> },
      ) => parseResponse(client.cashflow_report.transactions.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCashflowReportInsightsGetKey() {
  return ['cashflow_report', '/cashflow_report/insights/get', 'POST'] as const
}

export function usePostCashflowReportInsightsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cashflow_report.insights.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cashflow_report.insights.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCashflowReportInsightsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cashflow_report.insights.get.$post> },
      ) => parseResponse(client.cashflow_report.insights.get.$post(arg, clientOptions)),
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

export function getPostUserTransactionsRefreshKey() {
  return ['user', '/user/transactions/refresh', 'POST'] as const
}

export function usePostUserTransactionsRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.transactions.refresh.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.transactions.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserTransactionsRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user.transactions.refresh.$post> },
      ) => parseResponse(client.user.transactions.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserFinancialDataRefreshKey() {
  return ['user', '/user/financial_data/refresh', 'POST'] as const
}

export function usePostUserFinancialDataRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.financial_data.refresh.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.financial_data.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserFinancialDataRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user.financial_data.refresh.$post> },
      ) => parseResponse(client.user.financial_data.refresh.$post(arg, clientOptions)),
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

export function getPostItemProductsTerminateKey() {
  return ['item', '/item/products/terminate', 'POST'] as const
}

export function usePostItemProductsTerminate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.item.products.terminate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.item.products.terminate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemProductsTerminateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.item.products.terminate.$post> },
      ) => parseResponse(client.item.products.terminate.$post(arg, clientOptions)),
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

export function getPostSandboxUserFireWebhookKey() {
  return ['sandbox', '/sandbox/user/fire_webhook', 'POST'] as const
}

export function usePostSandboxUserFireWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.user.fire_webhook.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.user.fire_webhook.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxUserFireWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.user.fire_webhook.$post> },
      ) => parseResponse(client.sandbox.user.fire_webhook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
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

export function getPostIdentityDocumentsUploadsGetKey() {
  return ['identity', '/identity/documents/uploads/get', 'POST'] as const
}

export function usePostIdentityDocumentsUploadsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.identity.documents.uploads.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.identity.documents.uploads.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdentityDocumentsUploadsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.identity.documents.uploads.get.$post> },
      ) => parseResponse(client.identity.documents.uploads.get.$post(arg, clientOptions)),
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

export function getPostIdentityMatchListKey() {
  return ['identity', '/identity/match/list', 'POST'] as const
}

export function usePostIdentityMatchList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identity.match.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.identity.match.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdentityMatchListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.identity.match.list.$post> }) =>
        parseResponse(client.identity.match.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIdentityRefreshKey() {
  return ['identity', '/identity/refresh', 'POST'] as const
}

export function usePostIdentityRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identity.refresh.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.identity.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdentityRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.identity.refresh.$post> }) =>
        parseResponse(client.identity.refresh.$post(arg, clientOptions)),
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

export function getPostBeaconAccountRiskV1EvaluateKey() {
  return ['beacon', '/beacon/account_risk/v1/evaluate', 'POST'] as const
}

export function usePostBeaconAccountRiskV1Evaluate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beacon.account_risk.v1.evaluate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beacon.account_risk.v1.evaluate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBeaconAccountRiskV1EvaluateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beacon.account_risk.v1.evaluate.$post> },
      ) => parseResponse(client.beacon.account_risk.v1.evaluate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBeaconUserCreateKey() {
  return ['beacon', '/beacon/user/create', 'POST'] as const
}

export function usePostBeaconUserCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beacon.user.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.beacon.user.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBeaconUserCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.beacon.user.create.$post> }) =>
        parseResponse(client.beacon.user.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBeaconUserGetKey() {
  return ['beacon', '/beacon/user/get', 'POST'] as const
}

export function usePostBeaconUserGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beacon.user.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.beacon.user.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBeaconUserGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.beacon.user.get.$post> }) =>
        parseResponse(client.beacon.user.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBeaconUserReviewKey() {
  return ['beacon', '/beacon/user/review', 'POST'] as const
}

export function usePostBeaconUserReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beacon.user.review.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.beacon.user.review.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBeaconUserReviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.beacon.user.review.$post> }) =>
        parseResponse(client.beacon.user.review.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBeaconReportCreateKey() {
  return ['beacon', '/beacon/report/create', 'POST'] as const
}

export function usePostBeaconReportCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beacon.report.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beacon.report.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBeaconReportCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beacon.report.create.$post> },
      ) => parseResponse(client.beacon.report.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBeaconReportListKey() {
  return ['beacon', '/beacon/report/list', 'POST'] as const
}

export function usePostBeaconReportList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beacon.report.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.beacon.report.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBeaconReportListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.beacon.report.list.$post> }) =>
        parseResponse(client.beacon.report.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBeaconReportSyndicationListKey() {
  return ['beacon', '/beacon/report_syndication/list', 'POST'] as const
}

export function usePostBeaconReportSyndicationList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beacon.report_syndication.list.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beacon.report_syndication.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBeaconReportSyndicationListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beacon.report_syndication.list.$post> },
      ) => parseResponse(client.beacon.report_syndication.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBeaconReportGetKey() {
  return ['beacon', '/beacon/report/get', 'POST'] as const
}

export function usePostBeaconReportGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beacon.report.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.beacon.report.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBeaconReportGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.beacon.report.get.$post> }) =>
        parseResponse(client.beacon.report.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBeaconReportSyndicationGetKey() {
  return ['beacon', '/beacon/report_syndication/get', 'POST'] as const
}

export function usePostBeaconReportSyndicationGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beacon.report_syndication.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beacon.report_syndication.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBeaconReportSyndicationGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beacon.report_syndication.get.$post> },
      ) => parseResponse(client.beacon.report_syndication.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBeaconUserUpdateKey() {
  return ['beacon', '/beacon/user/update', 'POST'] as const
}

export function usePostBeaconUserUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beacon.user.update.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.beacon.user.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBeaconUserUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.beacon.user.update.$post> }) =>
        parseResponse(client.beacon.user.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBeaconDuplicateGetKey() {
  return ['beacon', '/beacon/duplicate/get', 'POST'] as const
}

export function usePostBeaconDuplicateGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beacon.duplicate.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beacon.duplicate.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBeaconDuplicateGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beacon.duplicate.get.$post> },
      ) => parseResponse(client.beacon.duplicate.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIdentityVerificationAutofillCreateKey() {
  return ['identity_verification', '/identity_verification/autofill/create', 'POST'] as const
}

export function usePostIdentityVerificationAutofillCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.identity_verification.autofill.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.identity_verification.autofill.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdentityVerificationAutofillCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.identity_verification.autofill.create.$post> },
      ) => parseResponse(client.identity_verification.autofill.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBeaconUserHistoryListKey() {
  return ['beacon', '/beacon/user/history/list', 'POST'] as const
}

export function usePostBeaconUserHistoryList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beacon.user.history.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beacon.user.history.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBeaconUserHistoryListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beacon.user.history.list.$post> },
      ) => parseResponse(client.beacon.user.history.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBeaconUserAccountInsightsGetKey() {
  return ['beacon', '/beacon/user/account_insights/get', 'POST'] as const
}

export function usePostBeaconUserAccountInsightsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beacon.user.account_insights.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beacon.user.account_insights.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBeaconUserAccountInsightsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beacon.user.account_insights.get.$post> },
      ) => parseResponse(client.beacon.user.account_insights.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProtectUserInsightsGetKey() {
  return ['protect', '/protect/user/insights/get', 'POST'] as const
}

export function usePostProtectUserInsightsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.protect.user.insights.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.protect.user.insights.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProtectUserInsightsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.protect.user.insights.get.$post> },
      ) => parseResponse(client.protect.user.insights.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProtectReportCreateKey() {
  return ['protect', '/protect/report/create', 'POST'] as const
}

export function usePostProtectReportCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.protect.report.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.protect.report.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProtectReportCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.protect.report.create.$post> },
      ) => parseResponse(client.protect.report.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProtectCashAdvanceDecisionCreateKey() {
  return ['protect', '/protect/cash_advance/decision/create', 'POST'] as const
}

export function usePostProtectCashAdvanceDecisionCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.protect.cash_advance.decision.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.protect.cash_advance.decision.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProtectCashAdvanceDecisionCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.protect.cash_advance.decision.create.$post> },
      ) => parseResponse(client.protect.cash_advance.decision.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProtectCashAdvanceRepaymentCreateKey() {
  return ['protect', '/protect/cash_advance/repayment/create', 'POST'] as const
}

export function usePostProtectCashAdvanceRepaymentCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.protect.cash_advance.repayment.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.protect.cash_advance.repayment.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProtectCashAdvanceRepaymentCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.protect.cash_advance.repayment.create.$post> },
      ) => parseResponse(client.protect.cash_advance.repayment.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProtectCashAdvanceFeedbackUploadKey() {
  return ['protect', '/protect/cash_advance/feedback/upload', 'POST'] as const
}

export function usePostProtectCashAdvanceFeedbackUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.protect.cash_advance.feedback.upload.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.protect.cash_advance.feedback.upload.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProtectCashAdvanceFeedbackUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.protect.cash_advance.feedback.upload.$post> },
      ) => parseResponse(client.protect.cash_advance.feedback.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProtectComputeKey() {
  return ['protect', '/protect/compute', 'POST'] as const
}

export function usePostProtectCompute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.protect.compute.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.protect.compute.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProtectComputeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.protect.compute.$post> }) =>
        parseResponse(client.protect.compute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProtectEventSendKey() {
  return ['protect', '/protect/event/send', 'POST'] as const
}

export function usePostProtectEventSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.protect.event.send.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.protect.event.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProtectEventSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.protect.event.send.$post> }) =>
        parseResponse(client.protect.event.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProtectEventGetKey() {
  return ['protect', '/protect/event/get', 'POST'] as const
}

export function usePostProtectEventGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.protect.event.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.protect.event.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProtectEventGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.protect.event.get.$post> }) =>
        parseResponse(client.protect.event.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessVerificationGetKey() {
  return ['business_verification', '/business_verification/get', 'POST'] as const
}

export function usePostBusinessVerificationGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.business_verification.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.business_verification.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessVerificationGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.business_verification.get.$post> },
      ) => parseResponse(client.business_verification.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBusinessVerificationCreateKey() {
  return ['business_verification', '/business_verification/create', 'POST'] as const
}

export function usePostBusinessVerificationCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.business_verification.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.business_verification.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessVerificationCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.business_verification.create.$post> },
      ) => parseResponse(client.business_verification.create.$post(arg, clientOptions)),
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

export function getPostProcessorAccountGetKey() {
  return ['processor', '/processor/account/get', 'POST'] as const
}

export function usePostProcessorAccountGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.processor.account.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.account.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorAccountGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.processor.account.get.$post> },
      ) => parseResponse(client.processor.account.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProcessorInvestmentsHoldingsGetKey() {
  return ['processor', '/processor/investments/holdings/get', 'POST'] as const
}

export function usePostProcessorInvestmentsHoldingsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.investments.holdings.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.investments.holdings.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorInvestmentsHoldingsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.processor.investments.holdings.get.$post> },
      ) => parseResponse(client.processor.investments.holdings.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProcessorInvestmentsAuthGetKey() {
  return ['processor', '/processor/investments/auth/get', 'POST'] as const
}

export function usePostProcessorInvestmentsAuthGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.investments.auth.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.investments.auth.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorInvestmentsAuthGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.processor.investments.auth.get.$post> },
      ) => parseResponse(client.processor.investments.auth.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProcessorInvestmentsTransactionsGetKey() {
  return ['processor', '/processor/investments/transactions/get', 'POST'] as const
}

export function usePostProcessorInvestmentsTransactionsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.investments.transactions.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.investments.transactions.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorInvestmentsTransactionsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.processor.investments.transactions.get.$post> },
      ) => parseResponse(client.processor.investments.transactions.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProcessorTransactionsGetKey() {
  return ['processor', '/processor/transactions/get', 'POST'] as const
}

export function usePostProcessorTransactionsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.processor.transactions.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.transactions.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorTransactionsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.processor.transactions.get.$post> },
      ) => parseResponse(client.processor.transactions.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProcessorTransactionsSyncKey() {
  return ['processor', '/processor/transactions/sync', 'POST'] as const
}

export function usePostProcessorTransactionsSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.processor.transactions.sync.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.transactions.sync.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorTransactionsSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.processor.transactions.sync.$post> },
      ) => parseResponse(client.processor.transactions.sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProcessorTransactionsRefreshKey() {
  return ['processor', '/processor/transactions/refresh', 'POST'] as const
}

export function usePostProcessorTransactionsRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.transactions.refresh.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.transactions.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorTransactionsRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.processor.transactions.refresh.$post> },
      ) => parseResponse(client.processor.transactions.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProcessorTransactionsRecurringGetKey() {
  return ['processor', '/processor/transactions/recurring/get', 'POST'] as const
}

export function usePostProcessorTransactionsRecurringGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.transactions.recurring.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.transactions.recurring.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorTransactionsRecurringGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.processor.transactions.recurring.get.$post> },
      ) => parseResponse(client.processor.transactions.recurring.get.$post(arg, clientOptions)),
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

export function getPostProcessorSignalPrepareKey() {
  return ['processor', '/processor/signal/prepare', 'POST'] as const
}

export function usePostProcessorSignalPrepare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.processor.signal.prepare.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.signal.prepare.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorSignalPrepareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.processor.signal.prepare.$post> },
      ) => parseResponse(client.processor.signal.prepare.$post(arg, clientOptions)),
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

export function getPostProcessorLiabilitiesGetKey() {
  return ['processor', '/processor/liabilities/get', 'POST'] as const
}

export function usePostProcessorLiabilitiesGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.processor.liabilities.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.liabilities.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorLiabilitiesGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.processor.liabilities.get.$post> },
      ) => parseResponse(client.processor.liabilities.get.$post(arg, clientOptions)),
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

export function getPostProcessorIdentityMatchKey() {
  return ['processor', '/processor/identity/match', 'POST'] as const
}

export function usePostProcessorIdentityMatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.processor.identity.match.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.identity.match.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorIdentityMatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.processor.identity.match.$post> },
      ) => parseResponse(client.processor.identity.match.$post(arg, clientOptions)),
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

export function getPostBetaWebhookEventsListKey() {
  return ['beta', '/beta/webhook_events/list', 'POST'] as const
}

export function usePostBetaWebhookEventsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beta.webhook_events.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beta.webhook_events.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetaWebhookEventsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beta.webhook_events.list.$post> },
      ) => parseResponse(client.beta.webhook_events.list.$post(arg, clientOptions)),
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

export function getPostSandboxItemApplicationSeedKey() {
  return ['sandbox', '/sandbox/item/application/seed', 'POST'] as const
}

export function usePostSandboxItemApplicationSeed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.item.application.seed.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.item.application.seed.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxItemApplicationSeedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.item.application.seed.$post> },
      ) => parseResponse(client.sandbox.item.application.seed.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxFdxConsentSeedKey() {
  return ['sandbox', '/sandbox/fdx/consent/seed', 'POST'] as const
}

export function usePostSandboxFdxConsentSeed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.fdx.consent.seed.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.fdx.consent.seed.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxFdxConsentSeedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.fdx.consent.seed.$post> },
      ) => parseResponse(client.sandbox.fdx.consent.seed.$post(arg, clientOptions)),
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

export function getPostSandboxUserResetLoginKey() {
  return ['sandbox', '/sandbox/user/reset_login', 'POST'] as const
}

export function usePostSandboxUserResetLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.user.reset_login.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.user.reset_login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxUserResetLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.user.reset_login.$post> },
      ) => parseResponse(client.sandbox.user.reset_login.$post(arg, clientOptions)),
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

export function getPostUserGetKey() {
  return ['user', '/user/get', 'POST'] as const
}

export function usePostUserGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.get.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.user.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.get.$post> }) =>
        parseResponse(client.user.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserIdentityRemoveKey() {
  return ['user', '/user/identity/remove', 'POST'] as const
}

export function usePostUserIdentityRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.identity.remove.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.identity.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserIdentityRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user.identity.remove.$post> },
      ) => parseResponse(client.user.identity.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserUpdateKey() {
  return ['user', '/user/update', 'POST'] as const
}

export function usePostUserUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.update.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.user.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.update.$post> }) =>
        parseResponse(client.user.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserRemoveKey() {
  return ['user', '/user/remove', 'POST'] as const
}

export function usePostUserRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.remove.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.user.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.remove.$post> }) =>
        parseResponse(client.user.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserProductsTerminateKey() {
  return ['user', '/user/products/terminate', 'POST'] as const
}

export function usePostUserProductsTerminate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.products.terminate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.products.terminate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserProductsTerminateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user.products.terminate.$post> },
      ) => parseResponse(client.user.products.terminate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserTransferLimitsGetKey() {
  return ['user', '/user/transfer/limits/get', 'POST'] as const
}

export function usePostUserTransferLimitsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.transfer.limits.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.transfer.limits.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserTransferLimitsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user.transfer.limits.get.$post> },
      ) => parseResponse(client.user.transfer.limits.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserItemsGetKey() {
  return ['user', '/user/items/get', 'POST'] as const
}

export function usePostUserItemsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.items.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.items.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserItemsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.items.get.$post> }) =>
        parseResponse(client.user.items.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserItemsAssociateKey() {
  return ['user', '/user/items/associate', 'POST'] as const
}

export function usePostUserItemsAssociate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.items.associate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.items.associate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserItemsAssociateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user.items.associate.$post> },
      ) => parseResponse(client.user.items.associate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserItemsRemoveKey() {
  return ['user', '/user/items/remove', 'POST'] as const
}

export function usePostUserItemsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.items.remove.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.items.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserItemsRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.items.remove.$post> }) =>
        parseResponse(client.user.items.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserThirdPartyTokenCreateKey() {
  return ['user', '/user/third_party_token/create', 'POST'] as const
}

export function usePostUserThirdPartyTokenCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.third_party_token.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.third_party_token.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserThirdPartyTokenCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user.third_party_token.create.$post> },
      ) => parseResponse(client.user.third_party_token.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserThirdPartyTokenRemoveKey() {
  return ['user', '/user/third_party_token/remove', 'POST'] as const
}

export function usePostUserThirdPartyTokenRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.third_party_token.remove.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.third_party_token.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserThirdPartyTokenRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user.third_party_token.remove.$post> },
      ) => parseResponse(client.user.third_party_token.remove.$post(arg, clientOptions)),
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

export function getPostInvestmentsRefreshKey() {
  return ['investments', '/investments/refresh', 'POST'] as const
}

export function usePostInvestmentsRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.investments.refresh.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.investments.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvestmentsRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.investments.refresh.$post> }) =>
        parseResponse(client.investments.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvestmentsAuthGetKey() {
  return ['investments', '/investments/auth/get', 'POST'] as const
}

export function usePostInvestmentsAuthGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.investments.auth.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.investments.auth.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvestmentsAuthGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.investments.auth.get.$post> },
      ) => parseResponse(client.investments.auth.get.$post(arg, clientOptions)),
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

export function getPostProcessorTokenPermissionsSetKey() {
  return ['processor', '/processor/token/permissions/set', 'POST'] as const
}

export function usePostProcessorTokenPermissionsSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.token.permissions.set.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.token.permissions.set.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorTokenPermissionsSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.processor.token.permissions.set.$post> },
      ) => parseResponse(client.processor.token.permissions.set.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProcessorTokenPermissionsGetKey() {
  return ['processor', '/processor/token/permissions/get', 'POST'] as const
}

export function usePostProcessorTokenPermissionsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.token.permissions.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.token.permissions.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorTokenPermissionsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.processor.token.permissions.get.$post> },
      ) => parseResponse(client.processor.token.permissions.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProcessorTokenWebhookUpdateKey() {
  return ['processor', '/processor/token/webhook/update', 'POST'] as const
}

export function usePostProcessorTokenWebhookUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.token.webhook.update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.processor.token.webhook.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProcessorTokenWebhookUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.processor.token.webhook.update.$post> },
      ) => parseResponse(client.processor.token.webhook.update.$post(arg, clientOptions)),
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

export function getPostSessionTokenCreateKey() {
  return ['session', '/session/token/create', 'POST'] as const
}

export function usePostSessionTokenCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.session.token.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.session.token.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionTokenCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.session.token.create.$post> },
      ) => parseResponse(client.session.token.create.$post(arg, clientOptions)),
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

export function getPostTransferAuthorizationCancelKey() {
  return ['transfer', '/transfer/authorization/cancel', 'POST'] as const
}

export function usePostTransferAuthorizationCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.authorization.cancel.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.authorization.cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferAuthorizationCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.authorization.cancel.$post> },
      ) => parseResponse(client.transfer.authorization.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferBalanceGetKey() {
  return ['transfer', '/transfer/balance/get', 'POST'] as const
}

export function usePostTransferBalanceGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.balance.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.balance.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferBalanceGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.balance.get.$post> },
      ) => parseResponse(client.transfer.balance.get.$post(arg, clientOptions)),
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

export function getPostTransferConfigurationGetKey() {
  return ['transfer', '/transfer/configuration/get', 'POST'] as const
}

export function usePostTransferConfigurationGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.configuration.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.configuration.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferConfigurationGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.configuration.get.$post> },
      ) => parseResponse(client.transfer.configuration.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferLedgerGetKey() {
  return ['transfer', '/transfer/ledger/get', 'POST'] as const
}

export function usePostTransferLedgerGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.ledger.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.ledger.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferLedgerGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transfer.ledger.get.$post> }) =>
        parseResponse(client.transfer.ledger.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferLedgerDistributeKey() {
  return ['transfer', '/transfer/ledger/distribute', 'POST'] as const
}

export function usePostTransferLedgerDistribute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.ledger.distribute.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.ledger.distribute.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferLedgerDistributeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.ledger.distribute.$post> },
      ) => parseResponse(client.transfer.ledger.distribute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferLedgerDepositKey() {
  return ['transfer', '/transfer/ledger/deposit', 'POST'] as const
}

export function usePostTransferLedgerDeposit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.ledger.deposit.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.ledger.deposit.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferLedgerDepositKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.ledger.deposit.$post> },
      ) => parseResponse(client.transfer.ledger.deposit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferLedgerWithdrawKey() {
  return ['transfer', '/transfer/ledger/withdraw', 'POST'] as const
}

export function usePostTransferLedgerWithdraw<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.ledger.withdraw.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.ledger.withdraw.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferLedgerWithdrawKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.ledger.withdraw.$post> },
      ) => parseResponse(client.transfer.ledger.withdraw.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferOriginatorFundingAccountUpdateKey() {
  return ['transfer', '/transfer/originator/funding_account/update', 'POST'] as const
}

export function usePostTransferOriginatorFundingAccountUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transfer.originator.funding_account.update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.originator.funding_account.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferOriginatorFundingAccountUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.transfer.originator.funding_account.update.$post>
        },
      ) =>
        parseResponse(client.transfer.originator.funding_account.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferOriginatorFundingAccountCreateKey() {
  return ['transfer', '/transfer/originator/funding_account/create', 'POST'] as const
}

export function usePostTransferOriginatorFundingAccountCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transfer.originator.funding_account.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.originator.funding_account.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferOriginatorFundingAccountCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.transfer.originator.funding_account.create.$post>
        },
      ) =>
        parseResponse(client.transfer.originator.funding_account.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferMetricsGetKey() {
  return ['transfer', '/transfer/metrics/get', 'POST'] as const
}

export function usePostTransferMetricsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.metrics.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.metrics.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferMetricsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.metrics.get.$post> },
      ) => parseResponse(client.transfer.metrics.get.$post(arg, clientOptions)),
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

export function getPostTransferLedgerEventListKey() {
  return ['transfer', '/transfer/ledger/event/list', 'POST'] as const
}

export function usePostTransferLedgerEventList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.ledger.event.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.ledger.event.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferLedgerEventListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.ledger.event.list.$post> },
      ) => parseResponse(client.transfer.ledger.event.list.$post(arg, clientOptions)),
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

export function getPostTransferPlatformRequirementSubmitKey() {
  return ['transfer', '/transfer/platform/requirement/submit', 'POST'] as const
}

export function usePostTransferPlatformRequirementSubmit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transfer.platform.requirement.submit.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.platform.requirement.submit.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferPlatformRequirementSubmitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.transfer.platform.requirement.submit.$post> },
      ) => parseResponse(client.transfer.platform.requirement.submit.$post(arg, clientOptions)),
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

export function getPostTransferDiligenceSubmitKey() {
  return ['transfer', '/transfer/diligence/submit', 'POST'] as const
}

export function usePostTransferDiligenceSubmit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.diligence.submit.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.diligence.submit.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferDiligenceSubmitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.diligence.submit.$post> },
      ) => parseResponse(client.transfer.diligence.submit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferDiligenceDocumentUploadKey() {
  return ['transfer', '/transfer/diligence/document/upload', 'POST'] as const
}

export function usePostTransferDiligenceDocumentUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transfer.diligence.document.upload.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.diligence.document.upload.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferDiligenceDocumentUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.diligence.document.upload.$post> },
      ) => parseResponse(client.transfer.diligence.document.upload.$post(arg, clientOptions)),
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

export function getPostTransferReturnRecoverKey() {
  return ['transfer', '/transfer/return/recover', 'POST'] as const
}

export function usePostTransferReturnRecover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.return.recover.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.return.recover.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferReturnRecoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.return.recover.$post> },
      ) => parseResponse(client.transfer.return.recover.$post(arg, clientOptions)),
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

export function getPostTransferPlatformOriginatorCreateKey() {
  return ['transfer', '/transfer/platform/originator/create', 'POST'] as const
}

export function usePostTransferPlatformOriginatorCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transfer.platform.originator.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.platform.originator.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferPlatformOriginatorCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.platform.originator.create.$post> },
      ) => parseResponse(client.transfer.platform.originator.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferPlatformPersonCreateKey() {
  return ['transfer', '/transfer/platform/person/create', 'POST'] as const
}

export function usePostTransferPlatformPersonCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transfer.platform.person.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.transfer.platform.person.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferPlatformPersonCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.transfer.platform.person.create.$post> },
      ) => parseResponse(client.transfer.platform.person.create.$post(arg, clientOptions)),
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

export function getPostSandboxTransferRefundSimulateKey() {
  return ['sandbox', '/sandbox/transfer/refund/simulate', 'POST'] as const
}

export function usePostSandboxTransferRefundSimulate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.transfer.refund.simulate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.transfer.refund.simulate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxTransferRefundSimulateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.transfer.refund.simulate.$post> },
      ) => parseResponse(client.sandbox.transfer.refund.simulate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxTransferLedgerSimulateAvailableKey() {
  return ['sandbox', '/sandbox/transfer/ledger/simulate_available', 'POST'] as const
}

export function usePostSandboxTransferLedgerSimulateAvailable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.transfer.ledger.simulate_available.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.transfer.ledger.simulate_available.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxTransferLedgerSimulateAvailableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.sandbox.transfer.ledger.simulate_available.$post>
        },
      ) =>
        parseResponse(client.sandbox.transfer.ledger.simulate_available.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxTransferLedgerDepositSimulateKey() {
  return ['sandbox', '/sandbox/transfer/ledger/deposit/simulate', 'POST'] as const
}

export function usePostSandboxTransferLedgerDepositSimulate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.transfer.ledger.deposit.simulate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.transfer.ledger.deposit.simulate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxTransferLedgerDepositSimulateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.sandbox.transfer.ledger.deposit.simulate.$post> },
      ) => parseResponse(client.sandbox.transfer.ledger.deposit.simulate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxTransferLedgerWithdrawSimulateKey() {
  return ['sandbox', '/sandbox/transfer/ledger/withdraw/simulate', 'POST'] as const
}

export function usePostSandboxTransferLedgerWithdrawSimulate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.transfer.ledger.withdraw.simulate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.transfer.ledger.withdraw.simulate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxTransferLedgerWithdrawSimulateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.sandbox.transfer.ledger.withdraw.simulate.$post> },
      ) =>
        parseResponse(client.sandbox.transfer.ledger.withdraw.simulate.$post(arg, clientOptions)),
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

export function getPostSandboxPaymentSimulateKey() {
  return ['sandbox', '/sandbox/payment/simulate', 'POST'] as const
}

export function usePostSandboxPaymentSimulate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.payment.simulate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.payment.simulate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxPaymentSimulateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.payment.simulate.$post> },
      ) => parseResponse(client.sandbox.payment.simulate.$post(arg, clientOptions)),
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

export function getPostCreditBankIncomeWebhookUpdateKey() {
  return ['credit', '/credit/bank_income/webhook/update', 'POST'] as const
}

export function usePostCreditBankIncomeWebhookUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit.bank_income.webhook.update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.bank_income.webhook.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditBankIncomeWebhookUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.credit.bank_income.webhook.update.$post> },
      ) => parseResponse(client.credit.bank_income.webhook.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditPayrollIncomeParsingConfigUpdateKey() {
  return ['credit', '/credit/payroll_income/parsing_config/update', 'POST'] as const
}

export function usePostCreditPayrollIncomeParsingConfigUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit.payroll_income.parsing_config.update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.payroll_income.parsing_config.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditPayrollIncomeParsingConfigUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.credit.payroll_income.parsing_config.update.$post>
        },
      ) =>
        parseResponse(client.credit.payroll_income.parsing_config.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreditBankStatementsUploadsGetKey() {
  return ['credit', '/credit/bank_statements/uploads/get', 'POST'] as const
}

export function usePostCreditBankStatementsUploadsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit.bank_statements.uploads.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.bank_statements.uploads.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditBankStatementsUploadsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.credit.bank_statements.uploads.get.$post> },
      ) => parseResponse(client.credit.bank_statements.uploads.get.$post(arg, clientOptions)),
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

export function getPostCreditPayrollIncomeRiskSignalsGetKey() {
  return ['credit', '/credit/payroll_income/risk_signals/get', 'POST'] as const
}

export function usePostCreditPayrollIncomeRiskSignalsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit.payroll_income.risk_signals.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.payroll_income.risk_signals.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditPayrollIncomeRiskSignalsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.credit.payroll_income.risk_signals.get.$post> },
      ) => parseResponse(client.credit.payroll_income.risk_signals.get.$post(arg, clientOptions)),
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

export function getPostCreditRelayPdfGetKey() {
  return ['credit', '/credit/relay/pdf/get', 'POST'] as const
}

export function usePostCreditRelayPdfGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credit.relay.pdf.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.credit.relay.pdf.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreditRelayPdfGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.credit.relay.pdf.get.$post> },
      ) => parseResponse(client.credit.relay.pdf.get.$post(arg, clientOptions)),
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

export function getPostSandboxBankIncomeFireWebhookKey() {
  return ['sandbox', '/sandbox/bank_income/fire_webhook', 'POST'] as const
}

export function usePostSandboxBankIncomeFireWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.bank_income.fire_webhook.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.bank_income.fire_webhook.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxBankIncomeFireWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.bank_income.fire_webhook.$post> },
      ) => parseResponse(client.sandbox.bank_income.fire_webhook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxCraCashflowUpdatesUpdateKey() {
  return ['sandbox', '/sandbox/cra/cashflow_updates/update', 'POST'] as const
}

export function usePostSandboxCraCashflowUpdatesUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.cra.cashflow_updates.update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.cra.cashflow_updates.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxCraCashflowUpdatesUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.cra.cashflow_updates.update.$post> },
      ) => parseResponse(client.sandbox.cra.cashflow_updates.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxCraServicingSimulateKey() {
  return ['sandbox', '/sandbox/cra/servicing/simulate', 'POST'] as const
}

export function usePostSandboxCraServicingSimulate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.cra.servicing.simulate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.cra.servicing.simulate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxCraServicingSimulateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sandbox.cra.servicing.simulate.$post> },
      ) => parseResponse(client.sandbox.cra.servicing.simulate.$post(arg, clientOptions)),
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

export function getPostSignalScheduleKey() {
  return ['signal', '/signal/schedule', 'POST'] as const
}

export function usePostSignalSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signal.schedule.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.signal.schedule.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignalScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.signal.schedule.$post> }) =>
        parseResponse(client.signal.schedule.$post(arg, clientOptions)),
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

export function getPostBetaTransactionsUserInsightsV1GetKey() {
  return ['beta', '/beta/transactions/user_insights/v1/get', 'POST'] as const
}

export function usePostBetaTransactionsUserInsightsV1Get<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beta.transactions.user_insights.v1.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beta.transactions.user_insights.v1.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetaTransactionsUserInsightsV1GetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.beta.transactions.user_insights.v1.get.$post> },
      ) => parseResponse(client.beta.transactions.user_insights.v1.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBetaEwaReportV1GetKey() {
  return ['beta', '/beta/ewa_report/v1/get', 'POST'] as const
}

export function usePostBetaEwaReportV1Get<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beta.ewa_report.v1.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beta.ewa_report.v1.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetaEwaReportV1GetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beta.ewa_report.v1.get.$post> },
      ) => parseResponse(client.beta.ewa_report.v1.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBetaCashAdvanceIncomeInsightsV1GetKey() {
  return ['beta', '/beta/cash_advance/income_insights/v1/get', 'POST'] as const
}

export function usePostBetaCashAdvanceIncomeInsightsV1Get<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beta.cash_advance.income_insights.v1.get.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beta.cash_advance.income_insights.v1.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetaCashAdvanceIncomeInsightsV1GetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.beta.cash_advance.income_insights.v1.get.$post> },
      ) => parseResponse(client.beta.cash_advance.income_insights.v1.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBetaIssuesV1GetKey() {
  return ['beta', '/beta/issues/v1/get', 'POST'] as const
}

export function usePostBetaIssuesV1Get<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beta.issues.v1.get.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.beta.issues.v1.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetaIssuesV1GetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.beta.issues.v1.get.$post> }) =>
        parseResponse(client.beta.issues.v1.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBetaIssuesV1ListKey() {
  return ['beta', '/beta/issues/v1/list', 'POST'] as const
}

export function usePostBetaIssuesV1List<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beta.issues.v1.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.beta.issues.v1.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetaIssuesV1ListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.beta.issues.v1.list.$post> }) =>
        parseResponse(client.beta.issues.v1.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBetaIssuesV1MatchKey() {
  return ['beta', '/beta/issues/v1/match', 'POST'] as const
}

export function usePostBetaIssuesV1Match<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beta.issues.v1.match.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beta.issues.v1.match.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetaIssuesV1MatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beta.issues.v1.match.$post> },
      ) => parseResponse(client.beta.issues.v1.match.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBetaIssuesV1SubscribeKey() {
  return ['beta', '/beta/issues/v1/subscribe', 'POST'] as const
}

export function usePostBetaIssuesV1Subscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beta.issues.v1.subscribe.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beta.issues.v1.subscribe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetaIssuesV1SubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beta.issues.v1.subscribe.$post> },
      ) => parseResponse(client.beta.issues.v1.subscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBetaIssuesV1UnsubscribeKey() {
  return ['beta', '/beta/issues/v1/unsubscribe', 'POST'] as const
}

export function usePostBetaIssuesV1Unsubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beta.issues.v1.unsubscribe.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beta.issues.v1.unsubscribe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetaIssuesV1UnsubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beta.issues.v1.unsubscribe.$post> },
      ) => parseResponse(client.beta.issues.v1.unsubscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIssuesSearchKey() {
  return ['issues', '/issues/search', 'POST'] as const
}

export function usePostIssuesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.issues.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIssuesSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.issues.search.$post> }) =>
        parseResponse(client.issues.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIssuesGetKey() {
  return ['issues', '/issues/get', 'POST'] as const
}

export function usePostIssuesGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.get.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.issues.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIssuesGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.issues.get.$post> }) =>
        parseResponse(client.issues.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIssuesSubscribeKey() {
  return ['issues', '/issues/subscribe', 'POST'] as const
}

export function usePostIssuesSubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.subscribe.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.issues.subscribe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIssuesSubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.issues.subscribe.$post> }) =>
        parseResponse(client.issues.subscribe.$post(arg, clientOptions)),
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

export function getPostBetaPartnerCustomerV1CreateKey() {
  return ['beta', '/beta/partner/customer/v1/create', 'POST'] as const
}

export function usePostBetaPartnerCustomerV1Create<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beta.partner.customer.v1.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beta.partner.customer.v1.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetaPartnerCustomerV1CreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beta.partner.customer.v1.create.$post> },
      ) => parseResponse(client.beta.partner.customer.v1.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBetaPartnerCustomerV1GetKey() {
  return ['beta', '/beta/partner/customer/v1/get', 'POST'] as const
}

export function usePostBetaPartnerCustomerV1Get<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beta.partner.customer.v1.get.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beta.partner.customer.v1.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetaPartnerCustomerV1GetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beta.partner.customer.v1.get.$post> },
      ) => parseResponse(client.beta.partner.customer.v1.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBetaPartnerCustomerV1UpdateKey() {
  return ['beta', '/beta/partner/customer/v1/update', 'POST'] as const
}

export function usePostBetaPartnerCustomerV1Update<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beta.partner.customer.v1.update.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beta.partner.customer.v1.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetaPartnerCustomerV1UpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beta.partner.customer.v1.update.$post> },
      ) => parseResponse(client.beta.partner.customer.v1.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBetaPartnerCustomerV1EnableKey() {
  return ['beta', '/beta/partner/customer/v1/enable', 'POST'] as const
}

export function usePostBetaPartnerCustomerV1Enable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beta.partner.customer.v1.enable.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.beta.partner.customer.v1.enable.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetaPartnerCustomerV1EnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.beta.partner.customer.v1.enable.$post> },
      ) => parseResponse(client.beta.partner.customer.v1.enable.$post(arg, clientOptions)),
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

export function getGetFdxRecipientsKey() {
  return ['fdx', '/fdx/recipients'] as const
}

export function useGetFdxRecipients<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fdx.recipients.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFdxRecipientsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fdx.recipients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fdx.recipients.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFdxRecipients<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fdx.recipients.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFdxRecipientsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fdx.recipients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fdx.recipients.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFdxConsentsKey(args: InferRequestType<typeof client.fdx.consents.$get>) {
  return ['fdx', '/fdx/consents', args] as const
}

export function useGetFdxConsents<TError = unknown>(
  args: InferRequestType<typeof client.fdx.consents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fdx.consents.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFdxConsentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fdx.consents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fdx.consents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFdxConsents<TError = unknown>(
  args: InferRequestType<typeof client.fdx.consents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fdx.consents.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFdxConsentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fdx.consents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fdx.consents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFdxConsentsConsentIdRevocationKey(
  args: InferRequestType<(typeof client.fdx.consents)[':consentId']['revocation']['$get']>,
) {
  return ['fdx', '/fdx/consents/:consentId/revocation', args] as const
}

export function useGetFdxConsentsConsentIdRevocation<TError = unknown>(
  args: InferRequestType<(typeof client.fdx.consents)[':consentId']['revocation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fdx.consents)[':consentId']['revocation']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFdxConsentsConsentIdRevocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fdx.consents)[':consentId']['revocation']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.fdx.consents[':consentId'].revocation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFdxConsentsConsentIdRevocation<TError = unknown>(
  args: InferRequestType<(typeof client.fdx.consents)[':consentId']['revocation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fdx.consents)[':consentId']['revocation']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFdxConsentsConsentIdRevocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fdx.consents)[':consentId']['revocation']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.fdx.consents[':consentId'].revocation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFdxConsentsConsentIdRevocationKey() {
  return ['fdx', '/fdx/consents/:consentId/revocation', 'PUT'] as const
}

export function usePutFdxConsentsConsentIdRevocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fdx.consents)[':consentId']['revocation']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.fdx.consents)[':consentId']['revocation']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFdxConsentsConsentIdRevocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.fdx.consents)[':consentId']['revocation']['$put']>
        },
      ) => parseResponse(client.fdx.consents[':consentId'].revocation.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFdxConsentsConsentIdKey(
  args: InferRequestType<(typeof client.fdx.consents)[':consentId']['$get']>,
) {
  return ['fdx', '/fdx/consents/:consentId', args] as const
}

export function useGetFdxConsentsConsentId<TError = unknown>(
  args: InferRequestType<(typeof client.fdx.consents)[':consentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fdx.consents)[':consentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFdxConsentsConsentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fdx.consents)[':consentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fdx.consents[':consentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFdxConsentsConsentId<TError = unknown>(
  args: InferRequestType<(typeof client.fdx.consents)[':consentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fdx.consents)[':consentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFdxConsentsConsentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fdx.consents)[':consentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fdx.consents[':consentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFdxRecipientRecipientIdKey(
  args: InferRequestType<(typeof client.fdx.recipient)[':recipientId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['fdx', '/fdx/recipient/:recipientId', keyArgs] as const
}

export function useGetFdxRecipientRecipientId<TError = unknown>(
  args: InferRequestType<(typeof client.fdx.recipient)[':recipientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fdx.recipient)[':recipientId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFdxRecipientRecipientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fdx.recipient)[':recipientId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fdx.recipient[':recipientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFdxRecipientRecipientId<TError = unknown>(
  args: InferRequestType<(typeof client.fdx.recipient)[':recipientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fdx.recipient)[':recipientId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFdxRecipientRecipientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fdx.recipient)[':recipientId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fdx.recipient[':recipientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
