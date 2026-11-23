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

export function createPostAssetReportCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.asset_report.create.$post>,
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
    const mutationDefaults = getPostAssetReportCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAssetReportGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.asset_report.get.$post>,
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
    const mutationDefaults = getPostAssetReportGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAssetReportPdfGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.pdf.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.asset_report.pdf.get.$post>,
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
    const mutationDefaults = getPostAssetReportPdfGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAssetReportRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.refresh.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.asset_report.refresh.$post>,
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
    const mutationDefaults = getPostAssetReportRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAssetReportFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.filter.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.asset_report.filter.$post>,
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
    const mutationDefaults = getPostAssetReportFilterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAssetReportRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.asset_report.remove.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.asset_report.remove.$post>,
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
    const mutationDefaults = getPostAssetReportRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAssetReportAuditCopyCreate<
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
                Awaited<ReturnType<typeof client.asset_report.audit_copy.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.asset_report.audit_copy.create.$post>,
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
    const mutationDefaults = getPostAssetReportAuditCopyCreateMutationOptions<
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

export function createPostAssetReportAuditCopyGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostAssetReportAuditCopyGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAssetReportAuditCopyPdfGetMutationKey() {
  return ['asset_report', '/asset_report/audit_copy/pdf/get', 'POST'] as const
}

export function getPostAssetReportAuditCopyPdfGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.asset_report.audit_copy.pdf.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.asset_report.audit_copy.pdf.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetReportAuditCopyPdfGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.asset_report.audit_copy.pdf.get.$post>) {
      return parseResponse(client.asset_report.audit_copy.pdf.get.$post(args, options))
    },
  })
}

export function createPostAssetReportAuditCopyPdfGet<
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
                Awaited<ReturnType<typeof client.asset_report.audit_copy.pdf.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.asset_report.audit_copy.pdf.get.$post>,
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
    const mutationDefaults = getPostAssetReportAuditCopyPdfGetMutationOptions<
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

export function createPostAssetReportAuditCopyRemove<
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
                Awaited<ReturnType<typeof client.asset_report.audit_copy.remove.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.asset_report.audit_copy.remove.$post>,
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
    const mutationDefaults = getPostAssetReportAuditCopyRemoveMutationOptions<
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

export function getPostCraMonitoringInsightsSubscribeMutationKey() {
  return ['cra', '/cra/monitoring_insights/subscribe', 'POST'] as const
}

export function getPostCraMonitoringInsightsSubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.monitoring_insights.subscribe.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.cra.monitoring_insights.subscribe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraMonitoringInsightsSubscribeMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.cra.monitoring_insights.subscribe.$post>,
    ) {
      return parseResponse(client.cra.monitoring_insights.subscribe.$post(args, options))
    },
  })
}

export function createPostCraMonitoringInsightsSubscribe<
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
                Awaited<ReturnType<typeof client.cra.monitoring_insights.subscribe.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cra.monitoring_insights.subscribe.$post>,
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
    const mutationDefaults = getPostCraMonitoringInsightsSubscribeMutationOptions<
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

export function getPostCraMonitoringInsightsUnsubscribeMutationKey() {
  return ['cra', '/cra/monitoring_insights/unsubscribe', 'POST'] as const
}

export function getPostCraMonitoringInsightsUnsubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.monitoring_insights.unsubscribe.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.cra.monitoring_insights.unsubscribe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraMonitoringInsightsUnsubscribeMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.cra.monitoring_insights.unsubscribe.$post>,
    ) {
      return parseResponse(client.cra.monitoring_insights.unsubscribe.$post(args, options))
    },
  })
}

export function createPostCraMonitoringInsightsUnsubscribe<
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
                Awaited<ReturnType<typeof client.cra.monitoring_insights.unsubscribe.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cra.monitoring_insights.unsubscribe.$post>,
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
    const mutationDefaults = getPostCraMonitoringInsightsUnsubscribeMutationOptions<
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

export function getPostCraMonitoringInsightsGetMutationKey() {
  return ['cra', '/cra/monitoring_insights/get', 'POST'] as const
}

export function getPostCraMonitoringInsightsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cra.monitoring_insights.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.cra.monitoring_insights.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraMonitoringInsightsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cra.monitoring_insights.get.$post>) {
      return parseResponse(client.cra.monitoring_insights.get.$post(args, options))
    },
  })
}

export function createPostCraMonitoringInsightsGet<
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
                Awaited<ReturnType<typeof client.cra.monitoring_insights.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cra.monitoring_insights.get.$post>,
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
    const mutationDefaults = getPostCraMonitoringInsightsGetMutationOptions<
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

export function createPostCreditAuditCopyTokenUpdate<
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
                Awaited<ReturnType<typeof client.credit.audit_copy_token.update.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.credit.audit_copy_token.update.$post>,
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
    const mutationDefaults = getPostCreditAuditCopyTokenUpdateMutationOptions<
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

export function getPostCraPartnerInsightsGetMutationKey() {
  return ['cra', '/cra/partner_insights/get', 'POST'] as const
}

export function getPostCraPartnerInsightsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cra.partner_insights.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.cra.partner_insights.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraPartnerInsightsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cra.partner_insights.get.$post>) {
      return parseResponse(client.cra.partner_insights.get.$post(args, options))
    },
  })
}

export function createPostCraPartnerInsightsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.cra.partner_insights.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cra.partner_insights.get.$post>,
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
    const mutationDefaults = getPostCraPartnerInsightsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCraCheckReportIncomeInsightsGetMutationKey() {
  return ['cra', '/cra/check_report/income_insights/get', 'POST'] as const
}

export function getPostCraCheckReportIncomeInsightsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.check_report.income_insights.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.cra.check_report.income_insights.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraCheckReportIncomeInsightsGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.cra.check_report.income_insights.get.$post>,
    ) {
      return parseResponse(client.cra.check_report.income_insights.get.$post(args, options))
    },
  })
}

export function createPostCraCheckReportIncomeInsightsGet<
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
                Awaited<ReturnType<typeof client.cra.check_report.income_insights.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cra.check_report.income_insights.get.$post>,
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
    const mutationDefaults = getPostCraCheckReportIncomeInsightsGetMutationOptions<
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

export function getPostCraCheckReportBaseReportGetMutationKey() {
  return ['cra', '/cra/check_report/base_report/get', 'POST'] as const
}

export function getPostCraCheckReportBaseReportGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.check_report.base_report.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.cra.check_report.base_report.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraCheckReportBaseReportGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cra.check_report.base_report.get.$post>) {
      return parseResponse(client.cra.check_report.base_report.get.$post(args, options))
    },
  })
}

export function createPostCraCheckReportBaseReportGet<
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
                Awaited<ReturnType<typeof client.cra.check_report.base_report.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cra.check_report.base_report.get.$post>,
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
    const mutationDefaults = getPostCraCheckReportBaseReportGetMutationOptions<
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

export function getPostCraCheckReportPdfGetMutationKey() {
  return ['cra', '/cra/check_report/pdf/get', 'POST'] as const
}

export function getPostCraCheckReportPdfGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cra.check_report.pdf.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.cra.check_report.pdf.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraCheckReportPdfGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cra.check_report.pdf.get.$post>) {
      return parseResponse(client.cra.check_report.pdf.get.$post(args, options))
    },
  })
}

export function createPostCraCheckReportPdfGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.cra.check_report.pdf.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cra.check_report.pdf.get.$post>,
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
    const mutationDefaults = getPostCraCheckReportPdfGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCraCheckReportCreateMutationKey() {
  return ['cra', '/cra/check_report/create', 'POST'] as const
}

export function getPostCraCheckReportCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cra.check_report.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.cra.check_report.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraCheckReportCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cra.check_report.create.$post>) {
      return parseResponse(client.cra.check_report.create.$post(args, options))
    },
  })
}

export function createPostCraCheckReportCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cra.check_report.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.cra.check_report.create.$post>,
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
    const mutationDefaults = getPostCraCheckReportCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCraCheckReportPartnerInsightsGetMutationKey() {
  return ['cra', '/cra/check_report/partner_insights/get', 'POST'] as const
}

export function getPostCraCheckReportPartnerInsightsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.check_report.partner_insights.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.cra.check_report.partner_insights.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraCheckReportPartnerInsightsGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.cra.check_report.partner_insights.get.$post>,
    ) {
      return parseResponse(client.cra.check_report.partner_insights.get.$post(args, options))
    },
  })
}

export function createPostCraCheckReportPartnerInsightsGet<
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
                Awaited<ReturnType<typeof client.cra.check_report.partner_insights.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cra.check_report.partner_insights.get.$post>,
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
    const mutationDefaults = getPostCraCheckReportPartnerInsightsGetMutationOptions<
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

export function getPostCraCheckReportCashflowInsightsGetMutationKey() {
  return ['cra', '/cra/check_report/cashflow_insights/get', 'POST'] as const
}

export function getPostCraCheckReportCashflowInsightsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.check_report.cashflow_insights.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.cra.check_report.cashflow_insights.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraCheckReportCashflowInsightsGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.cra.check_report.cashflow_insights.get.$post>,
    ) {
      return parseResponse(client.cra.check_report.cashflow_insights.get.$post(args, options))
    },
  })
}

export function createPostCraCheckReportCashflowInsightsGet<
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
                Awaited<ReturnType<typeof client.cra.check_report.cashflow_insights.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cra.check_report.cashflow_insights.get.$post>,
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
    const mutationDefaults = getPostCraCheckReportCashflowInsightsGetMutationOptions<
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

export function getPostCraCheckReportLendScoreGetMutationKey() {
  return ['cra', '/cra/check_report/lend_score/get', 'POST'] as const
}

export function getPostCraCheckReportLendScoreGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.check_report.lend_score.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.cra.check_report.lend_score.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraCheckReportLendScoreGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cra.check_report.lend_score.get.$post>) {
      return parseResponse(client.cra.check_report.lend_score.get.$post(args, options))
    },
  })
}

export function createPostCraCheckReportLendScoreGet<
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
                Awaited<ReturnType<typeof client.cra.check_report.lend_score.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cra.check_report.lend_score.get.$post>,
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
    const mutationDefaults = getPostCraCheckReportLendScoreGetMutationOptions<
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

export function getPostCraCheckReportNetworkInsightsGetMutationKey() {
  return ['cra', '/cra/check_report/network_insights/get', 'POST'] as const
}

export function getPostCraCheckReportNetworkInsightsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.check_report.network_insights.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.cra.check_report.network_insights.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraCheckReportNetworkInsightsGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.cra.check_report.network_insights.get.$post>,
    ) {
      return parseResponse(client.cra.check_report.network_insights.get.$post(args, options))
    },
  })
}

export function createPostCraCheckReportNetworkInsightsGet<
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
                Awaited<ReturnType<typeof client.cra.check_report.network_insights.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cra.check_report.network_insights.get.$post>,
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
    const mutationDefaults = getPostCraCheckReportNetworkInsightsGetMutationOptions<
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

export function getPostCraCheckReportVerificationGetMutationKey() {
  return ['cra', '/cra/check_report/verification/get', 'POST'] as const
}

export function getPostCraCheckReportVerificationGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.check_report.verification.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.cra.check_report.verification.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraCheckReportVerificationGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.cra.check_report.verification.get.$post>,
    ) {
      return parseResponse(client.cra.check_report.verification.get.$post(args, options))
    },
  })
}

export function createPostCraCheckReportVerificationGet<
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
                Awaited<ReturnType<typeof client.cra.check_report.verification.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cra.check_report.verification.get.$post>,
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
    const mutationDefaults = getPostCraCheckReportVerificationGetMutationOptions<
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

export function getPostCraCheckReportVerificationPdfGetMutationKey() {
  return ['cra', '/cra/check_report/verification/pdf/get', 'POST'] as const
}

export function getPostCraCheckReportVerificationPdfGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.check_report.verification.pdf.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.cra.check_report.verification.pdf.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraCheckReportVerificationPdfGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.cra.check_report.verification.pdf.get.$post>,
    ) {
      return parseResponse(client.cra.check_report.verification.pdf.get.$post(args, options))
    },
  })
}

export function createPostCraCheckReportVerificationPdfGet<
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
                Awaited<ReturnType<typeof client.cra.check_report.verification.pdf.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cra.check_report.verification.pdf.get.$post>,
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
    const mutationDefaults = getPostCraCheckReportVerificationPdfGetMutationOptions<
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

export function getPostCraLoansApplicationsRegisterMutationKey() {
  return ['cra', '/cra/loans/applications/register', 'POST'] as const
}

export function getPostCraLoansApplicationsRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.loans.applications.register.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.cra.loans.applications.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraLoansApplicationsRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cra.loans.applications.register.$post>) {
      return parseResponse(client.cra.loans.applications.register.$post(args, options))
    },
  })
}

export function createPostCraLoansApplicationsRegister<
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
                Awaited<ReturnType<typeof client.cra.loans.applications.register.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cra.loans.applications.register.$post>,
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
    const mutationDefaults = getPostCraLoansApplicationsRegisterMutationOptions<
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

export function getPostCraLoansRegisterMutationKey() {
  return ['cra', '/cra/loans/register', 'POST'] as const
}

export function getPostCraLoansRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cra.loans.register.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cra.loans.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraLoansRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cra.loans.register.$post>) {
      return parseResponse(client.cra.loans.register.$post(args, options))
    },
  })
}

export function createPostCraLoansRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cra.loans.register.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.cra.loans.register.$post>,
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
    const mutationDefaults = getPostCraLoansRegisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCraLoansUpdateMutationKey() {
  return ['cra', '/cra/loans/update', 'POST'] as const
}

export function getPostCraLoansUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cra.loans.update.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cra.loans.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraLoansUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cra.loans.update.$post>) {
      return parseResponse(client.cra.loans.update.$post(args, options))
    },
  })
}

export function createPostCraLoansUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cra.loans.update.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.cra.loans.update.$post>,
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
    const mutationDefaults = getPostCraLoansUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCraLoansUnregisterMutationKey() {
  return ['cra', '/cra/loans/unregister', 'POST'] as const
}

export function getPostCraLoansUnregisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cra.loans.unregister.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.cra.loans.unregister.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraLoansUnregisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cra.loans.unregister.$post>) {
      return parseResponse(client.cra.loans.unregister.$post(args, options))
    },
  })
}

export function createPostCraLoansUnregister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cra.loans.unregister.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.cra.loans.unregister.$post>,
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
    const mutationDefaults = getPostCraLoansUnregisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCraServicingSubscriptionCreateMutationKey() {
  return ['cra', '/cra/servicing/subscription/create', 'POST'] as const
}

export function getPostCraServicingSubscriptionCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.servicing.subscription.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.cra.servicing.subscription.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraServicingSubscriptionCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.cra.servicing.subscription.create.$post>,
    ) {
      return parseResponse(client.cra.servicing.subscription.create.$post(args, options))
    },
  })
}

export function createPostCraServicingSubscriptionCreate<
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
                Awaited<ReturnType<typeof client.cra.servicing.subscription.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cra.servicing.subscription.create.$post>,
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
    const mutationDefaults = getPostCraServicingSubscriptionCreateMutationOptions<
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

export function getPostCraServicingSubscriptionDeleteMutationKey() {
  return ['cra', '/cra/servicing/subscription/delete', 'POST'] as const
}

export function getPostCraServicingSubscriptionDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.servicing.subscription.delete.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.cra.servicing.subscription.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraServicingSubscriptionDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.cra.servicing.subscription.delete.$post>,
    ) {
      return parseResponse(client.cra.servicing.subscription.delete.$post(args, options))
    },
  })
}

export function createPostCraServicingSubscriptionDelete<
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
                Awaited<ReturnType<typeof client.cra.servicing.subscription.delete.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cra.servicing.subscription.delete.$post>,
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
    const mutationDefaults = getPostCraServicingSubscriptionDeleteMutationOptions<
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

export function getPostCraServicingSubscriptionGetMutationKey() {
  return ['cra', '/cra/servicing/subscription/get', 'POST'] as const
}

export function getPostCraServicingSubscriptionGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.servicing.subscription.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.cra.servicing.subscription.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraServicingSubscriptionGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cra.servicing.subscription.get.$post>) {
      return parseResponse(client.cra.servicing.subscription.get.$post(args, options))
    },
  })
}

export function createPostCraServicingSubscriptionGet<
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
                Awaited<ReturnType<typeof client.cra.servicing.subscription.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cra.servicing.subscription.get.$post>,
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
    const mutationDefaults = getPostCraServicingSubscriptionGetMutationOptions<
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

export function getPostCraServicingSubscriptionListMutationKey() {
  return ['cra', '/cra/servicing/subscription/list', 'POST'] as const
}

export function getPostCraServicingSubscriptionListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.servicing.subscription.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.cra.servicing.subscription.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraServicingSubscriptionListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cra.servicing.subscription.list.$post>) {
      return parseResponse(client.cra.servicing.subscription.list.$post(args, options))
    },
  })
}

export function createPostCraServicingSubscriptionList<
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
                Awaited<ReturnType<typeof client.cra.servicing.subscription.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cra.servicing.subscription.list.$post>,
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
    const mutationDefaults = getPostCraServicingSubscriptionListMutationOptions<
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

export function getPostCraServicingSubscriptionUpdateMutationKey() {
  return ['cra', '/cra/servicing/subscription/update', 'POST'] as const
}

export function getPostCraServicingSubscriptionUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cra.servicing.subscription.update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.cra.servicing.subscription.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraServicingSubscriptionUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.cra.servicing.subscription.update.$post>,
    ) {
      return parseResponse(client.cra.servicing.subscription.update.$post(args, options))
    },
  })
}

export function createPostCraServicingSubscriptionUpdate<
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
                Awaited<ReturnType<typeof client.cra.servicing.subscription.update.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cra.servicing.subscription.update.$post>,
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
    const mutationDefaults = getPostCraServicingSubscriptionUpdateMutationOptions<
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

export function getPostCraReportCreateMutationKey() {
  return ['cra', '/cra/report/create', 'POST'] as const
}

export function getPostCraReportCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cra.report.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cra.report.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraReportCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cra.report.create.$post>) {
      return parseResponse(client.cra.report.create.$post(args, options))
    },
  })
}

export function createPostCraReportCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cra.report.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.cra.report.create.$post>,
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
    const mutationDefaults = getPostCraReportCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCraReportGetMutationKey() {
  return ['cra', '/cra/report/get', 'POST'] as const
}

export function getPostCraReportGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cra.report.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cra.report.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraReportGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cra.report.get.$post>) {
      return parseResponse(client.cra.report.get.$post(args, options))
    },
  })
}

export function createPostCraReportGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cra.report.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.cra.report.get.$post>,
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
    const mutationDefaults = getPostCraReportGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCraCreditProfileReportGetMutationKey() {
  return ['cra', '/cra/credit_profile/report/get', 'POST'] as const
}

export function getPostCraCreditProfileReportGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cra.credit_profile.report.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.cra.credit_profile.report.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCraCreditProfileReportGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cra.credit_profile.report.get.$post>) {
      return parseResponse(client.cra.credit_profile.report.get.$post(args, options))
    },
  })
}

export function createPostCraCreditProfileReportGet<
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
                Awaited<ReturnType<typeof client.cra.credit_profile.report.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cra.credit_profile.report.get.$post>,
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
    const mutationDefaults = getPostCraCreditProfileReportGetMutationOptions<
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

export function getPostConsumerReportPdfGetMutationKey() {
  return ['consumer_report', '/consumer_report/pdf/get', 'POST'] as const
}

export function getPostConsumerReportPdfGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.consumer_report.pdf.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.consumer_report.pdf.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConsumerReportPdfGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.consumer_report.pdf.get.$post>) {
      return parseResponse(client.consumer_report.pdf.get.$post(args, options))
    },
  })
}

export function createPostConsumerReportPdfGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.consumer_report.pdf.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.consumer_report.pdf.get.$post>,
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
    const mutationDefaults = getPostConsumerReportPdfGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOauthTokenMutationKey() {
  return ['oauth', '/oauth/token', 'POST'] as const
}

export function getPostOauthTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.oauth.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.token.$post>) {
      return parseResponse(client.oauth.token.$post(args, options))
    },
  })
}

export function createPostOauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth.token.$post>,
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
    const mutationDefaults = getPostOauthTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOauthIntrospectMutationKey() {
  return ['oauth', '/oauth/introspect', 'POST'] as const
}

export function getPostOauthIntrospectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.introspect.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.introspect.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthIntrospectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.introspect.$post>) {
      return parseResponse(client.oauth.introspect.$post(args, options))
    },
  })
}

export function createPostOauthIntrospect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.introspect.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.oauth.introspect.$post>,
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
    const mutationDefaults = getPostOauthIntrospectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOauthRevokeMutationKey() {
  return ['oauth', '/oauth/revoke', 'POST'] as const
}

export function getPostOauthRevokeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.revoke.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.revoke.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthRevokeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.revoke.$post>) {
      return parseResponse(client.oauth.revoke.$post(args, options))
    },
  })
}

export function createPostOauthRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.revoke.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth.revoke.$post>,
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
    const mutationDefaults = getPostOauthRevokeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostStatementsListMutationKey() {
  return ['statements', '/statements/list', 'POST'] as const
}

export function getPostStatementsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.statements.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStatementsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.statements.list.$post>) {
      return parseResponse(client.statements.list.$post(args, options))
    },
  })
}

export function createPostStatementsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.statements.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.statements.list.$post>,
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
    const mutationDefaults = getPostStatementsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostStatementsDownloadMutationKey() {
  return ['statements', '/statements/download', 'POST'] as const
}

export function getPostStatementsDownloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.download.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.statements.download.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStatementsDownloadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.statements.download.$post>) {
      return parseResponse(client.statements.download.$post(args, options))
    },
  })
}

export function createPostStatementsDownload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.statements.download.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.statements.download.$post>,
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
    const mutationDefaults = getPostStatementsDownloadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostStatementsRefreshMutationKey() {
  return ['statements', '/statements/refresh', 'POST'] as const
}

export function getPostStatementsRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.refresh.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.statements.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStatementsRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.statements.refresh.$post>) {
      return parseResponse(client.statements.refresh.$post(args, options))
    },
  })
}

export function createPostStatementsRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.statements.refresh.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.statements.refresh.$post>,
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
    const mutationDefaults = getPostStatementsRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostConsentEventsGetMutationKey() {
  return ['consent', '/consent/events/get', 'POST'] as const
}

export function getPostConsentEventsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consent.events.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.consent.events.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConsentEventsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.consent.events.get.$post>) {
      return parseResponse(client.consent.events.get.$post(args, options))
    },
  })
}

export function createPostConsentEventsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.consent.events.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.consent.events.get.$post>,
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
    const mutationDefaults = getPostConsentEventsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItemActivityList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.item.activity.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.item.activity.list.$post>,
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
    const mutationDefaults = getPostItemActivityListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItemApplicationList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.item.application.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.item.application.list.$post>,
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
    const mutationDefaults = getPostItemApplicationListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostItemApplicationUnlinkMutationKey() {
  return ['item', '/item/application/unlink', 'POST'] as const
}

export function getPostItemApplicationUnlinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.item.application.unlink.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.item.application.unlink.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemApplicationUnlinkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.item.application.unlink.$post>) {
      return parseResponse(client.item.application.unlink.$post(args, options))
    },
  })
}

export function createPostItemApplicationUnlink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.item.application.unlink.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.item.application.unlink.$post>,
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
    const mutationDefaults = getPostItemApplicationUnlinkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItemApplicationScopesUpdate<
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
                Awaited<ReturnType<typeof client.item.application.scopes.update.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.item.application.scopes.update.$post>,
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
    const mutationDefaults = getPostItemApplicationScopesUpdateMutationOptions<
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

export function createPostApplicationGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.application.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.application.get.$post>,
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
    const mutationDefaults = getPostApplicationGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItemGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.get.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.item.get.$post>,
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
    const mutationDefaults = getPostItemGetMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUserAccountSessionGetMutationKey() {
  return ['user_account', '/user_account/session/get', 'POST'] as const
}

export function getPostUserAccountSessionGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_account.session.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user_account.session.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserAccountSessionGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_account.session.get.$post>) {
      return parseResponse(client.user_account.session.get.$post(args, options))
    },
  })
}

export function createPostUserAccountSessionGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_account.session.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.user_account.session.get.$post>,
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
    const mutationDefaults = getPostUserAccountSessionGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUserAccountSessionEventSendMutationKey() {
  return ['user_account', '/user_account/session/event/send', 'POST'] as const
}

export function getPostUserAccountSessionEventSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.user_account.session.event.send.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.user_account.session.event.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserAccountSessionEventSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_account.session.event.send.$post>) {
      return parseResponse(client.user_account.session.event.send.$post(args, options))
    },
  })
}

export function createPostUserAccountSessionEventSend<
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
                Awaited<ReturnType<typeof client.user_account.session.event.send.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.user_account.session.event.send.$post>,
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
    const mutationDefaults = getPostUserAccountSessionEventSendMutationOptions<
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

export function getPostProfileNetworkStatusGetMutationKey() {
  return ['profile', '/profile/network_status/get', 'POST'] as const
}

export function getPostProfileNetworkStatusGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.profile.network_status.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.profile.network_status.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProfileNetworkStatusGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.profile.network_status.get.$post>) {
      return parseResponse(client.profile.network_status.get.$post(args, options))
    },
  })
}

export function createPostProfileNetworkStatusGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.profile.network_status.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.profile.network_status.get.$post>,
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
    const mutationDefaults = getPostProfileNetworkStatusGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostNetworkStatusGetMutationKey() {
  return ['network', '/network/status/get', 'POST'] as const
}

export function getPostNetworkStatusGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.status.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.network.status.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkStatusGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.network.status.get.$post>) {
      return parseResponse(client.network.status.get.$post(args, options))
    },
  })
}

export function createPostNetworkStatusGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.network.status.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.network.status.get.$post>,
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
    const mutationDefaults = getPostNetworkStatusGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAuthGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.get.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.get.$post>,
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
    const mutationDefaults = getPostAuthGetMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAuthVerifyMutationKey() {
  return ['auth', '/auth/verify', 'POST'] as const
}

export function getPostAuthVerifyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.verify.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.verify.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthVerifyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.verify.$post>) {
      return parseResponse(client.auth.verify.$post(args, options))
    },
  })
}

export function createPostAuthVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.verify.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.verify.$post>,
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
    const mutationDefaults = getPostAuthVerifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransactionsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transactions.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transactions.get.$post>,
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
    const mutationDefaults = getPostTransactionsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransactionsRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transactions.refresh.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transactions.refresh.$post>,
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
    const mutationDefaults = getPostTransactionsRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxTransactionsCreateMutationKey() {
  return ['sandbox', '/sandbox/transactions/create', 'POST'] as const
}

export function getPostSandboxTransactionsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.transactions.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.transactions.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxTransactionsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.transactions.create.$post>) {
      return parseResponse(client.sandbox.transactions.create.$post(args, options))
    },
  })
}

export function createPostSandboxTransactionsCreate<
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
                Awaited<ReturnType<typeof client.sandbox.transactions.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.transactions.create.$post>,
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
    const mutationDefaults = getPostSandboxTransactionsCreateMutationOptions<
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

export function getPostCashflowReportRefreshMutationKey() {
  return ['cashflow_report', '/cashflow_report/refresh', 'POST'] as const
}

export function getPostCashflowReportRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cashflow_report.refresh.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.cashflow_report.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCashflowReportRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cashflow_report.refresh.$post>) {
      return parseResponse(client.cashflow_report.refresh.$post(args, options))
    },
  })
}

export function createPostCashflowReportRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cashflow_report.refresh.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.cashflow_report.refresh.$post>,
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
    const mutationDefaults = getPostCashflowReportRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCashflowReportGetMutationKey() {
  return ['cashflow_report', '/cashflow_report/get', 'POST'] as const
}

export function getPostCashflowReportGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cashflow_report.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cashflow_report.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCashflowReportGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cashflow_report.get.$post>) {
      return parseResponse(client.cashflow_report.get.$post(args, options))
    },
  })
}

export function createPostCashflowReportGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cashflow_report.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.cashflow_report.get.$post>,
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
    const mutationDefaults = getPostCashflowReportGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCashflowReportTransactionsGetMutationKey() {
  return ['cashflow_report', '/cashflow_report/transactions/get', 'POST'] as const
}

export function getPostCashflowReportTransactionsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cashflow_report.transactions.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.cashflow_report.transactions.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCashflowReportTransactionsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cashflow_report.transactions.get.$post>) {
      return parseResponse(client.cashflow_report.transactions.get.$post(args, options))
    },
  })
}

export function createPostCashflowReportTransactionsGet<
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
                Awaited<ReturnType<typeof client.cashflow_report.transactions.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cashflow_report.transactions.get.$post>,
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
    const mutationDefaults = getPostCashflowReportTransactionsGetMutationOptions<
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

export function getPostCashflowReportInsightsGetMutationKey() {
  return ['cashflow_report', '/cashflow_report/insights/get', 'POST'] as const
}

export function getPostCashflowReportInsightsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cashflow_report.insights.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.cashflow_report.insights.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCashflowReportInsightsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cashflow_report.insights.get.$post>) {
      return parseResponse(client.cashflow_report.insights.get.$post(args, options))
    },
  })
}

export function createPostCashflowReportInsightsGet<
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
                Awaited<ReturnType<typeof client.cashflow_report.insights.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cashflow_report.insights.get.$post>,
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
    const mutationDefaults = getPostCashflowReportInsightsGetMutationOptions<
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

export function createPostTransactionsRecurringGet<
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
                Awaited<ReturnType<typeof client.transactions.recurring.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transactions.recurring.get.$post>,
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
    const mutationDefaults = getPostTransactionsRecurringGetMutationOptions<
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

export function createPostTransactionsSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transactions.sync.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transactions.sync.$post>,
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
    const mutationDefaults = getPostTransactionsSyncMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransactionsEnrich<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transactions.enrich.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transactions.enrich.$post>,
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
    const mutationDefaults = getPostTransactionsEnrichMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUserTransactionsRefreshMutationKey() {
  return ['user', '/user/transactions/refresh', 'POST'] as const
}

export function getPostUserTransactionsRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.transactions.refresh.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user.transactions.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserTransactionsRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.transactions.refresh.$post>) {
      return parseResponse(client.user.transactions.refresh.$post(args, options))
    },
  })
}

export function createPostUserTransactionsRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user.transactions.refresh.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.user.transactions.refresh.$post>,
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
    const mutationDefaults = getPostUserTransactionsRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUserFinancialDataRefreshMutationKey() {
  return ['user', '/user/financial_data/refresh', 'POST'] as const
}

export function getPostUserFinancialDataRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.financial_data.refresh.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user.financial_data.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserFinancialDataRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.financial_data.refresh.$post>) {
      return parseResponse(client.user.financial_data.refresh.$post(args, options))
    },
  })
}

export function createPostUserFinancialDataRefresh<
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
                Awaited<ReturnType<typeof client.user.financial_data.refresh.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.user.financial_data.refresh.$post>,
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
    const mutationDefaults = getPostUserFinancialDataRefreshMutationOptions<
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

export function createPostInstitutionsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.institutions.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.institutions.get.$post>,
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
    const mutationDefaults = getPostInstitutionsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostInstitutionsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.institutions.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.institutions.search.$post>,
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
    const mutationDefaults = getPostInstitutionsSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostInstitutionsGetById<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.institutions.get_by_id.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.institutions.get_by_id.$post>,
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
    const mutationDefaults = getPostInstitutionsGetByIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItemRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.remove.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.item.remove.$post>,
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
    const mutationDefaults = getPostItemRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostItemProductsTerminateMutationKey() {
  return ['item', '/item/products/terminate', 'POST'] as const
}

export function getPostItemProductsTerminateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.item.products.terminate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.item.products.terminate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemProductsTerminateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.item.products.terminate.$post>) {
      return parseResponse(client.item.products.terminate.$post(args, options))
    },
  })
}

export function createPostItemProductsTerminate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.item.products.terminate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.item.products.terminate.$post>,
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
    const mutationDefaults = getPostItemProductsTerminateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAccountsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.get.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.accounts.get.$post>,
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
    const mutationDefaults = getPostAccountsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCategoriesGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.categories.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.categories.get.$post>,
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
    const mutationDefaults = getPostCategoriesGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSandboxProcessorTokenCreate<
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
                Awaited<ReturnType<typeof client.sandbox.processor_token.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.processor_token.create.$post>,
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
    const mutationDefaults = getPostSandboxProcessorTokenCreateMutationOptions<
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

export function createPostSandboxPublicTokenCreate<
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
                Awaited<ReturnType<typeof client.sandbox.public_token.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.public_token.create.$post>,
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
    const mutationDefaults = getPostSandboxPublicTokenCreateMutationOptions<
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

export function createPostSandboxItemFireWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sandbox.item.fire_webhook.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.item.fire_webhook.$post>,
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
    const mutationDefaults = getPostSandboxItemFireWebhookMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxUserFireWebhookMutationKey() {
  return ['sandbox', '/sandbox/user/fire_webhook', 'POST'] as const
}

