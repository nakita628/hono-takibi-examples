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

export function getAttorneyKey() {
  return ['attorney'] as const
}

export function getBillingCycleUsageKey() {
  return ['billingCycleUsage'] as const
}

export function getBillingCyclesKey() {
  return ['billingCycles'] as const
}

export function getCallbacksKey() {
  return ['callbacks'] as const
}

export function getCaseKey() {
  return ['case'] as const
}

export function getCaseCountAnalyticsByAreaOfLawKey() {
  return ['caseCountAnalyticsByAreaOfLaw'] as const
}

export function getCaseCountAnalyticsByCaseClassKey() {
  return ['caseCountAnalyticsByCaseClass'] as const
}

export function getCaseCountAnalyticsByCaseFiledDateKey() {
  return ['caseCountAnalyticsByCaseFiledDate'] as const
}

export function getCaseCountAnalyticsByCaseTypeKey() {
  return ['caseCountAnalyticsByCaseType'] as const
}

export function getCaseCountAnalyticsByCaseTypeGroupKey() {
  return ['caseCountAnalyticsByCaseTypeGroup'] as const
}

export function getCaseCountAnalyticsByCourtKey() {
  return ['caseCountAnalyticsByCourt'] as const
}

export function getCaseCountAnalyticsByCourtLocationKey() {
  return ['caseCountAnalyticsByCourtLocation'] as const
}

export function getCaseCountAnalyticsByCourtSystemKey() {
  return ['caseCountAnalyticsByCourtSystem'] as const
}

export function getCaseCountAnalyticsByCourtTypeKey() {
  return ['caseCountAnalyticsByCourtType'] as const
}

export function getCaseCountAnalyticsByJurisdictionGeoKey() {
  return ['caseCountAnalyticsByJurisdictionGeo'] as const
}

export function getCaseCountAnalyticsByNormAttorneyKey() {
  return ['caseCountAnalyticsByNormAttorney'] as const
}

export function getCaseCountAnalyticsByNormJudgeKey() {
  return ['caseCountAnalyticsByNormJudge'] as const
}

export function getCaseCountAnalyticsByNormLawFirmKey() {
  return ['caseCountAnalyticsByNormLawFirm'] as const
}

export function getCaseCountAnalyticsByNormPartyKey() {
  return ['caseCountAnalyticsByNormParty'] as const
}

export function getCaseCountAnalyticsByPartyRoleKey() {
  return ['caseCountAnalyticsByPartyRole'] as const
}

export function getCaseCountAnalyticsByPartyRoleGroupKey() {
  return ['caseCountAnalyticsByPartyRoleGroup'] as const
}

export function getCaseDocumentKey() {
  return ['caseDocument'] as const
}

export function getCaseDocumentDownloadKey() {
  return ['caseDocumentDownload'] as const
}

export function getCaseDocumentOrderKey() {
  return ['caseDocumentOrder'] as const
}

export function getCaseExportKey() {
  return ['caseExport'] as const
}

export function getCaseSearchKey() {
  return ['caseSearch'] as const
}

export function getCaseTrackKey() {
  return ['caseTrack'] as const
}

export function getCaseTracksKey() {
  return ['caseTracks'] as const
}

export function getCaseUpdateKey() {
  return ['caseUpdate'] as const
}

export function getCaseUpdatesKey() {
  return ['caseUpdates'] as const
}

export function getCourtCoverageKey() {
  return ['courtCoverage'] as const
}

export function getDailyUsageKey() {
  return ['dailyUsage'] as const
}

export function getGenerateNewTokenKey() {
  return ['generateNewToken'] as const
}

export function getInvalidateAllTokensKey() {
  return ['invalidateAllTokens'] as const
}

export function getInvalidateTokenKey() {
  return ['invalidateToken'] as const
}

export function getJudgeKey() {
  return ['judge'] as const
}

export function getListAllTokenIdsKey() {
  return ['listAllTokenIds'] as const
}

export function getMasterDataKey() {
  return ['masterData'] as const
}

export function getNormAttorneyKey() {
  return ['normAttorney'] as const
}

export function getNormAttorneySearchKey() {
  return ['normAttorneySearch'] as const
}

export function getNormJudgeKey() {
  return ['normJudge'] as const
}

export function getNormJudgeSearchKey() {
  return ['normJudgeSearch'] as const
}

export function getNormLawFirmKey() {
  return ['normLawFirm'] as const
}

export function getNormLawFirmSearchKey() {
  return ['normLawFirmSearch'] as const
}

export function getNormPartyKey() {
  return ['normParty'] as const
}

export function getNormPartySearchKey() {
  return ['normPartySearch'] as const
}

export function getPacerKey() {
  return ['pacer'] as const
}

export function getPacerCaseLocatorKey() {
  return ['pacerCaseLocator'] as const
}

export function getPacerCredentialKey() {
  return ['pacerCredential'] as const
}

export function getPartyKey() {
  return ['party'] as const
}

export function getAttorneyAttorneyIdQueryKey(
  args: InferRequestType<(typeof client.attorney)[':attorneyId']['$get']>,
) {
  return ['attorney', '/attorney/:attorneyId', args] as const
}

export function getAttorneyAttorneyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.attorney)[':attorneyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.attorney)[':attorneyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.attorney)[':attorneyId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttorneyAttorneyIdQueryKey>
  >({
    queryKey: getAttorneyAttorneyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.attorney[':attorneyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAttorneyAttorneyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.attorney)[':attorneyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.attorney)[':attorneyId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.attorney)[':attorneyId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAttorneyAttorneyIdQueryKey>
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
    return { ...getAttorneyAttorneyIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAttorneyAttorneyIdAssociatedPartiesQueryKey(
  args: InferRequestType<(typeof client.attorney)[':attorneyId']['associatedParties']['$get']>,
) {
  return ['attorney', '/attorney/:attorneyId/associatedParties', args] as const
}

export function getAttorneyAttorneyIdAssociatedPartiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.attorney)[':attorneyId']['associatedParties']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.attorney)[':attorneyId']['associatedParties']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attorney)[':attorneyId']['associatedParties']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttorneyAttorneyIdAssociatedPartiesQueryKey>
  >({
    queryKey: getAttorneyAttorneyIdAssociatedPartiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.attorney[':attorneyId'].associatedParties.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAttorneyAttorneyIdAssociatedParties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.attorney)[':attorneyId']['associatedParties']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.attorney)[':attorneyId']['associatedParties']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.attorney)[':attorneyId']['associatedParties']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAttorneyAttorneyIdAssociatedPartiesQueryKey>
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
      ...getAttorneyAttorneyIdAssociatedPartiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBillingCycleUsageBillingCycleQueryKey(
  args: InferRequestType<(typeof client.billingCycleUsage)[':billingCycle']['$get']>,
) {
  return ['billingCycleUsage', '/billingCycleUsage/:billingCycle', args] as const
}

export function getBillingCycleUsageBillingCycleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.billingCycleUsage)[':billingCycle']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.billingCycleUsage)[':billingCycle']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.billingCycleUsage)[':billingCycle']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingCycleUsageBillingCycleQueryKey>
  >({
    queryKey: getBillingCycleUsageBillingCycleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.billingCycleUsage[':billingCycle'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBillingCycleUsageBillingCycle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.billingCycleUsage)[':billingCycle']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.billingCycleUsage)[':billingCycle']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billingCycleUsage)[':billingCycle']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBillingCycleUsageBillingCycleQueryKey>
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
      ...getBillingCycleUsageBillingCycleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBillingCyclesQueryKey() {
  return ['billingCycles', '/billingCycles'] as const
}

