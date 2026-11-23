import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function useAttorneyAttorneyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.attorney)[':attorneyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.attorney)[':attorneyId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAttorneyAttorneyIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAttorneyAttorneyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.attorney)[':attorneyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.attorney)[':attorneyId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAttorneyAttorneyIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useAttorneyAttorneyIdAssociatedParties<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getAttorneyAttorneyIdAssociatedPartiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAttorneyAttorneyIdAssociatedParties<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAttorneyAttorneyIdAssociatedPartiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useBillingCycleUsageBillingCycle<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBillingCycleUsageBillingCycleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBillingCycleUsageBillingCycle<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBillingCycleUsageBillingCycleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useBillingCycles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billingCycles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billingCycles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBillingCyclesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBillingCyclesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBillingCycles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billingCycles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billingCycles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBillingCyclesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBillingCyclesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCallbacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callbacks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.callbacks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callbacks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCallbacksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCallbacksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCallbacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callbacks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.callbacks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callbacks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCallbacksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCallbacksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCaseCaseId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.case)[':caseId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCaseCaseIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCaseCaseIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCaseCaseId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.case)[':caseId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCaseCaseIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCaseCaseIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCaseCaseIdAttorneys<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCaseCaseIdAttorneysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCaseCaseIdAttorneys<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCaseCaseIdAttorneysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCaseCaseIdDocketEntries<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseCaseIdDocketEntriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseCaseIdDocketEntries<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseCaseIdDocketEntriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseCaseIdDocketEntriesPrimaryDocuments<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseCaseIdDocketEntriesPrimaryDocumentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseCaseIdDocketEntriesPrimaryDocuments<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseCaseIdDocketEntriesPrimaryDocumentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseCaseIdDocketEntriesSecondaryDocuments<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseCaseIdDocketEntriesSecondaryDocumentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseCaseIdDocketEntriesSecondaryDocuments<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseCaseIdDocketEntriesSecondaryDocumentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseCaseIdDocuments<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCaseCaseIdDocumentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCaseCaseIdDocuments<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCaseCaseIdDocumentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCaseCaseIdHearings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['hearings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.case)[':caseId']['hearings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCaseCaseIdHearingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCaseCaseIdHearings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['hearings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.case)[':caseId']['hearings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCaseCaseIdHearingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCaseCaseIdJudges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['judges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.case)[':caseId']['judges']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCaseCaseIdJudgesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCaseCaseIdJudges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['judges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.case)[':caseId']['judges']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCaseCaseIdJudgesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCaseCaseIdParties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['parties']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.case)[':caseId']['parties']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCaseCaseIdPartiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCaseCaseIdParties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['parties']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.case)[':caseId']['parties']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCaseCaseIdPartiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCaseCaseIdRelatedCases<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseCaseIdRelatedCasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseCaseIdRelatedCases<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseCaseIdRelatedCasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseCountAnalyticsByAreaOfLaw<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseCountAnalyticsByAreaOfLawQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseCountAnalyticsByAreaOfLaw<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseCountAnalyticsByAreaOfLawQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseCountAnalyticsByCaseClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseClass.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseCountAnalyticsByCaseClassQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseCountAnalyticsByCaseClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseClass.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseCountAnalyticsByCaseClassQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseCountAnalyticsByCaseFiledDate<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseCountAnalyticsByCaseFiledDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseCountAnalyticsByCaseFiledDate<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseCountAnalyticsByCaseFiledDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseCountAnalyticsByCaseType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseType.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseType.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseCountAnalyticsByCaseTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseCountAnalyticsByCaseType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseType.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseType.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseCountAnalyticsByCaseTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseCountAnalyticsByCaseTypeGroup<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseCountAnalyticsByCaseTypeGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseCountAnalyticsByCaseTypeGroup<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseCountAnalyticsByCaseTypeGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseCountAnalyticsByCourt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourt.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourt.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourt.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCaseCountAnalyticsByCourtQueryKey>
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
      ...getCaseCountAnalyticsByCourtQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseCountAnalyticsByCourt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourt.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourt.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourt.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCaseCountAnalyticsByCourtQueryKey>
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
      ...getCaseCountAnalyticsByCourtQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseCountAnalyticsByCourtLocation<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseCountAnalyticsByCourtLocationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseCountAnalyticsByCourtLocation<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseCountAnalyticsByCourtLocationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseCountAnalyticsByCourtSystem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtSystem.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtSystem.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseCountAnalyticsByCourtSystemQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseCountAnalyticsByCourtSystem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtSystem.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtSystem.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseCountAnalyticsByCourtSystemQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseCountAnalyticsByCourtType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtType.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtType.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseCountAnalyticsByCourtTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseCountAnalyticsByCourtType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtType.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtType.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseCountAnalyticsByCourtTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseCountAnalyticsByJurisdictionGeo<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseCountAnalyticsByJurisdictionGeoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseCountAnalyticsByJurisdictionGeo<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseCountAnalyticsByJurisdictionGeoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseCountAnalyticsByNormAttorney<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormAttorney.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormAttorney.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseCountAnalyticsByNormAttorneyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseCountAnalyticsByNormAttorney<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormAttorney.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormAttorney.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseCountAnalyticsByNormAttorneyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseCountAnalyticsByNormJudge<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormJudge.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormJudge.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseCountAnalyticsByNormJudgeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseCountAnalyticsByNormJudge<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormJudge.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormJudge.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseCountAnalyticsByNormJudgeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseCountAnalyticsByNormLawFirm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormLawFirm.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormLawFirm.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseCountAnalyticsByNormLawFirmQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseCountAnalyticsByNormLawFirm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormLawFirm.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormLawFirm.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseCountAnalyticsByNormLawFirmQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseCountAnalyticsByNormParty<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormParty.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormParty.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseCountAnalyticsByNormPartyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseCountAnalyticsByNormParty<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormParty.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormParty.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseCountAnalyticsByNormPartyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseCountAnalyticsByPartyRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRole.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByPartyRole.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseCountAnalyticsByPartyRoleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseCountAnalyticsByPartyRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRole.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseCountAnalyticsByPartyRole.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseCountAnalyticsByPartyRoleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseCountAnalyticsByPartyRoleGroup<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseCountAnalyticsByPartyRoleGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseCountAnalyticsByPartyRoleGroup<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseCountAnalyticsByPartyRoleGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseDocumentCaseDocumentId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseDocumentCaseDocumentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseDocumentCaseDocumentId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseDocumentCaseDocumentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseDocumentDownloadCaseDocumentId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseDocumentDownloadCaseDocumentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseDocumentDownloadCaseDocumentId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseDocumentDownloadCaseDocumentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutCaseDocumentOrder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.caseDocumentOrder.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.caseDocumentOrder.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCaseDocumentOrderMutationOptions<TError, TOnMutateResult>(
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

export function useCaseDocumentOrderCallbacks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseDocumentOrder.callbacks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseDocumentOrder.callbacks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseDocumentOrderCallbacksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseDocumentOrderCallbacks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseDocumentOrder.callbacks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseDocumentOrder.callbacks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseDocumentOrderCallbacksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseDocumentOrderCallbacksCaseDocumentOrderCallbackId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseDocumentOrderCallbacksCaseDocumentOrderCallbackId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseExportCallbacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseExport.callbacks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseExport.callbacks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.caseExport.callbacks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCaseExportCallbacksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCaseExportCallbacksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCaseExportCallbacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseExport.callbacks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseExport.callbacks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.caseExport.callbacks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCaseExportCallbacksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCaseExportCallbacksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCaseExportCallbacksCaseExportCallbackId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseExportCallbacksCaseExportCallbackIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseExportCallbacksCaseExportCallbackId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseExportCallbacksCaseExportCallbackIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCaseExportCaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.caseExport)[':caseId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.caseExport)[':caseId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.caseExport)[':caseId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCaseExportCaseIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCaseExportCaseIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCaseExportCaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.caseExport)[':caseId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.caseExport)[':caseId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.caseExport)[':caseId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCaseExportCaseIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCaseExportCaseIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCaseSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseSearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseSearch.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseSearch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCaseSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCaseSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCaseSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseSearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseSearch.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseSearch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCaseSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCaseSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCaseSearchCaseSearchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.caseSearch)[':caseSearchId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.caseSearch)[':caseSearchId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCaseSearchCaseSearchIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCaseSearchCaseSearchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.caseSearch)[':caseSearchId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.caseSearch)[':caseSearchId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCaseSearchCaseSearchIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutCaseTrack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTrack.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.caseTrack.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCaseTrackMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useCaseTrackCaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.caseTrack)[':caseId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.caseTrack)[':caseId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.caseTrack)[':caseId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCaseTrackCaseIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCaseTrackCaseIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCaseTrackCaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.caseTrack)[':caseId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.caseTrack)[':caseId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.caseTrack)[':caseId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCaseTrackCaseIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCaseTrackCaseIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDeleteCaseTrackCaseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCaseTrackCaseIdMutationOptions<TError, TOnMutateResult>(
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

export function useCaseTracks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTracks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseTracks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTracks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCaseTracksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCaseTracksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCaseTracks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTracks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseTracks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTracks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCaseTracksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCaseTracksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePutCaseUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdate.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.caseUpdate.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCaseUpdateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useCaseUpdateCaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.caseUpdate)[':caseId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.caseUpdate)[':caseId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.caseUpdate)[':caseId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCaseUpdateCaseIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCaseUpdateCaseIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCaseUpdateCaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.caseUpdate)[':caseId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.caseUpdate)[':caseId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.caseUpdate)[':caseId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCaseUpdateCaseIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCaseUpdateCaseIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCaseUpdates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseUpdates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCaseUpdatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCaseUpdatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCaseUpdates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.caseUpdates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCaseUpdatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCaseUpdatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCourtCoverageCourtId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.courtCoverage)[':courtId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.courtCoverage)[':courtId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCourtCoverageCourtIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCourtCoverageCourtId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.courtCoverage)[':courtId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.courtCoverage)[':courtId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCourtCoverageCourtIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDailyUsageDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dailyUsage)[':date']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dailyUsage)[':date']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.dailyUsage)[':date']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDailyUsageDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDailyUsageDateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDailyUsageDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dailyUsage)[':date']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dailyUsage)[':date']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.dailyUsage)[':date']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDailyUsageDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDailyUsageDateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostGenerateNewToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.generateNewToken.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.generateNewToken.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGenerateNewTokenMutationOptions<TError, TOnMutateResult>(
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

export function usePutInvalidateAllTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.invalidateAllTokens.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.invalidateAllTokens.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutInvalidateAllTokensMutationOptions<TError, TOnMutateResult>(
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

export function usePutInvalidateToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invalidateToken.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.invalidateToken.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutInvalidateTokenMutationOptions<TError, TOnMutateResult>(
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

export function useJudgeJudgeId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.judge)[':judgeId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.judge)[':judgeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.judge)[':judgeId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJudgeJudgeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getJudgeJudgeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseJudgeJudgeId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.judge)[':judgeId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.judge)[':judgeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.judge)[':judgeId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJudgeJudgeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getJudgeJudgeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePutListAllTokenIds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllTokenIds.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.listAllTokenIds.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutListAllTokenIdsMutationOptions<TError, TOnMutateResult>(
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

export function useMasterDataAreaOfLaw<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.areaOfLaw.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.areaOfLaw.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.areaOfLaw.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataAreaOfLawQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMasterDataAreaOfLawQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMasterDataAreaOfLaw<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.areaOfLaw.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.areaOfLaw.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.areaOfLaw.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataAreaOfLawQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMasterDataAreaOfLawQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMasterDataAreaOfLawAreaOfLawId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataAreaOfLawAreaOfLawIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataAreaOfLawAreaOfLawId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataAreaOfLawAreaOfLawIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataAttorneyRepresentationType<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataAttorneyRepresentationTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataAttorneyRepresentationType<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataAttorneyRepresentationTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataAttorneyType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.attorneyType.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.attorneyType.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.attorneyType.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataAttorneyTypeQueryKey>
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
      ...getMasterDataAttorneyTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataAttorneyType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.attorneyType.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.attorneyType.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.attorneyType.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataAttorneyTypeQueryKey>
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
      ...getMasterDataAttorneyTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataAttorneyTypeAttorneyTypeId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataAttorneyTypeAttorneyTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataAttorneyTypeAttorneyTypeId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataAttorneyTypeAttorneyTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCaseClass<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseClass.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.caseClass.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseClass.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataCaseClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMasterDataCaseClassQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMasterDataCaseClass<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseClass.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.caseClass.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseClass.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataCaseClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMasterDataCaseClassQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMasterDataCaseClassCaseClassId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCaseClassCaseClassIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCaseClassCaseClassId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCaseClassCaseClassIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCaseRelationshipType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseRelationshipType.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.caseRelationshipType.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCaseRelationshipTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCaseRelationshipType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseRelationshipType.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.caseRelationshipType.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCaseRelationshipTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCaseRelationshipTypeCaseRelationshipTypeId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCaseRelationshipTypeCaseRelationshipTypeIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCaseRelationshipTypeCaseRelationshipTypeId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCaseRelationshipTypeCaseRelationshipTypeIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCaseStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatus.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.caseStatus.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatus.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataCaseStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMasterDataCaseStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMasterDataCaseStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatus.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.caseStatus.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatus.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataCaseStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMasterDataCaseStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMasterDataCaseStatusCaseStatusId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCaseStatusCaseStatusIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCaseStatusCaseStatusId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCaseStatusCaseStatusIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCaseStatusGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatusGroup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.caseStatusGroup.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatusGroup.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataCaseStatusGroupQueryKey>
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
      ...getMasterDataCaseStatusGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCaseStatusGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatusGroup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.caseStatusGroup.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatusGroup.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataCaseStatusGroupQueryKey>
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
      ...getMasterDataCaseStatusGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCaseStatusGroupCaseStatusGroupId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCaseStatusGroupCaseStatusGroupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCaseStatusGroupCaseStatusGroupId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCaseStatusGroupCaseStatusGroupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCaseType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseType.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.caseType.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseType.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataCaseTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMasterDataCaseTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMasterDataCaseType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseType.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.caseType.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseType.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataCaseTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMasterDataCaseTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMasterDataCaseTypeCaseTypeId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCaseTypeCaseTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCaseTypeCaseTypeId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCaseTypeCaseTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCaseTypeGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseTypeGroup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.caseTypeGroup.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseTypeGroup.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataCaseTypeGroupQueryKey>
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
      ...getMasterDataCaseTypeGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCaseTypeGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseTypeGroup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.caseTypeGroup.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseTypeGroup.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataCaseTypeGroupQueryKey>
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
      ...getMasterDataCaseTypeGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCaseTypeGroupCaseTypeGroupId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCaseTypeGroupCaseTypeGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCaseTypeGroupCaseTypeGroupId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCaseTypeGroupCaseTypeGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCauseOfAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfAction.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.causeOfAction.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfAction.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataCauseOfActionQueryKey>
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
      ...getMasterDataCauseOfActionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCauseOfAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfAction.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.causeOfAction.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfAction.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataCauseOfActionQueryKey>
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
      ...getMasterDataCauseOfActionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCauseOfActionCauseOfActionId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCauseOfActionCauseOfActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCauseOfActionCauseOfActionId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCauseOfActionCauseOfActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCauseOfActionAdditionalData<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCauseOfActionAdditionalDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCauseOfActionAdditionalData<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCauseOfActionAdditionalDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCauseOfActionGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfActionGroup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.causeOfActionGroup.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCauseOfActionGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCauseOfActionGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfActionGroup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.causeOfActionGroup.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCauseOfActionGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCauseOfActionGroupCauseOfActionGroupId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCauseOfActionGroupCauseOfActionGroupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCauseOfActionGroupCauseOfActionGroupId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCauseOfActionGroupCauseOfActionGroupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCharge<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.charge.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.charge.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.charge.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataChargeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMasterDataChargeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMasterDataCharge<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.charge.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.charge.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.charge.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataChargeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMasterDataChargeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMasterDataChargeChargeId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataChargeChargeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataChargeChargeId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataChargeChargeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataChargeAdditionalData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeAdditionalData.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.chargeAdditionalData.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataChargeAdditionalDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataChargeAdditionalData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeAdditionalData.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.chargeAdditionalData.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataChargeAdditionalDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataChargeAdditionalDataChargeAdditionalDataId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataChargeAdditionalDataChargeAdditionalDataIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataChargeAdditionalDataChargeAdditionalDataId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataChargeAdditionalDataChargeAdditionalDataIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataChargeDegree<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeDegree.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.chargeDegree.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeDegree.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataChargeDegreeQueryKey>
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
      ...getMasterDataChargeDegreeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataChargeDegree<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeDegree.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.chargeDegree.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeDegree.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataChargeDegreeQueryKey>
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
      ...getMasterDataChargeDegreeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataChargeDegreeChargeDegreeId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataChargeDegreeChargeDegreeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataChargeDegreeChargeDegreeId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataChargeDegreeChargeDegreeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataChargeGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeGroup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.chargeGroup.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeGroup.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataChargeGroupQueryKey>
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
      ...getMasterDataChargeGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataChargeGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeGroup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.chargeGroup.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeGroup.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataChargeGroupQueryKey>
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
      ...getMasterDataChargeGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataChargeGroupChargeGroupId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataChargeGroupChargeGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataChargeGroupChargeGroupId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataChargeGroupChargeGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataChargeSeverity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeSeverity.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.chargeSeverity.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeSeverity.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataChargeSeverityQueryKey>
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
      ...getMasterDataChargeSeverityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataChargeSeverity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeSeverity.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.chargeSeverity.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeSeverity.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataChargeSeverityQueryKey>
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
      ...getMasterDataChargeSeverityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataChargeSeverityChargeSeverityId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataChargeSeverityChargeSeverityIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataChargeSeverityChargeSeverityId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataChargeSeverityChargeSeverityIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCourt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.court.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.court.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.court.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataCourtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMasterDataCourtQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMasterDataCourt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.court.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.court.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.court.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataCourtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMasterDataCourtQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMasterDataCourtCourtId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCourtCourtIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCourtCourtId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCourtCourtIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCourtCourtIdAppealCourts<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCourtCourtIdAppealCourtsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCourtCourtIdAppealCourts<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCourtCourtIdAppealCourtsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCourtCourtIdCourtLocations<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCourtCourtIdCourtLocationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCourtCourtIdCourtLocations<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCourtCourtIdCourtLocationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCourtCourtIdJurisdictionGeo<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCourtCourtIdJurisdictionGeoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCourtCourtIdJurisdictionGeo<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCourtCourtIdJurisdictionGeoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCourtLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtLocation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.courtLocation.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtLocation.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataCourtLocationQueryKey>
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
      ...getMasterDataCourtLocationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCourtLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtLocation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.courtLocation.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtLocation.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataCourtLocationQueryKey>
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
      ...getMasterDataCourtLocationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCourtLocationCourtLocationId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCourtLocationCourtLocationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCourtLocationCourtLocationId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCourtLocationCourtLocationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCourtLocationCourtLocationIdCourts<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCourtLocationCourtLocationIdCourtsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCourtLocationCourtLocationIdCourts<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCourtLocationCourtLocationIdCourtsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCourtServiceStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtServiceStatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.courtServiceStatus.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCourtServiceStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCourtServiceStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtServiceStatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.courtServiceStatus.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCourtServiceStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCourtServiceStatusCourtServiceStatusId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCourtServiceStatusCourtServiceStatusIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCourtServiceStatusCourtServiceStatusId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCourtServiceStatusCourtServiceStatusIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCourtSystem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtSystem.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.courtSystem.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtSystem.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataCourtSystemQueryKey>
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
      ...getMasterDataCourtSystemQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCourtSystem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtSystem.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.courtSystem.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtSystem.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataCourtSystemQueryKey>
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
      ...getMasterDataCourtSystemQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCourtSystemCourtSystemId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCourtSystemCourtSystemIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCourtSystemCourtSystemId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCourtSystemCourtSystemIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataCourtType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtType.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.courtType.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtType.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataCourtTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMasterDataCourtTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMasterDataCourtType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtType.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.courtType.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtType.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataCourtTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMasterDataCourtTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMasterDataCourtTypeCourtTypeId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataCourtTypeCourtTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataCourtTypeCourtTypeId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataCourtTypeCourtTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataJudgeType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.judgeType.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.judgeType.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.judgeType.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataJudgeTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMasterDataJudgeTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMasterDataJudgeType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.judgeType.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.judgeType.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.judgeType.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataJudgeTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMasterDataJudgeTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMasterDataJudgeTypeJudgeTypeId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataJudgeTypeJudgeTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataJudgeTypeJudgeTypeId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataJudgeTypeJudgeTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataJurisdictionGeo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.jurisdictionGeo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.jurisdictionGeo.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.jurisdictionGeo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataJurisdictionGeoQueryKey>
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
      ...getMasterDataJurisdictionGeoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataJurisdictionGeo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.jurisdictionGeo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.jurisdictionGeo.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.jurisdictionGeo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataJurisdictionGeoQueryKey>
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
      ...getMasterDataJurisdictionGeoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataJurisdictionGeoJurisdictionGeoId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataJurisdictionGeoJurisdictionGeoIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataJurisdictionGeoJurisdictionGeoId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataJurisdictionGeoJurisdictionGeoIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataJurisdictionGeoJurisdictionGeoIdCourts<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataJurisdictionGeoJurisdictionGeoIdCourtsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataJurisdictionGeoJurisdictionGeoIdCourts<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataJurisdictionGeoJurisdictionGeoIdCourtsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataPartyRole<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRole.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.partyRole.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRole.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataPartyRoleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMasterDataPartyRoleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMasterDataPartyRole<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRole.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.partyRole.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRole.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataPartyRoleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMasterDataPartyRoleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMasterDataPartyRolePartyRoleId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataPartyRolePartyRoleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataPartyRolePartyRoleId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataPartyRolePartyRoleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataPartyRoleGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRoleGroup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.partyRoleGroup.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRoleGroup.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataPartyRoleGroupQueryKey>
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
      ...getMasterDataPartyRoleGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataPartyRoleGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRoleGroup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.masterData.partyRoleGroup.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRoleGroup.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMasterDataPartyRoleGroupQueryKey>
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
      ...getMasterDataPartyRoleGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMasterDataPartyRoleGroupPartyRoleGroupId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMasterDataPartyRoleGroupPartyRoleGroupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMasterDataPartyRoleGroupPartyRoleGroupId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMasterDataPartyRoleGroupPartyRoleGroupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormAttorneyNormAttorneyId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormAttorneyNormAttorneyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormAttorneyNormAttorneyId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormAttorneyNormAttorneyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormAttorneyNormAttorneyIdAssociatedNormJudges<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormAttorneyNormAttorneyIdAssociatedNormJudgesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormAttorneyNormAttorneyIdAssociatedNormJudges<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormAttorneyNormAttorneyIdAssociatedNormJudgesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormAttorneyNormAttorneyIdAssociatedNormLawFirms<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormAttorneyNormAttorneyIdAssociatedNormLawFirms<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormAttorneyNormAttorneyIdAssociatedNormParties<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormAttorneyNormAttorneyIdAssociatedNormPartiesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormAttorneyNormAttorneyIdAssociatedNormParties<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormAttorneyNormAttorneyIdAssociatedNormPartiesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorney<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorney<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormAttorneySearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normAttorneySearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.normAttorneySearch.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.normAttorneySearch.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNormAttorneySearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNormAttorneySearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNormAttorneySearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normAttorneySearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.normAttorneySearch.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.normAttorneySearch.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNormAttorneySearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNormAttorneySearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNormAttorneySearchNormAttorneySearchId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormAttorneySearchNormAttorneySearchIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormAttorneySearchNormAttorneySearchId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormAttorneySearchNormAttorneySearchIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormJudgeNormJudgeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.normJudge)[':normJudgeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.normJudge)[':normJudgeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNormJudgeNormJudgeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNormJudgeNormJudgeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.normJudge)[':normJudgeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.normJudge)[':normJudgeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNormJudgeNormJudgeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNormJudgeNormJudgeIdAssociatedNormAttorneys<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormJudgeNormJudgeIdAssociatedNormAttorneysQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormJudgeNormJudgeIdAssociatedNormAttorneys<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormJudgeNormJudgeIdAssociatedNormAttorneysQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormJudgeNormJudgeIdAssociatedNormLawFirms<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormJudgeNormJudgeIdAssociatedNormLawFirmsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormJudgeNormJudgeIdAssociatedNormLawFirms<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormJudgeNormJudgeIdAssociatedNormLawFirmsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormJudgeNormJudgeIdAssociatedNormParties<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormJudgeNormJudgeIdAssociatedNormPartiesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormJudgeNormJudgeIdAssociatedNormParties<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormJudgeNormJudgeIdAssociatedNormPartiesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormJudgeSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normJudgeSearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.normJudgeSearch.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normJudgeSearch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNormJudgeSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNormJudgeSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNormJudgeSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normJudgeSearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.normJudgeSearch.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normJudgeSearch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNormJudgeSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNormJudgeSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNormJudgeSearchNormJudgeSearchId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormJudgeSearchNormJudgeSearchIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormJudgeSearchNormJudgeSearchId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormJudgeSearchNormJudgeSearchIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormLawFirmNormLawFirmId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormLawFirmNormLawFirmIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormLawFirmNormLawFirmId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormLawFirmNormLawFirmIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormLawFirmNormLawFirmIdAssociatedNormAttorneys<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormLawFirmNormLawFirmIdAssociatedNormAttorneysQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormLawFirmNormLawFirmIdAssociatedNormAttorneys<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormLawFirmNormLawFirmIdAssociatedNormAttorneysQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormLawFirmNormLawFirmIdAssociatedNormJudges<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormLawFirmNormLawFirmIdAssociatedNormJudgesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormLawFirmNormLawFirmIdAssociatedNormJudges<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormLawFirmNormLawFirmIdAssociatedNormJudgesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormLawFirmNormLawFirmIdAssociatedNormParties<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormLawFirmNormLawFirmIdAssociatedNormPartiesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormLawFirmNormLawFirmIdAssociatedNormParties<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormLawFirmNormLawFirmIdAssociatedNormPartiesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirm<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirm<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormLawFirmSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normLawFirmSearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.normLawFirmSearch.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.normLawFirmSearch.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNormLawFirmSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNormLawFirmSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNormLawFirmSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normLawFirmSearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.normLawFirmSearch.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.normLawFirmSearch.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNormLawFirmSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNormLawFirmSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNormLawFirmSearchNormLawFirmSearchId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormLawFirmSearchNormLawFirmSearchIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormLawFirmSearchNormLawFirmSearchId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormLawFirmSearchNormLawFirmSearchIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormPartyNormPartyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.normParty)[':normPartyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.normParty)[':normPartyId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNormPartyNormPartyIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNormPartyNormPartyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.normParty)[':normPartyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.normParty)[':normPartyId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNormPartyNormPartyIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNormPartyNormPartyIdAssociatedNormAttorneys<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormPartyNormPartyIdAssociatedNormAttorneysQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormPartyNormPartyIdAssociatedNormAttorneys<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormPartyNormPartyIdAssociatedNormAttorneysQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormPartyNormPartyIdAssociatedNormJudges<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormPartyNormPartyIdAssociatedNormJudgesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormPartyNormPartyIdAssociatedNormJudges<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormPartyNormPartyIdAssociatedNormJudgesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormPartyNormPartyIdAssociatedNormLawFirms<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormPartyNormPartyIdAssociatedNormLawFirmsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormPartyNormPartyIdAssociatedNormLawFirms<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormPartyNormPartyIdAssociatedNormLawFirmsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormParty<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormParty<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNormPartySearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normPartySearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.normPartySearch.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normPartySearch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNormPartySearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNormPartySearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNormPartySearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normPartySearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.normPartySearch.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normPartySearch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNormPartySearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNormPartySearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNormPartySearchNormPartySearchId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNormPartySearchNormPartySearchIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNormPartySearchNormPartySearchId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNormPartySearchNormPartySearchIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePacerImportCaseByCourtUsingCaseNumber<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getPacerImportCaseByCourtUsingCaseNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePacerImportCaseByCourtUsingCaseNumber<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPacerImportCaseByCourtUsingCaseNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePacerCaseLocatorCaseSearchAllCourts<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getPacerCaseLocatorCaseSearchAllCourtsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePacerCaseLocatorCaseSearchAllCourts<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPacerCaseLocatorCaseSearchAllCourtsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePacerCaseLocatorCaseSearchAppealCourts<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getPacerCaseLocatorCaseSearchAppealCourtsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePacerCaseLocatorCaseSearchAppealCourts<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPacerCaseLocatorCaseSearchAppealCourtsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePacerCaseLocatorCaseSearchBankruptcyCourts<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getPacerCaseLocatorCaseSearchBankruptcyCourtsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePacerCaseLocatorCaseSearchBankruptcyCourts<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPacerCaseLocatorCaseSearchBankruptcyCourtsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePacerCaseLocatorCaseSearchCivilCourts<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getPacerCaseLocatorCaseSearchCivilCourtsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePacerCaseLocatorCaseSearchCivilCourts<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPacerCaseLocatorCaseSearchCivilCourtsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePacerCaseLocatorCaseSearchCriminalCourts<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getPacerCaseLocatorCaseSearchCriminalCourtsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePacerCaseLocatorCaseSearchCriminalCourts<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPacerCaseLocatorCaseSearchCriminalCourtsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePacerCaseLocatorCaseSearchMultiDistrictCourts<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getPacerCaseLocatorCaseSearchMultiDistrictCourtsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePacerCaseLocatorCaseSearchMultiDistrictCourts<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPacerCaseLocatorCaseSearchMultiDistrictCourtsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePacerCaseLocatorPartySearchAllCourts<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getPacerCaseLocatorPartySearchAllCourtsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePacerCaseLocatorPartySearchAllCourts<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPacerCaseLocatorPartySearchAllCourtsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePacerCaseLocatorPartySearchAppealCourts<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getPacerCaseLocatorPartySearchAppealCourtsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePacerCaseLocatorPartySearchAppealCourts<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPacerCaseLocatorPartySearchAppealCourtsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePacerCaseLocatorPartySearchBankruptcyCourts<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getPacerCaseLocatorPartySearchBankruptcyCourtsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePacerCaseLocatorPartySearchBankruptcyCourts<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPacerCaseLocatorPartySearchBankruptcyCourtsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePacerCaseLocatorPartySearchCivilCourts<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getPacerCaseLocatorPartySearchCivilCourtsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePacerCaseLocatorPartySearchCivilCourts<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPacerCaseLocatorPartySearchCivilCourtsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePacerCaseLocatorPartySearchCriminalCourts<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getPacerCaseLocatorPartySearchCriminalCourtsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePacerCaseLocatorPartySearchCriminalCourts<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPacerCaseLocatorPartySearchCriminalCourtsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePacerCaseLocatorPartySearchMultiDistrictCourts<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getPacerCaseLocatorPartySearchMultiDistrictCourtsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePacerCaseLocatorPartySearchMultiDistrictCourts<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPacerCaseLocatorPartySearchMultiDistrictCourtsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePacerCredential<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pacerCredential.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPacerCredentialQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPacerCredentialQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePacerCredential<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pacerCredential.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPacerCredentialQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPacerCredentialQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePutPacerCredential<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.pacerCredential.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPacerCredentialMutationOptions<TError, TOnMutateResult>(
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

export function usePacerCredentialPacerUserId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getPacerCredentialPacerUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePacerCredentialPacerUserId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPacerCredentialPacerUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useDeletePacerCredentialPacerUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePacerCredentialPacerUserIdMutationOptions<
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

export function usePartyPartyId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.party)[':partyId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.party)[':partyId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.party)[':partyId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPartyPartyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPartyPartyIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePartyPartyId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.party)[':partyId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.party)[':partyId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.party)[':partyId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPartyPartyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPartyPartyIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePartyPartyIdAssociatedAttorneys<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getPartyPartyIdAssociatedAttorneysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePartyPartyIdAssociatedAttorneys<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPartyPartyIdAssociatedAttorneysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