export function getPostSandboxUserFireWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.user.fire_webhook.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.user.fire_webhook.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxUserFireWebhookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.user.fire_webhook.$post>) {
      return parseResponse(client.sandbox.user.fire_webhook.$post(args, options))
    },
  })
}

export function createPostSandboxUserFireWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sandbox.user.fire_webhook.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.user.fire_webhook.$post>,
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
    const mutationDefaults = getPostSandboxUserFireWebhookMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAccountsBalanceGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accounts.balance.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.accounts.balance.get.$post>,
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
    const mutationDefaults = getPostAccountsBalanceGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostIdentityGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identity.get.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.identity.get.$post>,
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
    const mutationDefaults = getPostIdentityGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIdentityDocumentsUploadsGetMutationKey() {
  return ['identity', '/identity/documents/uploads/get', 'POST'] as const
}

export function getPostIdentityDocumentsUploadsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.identity.documents.uploads.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.identity.documents.uploads.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIdentityDocumentsUploadsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.identity.documents.uploads.get.$post>) {
      return parseResponse(client.identity.documents.uploads.get.$post(args, options))
    },
  })
}

export function createPostIdentityDocumentsUploadsGet<
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
                Awaited<ReturnType<typeof client.identity.documents.uploads.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.identity.documents.uploads.get.$post>,
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
    const mutationDefaults = getPostIdentityDocumentsUploadsGetMutationOptions<
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

export function createPostIdentityMatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.identity.match.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.identity.match.$post>,
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
    const mutationDefaults = getPostIdentityMatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIdentityMatchListMutationKey() {
  return ['identity', '/identity/match/list', 'POST'] as const
}

export function getPostIdentityMatchListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identity.match.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.identity.match.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIdentityMatchListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.identity.match.list.$post>) {
      return parseResponse(client.identity.match.list.$post(args, options))
    },
  })
}

export function createPostIdentityMatchList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.identity.match.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.identity.match.list.$post>,
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
    const mutationDefaults = getPostIdentityMatchListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIdentityRefreshMutationKey() {
  return ['identity', '/identity/refresh', 'POST'] as const
}

export function getPostIdentityRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identity.refresh.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.identity.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIdentityRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.identity.refresh.$post>) {
      return parseResponse(client.identity.refresh.$post(args, options))
    },
  })
}

export function createPostIdentityRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.identity.refresh.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.identity.refresh.$post>,
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
    const mutationDefaults = getPostIdentityRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDashboardUserGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dashboard_user.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dashboard_user.get.$post>,
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
    const mutationDefaults = getPostDashboardUserGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDashboardUserList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dashboard_user.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dashboard_user.list.$post>,
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
    const mutationDefaults = getPostDashboardUserListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostIdentityVerificationCreate<
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
                Awaited<ReturnType<typeof client.identity_verification.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.identity_verification.create.$post>,
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
    const mutationDefaults = getPostIdentityVerificationCreateMutationOptions<
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

export function createPostIdentityVerificationGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.identity_verification.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.identity_verification.get.$post>,
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
    const mutationDefaults = getPostIdentityVerificationGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostIdentityVerificationList<
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
                Awaited<ReturnType<typeof client.identity_verification.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.identity_verification.list.$post>,
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
    const mutationDefaults = getPostIdentityVerificationListMutationOptions<
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

export function createPostIdentityVerificationRetry<
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
                Awaited<ReturnType<typeof client.identity_verification.retry.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.identity_verification.retry.$post>,
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
    const mutationDefaults = getPostIdentityVerificationRetryMutationOptions<
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

export function createPostWatchlistScreeningEntityCreate<
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
                Awaited<ReturnType<typeof client.watchlist_screening.entity.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.watchlist_screening.entity.create.$post>,
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
    const mutationDefaults = getPostWatchlistScreeningEntityCreateMutationOptions<
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

export function createPostWatchlistScreeningEntityGet<
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
                Awaited<ReturnType<typeof client.watchlist_screening.entity.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.watchlist_screening.entity.get.$post>,
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
    const mutationDefaults = getPostWatchlistScreeningEntityGetMutationOptions<
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

export function createPostWatchlistScreeningEntityHistoryList<
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
                Awaited<ReturnType<typeof client.watchlist_screening.entity.history.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.watchlist_screening.entity.history.list.$post>,
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
    const mutationDefaults = getPostWatchlistScreeningEntityHistoryListMutationOptions<
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

export function createPostWatchlistScreeningEntityHitList<
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
                Awaited<ReturnType<typeof client.watchlist_screening.entity.hit.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.watchlist_screening.entity.hit.list.$post>,
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
    const mutationDefaults = getPostWatchlistScreeningEntityHitListMutationOptions<
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

export function createPostWatchlistScreeningEntityList<
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
                Awaited<ReturnType<typeof client.watchlist_screening.entity.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.watchlist_screening.entity.list.$post>,
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
    const mutationDefaults = getPostWatchlistScreeningEntityListMutationOptions<
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

export function createPostWatchlistScreeningEntityProgramGet<
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
                Awaited<ReturnType<typeof client.watchlist_screening.entity.program.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.watchlist_screening.entity.program.get.$post>,
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
    const mutationDefaults = getPostWatchlistScreeningEntityProgramGetMutationOptions<
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

export function createPostWatchlistScreeningEntityProgramList<
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
                Awaited<ReturnType<typeof client.watchlist_screening.entity.program.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.watchlist_screening.entity.program.list.$post>,
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
    const mutationDefaults = getPostWatchlistScreeningEntityProgramListMutationOptions<
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

export function createPostWatchlistScreeningEntityReviewCreate<
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
                Awaited<ReturnType<typeof client.watchlist_screening.entity.review.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.watchlist_screening.entity.review.create.$post>,
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
    const mutationDefaults = getPostWatchlistScreeningEntityReviewCreateMutationOptions<
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

export function createPostWatchlistScreeningEntityReviewList<
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
                Awaited<ReturnType<typeof client.watchlist_screening.entity.review.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.watchlist_screening.entity.review.list.$post>,
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
    const mutationDefaults = getPostWatchlistScreeningEntityReviewListMutationOptions<
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

export function createPostWatchlistScreeningEntityUpdate<
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
                Awaited<ReturnType<typeof client.watchlist_screening.entity.update.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.watchlist_screening.entity.update.$post>,
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
    const mutationDefaults = getPostWatchlistScreeningEntityUpdateMutationOptions<
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

export function createPostWatchlistScreeningIndividualCreate<
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
                Awaited<ReturnType<typeof client.watchlist_screening.individual.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.watchlist_screening.individual.create.$post>,
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
    const mutationDefaults = getPostWatchlistScreeningIndividualCreateMutationOptions<
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

export function createPostWatchlistScreeningIndividualGet<
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
                Awaited<ReturnType<typeof client.watchlist_screening.individual.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.watchlist_screening.individual.get.$post>,
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
    const mutationDefaults = getPostWatchlistScreeningIndividualGetMutationOptions<
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

export function createPostWatchlistScreeningIndividualHistoryList<
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
                Awaited<ReturnType<typeof client.watchlist_screening.individual.history.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.watchlist_screening.individual.history.list.$post>,
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
    const mutationDefaults = getPostWatchlistScreeningIndividualHistoryListMutationOptions<
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

export function createPostWatchlistScreeningIndividualHitList<
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
                Awaited<ReturnType<typeof client.watchlist_screening.individual.hit.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.watchlist_screening.individual.hit.list.$post>,
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
    const mutationDefaults = getPostWatchlistScreeningIndividualHitListMutationOptions<
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

export function createPostWatchlistScreeningIndividualList<
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
                Awaited<ReturnType<typeof client.watchlist_screening.individual.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.watchlist_screening.individual.list.$post>,
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
    const mutationDefaults = getPostWatchlistScreeningIndividualListMutationOptions<
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

export function createPostWatchlistScreeningIndividualProgramGet<
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
                Awaited<ReturnType<typeof client.watchlist_screening.individual.program.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.watchlist_screening.individual.program.get.$post>,
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
    const mutationDefaults = getPostWatchlistScreeningIndividualProgramGetMutationOptions<
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

export function createPostWatchlistScreeningIndividualProgramList<
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
                Awaited<ReturnType<typeof client.watchlist_screening.individual.program.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.watchlist_screening.individual.program.list.$post>,
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
    const mutationDefaults = getPostWatchlistScreeningIndividualProgramListMutationOptions<
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

export function createPostWatchlistScreeningIndividualReviewCreate<
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
                  ReturnType<typeof client.watchlist_screening.individual.review.create.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.watchlist_screening.individual.review.create.$post>,
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
    const mutationDefaults = getPostWatchlistScreeningIndividualReviewCreateMutationOptions<
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

export function createPostWatchlistScreeningIndividualReviewList<
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
                Awaited<ReturnType<typeof client.watchlist_screening.individual.review.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.watchlist_screening.individual.review.list.$post>,
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
    const mutationDefaults = getPostWatchlistScreeningIndividualReviewListMutationOptions<
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

export function createPostWatchlistScreeningIndividualUpdate<
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
                Awaited<ReturnType<typeof client.watchlist_screening.individual.update.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.watchlist_screening.individual.update.$post>,
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
    const mutationDefaults = getPostWatchlistScreeningIndividualUpdateMutationOptions<
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

export function getPostBeaconAccountRiskV1EvaluateMutationKey() {
  return ['beacon', '/beacon/account_risk/v1/evaluate', 'POST'] as const
}

export function getPostBeaconAccountRiskV1EvaluateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beacon.account_risk.v1.evaluate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.beacon.account_risk.v1.evaluate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBeaconAccountRiskV1EvaluateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beacon.account_risk.v1.evaluate.$post>) {
      return parseResponse(client.beacon.account_risk.v1.evaluate.$post(args, options))
    },
  })
}

export function createPostBeaconAccountRiskV1Evaluate<
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
                Awaited<ReturnType<typeof client.beacon.account_risk.v1.evaluate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.beacon.account_risk.v1.evaluate.$post>,
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
    const mutationDefaults = getPostBeaconAccountRiskV1EvaluateMutationOptions<
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

export function getPostBeaconUserCreateMutationKey() {
  return ['beacon', '/beacon/user/create', 'POST'] as const
}

export function getPostBeaconUserCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beacon.user.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.beacon.user.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBeaconUserCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beacon.user.create.$post>) {
      return parseResponse(client.beacon.user.create.$post(args, options))
    },
  })
}

export function createPostBeaconUserCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.beacon.user.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.beacon.user.create.$post>,
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
    const mutationDefaults = getPostBeaconUserCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBeaconUserGetMutationKey() {
  return ['beacon', '/beacon/user/get', 'POST'] as const
}

export function getPostBeaconUserGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beacon.user.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.beacon.user.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBeaconUserGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beacon.user.get.$post>) {
      return parseResponse(client.beacon.user.get.$post(args, options))
    },
  })
}

export function createPostBeaconUserGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.beacon.user.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.beacon.user.get.$post>,
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
    const mutationDefaults = getPostBeaconUserGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBeaconUserReviewMutationKey() {
  return ['beacon', '/beacon/user/review', 'POST'] as const
}

export function getPostBeaconUserReviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beacon.user.review.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.beacon.user.review.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBeaconUserReviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beacon.user.review.$post>) {
      return parseResponse(client.beacon.user.review.$post(args, options))
    },
  })
}

export function createPostBeaconUserReview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.beacon.user.review.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.beacon.user.review.$post>,
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
    const mutationDefaults = getPostBeaconUserReviewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBeaconReportCreateMutationKey() {
  return ['beacon', '/beacon/report/create', 'POST'] as const
}

export function getPostBeaconReportCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beacon.report.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.beacon.report.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBeaconReportCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beacon.report.create.$post>) {
      return parseResponse(client.beacon.report.create.$post(args, options))
    },
  })
}

export function createPostBeaconReportCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.beacon.report.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.beacon.report.create.$post>,
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
    const mutationDefaults = getPostBeaconReportCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBeaconReportListMutationKey() {
  return ['beacon', '/beacon/report/list', 'POST'] as const
}

export function getPostBeaconReportListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beacon.report.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.beacon.report.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBeaconReportListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beacon.report.list.$post>) {
      return parseResponse(client.beacon.report.list.$post(args, options))
    },
  })
}

export function createPostBeaconReportList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.beacon.report.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.beacon.report.list.$post>,
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
    const mutationDefaults = getPostBeaconReportListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBeaconReportSyndicationListMutationKey() {
  return ['beacon', '/beacon/report_syndication/list', 'POST'] as const
}

export function getPostBeaconReportSyndicationListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beacon.report_syndication.list.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.beacon.report_syndication.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBeaconReportSyndicationListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beacon.report_syndication.list.$post>) {
      return parseResponse(client.beacon.report_syndication.list.$post(args, options))
    },
  })
}

export function createPostBeaconReportSyndicationList<
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
                Awaited<ReturnType<typeof client.beacon.report_syndication.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.beacon.report_syndication.list.$post>,
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
    const mutationDefaults = getPostBeaconReportSyndicationListMutationOptions<
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

export function getPostBeaconReportGetMutationKey() {
  return ['beacon', '/beacon/report/get', 'POST'] as const
}

export function getPostBeaconReportGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beacon.report.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.beacon.report.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBeaconReportGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beacon.report.get.$post>) {
      return parseResponse(client.beacon.report.get.$post(args, options))
    },
  })
}

export function createPostBeaconReportGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.beacon.report.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.beacon.report.get.$post>,
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
    const mutationDefaults = getPostBeaconReportGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBeaconReportSyndicationGetMutationKey() {
  return ['beacon', '/beacon/report_syndication/get', 'POST'] as const
}

export function getPostBeaconReportSyndicationGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beacon.report_syndication.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.beacon.report_syndication.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBeaconReportSyndicationGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beacon.report_syndication.get.$post>) {
      return parseResponse(client.beacon.report_syndication.get.$post(args, options))
    },
  })
}

export function createPostBeaconReportSyndicationGet<
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
                Awaited<ReturnType<typeof client.beacon.report_syndication.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.beacon.report_syndication.get.$post>,
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
    const mutationDefaults = getPostBeaconReportSyndicationGetMutationOptions<
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

export function getPostBeaconUserUpdateMutationKey() {
  return ['beacon', '/beacon/user/update', 'POST'] as const
}

export function getPostBeaconUserUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beacon.user.update.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.beacon.user.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBeaconUserUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beacon.user.update.$post>) {
      return parseResponse(client.beacon.user.update.$post(args, options))
    },
  })
}

export function createPostBeaconUserUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.beacon.user.update.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.beacon.user.update.$post>,
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
    const mutationDefaults = getPostBeaconUserUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBeaconDuplicateGetMutationKey() {
  return ['beacon', '/beacon/duplicate/get', 'POST'] as const
}

export function getPostBeaconDuplicateGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beacon.duplicate.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.beacon.duplicate.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBeaconDuplicateGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beacon.duplicate.get.$post>) {
      return parseResponse(client.beacon.duplicate.get.$post(args, options))
    },
  })
}

export function createPostBeaconDuplicateGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.beacon.duplicate.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.beacon.duplicate.get.$post>,
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
    const mutationDefaults = getPostBeaconDuplicateGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIdentityVerificationAutofillCreateMutationKey() {
  return ['identity_verification', '/identity_verification/autofill/create', 'POST'] as const
}

export function getPostIdentityVerificationAutofillCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.identity_verification.autofill.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.identity_verification.autofill.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIdentityVerificationAutofillCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.identity_verification.autofill.create.$post>,
    ) {
      return parseResponse(client.identity_verification.autofill.create.$post(args, options))
    },
  })
}

export function createPostIdentityVerificationAutofillCreate<
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
                Awaited<ReturnType<typeof client.identity_verification.autofill.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.identity_verification.autofill.create.$post>,
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
    const mutationDefaults = getPostIdentityVerificationAutofillCreateMutationOptions<
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

export function getPostBeaconUserHistoryListMutationKey() {
  return ['beacon', '/beacon/user/history/list', 'POST'] as const
}

export function getPostBeaconUserHistoryListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beacon.user.history.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.beacon.user.history.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBeaconUserHistoryListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beacon.user.history.list.$post>) {
      return parseResponse(client.beacon.user.history.list.$post(args, options))
    },
  })
}

export function createPostBeaconUserHistoryList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.beacon.user.history.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.beacon.user.history.list.$post>,
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
    const mutationDefaults = getPostBeaconUserHistoryListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBeaconUserAccountInsightsGetMutationKey() {
  return ['beacon', '/beacon/user/account_insights/get', 'POST'] as const
}

export function getPostBeaconUserAccountInsightsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beacon.user.account_insights.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.beacon.user.account_insights.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBeaconUserAccountInsightsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beacon.user.account_insights.get.$post>) {
      return parseResponse(client.beacon.user.account_insights.get.$post(args, options))
    },
  })
}

export function createPostBeaconUserAccountInsightsGet<
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
                Awaited<ReturnType<typeof client.beacon.user.account_insights.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.beacon.user.account_insights.get.$post>,
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
    const mutationDefaults = getPostBeaconUserAccountInsightsGetMutationOptions<
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

export function getPostProtectUserInsightsGetMutationKey() {
  return ['protect', '/protect/user/insights/get', 'POST'] as const
}

export function getPostProtectUserInsightsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.protect.user.insights.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.protect.user.insights.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProtectUserInsightsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.protect.user.insights.get.$post>) {
      return parseResponse(client.protect.user.insights.get.$post(args, options))
    },
  })
}

export function createPostProtectUserInsightsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.protect.user.insights.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.protect.user.insights.get.$post>,
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
    const mutationDefaults = getPostProtectUserInsightsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProtectReportCreateMutationKey() {
  return ['protect', '/protect/report/create', 'POST'] as const
}

export function getPostProtectReportCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.protect.report.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.protect.report.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProtectReportCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.protect.report.create.$post>) {
      return parseResponse(client.protect.report.create.$post(args, options))
    },
  })
}

export function createPostProtectReportCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.protect.report.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.protect.report.create.$post>,
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
    const mutationDefaults = getPostProtectReportCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProtectCashAdvanceDecisionCreateMutationKey() {
  return ['protect', '/protect/cash_advance/decision/create', 'POST'] as const
}

export function getPostProtectCashAdvanceDecisionCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.protect.cash_advance.decision.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.protect.cash_advance.decision.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProtectCashAdvanceDecisionCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.protect.cash_advance.decision.create.$post>,
    ) {
      return parseResponse(client.protect.cash_advance.decision.create.$post(args, options))
    },
  })
}

export function createPostProtectCashAdvanceDecisionCreate<
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
                Awaited<ReturnType<typeof client.protect.cash_advance.decision.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.protect.cash_advance.decision.create.$post>,
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
    const mutationDefaults = getPostProtectCashAdvanceDecisionCreateMutationOptions<
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

export function getPostProtectCashAdvanceRepaymentCreateMutationKey() {
  return ['protect', '/protect/cash_advance/repayment/create', 'POST'] as const
}

export function getPostProtectCashAdvanceRepaymentCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.protect.cash_advance.repayment.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.protect.cash_advance.repayment.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProtectCashAdvanceRepaymentCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.protect.cash_advance.repayment.create.$post>,
    ) {
      return parseResponse(client.protect.cash_advance.repayment.create.$post(args, options))
    },
  })
}

export function createPostProtectCashAdvanceRepaymentCreate<
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
                Awaited<ReturnType<typeof client.protect.cash_advance.repayment.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.protect.cash_advance.repayment.create.$post>,
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
    const mutationDefaults = getPostProtectCashAdvanceRepaymentCreateMutationOptions<
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

export function getPostProtectCashAdvanceFeedbackUploadMutationKey() {
  return ['protect', '/protect/cash_advance/feedback/upload', 'POST'] as const
}

export function getPostProtectCashAdvanceFeedbackUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.protect.cash_advance.feedback.upload.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.protect.cash_advance.feedback.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProtectCashAdvanceFeedbackUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.protect.cash_advance.feedback.upload.$post>,
    ) {
      return parseResponse(client.protect.cash_advance.feedback.upload.$post(args, options))
    },
  })
}

export function createPostProtectCashAdvanceFeedbackUpload<
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
                Awaited<ReturnType<typeof client.protect.cash_advance.feedback.upload.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.protect.cash_advance.feedback.upload.$post>,
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
    const mutationDefaults = getPostProtectCashAdvanceFeedbackUploadMutationOptions<
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

export function getPostProtectComputeMutationKey() {
  return ['protect', '/protect/compute', 'POST'] as const
}

export function getPostProtectComputeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.protect.compute.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.protect.compute.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProtectComputeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.protect.compute.$post>) {
      return parseResponse(client.protect.compute.$post(args, options))
    },
  })
}

export function createPostProtectCompute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.protect.compute.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.protect.compute.$post>,
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
    const mutationDefaults = getPostProtectComputeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProtectEventSendMutationKey() {
  return ['protect', '/protect/event/send', 'POST'] as const
}

export function getPostProtectEventSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.protect.event.send.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.protect.event.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProtectEventSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.protect.event.send.$post>) {
      return parseResponse(client.protect.event.send.$post(args, options))
    },
  })
}

export function createPostProtectEventSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.protect.event.send.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.protect.event.send.$post>,
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
    const mutationDefaults = getPostProtectEventSendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProtectEventGetMutationKey() {
  return ['protect', '/protect/event/get', 'POST'] as const
}

export function getPostProtectEventGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.protect.event.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.protect.event.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProtectEventGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.protect.event.get.$post>) {
      return parseResponse(client.protect.event.get.$post(args, options))
    },
  })
}

export function createPostProtectEventGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.protect.event.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.protect.event.get.$post>,
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
    const mutationDefaults = getPostProtectEventGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBusinessVerificationGetMutationKey() {
  return ['business_verification', '/business_verification/get', 'POST'] as const
}

export function getPostBusinessVerificationGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.business_verification.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.business_verification.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBusinessVerificationGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.business_verification.get.$post>) {
      return parseResponse(client.business_verification.get.$post(args, options))
    },
  })
}

export function createPostBusinessVerificationGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.business_verification.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.business_verification.get.$post>,
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
    const mutationDefaults = getPostBusinessVerificationGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBusinessVerificationCreateMutationKey() {
  return ['business_verification', '/business_verification/create', 'POST'] as const
}

export function getPostBusinessVerificationCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.business_verification.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.business_verification.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBusinessVerificationCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.business_verification.create.$post>) {
      return parseResponse(client.business_verification.create.$post(args, options))
    },
  })
}

export function createPostBusinessVerificationCreate<
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
                Awaited<ReturnType<typeof client.business_verification.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.business_verification.create.$post>,
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
    const mutationDefaults = getPostBusinessVerificationCreateMutationOptions<
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

export function createPostProcessorAuthGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.processor.auth.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.processor.auth.get.$post>,
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
    const mutationDefaults = getPostProcessorAuthGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProcessorAccountGetMutationKey() {
  return ['processor', '/processor/account/get', 'POST'] as const
}

export function getPostProcessorAccountGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.processor.account.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.processor.account.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorAccountGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.processor.account.get.$post>) {
      return parseResponse(client.processor.account.get.$post(args, options))
    },
  })
}

export function createPostProcessorAccountGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.processor.account.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.processor.account.get.$post>,
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
    const mutationDefaults = getPostProcessorAccountGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProcessorInvestmentsHoldingsGetMutationKey() {
  return ['processor', '/processor/investments/holdings/get', 'POST'] as const
}

export function getPostProcessorInvestmentsHoldingsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.investments.holdings.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.processor.investments.holdings.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorInvestmentsHoldingsGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.processor.investments.holdings.get.$post>,
    ) {
      return parseResponse(client.processor.investments.holdings.get.$post(args, options))
    },
  })
}

export function createPostProcessorInvestmentsHoldingsGet<
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
                Awaited<ReturnType<typeof client.processor.investments.holdings.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.processor.investments.holdings.get.$post>,
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
    const mutationDefaults = getPostProcessorInvestmentsHoldingsGetMutationOptions<
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

export function getPostProcessorInvestmentsAuthGetMutationKey() {
  return ['processor', '/processor/investments/auth/get', 'POST'] as const
}

export function getPostProcessorInvestmentsAuthGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.investments.auth.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.processor.investments.auth.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorInvestmentsAuthGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.processor.investments.auth.get.$post>) {
      return parseResponse(client.processor.investments.auth.get.$post(args, options))
    },
  })
}

export function createPostProcessorInvestmentsAuthGet<
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
                Awaited<ReturnType<typeof client.processor.investments.auth.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.processor.investments.auth.get.$post>,
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
    const mutationDefaults = getPostProcessorInvestmentsAuthGetMutationOptions<
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

export function getPostProcessorInvestmentsTransactionsGetMutationKey() {
  return ['processor', '/processor/investments/transactions/get', 'POST'] as const
}

export function getPostProcessorInvestmentsTransactionsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.investments.transactions.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.processor.investments.transactions.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorInvestmentsTransactionsGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.processor.investments.transactions.get.$post>,
    ) {
      return parseResponse(client.processor.investments.transactions.get.$post(args, options))
    },
  })
}

export function createPostProcessorInvestmentsTransactionsGet<
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
                Awaited<ReturnType<typeof client.processor.investments.transactions.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.processor.investments.transactions.get.$post>,
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
    const mutationDefaults = getPostProcessorInvestmentsTransactionsGetMutationOptions<
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

export function getPostProcessorTransactionsGetMutationKey() {
  return ['processor', '/processor/transactions/get', 'POST'] as const
}

export function getPostProcessorTransactionsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.processor.transactions.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.processor.transactions.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorTransactionsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.processor.transactions.get.$post>) {
      return parseResponse(client.processor.transactions.get.$post(args, options))
    },
  })
}

export function createPostProcessorTransactionsGet<
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
                Awaited<ReturnType<typeof client.processor.transactions.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.processor.transactions.get.$post>,
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
    const mutationDefaults = getPostProcessorTransactionsGetMutationOptions<
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

export function getPostProcessorTransactionsSyncMutationKey() {
  return ['processor', '/processor/transactions/sync', 'POST'] as const
}

export function getPostProcessorTransactionsSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.processor.transactions.sync.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.processor.transactions.sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorTransactionsSyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.processor.transactions.sync.$post>) {
      return parseResponse(client.processor.transactions.sync.$post(args, options))
    },
  })
}

export function createPostProcessorTransactionsSync<
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
                Awaited<ReturnType<typeof client.processor.transactions.sync.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.processor.transactions.sync.$post>,
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
    const mutationDefaults = getPostProcessorTransactionsSyncMutationOptions<
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

export function getPostProcessorTransactionsRefreshMutationKey() {
  return ['processor', '/processor/transactions/refresh', 'POST'] as const
}

export function getPostProcessorTransactionsRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.transactions.refresh.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.processor.transactions.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorTransactionsRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.processor.transactions.refresh.$post>) {
      return parseResponse(client.processor.transactions.refresh.$post(args, options))
    },
  })
}

export function createPostProcessorTransactionsRefresh<
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
                Awaited<ReturnType<typeof client.processor.transactions.refresh.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.processor.transactions.refresh.$post>,
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
    const mutationDefaults = getPostProcessorTransactionsRefreshMutationOptions<
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

export function getPostProcessorTransactionsRecurringGetMutationKey() {
  return ['processor', '/processor/transactions/recurring/get', 'POST'] as const
}

export function getPostProcessorTransactionsRecurringGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.transactions.recurring.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.processor.transactions.recurring.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorTransactionsRecurringGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.processor.transactions.recurring.get.$post>,
    ) {
      return parseResponse(client.processor.transactions.recurring.get.$post(args, options))
    },
  })
}

export function createPostProcessorTransactionsRecurringGet<
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
                Awaited<ReturnType<typeof client.processor.transactions.recurring.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.processor.transactions.recurring.get.$post>,
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
    const mutationDefaults = getPostProcessorTransactionsRecurringGetMutationOptions<
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

export function createPostProcessorSignalEvaluate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.processor.signal.evaluate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.processor.signal.evaluate.$post>,
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
    const mutationDefaults = getPostProcessorSignalEvaluateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostProcessorSignalDecisionReport<
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
                Awaited<ReturnType<typeof client.processor.signal.decision.report.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.processor.signal.decision.report.$post>,
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
    const mutationDefaults = getPostProcessorSignalDecisionReportMutationOptions<
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

export function createPostProcessorSignalReturnReport<
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
                Awaited<ReturnType<typeof client.processor.signal.return.report.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.processor.signal.return.report.$post>,
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
    const mutationDefaults = getPostProcessorSignalReturnReportMutationOptions<
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

export function getPostProcessorSignalPrepareMutationKey() {
  return ['processor', '/processor/signal/prepare', 'POST'] as const
}

export function getPostProcessorSignalPrepareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.processor.signal.prepare.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.processor.signal.prepare.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorSignalPrepareMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.processor.signal.prepare.$post>) {
      return parseResponse(client.processor.signal.prepare.$post(args, options))
    },
  })
}

export function createPostProcessorSignalPrepare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.processor.signal.prepare.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.processor.signal.prepare.$post>,
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
    const mutationDefaults = getPostProcessorSignalPrepareMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostProcessorBankTransferCreate<
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
                Awaited<ReturnType<typeof client.processor.bank_transfer.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.processor.bank_transfer.create.$post>,
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
    const mutationDefaults = getPostProcessorBankTransferCreateMutationOptions<
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

export function getPostProcessorLiabilitiesGetMutationKey() {
  return ['processor', '/processor/liabilities/get', 'POST'] as const
}

export function getPostProcessorLiabilitiesGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.processor.liabilities.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.processor.liabilities.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorLiabilitiesGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.processor.liabilities.get.$post>) {
      return parseResponse(client.processor.liabilities.get.$post(args, options))
    },
  })
}

export function createPostProcessorLiabilitiesGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.processor.liabilities.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.processor.liabilities.get.$post>,
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
    const mutationDefaults = getPostProcessorLiabilitiesGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostProcessorIdentityGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.processor.identity.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.processor.identity.get.$post>,
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
    const mutationDefaults = getPostProcessorIdentityGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProcessorIdentityMatchMutationKey() {
  return ['processor', '/processor/identity/match', 'POST'] as const
}

export function getPostProcessorIdentityMatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.processor.identity.match.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.processor.identity.match.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorIdentityMatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.processor.identity.match.$post>) {
      return parseResponse(client.processor.identity.match.$post(args, options))
    },
  })
}

export function createPostProcessorIdentityMatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.processor.identity.match.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.processor.identity.match.$post>,
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
    const mutationDefaults = getPostProcessorIdentityMatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostProcessorBalanceGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.processor.balance.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.processor.balance.get.$post>,
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
    const mutationDefaults = getPostProcessorBalanceGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItemWebhookUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.item.webhook.update.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.item.webhook.update.$post>,
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
    const mutationDefaults = getPostItemWebhookUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItemAccessTokenInvalidate<
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
                Awaited<ReturnType<typeof client.item.access_token.invalidate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.item.access_token.invalidate.$post>,
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
    const mutationDefaults = getPostItemAccessTokenInvalidateMutationOptions<
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

export function getPostBetaWebhookEventsListMutationKey() {
  return ['beta', '/beta/webhook_events/list', 'POST'] as const
}

export function getPostBetaWebhookEventsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beta.webhook_events.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.beta.webhook_events.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetaWebhookEventsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beta.webhook_events.list.$post>) {
      return parseResponse(client.beta.webhook_events.list.$post(args, options))
    },
  })
}

export function createPostBetaWebhookEventsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.beta.webhook_events.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.beta.webhook_events.list.$post>,
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
    const mutationDefaults = getPostBetaWebhookEventsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostWebhookVerificationKeyGet<
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
                Awaited<ReturnType<typeof client.webhook_verification_key.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.webhook_verification_key.get.$post>,
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
    const mutationDefaults = getPostWebhookVerificationKeyGetMutationOptions<
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

export function createPostLiabilitiesGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.liabilities.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.liabilities.get.$post>,
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
    const mutationDefaults = getPostLiabilitiesGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPaymentInitiationRecipientCreate<
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
                Awaited<ReturnType<typeof client.payment_initiation.recipient.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.payment_initiation.recipient.create.$post>,
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
    const mutationDefaults = getPostPaymentInitiationRecipientCreateMutationOptions<
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

export function createPostPaymentInitiationPaymentReverse<
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
                Awaited<ReturnType<typeof client.payment_initiation.payment.reverse.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.payment_initiation.payment.reverse.$post>,
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
    const mutationDefaults = getPostPaymentInitiationPaymentReverseMutationOptions<
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

export function createPostPaymentInitiationRecipientGet<
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
                Awaited<ReturnType<typeof client.payment_initiation.recipient.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.payment_initiation.recipient.get.$post>,
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
    const mutationDefaults = getPostPaymentInitiationRecipientGetMutationOptions<
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

