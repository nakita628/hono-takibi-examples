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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.attorney)[':attorneyId']['$get']>>,
) {
  return ['attorney', '/attorney/:attorneyId', toValue(args)] as const
}

export function getAttorneyAttorneyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.attorney)[':attorneyId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAttorneyAttorneyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.attorney[':attorneyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAttorneyAttorneyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.attorney)[':attorneyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.attorney)[':attorneyId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.attorney)[':attorneyId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAttorneyAttorneyIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.attorney)[':attorneyId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttorneyAttorneyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAttorneyAttorneyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.attorney[':attorneyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAttorneyAttorneyIdAssociatedPartiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.attorney)[':attorneyId']['associatedParties']['$get']>
  >,
) {
  return ['attorney', '/attorney/:attorneyId/associatedParties', toValue(args)] as const
}

export function getAttorneyAttorneyIdAssociatedPartiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.attorney)[':attorneyId']['associatedParties']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAttorneyAttorneyIdAssociatedPartiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.attorney[':attorneyId'].associatedParties.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.attorney)[':attorneyId']['associatedParties']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.attorney)[':attorneyId']['associatedParties']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAttorneyAttorneyIdAssociatedPartiesQueryKey>
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
          Awaited<ReturnType<(typeof client.attorney)[':attorneyId']['associatedParties']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttorneyAttorneyIdAssociatedPartiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAttorneyAttorneyIdAssociatedPartiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.attorney[':attorneyId'].associatedParties.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillingCycleUsageBillingCycleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billingCycleUsage)[':billingCycle']['$get']>
  >,
) {
  return ['billingCycleUsage', '/billingCycleUsage/:billingCycle', toValue(args)] as const
}

export function getBillingCycleUsageBillingCycleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billingCycleUsage)[':billingCycle']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillingCycleUsageBillingCycleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billingCycleUsage[':billingCycle'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.billingCycleUsage)[':billingCycle']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.billingCycleUsage)[':billingCycle']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBillingCycleUsageBillingCycleQueryKey>
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
          Awaited<ReturnType<(typeof client.billingCycleUsage)[':billingCycle']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingCycleUsageBillingCycleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillingCycleUsageBillingCycleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.billingCycleUsage[':billingCycle'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillingCyclesQueryKey() {
  return ['billingCycles', '/billingCycles'] as const
}

export function getBillingCyclesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBillingCyclesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billingCycles.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBillingCycles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billingCycles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billingCycles.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billingCycles.$get>>>>
          >,
          ReturnType<typeof getBillingCyclesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billingCycles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBillingCyclesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBillingCyclesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.billingCycles.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCallbacksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.callbacks.$get>>,
) {
  return ['callbacks', '/callbacks', toValue(args)] as const
}

export function getCallbacksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.callbacks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCallbacksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.callbacks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCallbacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callbacks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.callbacks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callbacks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callbacks.$get>>>>
          >,
          ReturnType<typeof getCallbacksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callbacks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCallbacksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCallbacksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.callbacks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCaseIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['$get']>>,
) {
  return ['case', '/case/:caseId', toValue(args)] as const
}

export function getCaseCaseIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCaseIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.case[':caseId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseCaseId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['$get']>>>
            >
          >,
          ReturnType<typeof getCaseCaseIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCaseIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCaseIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.case[':caseId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCaseIdAttorneysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['attorneys']['$get']>>,
) {
  return ['case', '/case/:caseId/attorneys', toValue(args)] as const
}

export function getCaseCaseIdAttorneysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['attorneys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCaseIdAttorneysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.case[':caseId'].attorneys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['attorneys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.case)[':caseId']['attorneys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCaseCaseIdAttorneysQueryKey>
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
          Awaited<ReturnType<(typeof client.case)[':caseId']['attorneys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCaseIdAttorneysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCaseIdAttorneysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.case[':caseId'].attorneys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCaseIdDocketEntriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.case)[':caseId']['docketEntries']['$get']>
  >,
) {
  return ['case', '/case/:caseId/docketEntries', toValue(args)] as const
}

export function getCaseCaseIdDocketEntriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.case)[':caseId']['docketEntries']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCaseIdDocketEntriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.case[':caseId'].docketEntries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.case)[':caseId']['docketEntries']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.case)[':caseId']['docketEntries']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCaseCaseIdDocketEntriesQueryKey>
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
          Awaited<ReturnType<(typeof client.case)[':caseId']['docketEntries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCaseIdDocketEntriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCaseIdDocketEntriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.case[':caseId'].docketEntries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCaseIdDocketEntriesPrimaryDocumentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.case)[':caseId']['docketEntries']['primaryDocuments']['$get']>
  >,
) {
  return ['case', '/case/:caseId/docketEntries/primaryDocuments', toValue(args)] as const
}

export function getCaseCaseIdDocketEntriesPrimaryDocumentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.case)[':caseId']['docketEntries']['primaryDocuments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCaseIdDocketEntriesPrimaryDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.case[':caseId'].docketEntries.primaryDocuments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.case)[':caseId']['docketEntries']['primaryDocuments']['$get']>
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
                    (typeof client.case)[':caseId']['docketEntries']['primaryDocuments']['$get']
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
                    (typeof client.case)[':caseId']['docketEntries']['primaryDocuments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCaseCaseIdDocketEntriesPrimaryDocumentsQueryKey>
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
            ReturnType<(typeof client.case)[':caseId']['docketEntries']['primaryDocuments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCaseIdDocketEntriesPrimaryDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCaseIdDocketEntriesPrimaryDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.case[':caseId'].docketEntries.primaryDocuments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCaseIdDocketEntriesSecondaryDocumentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.case)[':caseId']['docketEntries']['secondaryDocuments']['$get']>
  >,
) {
  return ['case', '/case/:caseId/docketEntries/secondaryDocuments', toValue(args)] as const
}

export function getCaseCaseIdDocketEntriesSecondaryDocumentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.case)[':caseId']['docketEntries']['secondaryDocuments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCaseIdDocketEntriesSecondaryDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.case[':caseId'].docketEntries.secondaryDocuments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.case)[':caseId']['docketEntries']['secondaryDocuments']['$get']>
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
                    (typeof client.case)[':caseId']['docketEntries']['secondaryDocuments']['$get']
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
                    (typeof client.case)[':caseId']['docketEntries']['secondaryDocuments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCaseCaseIdDocketEntriesSecondaryDocumentsQueryKey>
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
              (typeof client.case)[':caseId']['docketEntries']['secondaryDocuments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCaseIdDocketEntriesSecondaryDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCaseIdDocketEntriesSecondaryDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.case[':caseId'].docketEntries.secondaryDocuments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCaseIdDocumentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['documents']['$get']>>,
) {
  return ['case', '/case/:caseId/documents', toValue(args)] as const
}

export function getCaseCaseIdDocumentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['documents']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCaseIdDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.case[':caseId'].documents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['documents']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.case)[':caseId']['documents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCaseCaseIdDocumentsQueryKey>
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
          Awaited<ReturnType<(typeof client.case)[':caseId']['documents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCaseIdDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCaseIdDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.case[':caseId'].documents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCaseIdHearingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['hearings']['$get']>>,
) {
  return ['case', '/case/:caseId/hearings', toValue(args)] as const
}

export function getCaseCaseIdHearingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['hearings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCaseIdHearingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.case[':caseId'].hearings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseCaseIdHearings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['hearings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['hearings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.case)[':caseId']['hearings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCaseCaseIdHearingsQueryKey>
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
          Awaited<ReturnType<(typeof client.case)[':caseId']['hearings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCaseIdHearingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCaseIdHearingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.case[':caseId'].hearings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCaseIdJudgesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['judges']['$get']>>,
) {
  return ['case', '/case/:caseId/judges', toValue(args)] as const
}

export function getCaseCaseIdJudgesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['judges']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCaseIdJudgesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.case[':caseId'].judges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseCaseIdJudges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['judges']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['judges']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.case)[':caseId']['judges']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCaseCaseIdJudgesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['judges']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCaseIdJudgesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCaseIdJudgesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.case[':caseId'].judges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCaseIdPartiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['parties']['$get']>>,
) {
  return ['case', '/case/:caseId/parties', toValue(args)] as const
}

export function getCaseCaseIdPartiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['parties']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCaseIdPartiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.case[':caseId'].parties.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseCaseIdParties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['parties']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['parties']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.case)[':caseId']['parties']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCaseCaseIdPartiesQueryKey>
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
          Awaited<ReturnType<(typeof client.case)[':caseId']['parties']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCaseIdPartiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCaseIdPartiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.case[':caseId'].parties.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCaseIdRelatedCasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['relatedCases']['$get']>>,
) {
  return ['case', '/case/:caseId/relatedCases', toValue(args)] as const
}

export function getCaseCaseIdRelatedCasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['relatedCases']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCaseIdRelatedCasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.case[':caseId'].relatedCases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.case)[':caseId']['relatedCases']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.case)[':caseId']['relatedCases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCaseCaseIdRelatedCasesQueryKey>
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
          Awaited<ReturnType<(typeof client.case)[':caseId']['relatedCases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCaseIdRelatedCasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCaseIdRelatedCasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.case[':caseId'].relatedCases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCountAnalyticsByAreaOfLawQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>>,
) {
  return ['caseCountAnalyticsByAreaOfLaw', '/caseCountAnalyticsByAreaOfLaw', toValue(args)] as const
}

export function getCaseCountAnalyticsByAreaOfLawQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCountAnalyticsByAreaOfLawQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseCountAnalyticsByAreaOfLaw.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseCountAnalyticsByAreaOfLaw<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>>
              >
            >
          >,
          ReturnType<typeof getCaseCountAnalyticsByAreaOfLawQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByAreaOfLawQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCountAnalyticsByAreaOfLawQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseCountAnalyticsByAreaOfLaw.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCountAnalyticsByCaseClassQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCaseClass.$get>>,
) {
  return ['caseCountAnalyticsByCaseClass', '/caseCountAnalyticsByCaseClass', toValue(args)] as const
}

export function getCaseCountAnalyticsByCaseClassQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCaseClass.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCountAnalyticsByCaseClassQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseCountAnalyticsByCaseClass.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseCountAnalyticsByCaseClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCaseClass.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseClass.$get>>
              >
            >
          >,
          ReturnType<typeof getCaseCountAnalyticsByCaseClassQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseClass.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByCaseClassQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCountAnalyticsByCaseClassQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseCountAnalyticsByCaseClass.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCountAnalyticsByCaseFiledDateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCaseFiledDate.$get>>,
) {
  return [
    'caseCountAnalyticsByCaseFiledDate',
    '/caseCountAnalyticsByCaseFiledDate',
    toValue(args),
  ] as const
}

export function getCaseCountAnalyticsByCaseFiledDateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCaseFiledDate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCountAnalyticsByCaseFiledDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseCountAnalyticsByCaseFiledDate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCaseFiledDate.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseFiledDate.$get>>
              >
            >
          >,
          ReturnType<typeof getCaseCountAnalyticsByCaseFiledDateQueryKey>
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
          Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseFiledDate.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByCaseFiledDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCountAnalyticsByCaseFiledDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseCountAnalyticsByCaseFiledDate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCountAnalyticsByCaseTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCaseType.$get>>,
) {
  return ['caseCountAnalyticsByCaseType', '/caseCountAnalyticsByCaseType', toValue(args)] as const
}

export function getCaseCountAnalyticsByCaseTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCaseType.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCountAnalyticsByCaseTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseCountAnalyticsByCaseType.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseCountAnalyticsByCaseType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseType.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCaseType.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseType.$get>>
              >
            >
          >,
          ReturnType<typeof getCaseCountAnalyticsByCaseTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseType.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByCaseTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCountAnalyticsByCaseTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseCountAnalyticsByCaseType.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCountAnalyticsByCaseTypeGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCaseTypeGroup.$get>>,
) {
  return [
    'caseCountAnalyticsByCaseTypeGroup',
    '/caseCountAnalyticsByCaseTypeGroup',
    toValue(args),
  ] as const
}

export function getCaseCountAnalyticsByCaseTypeGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCaseTypeGroup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCountAnalyticsByCaseTypeGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseCountAnalyticsByCaseTypeGroup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCaseTypeGroup.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseTypeGroup.$get>>
              >
            >
          >,
          ReturnType<typeof getCaseCountAnalyticsByCaseTypeGroupQueryKey>
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
          Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseTypeGroup.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByCaseTypeGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCountAnalyticsByCaseTypeGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseCountAnalyticsByCaseTypeGroup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCountAnalyticsByCourtQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCourt.$get>>,
) {
  return ['caseCountAnalyticsByCourt', '/caseCountAnalyticsByCourt', toValue(args)] as const
}

export function getCaseCountAnalyticsByCourtQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCourt.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCountAnalyticsByCourtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseCountAnalyticsByCourt.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseCountAnalyticsByCourt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourt.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCourt.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByCourt.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByCourt.$get>>
              >
            >
          >,
          ReturnType<typeof getCaseCountAnalyticsByCourtQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourt.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByCourtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCountAnalyticsByCourtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseCountAnalyticsByCourt.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCountAnalyticsByCourtLocationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCourtLocation.$get>>,
) {
  return [
    'caseCountAnalyticsByCourtLocation',
    '/caseCountAnalyticsByCourtLocation',
    toValue(args),
  ] as const
}

export function getCaseCountAnalyticsByCourtLocationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCourtLocation.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCountAnalyticsByCourtLocationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseCountAnalyticsByCourtLocation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCourtLocation.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtLocation.$get>>
              >
            >
          >,
          ReturnType<typeof getCaseCountAnalyticsByCourtLocationQueryKey>
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
          Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtLocation.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByCourtLocationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCountAnalyticsByCourtLocationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseCountAnalyticsByCourtLocation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCountAnalyticsByCourtSystemQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCourtSystem.$get>>,
) {
  return [
    'caseCountAnalyticsByCourtSystem',
    '/caseCountAnalyticsByCourtSystem',
    toValue(args),
  ] as const
}

export function getCaseCountAnalyticsByCourtSystemQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCourtSystem.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCountAnalyticsByCourtSystemQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseCountAnalyticsByCourtSystem.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseCountAnalyticsByCourtSystem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtSystem.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCourtSystem.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtSystem.$get>>
              >
            >
          >,
          ReturnType<typeof getCaseCountAnalyticsByCourtSystemQueryKey>
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
          Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtSystem.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByCourtSystemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCountAnalyticsByCourtSystemQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseCountAnalyticsByCourtSystem.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCountAnalyticsByCourtTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCourtType.$get>>,
) {
  return ['caseCountAnalyticsByCourtType', '/caseCountAnalyticsByCourtType', toValue(args)] as const
}

export function getCaseCountAnalyticsByCourtTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCourtType.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCountAnalyticsByCourtTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseCountAnalyticsByCourtType.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseCountAnalyticsByCourtType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtType.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByCourtType.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtType.$get>>
              >
            >
          >,
          ReturnType<typeof getCaseCountAnalyticsByCourtTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtType.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByCourtTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCountAnalyticsByCourtTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseCountAnalyticsByCourtType.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCountAnalyticsByJurisdictionGeoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByJurisdictionGeo.$get>>,
) {
  return [
    'caseCountAnalyticsByJurisdictionGeo',
    '/caseCountAnalyticsByJurisdictionGeo',
    toValue(args),
  ] as const
}

export function getCaseCountAnalyticsByJurisdictionGeoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByJurisdictionGeo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCountAnalyticsByJurisdictionGeoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseCountAnalyticsByJurisdictionGeo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByJurisdictionGeo.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByJurisdictionGeo.$get>>
              >
            >
          >,
          ReturnType<typeof getCaseCountAnalyticsByJurisdictionGeoQueryKey>
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
          Awaited<ReturnType<typeof client.caseCountAnalyticsByJurisdictionGeo.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByJurisdictionGeoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCountAnalyticsByJurisdictionGeoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseCountAnalyticsByJurisdictionGeo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCountAnalyticsByNormAttorneyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByNormAttorney.$get>>,
) {
  return [
    'caseCountAnalyticsByNormAttorney',
    '/caseCountAnalyticsByNormAttorney',
    toValue(args),
  ] as const
}

export function getCaseCountAnalyticsByNormAttorneyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByNormAttorney.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCountAnalyticsByNormAttorneyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseCountAnalyticsByNormAttorney.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseCountAnalyticsByNormAttorney<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormAttorney.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByNormAttorney.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByNormAttorney.$get>>
              >
            >
          >,
          ReturnType<typeof getCaseCountAnalyticsByNormAttorneyQueryKey>
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
          Awaited<ReturnType<typeof client.caseCountAnalyticsByNormAttorney.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByNormAttorneyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCountAnalyticsByNormAttorneyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseCountAnalyticsByNormAttorney.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCountAnalyticsByNormJudgeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByNormJudge.$get>>,
) {
  return ['caseCountAnalyticsByNormJudge', '/caseCountAnalyticsByNormJudge', toValue(args)] as const
}

export function getCaseCountAnalyticsByNormJudgeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByNormJudge.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCountAnalyticsByNormJudgeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseCountAnalyticsByNormJudge.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseCountAnalyticsByNormJudge<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormJudge.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByNormJudge.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByNormJudge.$get>>
              >
            >
          >,
          ReturnType<typeof getCaseCountAnalyticsByNormJudgeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormJudge.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByNormJudgeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCountAnalyticsByNormJudgeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseCountAnalyticsByNormJudge.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCountAnalyticsByNormLawFirmQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByNormLawFirm.$get>>,
) {
  return [
    'caseCountAnalyticsByNormLawFirm',
    '/caseCountAnalyticsByNormLawFirm',
    toValue(args),
  ] as const
}

export function getCaseCountAnalyticsByNormLawFirmQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByNormLawFirm.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCountAnalyticsByNormLawFirmQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseCountAnalyticsByNormLawFirm.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseCountAnalyticsByNormLawFirm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormLawFirm.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByNormLawFirm.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByNormLawFirm.$get>>
              >
            >
          >,
          ReturnType<typeof getCaseCountAnalyticsByNormLawFirmQueryKey>
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
          Awaited<ReturnType<typeof client.caseCountAnalyticsByNormLawFirm.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByNormLawFirmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCountAnalyticsByNormLawFirmQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseCountAnalyticsByNormLawFirm.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCountAnalyticsByNormPartyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByNormParty.$get>>,
) {
  return ['caseCountAnalyticsByNormParty', '/caseCountAnalyticsByNormParty', toValue(args)] as const
}

export function getCaseCountAnalyticsByNormPartyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByNormParty.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCountAnalyticsByNormPartyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseCountAnalyticsByNormParty.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseCountAnalyticsByNormParty<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormParty.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByNormParty.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByNormParty.$get>>
              >
            >
          >,
          ReturnType<typeof getCaseCountAnalyticsByNormPartyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByNormParty.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByNormPartyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCountAnalyticsByNormPartyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseCountAnalyticsByNormParty.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCountAnalyticsByPartyRoleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByPartyRole.$get>>,
) {
  return ['caseCountAnalyticsByPartyRole', '/caseCountAnalyticsByPartyRole', toValue(args)] as const
}

export function getCaseCountAnalyticsByPartyRoleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByPartyRole.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCountAnalyticsByPartyRoleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseCountAnalyticsByPartyRole.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseCountAnalyticsByPartyRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRole.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByPartyRole.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRole.$get>>
              >
            >
          >,
          ReturnType<typeof getCaseCountAnalyticsByPartyRoleQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRole.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByPartyRoleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCountAnalyticsByPartyRoleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseCountAnalyticsByPartyRole.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseCountAnalyticsByPartyRoleGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByPartyRoleGroup.$get>>,
) {
  return [
    'caseCountAnalyticsByPartyRoleGroup',
    '/caseCountAnalyticsByPartyRoleGroup',
    toValue(args),
  ] as const
}

export function getCaseCountAnalyticsByPartyRoleGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByPartyRoleGroup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseCountAnalyticsByPartyRoleGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseCountAnalyticsByPartyRoleGroup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseCountAnalyticsByPartyRoleGroup.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRoleGroup.$get>>
              >
            >
          >,
          ReturnType<typeof getCaseCountAnalyticsByPartyRoleGroupQueryKey>
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
          Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRoleGroup.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseCountAnalyticsByPartyRoleGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseCountAnalyticsByPartyRoleGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseCountAnalyticsByPartyRoleGroup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseDocumentCaseDocumentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.caseDocument)[':caseDocumentId']['$get']>>,
) {
  return ['caseDocument', '/caseDocument/:caseDocumentId', toValue(args)] as const
}

export function getCaseDocumentCaseDocumentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.caseDocument)[':caseDocumentId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseDocumentCaseDocumentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseDocument[':caseDocumentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.caseDocument)[':caseDocumentId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.caseDocument)[':caseDocumentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCaseDocumentCaseDocumentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.caseDocument)[':caseDocumentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseDocumentCaseDocumentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseDocumentCaseDocumentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseDocument[':caseDocumentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseDocumentDownloadCaseDocumentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.caseDocumentDownload)[':caseDocumentId']['$get']>
  >,
) {
  return ['caseDocumentDownload', '/caseDocumentDownload/:caseDocumentId', toValue(args)] as const
}

export function getCaseDocumentDownloadCaseDocumentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.caseDocumentDownload)[':caseDocumentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseDocumentDownloadCaseDocumentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseDocumentDownload[':caseDocumentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.caseDocumentDownload)[':caseDocumentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.caseDocumentDownload)[':caseDocumentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCaseDocumentDownloadCaseDocumentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.caseDocumentDownload)[':caseDocumentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseDocumentDownloadCaseDocumentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseDocumentDownloadCaseDocumentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseDocumentDownload[':caseDocumentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseDocumentOrder.callbacks.$get>>,
) {
  return ['caseDocumentOrder', '/caseDocumentOrder/callbacks', toValue(args)] as const
}

export function getCaseDocumentOrderCallbacksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseDocumentOrder.callbacks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseDocumentOrderCallbacksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseDocumentOrder.callbacks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseDocumentOrderCallbacks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.caseDocumentOrder.callbacks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseDocumentOrder.callbacks.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.caseDocumentOrder.callbacks.$get>>
              >
            >
          >,
          ReturnType<typeof getCaseDocumentOrderCallbacksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.caseDocumentOrder.callbacks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseDocumentOrderCallbacksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseDocumentOrderCallbacksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseDocumentOrder.callbacks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.caseDocumentOrder.callbacks)[':caseDocumentOrderCallbackId']['$get']
    >
  >,
) {
  return [
    'caseDocumentOrder',
    '/caseDocumentOrder/callbacks/:caseDocumentOrderCallbackId',
    toValue(args),
  ] as const
}

export function getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.caseDocumentOrder.callbacks)[':caseDocumentOrderCallbackId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseDocumentOrder.callbacks[':caseDocumentOrderCallbackId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.caseDocumentOrder.callbacks)[':caseDocumentOrderCallbackId']['$get']
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
                    (typeof client.caseDocumentOrder.callbacks)[':caseDocumentOrderCallbackId']['$get']
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
                    (typeof client.caseDocumentOrder.callbacks)[':caseDocumentOrderCallbackId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdQueryKey>
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
              (typeof client.caseDocumentOrder.callbacks)[':caseDocumentOrderCallbackId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.caseDocumentOrder.callbacks[':caseDocumentOrderCallbackId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseExportCallbacksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseExport.callbacks.$get>>,
) {
  return ['caseExport', '/caseExport/callbacks', toValue(args)] as const
}

export function getCaseExportCallbacksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseExport.callbacks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseExportCallbacksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseExport.callbacks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseExportCallbacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseExport.callbacks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseExport.callbacks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.caseExport.callbacks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.caseExport.callbacks.$get>>>
            >
          >,
          ReturnType<typeof getCaseExportCallbacksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseExport.callbacks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCaseExportCallbacksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseExportCallbacksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseExport.callbacks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseExportCallbacksCaseExportCallbackIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.caseExport.callbacks)[':caseExportCallbackId']['$get']>
  >,
) {
  return ['caseExport', '/caseExport/callbacks/:caseExportCallbackId', toValue(args)] as const
}

export function getCaseExportCallbacksCaseExportCallbackIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.caseExport.callbacks)[':caseExportCallbackId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseExportCallbacksCaseExportCallbackIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseExport.callbacks[':caseExportCallbackId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.caseExport.callbacks)[':caseExportCallbackId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.caseExport.callbacks)[':caseExportCallbackId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCaseExportCallbacksCaseExportCallbackIdQueryKey>
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
          Awaited<ReturnType<(typeof client.caseExport.callbacks)[':caseExportCallbackId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseExportCallbacksCaseExportCallbackIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseExportCallbacksCaseExportCallbackIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseExport.callbacks[':caseExportCallbackId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseExportCaseIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.caseExport)[':caseId']['$get']>>,
) {
  return ['caseExport', '/caseExport/:caseId', toValue(args)] as const
}

export function getCaseExportCaseIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.caseExport)[':caseId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseExportCaseIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseExport[':caseId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseExportCaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.caseExport)[':caseId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.caseExport)[':caseId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.caseExport)[':caseId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.caseExport)[':caseId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCaseExportCaseIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.caseExport)[':caseId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseExportCaseIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseExportCaseIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseExport[':caseId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseSearch.$get>>,
) {
  return ['caseSearch', '/caseSearch', toValue(args)] as const
}

export function getCaseSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseSearch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseSearch.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCaseSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseSearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseSearch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseSearch.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseSearch.$get>>>>
          >,
          ReturnType<typeof getCaseSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseSearch.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCaseSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseSearch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseSearchCaseSearchIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.caseSearch)[':caseSearchId']['$get']>>,
) {
  return ['caseSearch', '/caseSearch/:caseSearchId', toValue(args)] as const
}

export function getCaseSearchCaseSearchIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.caseSearch)[':caseSearchId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseSearchCaseSearchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseSearch[':caseSearchId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseSearchCaseSearchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.caseSearch)[':caseSearchId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.caseSearch)[':caseSearchId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.caseSearch)[':caseSearchId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCaseSearchCaseSearchIdQueryKey>
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
          Awaited<ReturnType<(typeof client.caseSearch)[':caseSearchId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseSearchCaseSearchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseSearchCaseSearchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseSearch[':caseSearchId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTrack.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.caseTrack.$put>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.caseTrack)[':caseId']['$get']>>,
) {
  return ['caseTrack', '/caseTrack/:caseId', toValue(args)] as const
}

export function getCaseTrackCaseIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.caseTrack)[':caseId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseTrackCaseIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseTrack[':caseId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseTrackCaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.caseTrack)[':caseId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.caseTrack)[':caseId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.caseTrack)[':caseId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.caseTrack)[':caseId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCaseTrackCaseIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.caseTrack)[':caseId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseTrackCaseIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseTrackCaseIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseTrack[':caseId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getCaseTracksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseTracks.$get>>,
) {
  return ['caseTracks', '/caseTracks', toValue(args)] as const
}

export function getCaseTracksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseTracks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseTracksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseTracks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCaseTracks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTracks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseTracks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTracks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTracks.$get>>>>
          >,
          ReturnType<typeof getCaseTracksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTracks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCaseTracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseTracksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseTracks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdate.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.caseUpdate.$put>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.caseUpdate)[':caseId']['$get']>>,
) {
  return ['caseUpdate', '/caseUpdate/:caseId', toValue(args)] as const
}

export function getCaseUpdateCaseIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.caseUpdate)[':caseId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseUpdateCaseIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseUpdate[':caseId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaseUpdateCaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.caseUpdate)[':caseId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.caseUpdate)[':caseId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.caseUpdate)[':caseId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.caseUpdate)[':caseId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCaseUpdateCaseIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.caseUpdate)[':caseId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaseUpdateCaseIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseUpdateCaseIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseUpdate[':caseId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaseUpdatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseUpdates.$get>>,
) {
  return ['caseUpdates', '/caseUpdates', toValue(args)] as const
}

export function getCaseUpdatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseUpdates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaseUpdatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.caseUpdates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCaseUpdates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.caseUpdates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdates.$get>>>>
          >,
          ReturnType<typeof getCaseUpdatesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCaseUpdatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaseUpdatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.caseUpdates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCourtCoverageCourtIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.courtCoverage)[':courtId']['$get']>>,
) {
  return ['courtCoverage', '/courtCoverage/:courtId', toValue(args)] as const
}

export function getCourtCoverageCourtIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.courtCoverage)[':courtId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCourtCoverageCourtIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.courtCoverage[':courtId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCourtCoverageCourtId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.courtCoverage)[':courtId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.courtCoverage)[':courtId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.courtCoverage)[':courtId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCourtCoverageCourtIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.courtCoverage)[':courtId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCourtCoverageCourtIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCourtCoverageCourtIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.courtCoverage[':courtId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDailyUsageDateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dailyUsage)[':date']['$get']>>,
) {
  return ['dailyUsage', '/dailyUsage/:date', toValue(args)] as const
}

export function getDailyUsageDateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dailyUsage)[':date']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDailyUsageDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dailyUsage[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDailyUsageDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dailyUsage)[':date']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dailyUsage)[':date']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dailyUsage)[':date']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dailyUsage)[':date']['$get']>>>
            >
          >,
          ReturnType<typeof getDailyUsageDateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.dailyUsage)[':date']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDailyUsageDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDailyUsageDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dailyUsage[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.invalidateToken.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.invalidateToken.$put>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.judge)[':judgeId']['$get']>>,
) {
  return ['judge', '/judge/:judgeId', toValue(args)] as const
}

export function getJudgeJudgeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.judge)[':judgeId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJudgeJudgeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.judge[':judgeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJudgeJudgeId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.judge)[':judgeId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.judge)[':judgeId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.judge)[':judgeId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.judge)[':judgeId']['$get']>>>
            >
          >,
          ReturnType<typeof getJudgeJudgeIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.judge)[':judgeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJudgeJudgeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJudgeJudgeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.judge[':judgeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listAllTokenIds.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.listAllTokenIds.$put>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.areaOfLaw.$get>>,
) {
  return ['masterData', '/masterData/areaOfLaw', toValue(args)] as const
}

export function getMasterDataAreaOfLawQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.areaOfLaw.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataAreaOfLawQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.areaOfLaw.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataAreaOfLaw<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.areaOfLaw.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.areaOfLaw.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.areaOfLaw.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.areaOfLaw.$get>>>
            >
          >,
          ReturnType<typeof getMasterDataAreaOfLawQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.areaOfLaw.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataAreaOfLawQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataAreaOfLawQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.areaOfLaw.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataAreaOfLawAreaOfLawIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.areaOfLaw)[':areaOfLawId']['$get']>
  >,
) {
  return ['masterData', '/masterData/areaOfLaw/:areaOfLawId', toValue(args)] as const
}

export function getMasterDataAreaOfLawAreaOfLawIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.areaOfLaw)[':areaOfLawId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataAreaOfLawAreaOfLawIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.areaOfLaw[':areaOfLawId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.areaOfLaw)[':areaOfLawId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.masterData.areaOfLaw)[':areaOfLawId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMasterDataAreaOfLawAreaOfLawIdQueryKey>
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
          Awaited<ReturnType<(typeof client.masterData.areaOfLaw)[':areaOfLawId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataAreaOfLawAreaOfLawIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataAreaOfLawAreaOfLawIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.areaOfLaw[':areaOfLawId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataAttorneyRepresentationTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.masterData.attorneyRepresentationType.$get>
  >,
) {
  return ['masterData', '/masterData/attorneyRepresentationType', toValue(args)] as const
}

export function getMasterDataAttorneyRepresentationTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.masterData.attorneyRepresentationType.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataAttorneyRepresentationTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.attorneyRepresentationType.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.masterData.attorneyRepresentationType.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.attorneyRepresentationType.$get>>
              >
            >
          >,
          ReturnType<typeof getMasterDataAttorneyRepresentationTypeQueryKey>
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
          Awaited<ReturnType<typeof client.masterData.attorneyRepresentationType.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataAttorneyRepresentationTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataAttorneyRepresentationTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.attorneyRepresentationType.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.masterData.attorneyRepresentationType)[':attorneyRepresentationTypeId']['$get']
    >
  >,
) {
  return [
    'masterData',
    '/masterData/attorneyRepresentationType/:attorneyRepresentationTypeId',
    toValue(args),
  ] as const
}

export function getMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.masterData.attorneyRepresentationType)[':attorneyRepresentationTypeId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.attorneyRepresentationType[':attorneyRepresentationTypeId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.masterData.attorneyRepresentationType)[':attorneyRepresentationTypeId']['$get']
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
                    (typeof client.masterData.attorneyRepresentationType)[':attorneyRepresentationTypeId']['$get']
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
                    (typeof client.masterData.attorneyRepresentationType)[':attorneyRepresentationTypeId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdQueryKey
          >
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
              (typeof client.masterData.attorneyRepresentationType)[':attorneyRepresentationTypeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.attorneyRepresentationType[':attorneyRepresentationTypeId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataAttorneyTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.attorneyType.$get>>,
) {
  return ['masterData', '/masterData/attorneyType', toValue(args)] as const
}

export function getMasterDataAttorneyTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.attorneyType.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataAttorneyTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.attorneyType.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataAttorneyType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.attorneyType.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.attorneyType.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.attorneyType.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.attorneyType.$get>>>
            >
          >,
          ReturnType<typeof getMasterDataAttorneyTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.attorneyType.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataAttorneyTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataAttorneyTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.attorneyType.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataAttorneyTypeAttorneyTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.attorneyType)[':attorneyTypeId']['$get']>
  >,
) {
  return ['masterData', '/masterData/attorneyType/:attorneyTypeId', toValue(args)] as const
}

export function getMasterDataAttorneyTypeAttorneyTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.attorneyType)[':attorneyTypeId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataAttorneyTypeAttorneyTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.attorneyType[':attorneyTypeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.attorneyType)[':attorneyTypeId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.attorneyType)[':attorneyTypeId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMasterDataAttorneyTypeAttorneyTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.masterData.attorneyType)[':attorneyTypeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataAttorneyTypeAttorneyTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataAttorneyTypeAttorneyTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.attorneyType[':attorneyTypeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCaseClassQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.caseClass.$get>>,
) {
  return ['masterData', '/masterData/caseClass', toValue(args)] as const
}

export function getMasterDataCaseClassQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.caseClass.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCaseClassQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.caseClass.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataCaseClass<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseClass.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.caseClass.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseClass.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseClass.$get>>>
            >
          >,
          ReturnType<typeof getMasterDataCaseClassQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseClass.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseClassQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCaseClassQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.caseClass.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCaseClassCaseClassIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.caseClass)[':caseClassId']['$get']>
  >,
) {
  return ['masterData', '/masterData/caseClass/:caseClassId', toValue(args)] as const
}

export function getMasterDataCaseClassCaseClassIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.caseClass)[':caseClassId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCaseClassCaseClassIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.caseClass[':caseClassId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.caseClass)[':caseClassId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.masterData.caseClass)[':caseClassId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMasterDataCaseClassCaseClassIdQueryKey>
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
          Awaited<ReturnType<(typeof client.masterData.caseClass)[':caseClassId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseClassCaseClassIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCaseClassCaseClassIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.caseClass[':caseClassId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCaseRelationshipTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.caseRelationshipType.$get>>,
) {
  return ['masterData', '/masterData/caseRelationshipType', toValue(args)] as const
}

export function getMasterDataCaseRelationshipTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.caseRelationshipType.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCaseRelationshipTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.caseRelationshipType.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataCaseRelationshipType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseRelationshipType.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.caseRelationshipType.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.caseRelationshipType.$get>>
              >
            >
          >,
          ReturnType<typeof getMasterDataCaseRelationshipTypeQueryKey>
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
          Awaited<ReturnType<typeof client.masterData.caseRelationshipType.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseRelationshipTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCaseRelationshipTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.caseRelationshipType.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCaseRelationshipTypeCaseRelationshipTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.masterData.caseRelationshipType)[':caseRelationshipTypeId']['$get']
    >
  >,
) {
  return [
    'masterData',
    '/masterData/caseRelationshipType/:caseRelationshipTypeId',
    toValue(args),
  ] as const
}

export function getMasterDataCaseRelationshipTypeCaseRelationshipTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.masterData.caseRelationshipType)[':caseRelationshipTypeId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCaseRelationshipTypeCaseRelationshipTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.caseRelationshipType[':caseRelationshipTypeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.masterData.caseRelationshipType)[':caseRelationshipTypeId']['$get']
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
                    (typeof client.masterData.caseRelationshipType)[':caseRelationshipTypeId']['$get']
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
                    (typeof client.masterData.caseRelationshipType)[':caseRelationshipTypeId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMasterDataCaseRelationshipTypeCaseRelationshipTypeIdQueryKey>
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
              (typeof client.masterData.caseRelationshipType)[':caseRelationshipTypeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseRelationshipTypeCaseRelationshipTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMasterDataCaseRelationshipTypeCaseRelationshipTypeIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.caseRelationshipType[':caseRelationshipTypeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCaseStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.caseStatus.$get>>,
) {
  return ['masterData', '/masterData/caseStatus', toValue(args)] as const
}

export function getMasterDataCaseStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.caseStatus.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCaseStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.caseStatus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataCaseStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatus.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.caseStatus.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatus.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatus.$get>>>
            >
          >,
          ReturnType<typeof getMasterDataCaseStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatus.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCaseStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.caseStatus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCaseStatusCaseStatusIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.caseStatus)[':caseStatusId']['$get']>
  >,
) {
  return ['masterData', '/masterData/caseStatus/:caseStatusId', toValue(args)] as const
}

export function getMasterDataCaseStatusCaseStatusIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.caseStatus)[':caseStatusId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCaseStatusCaseStatusIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.caseStatus[':caseStatusId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.caseStatus)[':caseStatusId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.masterData.caseStatus)[':caseStatusId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMasterDataCaseStatusCaseStatusIdQueryKey>
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
          Awaited<ReturnType<(typeof client.masterData.caseStatus)[':caseStatusId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseStatusCaseStatusIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCaseStatusCaseStatusIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.caseStatus[':caseStatusId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCaseStatusGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.caseStatusGroup.$get>>,
) {
  return ['masterData', '/masterData/caseStatusGroup', toValue(args)] as const
}

export function getMasterDataCaseStatusGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.caseStatusGroup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCaseStatusGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.caseStatusGroup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataCaseStatusGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatusGroup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.caseStatusGroup.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.caseStatusGroup.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.caseStatusGroup.$get>>
              >
            >
          >,
          ReturnType<typeof getMasterDataCaseStatusGroupQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatusGroup.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseStatusGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCaseStatusGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.caseStatusGroup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCaseStatusGroupCaseStatusGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']>
  >,
) {
  return ['masterData', '/masterData/caseStatusGroup/:caseStatusGroupId', toValue(args)] as const
}