export function getBillingCyclesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billingCycles.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billingCycles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBillingCyclesQueryKey>
  >({
    queryKey: getBillingCyclesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.billingCycles.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBillingCycles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billingCycles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billingCycles.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getBillingCyclesQueryKey>
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
    return { ...getBillingCyclesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCallbacksQueryKey(args: InferRequestType<typeof client.callbacks.$get>) {
  return ['callbacks', '/callbacks', args] as const
}

export function getCallbacksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callbacks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.callbacks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callbacks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCallbacksQueryKey>
  >({
    queryKey: getCallbacksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.callbacks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCallbacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callbacks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.callbacks.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callbacks.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCallbacksQueryKey>
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
    return { ...getCallbacksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCaseCaseIdQueryKey(
  args: InferRequestType<(typeof client.case)[':caseId']['$get']>,
) {
  return ['case', '/case/:caseId', args] as const
}

export function getCaseCaseIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.case)[':caseId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCaseIdQueryKey>
  >({
    queryKey: getCaseCaseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.case[':caseId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCaseCaseId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.case)[':caseId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCaseIdQueryKey>
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
    return { ...getCaseCaseIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCaseCaseIdAttorneysQueryKey(
  args: InferRequestType<(typeof client.case)[':caseId']['attorneys']['$get']>,
) {
  return ['case', '/case/:caseId/attorneys', args] as const
}

export function getCaseCaseIdAttorneysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.case)[':caseId']['attorneys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.case)[':caseId']['attorneys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.case)[':caseId']['attorneys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCaseIdAttorneysQueryKey>
  >({
    queryKey: getCaseCaseIdAttorneysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.case[':caseId'].attorneys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCaseIdAttorneys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.case)[':caseId']['attorneys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.case)[':caseId']['attorneys']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.case)[':caseId']['attorneys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCaseIdAttorneysQueryKey>
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
    return { ...getCaseCaseIdAttorneysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCaseCaseIdDocketEntriesQueryKey(
  args: InferRequestType<(typeof client.case)[':caseId']['docketEntries']['$get']>,
) {
  return ['case', '/case/:caseId/docketEntries', args] as const
}

export function getCaseCaseIdDocketEntriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.case)[':caseId']['docketEntries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.case)[':caseId']['docketEntries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.case)[':caseId']['docketEntries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCaseIdDocketEntriesQueryKey>
  >({
    queryKey: getCaseCaseIdDocketEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.case[':caseId'].docketEntries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCaseIdDocketEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.case)[':caseId']['docketEntries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.case)[':caseId']['docketEntries']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.case)[':caseId']['docketEntries']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCaseIdDocketEntriesQueryKey>
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
      ...getCaseCaseIdDocketEntriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCaseCaseIdDocketEntriesPrimaryDocumentsQueryKey(
  args: InferRequestType<
    (typeof client.case)[':caseId']['docketEntries']['primaryDocuments']['$get']
  >,
) {
  return ['case', '/case/:caseId/docketEntries/primaryDocuments', args] as const
}

export function getCaseCaseIdDocketEntriesPrimaryDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.case)[':caseId']['docketEntries']['primaryDocuments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.case)[':caseId']['docketEntries']['primaryDocuments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.case)[':caseId']['docketEntries']['primaryDocuments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCaseIdDocketEntriesPrimaryDocumentsQueryKey>
  >({
    queryKey: getCaseCaseIdDocketEntriesPrimaryDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.case[':caseId'].docketEntries.primaryDocuments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCaseIdDocketEntriesPrimaryDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.case)[':caseId']['docketEntries']['primaryDocuments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.case)[':caseId']['docketEntries']['primaryDocuments']['$get']
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
                    (typeof client.case)[':caseId']['docketEntries']['primaryDocuments']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCaseIdDocketEntriesPrimaryDocumentsQueryKey>
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
      ...getCaseCaseIdDocketEntriesPrimaryDocumentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCaseCaseIdDocketEntriesSecondaryDocumentsQueryKey(
  args: InferRequestType<
    (typeof client.case)[':caseId']['docketEntries']['secondaryDocuments']['$get']
  >,
) {
  return ['case', '/case/:caseId/docketEntries/secondaryDocuments', args] as const
}

export function getCaseCaseIdDocketEntriesSecondaryDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.case)[':caseId']['docketEntries']['secondaryDocuments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.case)[':caseId']['docketEntries']['secondaryDocuments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.case)[':caseId']['docketEntries']['secondaryDocuments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCaseIdDocketEntriesSecondaryDocumentsQueryKey>
  >({
    queryKey: getCaseCaseIdDocketEntriesSecondaryDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.case[':caseId'].docketEntries.secondaryDocuments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCaseIdDocketEntriesSecondaryDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.case)[':caseId']['docketEntries']['secondaryDocuments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.case)[':caseId']['docketEntries']['secondaryDocuments']['$get']
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
                    (typeof client.case)[':caseId']['docketEntries']['secondaryDocuments']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCaseIdDocketEntriesSecondaryDocumentsQueryKey>
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
      ...getCaseCaseIdDocketEntriesSecondaryDocumentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCaseCaseIdDocumentsQueryKey(
  args: InferRequestType<(typeof client.case)[':caseId']['documents']['$get']>,
) {
  return ['case', '/case/:caseId/documents', args] as const
}

export function getCaseCaseIdDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.case)[':caseId']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.case)[':caseId']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.case)[':caseId']['documents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCaseIdDocumentsQueryKey>
  >({
    queryKey: getCaseCaseIdDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.case[':caseId'].documents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCaseIdDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.case)[':caseId']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.case)[':caseId']['documents']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.case)[':caseId']['documents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCaseIdDocumentsQueryKey>
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
    return { ...getCaseCaseIdDocumentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCaseCaseIdHearingsQueryKey(
  args: InferRequestType<(typeof client.case)[':caseId']['hearings']['$get']>,
) {
  return ['case', '/case/:caseId/hearings', args] as const
}

export function getCaseCaseIdHearingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['hearings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.case)[':caseId']['hearings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.case)[':caseId']['hearings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCaseIdHearingsQueryKey>
  >({
    queryKey: getCaseCaseIdHearingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.case[':caseId'].hearings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCaseIdHearings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['hearings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.case)[':caseId']['hearings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.case)[':caseId']['hearings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCaseIdHearingsQueryKey>
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
    return { ...getCaseCaseIdHearingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCaseCaseIdJudgesQueryKey(
  args: InferRequestType<(typeof client.case)[':caseId']['judges']['$get']>,
) {
  return ['case', '/case/:caseId/judges', args] as const
}

export function getCaseCaseIdJudgesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['judges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.case)[':caseId']['judges']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['judges']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCaseIdJudgesQueryKey>
  >({
    queryKey: getCaseCaseIdJudgesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.case[':caseId'].judges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCaseIdJudges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['judges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.case)[':caseId']['judges']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.case)[':caseId']['judges']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCaseIdJudgesQueryKey>
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
    return { ...getCaseCaseIdJudgesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCaseCaseIdPartiesQueryKey(
  args: InferRequestType<(typeof client.case)[':caseId']['parties']['$get']>,
) {
  return ['case', '/case/:caseId/parties', args] as const
}

export function getCaseCaseIdPartiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['parties']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.case)[':caseId']['parties']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.case)[':caseId']['parties']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCaseIdPartiesQueryKey>
  >({
    queryKey: getCaseCaseIdPartiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.case[':caseId'].parties.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCaseIdParties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['parties']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.case)[':caseId']['parties']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.case)[':caseId']['parties']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCaseIdPartiesQueryKey>
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
    return { ...getCaseCaseIdPartiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCaseCaseIdRelatedCasesQueryKey(
  args: InferRequestType<(typeof client.case)[':caseId']['relatedCases']['$get']>,
) {
  return ['case', '/case/:caseId/relatedCases', args] as const
}

export function getCaseCaseIdRelatedCasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.case)[':caseId']['relatedCases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.case)[':caseId']['relatedCases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.case)[':caseId']['relatedCases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCaseIdRelatedCasesQueryKey>
  >({
    queryKey: getCaseCaseIdRelatedCasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.case[':caseId'].relatedCases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCaseIdRelatedCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.case)[':caseId']['relatedCases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.case)[':caseId']['relatedCases']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.case)[':caseId']['relatedCases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCaseIdRelatedCasesQueryKey>
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
      ...getCaseCaseIdRelatedCasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCaseCountAnalyticsByAreaOfLawQueryKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>,
) {
  return ['caseCountAnalyticsByAreaOfLaw', '/caseCountAnalyticsByAreaOfLaw', args] as const
}

export function getCaseCountAnalyticsByAreaOfLawQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByAreaOfLawQueryKey>
  >({
    queryKey: getCaseCountAnalyticsByAreaOfLawQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseCountAnalyticsByAreaOfLaw.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCountAnalyticsByAreaOfLaw<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCountAnalyticsByAreaOfLawQueryKey>
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
      ...getCaseCountAnalyticsByAreaOfLawQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCaseCountAnalyticsByCaseClassQueryKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseClass.$get>,
) {
  return ['caseCountAnalyticsByCaseClass', '/caseCountAnalyticsByCaseClass', args] as const
}

export function getCaseCountAnalyticsByCaseClassQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseClass.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseClass.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByCaseClassQueryKey>
  >({
    queryKey: getCaseCountAnalyticsByCaseClassQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseCountAnalyticsByCaseClass.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCountAnalyticsByCaseClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseCountAnalyticsByCaseClass.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseClass.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCountAnalyticsByCaseClassQueryKey>
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
      ...getCaseCountAnalyticsByCaseClassQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCaseCountAnalyticsByCaseFiledDateQueryKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseFiledDate.$get>,
) {
  return ['caseCountAnalyticsByCaseFiledDate', '/caseCountAnalyticsByCaseFiledDate', args] as const
}

export function getCaseCountAnalyticsByCaseFiledDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseFiledDate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseFiledDate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseFiledDate.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByCaseFiledDateQueryKey>
  >({
    queryKey: getCaseCountAnalyticsByCaseFiledDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseCountAnalyticsByCaseFiledDate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCountAnalyticsByCaseFiledDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseFiledDate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseCountAnalyticsByCaseFiledDate.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseFiledDate.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCountAnalyticsByCaseFiledDateQueryKey>
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
      ...getCaseCountAnalyticsByCaseFiledDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCaseCountAnalyticsByCaseTypeQueryKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseType.$get>,
) {
  return ['caseCountAnalyticsByCaseType', '/caseCountAnalyticsByCaseType', args] as const
}

export function getCaseCountAnalyticsByCaseTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseType.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseType.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseType.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByCaseTypeQueryKey>
  >({
    queryKey: getCaseCountAnalyticsByCaseTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseCountAnalyticsByCaseType.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCountAnalyticsByCaseType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseType.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseCountAnalyticsByCaseType.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseType.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCountAnalyticsByCaseTypeQueryKey>
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
      ...getCaseCountAnalyticsByCaseTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCaseCountAnalyticsByCaseTypeGroupQueryKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseTypeGroup.$get>,
) {
  return ['caseCountAnalyticsByCaseTypeGroup', '/caseCountAnalyticsByCaseTypeGroup', args] as const
}

export function getCaseCountAnalyticsByCaseTypeGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseTypeGroup.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseTypeGroup.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseTypeGroup.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByCaseTypeGroupQueryKey>
  >({
    queryKey: getCaseCountAnalyticsByCaseTypeGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseCountAnalyticsByCaseTypeGroup.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCountAnalyticsByCaseTypeGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseTypeGroup.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseCountAnalyticsByCaseTypeGroup.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseTypeGroup.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCountAnalyticsByCaseTypeGroupQueryKey>
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
      ...getCaseCountAnalyticsByCaseTypeGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCaseCountAnalyticsByCourtQueryKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourt.$get>,
) {
  return ['caseCountAnalyticsByCourt', '/caseCountAnalyticsByCourt', args] as const
}

export function getCaseCountAnalyticsByCourtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourt.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourt.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourt.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByCourtQueryKey>
  >({
    queryKey: getCaseCountAnalyticsByCourtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseCountAnalyticsByCourt.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCountAnalyticsByCourt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourt.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseCountAnalyticsByCourt.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByCourt.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCountAnalyticsByCourtQueryKey>
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
      ...getCaseCountAnalyticsByCourtQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCaseCountAnalyticsByCourtLocationQueryKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtLocation.$get>,
) {
  return ['caseCountAnalyticsByCourtLocation', '/caseCountAnalyticsByCourtLocation', args] as const
}

export function getCaseCountAnalyticsByCourtLocationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtLocation.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtLocation.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtLocation.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByCourtLocationQueryKey>
  >({
    queryKey: getCaseCountAnalyticsByCourtLocationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseCountAnalyticsByCourtLocation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCountAnalyticsByCourtLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtLocation.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseCountAnalyticsByCourtLocation.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtLocation.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCountAnalyticsByCourtLocationQueryKey>
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
      ...getCaseCountAnalyticsByCourtLocationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCaseCountAnalyticsByCourtSystemQueryKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtSystem.$get>,
) {
  return ['caseCountAnalyticsByCourtSystem', '/caseCountAnalyticsByCourtSystem', args] as const
}

export function getCaseCountAnalyticsByCourtSystemQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtSystem.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtSystem.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtSystem.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByCourtSystemQueryKey>
  >({
    queryKey: getCaseCountAnalyticsByCourtSystemQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseCountAnalyticsByCourtSystem.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCountAnalyticsByCourtSystem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtSystem.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseCountAnalyticsByCourtSystem.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtSystem.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCountAnalyticsByCourtSystemQueryKey>
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
      ...getCaseCountAnalyticsByCourtSystemQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCaseCountAnalyticsByCourtTypeQueryKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtType.$get>,
) {
  return ['caseCountAnalyticsByCourtType', '/caseCountAnalyticsByCourtType', args] as const
}

export function getCaseCountAnalyticsByCourtTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtType.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtType.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtType.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByCourtTypeQueryKey>
  >({
    queryKey: getCaseCountAnalyticsByCourtTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseCountAnalyticsByCourtType.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCountAnalyticsByCourtType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtType.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseCountAnalyticsByCourtType.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtType.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCountAnalyticsByCourtTypeQueryKey>
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
      ...getCaseCountAnalyticsByCourtTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCaseCountAnalyticsByJurisdictionGeoQueryKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByJurisdictionGeo.$get>,
) {
  return [
    'caseCountAnalyticsByJurisdictionGeo',
    '/caseCountAnalyticsByJurisdictionGeo',
    args,
  ] as const
}

export function getCaseCountAnalyticsByJurisdictionGeoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.caseCountAnalyticsByJurisdictionGeo.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByJurisdictionGeo.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.caseCountAnalyticsByJurisdictionGeo.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByJurisdictionGeoQueryKey>
  >({
    queryKey: getCaseCountAnalyticsByJurisdictionGeoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseCountAnalyticsByJurisdictionGeo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCountAnalyticsByJurisdictionGeo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.caseCountAnalyticsByJurisdictionGeo.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseCountAnalyticsByJurisdictionGeo.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByJurisdictionGeo.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCountAnalyticsByJurisdictionGeoQueryKey>
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
      ...getCaseCountAnalyticsByJurisdictionGeoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCaseCountAnalyticsByNormAttorneyQueryKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormAttorney.$get>,
) {
  return ['caseCountAnalyticsByNormAttorney', '/caseCountAnalyticsByNormAttorney', args] as const
}

export function getCaseCountAnalyticsByNormAttorneyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormAttorney.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormAttorney.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.caseCountAnalyticsByNormAttorney.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByNormAttorneyQueryKey>
  >({
    queryKey: getCaseCountAnalyticsByNormAttorneyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseCountAnalyticsByNormAttorney.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCountAnalyticsByNormAttorney<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormAttorney.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseCountAnalyticsByNormAttorney.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByNormAttorney.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCountAnalyticsByNormAttorneyQueryKey>
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
      ...getCaseCountAnalyticsByNormAttorneyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCaseCountAnalyticsByNormJudgeQueryKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormJudge.$get>,
) {
  return ['caseCountAnalyticsByNormJudge', '/caseCountAnalyticsByNormJudge', args] as const
}

export function getCaseCountAnalyticsByNormJudgeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormJudge.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormJudge.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormJudge.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByNormJudgeQueryKey>
  >({
    queryKey: getCaseCountAnalyticsByNormJudgeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseCountAnalyticsByNormJudge.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCountAnalyticsByNormJudge<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormJudge.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseCountAnalyticsByNormJudge.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByNormJudge.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCountAnalyticsByNormJudgeQueryKey>
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
      ...getCaseCountAnalyticsByNormJudgeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCaseCountAnalyticsByNormLawFirmQueryKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormLawFirm.$get>,
) {
  return ['caseCountAnalyticsByNormLawFirm', '/caseCountAnalyticsByNormLawFirm', args] as const
}

export function getCaseCountAnalyticsByNormLawFirmQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormLawFirm.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormLawFirm.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.caseCountAnalyticsByNormLawFirm.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByNormLawFirmQueryKey>
  >({
    queryKey: getCaseCountAnalyticsByNormLawFirmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseCountAnalyticsByNormLawFirm.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCountAnalyticsByNormLawFirm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormLawFirm.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseCountAnalyticsByNormLawFirm.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByNormLawFirm.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCountAnalyticsByNormLawFirmQueryKey>
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
      ...getCaseCountAnalyticsByNormLawFirmQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCaseCountAnalyticsByNormPartyQueryKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormParty.$get>,
) {
  return ['caseCountAnalyticsByNormParty', '/caseCountAnalyticsByNormParty', args] as const
}

export function getCaseCountAnalyticsByNormPartyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormParty.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormParty.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormParty.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByNormPartyQueryKey>
  >({
    queryKey: getCaseCountAnalyticsByNormPartyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseCountAnalyticsByNormParty.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCountAnalyticsByNormParty<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormParty.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseCountAnalyticsByNormParty.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByNormParty.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCountAnalyticsByNormPartyQueryKey>
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
      ...getCaseCountAnalyticsByNormPartyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCaseCountAnalyticsByPartyRoleQueryKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByPartyRole.$get>,
) {
  return ['caseCountAnalyticsByPartyRole', '/caseCountAnalyticsByPartyRole', args] as const
}

export function getCaseCountAnalyticsByPartyRoleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRole.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByPartyRole.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRole.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByPartyRoleQueryKey>
  >({
    queryKey: getCaseCountAnalyticsByPartyRoleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseCountAnalyticsByPartyRole.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCountAnalyticsByPartyRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRole.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseCountAnalyticsByPartyRole.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRole.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCountAnalyticsByPartyRoleQueryKey>
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
      ...getCaseCountAnalyticsByPartyRoleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCaseCountAnalyticsByPartyRoleGroupQueryKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByPartyRoleGroup.$get>,
) {
  return [
    'caseCountAnalyticsByPartyRoleGroup',
    '/caseCountAnalyticsByPartyRoleGroup',
    args,
  ] as const
}

export function getCaseCountAnalyticsByPartyRoleGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRoleGroup.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByPartyRoleGroup.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRoleGroup.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByPartyRoleGroupQueryKey>
  >({
    queryKey: getCaseCountAnalyticsByPartyRoleGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseCountAnalyticsByPartyRoleGroup.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseCountAnalyticsByPartyRoleGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRoleGroup.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseCountAnalyticsByPartyRoleGroup.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRoleGroup.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseCountAnalyticsByPartyRoleGroupQueryKey>
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
      ...getCaseCountAnalyticsByPartyRoleGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCaseDocumentCaseDocumentIdQueryKey(
  args: InferRequestType<(typeof client.caseDocument)[':caseDocumentId']['$get']>,
) {
  return ['caseDocument', '/caseDocument/:caseDocumentId', args] as const
}

export function getCaseDocumentCaseDocumentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.caseDocument)[':caseDocumentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.caseDocument)[':caseDocumentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.caseDocument)[':caseDocumentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseDocumentCaseDocumentIdQueryKey>
  >({
    queryKey: getCaseDocumentCaseDocumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseDocument[':caseDocumentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseDocumentCaseDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.caseDocument)[':caseDocumentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.caseDocument)[':caseDocumentId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.caseDocument)[':caseDocumentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseDocumentCaseDocumentIdQueryKey>
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
      ...getCaseDocumentCaseDocumentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCaseDocumentDownloadCaseDocumentIdQueryKey(
  args: InferRequestType<(typeof client.caseDocumentDownload)[':caseDocumentId']['$get']>,
) {
  return ['caseDocumentDownload', '/caseDocumentDownload/:caseDocumentId', args] as const
}

export function getCaseDocumentDownloadCaseDocumentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.caseDocumentDownload)[':caseDocumentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.caseDocumentDownload)[':caseDocumentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.caseDocumentDownload)[':caseDocumentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseDocumentDownloadCaseDocumentIdQueryKey>
  >({
    queryKey: getCaseDocumentDownloadCaseDocumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseDocumentDownload[':caseDocumentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseDocumentDownloadCaseDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.caseDocumentDownload)[':caseDocumentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.caseDocumentDownload)[':caseDocumentId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.caseDocumentDownload)[':caseDocumentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseDocumentDownloadCaseDocumentIdQueryKey>
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
      ...getCaseDocumentDownloadCaseDocumentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutCaseDocumentOrderMutationKey() {
  return ['caseDocumentOrder', '/caseDocumentOrder', 'PUT'] as const
}

export function getPutCaseDocumentOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseDocumentOrder.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.caseDocumentOrder.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutCaseDocumentOrderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.caseDocumentOrder.$put>) {
      return parseResponse(client.caseDocumentOrder.$put(args, options))
    },
  })
}

export function createPutCaseDocumentOrder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.caseDocumentOrder.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.caseDocumentOrder.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCaseDocumentOrderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCaseDocumentOrderCallbacksQueryKey(
  args: InferRequestType<typeof client.caseDocumentOrder.callbacks.$get>,
) {
  return ['caseDocumentOrder', '/caseDocumentOrder/callbacks', args] as const
}

export function getCaseDocumentOrderCallbacksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseDocumentOrder.callbacks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseDocumentOrder.callbacks.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.caseDocumentOrder.callbacks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseDocumentOrderCallbacksQueryKey>
  >({
    queryKey: getCaseDocumentOrderCallbacksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseDocumentOrder.callbacks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseDocumentOrderCallbacks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseDocumentOrder.callbacks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseDocumentOrder.callbacks.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseDocumentOrder.callbacks.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseDocumentOrderCallbacksQueryKey>
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
      ...getCaseDocumentOrderCallbacksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdQueryKey(
  args: InferRequestType<
    (typeof client.caseDocumentOrder.callbacks)[':caseDocumentOrderCallbackId']['$get']
  >,
) {
  return [
    'caseDocumentOrder',
    '/caseDocumentOrder/callbacks/:caseDocumentOrderCallbackId',
    args,
  ] as const
}

export function getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.caseDocumentOrder.callbacks)[':caseDocumentOrderCallbackId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.caseDocumentOrder.callbacks)[':caseDocumentOrderCallbackId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.caseDocumentOrder.callbacks)[':caseDocumentOrderCallbackId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdQueryKey>
  >({
    queryKey: getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseDocumentOrder.callbacks[':caseDocumentOrderCallbackId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseDocumentOrderCallbacksCaseDocumentOrderCallbackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.caseDocumentOrder.callbacks)[':caseDocumentOrderCallbackId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.caseDocumentOrder.callbacks)[':caseDocumentOrderCallbackId']['$get']
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
                    (typeof client.caseDocumentOrder.callbacks)[':caseDocumentOrderCallbackId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdQueryKey>
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
      ...getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCaseExportCallbacksQueryKey(
  args: InferRequestType<typeof client.caseExport.callbacks.$get>,
) {
  return ['caseExport', '/caseExport/callbacks', args] as const
}

export function getCaseExportCallbacksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseExport.callbacks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.caseExport.callbacks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseExport.callbacks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCaseExportCallbacksQueryKey>
  >({
    queryKey: getCaseExportCallbacksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseExport.callbacks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCaseExportCallbacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseExport.callbacks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseExport.callbacks.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.caseExport.callbacks.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseExportCallbacksQueryKey>
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
    return { ...getCaseExportCallbacksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCaseExportCallbacksCaseExportCallbackIdQueryKey(
  args: InferRequestType<(typeof client.caseExport.callbacks)[':caseExportCallbackId']['$get']>,
) {
  return ['caseExport', '/caseExport/callbacks/:caseExportCallbackId', args] as const
}

export function getCaseExportCallbacksCaseExportCallbackIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.caseExport.callbacks)[':caseExportCallbackId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.caseExport.callbacks)[':caseExportCallbackId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.caseExport.callbacks)[':caseExportCallbackId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseExportCallbacksCaseExportCallbackIdQueryKey>
  >({
    queryKey: getCaseExportCallbacksCaseExportCallbackIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseExport.callbacks[':caseExportCallbackId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseExportCallbacksCaseExportCallbackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.caseExport.callbacks)[':caseExportCallbackId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.caseExport.callbacks)[':caseExportCallbackId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.caseExport.callbacks)[':caseExportCallbackId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseExportCallbacksCaseExportCallbackIdQueryKey>
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
      ...getCaseExportCallbacksCaseExportCallbackIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCaseExportCaseIdQueryKey(
  args: InferRequestType<(typeof client.caseExport)[':caseId']['$get']>,
) {
  return ['caseExport', '/caseExport/:caseId', args] as const
}

export function getCaseExportCaseIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.caseExport)[':caseId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.caseExport)[':caseId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.caseExport)[':caseId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseExportCaseIdQueryKey>
  >({
    queryKey: getCaseExportCaseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseExport[':caseId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCaseExportCaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.caseExport)[':caseId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.caseExport)[':caseId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.caseExport)[':caseId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseExportCaseIdQueryKey>
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
    return { ...getCaseExportCaseIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCaseSearchQueryKey(args: InferRequestType<typeof client.caseSearch.$get>) {
  return ['caseSearch', '/caseSearch', args] as const
}

export function getCaseSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseSearch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.caseSearch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseSearch.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCaseSearchQueryKey>
  >({
    queryKey: getCaseSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseSearch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCaseSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseSearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseSearch.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseSearch.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCaseSearchQueryKey>
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
    return { ...getCaseSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCaseSearchCaseSearchIdQueryKey(
  args: InferRequestType<(typeof client.caseSearch)[':caseSearchId']['$get']>,
) {
  return ['caseSearch', '/caseSearch/:caseSearchId', args] as const
}

export function getCaseSearchCaseSearchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.caseSearch)[':caseSearchId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.caseSearch)[':caseSearchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.caseSearch)[':caseSearchId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseSearchCaseSearchIdQueryKey>
  >({
    queryKey: getCaseSearchCaseSearchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseSearch[':caseSearchId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCaseSearchCaseSearchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.caseSearch)[':caseSearchId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.caseSearch)[':caseSearchId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.caseSearch)[':caseSearchId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseSearchCaseSearchIdQueryKey>
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
      ...getCaseSearchCaseSearchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutCaseTrackMutationKey() {
  return ['caseTrack', '/caseTrack', 'PUT'] as const
}

export function getPutCaseTrackMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTrack.$put>>>>>,
    TError,
    InferRequestType<typeof client.caseTrack.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutCaseTrackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.caseTrack.$put>) {
      return parseResponse(client.caseTrack.$put(args, options))
    },
  })
}

export function createPutCaseTrack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTrack.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.caseTrack.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCaseTrackMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCaseTrackCaseIdQueryKey(
  args: InferRequestType<(typeof client.caseTrack)[':caseId']['$get']>,
) {
  return ['caseTrack', '/caseTrack/:caseId', args] as const
}

export function getCaseTrackCaseIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.caseTrack)[':caseId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.caseTrack)[':caseId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.caseTrack)[':caseId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseTrackCaseIdQueryKey>
  >({
    queryKey: getCaseTrackCaseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseTrack[':caseId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCaseTrackCaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.caseTrack)[':caseId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.caseTrack)[':caseId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.caseTrack)[':caseId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseTrackCaseIdQueryKey>
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
    return { ...getCaseTrackCaseIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteCaseTrackCaseIdMutationKey() {
  return ['caseTrack', '/caseTrack/:caseId', 'DELETE'] as const
}

export function getDeleteCaseTrackCaseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.caseTrack)[':caseId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.caseTrack)[':caseId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCaseTrackCaseIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.caseTrack)[':caseId']['$delete']>) {
      return parseResponse(client.caseTrack[':caseId'].$delete(args, options))
    },
  })
}

export function createDeleteCaseTrackCaseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.caseTrack)[':caseId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.caseTrack)[':caseId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCaseTrackCaseIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCaseTracksQueryKey(args: InferRequestType<typeof client.caseTracks.$get>) {
  return ['caseTracks', '/caseTracks', args] as const
}

export function getCaseTracksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTracks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.caseTracks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTracks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCaseTracksQueryKey>
  >({
    queryKey: getCaseTracksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseTracks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCaseTracks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTracks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseTracks.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTracks.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCaseTracksQueryKey>
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
    return { ...getCaseTracksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutCaseUpdateMutationKey() {
  return ['caseUpdate', '/caseUpdate', 'PUT'] as const
}

export function getPutCaseUpdateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdate.$put>>>>>,
    TError,
    InferRequestType<typeof client.caseUpdate.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutCaseUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.caseUpdate.$put>) {
      return parseResponse(client.caseUpdate.$put(args, options))
    },
  })
}

export function createPutCaseUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdate.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.caseUpdate.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCaseUpdateMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCaseUpdateCaseIdQueryKey(
  args: InferRequestType<(typeof client.caseUpdate)[':caseId']['$get']>,
) {
  return ['caseUpdate', '/caseUpdate/:caseId', args] as const
}

export function getCaseUpdateCaseIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.caseUpdate)[':caseId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.caseUpdate)[':caseId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.caseUpdate)[':caseId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseUpdateCaseIdQueryKey>
  >({
    queryKey: getCaseUpdateCaseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseUpdate[':caseId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCaseUpdateCaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.caseUpdate)[':caseId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.caseUpdate)[':caseId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.caseUpdate)[':caseId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCaseUpdateCaseIdQueryKey>
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
    return { ...getCaseUpdateCaseIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCaseUpdatesQueryKey(args: InferRequestType<typeof client.caseUpdates.$get>) {
  return ['caseUpdates', '/caseUpdates', args] as const
}

export function getCaseUpdatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.caseUpdates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCaseUpdatesQueryKey>
  >({
    queryKey: getCaseUpdatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.caseUpdates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCaseUpdates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.caseUpdates.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdates.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCaseUpdatesQueryKey>
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
    return { ...getCaseUpdatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCourtCoverageCourtIdQueryKey(
  args: InferRequestType<(typeof client.courtCoverage)[':courtId']['$get']>,
) {
  return ['courtCoverage', '/courtCoverage/:courtId', args] as const
}

export function getCourtCoverageCourtIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.courtCoverage)[':courtId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.courtCoverage)[':courtId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.courtCoverage)[':courtId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCourtCoverageCourtIdQueryKey>
  >({
    queryKey: getCourtCoverageCourtIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.courtCoverage[':courtId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCourtCoverageCourtId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.courtCoverage)[':courtId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.courtCoverage)[':courtId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.courtCoverage)[':courtId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCourtCoverageCourtIdQueryKey>
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
      ...getCourtCoverageCourtIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDailyUsageDateQueryKey(
  args: InferRequestType<(typeof client.dailyUsage)[':date']['$get']>,
) {
  return ['dailyUsage', '/dailyUsage/:date', args] as const
}

export function getDailyUsageDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dailyUsage)[':date']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dailyUsage)[':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dailyUsage)[':date']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDailyUsageDateQueryKey>
  >({
    queryKey: getDailyUsageDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dailyUsage[':date'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDailyUsageDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dailyUsage)[':date']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dailyUsage)[':date']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dailyUsage)[':date']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDailyUsageDateQueryKey>
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
    return { ...getDailyUsageDateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostGenerateNewTokenMutationKey() {
  return ['generateNewToken', '/generateNewToken', 'POST'] as const
}

export function getPostGenerateNewTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generateNewToken.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.generateNewToken.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGenerateNewTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.generateNewToken.$post>) {
      return parseResponse(client.generateNewToken.$post(args, options))
    },
  })
}

export function createPostGenerateNewToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.generateNewToken.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.generateNewToken.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGenerateNewTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutInvalidateAllTokensMutationKey() {
  return ['invalidateAllTokens', '/invalidateAllTokens', 'PUT'] as const
}

export function getPutInvalidateAllTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invalidateAllTokens.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.invalidateAllTokens.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutInvalidateAllTokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invalidateAllTokens.$put>) {
      return parseResponse(client.invalidateAllTokens.$put(args, options))
    },
  })
}

export function createPutInvalidateAllTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.invalidateAllTokens.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.invalidateAllTokens.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutInvalidateAllTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutInvalidateTokenMutationKey() {
  return ['invalidateToken', '/invalidateToken', 'PUT'] as const
}

export function getPutInvalidateTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invalidateToken.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.invalidateToken.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutInvalidateTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invalidateToken.$put>) {
      return parseResponse(client.invalidateToken.$put(args, options))
    },
  })
}

export function createPutInvalidateToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.invalidateToken.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.invalidateToken.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutInvalidateTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getJudgeJudgeIdQueryKey(
  args: InferRequestType<(typeof client.judge)[':judgeId']['$get']>,
) {
  return ['judge', '/judge/:judgeId', args] as const
}

export function getJudgeJudgeIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.judge)[':judgeId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.judge)[':judgeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.judge)[':judgeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJudgeJudgeIdQueryKey>
  >({
    queryKey: getJudgeJudgeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.judge[':judgeId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createJudgeJudgeId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.judge)[':judgeId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.judge)[':judgeId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.judge)[':judgeId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getJudgeJudgeIdQueryKey>
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
    return { ...getJudgeJudgeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutListAllTokenIdsMutationKey() {
  return ['listAllTokenIds', '/listAllTokenIds', 'PUT'] as const
}

export function getPutListAllTokenIdsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllTokenIds.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.listAllTokenIds.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutListAllTokenIdsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listAllTokenIds.$put>) {
      return parseResponse(client.listAllTokenIds.$put(args, options))
    },
  })
}

export function createPutListAllTokenIds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listAllTokenIds.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.listAllTokenIds.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutListAllTokenIdsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMasterDataAreaOfLawQueryKey(
  args: InferRequestType<typeof client.masterData.areaOfLaw.$get>,
) {
  return ['masterData', '/masterData/areaOfLaw', args] as const
}

export function getMasterDataAreaOfLawQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.areaOfLaw.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.masterData.areaOfLaw.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.areaOfLaw.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataAreaOfLawQueryKey>
  >({
    queryKey: getMasterDataAreaOfLawQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.areaOfLaw.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMasterDataAreaOfLaw<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.areaOfLaw.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.areaOfLaw.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.areaOfLaw.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataAreaOfLawQueryKey>
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
    return { ...getMasterDataAreaOfLawQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMasterDataAreaOfLawAreaOfLawIdQueryKey(
  args: InferRequestType<(typeof client.masterData.areaOfLaw)[':areaOfLawId']['$get']>,
) {
  return ['masterData', '/masterData/areaOfLaw/:areaOfLawId', args] as const
}

export function getMasterDataAreaOfLawAreaOfLawIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.areaOfLaw)[':areaOfLawId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.areaOfLaw)[':areaOfLawId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.masterData.areaOfLaw)[':areaOfLawId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataAreaOfLawAreaOfLawIdQueryKey>
  >({
    queryKey: getMasterDataAreaOfLawAreaOfLawIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.areaOfLaw[':areaOfLawId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataAreaOfLawAreaOfLawId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.areaOfLaw)[':areaOfLawId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.masterData.areaOfLaw)[':areaOfLawId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.masterData.areaOfLaw)[':areaOfLawId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataAreaOfLawAreaOfLawIdQueryKey>
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
      ...getMasterDataAreaOfLawAreaOfLawIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataAttorneyRepresentationTypeQueryKey(
  args: InferRequestType<typeof client.masterData.attorneyRepresentationType.$get>,
) {
  return ['masterData', '/masterData/attorneyRepresentationType', args] as const
}

export function getMasterDataAttorneyRepresentationTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.masterData.attorneyRepresentationType.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.attorneyRepresentationType.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.masterData.attorneyRepresentationType.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataAttorneyRepresentationTypeQueryKey>
  >({
    queryKey: getMasterDataAttorneyRepresentationTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.attorneyRepresentationType.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataAttorneyRepresentationType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.masterData.attorneyRepresentationType.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.attorneyRepresentationType.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.attorneyRepresentationType.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataAttorneyRepresentationTypeQueryKey>
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
      ...getMasterDataAttorneyRepresentationTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdQueryKey(
  args: InferRequestType<
    (typeof client.masterData.attorneyRepresentationType)[':attorneyRepresentationTypeId']['$get']
  >,
) {
  return [
    'masterData',
    '/masterData/attorneyRepresentationType/:attorneyRepresentationTypeId',
    args,
  ] as const
}

export function getMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.masterData.attorneyRepresentationType)[':attorneyRepresentationTypeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.masterData.attorneyRepresentationType)[':attorneyRepresentationTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.masterData.attorneyRepresentationType)[':attorneyRepresentationTypeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdQueryKey>
  >({
    queryKey: getMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.attorneyRepresentationType[':attorneyRepresentationTypeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.masterData.attorneyRepresentationType)[':attorneyRepresentationTypeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.masterData.attorneyRepresentationType)[':attorneyRepresentationTypeId']['$get']
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
                    (typeof client.masterData.attorneyRepresentationType)[':attorneyRepresentationTypeId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdQueryKey
          >
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
      ...getMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataAttorneyTypeQueryKey(
  args: InferRequestType<typeof client.masterData.attorneyType.$get>,
) {
  return ['masterData', '/masterData/attorneyType', args] as const
}

export function getMasterDataAttorneyTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.attorneyType.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.attorneyType.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.attorneyType.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataAttorneyTypeQueryKey>
  >({
    queryKey: getMasterDataAttorneyTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.attorneyType.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataAttorneyType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.attorneyType.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.attorneyType.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.attorneyType.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataAttorneyTypeQueryKey>
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
      ...getMasterDataAttorneyTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataAttorneyTypeAttorneyTypeIdQueryKey(
  args: InferRequestType<(typeof client.masterData.attorneyType)[':attorneyTypeId']['$get']>,
) {
  return ['masterData', '/masterData/attorneyType/:attorneyTypeId', args] as const
}

export function getMasterDataAttorneyTypeAttorneyTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.attorneyType)[':attorneyTypeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.attorneyType)[':attorneyTypeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.masterData.attorneyType)[':attorneyTypeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataAttorneyTypeAttorneyTypeIdQueryKey>
  >({
    queryKey: getMasterDataAttorneyTypeAttorneyTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.attorneyType[':attorneyTypeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataAttorneyTypeAttorneyTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.attorneyType)[':attorneyTypeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.masterData.attorneyType)[':attorneyTypeId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.attorneyType)[':attorneyTypeId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataAttorneyTypeAttorneyTypeIdQueryKey>
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
      ...getMasterDataAttorneyTypeAttorneyTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCaseClassQueryKey(
  args: InferRequestType<typeof client.masterData.caseClass.$get>,
) {
  return ['masterData', '/masterData/caseClass', args] as const
}

export function getMasterDataCaseClassQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseClass.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.masterData.caseClass.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseClass.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseClassQueryKey>
  >({
    queryKey: getMasterDataCaseClassQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.caseClass.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMasterDataCaseClass<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseClass.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.caseClass.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseClass.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCaseClassQueryKey>
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
    return { ...getMasterDataCaseClassQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMasterDataCaseClassCaseClassIdQueryKey(
  args: InferRequestType<(typeof client.masterData.caseClass)[':caseClassId']['$get']>,
) {
  return ['masterData', '/masterData/caseClass/:caseClassId', args] as const
}

export function getMasterDataCaseClassCaseClassIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.caseClass)[':caseClassId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.caseClass)[':caseClassId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.masterData.caseClass)[':caseClassId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseClassCaseClassIdQueryKey>
  >({
    queryKey: getMasterDataCaseClassCaseClassIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.caseClass[':caseClassId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCaseClassCaseClassId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.caseClass)[':caseClassId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.masterData.caseClass)[':caseClassId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.masterData.caseClass)[':caseClassId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCaseClassCaseClassIdQueryKey>
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
      ...getMasterDataCaseClassCaseClassIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCaseRelationshipTypeQueryKey(
  args: InferRequestType<typeof client.masterData.caseRelationshipType.$get>,
) {
  return ['masterData', '/masterData/caseRelationshipType', args] as const
}

export function getMasterDataCaseRelationshipTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseRelationshipType.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.caseRelationshipType.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.masterData.caseRelationshipType.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseRelationshipTypeQueryKey>
  >({
    queryKey: getMasterDataCaseRelationshipTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.caseRelationshipType.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCaseRelationshipType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseRelationshipType.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.caseRelationshipType.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.caseRelationshipType.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCaseRelationshipTypeQueryKey>
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
      ...getMasterDataCaseRelationshipTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCaseRelationshipTypeCaseRelationshipTypeIdQueryKey(
  args: InferRequestType<
    (typeof client.masterData.caseRelationshipType)[':caseRelationshipTypeId']['$get']
  >,
) {
  return ['masterData', '/masterData/caseRelationshipType/:caseRelationshipTypeId', args] as const
}

export function getMasterDataCaseRelationshipTypeCaseRelationshipTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.masterData.caseRelationshipType)[':caseRelationshipTypeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.masterData.caseRelationshipType)[':caseRelationshipTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.masterData.caseRelationshipType)[':caseRelationshipTypeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseRelationshipTypeCaseRelationshipTypeIdQueryKey>
  >({
    queryKey: getMasterDataCaseRelationshipTypeCaseRelationshipTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.caseRelationshipType[':caseRelationshipTypeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCaseRelationshipTypeCaseRelationshipTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.masterData.caseRelationshipType)[':caseRelationshipTypeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.masterData.caseRelationshipType)[':caseRelationshipTypeId']['$get']
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
                    (typeof client.masterData.caseRelationshipType)[':caseRelationshipTypeId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCaseRelationshipTypeCaseRelationshipTypeIdQueryKey>
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
      ...getMasterDataCaseRelationshipTypeCaseRelationshipTypeIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCaseStatusQueryKey(
  args: InferRequestType<typeof client.masterData.caseStatus.$get>,
) {
  return ['masterData', '/masterData/caseStatus', args] as const
}

export function getMasterDataCaseStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatus.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.caseStatus.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatus.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseStatusQueryKey>
  >({
    queryKey: getMasterDataCaseStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.caseStatus.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMasterDataCaseStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatus.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.caseStatus.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatus.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCaseStatusQueryKey>
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
      ...getMasterDataCaseStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCaseStatusCaseStatusIdQueryKey(
  args: InferRequestType<(typeof client.masterData.caseStatus)[':caseStatusId']['$get']>,
) {
  return ['masterData', '/masterData/caseStatus/:caseStatusId', args] as const
}

export function getMasterDataCaseStatusCaseStatusIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.caseStatus)[':caseStatusId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.caseStatus)[':caseStatusId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.masterData.caseStatus)[':caseStatusId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseStatusCaseStatusIdQueryKey>
  >({
    queryKey: getMasterDataCaseStatusCaseStatusIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.caseStatus[':caseStatusId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCaseStatusCaseStatusId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.caseStatus)[':caseStatusId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.masterData.caseStatus)[':caseStatusId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.masterData.caseStatus)[':caseStatusId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCaseStatusCaseStatusIdQueryKey>
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
      ...getMasterDataCaseStatusCaseStatusIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCaseStatusGroupQueryKey(
  args: InferRequestType<typeof client.masterData.caseStatusGroup.$get>,
) {
  return ['masterData', '/masterData/caseStatusGroup', args] as const
}

export function getMasterDataCaseStatusGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatusGroup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.caseStatusGroup.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatusGroup.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseStatusGroupQueryKey>
  >({
    queryKey: getMasterDataCaseStatusGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.caseStatusGroup.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCaseStatusGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatusGroup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.caseStatusGroup.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.caseStatusGroup.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCaseStatusGroupQueryKey>
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
      ...getMasterDataCaseStatusGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCaseStatusGroupCaseStatusGroupIdQueryKey(
  args: InferRequestType<(typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']>,
) {
  return ['masterData', '/masterData/caseStatusGroup/:caseStatusGroupId', args] as const
}

export function getMasterDataCaseStatusGroupCaseStatusGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseStatusGroupCaseStatusGroupIdQueryKey>
  >({
    queryKey: getMasterDataCaseStatusGroupCaseStatusGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.caseStatusGroup[':caseStatusGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCaseStatusGroupCaseStatusGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']
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
                    (typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCaseStatusGroupCaseStatusGroupIdQueryKey>
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
      ...getMasterDataCaseStatusGroupCaseStatusGroupIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCaseTypeQueryKey(
  args: InferRequestType<typeof client.masterData.caseType.$get>,
) {
  return ['masterData', '/masterData/caseType', args] as const
}

export function getMasterDataCaseTypeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseType.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.masterData.caseType.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseType.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseTypeQueryKey>
  >({
    queryKey: getMasterDataCaseTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.caseType.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMasterDataCaseType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseType.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.caseType.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseType.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCaseTypeQueryKey>
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
    return { ...getMasterDataCaseTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMasterDataCaseTypeCaseTypeIdQueryKey(
  args: InferRequestType<(typeof client.masterData.caseType)[':caseTypeId']['$get']>,
) {
  return ['masterData', '/masterData/caseType/:caseTypeId', args] as const
}

export function getMasterDataCaseTypeCaseTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.caseType)[':caseTypeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.caseType)[':caseTypeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.masterData.caseType)[':caseTypeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseTypeCaseTypeIdQueryKey>
  >({
    queryKey: getMasterDataCaseTypeCaseTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.caseType[':caseTypeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCaseTypeCaseTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.caseType)[':caseTypeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.masterData.caseType)[':caseTypeId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.masterData.caseType)[':caseTypeId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCaseTypeCaseTypeIdQueryKey>
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
      ...getMasterDataCaseTypeCaseTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCaseTypeGroupQueryKey(
  args: InferRequestType<typeof client.masterData.caseTypeGroup.$get>,
) {
  return ['masterData', '/masterData/caseTypeGroup', args] as const
}

export function getMasterDataCaseTypeGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseTypeGroup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.caseTypeGroup.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseTypeGroup.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseTypeGroupQueryKey>
  >({
    queryKey: getMasterDataCaseTypeGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.caseTypeGroup.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCaseTypeGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseTypeGroup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.caseTypeGroup.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseTypeGroup.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCaseTypeGroupQueryKey>
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
      ...getMasterDataCaseTypeGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCaseTypeGroupCaseTypeGroupIdQueryKey(
  args: InferRequestType<(typeof client.masterData.caseTypeGroup)[':caseTypeGroupId']['$get']>,
) {
  return ['masterData', '/masterData/caseTypeGroup/:caseTypeGroupId', args] as const
}

export function getMasterDataCaseTypeGroupCaseTypeGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.caseTypeGroup)[':caseTypeGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.caseTypeGroup)[':caseTypeGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.masterData.caseTypeGroup)[':caseTypeGroupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseTypeGroupCaseTypeGroupIdQueryKey>
  >({
    queryKey: getMasterDataCaseTypeGroupCaseTypeGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.caseTypeGroup[':caseTypeGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCaseTypeGroupCaseTypeGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.caseTypeGroup)[':caseTypeGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.masterData.caseTypeGroup)[':caseTypeGroupId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.caseTypeGroup)[':caseTypeGroupId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCaseTypeGroupCaseTypeGroupIdQueryKey>
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
      ...getMasterDataCaseTypeGroupCaseTypeGroupIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCauseOfActionQueryKey(
  args: InferRequestType<typeof client.masterData.causeOfAction.$get>,
) {
  return ['masterData', '/masterData/causeOfAction', args] as const
}

export function getMasterDataCauseOfActionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfAction.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.causeOfAction.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfAction.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCauseOfActionQueryKey>
  >({
    queryKey: getMasterDataCauseOfActionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.causeOfAction.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCauseOfAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfAction.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.causeOfAction.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfAction.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCauseOfActionQueryKey>
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
      ...getMasterDataCauseOfActionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCauseOfActionCauseOfActionIdQueryKey(
  args: InferRequestType<(typeof client.masterData.causeOfAction)[':causeOfActionId']['$get']>,
) {
  return ['masterData', '/masterData/causeOfAction/:causeOfActionId', args] as const
}

export function getMasterDataCauseOfActionCauseOfActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.causeOfAction)[':causeOfActionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.causeOfAction)[':causeOfActionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.masterData.causeOfAction)[':causeOfActionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCauseOfActionCauseOfActionIdQueryKey>
  >({
    queryKey: getMasterDataCauseOfActionCauseOfActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.causeOfAction[':causeOfActionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCauseOfActionCauseOfActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.causeOfAction)[':causeOfActionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.masterData.causeOfAction)[':causeOfActionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.causeOfAction)[':causeOfActionId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCauseOfActionCauseOfActionIdQueryKey>
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
      ...getMasterDataCauseOfActionCauseOfActionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCauseOfActionAdditionalDataQueryKey(
  args: InferRequestType<typeof client.masterData.causeOfActionAdditionalData.$get>,
) {
  return ['masterData', '/masterData/causeOfActionAdditionalData', args] as const
}

export function getMasterDataCauseOfActionAdditionalDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.masterData.causeOfActionAdditionalData.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.causeOfActionAdditionalData.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.masterData.causeOfActionAdditionalData.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCauseOfActionAdditionalDataQueryKey>
  >({
    queryKey: getMasterDataCauseOfActionAdditionalDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.causeOfActionAdditionalData.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCauseOfActionAdditionalData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.masterData.causeOfActionAdditionalData.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.causeOfActionAdditionalData.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.causeOfActionAdditionalData.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCauseOfActionAdditionalDataQueryKey>
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
      ...getMasterDataCauseOfActionAdditionalDataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdQueryKey(
  args: InferRequestType<
    (typeof client.masterData.causeOfActionAdditionalData)[':causeOfActionAdditionalDataId']['$get']
  >,
) {
  return [
    'masterData',
    '/masterData/causeOfActionAdditionalData/:causeOfActionAdditionalDataId',
    args,
  ] as const
}

export function getMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.masterData.causeOfActionAdditionalData)[':causeOfActionAdditionalDataId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.masterData.causeOfActionAdditionalData)[':causeOfActionAdditionalDataId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.masterData.causeOfActionAdditionalData)[':causeOfActionAdditionalDataId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdQueryKey>
  >({
    queryKey: getMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.causeOfActionAdditionalData[':causeOfActionAdditionalDataId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.masterData.causeOfActionAdditionalData)[':causeOfActionAdditionalDataId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.masterData.causeOfActionAdditionalData)[':causeOfActionAdditionalDataId']['$get']
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
                    (typeof client.masterData.causeOfActionAdditionalData)[':causeOfActionAdditionalDataId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdQueryKey
          >
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
      ...getMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCauseOfActionGroupQueryKey(
  args: InferRequestType<typeof client.masterData.causeOfActionGroup.$get>,
) {
  return ['masterData', '/masterData/causeOfActionGroup', args] as const
}

export function getMasterDataCauseOfActionGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfActionGroup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.causeOfActionGroup.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfActionGroup.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCauseOfActionGroupQueryKey>
  >({
    queryKey: getMasterDataCauseOfActionGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.causeOfActionGroup.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCauseOfActionGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfActionGroup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.causeOfActionGroup.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.causeOfActionGroup.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCauseOfActionGroupQueryKey>
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
      ...getMasterDataCauseOfActionGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCauseOfActionGroupCauseOfActionGroupIdQueryKey(
  args: InferRequestType<
    (typeof client.masterData.causeOfActionGroup)[':causeOfActionGroupId']['$get']
  >,
) {
  return ['masterData', '/masterData/causeOfActionGroup/:causeOfActionGroupId', args] as const
}

export function getMasterDataCauseOfActionGroupCauseOfActionGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.masterData.causeOfActionGroup)[':causeOfActionGroupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.masterData.causeOfActionGroup)[':causeOfActionGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.masterData.causeOfActionGroup)[':causeOfActionGroupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCauseOfActionGroupCauseOfActionGroupIdQueryKey>
  >({
    queryKey: getMasterDataCauseOfActionGroupCauseOfActionGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.causeOfActionGroup[':causeOfActionGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCauseOfActionGroupCauseOfActionGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.masterData.causeOfActionGroup)[':causeOfActionGroupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.masterData.causeOfActionGroup)[':causeOfActionGroupId']['$get']
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
                    (typeof client.masterData.causeOfActionGroup)[':causeOfActionGroupId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCauseOfActionGroupCauseOfActionGroupIdQueryKey>
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
      ...getMasterDataCauseOfActionGroupCauseOfActionGroupIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataChargeQueryKey(
  args: InferRequestType<typeof client.masterData.charge.$get>,
) {
  return ['masterData', '/masterData/charge', args] as const
}

export function getMasterDataChargeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.charge.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.masterData.charge.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.charge.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataChargeQueryKey>
  >({
    queryKey: getMasterDataChargeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.charge.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMasterDataCharge<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.charge.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.charge.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.charge.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataChargeQueryKey>
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
    return { ...getMasterDataChargeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMasterDataChargeChargeIdQueryKey(
  args: InferRequestType<(typeof client.masterData.charge)[':chargeId']['$get']>,
) {
  return ['masterData', '/masterData/charge/:chargeId', args] as const
}

export function getMasterDataChargeChargeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.charge)[':chargeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.charge)[':chargeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.masterData.charge)[':chargeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataChargeChargeIdQueryKey>
  >({
    queryKey: getMasterDataChargeChargeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.charge[':chargeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataChargeChargeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.charge)[':chargeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.masterData.charge)[':chargeId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.masterData.charge)[':chargeId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataChargeChargeIdQueryKey>
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
      ...getMasterDataChargeChargeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataChargeAdditionalDataQueryKey(
  args: InferRequestType<typeof client.masterData.chargeAdditionalData.$get>,
) {
  return ['masterData', '/masterData/chargeAdditionalData', args] as const
}

export function getMasterDataChargeAdditionalDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeAdditionalData.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.chargeAdditionalData.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.masterData.chargeAdditionalData.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataChargeAdditionalDataQueryKey>
  >({
    queryKey: getMasterDataChargeAdditionalDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.chargeAdditionalData.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataChargeAdditionalData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeAdditionalData.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.chargeAdditionalData.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.chargeAdditionalData.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataChargeAdditionalDataQueryKey>
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
      ...getMasterDataChargeAdditionalDataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataChargeAdditionalDataChargeAdditionalDataIdQueryKey(
  args: InferRequestType<
    (typeof client.masterData.chargeAdditionalData)[':chargeAdditionalDataId']['$get']
  >,
) {
  return ['masterData', '/masterData/chargeAdditionalData/:chargeAdditionalDataId', args] as const
}

export function getMasterDataChargeAdditionalDataChargeAdditionalDataIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.masterData.chargeAdditionalData)[':chargeAdditionalDataId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.masterData.chargeAdditionalData)[':chargeAdditionalDataId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.masterData.chargeAdditionalData)[':chargeAdditionalDataId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataChargeAdditionalDataChargeAdditionalDataIdQueryKey>
  >({
    queryKey: getMasterDataChargeAdditionalDataChargeAdditionalDataIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.chargeAdditionalData[':chargeAdditionalDataId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataChargeAdditionalDataChargeAdditionalDataId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.masterData.chargeAdditionalData)[':chargeAdditionalDataId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.masterData.chargeAdditionalData)[':chargeAdditionalDataId']['$get']
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
                    (typeof client.masterData.chargeAdditionalData)[':chargeAdditionalDataId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataChargeAdditionalDataChargeAdditionalDataIdQueryKey>
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
      ...getMasterDataChargeAdditionalDataChargeAdditionalDataIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataChargeDegreeQueryKey(
  args: InferRequestType<typeof client.masterData.chargeDegree.$get>,
) {
  return ['masterData', '/masterData/chargeDegree', args] as const
}

export function getMasterDataChargeDegreeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeDegree.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.chargeDegree.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeDegree.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataChargeDegreeQueryKey>
  >({
    queryKey: getMasterDataChargeDegreeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.chargeDegree.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataChargeDegree<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeDegree.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.chargeDegree.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeDegree.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataChargeDegreeQueryKey>
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
      ...getMasterDataChargeDegreeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataChargeDegreeChargeDegreeIdQueryKey(
  args: InferRequestType<(typeof client.masterData.chargeDegree)[':chargeDegreeId']['$get']>,
) {
  return ['masterData', '/masterData/chargeDegree/:chargeDegreeId', args] as const
}

export function getMasterDataChargeDegreeChargeDegreeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.chargeDegree)[':chargeDegreeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.chargeDegree)[':chargeDegreeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.masterData.chargeDegree)[':chargeDegreeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataChargeDegreeChargeDegreeIdQueryKey>
  >({
    queryKey: getMasterDataChargeDegreeChargeDegreeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.chargeDegree[':chargeDegreeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataChargeDegreeChargeDegreeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.chargeDegree)[':chargeDegreeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.masterData.chargeDegree)[':chargeDegreeId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.chargeDegree)[':chargeDegreeId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataChargeDegreeChargeDegreeIdQueryKey>
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
      ...getMasterDataChargeDegreeChargeDegreeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataChargeGroupQueryKey(
  args: InferRequestType<typeof client.masterData.chargeGroup.$get>,
) {
  return ['masterData', '/masterData/chargeGroup', args] as const
}

export function getMasterDataChargeGroupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeGroup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.chargeGroup.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeGroup.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataChargeGroupQueryKey>
  >({
    queryKey: getMasterDataChargeGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.chargeGroup.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataChargeGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeGroup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.chargeGroup.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeGroup.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataChargeGroupQueryKey>
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
      ...getMasterDataChargeGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataChargeGroupChargeGroupIdQueryKey(
  args: InferRequestType<(typeof client.masterData.chargeGroup)[':chargeGroupId']['$get']>,
) {
  return ['masterData', '/masterData/chargeGroup/:chargeGroupId', args] as const
}

export function getMasterDataChargeGroupChargeGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.chargeGroup)[':chargeGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.chargeGroup)[':chargeGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.masterData.chargeGroup)[':chargeGroupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataChargeGroupChargeGroupIdQueryKey>
  >({
    queryKey: getMasterDataChargeGroupChargeGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.chargeGroup[':chargeGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataChargeGroupChargeGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.chargeGroup)[':chargeGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.masterData.chargeGroup)[':chargeGroupId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.chargeGroup)[':chargeGroupId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataChargeGroupChargeGroupIdQueryKey>
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
      ...getMasterDataChargeGroupChargeGroupIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataChargeSeverityQueryKey(
  args: InferRequestType<typeof client.masterData.chargeSeverity.$get>,
) {
  return ['masterData', '/masterData/chargeSeverity', args] as const
}

export function getMasterDataChargeSeverityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeSeverity.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.chargeSeverity.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeSeverity.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataChargeSeverityQueryKey>
  >({
    queryKey: getMasterDataChargeSeverityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.chargeSeverity.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataChargeSeverity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeSeverity.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.chargeSeverity.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.chargeSeverity.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataChargeSeverityQueryKey>
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
      ...getMasterDataChargeSeverityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataChargeSeverityChargeSeverityIdQueryKey(
  args: InferRequestType<(typeof client.masterData.chargeSeverity)[':chargeSeverityId']['$get']>,
) {
  return ['masterData', '/masterData/chargeSeverity/:chargeSeverityId', args] as const
}

export function getMasterDataChargeSeverityChargeSeverityIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.chargeSeverity)[':chargeSeverityId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.chargeSeverity)[':chargeSeverityId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.masterData.chargeSeverity)[':chargeSeverityId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataChargeSeverityChargeSeverityIdQueryKey>
  >({
    queryKey: getMasterDataChargeSeverityChargeSeverityIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.chargeSeverity[':chargeSeverityId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataChargeSeverityChargeSeverityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.chargeSeverity)[':chargeSeverityId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.masterData.chargeSeverity)[':chargeSeverityId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.chargeSeverity)[':chargeSeverityId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataChargeSeverityChargeSeverityIdQueryKey>
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
      ...getMasterDataChargeSeverityChargeSeverityIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCourtQueryKey(
  args: InferRequestType<typeof client.masterData.court.$get>,
) {
  return ['masterData', '/masterData/court', args] as const
}

export function getMasterDataCourtQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.court.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.masterData.court.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.court.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtQueryKey>
  >({
    queryKey: getMasterDataCourtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.court.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMasterDataCourt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.court.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.court.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.court.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCourtQueryKey>
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
    return { ...getMasterDataCourtQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMasterDataCourtCourtIdQueryKey(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['$get']>,
) {
  return ['masterData', '/masterData/court/:courtId', args] as const
}

export function getMasterDataCourtCourtIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.court)[':courtId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.masterData.court)[':courtId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtCourtIdQueryKey>
  >({
    queryKey: getMasterDataCourtCourtIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.court[':courtId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCourtCourtId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.court)[':courtId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.masterData.court)[':courtId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.masterData.court)[':courtId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCourtCourtIdQueryKey>
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
      ...getMasterDataCourtCourtIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCourtCourtIdAppealCourtsQueryKey(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['appealCourts']['$get']>,
) {
  return ['masterData', '/masterData/court/:courtId/appealCourts', args] as const
}

export function getMasterDataCourtCourtIdAppealCourtsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.court)[':courtId']['appealCourts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['appealCourts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.masterData.court)[':courtId']['appealCourts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtCourtIdAppealCourtsQueryKey>
  >({
    queryKey: getMasterDataCourtCourtIdAppealCourtsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.court[':courtId'].appealCourts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCourtCourtIdAppealCourts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.court)[':courtId']['appealCourts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.masterData.court)[':courtId']['appealCourts']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.court)[':courtId']['appealCourts']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCourtCourtIdAppealCourtsQueryKey>
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
      ...getMasterDataCourtCourtIdAppealCourtsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCourtCourtIdCourtLocationsQueryKey(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['courtLocations']['$get']>,
) {
  return ['masterData', '/masterData/court/:courtId/courtLocations', args] as const
}

export function getMasterDataCourtCourtIdCourtLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.court)[':courtId']['courtLocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['courtLocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.masterData.court)[':courtId']['courtLocations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtCourtIdCourtLocationsQueryKey>
  >({
    queryKey: getMasterDataCourtCourtIdCourtLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.court[':courtId'].courtLocations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCourtCourtIdCourtLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.court)[':courtId']['courtLocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.masterData.court)[':courtId']['courtLocations']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.court)[':courtId']['courtLocations']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCourtCourtIdCourtLocationsQueryKey>
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
      ...getMasterDataCourtCourtIdCourtLocationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCourtCourtIdJurisdictionGeoQueryKey(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']>,
) {
  return ['masterData', '/masterData/court/:courtId/jurisdictionGeo', args] as const
}

export function getMasterDataCourtCourtIdJurisdictionGeoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtCourtIdJurisdictionGeoQueryKey>
  >({
    queryKey: getMasterDataCourtCourtIdJurisdictionGeoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.court[':courtId'].jurisdictionGeo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCourtCourtIdJurisdictionGeo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']
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
                    (typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCourtCourtIdJurisdictionGeoQueryKey>
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
      ...getMasterDataCourtCourtIdJurisdictionGeoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCourtLocationQueryKey(
  args: InferRequestType<typeof client.masterData.courtLocation.$get>,
) {
  return ['masterData', '/masterData/courtLocation', args] as const
}

export function getMasterDataCourtLocationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtLocation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.courtLocation.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtLocation.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtLocationQueryKey>
  >({
    queryKey: getMasterDataCourtLocationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.courtLocation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCourtLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtLocation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.courtLocation.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtLocation.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCourtLocationQueryKey>
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
      ...getMasterDataCourtLocationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCourtLocationCourtLocationIdQueryKey(
  args: InferRequestType<(typeof client.masterData.courtLocation)[':courtLocationId']['$get']>,
) {
  return ['masterData', '/masterData/courtLocation/:courtLocationId', args] as const
}

export function getMasterDataCourtLocationCourtLocationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.courtLocation)[':courtLocationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.courtLocation)[':courtLocationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.masterData.courtLocation)[':courtLocationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtLocationCourtLocationIdQueryKey>
  >({
    queryKey: getMasterDataCourtLocationCourtLocationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.courtLocation[':courtLocationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCourtLocationCourtLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.courtLocation)[':courtLocationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.masterData.courtLocation)[':courtLocationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.courtLocation)[':courtLocationId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCourtLocationCourtLocationIdQueryKey>
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
      ...getMasterDataCourtLocationCourtLocationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCourtLocationCourtLocationIdCourtsQueryKey(
  args: InferRequestType<
    (typeof client.masterData.courtLocation)[':courtLocationId']['courts']['$get']
  >,
) {
  return ['masterData', '/masterData/courtLocation/:courtLocationId/courts', args] as const
}

export function getMasterDataCourtLocationCourtLocationIdCourtsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.masterData.courtLocation)[':courtLocationId']['courts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.masterData.courtLocation)[':courtLocationId']['courts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.masterData.courtLocation)[':courtLocationId']['courts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtLocationCourtLocationIdCourtsQueryKey>
  >({
    queryKey: getMasterDataCourtLocationCourtLocationIdCourtsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.courtLocation[':courtLocationId'].courts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCourtLocationCourtLocationIdCourts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.masterData.courtLocation)[':courtLocationId']['courts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.masterData.courtLocation)[':courtLocationId']['courts']['$get']
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
                    (typeof client.masterData.courtLocation)[':courtLocationId']['courts']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCourtLocationCourtLocationIdCourtsQueryKey>
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
      ...getMasterDataCourtLocationCourtLocationIdCourtsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCourtServiceStatusQueryKey(
  args: InferRequestType<typeof client.masterData.courtServiceStatus.$get>,
) {
  return ['masterData', '/masterData/courtServiceStatus', args] as const
}

export function getMasterDataCourtServiceStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtServiceStatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.courtServiceStatus.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtServiceStatus.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtServiceStatusQueryKey>
  >({
    queryKey: getMasterDataCourtServiceStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.courtServiceStatus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCourtServiceStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtServiceStatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.courtServiceStatus.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.courtServiceStatus.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCourtServiceStatusQueryKey>
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
      ...getMasterDataCourtServiceStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCourtServiceStatusCourtServiceStatusIdQueryKey(
  args: InferRequestType<
    (typeof client.masterData.courtServiceStatus)[':courtServiceStatusId']['$get']
  >,
) {
  return ['masterData', '/masterData/courtServiceStatus/:courtServiceStatusId', args] as const
}

export function getMasterDataCourtServiceStatusCourtServiceStatusIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.masterData.courtServiceStatus)[':courtServiceStatusId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.masterData.courtServiceStatus)[':courtServiceStatusId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.masterData.courtServiceStatus)[':courtServiceStatusId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtServiceStatusCourtServiceStatusIdQueryKey>
  >({
    queryKey: getMasterDataCourtServiceStatusCourtServiceStatusIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.courtServiceStatus[':courtServiceStatusId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCourtServiceStatusCourtServiceStatusId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.masterData.courtServiceStatus)[':courtServiceStatusId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.masterData.courtServiceStatus)[':courtServiceStatusId']['$get']
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
                    (typeof client.masterData.courtServiceStatus)[':courtServiceStatusId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCourtServiceStatusCourtServiceStatusIdQueryKey>
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
      ...getMasterDataCourtServiceStatusCourtServiceStatusIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCourtSystemQueryKey(
  args: InferRequestType<typeof client.masterData.courtSystem.$get>,
) {
  return ['masterData', '/masterData/courtSystem', args] as const
}

export function getMasterDataCourtSystemQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtSystem.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.courtSystem.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtSystem.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtSystemQueryKey>
  >({
    queryKey: getMasterDataCourtSystemQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.courtSystem.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCourtSystem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtSystem.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.courtSystem.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtSystem.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCourtSystemQueryKey>
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
      ...getMasterDataCourtSystemQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCourtSystemCourtSystemIdQueryKey(
  args: InferRequestType<(typeof client.masterData.courtSystem)[':courtSystemId']['$get']>,
) {
  return ['masterData', '/masterData/courtSystem/:courtSystemId', args] as const
}

export function getMasterDataCourtSystemCourtSystemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.courtSystem)[':courtSystemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.courtSystem)[':courtSystemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.masterData.courtSystem)[':courtSystemId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtSystemCourtSystemIdQueryKey>
  >({
    queryKey: getMasterDataCourtSystemCourtSystemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.courtSystem[':courtSystemId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCourtSystemCourtSystemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.courtSystem)[':courtSystemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.masterData.courtSystem)[':courtSystemId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.courtSystem)[':courtSystemId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCourtSystemCourtSystemIdQueryKey>
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
      ...getMasterDataCourtSystemCourtSystemIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataCourtTypeQueryKey(
  args: InferRequestType<typeof client.masterData.courtType.$get>,
) {
  return ['masterData', '/masterData/courtType', args] as const
}

export function getMasterDataCourtTypeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtType.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.masterData.courtType.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtType.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtTypeQueryKey>
  >({
    queryKey: getMasterDataCourtTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.courtType.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMasterDataCourtType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtType.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.courtType.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtType.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCourtTypeQueryKey>
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
    return { ...getMasterDataCourtTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMasterDataCourtTypeCourtTypeIdQueryKey(
  args: InferRequestType<(typeof client.masterData.courtType)[':courtTypeId']['$get']>,
) {
  return ['masterData', '/masterData/courtType/:courtTypeId', args] as const
}

export function getMasterDataCourtTypeCourtTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.courtType)[':courtTypeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.courtType)[':courtTypeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.masterData.courtType)[':courtTypeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtTypeCourtTypeIdQueryKey>
  >({
    queryKey: getMasterDataCourtTypeCourtTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.courtType[':courtTypeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataCourtTypeCourtTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.courtType)[':courtTypeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.masterData.courtType)[':courtTypeId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.masterData.courtType)[':courtTypeId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataCourtTypeCourtTypeIdQueryKey>
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
      ...getMasterDataCourtTypeCourtTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataJudgeTypeQueryKey(
  args: InferRequestType<typeof client.masterData.judgeType.$get>,
) {
  return ['masterData', '/masterData/judgeType', args] as const
}

export function getMasterDataJudgeTypeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.judgeType.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.masterData.judgeType.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.judgeType.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataJudgeTypeQueryKey>
  >({
    queryKey: getMasterDataJudgeTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.judgeType.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMasterDataJudgeType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.judgeType.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.judgeType.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.judgeType.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataJudgeTypeQueryKey>
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
    return { ...getMasterDataJudgeTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMasterDataJudgeTypeJudgeTypeIdQueryKey(
  args: InferRequestType<(typeof client.masterData.judgeType)[':judgeTypeId']['$get']>,
) {
  return ['masterData', '/masterData/judgeType/:judgeTypeId', args] as const
}

export function getMasterDataJudgeTypeJudgeTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.judgeType)[':judgeTypeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.judgeType)[':judgeTypeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.masterData.judgeType)[':judgeTypeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataJudgeTypeJudgeTypeIdQueryKey>
  >({
    queryKey: getMasterDataJudgeTypeJudgeTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.judgeType[':judgeTypeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataJudgeTypeJudgeTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.judgeType)[':judgeTypeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.masterData.judgeType)[':judgeTypeId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.masterData.judgeType)[':judgeTypeId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataJudgeTypeJudgeTypeIdQueryKey>
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
      ...getMasterDataJudgeTypeJudgeTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataJurisdictionGeoQueryKey(
  args: InferRequestType<typeof client.masterData.jurisdictionGeo.$get>,
) {
  return ['masterData', '/masterData/jurisdictionGeo', args] as const
}

export function getMasterDataJurisdictionGeoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.jurisdictionGeo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.jurisdictionGeo.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.jurisdictionGeo.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataJurisdictionGeoQueryKey>
  >({
    queryKey: getMasterDataJurisdictionGeoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.jurisdictionGeo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataJurisdictionGeo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.jurisdictionGeo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.jurisdictionGeo.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.jurisdictionGeo.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataJurisdictionGeoQueryKey>
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
      ...getMasterDataJurisdictionGeoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataJurisdictionGeoJurisdictionGeoIdQueryKey(
  args: InferRequestType<(typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']>,
) {
  return ['masterData', '/masterData/jurisdictionGeo/:jurisdictionGeoId', args] as const
}

export function getMasterDataJurisdictionGeoJurisdictionGeoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataJurisdictionGeoJurisdictionGeoIdQueryKey>
  >({
    queryKey: getMasterDataJurisdictionGeoJurisdictionGeoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.jurisdictionGeo[':jurisdictionGeoId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataJurisdictionGeoJurisdictionGeoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']
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
                    (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataJurisdictionGeoJurisdictionGeoIdQueryKey>
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
      ...getMasterDataJurisdictionGeoJurisdictionGeoIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataJurisdictionGeoJurisdictionGeoIdCourtsQueryKey(
  args: InferRequestType<
    (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['courts']['$get']
  >,
) {
  return ['masterData', '/masterData/jurisdictionGeo/:jurisdictionGeoId/courts', args] as const
}

export function getMasterDataJurisdictionGeoJurisdictionGeoIdCourtsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['courts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['courts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['courts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataJurisdictionGeoJurisdictionGeoIdCourtsQueryKey>
  >({
    queryKey: getMasterDataJurisdictionGeoJurisdictionGeoIdCourtsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.jurisdictionGeo[':jurisdictionGeoId'].courts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataJurisdictionGeoJurisdictionGeoIdCourts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['courts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['courts']['$get']
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
                    (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['courts']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataJurisdictionGeoJurisdictionGeoIdCourtsQueryKey>
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
      ...getMasterDataJurisdictionGeoJurisdictionGeoIdCourtsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataPartyRoleQueryKey(
  args: InferRequestType<typeof client.masterData.partyRole.$get>,
) {
  return ['masterData', '/masterData/partyRole', args] as const
}

export function getMasterDataPartyRoleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRole.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.masterData.partyRole.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRole.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataPartyRoleQueryKey>
  >({
    queryKey: getMasterDataPartyRoleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.partyRole.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMasterDataPartyRole<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRole.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.partyRole.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRole.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataPartyRoleQueryKey>
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
    return { ...getMasterDataPartyRoleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMasterDataPartyRolePartyRoleIdQueryKey(
  args: InferRequestType<(typeof client.masterData.partyRole)[':partyRoleId']['$get']>,
) {
  return ['masterData', '/masterData/partyRole/:partyRoleId', args] as const
}

export function getMasterDataPartyRolePartyRoleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.partyRole)[':partyRoleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.partyRole)[':partyRoleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.masterData.partyRole)[':partyRoleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataPartyRolePartyRoleIdQueryKey>
  >({
    queryKey: getMasterDataPartyRolePartyRoleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.partyRole[':partyRoleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataPartyRolePartyRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.partyRole)[':partyRoleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.masterData.partyRole)[':partyRoleId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.masterData.partyRole)[':partyRoleId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataPartyRolePartyRoleIdQueryKey>
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
      ...getMasterDataPartyRolePartyRoleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataPartyRoleGroupQueryKey(
  args: InferRequestType<typeof client.masterData.partyRoleGroup.$get>,
) {
  return ['masterData', '/masterData/partyRoleGroup', args] as const
}

export function getMasterDataPartyRoleGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRoleGroup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.partyRoleGroup.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRoleGroup.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataPartyRoleGroupQueryKey>
  >({
    queryKey: getMasterDataPartyRoleGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.partyRoleGroup.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataPartyRoleGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRoleGroup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.masterData.partyRoleGroup.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.partyRoleGroup.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataPartyRoleGroupQueryKey>
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
      ...getMasterDataPartyRoleGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMasterDataPartyRoleGroupPartyRoleGroupIdQueryKey(
  args: InferRequestType<(typeof client.masterData.partyRoleGroup)[':partyRoleGroupId']['$get']>,
) {
  return ['masterData', '/masterData/partyRoleGroup/:partyRoleGroupId', args] as const
}

export function getMasterDataPartyRoleGroupPartyRoleGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.partyRoleGroup)[':partyRoleGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.masterData.partyRoleGroup)[':partyRoleGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.masterData.partyRoleGroup)[':partyRoleGroupId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataPartyRoleGroupPartyRoleGroupIdQueryKey>
  >({
    queryKey: getMasterDataPartyRoleGroupPartyRoleGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.masterData.partyRoleGroup[':partyRoleGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMasterDataPartyRoleGroupPartyRoleGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.masterData.partyRoleGroup)[':partyRoleGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.masterData.partyRoleGroup)[':partyRoleGroupId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.partyRoleGroup)[':partyRoleGroupId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMasterDataPartyRoleGroupPartyRoleGroupIdQueryKey>
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
      ...getMasterDataPartyRoleGroupPartyRoleGroupIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNormAttorneyNormAttorneyIdQueryKey(
  args: InferRequestType<(typeof client.normAttorney)[':normAttorneyId']['$get']>,
) {
  return ['normAttorney', '/normAttorney/:normAttorneyId', args] as const
}

export function getNormAttorneyNormAttorneyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.normAttorney)[':normAttorneyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.normAttorney)[':normAttorneyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.normAttorney)[':normAttorneyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormAttorneyNormAttorneyIdQueryKey>
  >({
    queryKey: getNormAttorneyNormAttorneyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normAttorney[':normAttorneyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormAttorneyNormAttorneyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.normAttorney)[':normAttorneyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.normAttorney)[':normAttorneyId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.normAttorney)[':normAttorneyId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormAttorneyNormAttorneyIdQueryKey>
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
      ...getNormAttorneyNormAttorneyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNormAttorneyNormAttorneyIdAssociatedNormJudgesQueryKey(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormJudges']['$get']
  >,
) {
  return ['normAttorney', '/normAttorney/:normAttorneyId/associatedNormJudges', args] as const
}

export function getNormAttorneyNormAttorneyIdAssociatedNormJudgesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.normAttorney)[':normAttorneyId']['associatedNormJudges']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormJudges']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.normAttorney)[':normAttorneyId']['associatedNormJudges']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormAttorneyNormAttorneyIdAssociatedNormJudgesQueryKey>
  >({
    queryKey: getNormAttorneyNormAttorneyIdAssociatedNormJudgesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normAttorney[':normAttorneyId'].associatedNormJudges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormAttorneyNormAttorneyIdAssociatedNormJudges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.normAttorney)[':normAttorneyId']['associatedNormJudges']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormJudges']['$get']
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
                    (typeof client.normAttorney)[':normAttorneyId']['associatedNormJudges']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormAttorneyNormAttorneyIdAssociatedNormJudgesQueryKey>
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
      ...getNormAttorneyNormAttorneyIdAssociatedNormJudgesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsQueryKey(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormLawFirms']['$get']
  >,
) {
  return ['normAttorney', '/normAttorney/:normAttorneyId/associatedNormLawFirms', args] as const
}

export function getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.normAttorney)[':normAttorneyId']['associatedNormLawFirms']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormLawFirms']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.normAttorney)[':normAttorneyId']['associatedNormLawFirms']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsQueryKey>
  >({
    queryKey: getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normAttorney[':normAttorneyId'].associatedNormLawFirms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormAttorneyNormAttorneyIdAssociatedNormLawFirms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.normAttorney)[':normAttorneyId']['associatedNormLawFirms']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormLawFirms']['$get']
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
                    (typeof client.normAttorney)[':normAttorneyId']['associatedNormLawFirms']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsQueryKey>
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
      ...getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNormAttorneyNormAttorneyIdAssociatedNormPartiesQueryKey(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormParties']['$get']
  >,
) {
  return ['normAttorney', '/normAttorney/:normAttorneyId/associatedNormParties', args] as const
}

export function getNormAttorneyNormAttorneyIdAssociatedNormPartiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.normAttorney)[':normAttorneyId']['associatedNormParties']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormParties']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.normAttorney)[':normAttorneyId']['associatedNormParties']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormAttorneyNormAttorneyIdAssociatedNormPartiesQueryKey>
  >({
    queryKey: getNormAttorneyNormAttorneyIdAssociatedNormPartiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normAttorney[':normAttorneyId'].associatedNormParties.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormAttorneyNormAttorneyIdAssociatedNormParties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.normAttorney)[':normAttorneyId']['associatedNormParties']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormParties']['$get']
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
                    (typeof client.normAttorney)[':normAttorneyId']['associatedNormParties']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormAttorneyNormAttorneyIdAssociatedNormPartiesQueryKey>
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
      ...getNormAttorneyNormAttorneyIdAssociatedNormPartiesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyQueryKey(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['caseCountAnalyticsByOpposingNormAttorney']['$get']
  >,
) {
  return [
    'normAttorney',
    '/normAttorney/:normAttorneyId/caseCountAnalyticsByOpposingNormAttorney',
    args,
  ] as const
}

export function getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.normAttorney)[':normAttorneyId']['caseCountAnalyticsByOpposingNormAttorney']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['caseCountAnalyticsByOpposingNormAttorney']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.normAttorney)[':normAttorneyId']['caseCountAnalyticsByOpposingNormAttorney']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyQueryKey>
  >({
    queryKey: getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normAttorney[':normAttorneyId'].caseCountAnalyticsByOpposingNormAttorney.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorney<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.normAttorney)[':normAttorneyId']['caseCountAnalyticsByOpposingNormAttorney']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['caseCountAnalyticsByOpposingNormAttorney']['$get']
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
                    (typeof client.normAttorney)[':normAttorneyId']['caseCountAnalyticsByOpposingNormAttorney']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyQueryKey
          >
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
      ...getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNormAttorneySearchQueryKey(
  args: InferRequestType<typeof client.normAttorneySearch.$get>,
) {
  return ['normAttorneySearch', '/normAttorneySearch', args] as const
}

export function getNormAttorneySearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normAttorneySearch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.normAttorneySearch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normAttorneySearch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNormAttorneySearchQueryKey>
  >({
    queryKey: getNormAttorneySearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normAttorneySearch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNormAttorneySearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normAttorneySearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.normAttorneySearch.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.normAttorneySearch.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormAttorneySearchQueryKey>
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
    return { ...getNormAttorneySearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNormAttorneySearchNormAttorneySearchIdQueryKey(
  args: InferRequestType<(typeof client.normAttorneySearch)[':normAttorneySearchId']['$get']>,
) {
  return ['normAttorneySearch', '/normAttorneySearch/:normAttorneySearchId', args] as const
}

export function getNormAttorneySearchNormAttorneySearchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.normAttorneySearch)[':normAttorneySearchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.normAttorneySearch)[':normAttorneySearchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.normAttorneySearch)[':normAttorneySearchId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormAttorneySearchNormAttorneySearchIdQueryKey>
  >({
    queryKey: getNormAttorneySearchNormAttorneySearchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normAttorneySearch[':normAttorneySearchId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormAttorneySearchNormAttorneySearchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.normAttorneySearch)[':normAttorneySearchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.normAttorneySearch)[':normAttorneySearchId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.normAttorneySearch)[':normAttorneySearchId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormAttorneySearchNormAttorneySearchIdQueryKey>
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
      ...getNormAttorneySearchNormAttorneySearchIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNormJudgeNormJudgeIdQueryKey(
  args: InferRequestType<(typeof client.normJudge)[':normJudgeId']['$get']>,
) {
  return ['normJudge', '/normJudge/:normJudgeId', args] as const
}

export function getNormJudgeNormJudgeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.normJudge)[':normJudgeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.normJudge)[':normJudgeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.normJudge)[':normJudgeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormJudgeNormJudgeIdQueryKey>
  >({
    queryKey: getNormJudgeNormJudgeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normJudge[':normJudgeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormJudgeNormJudgeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.normJudge)[':normJudgeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.normJudge)[':normJudgeId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.normJudge)[':normJudgeId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormJudgeNormJudgeIdQueryKey>
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
      ...getNormJudgeNormJudgeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNormJudgeNormJudgeIdAssociatedNormAttorneysQueryKey(
  args: InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormAttorneys']['$get']
  >,
) {
  return ['normJudge', '/normJudge/:normJudgeId/associatedNormAttorneys', args] as const
}

export function getNormJudgeNormJudgeIdAssociatedNormAttorneysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.normJudge)[':normJudgeId']['associatedNormAttorneys']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormAttorneys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.normJudge)[':normJudgeId']['associatedNormAttorneys']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormJudgeNormJudgeIdAssociatedNormAttorneysQueryKey>
  >({
    queryKey: getNormJudgeNormJudgeIdAssociatedNormAttorneysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normJudge[':normJudgeId'].associatedNormAttorneys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormJudgeNormJudgeIdAssociatedNormAttorneys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.normJudge)[':normJudgeId']['associatedNormAttorneys']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormAttorneys']['$get']
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
                    (typeof client.normJudge)[':normJudgeId']['associatedNormAttorneys']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormJudgeNormJudgeIdAssociatedNormAttorneysQueryKey>
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
      ...getNormJudgeNormJudgeIdAssociatedNormAttorneysQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNormJudgeNormJudgeIdAssociatedNormLawFirmsQueryKey(
  args: InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormLawFirms']['$get']
  >,
) {
  return ['normJudge', '/normJudge/:normJudgeId/associatedNormLawFirms', args] as const
}

export function getNormJudgeNormJudgeIdAssociatedNormLawFirmsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.normJudge)[':normJudgeId']['associatedNormLawFirms']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormLawFirms']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.normJudge)[':normJudgeId']['associatedNormLawFirms']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormJudgeNormJudgeIdAssociatedNormLawFirmsQueryKey>
  >({
    queryKey: getNormJudgeNormJudgeIdAssociatedNormLawFirmsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normJudge[':normJudgeId'].associatedNormLawFirms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormJudgeNormJudgeIdAssociatedNormLawFirms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.normJudge)[':normJudgeId']['associatedNormLawFirms']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormLawFirms']['$get']
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
                    (typeof client.normJudge)[':normJudgeId']['associatedNormLawFirms']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormJudgeNormJudgeIdAssociatedNormLawFirmsQueryKey>
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
      ...getNormJudgeNormJudgeIdAssociatedNormLawFirmsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNormJudgeNormJudgeIdAssociatedNormPartiesQueryKey(
  args: InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']
  >,
) {
  return ['normJudge', '/normJudge/:normJudgeId/associatedNormParties', args] as const
}

export function getNormJudgeNormJudgeIdAssociatedNormPartiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormJudgeNormJudgeIdAssociatedNormPartiesQueryKey>
  >({
    queryKey: getNormJudgeNormJudgeIdAssociatedNormPartiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normJudge[':normJudgeId'].associatedNormParties.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormJudgeNormJudgeIdAssociatedNormParties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']
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
                    (typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormJudgeNormJudgeIdAssociatedNormPartiesQueryKey>
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
      ...getNormJudgeNormJudgeIdAssociatedNormPartiesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNormJudgeSearchQueryKey(
  args: InferRequestType<typeof client.normJudgeSearch.$get>,
) {
  return ['normJudgeSearch', '/normJudgeSearch', args] as const
}

export function getNormJudgeSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normJudgeSearch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.normJudgeSearch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normJudgeSearch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNormJudgeSearchQueryKey>
  >({
    queryKey: getNormJudgeSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normJudgeSearch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNormJudgeSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normJudgeSearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.normJudgeSearch.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.normJudgeSearch.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormJudgeSearchQueryKey>
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
    return { ...getNormJudgeSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNormJudgeSearchNormJudgeSearchIdQueryKey(
  args: InferRequestType<(typeof client.normJudgeSearch)[':normJudgeSearchId']['$get']>,
) {
  return ['normJudgeSearch', '/normJudgeSearch/:normJudgeSearchId', args] as const
}

export function getNormJudgeSearchNormJudgeSearchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.normJudgeSearch)[':normJudgeSearchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.normJudgeSearch)[':normJudgeSearchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.normJudgeSearch)[':normJudgeSearchId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormJudgeSearchNormJudgeSearchIdQueryKey>
  >({
    queryKey: getNormJudgeSearchNormJudgeSearchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normJudgeSearch[':normJudgeSearchId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormJudgeSearchNormJudgeSearchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.normJudgeSearch)[':normJudgeSearchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.normJudgeSearch)[':normJudgeSearchId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.normJudgeSearch)[':normJudgeSearchId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormJudgeSearchNormJudgeSearchIdQueryKey>
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
      ...getNormJudgeSearchNormJudgeSearchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNormLawFirmNormLawFirmIdQueryKey(
  args: InferRequestType<(typeof client.normLawFirm)[':normLawFirmId']['$get']>,
) {
  return ['normLawFirm', '/normLawFirm/:normLawFirmId', args] as const
}

export function getNormLawFirmNormLawFirmIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.normLawFirm)[':normLawFirmId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.normLawFirm)[':normLawFirmId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.normLawFirm)[':normLawFirmId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormLawFirmNormLawFirmIdQueryKey>
  >({
    queryKey: getNormLawFirmNormLawFirmIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normLawFirm[':normLawFirmId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormLawFirmNormLawFirmId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.normLawFirm)[':normLawFirmId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.normLawFirm)[':normLawFirmId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.normLawFirm)[':normLawFirmId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormLawFirmNormLawFirmIdQueryKey>
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
      ...getNormLawFirmNormLawFirmIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNormLawFirmNormLawFirmIdAssociatedNormAttorneysQueryKey(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormAttorneys']['$get']
  >,
) {
  return ['normLawFirm', '/normLawFirm/:normLawFirmId/associatedNormAttorneys', args] as const
}

export function getNormLawFirmNormLawFirmIdAssociatedNormAttorneysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.normLawFirm)[':normLawFirmId']['associatedNormAttorneys']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormAttorneys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.normLawFirm)[':normLawFirmId']['associatedNormAttorneys']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormLawFirmNormLawFirmIdAssociatedNormAttorneysQueryKey>
  >({
    queryKey: getNormLawFirmNormLawFirmIdAssociatedNormAttorneysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normLawFirm[':normLawFirmId'].associatedNormAttorneys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormLawFirmNormLawFirmIdAssociatedNormAttorneys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.normLawFirm)[':normLawFirmId']['associatedNormAttorneys']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormAttorneys']['$get']
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
                    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormAttorneys']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormLawFirmNormLawFirmIdAssociatedNormAttorneysQueryKey>
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
      ...getNormLawFirmNormLawFirmIdAssociatedNormAttorneysQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNormLawFirmNormLawFirmIdAssociatedNormJudgesQueryKey(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormJudges']['$get']
  >,
) {
  return ['normLawFirm', '/normLawFirm/:normLawFirmId/associatedNormJudges', args] as const
}

export function getNormLawFirmNormLawFirmIdAssociatedNormJudgesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.normLawFirm)[':normLawFirmId']['associatedNormJudges']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormJudges']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.normLawFirm)[':normLawFirmId']['associatedNormJudges']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormLawFirmNormLawFirmIdAssociatedNormJudgesQueryKey>
  >({
    queryKey: getNormLawFirmNormLawFirmIdAssociatedNormJudgesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normLawFirm[':normLawFirmId'].associatedNormJudges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormLawFirmNormLawFirmIdAssociatedNormJudges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.normLawFirm)[':normLawFirmId']['associatedNormJudges']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormJudges']['$get']
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
                    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormJudges']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormLawFirmNormLawFirmIdAssociatedNormJudgesQueryKey>
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
      ...getNormLawFirmNormLawFirmIdAssociatedNormJudgesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNormLawFirmNormLawFirmIdAssociatedNormPartiesQueryKey(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormParties']['$get']
  >,
) {
  return ['normLawFirm', '/normLawFirm/:normLawFirmId/associatedNormParties', args] as const
}

export function getNormLawFirmNormLawFirmIdAssociatedNormPartiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.normLawFirm)[':normLawFirmId']['associatedNormParties']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormParties']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.normLawFirm)[':normLawFirmId']['associatedNormParties']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormLawFirmNormLawFirmIdAssociatedNormPartiesQueryKey>
  >({
    queryKey: getNormLawFirmNormLawFirmIdAssociatedNormPartiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normLawFirm[':normLawFirmId'].associatedNormParties.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormLawFirmNormLawFirmIdAssociatedNormParties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.normLawFirm)[':normLawFirmId']['associatedNormParties']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormParties']['$get']
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
                    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormParties']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormLawFirmNormLawFirmIdAssociatedNormPartiesQueryKey>
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
      ...getNormLawFirmNormLawFirmIdAssociatedNormPartiesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmQueryKey(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['caseCountAnalyticsByOpposingNormLawFirm']['$get']
  >,
) {
  return [
    'normLawFirm',
    '/normLawFirm/:normLawFirmId/caseCountAnalyticsByOpposingNormLawFirm',
    args,
  ] as const
}

export function getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.normLawFirm)[':normLawFirmId']['caseCountAnalyticsByOpposingNormLawFirm']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['caseCountAnalyticsByOpposingNormLawFirm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.normLawFirm)[':normLawFirmId']['caseCountAnalyticsByOpposingNormLawFirm']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmQueryKey>
  >({
    queryKey: getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normLawFirm[':normLawFirmId'].caseCountAnalyticsByOpposingNormLawFirm.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.normLawFirm)[':normLawFirmId']['caseCountAnalyticsByOpposingNormLawFirm']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['caseCountAnalyticsByOpposingNormLawFirm']['$get']
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
                    (typeof client.normLawFirm)[':normLawFirmId']['caseCountAnalyticsByOpposingNormLawFirm']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmQueryKey
          >
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
      ...getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNormLawFirmSearchQueryKey(
  args: InferRequestType<typeof client.normLawFirmSearch.$get>,
) {
  return ['normLawFirmSearch', '/normLawFirmSearch', args] as const
}

export function getNormLawFirmSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normLawFirmSearch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.normLawFirmSearch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normLawFirmSearch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNormLawFirmSearchQueryKey>
  >({
    queryKey: getNormLawFirmSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normLawFirmSearch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNormLawFirmSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normLawFirmSearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.normLawFirmSearch.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.normLawFirmSearch.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormLawFirmSearchQueryKey>
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
    return { ...getNormLawFirmSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNormLawFirmSearchNormLawFirmSearchIdQueryKey(
  args: InferRequestType<(typeof client.normLawFirmSearch)[':normLawFirmSearchId']['$get']>,
) {
  return ['normLawFirmSearch', '/normLawFirmSearch/:normLawFirmSearchId', args] as const
}

export function getNormLawFirmSearchNormLawFirmSearchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.normLawFirmSearch)[':normLawFirmSearchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.normLawFirmSearch)[':normLawFirmSearchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.normLawFirmSearch)[':normLawFirmSearchId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormLawFirmSearchNormLawFirmSearchIdQueryKey>
  >({
    queryKey: getNormLawFirmSearchNormLawFirmSearchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normLawFirmSearch[':normLawFirmSearchId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormLawFirmSearchNormLawFirmSearchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.normLawFirmSearch)[':normLawFirmSearchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.normLawFirmSearch)[':normLawFirmSearchId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.normLawFirmSearch)[':normLawFirmSearchId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormLawFirmSearchNormLawFirmSearchIdQueryKey>
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
      ...getNormLawFirmSearchNormLawFirmSearchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNormPartyNormPartyIdQueryKey(
  args: InferRequestType<(typeof client.normParty)[':normPartyId']['$get']>,
) {
  return ['normParty', '/normParty/:normPartyId', args] as const
}

export function getNormPartyNormPartyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.normParty)[':normPartyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.normParty)[':normPartyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.normParty)[':normPartyId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormPartyNormPartyIdQueryKey>
  >({
    queryKey: getNormPartyNormPartyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normParty[':normPartyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormPartyNormPartyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.normParty)[':normPartyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.normParty)[':normPartyId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.normParty)[':normPartyId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormPartyNormPartyIdQueryKey>
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
      ...getNormPartyNormPartyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNormPartyNormPartyIdAssociatedNormAttorneysQueryKey(
  args: InferRequestType<
    (typeof client.normParty)[':normPartyId']['associatedNormAttorneys']['$get']
  >,
) {
  return ['normParty', '/normParty/:normPartyId/associatedNormAttorneys', args] as const
}

export function getNormPartyNormPartyIdAssociatedNormAttorneysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.normParty)[':normPartyId']['associatedNormAttorneys']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.normParty)[':normPartyId']['associatedNormAttorneys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.normParty)[':normPartyId']['associatedNormAttorneys']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormPartyNormPartyIdAssociatedNormAttorneysQueryKey>
  >({
    queryKey: getNormPartyNormPartyIdAssociatedNormAttorneysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normParty[':normPartyId'].associatedNormAttorneys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormPartyNormPartyIdAssociatedNormAttorneys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.normParty)[':normPartyId']['associatedNormAttorneys']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.normParty)[':normPartyId']['associatedNormAttorneys']['$get']
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
                    (typeof client.normParty)[':normPartyId']['associatedNormAttorneys']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormPartyNormPartyIdAssociatedNormAttorneysQueryKey>
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
      ...getNormPartyNormPartyIdAssociatedNormAttorneysQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNormPartyNormPartyIdAssociatedNormJudgesQueryKey(
  args: InferRequestType<(typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']>,
) {
  return ['normParty', '/normParty/:normPartyId/associatedNormJudges', args] as const
}

export function getNormPartyNormPartyIdAssociatedNormJudgesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormPartyNormPartyIdAssociatedNormJudgesQueryKey>
  >({
    queryKey: getNormPartyNormPartyIdAssociatedNormJudgesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normParty[':normPartyId'].associatedNormJudges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormPartyNormPartyIdAssociatedNormJudges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']
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
                    (typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormPartyNormPartyIdAssociatedNormJudgesQueryKey>
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
      ...getNormPartyNormPartyIdAssociatedNormJudgesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNormPartyNormPartyIdAssociatedNormLawFirmsQueryKey(
  args: InferRequestType<
    (typeof client.normParty)[':normPartyId']['associatedNormLawFirms']['$get']
  >,
) {
  return ['normParty', '/normParty/:normPartyId/associatedNormLawFirms', args] as const
}

export function getNormPartyNormPartyIdAssociatedNormLawFirmsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.normParty)[':normPartyId']['associatedNormLawFirms']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.normParty)[':normPartyId']['associatedNormLawFirms']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.normParty)[':normPartyId']['associatedNormLawFirms']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormPartyNormPartyIdAssociatedNormLawFirmsQueryKey>
  >({
    queryKey: getNormPartyNormPartyIdAssociatedNormLawFirmsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normParty[':normPartyId'].associatedNormLawFirms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormPartyNormPartyIdAssociatedNormLawFirms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.normParty)[':normPartyId']['associatedNormLawFirms']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.normParty)[':normPartyId']['associatedNormLawFirms']['$get']
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
                    (typeof client.normParty)[':normPartyId']['associatedNormLawFirms']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormPartyNormPartyIdAssociatedNormLawFirmsQueryKey>
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
      ...getNormPartyNormPartyIdAssociatedNormLawFirmsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyQueryKey(
  args: InferRequestType<
    (typeof client.normParty)[':normPartyId']['caseCountAnalyticsByOpposingNormParty']['$get']
  >,
) {
  return [
    'normParty',
    '/normParty/:normPartyId/caseCountAnalyticsByOpposingNormParty',
    args,
  ] as const
}

export function getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.normParty)[':normPartyId']['caseCountAnalyticsByOpposingNormParty']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.normParty)[':normPartyId']['caseCountAnalyticsByOpposingNormParty']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.normParty)[':normPartyId']['caseCountAnalyticsByOpposingNormParty']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyQueryKey>
  >({
    queryKey: getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normParty[':normPartyId'].caseCountAnalyticsByOpposingNormParty.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormParty<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.normParty)[':normPartyId']['caseCountAnalyticsByOpposingNormParty']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.normParty)[':normPartyId']['caseCountAnalyticsByOpposingNormParty']['$get']
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
                    (typeof client.normParty)[':normPartyId']['caseCountAnalyticsByOpposingNormParty']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyQueryKey>
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
      ...getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNormPartySearchQueryKey(
  args: InferRequestType<typeof client.normPartySearch.$get>,
) {
  return ['normPartySearch', '/normPartySearch', args] as const
}

export function getNormPartySearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normPartySearch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.normPartySearch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normPartySearch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNormPartySearchQueryKey>
  >({
    queryKey: getNormPartySearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normPartySearch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNormPartySearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normPartySearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.normPartySearch.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.normPartySearch.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormPartySearchQueryKey>
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
    return { ...getNormPartySearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNormPartySearchNormPartySearchIdQueryKey(
  args: InferRequestType<(typeof client.normPartySearch)[':normPartySearchId']['$get']>,
) {
  return ['normPartySearch', '/normPartySearch/:normPartySearchId', args] as const
}

export function getNormPartySearchNormPartySearchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.normPartySearch)[':normPartySearchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.normPartySearch)[':normPartySearchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.normPartySearch)[':normPartySearchId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormPartySearchNormPartySearchIdQueryKey>
  >({
    queryKey: getNormPartySearchNormPartySearchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.normPartySearch[':normPartySearchId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNormPartySearchNormPartySearchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.normPartySearch)[':normPartySearchId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.normPartySearch)[':normPartySearchId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.normPartySearch)[':normPartySearchId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNormPartySearchNormPartySearchIdQueryKey>
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
      ...getNormPartySearchNormPartySearchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPacerImportCaseByCourtUsingCaseNumberQueryKey(
  args: InferRequestType<typeof client.pacer.importCaseByCourtUsingCaseNumber.$get>,
) {
  return ['pacer', '/pacer/importCaseByCourtUsingCaseNumber', args] as const
}

export function getPacerImportCaseByCourtUsingCaseNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacer.importCaseByCourtUsingCaseNumber.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pacer.importCaseByCourtUsingCaseNumber.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.pacer.importCaseByCourtUsingCaseNumber.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerImportCaseByCourtUsingCaseNumberQueryKey>
  >({
    queryKey: getPacerImportCaseByCourtUsingCaseNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pacer.importCaseByCourtUsingCaseNumber.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPacerImportCaseByCourtUsingCaseNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacer.importCaseByCourtUsingCaseNumber.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pacer.importCaseByCourtUsingCaseNumber.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pacer.importCaseByCourtUsingCaseNumber.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPacerImportCaseByCourtUsingCaseNumberQueryKey>
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
      ...getPacerImportCaseByCourtUsingCaseNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPacerCaseLocatorCaseSearchAllCourtsQueryKey(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.allCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/caseSearch/allCourts', args] as const
}

export function getPacerCaseLocatorCaseSearchAllCourtsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.allCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.allCourts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.allCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorCaseSearchAllCourtsQueryKey>
  >({
    queryKey: getPacerCaseLocatorCaseSearchAllCourtsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pacerCaseLocator.caseSearch.allCourts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPacerCaseLocatorCaseSearchAllCourts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.allCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pacerCaseLocator.caseSearch.allCourts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.allCourts.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPacerCaseLocatorCaseSearchAllCourtsQueryKey>
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
      ...getPacerCaseLocatorCaseSearchAllCourtsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPacerCaseLocatorCaseSearchAppealCourtsQueryKey(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.appealCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/caseSearch/appealCourts', args] as const
}

export function getPacerCaseLocatorCaseSearchAppealCourtsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.appealCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.appealCourts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.appealCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorCaseSearchAppealCourtsQueryKey>
  >({
    queryKey: getPacerCaseLocatorCaseSearchAppealCourtsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pacerCaseLocator.caseSearch.appealCourts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPacerCaseLocatorCaseSearchAppealCourts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.appealCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pacerCaseLocator.caseSearch.appealCourts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.appealCourts.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPacerCaseLocatorCaseSearchAppealCourtsQueryKey>
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
      ...getPacerCaseLocatorCaseSearchAppealCourtsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPacerCaseLocatorCaseSearchBankruptcyCourtsQueryKey(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/caseSearch/bankruptcyCourts', args] as const
}

export function getPacerCaseLocatorCaseSearchBankruptcyCourtsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorCaseSearchBankruptcyCourtsQueryKey>
  >({
    queryKey: getPacerCaseLocatorCaseSearchBankruptcyCourtsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPacerCaseLocatorCaseSearchBankruptcyCourts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPacerCaseLocatorCaseSearchBankruptcyCourtsQueryKey>
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
      ...getPacerCaseLocatorCaseSearchBankruptcyCourtsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPacerCaseLocatorCaseSearchCivilCourtsQueryKey(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.civilCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/caseSearch/civilCourts', args] as const
}

export function getPacerCaseLocatorCaseSearchCivilCourtsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.civilCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.civilCourts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.civilCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorCaseSearchCivilCourtsQueryKey>
  >({
    queryKey: getPacerCaseLocatorCaseSearchCivilCourtsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pacerCaseLocator.caseSearch.civilCourts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPacerCaseLocatorCaseSearchCivilCourts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.civilCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pacerCaseLocator.caseSearch.civilCourts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.civilCourts.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPacerCaseLocatorCaseSearchCivilCourtsQueryKey>
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
      ...getPacerCaseLocatorCaseSearchCivilCourtsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPacerCaseLocatorCaseSearchCriminalCourtsQueryKey(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.criminalCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/caseSearch/criminalCourts', args] as const
}

export function getPacerCaseLocatorCaseSearchCriminalCourtsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.criminalCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.criminalCourts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.criminalCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorCaseSearchCriminalCourtsQueryKey>
  >({
    queryKey: getPacerCaseLocatorCaseSearchCriminalCourtsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pacerCaseLocator.caseSearch.criminalCourts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPacerCaseLocatorCaseSearchCriminalCourts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.criminalCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pacerCaseLocator.caseSearch.criminalCourts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.criminalCourts.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPacerCaseLocatorCaseSearchCriminalCourtsQueryKey>
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
      ...getPacerCaseLocatorCaseSearchCriminalCourtsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPacerCaseLocatorCaseSearchMultiDistrictCourtsQueryKey(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/caseSearch/multiDistrictCourts', args] as const
}

export function getPacerCaseLocatorCaseSearchMultiDistrictCourtsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorCaseSearchMultiDistrictCourtsQueryKey>
  >({
    queryKey: getPacerCaseLocatorCaseSearchMultiDistrictCourtsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPacerCaseLocatorCaseSearchMultiDistrictCourts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPacerCaseLocatorCaseSearchMultiDistrictCourtsQueryKey>
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
      ...getPacerCaseLocatorCaseSearchMultiDistrictCourtsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPacerCaseLocatorPartySearchAllCourtsQueryKey(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.allCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/partySearch/allCourts', args] as const
}

export function getPacerCaseLocatorPartySearchAllCourtsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.allCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.allCourts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.allCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorPartySearchAllCourtsQueryKey>
  >({
    queryKey: getPacerCaseLocatorPartySearchAllCourtsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pacerCaseLocator.partySearch.allCourts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPacerCaseLocatorPartySearchAllCourts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.allCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pacerCaseLocator.partySearch.allCourts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.allCourts.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPacerCaseLocatorPartySearchAllCourtsQueryKey>
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
      ...getPacerCaseLocatorPartySearchAllCourtsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPacerCaseLocatorPartySearchAppealCourtsQueryKey(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.appealCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/partySearch/appealCourts', args] as const
}

export function getPacerCaseLocatorPartySearchAppealCourtsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.appealCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.appealCourts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.appealCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorPartySearchAppealCourtsQueryKey>
  >({
    queryKey: getPacerCaseLocatorPartySearchAppealCourtsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pacerCaseLocator.partySearch.appealCourts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPacerCaseLocatorPartySearchAppealCourts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.appealCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pacerCaseLocator.partySearch.appealCourts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.appealCourts.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPacerCaseLocatorPartySearchAppealCourtsQueryKey>
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
      ...getPacerCaseLocatorPartySearchAppealCourtsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPacerCaseLocatorPartySearchBankruptcyCourtsQueryKey(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.bankruptcyCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/partySearch/bankruptcyCourts', args] as const
}

export function getPacerCaseLocatorPartySearchBankruptcyCourtsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.bankruptcyCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.bankruptcyCourts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.bankruptcyCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorPartySearchBankruptcyCourtsQueryKey>
  >({
    queryKey: getPacerCaseLocatorPartySearchBankruptcyCourtsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pacerCaseLocator.partySearch.bankruptcyCourts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPacerCaseLocatorPartySearchBankruptcyCourts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.bankruptcyCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pacerCaseLocator.partySearch.bankruptcyCourts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.pacerCaseLocator.partySearch.bankruptcyCourts.$get>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPacerCaseLocatorPartySearchBankruptcyCourtsQueryKey>
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
      ...getPacerCaseLocatorPartySearchBankruptcyCourtsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPacerCaseLocatorPartySearchCivilCourtsQueryKey(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.civilCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/partySearch/civilCourts', args] as const
}

export function getPacerCaseLocatorPartySearchCivilCourtsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.civilCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.civilCourts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.civilCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorPartySearchCivilCourtsQueryKey>
  >({
    queryKey: getPacerCaseLocatorPartySearchCivilCourtsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pacerCaseLocator.partySearch.civilCourts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPacerCaseLocatorPartySearchCivilCourts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.civilCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pacerCaseLocator.partySearch.civilCourts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.civilCourts.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPacerCaseLocatorPartySearchCivilCourtsQueryKey>
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
      ...getPacerCaseLocatorPartySearchCivilCourtsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPacerCaseLocatorPartySearchCriminalCourtsQueryKey(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.criminalCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/partySearch/criminalCourts', args] as const
}

export function getPacerCaseLocatorPartySearchCriminalCourtsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.criminalCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.criminalCourts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.criminalCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorPartySearchCriminalCourtsQueryKey>
  >({
    queryKey: getPacerCaseLocatorPartySearchCriminalCourtsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pacerCaseLocator.partySearch.criminalCourts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPacerCaseLocatorPartySearchCriminalCourts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.criminalCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pacerCaseLocator.partySearch.criminalCourts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.criminalCourts.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPacerCaseLocatorPartySearchCriminalCourtsQueryKey>
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
      ...getPacerCaseLocatorPartySearchCriminalCourtsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPacerCaseLocatorPartySearchMultiDistrictCourtsQueryKey(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.multiDistrictCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/partySearch/multiDistrictCourts', args] as const
}

export function getPacerCaseLocatorPartySearchMultiDistrictCourtsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.multiDistrictCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.multiDistrictCourts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.multiDistrictCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorPartySearchMultiDistrictCourtsQueryKey>
  >({
    queryKey: getPacerCaseLocatorPartySearchMultiDistrictCourtsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pacerCaseLocator.partySearch.multiDistrictCourts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPacerCaseLocatorPartySearchMultiDistrictCourts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.multiDistrictCourts.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pacerCaseLocator.partySearch.multiDistrictCourts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.pacerCaseLocator.partySearch.multiDistrictCourts.$get>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPacerCaseLocatorPartySearchMultiDistrictCourtsQueryKey>
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
      ...getPacerCaseLocatorPartySearchMultiDistrictCourtsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPacerCredentialQueryKey(
  args: InferRequestType<typeof client.pacerCredential.$get>,
) {
  return ['pacerCredential', '/pacerCredential', args] as const
}

export function getPacerCredentialQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pacerCredential.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCredentialQueryKey>
  >({
    queryKey: getPacerCredentialQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pacerCredential.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPacerCredential<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pacerCredential.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPacerCredentialQueryKey>
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
    return { ...getPacerCredentialQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutPacerCredentialMutationKey() {
  return ['pacerCredential', '/pacerCredential', 'PUT'] as const
}

export function getPutPacerCredentialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.pacerCredential.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutPacerCredentialMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pacerCredential.$put>) {
      return parseResponse(client.pacerCredential.$put(args, options))
    },
  })
}

export function createPutPacerCredential<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.pacerCredential.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPacerCredentialMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPacerCredentialPacerUserIdQueryKey(
  args: InferRequestType<(typeof client.pacerCredential)[':pacerUserId']['$get']>,
) {
  return ['pacerCredential', '/pacerCredential/:pacerUserId', args] as const
}

export function getPacerCredentialPacerUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pacerCredential)[':pacerUserId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pacerCredential)[':pacerUserId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pacerCredential)[':pacerUserId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCredentialPacerUserIdQueryKey>
  >({
    queryKey: getPacerCredentialPacerUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pacerCredential[':pacerUserId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPacerCredentialPacerUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pacerCredential)[':pacerUserId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pacerCredential)[':pacerUserId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pacerCredential)[':pacerUserId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPacerCredentialPacerUserIdQueryKey>
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
      ...getPacerCredentialPacerUserIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeletePacerCredentialPacerUserIdMutationKey() {
  return ['pacerCredential', '/pacerCredential/:pacerUserId', 'DELETE'] as const
}

export function getDeletePacerCredentialPacerUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pacerCredential)[':pacerUserId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pacerCredential)[':pacerUserId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePacerCredentialPacerUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.pacerCredential)[':pacerUserId']['$delete']>,
    ) {
      return parseResponse(client.pacerCredential[':pacerUserId'].$delete(args, options))
    },
  })
}

export function createDeletePacerCredentialPacerUserId<
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
                Awaited<ReturnType<(typeof client.pacerCredential)[':pacerUserId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pacerCredential)[':pacerUserId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePacerCredentialPacerUserIdMutationOptions<
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

export function getPartyPartyIdQueryKey(
  args: InferRequestType<(typeof client.party)[':partyId']['$get']>,
) {
  return ['party', '/party/:partyId', args] as const
}

export function getPartyPartyIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.party)[':partyId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.party)[':partyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.party)[':partyId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPartyPartyIdQueryKey>
  >({
    queryKey: getPartyPartyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.party[':partyId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPartyPartyId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.party)[':partyId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.party)[':partyId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.party)[':partyId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPartyPartyIdQueryKey>
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
    return { ...getPartyPartyIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPartyPartyIdAssociatedAttorneysQueryKey(
  args: InferRequestType<(typeof client.party)[':partyId']['associatedAttorneys']['$get']>,
) {
  return ['party', '/party/:partyId/associatedAttorneys', args] as const
}

export function getPartyPartyIdAssociatedAttorneysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.party)[':partyId']['associatedAttorneys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.party)[':partyId']['associatedAttorneys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.party)[':partyId']['associatedAttorneys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPartyPartyIdAssociatedAttorneysQueryKey>
  >({
    queryKey: getPartyPartyIdAssociatedAttorneysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.party[':partyId'].associatedAttorneys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPartyPartyIdAssociatedAttorneys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.party)[':partyId']['associatedAttorneys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.party)[':partyId']['associatedAttorneys']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.party)[':partyId']['associatedAttorneys']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPartyPartyIdAssociatedAttorneysQueryKey>
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
      ...getPartyPartyIdAssociatedAttorneysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