export function createPostPaymentInitiationRecipientList<
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
                Awaited<ReturnType<typeof client.payment_initiation.recipient.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.payment_initiation.recipient.list.$post>,
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
    const mutationDefaults = getPostPaymentInitiationRecipientListMutationOptions<
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

export function createPostPaymentInitiationPaymentCreate<
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
                Awaited<ReturnType<typeof client.payment_initiation.payment.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.payment_initiation.payment.create.$post>,
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
    const mutationDefaults = getPostPaymentInitiationPaymentCreateMutationOptions<
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

export function createPostPaymentInitiationPaymentTokenCreate<
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
                Awaited<ReturnType<typeof client.payment_initiation.payment.token.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.payment_initiation.payment.token.create.$post>,
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
    const mutationDefaults = getPostPaymentInitiationPaymentTokenCreateMutationOptions<
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

export function createPostPaymentInitiationConsentCreate<
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
                Awaited<ReturnType<typeof client.payment_initiation.consent.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.payment_initiation.consent.create.$post>,
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
    const mutationDefaults = getPostPaymentInitiationConsentCreateMutationOptions<
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

export function createPostPaymentInitiationConsentGet<
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
                Awaited<ReturnType<typeof client.payment_initiation.consent.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.payment_initiation.consent.get.$post>,
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
    const mutationDefaults = getPostPaymentInitiationConsentGetMutationOptions<
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

export function createPostPaymentInitiationConsentRevoke<
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
                Awaited<ReturnType<typeof client.payment_initiation.consent.revoke.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.payment_initiation.consent.revoke.$post>,
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
    const mutationDefaults = getPostPaymentInitiationConsentRevokeMutationOptions<
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

export function createPostPaymentInitiationConsentPaymentExecute<
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
                Awaited<ReturnType<typeof client.payment_initiation.consent.payment.execute.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.payment_initiation.consent.payment.execute.$post>,
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
    const mutationDefaults = getPostPaymentInitiationConsentPaymentExecuteMutationOptions<
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

export function createPostSandboxItemResetLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sandbox.item.reset_login.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.item.reset_login.$post>,
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
    const mutationDefaults = getPostSandboxItemResetLoginMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxItemApplicationSeedMutationKey() {
  return ['sandbox', '/sandbox/item/application/seed', 'POST'] as const
}

export function getPostSandboxItemApplicationSeedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.item.application.seed.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.item.application.seed.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxItemApplicationSeedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.item.application.seed.$post>) {
      return parseResponse(client.sandbox.item.application.seed.$post(args, options))
    },
  })
}

export function createPostSandboxItemApplicationSeed<
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
                Awaited<ReturnType<typeof client.sandbox.item.application.seed.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.item.application.seed.$post>,
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
    const mutationDefaults = getPostSandboxItemApplicationSeedMutationOptions<
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

export function getPostSandboxFdxConsentSeedMutationKey() {
  return ['sandbox', '/sandbox/fdx/consent/seed', 'POST'] as const
}

export function getPostSandboxFdxConsentSeedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.fdx.consent.seed.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.fdx.consent.seed.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxFdxConsentSeedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.fdx.consent.seed.$post>) {
      return parseResponse(client.sandbox.fdx.consent.seed.$post(args, options))
    },
  })
}

export function createPostSandboxFdxConsentSeed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sandbox.fdx.consent.seed.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.fdx.consent.seed.$post>,
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
    const mutationDefaults = getPostSandboxFdxConsentSeedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSandboxItemSetVerificationStatus<
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
                Awaited<ReturnType<typeof client.sandbox.item.set_verification_status.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.item.set_verification_status.$post>,
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
    const mutationDefaults = getPostSandboxItemSetVerificationStatusMutationOptions<
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

export function getPostSandboxUserResetLoginMutationKey() {
  return ['sandbox', '/sandbox/user/reset_login', 'POST'] as const
}

export function getPostSandboxUserResetLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.user.reset_login.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.user.reset_login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxUserResetLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.user.reset_login.$post>) {
      return parseResponse(client.sandbox.user.reset_login.$post(args, options))
    },
  })
}

export function createPostSandboxUserResetLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sandbox.user.reset_login.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.user.reset_login.$post>,
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
    const mutationDefaults = getPostSandboxUserResetLoginMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItemPublicTokenExchange<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostItemPublicTokenExchangeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItemPublicTokenCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.item.public_token.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.item.public_token.create.$post>,
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
    const mutationDefaults = getPostItemPublicTokenCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUserCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.create.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.user.create.$post>,
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
    const mutationDefaults = getPostUserCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUserGetMutationKey() {
  return ['user', '/user/get', 'POST'] as const
}

export function getPostUserGetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.get.$post>>>>>,
    TError,
    InferRequestType<typeof client.user.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.get.$post>) {
      return parseResponse(client.user.get.$post(args, options))
    },
  })
}

export function createPostUserGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.get.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.user.get.$post>,
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
    const mutationDefaults = getPostUserGetMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUserIdentityRemoveMutationKey() {
  return ['user', '/user/identity/remove', 'POST'] as const
}

export function getPostUserIdentityRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.identity.remove.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user.identity.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserIdentityRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.identity.remove.$post>) {
      return parseResponse(client.user.identity.remove.$post(args, options))
    },
  })
}

export function createPostUserIdentityRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.identity.remove.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user.identity.remove.$post>,
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
    const mutationDefaults = getPostUserIdentityRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUserUpdateMutationKey() {
  return ['user', '/user/update', 'POST'] as const
}

export function getPostUserUpdateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.update.$post>>>>>,
    TError,
    InferRequestType<typeof client.user.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.update.$post>) {
      return parseResponse(client.user.update.$post(args, options))
    },
  })
}

export function createPostUserUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.update.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.user.update.$post>,
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
    const mutationDefaults = getPostUserUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUserRemoveMutationKey() {
  return ['user', '/user/remove', 'POST'] as const
}

export function getPostUserRemoveMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.remove.$post>>>>>,
    TError,
    InferRequestType<typeof client.user.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.remove.$post>) {
      return parseResponse(client.user.remove.$post(args, options))
    },
  })
}

export function createPostUserRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.remove.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.user.remove.$post>,
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
    const mutationDefaults = getPostUserRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUserProductsTerminateMutationKey() {
  return ['user', '/user/products/terminate', 'POST'] as const
}

export function getPostUserProductsTerminateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.products.terminate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user.products.terminate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserProductsTerminateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.products.terminate.$post>) {
      return parseResponse(client.user.products.terminate.$post(args, options))
    },
  })
}

export function createPostUserProductsTerminate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.products.terminate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user.products.terminate.$post>,
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
    const mutationDefaults = getPostUserProductsTerminateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUserTransferLimitsGetMutationKey() {
  return ['user', '/user/transfer/limits/get', 'POST'] as const
}

export function getPostUserTransferLimitsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.transfer.limits.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user.transfer.limits.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserTransferLimitsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.transfer.limits.get.$post>) {
      return parseResponse(client.user.transfer.limits.get.$post(args, options))
    },
  })
}

export function createPostUserTransferLimitsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user.transfer.limits.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.user.transfer.limits.get.$post>,
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
    const mutationDefaults = getPostUserTransferLimitsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUserItemsGetMutationKey() {
  return ['user', '/user/items/get', 'POST'] as const
}

export function getPostUserItemsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.items.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.user.items.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserItemsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.items.get.$post>) {
      return parseResponse(client.user.items.get.$post(args, options))
    },
  })
}

export function createPostUserItemsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.items.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user.items.get.$post>,
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
    const mutationDefaults = getPostUserItemsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUserItemsAssociateMutationKey() {
  return ['user', '/user/items/associate', 'POST'] as const
}

export function getPostUserItemsAssociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.items.associate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user.items.associate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserItemsAssociateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.items.associate.$post>) {
      return parseResponse(client.user.items.associate.$post(args, options))
    },
  })
}

export function createPostUserItemsAssociate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.items.associate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user.items.associate.$post>,
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
    const mutationDefaults = getPostUserItemsAssociateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUserItemsRemoveMutationKey() {
  return ['user', '/user/items/remove', 'POST'] as const
}

export function getPostUserItemsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.items.remove.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.user.items.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserItemsRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.items.remove.$post>) {
      return parseResponse(client.user.items.remove.$post(args, options))
    },
  })
}

export function createPostUserItemsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.items.remove.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user.items.remove.$post>,
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
    const mutationDefaults = getPostUserItemsRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUserThirdPartyTokenCreateMutationKey() {
  return ['user', '/user/third_party_token/create', 'POST'] as const
}

export function getPostUserThirdPartyTokenCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.third_party_token.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user.third_party_token.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserThirdPartyTokenCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.third_party_token.create.$post>) {
      return parseResponse(client.user.third_party_token.create.$post(args, options))
    },
  })
}

export function createPostUserThirdPartyTokenCreate<
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
                Awaited<ReturnType<typeof client.user.third_party_token.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.user.third_party_token.create.$post>,
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
    const mutationDefaults = getPostUserThirdPartyTokenCreateMutationOptions<
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

export function getPostUserThirdPartyTokenRemoveMutationKey() {
  return ['user', '/user/third_party_token/remove', 'POST'] as const
}

export function getPostUserThirdPartyTokenRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.third_party_token.remove.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user.third_party_token.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserThirdPartyTokenRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.third_party_token.remove.$post>) {
      return parseResponse(client.user.third_party_token.remove.$post(args, options))
    },
  })
}

export function createPostUserThirdPartyTokenRemove<
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
                Awaited<ReturnType<typeof client.user.third_party_token.remove.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.user.third_party_token.remove.$post>,
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
    const mutationDefaults = getPostUserThirdPartyTokenRemoveMutationOptions<
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

export function createPostCreditSessionsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.credit.sessions.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.credit.sessions.get.$post>,
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
    const mutationDefaults = getPostCreditSessionsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPaymentInitiationPaymentGet<
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
                Awaited<ReturnType<typeof client.payment_initiation.payment.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.payment_initiation.payment.get.$post>,
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
    const mutationDefaults = getPostPaymentInitiationPaymentGetMutationOptions<
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

export function createPostPaymentInitiationPaymentList<
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
                Awaited<ReturnType<typeof client.payment_initiation.payment.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.payment_initiation.payment.list.$post>,
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
    const mutationDefaults = getPostPaymentInitiationPaymentListMutationOptions<
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

export function createPostInvestmentsHoldingsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.investments.holdings.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.investments.holdings.get.$post>,
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
    const mutationDefaults = getPostInvestmentsHoldingsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostInvestmentsTransactionsGet<
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
                Awaited<ReturnType<typeof client.investments.transactions.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.investments.transactions.get.$post>,
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
    const mutationDefaults = getPostInvestmentsTransactionsGetMutationOptions<
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

export function getPostInvestmentsRefreshMutationKey() {
  return ['investments', '/investments/refresh', 'POST'] as const
}

export function getPostInvestmentsRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.investments.refresh.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.investments.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvestmentsRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.investments.refresh.$post>) {
      return parseResponse(client.investments.refresh.$post(args, options))
    },
  })
}

export function createPostInvestmentsRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.investments.refresh.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.investments.refresh.$post>,
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
    const mutationDefaults = getPostInvestmentsRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostInvestmentsAuthGetMutationKey() {
  return ['investments', '/investments/auth/get', 'POST'] as const
}

export function getPostInvestmentsAuthGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.investments.auth.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.investments.auth.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvestmentsAuthGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.investments.auth.get.$post>) {
      return parseResponse(client.investments.auth.get.$post(args, options))
    },
  })
}

export function createPostInvestmentsAuthGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.investments.auth.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.investments.auth.get.$post>,
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
    const mutationDefaults = getPostInvestmentsAuthGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostProcessorTokenCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.processor.token.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.processor.token.create.$post>,
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
    const mutationDefaults = getPostProcessorTokenCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProcessorTokenPermissionsSetMutationKey() {
  return ['processor', '/processor/token/permissions/set', 'POST'] as const
}

export function getPostProcessorTokenPermissionsSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.token.permissions.set.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.processor.token.permissions.set.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorTokenPermissionsSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.processor.token.permissions.set.$post>) {
      return parseResponse(client.processor.token.permissions.set.$post(args, options))
    },
  })
}

export function createPostProcessorTokenPermissionsSet<
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
                Awaited<ReturnType<typeof client.processor.token.permissions.set.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.processor.token.permissions.set.$post>,
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
    const mutationDefaults = getPostProcessorTokenPermissionsSetMutationOptions<
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

export function getPostProcessorTokenPermissionsGetMutationKey() {
  return ['processor', '/processor/token/permissions/get', 'POST'] as const
}

export function getPostProcessorTokenPermissionsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.token.permissions.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.processor.token.permissions.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorTokenPermissionsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.processor.token.permissions.get.$post>) {
      return parseResponse(client.processor.token.permissions.get.$post(args, options))
    },
  })
}

export function createPostProcessorTokenPermissionsGet<
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
                Awaited<ReturnType<typeof client.processor.token.permissions.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.processor.token.permissions.get.$post>,
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
    const mutationDefaults = getPostProcessorTokenPermissionsGetMutationOptions<
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

export function getPostProcessorTokenWebhookUpdateMutationKey() {
  return ['processor', '/processor/token/webhook/update', 'POST'] as const
}

export function getPostProcessorTokenWebhookUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.processor.token.webhook.update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.processor.token.webhook.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProcessorTokenWebhookUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.processor.token.webhook.update.$post>) {
      return parseResponse(client.processor.token.webhook.update.$post(args, options))
    },
  })
}

export function createPostProcessorTokenWebhookUpdate<
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
                Awaited<ReturnType<typeof client.processor.token.webhook.update.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.processor.token.webhook.update.$post>,
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
    const mutationDefaults = getPostProcessorTokenWebhookUpdateMutationOptions<
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

export function createPostProcessorStripeBankAccountTokenCreate<
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
                Awaited<ReturnType<typeof client.processor.stripe.bank_account_token.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.processor.stripe.bank_account_token.create.$post>,
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
    const mutationDefaults = getPostProcessorStripeBankAccountTokenCreateMutationOptions<
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

export function createPostProcessorApexProcessorTokenCreate<
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
                Awaited<ReturnType<typeof client.processor.apex.processor_token.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.processor.apex.processor_token.create.$post>,
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
    const mutationDefaults = getPostProcessorApexProcessorTokenCreateMutationOptions<
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

export function createPostItemImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item.import.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.item.import.$post>,
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
    const mutationDefaults = getPostItemImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostLinkTokenCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.link.token.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.link.token.create.$post>,
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
    const mutationDefaults = getPostLinkTokenCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostLinkTokenGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.link.token.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.link.token.get.$post>,
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
    const mutationDefaults = getPostLinkTokenGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostLinkOauthCorrelationIdExchange<
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
                Awaited<ReturnType<typeof client.link.oauth.correlation_id.exchange.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.link.oauth.correlation_id.exchange.$post>,
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
    const mutationDefaults = getPostLinkOauthCorrelationIdExchangeMutationOptions<
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

export function getPostSessionTokenCreateMutationKey() {
  return ['session', '/session/token/create', 'POST'] as const
}

export function getPostSessionTokenCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.session.token.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.session.token.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionTokenCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.session.token.create.$post>) {
      return parseResponse(client.session.token.create.$post(args, options))
    },
  })
}

export function createPostSessionTokenCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.session.token.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.session.token.create.$post>,
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
    const mutationDefaults = getPostSessionTokenCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.get.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.transfer.get.$post>,
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
    const mutationDefaults = getPostTransferGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferRecurringGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfer.recurring.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.recurring.get.$post>,
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
    const mutationDefaults = getPostTransferRecurringGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostBankTransferGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bank_transfer.get.$post>,
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
    const mutationDefaults = getPostBankTransferGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferAuthorizationCreate<
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
                Awaited<ReturnType<typeof client.transfer.authorization.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.authorization.create.$post>,
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
    const mutationDefaults = getPostTransferAuthorizationCreateMutationOptions<
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

export function getPostTransferAuthorizationCancelMutationKey() {
  return ['transfer', '/transfer/authorization/cancel', 'POST'] as const
}

export function getPostTransferAuthorizationCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.authorization.cancel.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.authorization.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferAuthorizationCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.authorization.cancel.$post>) {
      return parseResponse(client.transfer.authorization.cancel.$post(args, options))
    },
  })
}

export function createPostTransferAuthorizationCancel<
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
                Awaited<ReturnType<typeof client.transfer.authorization.cancel.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.authorization.cancel.$post>,
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
    const mutationDefaults = getPostTransferAuthorizationCancelMutationOptions<
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

export function getPostTransferBalanceGetMutationKey() {
  return ['transfer', '/transfer/balance/get', 'POST'] as const
}