export function getMasterDataCaseStatusGroupCaseStatusGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCaseStatusGroupCaseStatusGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.caseStatusGroup[':caseStatusGroupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']>
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
                    (typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']
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
                    (typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMasterDataCaseStatusGroupCaseStatusGroupIdQueryKey>
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
            ReturnType<(typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseStatusGroupCaseStatusGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCaseStatusGroupCaseStatusGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.caseStatusGroup[':caseStatusGroupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCaseTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.caseType.$get>>,
) {
  return ['masterData', '/masterData/caseType', toValue(args)] as const
}

export function getMasterDataCaseTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.caseType.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCaseTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.caseType.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataCaseType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseType.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.caseType.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseType.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseType.$get>>>
            >
          >,
          ReturnType<typeof getMasterDataCaseTypeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseType.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCaseTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.caseType.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCaseTypeCaseTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.caseType)[':caseTypeId']['$get']>
  >,
) {
  return ['masterData', '/masterData/caseType/:caseTypeId', toValue(args)] as const
}

export function getMasterDataCaseTypeCaseTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.caseType)[':caseTypeId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCaseTypeCaseTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.caseType[':caseTypeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.caseType)[':caseTypeId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.masterData.caseType)[':caseTypeId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMasterDataCaseTypeCaseTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.masterData.caseType)[':caseTypeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseTypeCaseTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCaseTypeCaseTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.caseType[':caseTypeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCaseTypeGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.caseTypeGroup.$get>>,
) {
  return ['masterData', '/masterData/caseTypeGroup', toValue(args)] as const
}

export function getMasterDataCaseTypeGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.caseTypeGroup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCaseTypeGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.caseTypeGroup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataCaseTypeGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseTypeGroup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.caseTypeGroup.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseTypeGroup.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseTypeGroup.$get>>>
            >
          >,
          ReturnType<typeof getMasterDataCaseTypeGroupQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseTypeGroup.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseTypeGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCaseTypeGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.caseTypeGroup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCaseTypeGroupCaseTypeGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.caseTypeGroup)[':caseTypeGroupId']['$get']>
  >,
) {
  return ['masterData', '/masterData/caseTypeGroup/:caseTypeGroupId', toValue(args)] as const
}

export function getMasterDataCaseTypeGroupCaseTypeGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.caseTypeGroup)[':caseTypeGroupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCaseTypeGroupCaseTypeGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.caseTypeGroup[':caseTypeGroupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.caseTypeGroup)[':caseTypeGroupId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.caseTypeGroup)[':caseTypeGroupId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMasterDataCaseTypeGroupCaseTypeGroupIdQueryKey>
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
          Awaited<ReturnType<(typeof client.masterData.caseTypeGroup)[':caseTypeGroupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCaseTypeGroupCaseTypeGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCaseTypeGroupCaseTypeGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.caseTypeGroup[':caseTypeGroupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCauseOfActionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.causeOfAction.$get>>,
) {
  return ['masterData', '/masterData/causeOfAction', toValue(args)] as const
}

export function getMasterDataCauseOfActionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.causeOfAction.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCauseOfActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.causeOfAction.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataCauseOfAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfAction.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.causeOfAction.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfAction.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfAction.$get>>>
            >
          >,
          ReturnType<typeof getMasterDataCauseOfActionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfAction.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCauseOfActionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCauseOfActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.causeOfAction.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCauseOfActionCauseOfActionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.causeOfAction)[':causeOfActionId']['$get']>
  >,
) {
  return ['masterData', '/masterData/causeOfAction/:causeOfActionId', toValue(args)] as const
}

export function getMasterDataCauseOfActionCauseOfActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.causeOfAction)[':causeOfActionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCauseOfActionCauseOfActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.causeOfAction[':causeOfActionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.causeOfAction)[':causeOfActionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.causeOfAction)[':causeOfActionId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMasterDataCauseOfActionCauseOfActionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.masterData.causeOfAction)[':causeOfActionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCauseOfActionCauseOfActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCauseOfActionCauseOfActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.causeOfAction[':causeOfActionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCauseOfActionAdditionalDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.masterData.causeOfActionAdditionalData.$get>
  >,
) {
  return ['masterData', '/masterData/causeOfActionAdditionalData', toValue(args)] as const
}

export function getMasterDataCauseOfActionAdditionalDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.masterData.causeOfActionAdditionalData.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCauseOfActionAdditionalDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.causeOfActionAdditionalData.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.masterData.causeOfActionAdditionalData.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.causeOfActionAdditionalData.$get>>
              >
            >
          >,
          ReturnType<typeof getMasterDataCauseOfActionAdditionalDataQueryKey>
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
          Awaited<ReturnType<typeof client.masterData.causeOfActionAdditionalData.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCauseOfActionAdditionalDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCauseOfActionAdditionalDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.causeOfActionAdditionalData.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.masterData.causeOfActionAdditionalData)[':causeOfActionAdditionalDataId']['$get']
    >
  >,
) {
  return [
    'masterData',
    '/masterData/causeOfActionAdditionalData/:causeOfActionAdditionalDataId',
    toValue(args),
  ] as const
}

export function getMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.masterData.causeOfActionAdditionalData)[':causeOfActionAdditionalDataId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.causeOfActionAdditionalData[':causeOfActionAdditionalDataId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.masterData.causeOfActionAdditionalData)[':causeOfActionAdditionalDataId']['$get']
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
                    (typeof client.masterData.causeOfActionAdditionalData)[':causeOfActionAdditionalDataId']['$get']
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
                    (typeof client.masterData.causeOfActionAdditionalData)[':causeOfActionAdditionalDataId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdQueryKey
          >
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
              (typeof client.masterData.causeOfActionAdditionalData)[':causeOfActionAdditionalDataId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.causeOfActionAdditionalData[':causeOfActionAdditionalDataId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCauseOfActionGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.causeOfActionGroup.$get>>,
) {
  return ['masterData', '/masterData/causeOfActionGroup', toValue(args)] as const
}

export function getMasterDataCauseOfActionGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.causeOfActionGroup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCauseOfActionGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.causeOfActionGroup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataCauseOfActionGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfActionGroup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.causeOfActionGroup.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.causeOfActionGroup.$get>>
              >
            >
          >,
          ReturnType<typeof getMasterDataCauseOfActionGroupQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfActionGroup.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCauseOfActionGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCauseOfActionGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.causeOfActionGroup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCauseOfActionGroupCauseOfActionGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.causeOfActionGroup)[':causeOfActionGroupId']['$get']>
  >,
) {
  return [
    'masterData',
    '/masterData/causeOfActionGroup/:causeOfActionGroupId',
    toValue(args),
  ] as const
}

export function getMasterDataCauseOfActionGroupCauseOfActionGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.causeOfActionGroup)[':causeOfActionGroupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCauseOfActionGroupCauseOfActionGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.causeOfActionGroup[':causeOfActionGroupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.causeOfActionGroup)[':causeOfActionGroupId']['$get']>
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
                    (typeof client.masterData.causeOfActionGroup)[':causeOfActionGroupId']['$get']
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
                    (typeof client.masterData.causeOfActionGroup)[':causeOfActionGroupId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMasterDataCauseOfActionGroupCauseOfActionGroupIdQueryKey>
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
              (typeof client.masterData.causeOfActionGroup)[':causeOfActionGroupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCauseOfActionGroupCauseOfActionGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCauseOfActionGroupCauseOfActionGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.causeOfActionGroup[':causeOfActionGroupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataChargeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.charge.$get>>,
) {
  return ['masterData', '/masterData/charge', toValue(args)] as const
}

export function getMasterDataChargeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.charge.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataChargeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.charge.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataCharge<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.charge.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.charge.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.charge.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.charge.$get>>>
            >
          >,
          ReturnType<typeof getMasterDataChargeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.charge.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataChargeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataChargeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.charge.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataChargeChargeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.masterData.charge)[':chargeId']['$get']>>,
) {
  return ['masterData', '/masterData/charge/:chargeId', toValue(args)] as const
}

export function getMasterDataChargeChargeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.masterData.charge)[':chargeId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataChargeChargeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.charge[':chargeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.masterData.charge)[':chargeId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.masterData.charge)[':chargeId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMasterDataChargeChargeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.masterData.charge)[':chargeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataChargeChargeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataChargeChargeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.charge[':chargeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataChargeAdditionalDataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.chargeAdditionalData.$get>>,
) {
  return ['masterData', '/masterData/chargeAdditionalData', toValue(args)] as const
}

export function getMasterDataChargeAdditionalDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.chargeAdditionalData.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataChargeAdditionalDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.chargeAdditionalData.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataChargeAdditionalData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeAdditionalData.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.chargeAdditionalData.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.chargeAdditionalData.$get>>
              >
            >
          >,
          ReturnType<typeof getMasterDataChargeAdditionalDataQueryKey>
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
          Awaited<ReturnType<typeof client.masterData.chargeAdditionalData.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataChargeAdditionalDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataChargeAdditionalDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.chargeAdditionalData.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataChargeAdditionalDataChargeAdditionalDataIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.masterData.chargeAdditionalData)[':chargeAdditionalDataId']['$get']
    >
  >,
) {
  return [
    'masterData',
    '/masterData/chargeAdditionalData/:chargeAdditionalDataId',
    toValue(args),
  ] as const
}

export function getMasterDataChargeAdditionalDataChargeAdditionalDataIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.masterData.chargeAdditionalData)[':chargeAdditionalDataId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataChargeAdditionalDataChargeAdditionalDataIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.chargeAdditionalData[':chargeAdditionalDataId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.masterData.chargeAdditionalData)[':chargeAdditionalDataId']['$get']
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
                    (typeof client.masterData.chargeAdditionalData)[':chargeAdditionalDataId']['$get']
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
                    (typeof client.masterData.chargeAdditionalData)[':chargeAdditionalDataId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMasterDataChargeAdditionalDataChargeAdditionalDataIdQueryKey>
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
              (typeof client.masterData.chargeAdditionalData)[':chargeAdditionalDataId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataChargeAdditionalDataChargeAdditionalDataIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMasterDataChargeAdditionalDataChargeAdditionalDataIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.chargeAdditionalData[':chargeAdditionalDataId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataChargeDegreeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.chargeDegree.$get>>,
) {
  return ['masterData', '/masterData/chargeDegree', toValue(args)] as const
}

export function getMasterDataChargeDegreeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.chargeDegree.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataChargeDegreeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.chargeDegree.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataChargeDegree<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeDegree.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.chargeDegree.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeDegree.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeDegree.$get>>>
            >
          >,
          ReturnType<typeof getMasterDataChargeDegreeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeDegree.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataChargeDegreeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataChargeDegreeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.chargeDegree.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataChargeDegreeChargeDegreeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.chargeDegree)[':chargeDegreeId']['$get']>
  >,
) {
  return ['masterData', '/masterData/chargeDegree/:chargeDegreeId', toValue(args)] as const
}

export function getMasterDataChargeDegreeChargeDegreeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.chargeDegree)[':chargeDegreeId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataChargeDegreeChargeDegreeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.chargeDegree[':chargeDegreeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.chargeDegree)[':chargeDegreeId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.chargeDegree)[':chargeDegreeId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMasterDataChargeDegreeChargeDegreeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.masterData.chargeDegree)[':chargeDegreeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataChargeDegreeChargeDegreeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataChargeDegreeChargeDegreeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.chargeDegree[':chargeDegreeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataChargeGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.chargeGroup.$get>>,
) {
  return ['masterData', '/masterData/chargeGroup', toValue(args)] as const
}

export function getMasterDataChargeGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.chargeGroup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataChargeGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.chargeGroup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataChargeGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeGroup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.chargeGroup.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeGroup.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeGroup.$get>>>
            >
          >,
          ReturnType<typeof getMasterDataChargeGroupQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeGroup.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataChargeGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataChargeGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.chargeGroup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataChargeGroupChargeGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.chargeGroup)[':chargeGroupId']['$get']>
  >,
) {
  return ['masterData', '/masterData/chargeGroup/:chargeGroupId', toValue(args)] as const
}

export function getMasterDataChargeGroupChargeGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.chargeGroup)[':chargeGroupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataChargeGroupChargeGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.chargeGroup[':chargeGroupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.chargeGroup)[':chargeGroupId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.chargeGroup)[':chargeGroupId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMasterDataChargeGroupChargeGroupIdQueryKey>
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
          Awaited<ReturnType<(typeof client.masterData.chargeGroup)[':chargeGroupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataChargeGroupChargeGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataChargeGroupChargeGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.chargeGroup[':chargeGroupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataChargeSeverityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.chargeSeverity.$get>>,
) {
  return ['masterData', '/masterData/chargeSeverity', toValue(args)] as const
}

export function getMasterDataChargeSeverityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.chargeSeverity.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataChargeSeverityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.chargeSeverity.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataChargeSeverity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeSeverity.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.chargeSeverity.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.chargeSeverity.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.chargeSeverity.$get>>
              >
            >
          >,
          ReturnType<typeof getMasterDataChargeSeverityQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeSeverity.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataChargeSeverityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataChargeSeverityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.chargeSeverity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataChargeSeverityChargeSeverityIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.chargeSeverity)[':chargeSeverityId']['$get']>
  >,
) {
  return ['masterData', '/masterData/chargeSeverity/:chargeSeverityId', toValue(args)] as const
}

export function getMasterDataChargeSeverityChargeSeverityIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.chargeSeverity)[':chargeSeverityId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataChargeSeverityChargeSeverityIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.chargeSeverity[':chargeSeverityId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.chargeSeverity)[':chargeSeverityId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.chargeSeverity)[':chargeSeverityId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMasterDataChargeSeverityChargeSeverityIdQueryKey>
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
            ReturnType<(typeof client.masterData.chargeSeverity)[':chargeSeverityId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataChargeSeverityChargeSeverityIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataChargeSeverityChargeSeverityIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.chargeSeverity[':chargeSeverityId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCourtQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.court.$get>>,
) {
  return ['masterData', '/masterData/court', toValue(args)] as const
}

export function getMasterDataCourtQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.court.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCourtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.court.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataCourt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.court.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.court.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.court.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.court.$get>>>
            >
          >,
          ReturnType<typeof getMasterDataCourtQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.court.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCourtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.court.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCourtCourtIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.masterData.court)[':courtId']['$get']>>,
) {
  return ['masterData', '/masterData/court/:courtId', toValue(args)] as const
}

export function getMasterDataCourtCourtIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.masterData.court)[':courtId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCourtCourtIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.court[':courtId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.masterData.court)[':courtId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.masterData.court)[':courtId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMasterDataCourtCourtIdQueryKey>
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
          Awaited<ReturnType<(typeof client.masterData.court)[':courtId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtCourtIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCourtCourtIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.court[':courtId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCourtCourtIdAppealCourtsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.court)[':courtId']['appealCourts']['$get']>
  >,
) {
  return ['masterData', '/masterData/court/:courtId/appealCourts', toValue(args)] as const
}

export function getMasterDataCourtCourtIdAppealCourtsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.court)[':courtId']['appealCourts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCourtCourtIdAppealCourtsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.court[':courtId'].appealCourts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.court)[':courtId']['appealCourts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.court)[':courtId']['appealCourts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMasterDataCourtCourtIdAppealCourtsQueryKey>
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
          Awaited<ReturnType<(typeof client.masterData.court)[':courtId']['appealCourts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtCourtIdAppealCourtsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCourtCourtIdAppealCourtsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.court[':courtId'].appealCourts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCourtCourtIdCourtLocationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.court)[':courtId']['courtLocations']['$get']>
  >,
) {
  return ['masterData', '/masterData/court/:courtId/courtLocations', toValue(args)] as const
}

export function getMasterDataCourtCourtIdCourtLocationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.court)[':courtId']['courtLocations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCourtCourtIdCourtLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.court[':courtId'].courtLocations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.court)[':courtId']['courtLocations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.court)[':courtId']['courtLocations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMasterDataCourtCourtIdCourtLocationsQueryKey>
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
            ReturnType<(typeof client.masterData.court)[':courtId']['courtLocations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtCourtIdCourtLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCourtCourtIdCourtLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.court[':courtId'].courtLocations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCourtCourtIdJurisdictionGeoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']>
  >,
) {
  return ['masterData', '/masterData/court/:courtId/jurisdictionGeo', toValue(args)] as const
}

export function getMasterDataCourtCourtIdJurisdictionGeoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCourtCourtIdJurisdictionGeoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.court[':courtId'].jurisdictionGeo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']>
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
                    (typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']
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
                    (typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMasterDataCourtCourtIdJurisdictionGeoQueryKey>
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
            ReturnType<(typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtCourtIdJurisdictionGeoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCourtCourtIdJurisdictionGeoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.court[':courtId'].jurisdictionGeo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCourtLocationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.courtLocation.$get>>,
) {
  return ['masterData', '/masterData/courtLocation', toValue(args)] as const
}

export function getMasterDataCourtLocationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.courtLocation.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCourtLocationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.courtLocation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataCourtLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtLocation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.courtLocation.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtLocation.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtLocation.$get>>>
            >
          >,
          ReturnType<typeof getMasterDataCourtLocationQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtLocation.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtLocationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCourtLocationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.courtLocation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCourtLocationCourtLocationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.courtLocation)[':courtLocationId']['$get']>
  >,
) {
  return ['masterData', '/masterData/courtLocation/:courtLocationId', toValue(args)] as const
}

export function getMasterDataCourtLocationCourtLocationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.courtLocation)[':courtLocationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCourtLocationCourtLocationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.courtLocation[':courtLocationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.courtLocation)[':courtLocationId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.courtLocation)[':courtLocationId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMasterDataCourtLocationCourtLocationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.masterData.courtLocation)[':courtLocationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtLocationCourtLocationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCourtLocationCourtLocationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.courtLocation[':courtLocationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCourtLocationCourtLocationIdCourtsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.courtLocation)[':courtLocationId']['courts']['$get']>
  >,
) {
  return ['masterData', '/masterData/courtLocation/:courtLocationId/courts', toValue(args)] as const
}

export function getMasterDataCourtLocationCourtLocationIdCourtsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.courtLocation)[':courtLocationId']['courts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCourtLocationCourtLocationIdCourtsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.courtLocation[':courtLocationId'].courts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.courtLocation)[':courtLocationId']['courts']['$get']>
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
                    (typeof client.masterData.courtLocation)[':courtLocationId']['courts']['$get']
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
                    (typeof client.masterData.courtLocation)[':courtLocationId']['courts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMasterDataCourtLocationCourtLocationIdCourtsQueryKey>
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
              (typeof client.masterData.courtLocation)[':courtLocationId']['courts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtLocationCourtLocationIdCourtsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCourtLocationCourtLocationIdCourtsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.courtLocation[':courtLocationId'].courts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCourtServiceStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.courtServiceStatus.$get>>,
) {
  return ['masterData', '/masterData/courtServiceStatus', toValue(args)] as const
}

export function getMasterDataCourtServiceStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.courtServiceStatus.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCourtServiceStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.courtServiceStatus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataCourtServiceStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtServiceStatus.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.courtServiceStatus.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.courtServiceStatus.$get>>
              >
            >
          >,
          ReturnType<typeof getMasterDataCourtServiceStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtServiceStatus.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtServiceStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCourtServiceStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.courtServiceStatus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCourtServiceStatusCourtServiceStatusIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.courtServiceStatus)[':courtServiceStatusId']['$get']>
  >,
) {
  return [
    'masterData',
    '/masterData/courtServiceStatus/:courtServiceStatusId',
    toValue(args),
  ] as const
}

export function getMasterDataCourtServiceStatusCourtServiceStatusIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.courtServiceStatus)[':courtServiceStatusId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCourtServiceStatusCourtServiceStatusIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.courtServiceStatus[':courtServiceStatusId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.courtServiceStatus)[':courtServiceStatusId']['$get']>
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
                    (typeof client.masterData.courtServiceStatus)[':courtServiceStatusId']['$get']
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
                    (typeof client.masterData.courtServiceStatus)[':courtServiceStatusId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMasterDataCourtServiceStatusCourtServiceStatusIdQueryKey>
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
              (typeof client.masterData.courtServiceStatus)[':courtServiceStatusId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtServiceStatusCourtServiceStatusIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCourtServiceStatusCourtServiceStatusIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.courtServiceStatus[':courtServiceStatusId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCourtSystemQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.courtSystem.$get>>,
) {
  return ['masterData', '/masterData/courtSystem', toValue(args)] as const
}

export function getMasterDataCourtSystemQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.courtSystem.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCourtSystemQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.courtSystem.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataCourtSystem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtSystem.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.courtSystem.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtSystem.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtSystem.$get>>>
            >
          >,
          ReturnType<typeof getMasterDataCourtSystemQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtSystem.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtSystemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCourtSystemQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.courtSystem.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCourtSystemCourtSystemIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.courtSystem)[':courtSystemId']['$get']>
  >,
) {
  return ['masterData', '/masterData/courtSystem/:courtSystemId', toValue(args)] as const
}

export function getMasterDataCourtSystemCourtSystemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.courtSystem)[':courtSystemId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCourtSystemCourtSystemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.courtSystem[':courtSystemId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.courtSystem)[':courtSystemId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.courtSystem)[':courtSystemId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMasterDataCourtSystemCourtSystemIdQueryKey>
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
          Awaited<ReturnType<(typeof client.masterData.courtSystem)[':courtSystemId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtSystemCourtSystemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCourtSystemCourtSystemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.courtSystem[':courtSystemId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCourtTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.courtType.$get>>,
) {
  return ['masterData', '/masterData/courtType', toValue(args)] as const
}

export function getMasterDataCourtTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.courtType.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCourtTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.courtType.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataCourtType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtType.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.courtType.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtType.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtType.$get>>>
            >
          >,
          ReturnType<typeof getMasterDataCourtTypeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtType.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCourtTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.courtType.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataCourtTypeCourtTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.courtType)[':courtTypeId']['$get']>
  >,
) {
  return ['masterData', '/masterData/courtType/:courtTypeId', toValue(args)] as const
}

export function getMasterDataCourtTypeCourtTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.courtType)[':courtTypeId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataCourtTypeCourtTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.courtType[':courtTypeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.courtType)[':courtTypeId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.masterData.courtType)[':courtTypeId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMasterDataCourtTypeCourtTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.masterData.courtType)[':courtTypeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataCourtTypeCourtTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataCourtTypeCourtTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.courtType[':courtTypeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataJudgeTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.judgeType.$get>>,
) {
  return ['masterData', '/masterData/judgeType', toValue(args)] as const
}

export function getMasterDataJudgeTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.judgeType.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataJudgeTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.judgeType.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataJudgeType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.judgeType.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.judgeType.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.judgeType.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.judgeType.$get>>>
            >
          >,
          ReturnType<typeof getMasterDataJudgeTypeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.judgeType.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataJudgeTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataJudgeTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.judgeType.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataJudgeTypeJudgeTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.judgeType)[':judgeTypeId']['$get']>
  >,
) {
  return ['masterData', '/masterData/judgeType/:judgeTypeId', toValue(args)] as const
}

export function getMasterDataJudgeTypeJudgeTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.judgeType)[':judgeTypeId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataJudgeTypeJudgeTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.judgeType[':judgeTypeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.judgeType)[':judgeTypeId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.masterData.judgeType)[':judgeTypeId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMasterDataJudgeTypeJudgeTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.masterData.judgeType)[':judgeTypeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataJudgeTypeJudgeTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataJudgeTypeJudgeTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.judgeType[':judgeTypeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataJurisdictionGeoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.jurisdictionGeo.$get>>,
) {
  return ['masterData', '/masterData/jurisdictionGeo', toValue(args)] as const
}

export function getMasterDataJurisdictionGeoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.jurisdictionGeo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataJurisdictionGeoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.jurisdictionGeo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataJurisdictionGeo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.jurisdictionGeo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.jurisdictionGeo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.jurisdictionGeo.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.jurisdictionGeo.$get>>
              >
            >
          >,
          ReturnType<typeof getMasterDataJurisdictionGeoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.jurisdictionGeo.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataJurisdictionGeoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataJurisdictionGeoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.jurisdictionGeo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataJurisdictionGeoJurisdictionGeoIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']>
  >,
) {
  return ['masterData', '/masterData/jurisdictionGeo/:jurisdictionGeoId', toValue(args)] as const
}