export function getPostTransferBalanceGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.balance.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.balance.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferBalanceGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.balance.get.$post>) {
      return parseResponse(client.transfer.balance.get.$post(args, options))
    },
  })
}

export function createPostTransferBalanceGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfer.balance.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.balance.get.$post>,
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
    const mutationDefaults = getPostTransferBalanceGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferCapabilitiesGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.transfer.capabilities.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.capabilities.get.$post>,
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
    const mutationDefaults = getPostTransferCapabilitiesGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTransferConfigurationGetMutationKey() {
  return ['transfer', '/transfer/configuration/get', 'POST'] as const
}

export function getPostTransferConfigurationGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.configuration.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.configuration.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferConfigurationGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.configuration.get.$post>) {
      return parseResponse(client.transfer.configuration.get.$post(args, options))
    },
  })
}

export function createPostTransferConfigurationGet<
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
                Awaited<ReturnType<typeof client.transfer.configuration.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.configuration.get.$post>,
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
    const mutationDefaults = getPostTransferConfigurationGetMutationOptions<
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

export function getPostTransferLedgerGetMutationKey() {
  return ['transfer', '/transfer/ledger/get', 'POST'] as const
}

export function getPostTransferLedgerGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.ledger.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transfer.ledger.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferLedgerGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.ledger.get.$post>) {
      return parseResponse(client.transfer.ledger.get.$post(args, options))
    },
  })
}

export function createPostTransferLedgerGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfer.ledger.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.ledger.get.$post>,
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
    const mutationDefaults = getPostTransferLedgerGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTransferLedgerDistributeMutationKey() {
  return ['transfer', '/transfer/ledger/distribute', 'POST'] as const
}

export function getPostTransferLedgerDistributeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.ledger.distribute.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.ledger.distribute.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferLedgerDistributeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.ledger.distribute.$post>) {
      return parseResponse(client.transfer.ledger.distribute.$post(args, options))
    },
  })
}

export function createPostTransferLedgerDistribute<
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
                Awaited<ReturnType<typeof client.transfer.ledger.distribute.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.ledger.distribute.$post>,
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
    const mutationDefaults = getPostTransferLedgerDistributeMutationOptions<
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

export function getPostTransferLedgerDepositMutationKey() {
  return ['transfer', '/transfer/ledger/deposit', 'POST'] as const
}

export function getPostTransferLedgerDepositMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.ledger.deposit.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.ledger.deposit.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferLedgerDepositMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.ledger.deposit.$post>) {
      return parseResponse(client.transfer.ledger.deposit.$post(args, options))
    },
  })
}

export function createPostTransferLedgerDeposit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfer.ledger.deposit.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.ledger.deposit.$post>,
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
    const mutationDefaults = getPostTransferLedgerDepositMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTransferLedgerWithdrawMutationKey() {
  return ['transfer', '/transfer/ledger/withdraw', 'POST'] as const
}

export function getPostTransferLedgerWithdrawMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.ledger.withdraw.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.ledger.withdraw.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferLedgerWithdrawMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.ledger.withdraw.$post>) {
      return parseResponse(client.transfer.ledger.withdraw.$post(args, options))
    },
  })
}

export function createPostTransferLedgerWithdraw<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.transfer.ledger.withdraw.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.ledger.withdraw.$post>,
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
    const mutationDefaults = getPostTransferLedgerWithdrawMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTransferOriginatorFundingAccountUpdateMutationKey() {
  return ['transfer', '/transfer/originator/funding_account/update', 'POST'] as const
}

export function getPostTransferOriginatorFundingAccountUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transfer.originator.funding_account.update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.originator.funding_account.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferOriginatorFundingAccountUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.transfer.originator.funding_account.update.$post>,
    ) {
      return parseResponse(client.transfer.originator.funding_account.update.$post(args, options))
    },
  })
}

export function createPostTransferOriginatorFundingAccountUpdate<
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
                Awaited<ReturnType<typeof client.transfer.originator.funding_account.update.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.originator.funding_account.update.$post>,
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
    const mutationDefaults = getPostTransferOriginatorFundingAccountUpdateMutationOptions<
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

export function getPostTransferOriginatorFundingAccountCreateMutationKey() {
  return ['transfer', '/transfer/originator/funding_account/create', 'POST'] as const
}

export function getPostTransferOriginatorFundingAccountCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transfer.originator.funding_account.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.originator.funding_account.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferOriginatorFundingAccountCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.transfer.originator.funding_account.create.$post>,
    ) {
      return parseResponse(client.transfer.originator.funding_account.create.$post(args, options))
    },
  })
}

export function createPostTransferOriginatorFundingAccountCreate<
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
                Awaited<ReturnType<typeof client.transfer.originator.funding_account.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.originator.funding_account.create.$post>,
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
    const mutationDefaults = getPostTransferOriginatorFundingAccountCreateMutationOptions<
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

export function getPostTransferMetricsGetMutationKey() {
  return ['transfer', '/transfer/metrics/get', 'POST'] as const
}

export function getPostTransferMetricsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.metrics.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.metrics.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferMetricsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.metrics.get.$post>) {
      return parseResponse(client.transfer.metrics.get.$post(args, options))
    },
  })
}

export function createPostTransferMetricsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfer.metrics.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.metrics.get.$post>,
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
    const mutationDefaults = getPostTransferMetricsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfer.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.create.$post>,
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
    const mutationDefaults = getPostTransferCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferRecurringCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.transfer.recurring.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.recurring.create.$post>,
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
    const mutationDefaults = getPostTransferRecurringCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostBankTransferCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bank_transfer.create.$post>,
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
    const mutationDefaults = getPostBankTransferCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.list.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.transfer.list.$post>,
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
    const mutationDefaults = getPostTransferListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferRecurringList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfer.recurring.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.recurring.list.$post>,
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
    const mutationDefaults = getPostTransferRecurringListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostBankTransferList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bank_transfer.list.$post>,
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
    const mutationDefaults = getPostBankTransferListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfer.cancel.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.cancel.$post>,
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
    const mutationDefaults = getPostTransferCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferRecurringCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.transfer.recurring.cancel.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.recurring.cancel.$post>,
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
    const mutationDefaults = getPostTransferRecurringCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostBankTransferCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.cancel.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bank_transfer.cancel.$post>,
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
    const mutationDefaults = getPostBankTransferCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferEventList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfer.event.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.event.list.$post>,
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
    const mutationDefaults = getPostTransferEventListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTransferLedgerEventListMutationKey() {
  return ['transfer', '/transfer/ledger/event/list', 'POST'] as const
}

export function getPostTransferLedgerEventListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.ledger.event.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.ledger.event.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferLedgerEventListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.ledger.event.list.$post>) {
      return parseResponse(client.transfer.ledger.event.list.$post(args, options))
    },
  })
}

export function createPostTransferLedgerEventList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.transfer.ledger.event.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.ledger.event.list.$post>,
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
    const mutationDefaults = getPostTransferLedgerEventListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostBankTransferEventList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bank_transfer.event.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.bank_transfer.event.list.$post>,
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
    const mutationDefaults = getPostBankTransferEventListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferEventSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfer.event.sync.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.event.sync.$post>,
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
    const mutationDefaults = getPostTransferEventSyncMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostBankTransferEventSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bank_transfer.event.sync.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.bank_transfer.event.sync.$post>,
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
    const mutationDefaults = getPostBankTransferEventSyncMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferSweepGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfer.sweep.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.sweep.get.$post>,
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
    const mutationDefaults = getPostTransferSweepGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostBankTransferSweepGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bank_transfer.sweep.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bank_transfer.sweep.get.$post>,
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
    const mutationDefaults = getPostBankTransferSweepGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferSweepList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfer.sweep.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.sweep.list.$post>,
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
    const mutationDefaults = getPostTransferSweepListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostBankTransferSweepList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bank_transfer.sweep.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.bank_transfer.sweep.list.$post>,
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
    const mutationDefaults = getPostBankTransferSweepListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostBankTransferBalanceGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bank_transfer.balance.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.bank_transfer.balance.get.$post>,
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
    const mutationDefaults = getPostBankTransferBalanceGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostBankTransferMigrateAccount<
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
                Awaited<ReturnType<typeof client.bank_transfer.migrate_account.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.bank_transfer.migrate_account.$post>,
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
    const mutationDefaults = getPostBankTransferMigrateAccountMutationOptions<
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

export function createPostTransferMigrateAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.transfer.migrate_account.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.migrate_account.$post>,
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
    const mutationDefaults = getPostTransferMigrateAccountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferIntentCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfer.intent.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.intent.create.$post>,
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
    const mutationDefaults = getPostTransferIntentCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferIntentGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfer.intent.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.intent.get.$post>,
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
    const mutationDefaults = getPostTransferIntentGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferRepaymentList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfer.repayment.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.repayment.list.$post>,
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
    const mutationDefaults = getPostTransferRepaymentListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferRepaymentReturnList<
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
                Awaited<ReturnType<typeof client.transfer.repayment.return.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.repayment.return.list.$post>,
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
    const mutationDefaults = getPostTransferRepaymentReturnListMutationOptions<
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

export function getPostTransferPlatformRequirementSubmitMutationKey() {
  return ['transfer', '/transfer/platform/requirement/submit', 'POST'] as const
}

export function getPostTransferPlatformRequirementSubmitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transfer.platform.requirement.submit.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.platform.requirement.submit.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferPlatformRequirementSubmitMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.transfer.platform.requirement.submit.$post>,
    ) {
      return parseResponse(client.transfer.platform.requirement.submit.$post(args, options))
    },
  })
}

export function createPostTransferPlatformRequirementSubmit<
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
                Awaited<ReturnType<typeof client.transfer.platform.requirement.submit.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.platform.requirement.submit.$post>,
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
    const mutationDefaults = getPostTransferPlatformRequirementSubmitMutationOptions<
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

export function createPostTransferOriginatorCreate<
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
                Awaited<ReturnType<typeof client.transfer.originator.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.originator.create.$post>,
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
    const mutationDefaults = getPostTransferOriginatorCreateMutationOptions<
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

export function createPostTransferQuestionnaireCreate<
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
                Awaited<ReturnType<typeof client.transfer.questionnaire.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.questionnaire.create.$post>,
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
    const mutationDefaults = getPostTransferQuestionnaireCreateMutationOptions<
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

export function getPostTransferDiligenceSubmitMutationKey() {
  return ['transfer', '/transfer/diligence/submit', 'POST'] as const
}

export function getPostTransferDiligenceSubmitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.diligence.submit.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.diligence.submit.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferDiligenceSubmitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.diligence.submit.$post>) {
      return parseResponse(client.transfer.diligence.submit.$post(args, options))
    },
  })
}

export function createPostTransferDiligenceSubmit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.transfer.diligence.submit.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.diligence.submit.$post>,
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
    const mutationDefaults = getPostTransferDiligenceSubmitMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTransferDiligenceDocumentUploadMutationKey() {
  return ['transfer', '/transfer/diligence/document/upload', 'POST'] as const
}

export function getPostTransferDiligenceDocumentUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transfer.diligence.document.upload.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.diligence.document.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferDiligenceDocumentUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.transfer.diligence.document.upload.$post>,
    ) {
      return parseResponse(client.transfer.diligence.document.upload.$post(args, options))
    },
  })
}

export function createPostTransferDiligenceDocumentUpload<
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
                Awaited<ReturnType<typeof client.transfer.diligence.document.upload.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.diligence.document.upload.$post>,
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
    const mutationDefaults = getPostTransferDiligenceDocumentUploadMutationOptions<
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

export function createPostTransferOriginatorGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfer.originator.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.originator.get.$post>,
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
    const mutationDefaults = getPostTransferOriginatorGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferOriginatorList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.transfer.originator.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.originator.list.$post>,
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
    const mutationDefaults = getPostTransferOriginatorListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferRefundCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfer.refund.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.refund.create.$post>,
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
    const mutationDefaults = getPostTransferRefundCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTransferReturnRecoverMutationKey() {
  return ['transfer', '/transfer/return/recover', 'POST'] as const
}

export function getPostTransferReturnRecoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transfer.return.recover.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.return.recover.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferReturnRecoverMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.return.recover.$post>) {
      return parseResponse(client.transfer.return.recover.$post(args, options))
    },
  })
}

export function createPostTransferReturnRecover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfer.return.recover.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.return.recover.$post>,
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
    const mutationDefaults = getPostTransferReturnRecoverMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferRefundGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfer.refund.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.refund.get.$post>,
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
    const mutationDefaults = getPostTransferRefundGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTransferRefundCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfer.refund.cancel.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.refund.cancel.$post>,
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
    const mutationDefaults = getPostTransferRefundCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTransferPlatformOriginatorCreateMutationKey() {
  return ['transfer', '/transfer/platform/originator/create', 'POST'] as const
}

export function getPostTransferPlatformOriginatorCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transfer.platform.originator.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.platform.originator.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferPlatformOriginatorCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.transfer.platform.originator.create.$post>,
    ) {
      return parseResponse(client.transfer.platform.originator.create.$post(args, options))
    },
  })
}

export function createPostTransferPlatformOriginatorCreate<
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
                Awaited<ReturnType<typeof client.transfer.platform.originator.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.platform.originator.create.$post>,
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
    const mutationDefaults = getPostTransferPlatformOriginatorCreateMutationOptions<
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

export function getPostTransferPlatformPersonCreateMutationKey() {
  return ['transfer', '/transfer/platform/person/create', 'POST'] as const
}

export function getPostTransferPlatformPersonCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transfer.platform.person.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.transfer.platform.person.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferPlatformPersonCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.platform.person.create.$post>) {
      return parseResponse(client.transfer.platform.person.create.$post(args, options))
    },
  })
}

export function createPostTransferPlatformPersonCreate<
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
                Awaited<ReturnType<typeof client.transfer.platform.person.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.transfer.platform.person.create.$post>,
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
    const mutationDefaults = getPostTransferPlatformPersonCreateMutationOptions<
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

export function createPostSandboxBankTransferSimulate<
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
                Awaited<ReturnType<typeof client.sandbox.bank_transfer.simulate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.bank_transfer.simulate.$post>,
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
    const mutationDefaults = getPostSandboxBankTransferSimulateMutationOptions<
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

export function createPostSandboxTransferSweepSimulate<
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
                Awaited<ReturnType<typeof client.sandbox.transfer.sweep.simulate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.transfer.sweep.simulate.$post>,
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
    const mutationDefaults = getPostSandboxTransferSweepSimulateMutationOptions<
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

export function createPostSandboxTransferSimulate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sandbox.transfer.simulate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.transfer.simulate.$post>,
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
    const mutationDefaults = getPostSandboxTransferSimulateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxTransferRefundSimulateMutationKey() {
  return ['sandbox', '/sandbox/transfer/refund/simulate', 'POST'] as const
}

export function getPostSandboxTransferRefundSimulateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.transfer.refund.simulate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.transfer.refund.simulate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxTransferRefundSimulateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.transfer.refund.simulate.$post>) {
      return parseResponse(client.sandbox.transfer.refund.simulate.$post(args, options))
    },
  })
}

export function createPostSandboxTransferRefundSimulate<
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
                Awaited<ReturnType<typeof client.sandbox.transfer.refund.simulate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.transfer.refund.simulate.$post>,
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
    const mutationDefaults = getPostSandboxTransferRefundSimulateMutationOptions<
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

export function getPostSandboxTransferLedgerSimulateAvailableMutationKey() {
  return ['sandbox', '/sandbox/transfer/ledger/simulate_available', 'POST'] as const
}

export function getPostSandboxTransferLedgerSimulateAvailableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.transfer.ledger.simulate_available.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.transfer.ledger.simulate_available.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxTransferLedgerSimulateAvailableMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.sandbox.transfer.ledger.simulate_available.$post>,
    ) {
      return parseResponse(client.sandbox.transfer.ledger.simulate_available.$post(args, options))
    },
  })
}

export function createPostSandboxTransferLedgerSimulateAvailable<
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
                Awaited<ReturnType<typeof client.sandbox.transfer.ledger.simulate_available.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.transfer.ledger.simulate_available.$post>,
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
    const mutationDefaults = getPostSandboxTransferLedgerSimulateAvailableMutationOptions<
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

export function getPostSandboxTransferLedgerDepositSimulateMutationKey() {
  return ['sandbox', '/sandbox/transfer/ledger/deposit/simulate', 'POST'] as const
}

export function getPostSandboxTransferLedgerDepositSimulateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.transfer.ledger.deposit.simulate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.transfer.ledger.deposit.simulate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxTransferLedgerDepositSimulateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.sandbox.transfer.ledger.deposit.simulate.$post>,
    ) {
      return parseResponse(client.sandbox.transfer.ledger.deposit.simulate.$post(args, options))
    },
  })
}

export function createPostSandboxTransferLedgerDepositSimulate<
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
                Awaited<ReturnType<typeof client.sandbox.transfer.ledger.deposit.simulate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.transfer.ledger.deposit.simulate.$post>,
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
    const mutationDefaults = getPostSandboxTransferLedgerDepositSimulateMutationOptions<
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

export function getPostSandboxTransferLedgerWithdrawSimulateMutationKey() {
  return ['sandbox', '/sandbox/transfer/ledger/withdraw/simulate', 'POST'] as const
}

export function getPostSandboxTransferLedgerWithdrawSimulateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.transfer.ledger.withdraw.simulate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.transfer.ledger.withdraw.simulate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxTransferLedgerWithdrawSimulateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.sandbox.transfer.ledger.withdraw.simulate.$post>,
    ) {
      return parseResponse(client.sandbox.transfer.ledger.withdraw.simulate.$post(args, options))
    },
  })
}

export function createPostSandboxTransferLedgerWithdrawSimulate<
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
                Awaited<ReturnType<typeof client.sandbox.transfer.ledger.withdraw.simulate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.transfer.ledger.withdraw.simulate.$post>,
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
    const mutationDefaults = getPostSandboxTransferLedgerWithdrawSimulateMutationOptions<
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

export function createPostSandboxTransferFireWebhook<
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
                Awaited<ReturnType<typeof client.sandbox.transfer.fire_webhook.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.transfer.fire_webhook.$post>,
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
    const mutationDefaults = getPostSandboxTransferFireWebhookMutationOptions<
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

export function createPostSandboxTransferTestClockCreate<
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
                Awaited<ReturnType<typeof client.sandbox.transfer.test_clock.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.transfer.test_clock.create.$post>,
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
    const mutationDefaults = getPostSandboxTransferTestClockCreateMutationOptions<
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

export function createPostSandboxTransferTestClockAdvance<
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
                Awaited<ReturnType<typeof client.sandbox.transfer.test_clock.advance.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.transfer.test_clock.advance.$post>,
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
    const mutationDefaults = getPostSandboxTransferTestClockAdvanceMutationOptions<
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

export function createPostSandboxTransferTestClockGet<
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
                Awaited<ReturnType<typeof client.sandbox.transfer.test_clock.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.transfer.test_clock.get.$post>,
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
    const mutationDefaults = getPostSandboxTransferTestClockGetMutationOptions<
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

export function createPostSandboxTransferTestClockList<
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
                Awaited<ReturnType<typeof client.sandbox.transfer.test_clock.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.transfer.test_clock.list.$post>,
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
    const mutationDefaults = getPostSandboxTransferTestClockListMutationOptions<
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

export function createPostSandboxPaymentProfileResetLogin<
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
                Awaited<ReturnType<typeof client.sandbox.payment_profile.reset_login.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.payment_profile.reset_login.$post>,
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
    const mutationDefaults = getPostSandboxPaymentProfileResetLoginMutationOptions<
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

export function getPostSandboxPaymentSimulateMutationKey() {
  return ['sandbox', '/sandbox/payment/simulate', 'POST'] as const
}

export function getPostSandboxPaymentSimulateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.payment.simulate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.payment.simulate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxPaymentSimulateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.payment.simulate.$post>) {
      return parseResponse(client.sandbox.payment.simulate.$post(args, options))
    },
  })
}

export function createPostSandboxPaymentSimulate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sandbox.payment.simulate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.payment.simulate.$post>,
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
    const mutationDefaults = getPostSandboxPaymentSimulateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostEmployersSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.employers.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.employers.search.$post>,
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
    const mutationDefaults = getPostEmployersSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostIncomeVerificationCreate<
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
                Awaited<ReturnType<typeof client.income.verification.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.income.verification.create.$post>,
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
    const mutationDefaults = getPostIncomeVerificationCreateMutationOptions<
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

export function createPostIncomeVerificationPaystubsGet<
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
                Awaited<ReturnType<typeof client.income.verification.paystubs.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.income.verification.paystubs.get.$post>,
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
    const mutationDefaults = getPostIncomeVerificationPaystubsGetMutationOptions<
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

export function createPostIncomeVerificationDocumentsDownload<
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
                Awaited<ReturnType<typeof client.income.verification.documents.download.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.income.verification.documents.download.$post>,
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
    const mutationDefaults = getPostIncomeVerificationDocumentsDownloadMutationOptions<
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

export function createPostIncomeVerificationTaxformsGet<
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
                Awaited<ReturnType<typeof client.income.verification.taxforms.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.income.verification.taxforms.get.$post>,
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
    const mutationDefaults = getPostIncomeVerificationTaxformsGetMutationOptions<
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

export function createPostIncomeVerificationPrecheck<
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
                Awaited<ReturnType<typeof client.income.verification.precheck.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.income.verification.precheck.$post>,
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
    const mutationDefaults = getPostIncomeVerificationPrecheckMutationOptions<
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

export function createPostEmploymentVerificationGet<
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
                Awaited<ReturnType<typeof client.employment.verification.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.employment.verification.get.$post>,
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
    const mutationDefaults = getPostEmploymentVerificationGetMutationOptions<
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

export function createPostCreditAuditCopyTokenCreate<
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
                Awaited<ReturnType<typeof client.credit.audit_copy_token.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.credit.audit_copy_token.create.$post>,
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
    const mutationDefaults = getPostCreditAuditCopyTokenCreateMutationOptions<
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

export function createPostCreditAuditCopyTokenRemove<
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
                Awaited<ReturnType<typeof client.credit.audit_copy_token.remove.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.credit.audit_copy_token.remove.$post>,
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
    const mutationDefaults = getPostCreditAuditCopyTokenRemoveMutationOptions<
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

export function createPostCreditAssetReportFreddieMacGet<
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
                Awaited<ReturnType<typeof client.credit.asset_report.freddie_mac.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.credit.asset_report.freddie_mac.get.$post>,
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
    const mutationDefaults = getPostCreditAssetReportFreddieMacGetMutationOptions<
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

export function createPostCreditFreddieMacReportsGet<
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
                Awaited<ReturnType<typeof client.credit.freddie_mac.reports.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.credit.freddie_mac.reports.get.$post>,
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
    const mutationDefaults = getPostCreditFreddieMacReportsGetMutationOptions<
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

export function createPostBetaCreditV1BankEmploymentGet<
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
                Awaited<ReturnType<typeof client.beta.credit.v1.bank_employment.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.beta.credit.v1.bank_employment.get.$post>,
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
    const mutationDefaults = getPostBetaCreditV1BankEmploymentGetMutationOptions<
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

export function createPostCreditBankIncomeGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.credit.bank_income.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.credit.bank_income.get.$post>,
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
    const mutationDefaults = getPostCreditBankIncomeGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCreditBankIncomePdfGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostCreditBankIncomePdfGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCreditBankIncomeRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostCreditBankIncomeRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCreditBankIncomeWebhookUpdateMutationKey() {
  return ['credit', '/credit/bank_income/webhook/update', 'POST'] as const
}

export function getPostCreditBankIncomeWebhookUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit.bank_income.webhook.update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.credit.bank_income.webhook.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditBankIncomeWebhookUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.credit.bank_income.webhook.update.$post>,
    ) {
      return parseResponse(client.credit.bank_income.webhook.update.$post(args, options))
    },
  })
}

export function createPostCreditBankIncomeWebhookUpdate<
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
                Awaited<ReturnType<typeof client.credit.bank_income.webhook.update.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.credit.bank_income.webhook.update.$post>,
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
    const mutationDefaults = getPostCreditBankIncomeWebhookUpdateMutationOptions<
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

export function getPostCreditPayrollIncomeParsingConfigUpdateMutationKey() {
  return ['credit', '/credit/payroll_income/parsing_config/update', 'POST'] as const
}

export function getPostCreditPayrollIncomeParsingConfigUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit.payroll_income.parsing_config.update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.credit.payroll_income.parsing_config.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditPayrollIncomeParsingConfigUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.credit.payroll_income.parsing_config.update.$post>,
    ) {
      return parseResponse(client.credit.payroll_income.parsing_config.update.$post(args, options))
    },
  })
}

export function createPostCreditPayrollIncomeParsingConfigUpdate<
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
                Awaited<ReturnType<typeof client.credit.payroll_income.parsing_config.update.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.credit.payroll_income.parsing_config.update.$post>,
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
    const mutationDefaults = getPostCreditPayrollIncomeParsingConfigUpdateMutationOptions<
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

export function getPostCreditBankStatementsUploadsGetMutationKey() {
  return ['credit', '/credit/bank_statements/uploads/get', 'POST'] as const
}

export function getPostCreditBankStatementsUploadsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit.bank_statements.uploads.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.credit.bank_statements.uploads.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditBankStatementsUploadsGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.credit.bank_statements.uploads.get.$post>,
    ) {
      return parseResponse(client.credit.bank_statements.uploads.get.$post(args, options))
    },
  })
}

export function createPostCreditBankStatementsUploadsGet<
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
                Awaited<ReturnType<typeof client.credit.bank_statements.uploads.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.credit.bank_statements.uploads.get.$post>,
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
    const mutationDefaults = getPostCreditBankStatementsUploadsGetMutationOptions<
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

export function createPostCreditPayrollIncomeGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.credit.payroll_income.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.credit.payroll_income.get.$post>,
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
    const mutationDefaults = getPostCreditPayrollIncomeGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCreditPayrollIncomeRiskSignalsGetMutationKey() {
  return ['credit', '/credit/payroll_income/risk_signals/get', 'POST'] as const
}

export function getPostCreditPayrollIncomeRiskSignalsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.credit.payroll_income.risk_signals.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.credit.payroll_income.risk_signals.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditPayrollIncomeRiskSignalsGetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.credit.payroll_income.risk_signals.get.$post>,
    ) {
      return parseResponse(client.credit.payroll_income.risk_signals.get.$post(args, options))
    },
  })
}

export function createPostCreditPayrollIncomeRiskSignalsGet<
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
                Awaited<ReturnType<typeof client.credit.payroll_income.risk_signals.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.credit.payroll_income.risk_signals.get.$post>,
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
    const mutationDefaults = getPostCreditPayrollIncomeRiskSignalsGetMutationOptions<
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

export function createPostCreditPayrollIncomePrecheck<
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
                Awaited<ReturnType<typeof client.credit.payroll_income.precheck.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.credit.payroll_income.precheck.$post>,
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
    const mutationDefaults = getPostCreditPayrollIncomePrecheckMutationOptions<
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

export function createPostCreditEmploymentGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.credit.employment.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.credit.employment.get.$post>,
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
    const mutationDefaults = getPostCreditEmploymentGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCreditPayrollIncomeRefresh<
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
                Awaited<ReturnType<typeof client.credit.payroll_income.refresh.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.credit.payroll_income.refresh.$post>,
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
    const mutationDefaults = getPostCreditPayrollIncomeRefreshMutationOptions<
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

export function createPostCreditRelayCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.credit.relay.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.credit.relay.create.$post>,
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
    const mutationDefaults = getPostCreditRelayCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCreditRelayGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.credit.relay.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.credit.relay.get.$post>,
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
    const mutationDefaults = getPostCreditRelayGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCreditRelayPdfGetMutationKey() {
  return ['credit', '/credit/relay/pdf/get', 'POST'] as const
}

export function getPostCreditRelayPdfGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.credit.relay.pdf.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.credit.relay.pdf.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreditRelayPdfGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credit.relay.pdf.get.$post>) {
      return parseResponse(client.credit.relay.pdf.get.$post(args, options))
    },
  })
}

export function createPostCreditRelayPdfGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.credit.relay.pdf.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.credit.relay.pdf.get.$post>,
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
    const mutationDefaults = getPostCreditRelayPdfGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCreditRelayRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.credit.relay.refresh.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.credit.relay.refresh.$post>,
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
    const mutationDefaults = getPostCreditRelayRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCreditRelayRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.credit.relay.remove.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.credit.relay.remove.$post>,
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
    const mutationDefaults = getPostCreditRelayRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSandboxBankTransferFireWebhook<
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
                Awaited<ReturnType<typeof client.sandbox.bank_transfer.fire_webhook.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.bank_transfer.fire_webhook.$post>,
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
    const mutationDefaults = getPostSandboxBankTransferFireWebhookMutationOptions<
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

export function createPostSandboxIncomeFireWebhook<
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
                Awaited<ReturnType<typeof client.sandbox.income.fire_webhook.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.income.fire_webhook.$post>,
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
    const mutationDefaults = getPostSandboxIncomeFireWebhookMutationOptions<
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

export function getPostSandboxBankIncomeFireWebhookMutationKey() {
  return ['sandbox', '/sandbox/bank_income/fire_webhook', 'POST'] as const
}

export function getPostSandboxBankIncomeFireWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.bank_income.fire_webhook.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.bank_income.fire_webhook.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxBankIncomeFireWebhookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.bank_income.fire_webhook.$post>) {
      return parseResponse(client.sandbox.bank_income.fire_webhook.$post(args, options))
    },
  })
}

export function createPostSandboxBankIncomeFireWebhook<
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
                Awaited<ReturnType<typeof client.sandbox.bank_income.fire_webhook.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.bank_income.fire_webhook.$post>,
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
    const mutationDefaults = getPostSandboxBankIncomeFireWebhookMutationOptions<
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

export function getPostSandboxCraCashflowUpdatesUpdateMutationKey() {
  return ['sandbox', '/sandbox/cra/cashflow_updates/update', 'POST'] as const
}

export function getPostSandboxCraCashflowUpdatesUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.cra.cashflow_updates.update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.cra.cashflow_updates.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxCraCashflowUpdatesUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.sandbox.cra.cashflow_updates.update.$post>,
    ) {
      return parseResponse(client.sandbox.cra.cashflow_updates.update.$post(args, options))
    },
  })
}

export function createPostSandboxCraCashflowUpdatesUpdate<
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
                Awaited<ReturnType<typeof client.sandbox.cra.cashflow_updates.update.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.cra.cashflow_updates.update.$post>,
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
    const mutationDefaults = getPostSandboxCraCashflowUpdatesUpdateMutationOptions<
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

export function getPostSandboxCraServicingSimulateMutationKey() {
  return ['sandbox', '/sandbox/cra/servicing/simulate', 'POST'] as const
}

export function getPostSandboxCraServicingSimulateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.sandbox.cra.servicing.simulate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.sandbox.cra.servicing.simulate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxCraServicingSimulateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.cra.servicing.simulate.$post>) {
      return parseResponse(client.sandbox.cra.servicing.simulate.$post(args, options))
    },
  })
}

export function createPostSandboxCraServicingSimulate<
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
                Awaited<ReturnType<typeof client.sandbox.cra.servicing.simulate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.cra.servicing.simulate.$post>,
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
    const mutationDefaults = getPostSandboxCraServicingSimulateMutationOptions<
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

export function createPostSandboxOauthSelectAccounts<
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
                Awaited<ReturnType<typeof client.sandbox.oauth.select_accounts.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sandbox.oauth.select_accounts.$post>,
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
    const mutationDefaults = getPostSandboxOauthSelectAccountsMutationOptions<
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

export function createPostSignalEvaluate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.signal.evaluate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.signal.evaluate.$post>,
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
    const mutationDefaults = getPostSignalEvaluateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSignalScheduleMutationKey() {
  return ['signal', '/signal/schedule', 'POST'] as const
}

export function getPostSignalScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signal.schedule.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.signal.schedule.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSignalScheduleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.signal.schedule.$post>) {
      return parseResponse(client.signal.schedule.$post(args, options))
    },
  })
}

export function createPostSignalSchedule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.signal.schedule.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.signal.schedule.$post>,
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
    const mutationDefaults = getPostSignalScheduleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSignalDecisionReport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.signal.decision.report.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.signal.decision.report.$post>,
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
    const mutationDefaults = getPostSignalDecisionReportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSignalReturnReport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.signal.return.report.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.signal.return.report.$post>,
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
    const mutationDefaults = getPostSignalReturnReportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSignalPrepare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.signal.prepare.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.signal.prepare.$post>,
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
    const mutationDefaults = getPostSignalPrepareMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostWalletCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.create.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.wallet.create.$post>,
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
    const mutationDefaults = getPostWalletCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostWalletGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.get.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.wallet.get.$post>,
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
    const mutationDefaults = getPostWalletGetMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostWalletList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.list.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.wallet.list.$post>,
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
    const mutationDefaults = getPostWalletListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostWalletTransactionExecute<
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
                Awaited<ReturnType<typeof client.wallet.transaction.execute.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.wallet.transaction.execute.$post>,
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
    const mutationDefaults = getPostWalletTransactionExecuteMutationOptions<
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