export function getMasterDataJurisdictionGeoJurisdictionGeoIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataJurisdictionGeoJurisdictionGeoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.jurisdictionGeo[':jurisdictionGeoId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']>
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
                    (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']
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
                    (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMasterDataJurisdictionGeoJurisdictionGeoIdQueryKey>
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
            ReturnType<(typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataJurisdictionGeoJurisdictionGeoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataJurisdictionGeoJurisdictionGeoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.jurisdictionGeo[':jurisdictionGeoId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataJurisdictionGeoJurisdictionGeoIdCourtsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['courts']['$get']
    >
  >,
) {
  return [
    'masterData',
    '/masterData/jurisdictionGeo/:jurisdictionGeoId/courts',
    toValue(args),
  ] as const
}

export function getMasterDataJurisdictionGeoJurisdictionGeoIdCourtsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['courts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataJurisdictionGeoJurisdictionGeoIdCourtsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.jurisdictionGeo[':jurisdictionGeoId'].courts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['courts']['$get']
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
                    (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['courts']['$get']
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
                    (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['courts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMasterDataJurisdictionGeoJurisdictionGeoIdCourtsQueryKey>
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
              (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['courts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataJurisdictionGeoJurisdictionGeoIdCourtsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataJurisdictionGeoJurisdictionGeoIdCourtsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.jurisdictionGeo[':jurisdictionGeoId'].courts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataPartyRoleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.partyRole.$get>>,
) {
  return ['masterData', '/masterData/partyRole', toValue(args)] as const
}

export function getMasterDataPartyRoleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.partyRole.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataPartyRoleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.partyRole.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataPartyRole<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRole.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.partyRole.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRole.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRole.$get>>>
            >
          >,
          ReturnType<typeof getMasterDataPartyRoleQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRole.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataPartyRoleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataPartyRoleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.partyRole.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataPartyRolePartyRoleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.partyRole)[':partyRoleId']['$get']>
  >,
) {
  return ['masterData', '/masterData/partyRole/:partyRoleId', toValue(args)] as const
}

export function getMasterDataPartyRolePartyRoleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.partyRole)[':partyRoleId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataPartyRolePartyRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.partyRole[':partyRoleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.partyRole)[':partyRoleId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.masterData.partyRole)[':partyRoleId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMasterDataPartyRolePartyRoleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.masterData.partyRole)[':partyRoleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataPartyRolePartyRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataPartyRolePartyRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.partyRole[':partyRoleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataPartyRoleGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.partyRoleGroup.$get>>,
) {
  return ['masterData', '/masterData/partyRoleGroup', toValue(args)] as const
}

export function getMasterDataPartyRoleGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.partyRoleGroup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataPartyRoleGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.partyRoleGroup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterDataPartyRoleGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRoleGroup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.masterData.partyRoleGroup.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.partyRoleGroup.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.masterData.partyRoleGroup.$get>>
              >
            >
          >,
          ReturnType<typeof getMasterDataPartyRoleGroupQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRoleGroup.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataPartyRoleGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataPartyRoleGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.partyRoleGroup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterDataPartyRoleGroupPartyRoleGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.partyRoleGroup)[':partyRoleGroupId']['$get']>
  >,
) {
  return ['masterData', '/masterData/partyRoleGroup/:partyRoleGroupId', toValue(args)] as const
}

export function getMasterDataPartyRoleGroupPartyRoleGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.partyRoleGroup)[':partyRoleGroupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterDataPartyRoleGroupPartyRoleGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.masterData.partyRoleGroup[':partyRoleGroupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.masterData.partyRoleGroup)[':partyRoleGroupId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.masterData.partyRoleGroup)[':partyRoleGroupId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMasterDataPartyRoleGroupPartyRoleGroupIdQueryKey>
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
            ReturnType<(typeof client.masterData.partyRoleGroup)[':partyRoleGroupId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMasterDataPartyRoleGroupPartyRoleGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterDataPartyRoleGroupPartyRoleGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.masterData.partyRoleGroup[':partyRoleGroupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormAttorneyNormAttorneyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.normAttorney)[':normAttorneyId']['$get']>>,
) {
  return ['normAttorney', '/normAttorney/:normAttorneyId', toValue(args)] as const
}

export function getNormAttorneyNormAttorneyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.normAttorney)[':normAttorneyId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormAttorneyNormAttorneyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normAttorney[':normAttorneyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.normAttorney)[':normAttorneyId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.normAttorney)[':normAttorneyId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNormAttorneyNormAttorneyIdQueryKey>
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
          Awaited<ReturnType<(typeof client.normAttorney)[':normAttorneyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormAttorneyNormAttorneyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormAttorneyNormAttorneyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normAttorney[':normAttorneyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormAttorneyNormAttorneyIdAssociatedNormJudgesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normAttorney)[':normAttorneyId']['associatedNormJudges']['$get']
    >
  >,
) {
  return [
    'normAttorney',
    '/normAttorney/:normAttorneyId/associatedNormJudges',
    toValue(args),
  ] as const
}

export function getNormAttorneyNormAttorneyIdAssociatedNormJudgesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normAttorney)[':normAttorneyId']['associatedNormJudges']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormAttorneyNormAttorneyIdAssociatedNormJudgesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normAttorney[':normAttorneyId'].associatedNormJudges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normAttorney)[':normAttorneyId']['associatedNormJudges']['$get']
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
                    (typeof client.normAttorney)[':normAttorneyId']['associatedNormJudges']['$get']
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
                    (typeof client.normAttorney)[':normAttorneyId']['associatedNormJudges']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNormAttorneyNormAttorneyIdAssociatedNormJudgesQueryKey>
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
              (typeof client.normAttorney)[':normAttorneyId']['associatedNormJudges']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormAttorneyNormAttorneyIdAssociatedNormJudgesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormAttorneyNormAttorneyIdAssociatedNormJudgesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normAttorney[':normAttorneyId'].associatedNormJudges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normAttorney)[':normAttorneyId']['associatedNormLawFirms']['$get']
    >
  >,
) {
  return [
    'normAttorney',
    '/normAttorney/:normAttorneyId/associatedNormLawFirms',
    toValue(args),
  ] as const
}

export function getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normAttorney)[':normAttorneyId']['associatedNormLawFirms']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normAttorney[':normAttorneyId'].associatedNormLawFirms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normAttorney)[':normAttorneyId']['associatedNormLawFirms']['$get']
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
                    (typeof client.normAttorney)[':normAttorneyId']['associatedNormLawFirms']['$get']
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
                    (typeof client.normAttorney)[':normAttorneyId']['associatedNormLawFirms']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsQueryKey>
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
              (typeof client.normAttorney)[':normAttorneyId']['associatedNormLawFirms']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normAttorney[':normAttorneyId'].associatedNormLawFirms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormAttorneyNormAttorneyIdAssociatedNormPartiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normAttorney)[':normAttorneyId']['associatedNormParties']['$get']
    >
  >,
) {
  return [
    'normAttorney',
    '/normAttorney/:normAttorneyId/associatedNormParties',
    toValue(args),
  ] as const
}

export function getNormAttorneyNormAttorneyIdAssociatedNormPartiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normAttorney)[':normAttorneyId']['associatedNormParties']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormAttorneyNormAttorneyIdAssociatedNormPartiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normAttorney[':normAttorneyId'].associatedNormParties.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normAttorney)[':normAttorneyId']['associatedNormParties']['$get']
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
                    (typeof client.normAttorney)[':normAttorneyId']['associatedNormParties']['$get']
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
                    (typeof client.normAttorney)[':normAttorneyId']['associatedNormParties']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNormAttorneyNormAttorneyIdAssociatedNormPartiesQueryKey>
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
              (typeof client.normAttorney)[':normAttorneyId']['associatedNormParties']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormAttorneyNormAttorneyIdAssociatedNormPartiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormAttorneyNormAttorneyIdAssociatedNormPartiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normAttorney[':normAttorneyId'].associatedNormParties.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normAttorney)[':normAttorneyId']['caseCountAnalyticsByOpposingNormAttorney']['$get']
    >
  >,
) {
  return [
    'normAttorney',
    '/normAttorney/:normAttorneyId/caseCountAnalyticsByOpposingNormAttorney',
    toValue(args),
  ] as const
}

export function getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normAttorney)[':normAttorneyId']['caseCountAnalyticsByOpposingNormAttorney']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normAttorney[':normAttorneyId'].caseCountAnalyticsByOpposingNormAttorney.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normAttorney)[':normAttorneyId']['caseCountAnalyticsByOpposingNormAttorney']['$get']
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
                    (typeof client.normAttorney)[':normAttorneyId']['caseCountAnalyticsByOpposingNormAttorney']['$get']
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
                    (typeof client.normAttorney)[':normAttorneyId']['caseCountAnalyticsByOpposingNormAttorney']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyQueryKey
          >
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
              (typeof client.normAttorney)[':normAttorneyId']['caseCountAnalyticsByOpposingNormAttorney']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.normAttorney[':normAttorneyId'].caseCountAnalyticsByOpposingNormAttorney.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getNormAttorneySearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.normAttorneySearch.$get>>,
) {
  return ['normAttorneySearch', '/normAttorneySearch', toValue(args)] as const
}

export function getNormAttorneySearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.normAttorneySearch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormAttorneySearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normAttorneySearch.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNormAttorneySearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normAttorneySearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.normAttorneySearch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.normAttorneySearch.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.normAttorneySearch.$get>>>
            >
          >,
          ReturnType<typeof getNormAttorneySearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normAttorneySearch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNormAttorneySearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormAttorneySearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normAttorneySearch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormAttorneySearchNormAttorneySearchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normAttorneySearch)[':normAttorneySearchId']['$get']>
  >,
) {
  return ['normAttorneySearch', '/normAttorneySearch/:normAttorneySearchId', toValue(args)] as const
}

export function getNormAttorneySearchNormAttorneySearchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normAttorneySearch)[':normAttorneySearchId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormAttorneySearchNormAttorneySearchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normAttorneySearch[':normAttorneySearchId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normAttorneySearch)[':normAttorneySearchId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.normAttorneySearch)[':normAttorneySearchId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNormAttorneySearchNormAttorneySearchIdQueryKey>
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
          Awaited<ReturnType<(typeof client.normAttorneySearch)[':normAttorneySearchId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormAttorneySearchNormAttorneySearchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormAttorneySearchNormAttorneySearchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normAttorneySearch[':normAttorneySearchId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormJudgeNormJudgeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.normJudge)[':normJudgeId']['$get']>>,
) {
  return ['normJudge', '/normJudge/:normJudgeId', toValue(args)] as const
}

export function getNormJudgeNormJudgeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.normJudge)[':normJudgeId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormJudgeNormJudgeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normJudge[':normJudgeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNormJudgeNormJudgeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.normJudge)[':normJudgeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.normJudge)[':normJudgeId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.normJudge)[':normJudgeId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNormJudgeNormJudgeIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.normJudge)[':normJudgeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormJudgeNormJudgeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormJudgeNormJudgeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normJudge[':normJudgeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormJudgeNormJudgeIdAssociatedNormAttorneysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normJudge)[':normJudgeId']['associatedNormAttorneys']['$get']>
  >,
) {
  return ['normJudge', '/normJudge/:normJudgeId/associatedNormAttorneys', toValue(args)] as const
}

export function getNormJudgeNormJudgeIdAssociatedNormAttorneysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normJudge)[':normJudgeId']['associatedNormAttorneys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormJudgeNormJudgeIdAssociatedNormAttorneysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normJudge[':normJudgeId'].associatedNormAttorneys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normJudge)[':normJudgeId']['associatedNormAttorneys']['$get']>
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
                    (typeof client.normJudge)[':normJudgeId']['associatedNormAttorneys']['$get']
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
                    (typeof client.normJudge)[':normJudgeId']['associatedNormAttorneys']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNormJudgeNormJudgeIdAssociatedNormAttorneysQueryKey>
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
            ReturnType<(typeof client.normJudge)[':normJudgeId']['associatedNormAttorneys']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormJudgeNormJudgeIdAssociatedNormAttorneysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormJudgeNormJudgeIdAssociatedNormAttorneysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normJudge[':normJudgeId'].associatedNormAttorneys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormJudgeNormJudgeIdAssociatedNormLawFirmsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normJudge)[':normJudgeId']['associatedNormLawFirms']['$get']>
  >,
) {
  return ['normJudge', '/normJudge/:normJudgeId/associatedNormLawFirms', toValue(args)] as const
}

export function getNormJudgeNormJudgeIdAssociatedNormLawFirmsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normJudge)[':normJudgeId']['associatedNormLawFirms']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormJudgeNormJudgeIdAssociatedNormLawFirmsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normJudge[':normJudgeId'].associatedNormLawFirms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normJudge)[':normJudgeId']['associatedNormLawFirms']['$get']>
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
                    (typeof client.normJudge)[':normJudgeId']['associatedNormLawFirms']['$get']
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
                    (typeof client.normJudge)[':normJudgeId']['associatedNormLawFirms']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNormJudgeNormJudgeIdAssociatedNormLawFirmsQueryKey>
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
            ReturnType<(typeof client.normJudge)[':normJudgeId']['associatedNormLawFirms']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormJudgeNormJudgeIdAssociatedNormLawFirmsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormJudgeNormJudgeIdAssociatedNormLawFirmsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normJudge[':normJudgeId'].associatedNormLawFirms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormJudgeNormJudgeIdAssociatedNormPartiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']>
  >,
) {
  return ['normJudge', '/normJudge/:normJudgeId/associatedNormParties', toValue(args)] as const
}