export function createPostWalletTransactionGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wallet.transaction.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.wallet.transaction.get.$post>,
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
    const mutationDefaults = getPostWalletTransactionGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostWalletTransactionList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wallet.transaction.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.wallet.transaction.list.$post>,
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
    const mutationDefaults = getPostWalletTransactionListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostBetaTransactionsRulesV1Create<
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
                Awaited<ReturnType<typeof client.beta.transactions.rules.v1.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.beta.transactions.rules.v1.create.$post>,
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
    const mutationDefaults = getPostBetaTransactionsRulesV1CreateMutationOptions<
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

export function createPostBetaTransactionsRulesV1List<
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
                Awaited<ReturnType<typeof client.beta.transactions.rules.v1.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.beta.transactions.rules.v1.list.$post>,
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
    const mutationDefaults = getPostBetaTransactionsRulesV1ListMutationOptions<
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

export function createPostBetaTransactionsRulesV1Remove<
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
                Awaited<ReturnType<typeof client.beta.transactions.rules.v1.remove.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.beta.transactions.rules.v1.remove.$post>,
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
    const mutationDefaults = getPostBetaTransactionsRulesV1RemoveMutationOptions<
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

export function getPostBetaTransactionsUserInsightsV1GetMutationKey() {
  return ['beta', '/beta/transactions/user_insights/v1/get', 'POST'] as const
}

export function getPostBetaTransactionsUserInsightsV1GetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beta.transactions.user_insights.v1.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.beta.transactions.user_insights.v1.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetaTransactionsUserInsightsV1GetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.beta.transactions.user_insights.v1.get.$post>,
    ) {
      return parseResponse(client.beta.transactions.user_insights.v1.get.$post(args, options))
    },
  })
}

export function createPostBetaTransactionsUserInsightsV1Get<
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
                Awaited<ReturnType<typeof client.beta.transactions.user_insights.v1.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.beta.transactions.user_insights.v1.get.$post>,
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
    const mutationDefaults = getPostBetaTransactionsUserInsightsV1GetMutationOptions<
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

export function getPostBetaEwaReportV1GetMutationKey() {
  return ['beta', '/beta/ewa_report/v1/get', 'POST'] as const
}

export function getPostBetaEwaReportV1GetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beta.ewa_report.v1.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.beta.ewa_report.v1.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetaEwaReportV1GetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beta.ewa_report.v1.get.$post>) {
      return parseResponse(client.beta.ewa_report.v1.get.$post(args, options))
    },
  })
}

export function createPostBetaEwaReportV1Get<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.beta.ewa_report.v1.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.beta.ewa_report.v1.get.$post>,
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
    const mutationDefaults = getPostBetaEwaReportV1GetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBetaCashAdvanceIncomeInsightsV1GetMutationKey() {
  return ['beta', '/beta/cash_advance/income_insights/v1/get', 'POST'] as const
}

export function getPostBetaCashAdvanceIncomeInsightsV1GetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beta.cash_advance.income_insights.v1.get.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.beta.cash_advance.income_insights.v1.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetaCashAdvanceIncomeInsightsV1GetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.beta.cash_advance.income_insights.v1.get.$post>,
    ) {
      return parseResponse(client.beta.cash_advance.income_insights.v1.get.$post(args, options))
    },
  })
}

export function createPostBetaCashAdvanceIncomeInsightsV1Get<
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
                Awaited<ReturnType<typeof client.beta.cash_advance.income_insights.v1.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.beta.cash_advance.income_insights.v1.get.$post>,
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
    const mutationDefaults = getPostBetaCashAdvanceIncomeInsightsV1GetMutationOptions<
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

export function getPostBetaIssuesV1GetMutationKey() {
  return ['beta', '/beta/issues/v1/get', 'POST'] as const
}

export function getPostBetaIssuesV1GetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beta.issues.v1.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.beta.issues.v1.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetaIssuesV1GetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beta.issues.v1.get.$post>) {
      return parseResponse(client.beta.issues.v1.get.$post(args, options))
    },
  })
}

export function createPostBetaIssuesV1Get<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.beta.issues.v1.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.beta.issues.v1.get.$post>,
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
    const mutationDefaults = getPostBetaIssuesV1GetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBetaIssuesV1ListMutationKey() {
  return ['beta', '/beta/issues/v1/list', 'POST'] as const
}

export function getPostBetaIssuesV1ListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beta.issues.v1.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.beta.issues.v1.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetaIssuesV1ListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beta.issues.v1.list.$post>) {
      return parseResponse(client.beta.issues.v1.list.$post(args, options))
    },
  })
}

export function createPostBetaIssuesV1List<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.beta.issues.v1.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.beta.issues.v1.list.$post>,
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
    const mutationDefaults = getPostBetaIssuesV1ListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBetaIssuesV1MatchMutationKey() {
  return ['beta', '/beta/issues/v1/match', 'POST'] as const
}

export function getPostBetaIssuesV1MatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beta.issues.v1.match.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.beta.issues.v1.match.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetaIssuesV1MatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beta.issues.v1.match.$post>) {
      return parseResponse(client.beta.issues.v1.match.$post(args, options))
    },
  })
}

export function createPostBetaIssuesV1Match<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.beta.issues.v1.match.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.beta.issues.v1.match.$post>,
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
    const mutationDefaults = getPostBetaIssuesV1MatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBetaIssuesV1SubscribeMutationKey() {
  return ['beta', '/beta/issues/v1/subscribe', 'POST'] as const
}

export function getPostBetaIssuesV1SubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beta.issues.v1.subscribe.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.beta.issues.v1.subscribe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetaIssuesV1SubscribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beta.issues.v1.subscribe.$post>) {
      return parseResponse(client.beta.issues.v1.subscribe.$post(args, options))
    },
  })
}

export function createPostBetaIssuesV1Subscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.beta.issues.v1.subscribe.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.beta.issues.v1.subscribe.$post>,
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
    const mutationDefaults = getPostBetaIssuesV1SubscribeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBetaIssuesV1UnsubscribeMutationKey() {
  return ['beta', '/beta/issues/v1/unsubscribe', 'POST'] as const
}

export function getPostBetaIssuesV1UnsubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beta.issues.v1.unsubscribe.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.beta.issues.v1.unsubscribe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetaIssuesV1UnsubscribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beta.issues.v1.unsubscribe.$post>) {
      return parseResponse(client.beta.issues.v1.unsubscribe.$post(args, options))
    },
  })
}

export function createPostBetaIssuesV1Unsubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.beta.issues.v1.unsubscribe.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.beta.issues.v1.unsubscribe.$post>,
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
    const mutationDefaults = getPostBetaIssuesV1UnsubscribeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIssuesSearchMutationKey() {
  return ['issues', '/issues/search', 'POST'] as const
}

export function getPostIssuesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.issues.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIssuesSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.issues.search.$post>) {
      return parseResponse(client.issues.search.$post(args, options))
    },
  })
}

export function createPostIssuesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.issues.search.$post>,
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
    const mutationDefaults = getPostIssuesSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIssuesGetMutationKey() {
  return ['issues', '/issues/get', 'POST'] as const
}

export function getPostIssuesGetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.get.$post>>>>>,
    TError,
    InferRequestType<typeof client.issues.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIssuesGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.issues.get.$post>) {
      return parseResponse(client.issues.get.$post(args, options))
    },
  })
}

export function createPostIssuesGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.get.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.issues.get.$post>,
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
    const mutationDefaults = getPostIssuesGetMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIssuesSubscribeMutationKey() {
  return ['issues', '/issues/subscribe', 'POST'] as const
}

export function getPostIssuesSubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.subscribe.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.issues.subscribe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIssuesSubscribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.issues.subscribe.$post>) {
      return parseResponse(client.issues.subscribe.$post(args, options))
    },
  })
}

export function createPostIssuesSubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.issues.subscribe.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.issues.subscribe.$post>,
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
    const mutationDefaults = getPostIssuesSubscribeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPaymentProfileCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payment_profile.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.payment_profile.create.$post>,
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
    const mutationDefaults = getPostPaymentProfileCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPaymentProfileGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payment_profile.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.payment_profile.get.$post>,
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
    const mutationDefaults = getPostPaymentProfileGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPaymentProfileRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payment_profile.remove.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.payment_profile.remove.$post>,
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
    const mutationDefaults = getPostPaymentProfileRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPartnerCustomerCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.partner.customer.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.partner.customer.create.$post>,
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
    const mutationDefaults = getPostPartnerCustomerCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPartnerCustomerGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.partner.customer.get.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.partner.customer.get.$post>,
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
    const mutationDefaults = getPostPartnerCustomerGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPartnerCustomerEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.partner.customer.enable.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.partner.customer.enable.$post>,
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
    const mutationDefaults = getPostPartnerCustomerEnableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPartnerCustomerRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.partner.customer.remove.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.partner.customer.remove.$post>,
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
    const mutationDefaults = getPostPartnerCustomerRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPartnerCustomerOauthInstitutionsGet<
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
                Awaited<ReturnType<typeof client.partner.customer.oauth_institutions.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.partner.customer.oauth_institutions.get.$post>,
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
    const mutationDefaults = getPostPartnerCustomerOauthInstitutionsGetMutationOptions<
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

export function getPostBetaPartnerCustomerV1CreateMutationKey() {
  return ['beta', '/beta/partner/customer/v1/create', 'POST'] as const
}

export function getPostBetaPartnerCustomerV1CreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beta.partner.customer.v1.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.beta.partner.customer.v1.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetaPartnerCustomerV1CreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beta.partner.customer.v1.create.$post>) {
      return parseResponse(client.beta.partner.customer.v1.create.$post(args, options))
    },
  })
}

export function createPostBetaPartnerCustomerV1Create<
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
                Awaited<ReturnType<typeof client.beta.partner.customer.v1.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.beta.partner.customer.v1.create.$post>,
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
    const mutationDefaults = getPostBetaPartnerCustomerV1CreateMutationOptions<
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

export function getPostBetaPartnerCustomerV1GetMutationKey() {
  return ['beta', '/beta/partner/customer/v1/get', 'POST'] as const
}

export function getPostBetaPartnerCustomerV1GetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.beta.partner.customer.v1.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.beta.partner.customer.v1.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetaPartnerCustomerV1GetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beta.partner.customer.v1.get.$post>) {
      return parseResponse(client.beta.partner.customer.v1.get.$post(args, options))
    },
  })
}

export function createPostBetaPartnerCustomerV1Get<
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
                Awaited<ReturnType<typeof client.beta.partner.customer.v1.get.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.beta.partner.customer.v1.get.$post>,
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
    const mutationDefaults = getPostBetaPartnerCustomerV1GetMutationOptions<
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

export function getPostBetaPartnerCustomerV1UpdateMutationKey() {
  return ['beta', '/beta/partner/customer/v1/update', 'POST'] as const
}

export function getPostBetaPartnerCustomerV1UpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beta.partner.customer.v1.update.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.beta.partner.customer.v1.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetaPartnerCustomerV1UpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beta.partner.customer.v1.update.$post>) {
      return parseResponse(client.beta.partner.customer.v1.update.$post(args, options))
    },
  })
}

export function createPostBetaPartnerCustomerV1Update<
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
                Awaited<ReturnType<typeof client.beta.partner.customer.v1.update.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.beta.partner.customer.v1.update.$post>,
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
    const mutationDefaults = getPostBetaPartnerCustomerV1UpdateMutationOptions<
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

export function getPostBetaPartnerCustomerV1EnableMutationKey() {
  return ['beta', '/beta/partner/customer/v1/enable', 'POST'] as const
}

export function getPostBetaPartnerCustomerV1EnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.beta.partner.customer.v1.enable.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.beta.partner.customer.v1.enable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetaPartnerCustomerV1EnableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.beta.partner.customer.v1.enable.$post>) {
      return parseResponse(client.beta.partner.customer.v1.enable.$post(args, options))
    },
  })
}

export function createPostBetaPartnerCustomerV1Enable<
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
                Awaited<ReturnType<typeof client.beta.partner.customer.v1.enable.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.beta.partner.customer.v1.enable.$post>,
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
    const mutationDefaults = getPostBetaPartnerCustomerV1EnableMutationOptions<
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

export function createPostFdxNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fdx.notifications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.fdx.notifications.$post>,
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
    const mutationDefaults = getPostFdxNotificationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFdxRecipientsQueryKey() {
  return ['fdx', '/fdx/recipients'] as const
}

export function getFdxRecipientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fdx.recipients.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fdx.recipients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFdxRecipientsQueryKey>
  >({
    queryKey: getFdxRecipientsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.fdx.recipients.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFdxRecipients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fdx.recipients.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fdx.recipients.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getFdxRecipientsQueryKey>
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
    return { ...getFdxRecipientsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getFdxConsentsQueryKey(args: InferRequestType<typeof client.fdx.consents.$get>) {
  return ['fdx', '/fdx/consents', args] as const
}

export function getFdxConsentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fdx.consents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fdx.consents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fdx.consents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFdxConsentsQueryKey>
  >({
    queryKey: getFdxConsentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fdx.consents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFdxConsents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fdx.consents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.fdx.consents.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fdx.consents.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getFdxConsentsQueryKey>
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
    return { ...getFdxConsentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFdxConsentsConsentIdRevocationQueryKey(
  args: InferRequestType<(typeof client.fdx.consents)[':consentId']['revocation']['$get']>,
) {
  return ['fdx', '/fdx/consents/:consentId/revocation', args] as const
}

export function getFdxConsentsConsentIdRevocationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fdx.consents)[':consentId']['revocation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fdx.consents)[':consentId']['revocation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fdx.consents)[':consentId']['revocation']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFdxConsentsConsentIdRevocationQueryKey>
  >({
    queryKey: getFdxConsentsConsentIdRevocationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fdx.consents[':consentId'].revocation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFdxConsentsConsentIdRevocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fdx.consents)[':consentId']['revocation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.fdx.consents)[':consentId']['revocation']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.fdx.consents)[':consentId']['revocation']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFdxConsentsConsentIdRevocationQueryKey>
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
      ...getFdxConsentsConsentIdRevocationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutFdxConsentsConsentIdRevocationMutationKey() {
  return ['fdx', '/fdx/consents/:consentId/revocation', 'PUT'] as const
}

export function getPutFdxConsentsConsentIdRevocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fdx.consents)[':consentId']['revocation']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.fdx.consents)[':consentId']['revocation']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFdxConsentsConsentIdRevocationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.fdx.consents)[':consentId']['revocation']['$put']>,
    ) {
      return parseResponse(client.fdx.consents[':consentId'].revocation.$put(args, options))
    },
  })
}

export function createPutFdxConsentsConsentIdRevocation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.fdx.consents)[':consentId']['revocation']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.fdx.consents)[':consentId']['revocation']['$put']>,
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
    const mutationDefaults = getPutFdxConsentsConsentIdRevocationMutationOptions<
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

export function getFdxConsentsConsentIdQueryKey(
  args: InferRequestType<(typeof client.fdx.consents)[':consentId']['$get']>,
) {
  return ['fdx', '/fdx/consents/:consentId', args] as const
}

export function getFdxConsentsConsentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fdx.consents)[':consentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fdx.consents)[':consentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fdx.consents)[':consentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFdxConsentsConsentIdQueryKey>
  >({
    queryKey: getFdxConsentsConsentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fdx.consents[':consentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFdxConsentsConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fdx.consents)[':consentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.fdx.consents)[':consentId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fdx.consents)[':consentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFdxConsentsConsentIdQueryKey>
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
      ...getFdxConsentsConsentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFdxRecipientRecipientIdQueryKey(
  args: InferRequestType<(typeof client.fdx.recipient)[':recipientId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['fdx', '/fdx/recipient/:recipientId', keyArgs] as const
}

export function getFdxRecipientRecipientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fdx.recipient)[':recipientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fdx.recipient)[':recipientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fdx.recipient)[':recipientId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFdxRecipientRecipientIdQueryKey>
  >({
    queryKey: getFdxRecipientRecipientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fdx.recipient[':recipientId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFdxRecipientRecipientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fdx.recipient)[':recipientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.fdx.recipient)[':recipientId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.fdx.recipient)[':recipientId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFdxRecipientRecipientIdQueryKey>
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
      ...getFdxRecipientRecipientIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