export function getNormJudgeNormJudgeIdAssociatedNormPartiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormJudgeNormJudgeIdAssociatedNormPartiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normJudge[':normJudgeId'].associatedNormParties.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']>
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
                    (typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']
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
                    (typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNormJudgeNormJudgeIdAssociatedNormPartiesQueryKey>
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
            ReturnType<(typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormJudgeNormJudgeIdAssociatedNormPartiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormJudgeNormJudgeIdAssociatedNormPartiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normJudge[':normJudgeId'].associatedNormParties.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormJudgeSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.normJudgeSearch.$get>>,
) {
  return ['normJudgeSearch', '/normJudgeSearch', toValue(args)] as const
}

export function getNormJudgeSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.normJudgeSearch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormJudgeSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normJudgeSearch.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNormJudgeSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normJudgeSearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.normJudgeSearch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.normJudgeSearch.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.normJudgeSearch.$get>>>
            >
          >,
          ReturnType<typeof getNormJudgeSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normJudgeSearch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNormJudgeSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormJudgeSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normJudgeSearch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormJudgeSearchNormJudgeSearchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normJudgeSearch)[':normJudgeSearchId']['$get']>
  >,
) {
  return ['normJudgeSearch', '/normJudgeSearch/:normJudgeSearchId', toValue(args)] as const
}

export function getNormJudgeSearchNormJudgeSearchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normJudgeSearch)[':normJudgeSearchId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormJudgeSearchNormJudgeSearchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normJudgeSearch[':normJudgeSearchId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normJudgeSearch)[':normJudgeSearchId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.normJudgeSearch)[':normJudgeSearchId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNormJudgeSearchNormJudgeSearchIdQueryKey>
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
          Awaited<ReturnType<(typeof client.normJudgeSearch)[':normJudgeSearchId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormJudgeSearchNormJudgeSearchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormJudgeSearchNormJudgeSearchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normJudgeSearch[':normJudgeSearchId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormLawFirmNormLawFirmIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.normLawFirm)[':normLawFirmId']['$get']>>,
) {
  return ['normLawFirm', '/normLawFirm/:normLawFirmId', toValue(args)] as const
}

export function getNormLawFirmNormLawFirmIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.normLawFirm)[':normLawFirmId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormLawFirmNormLawFirmIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normLawFirm[':normLawFirmId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.normLawFirm)[':normLawFirmId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.normLawFirm)[':normLawFirmId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNormLawFirmNormLawFirmIdQueryKey>
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
          Awaited<ReturnType<(typeof client.normLawFirm)[':normLawFirmId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormLawFirmNormLawFirmIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormLawFirmNormLawFirmIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normLawFirm[':normLawFirmId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormLawFirmNormLawFirmIdAssociatedNormAttorneysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normLawFirm)[':normLawFirmId']['associatedNormAttorneys']['$get']
    >
  >,
) {
  return [
    'normLawFirm',
    '/normLawFirm/:normLawFirmId/associatedNormAttorneys',
    toValue(args),
  ] as const
}

export function getNormLawFirmNormLawFirmIdAssociatedNormAttorneysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normLawFirm)[':normLawFirmId']['associatedNormAttorneys']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormLawFirmNormLawFirmIdAssociatedNormAttorneysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normLawFirm[':normLawFirmId'].associatedNormAttorneys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normLawFirm)[':normLawFirmId']['associatedNormAttorneys']['$get']
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
                    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormAttorneys']['$get']
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
                    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormAttorneys']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNormLawFirmNormLawFirmIdAssociatedNormAttorneysQueryKey>
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
              (typeof client.normLawFirm)[':normLawFirmId']['associatedNormAttorneys']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormLawFirmNormLawFirmIdAssociatedNormAttorneysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormLawFirmNormLawFirmIdAssociatedNormAttorneysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normLawFirm[':normLawFirmId'].associatedNormAttorneys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormLawFirmNormLawFirmIdAssociatedNormJudgesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normLawFirm)[':normLawFirmId']['associatedNormJudges']['$get']>
  >,
) {
  return ['normLawFirm', '/normLawFirm/:normLawFirmId/associatedNormJudges', toValue(args)] as const
}

export function getNormLawFirmNormLawFirmIdAssociatedNormJudgesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normLawFirm)[':normLawFirmId']['associatedNormJudges']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormLawFirmNormLawFirmIdAssociatedNormJudgesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normLawFirm[':normLawFirmId'].associatedNormJudges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normLawFirm)[':normLawFirmId']['associatedNormJudges']['$get']>
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
                    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormJudges']['$get']
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
                    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormJudges']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNormLawFirmNormLawFirmIdAssociatedNormJudgesQueryKey>
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
              (typeof client.normLawFirm)[':normLawFirmId']['associatedNormJudges']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormLawFirmNormLawFirmIdAssociatedNormJudgesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormLawFirmNormLawFirmIdAssociatedNormJudgesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normLawFirm[':normLawFirmId'].associatedNormJudges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormLawFirmNormLawFirmIdAssociatedNormPartiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normLawFirm)[':normLawFirmId']['associatedNormParties']['$get']>
  >,
) {
  return [
    'normLawFirm',
    '/normLawFirm/:normLawFirmId/associatedNormParties',
    toValue(args),
  ] as const
}

export function getNormLawFirmNormLawFirmIdAssociatedNormPartiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normLawFirm)[':normLawFirmId']['associatedNormParties']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormLawFirmNormLawFirmIdAssociatedNormPartiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normLawFirm[':normLawFirmId'].associatedNormParties.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normLawFirm)[':normLawFirmId']['associatedNormParties']['$get']>
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
                    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormParties']['$get']
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
                    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormParties']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNormLawFirmNormLawFirmIdAssociatedNormPartiesQueryKey>
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
              (typeof client.normLawFirm)[':normLawFirmId']['associatedNormParties']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormLawFirmNormLawFirmIdAssociatedNormPartiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormLawFirmNormLawFirmIdAssociatedNormPartiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normLawFirm[':normLawFirmId'].associatedNormParties.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normLawFirm)[':normLawFirmId']['caseCountAnalyticsByOpposingNormLawFirm']['$get']
    >
  >,
) {
  return [
    'normLawFirm',
    '/normLawFirm/:normLawFirmId/caseCountAnalyticsByOpposingNormLawFirm',
    toValue(args),
  ] as const
}

export function getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normLawFirm)[':normLawFirmId']['caseCountAnalyticsByOpposingNormLawFirm']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normLawFirm[':normLawFirmId'].caseCountAnalyticsByOpposingNormLawFirm.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normLawFirm)[':normLawFirmId']['caseCountAnalyticsByOpposingNormLawFirm']['$get']
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
                    (typeof client.normLawFirm)[':normLawFirmId']['caseCountAnalyticsByOpposingNormLawFirm']['$get']
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
                    (typeof client.normLawFirm)[':normLawFirmId']['caseCountAnalyticsByOpposingNormLawFirm']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmQueryKey
          >
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
              (typeof client.normLawFirm)[':normLawFirmId']['caseCountAnalyticsByOpposingNormLawFirm']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.normLawFirm[':normLawFirmId'].caseCountAnalyticsByOpposingNormLawFirm.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getNormLawFirmSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.normLawFirmSearch.$get>>,
) {
  return ['normLawFirmSearch', '/normLawFirmSearch', toValue(args)] as const
}

export function getNormLawFirmSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.normLawFirmSearch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormLawFirmSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normLawFirmSearch.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNormLawFirmSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normLawFirmSearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.normLawFirmSearch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.normLawFirmSearch.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.normLawFirmSearch.$get>>>
            >
          >,
          ReturnType<typeof getNormLawFirmSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normLawFirmSearch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNormLawFirmSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormLawFirmSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normLawFirmSearch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormLawFirmSearchNormLawFirmSearchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normLawFirmSearch)[':normLawFirmSearchId']['$get']>
  >,
) {
  return ['normLawFirmSearch', '/normLawFirmSearch/:normLawFirmSearchId', toValue(args)] as const
}

export function getNormLawFirmSearchNormLawFirmSearchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normLawFirmSearch)[':normLawFirmSearchId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormLawFirmSearchNormLawFirmSearchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normLawFirmSearch[':normLawFirmSearchId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normLawFirmSearch)[':normLawFirmSearchId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.normLawFirmSearch)[':normLawFirmSearchId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNormLawFirmSearchNormLawFirmSearchIdQueryKey>
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
          Awaited<ReturnType<(typeof client.normLawFirmSearch)[':normLawFirmSearchId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormLawFirmSearchNormLawFirmSearchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormLawFirmSearchNormLawFirmSearchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normLawFirmSearch[':normLawFirmSearchId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormPartyNormPartyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.normParty)[':normPartyId']['$get']>>,
) {
  return ['normParty', '/normParty/:normPartyId', toValue(args)] as const
}

export function getNormPartyNormPartyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.normParty)[':normPartyId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormPartyNormPartyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normParty[':normPartyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNormPartyNormPartyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.normParty)[':normPartyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.normParty)[':normPartyId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.normParty)[':normPartyId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNormPartyNormPartyIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.normParty)[':normPartyId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormPartyNormPartyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormPartyNormPartyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normParty[':normPartyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormPartyNormPartyIdAssociatedNormAttorneysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normParty)[':normPartyId']['associatedNormAttorneys']['$get']>
  >,
) {
  return ['normParty', '/normParty/:normPartyId/associatedNormAttorneys', toValue(args)] as const
}

export function getNormPartyNormPartyIdAssociatedNormAttorneysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normParty)[':normPartyId']['associatedNormAttorneys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormPartyNormPartyIdAssociatedNormAttorneysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normParty[':normPartyId'].associatedNormAttorneys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normParty)[':normPartyId']['associatedNormAttorneys']['$get']>
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
                    (typeof client.normParty)[':normPartyId']['associatedNormAttorneys']['$get']
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
                    (typeof client.normParty)[':normPartyId']['associatedNormAttorneys']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNormPartyNormPartyIdAssociatedNormAttorneysQueryKey>
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
            ReturnType<(typeof client.normParty)[':normPartyId']['associatedNormAttorneys']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormPartyNormPartyIdAssociatedNormAttorneysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormPartyNormPartyIdAssociatedNormAttorneysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normParty[':normPartyId'].associatedNormAttorneys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormPartyNormPartyIdAssociatedNormJudgesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']>
  >,
) {
  return ['normParty', '/normParty/:normPartyId/associatedNormJudges', toValue(args)] as const
}

export function getNormPartyNormPartyIdAssociatedNormJudgesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormPartyNormPartyIdAssociatedNormJudgesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normParty[':normPartyId'].associatedNormJudges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']>
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
                    (typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']
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
                    (typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNormPartyNormPartyIdAssociatedNormJudgesQueryKey>
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
            ReturnType<(typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormPartyNormPartyIdAssociatedNormJudgesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormPartyNormPartyIdAssociatedNormJudgesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normParty[':normPartyId'].associatedNormJudges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormPartyNormPartyIdAssociatedNormLawFirmsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normParty)[':normPartyId']['associatedNormLawFirms']['$get']>
  >,
) {
  return ['normParty', '/normParty/:normPartyId/associatedNormLawFirms', toValue(args)] as const
}

export function getNormPartyNormPartyIdAssociatedNormLawFirmsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normParty)[':normPartyId']['associatedNormLawFirms']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormPartyNormPartyIdAssociatedNormLawFirmsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normParty[':normPartyId'].associatedNormLawFirms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normParty)[':normPartyId']['associatedNormLawFirms']['$get']>
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
                    (typeof client.normParty)[':normPartyId']['associatedNormLawFirms']['$get']
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
                    (typeof client.normParty)[':normPartyId']['associatedNormLawFirms']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNormPartyNormPartyIdAssociatedNormLawFirmsQueryKey>
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
            ReturnType<(typeof client.normParty)[':normPartyId']['associatedNormLawFirms']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormPartyNormPartyIdAssociatedNormLawFirmsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormPartyNormPartyIdAssociatedNormLawFirmsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normParty[':normPartyId'].associatedNormLawFirms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normParty)[':normPartyId']['caseCountAnalyticsByOpposingNormParty']['$get']
    >
  >,
) {
  return [
    'normParty',
    '/normParty/:normPartyId/caseCountAnalyticsByOpposingNormParty',
    toValue(args),
  ] as const
}

export function getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normParty)[':normPartyId']['caseCountAnalyticsByOpposingNormParty']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normParty[':normPartyId'].caseCountAnalyticsByOpposingNormParty.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.normParty)[':normPartyId']['caseCountAnalyticsByOpposingNormParty']['$get']
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
                    (typeof client.normParty)[':normPartyId']['caseCountAnalyticsByOpposingNormParty']['$get']
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
                    (typeof client.normParty)[':normPartyId']['caseCountAnalyticsByOpposingNormParty']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyQueryKey>
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
              (typeof client.normParty)[':normPartyId']['caseCountAnalyticsByOpposingNormParty']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.normParty[':normPartyId'].caseCountAnalyticsByOpposingNormParty.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getNormPartySearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.normPartySearch.$get>>,
) {
  return ['normPartySearch', '/normPartySearch', toValue(args)] as const
}

export function getNormPartySearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.normPartySearch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormPartySearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normPartySearch.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNormPartySearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normPartySearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.normPartySearch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.normPartySearch.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.normPartySearch.$get>>>
            >
          >,
          ReturnType<typeof getNormPartySearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normPartySearch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNormPartySearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormPartySearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normPartySearch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNormPartySearchNormPartySearchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normPartySearch)[':normPartySearchId']['$get']>
  >,
) {
  return ['normPartySearch', '/normPartySearch/:normPartySearchId', toValue(args)] as const
}

export function getNormPartySearchNormPartySearchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normPartySearch)[':normPartySearchId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNormPartySearchNormPartySearchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.normPartySearch[':normPartySearchId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.normPartySearch)[':normPartySearchId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.normPartySearch)[':normPartySearchId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNormPartySearchNormPartySearchIdQueryKey>
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
          Awaited<ReturnType<(typeof client.normPartySearch)[':normPartySearchId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNormPartySearchNormPartySearchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNormPartySearchNormPartySearchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.normPartySearch[':normPartySearchId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPacerImportCaseByCourtUsingCaseNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacer.importCaseByCourtUsingCaseNumber.$get>
  >,
) {
  return ['pacer', '/pacer/importCaseByCourtUsingCaseNumber', toValue(args)] as const
}

export function getPacerImportCaseByCourtUsingCaseNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacer.importCaseByCourtUsingCaseNumber.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPacerImportCaseByCourtUsingCaseNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pacer.importCaseByCourtUsingCaseNumber.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacer.importCaseByCourtUsingCaseNumber.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pacer.importCaseByCourtUsingCaseNumber.$get>>
              >
            >
          >,
          ReturnType<typeof getPacerImportCaseByCourtUsingCaseNumberQueryKey>
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
          Awaited<ReturnType<typeof client.pacer.importCaseByCourtUsingCaseNumber.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerImportCaseByCourtUsingCaseNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPacerImportCaseByCourtUsingCaseNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pacer.importCaseByCourtUsingCaseNumber.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPacerCaseLocatorCaseSearchAllCourtsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.caseSearch.allCourts.$get>
  >,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/caseSearch/allCourts', toValue(args)] as const
}

export function getPacerCaseLocatorCaseSearchAllCourtsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.caseSearch.allCourts.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPacerCaseLocatorCaseSearchAllCourtsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pacerCaseLocator.caseSearch.allCourts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.caseSearch.allCourts.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.allCourts.$get>>
              >
            >
          >,
          ReturnType<typeof getPacerCaseLocatorCaseSearchAllCourtsQueryKey>
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
          Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.allCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorCaseSearchAllCourtsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPacerCaseLocatorCaseSearchAllCourtsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pacerCaseLocator.caseSearch.allCourts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPacerCaseLocatorCaseSearchAppealCourtsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.caseSearch.appealCourts.$get>
  >,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/caseSearch/appealCourts', toValue(args)] as const
}

export function getPacerCaseLocatorCaseSearchAppealCourtsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.caseSearch.appealCourts.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPacerCaseLocatorCaseSearchAppealCourtsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pacerCaseLocator.caseSearch.appealCourts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.caseSearch.appealCourts.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.appealCourts.$get>>
              >
            >
          >,
          ReturnType<typeof getPacerCaseLocatorCaseSearchAppealCourtsQueryKey>
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
          Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.appealCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorCaseSearchAppealCourtsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPacerCaseLocatorCaseSearchAppealCourtsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pacerCaseLocator.caseSearch.appealCourts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPacerCaseLocatorCaseSearchBankruptcyCourtsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get>
  >,
) {
  return [
    'pacerCaseLocator',
    '/pacerCaseLocator/caseSearch/bankruptcyCourts',
    toValue(args),
  ] as const
}

export function getPacerCaseLocatorCaseSearchBankruptcyCourtsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPacerCaseLocatorCaseSearchBankruptcyCourtsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get>>
              >
            >
          >,
          ReturnType<typeof getPacerCaseLocatorCaseSearchBankruptcyCourtsQueryKey>
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
          Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorCaseSearchBankruptcyCourtsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPacerCaseLocatorCaseSearchBankruptcyCourtsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPacerCaseLocatorCaseSearchCivilCourtsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.caseSearch.civilCourts.$get>
  >,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/caseSearch/civilCourts', toValue(args)] as const
}

export function getPacerCaseLocatorCaseSearchCivilCourtsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.caseSearch.civilCourts.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPacerCaseLocatorCaseSearchCivilCourtsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pacerCaseLocator.caseSearch.civilCourts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.caseSearch.civilCourts.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.civilCourts.$get>>
              >
            >
          >,
          ReturnType<typeof getPacerCaseLocatorCaseSearchCivilCourtsQueryKey>
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
          Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.civilCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorCaseSearchCivilCourtsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPacerCaseLocatorCaseSearchCivilCourtsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pacerCaseLocator.caseSearch.civilCourts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPacerCaseLocatorCaseSearchCriminalCourtsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.caseSearch.criminalCourts.$get>
  >,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/caseSearch/criminalCourts', toValue(args)] as const
}

export function getPacerCaseLocatorCaseSearchCriminalCourtsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.caseSearch.criminalCourts.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPacerCaseLocatorCaseSearchCriminalCourtsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pacerCaseLocator.caseSearch.criminalCourts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.caseSearch.criminalCourts.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.criminalCourts.$get>>
              >
            >
          >,
          ReturnType<typeof getPacerCaseLocatorCaseSearchCriminalCourtsQueryKey>
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
          Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.criminalCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorCaseSearchCriminalCourtsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPacerCaseLocatorCaseSearchCriminalCourtsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pacerCaseLocator.caseSearch.criminalCourts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPacerCaseLocatorCaseSearchMultiDistrictCourtsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get>
  >,
) {
  return [
    'pacerCaseLocator',
    '/pacerCaseLocator/caseSearch/multiDistrictCourts',
    toValue(args),
  ] as const
}

export function getPacerCaseLocatorCaseSearchMultiDistrictCourtsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPacerCaseLocatorCaseSearchMultiDistrictCourtsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get>
                >
              >
            >
          >,
          ReturnType<typeof getPacerCaseLocatorCaseSearchMultiDistrictCourtsQueryKey>
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
          Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorCaseSearchMultiDistrictCourtsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPacerCaseLocatorCaseSearchMultiDistrictCourtsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPacerCaseLocatorPartySearchAllCourtsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.partySearch.allCourts.$get>
  >,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/partySearch/allCourts', toValue(args)] as const
}

export function getPacerCaseLocatorPartySearchAllCourtsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.partySearch.allCourts.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPacerCaseLocatorPartySearchAllCourtsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pacerCaseLocator.partySearch.allCourts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.partySearch.allCourts.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.allCourts.$get>>
              >
            >
          >,
          ReturnType<typeof getPacerCaseLocatorPartySearchAllCourtsQueryKey>
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
          Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.allCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorPartySearchAllCourtsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPacerCaseLocatorPartySearchAllCourtsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pacerCaseLocator.partySearch.allCourts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPacerCaseLocatorPartySearchAppealCourtsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.partySearch.appealCourts.$get>
  >,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/partySearch/appealCourts', toValue(args)] as const
}

export function getPacerCaseLocatorPartySearchAppealCourtsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.partySearch.appealCourts.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPacerCaseLocatorPartySearchAppealCourtsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pacerCaseLocator.partySearch.appealCourts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.partySearch.appealCourts.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.appealCourts.$get>>
              >
            >
          >,
          ReturnType<typeof getPacerCaseLocatorPartySearchAppealCourtsQueryKey>
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
          Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.appealCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorPartySearchAppealCourtsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPacerCaseLocatorPartySearchAppealCourtsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pacerCaseLocator.partySearch.appealCourts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPacerCaseLocatorPartySearchBankruptcyCourtsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.partySearch.bankruptcyCourts.$get>
  >,
) {
  return [
    'pacerCaseLocator',
    '/pacerCaseLocator/partySearch/bankruptcyCourts',
    toValue(args),
  ] as const
}

export function getPacerCaseLocatorPartySearchBankruptcyCourtsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.partySearch.bankruptcyCourts.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPacerCaseLocatorPartySearchBankruptcyCourtsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pacerCaseLocator.partySearch.bankruptcyCourts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.partySearch.bankruptcyCourts.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.pacerCaseLocator.partySearch.bankruptcyCourts.$get>
                >
              >
            >
          >,
          ReturnType<typeof getPacerCaseLocatorPartySearchBankruptcyCourtsQueryKey>
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
          Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.bankruptcyCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorPartySearchBankruptcyCourtsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPacerCaseLocatorPartySearchBankruptcyCourtsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pacerCaseLocator.partySearch.bankruptcyCourts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPacerCaseLocatorPartySearchCivilCourtsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.partySearch.civilCourts.$get>
  >,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/partySearch/civilCourts', toValue(args)] as const
}

export function getPacerCaseLocatorPartySearchCivilCourtsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.partySearch.civilCourts.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPacerCaseLocatorPartySearchCivilCourtsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pacerCaseLocator.partySearch.civilCourts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.partySearch.civilCourts.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.civilCourts.$get>>
              >
            >
          >,
          ReturnType<typeof getPacerCaseLocatorPartySearchCivilCourtsQueryKey>
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
          Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.civilCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorPartySearchCivilCourtsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPacerCaseLocatorPartySearchCivilCourtsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pacerCaseLocator.partySearch.civilCourts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPacerCaseLocatorPartySearchCriminalCourtsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.partySearch.criminalCourts.$get>
  >,
) {
  return [
    'pacerCaseLocator',
    '/pacerCaseLocator/partySearch/criminalCourts',
    toValue(args),
  ] as const
}

export function getPacerCaseLocatorPartySearchCriminalCourtsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.partySearch.criminalCourts.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPacerCaseLocatorPartySearchCriminalCourtsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pacerCaseLocator.partySearch.criminalCourts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.partySearch.criminalCourts.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.criminalCourts.$get>>
              >
            >
          >,
          ReturnType<typeof getPacerCaseLocatorPartySearchCriminalCourtsQueryKey>
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
          Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.criminalCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorPartySearchCriminalCourtsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPacerCaseLocatorPartySearchCriminalCourtsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pacerCaseLocator.partySearch.criminalCourts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPacerCaseLocatorPartySearchMultiDistrictCourtsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.partySearch.multiDistrictCourts.$get>
  >,
) {
  return [
    'pacerCaseLocator',
    '/pacerCaseLocator/partySearch/multiDistrictCourts',
    toValue(args),
  ] as const
}

export function getPacerCaseLocatorPartySearchMultiDistrictCourtsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.partySearch.multiDistrictCourts.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPacerCaseLocatorPartySearchMultiDistrictCourtsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pacerCaseLocator.partySearch.multiDistrictCourts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.pacerCaseLocator.partySearch.multiDistrictCourts.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.pacerCaseLocator.partySearch.multiDistrictCourts.$get>
                >
              >
            >
          >,
          ReturnType<typeof getPacerCaseLocatorPartySearchMultiDistrictCourtsQueryKey>
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
          Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.multiDistrictCourts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCaseLocatorPartySearchMultiDistrictCourtsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPacerCaseLocatorPartySearchMultiDistrictCourtsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pacerCaseLocator.partySearch.multiDistrictCourts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPacerCredentialQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pacerCredential.$get>>,
) {
  return ['pacerCredential', '/pacerCredential', toValue(args)] as const
}

export function getPacerCredentialQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pacerCredential.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPacerCredentialQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pacerCredential.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePacerCredential<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pacerCredential.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$get>>>
            >
          >,
          ReturnType<typeof getPacerCredentialQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCredentialQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPacerCredentialQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pacerCredential.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.pacerCredential.$put>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pacerCredential)[':pacerUserId']['$get']>>,
) {
  return ['pacerCredential', '/pacerCredential/:pacerUserId', toValue(args)] as const
}

export function getPacerCredentialPacerUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pacerCredential)[':pacerUserId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPacerCredentialPacerUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pacerCredential[':pacerUserId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pacerCredential)[':pacerUserId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pacerCredential)[':pacerUserId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPacerCredentialPacerUserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.pacerCredential)[':pacerUserId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPacerCredentialPacerUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPacerCredentialPacerUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pacerCredential[':pacerUserId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.party)[':partyId']['$get']>>,
) {
  return ['party', '/party/:partyId', toValue(args)] as const
}

export function getPartyPartyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.party)[':partyId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPartyPartyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.party[':partyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePartyPartyId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.party)[':partyId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.party)[':partyId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.party)[':partyId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.party)[':partyId']['$get']>>>
            >
          >,
          ReturnType<typeof getPartyPartyIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.party)[':partyId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPartyPartyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPartyPartyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.party[':partyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPartyPartyIdAssociatedAttorneysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.party)[':partyId']['associatedAttorneys']['$get']>
  >,
) {
  return ['party', '/party/:partyId/associatedAttorneys', toValue(args)] as const
}

export function getPartyPartyIdAssociatedAttorneysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.party)[':partyId']['associatedAttorneys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPartyPartyIdAssociatedAttorneysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.party[':partyId'].associatedAttorneys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.party)[':partyId']['associatedAttorneys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.party)[':partyId']['associatedAttorneys']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPartyPartyIdAssociatedAttorneysQueryKey>
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
          Awaited<ReturnType<(typeof client.party)[':partyId']['associatedAttorneys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPartyPartyIdAssociatedAttorneysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPartyPartyIdAssociatedAttorneysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.party[':partyId'].associatedAttorneys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
