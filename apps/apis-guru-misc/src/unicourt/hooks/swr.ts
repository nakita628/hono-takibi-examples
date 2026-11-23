import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAttorneyAttorneyIdKey(
  args: InferRequestType<(typeof client.attorney)[':attorneyId']['$get']>,
) {
  return ['attorney', '/attorney/:attorneyId', args] as const
}

export function useGetAttorneyAttorneyId<TError = unknown>(
  args: InferRequestType<(typeof client.attorney)[':attorneyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.attorney)[':attorneyId']['$get']>>>
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
        ? getGetAttorneyAttorneyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.attorney)[':attorneyId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attorney[':attorneyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttorneyAttorneyId<TError = unknown>(
  args: InferRequestType<(typeof client.attorney)[':attorneyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.attorney)[':attorneyId']['$get']>>>
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
        ? getGetAttorneyAttorneyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.attorney)[':attorneyId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attorney[':attorneyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAttorneyAttorneyIdAssociatedPartiesKey(
  args: InferRequestType<(typeof client.attorney)[':attorneyId']['associatedParties']['$get']>,
) {
  return ['attorney', '/attorney/:attorneyId/associatedParties', args] as const
}

export function useGetAttorneyAttorneyIdAssociatedParties<TError = unknown>(
  args: InferRequestType<(typeof client.attorney)[':attorneyId']['associatedParties']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.attorney)[':attorneyId']['associatedParties']['$get']>
            >
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
        ? getGetAttorneyAttorneyIdAssociatedPartiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.attorney)[':attorneyId']['associatedParties']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.attorney[':attorneyId'].associatedParties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttorneyAttorneyIdAssociatedParties<TError = unknown>(
  args: InferRequestType<(typeof client.attorney)[':attorneyId']['associatedParties']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.attorney)[':attorneyId']['associatedParties']['$get']>
            >
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
        ? getGetAttorneyAttorneyIdAssociatedPartiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.attorney)[':attorneyId']['associatedParties']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.attorney[':attorneyId'].associatedParties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBillingCycleUsageBillingCycleKey(
  args: InferRequestType<(typeof client.billingCycleUsage)[':billingCycle']['$get']>,
) {
  return ['billingCycleUsage', '/billingCycleUsage/:billingCycle', args] as const
}

export function useGetBillingCycleUsageBillingCycle<TError = unknown>(
  args: InferRequestType<(typeof client.billingCycleUsage)[':billingCycle']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billingCycleUsage)[':billingCycle']['$get']>>
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
        ? getGetBillingCycleUsageBillingCycleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billingCycleUsage)[':billingCycle']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.billingCycleUsage[':billingCycle'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingCycleUsageBillingCycle<TError = unknown>(
  args: InferRequestType<(typeof client.billingCycleUsage)[':billingCycle']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billingCycleUsage)[':billingCycle']['$get']>>
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
        ? getGetBillingCycleUsageBillingCycleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.billingCycleUsage)[':billingCycle']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.billingCycleUsage[':billingCycle'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBillingCyclesKey() {
  return ['billingCycles', '/billingCycles'] as const
}

export function useGetBillingCycles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billingCycles.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBillingCyclesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billingCycles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billingCycles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingCycles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billingCycles.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBillingCyclesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billingCycles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billingCycles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCallbacksKey(args: InferRequestType<typeof client.callbacks.$get>) {
  return ['callbacks', '/callbacks', args] as const
}

export function useGetCallbacks<TError = unknown>(
  args: InferRequestType<typeof client.callbacks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callbacks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCallbacksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callbacks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.callbacks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCallbacks<TError = unknown>(
  args: InferRequestType<typeof client.callbacks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callbacks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCallbacksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callbacks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.callbacks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCaseIdKey(
  args: InferRequestType<(typeof client.case)[':caseId']['$get']>,
) {
  return ['case', '/case/:caseId', args] as const
}

export function useGetCaseCaseId<TError = unknown>(
  args: InferRequestType<(typeof client.case)[':caseId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCaseCaseIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.case[':caseId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCaseId<TError = unknown>(
  args: InferRequestType<(typeof client.case)[':caseId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCaseCaseIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.case)[':caseId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.case[':caseId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCaseIdAttorneysKey(
  args: InferRequestType<(typeof client.case)[':caseId']['attorneys']['$get']>,
) {
  return ['case', '/case/:caseId/attorneys', args] as const
}

export function useGetCaseCaseIdAttorneys<TError = unknown>(
  args: InferRequestType<(typeof client.case)[':caseId']['attorneys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['attorneys']['$get']>>
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
        ? getGetCaseCaseIdAttorneysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['attorneys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.case[':caseId'].attorneys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCaseIdAttorneys<TError = unknown>(
  args: InferRequestType<(typeof client.case)[':caseId']['attorneys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['attorneys']['$get']>>
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
        ? getGetCaseCaseIdAttorneysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['attorneys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.case[':caseId'].attorneys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCaseIdDocketEntriesKey(
  args: InferRequestType<(typeof client.case)[':caseId']['docketEntries']['$get']>,
) {
  return ['case', '/case/:caseId/docketEntries', args] as const
}

export function useGetCaseCaseIdDocketEntries<TError = unknown>(
  args: InferRequestType<(typeof client.case)[':caseId']['docketEntries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['docketEntries']['$get']>>
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
        ? getGetCaseCaseIdDocketEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['docketEntries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.case[':caseId'].docketEntries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCaseIdDocketEntries<TError = unknown>(
  args: InferRequestType<(typeof client.case)[':caseId']['docketEntries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['docketEntries']['$get']>>
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
        ? getGetCaseCaseIdDocketEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['docketEntries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.case[':caseId'].docketEntries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCaseIdDocketEntriesPrimaryDocumentsKey(
  args: InferRequestType<
    (typeof client.case)[':caseId']['docketEntries']['primaryDocuments']['$get']
  >,
) {
  return ['case', '/case/:caseId/docketEntries/primaryDocuments', args] as const
}

export function useGetCaseCaseIdDocketEntriesPrimaryDocuments<TError = unknown>(
  args: InferRequestType<
    (typeof client.case)[':caseId']['docketEntries']['primaryDocuments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCaseCaseIdDocketEntriesPrimaryDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.case[':caseId'].docketEntries.primaryDocuments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCaseIdDocketEntriesPrimaryDocuments<TError = unknown>(
  args: InferRequestType<
    (typeof client.case)[':caseId']['docketEntries']['primaryDocuments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCaseCaseIdDocketEntriesPrimaryDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.case[':caseId'].docketEntries.primaryDocuments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCaseIdDocketEntriesSecondaryDocumentsKey(
  args: InferRequestType<
    (typeof client.case)[':caseId']['docketEntries']['secondaryDocuments']['$get']
  >,
) {
  return ['case', '/case/:caseId/docketEntries/secondaryDocuments', args] as const
}

export function useGetCaseCaseIdDocketEntriesSecondaryDocuments<TError = unknown>(
  args: InferRequestType<
    (typeof client.case)[':caseId']['docketEntries']['secondaryDocuments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCaseCaseIdDocketEntriesSecondaryDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.case[':caseId'].docketEntries.secondaryDocuments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCaseIdDocketEntriesSecondaryDocuments<TError = unknown>(
  args: InferRequestType<
    (typeof client.case)[':caseId']['docketEntries']['secondaryDocuments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCaseCaseIdDocketEntriesSecondaryDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.case[':caseId'].docketEntries.secondaryDocuments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCaseIdDocumentsKey(
  args: InferRequestType<(typeof client.case)[':caseId']['documents']['$get']>,
) {
  return ['case', '/case/:caseId/documents', args] as const
}

export function useGetCaseCaseIdDocuments<TError = unknown>(
  args: InferRequestType<(typeof client.case)[':caseId']['documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['documents']['$get']>>
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
        ? getGetCaseCaseIdDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['documents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.case[':caseId'].documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCaseIdDocuments<TError = unknown>(
  args: InferRequestType<(typeof client.case)[':caseId']['documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['documents']['$get']>>
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
        ? getGetCaseCaseIdDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['documents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.case[':caseId'].documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCaseIdHearingsKey(
  args: InferRequestType<(typeof client.case)[':caseId']['hearings']['$get']>,
) {
  return ['case', '/case/:caseId/hearings', args] as const
}

export function useGetCaseCaseIdHearings<TError = unknown>(
  args: InferRequestType<(typeof client.case)[':caseId']['hearings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['hearings']['$get']>>
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
        ? getGetCaseCaseIdHearingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['hearings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.case[':caseId'].hearings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCaseIdHearings<TError = unknown>(
  args: InferRequestType<(typeof client.case)[':caseId']['hearings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['hearings']['$get']>>
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
        ? getGetCaseCaseIdHearingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['hearings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.case[':caseId'].hearings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCaseIdJudgesKey(
  args: InferRequestType<(typeof client.case)[':caseId']['judges']['$get']>,
) {
  return ['case', '/case/:caseId/judges', args] as const
}

export function useGetCaseCaseIdJudges<TError = unknown>(
  args: InferRequestType<(typeof client.case)[':caseId']['judges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['judges']['$get']>>
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
        ? getGetCaseCaseIdJudgesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['judges']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.case[':caseId'].judges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCaseIdJudges<TError = unknown>(
  args: InferRequestType<(typeof client.case)[':caseId']['judges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['judges']['$get']>>
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
        ? getGetCaseCaseIdJudgesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['judges']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.case[':caseId'].judges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCaseIdPartiesKey(
  args: InferRequestType<(typeof client.case)[':caseId']['parties']['$get']>,
) {
  return ['case', '/case/:caseId/parties', args] as const
}

export function useGetCaseCaseIdParties<TError = unknown>(
  args: InferRequestType<(typeof client.case)[':caseId']['parties']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['parties']['$get']>>
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
        ? getGetCaseCaseIdPartiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['parties']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.case[':caseId'].parties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCaseIdParties<TError = unknown>(
  args: InferRequestType<(typeof client.case)[':caseId']['parties']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['parties']['$get']>>
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
        ? getGetCaseCaseIdPartiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['parties']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.case[':caseId'].parties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCaseIdRelatedCasesKey(
  args: InferRequestType<(typeof client.case)[':caseId']['relatedCases']['$get']>,
) {
  return ['case', '/case/:caseId/relatedCases', args] as const
}

export function useGetCaseCaseIdRelatedCases<TError = unknown>(
  args: InferRequestType<(typeof client.case)[':caseId']['relatedCases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['relatedCases']['$get']>>
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
        ? getGetCaseCaseIdRelatedCasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['relatedCases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.case[':caseId'].relatedCases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCaseIdRelatedCases<TError = unknown>(
  args: InferRequestType<(typeof client.case)[':caseId']['relatedCases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['relatedCases']['$get']>>
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
        ? getGetCaseCaseIdRelatedCasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.case)[':caseId']['relatedCases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.case[':caseId'].relatedCases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCountAnalyticsByAreaOfLawKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>,
) {
  return ['caseCountAnalyticsByAreaOfLaw', '/caseCountAnalyticsByAreaOfLaw', args] as const
}

export function useGetCaseCountAnalyticsByAreaOfLaw<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>>
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
        ? getGetCaseCountAnalyticsByAreaOfLawKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByAreaOfLaw.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCountAnalyticsByAreaOfLaw<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>>
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
        ? getGetCaseCountAnalyticsByAreaOfLawKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByAreaOfLaw.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCountAnalyticsByCaseClassKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseClass.$get>,
) {
  return ['caseCountAnalyticsByCaseClass', '/caseCountAnalyticsByCaseClass', args] as const
}

export function useGetCaseCountAnalyticsByCaseClass<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseClass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseClass.$get>>
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
        ? getGetCaseCountAnalyticsByCaseClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseClass.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByCaseClass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCountAnalyticsByCaseClass<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseClass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseClass.$get>>
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
        ? getGetCaseCountAnalyticsByCaseClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseClass.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByCaseClass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCountAnalyticsByCaseFiledDateKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseFiledDate.$get>,
) {
  return ['caseCountAnalyticsByCaseFiledDate', '/caseCountAnalyticsByCaseFiledDate', args] as const
}

export function useGetCaseCountAnalyticsByCaseFiledDate<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseFiledDate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseFiledDate.$get>>
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
        ? getGetCaseCountAnalyticsByCaseFiledDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseFiledDate.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByCaseFiledDate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCountAnalyticsByCaseFiledDate<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseFiledDate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseFiledDate.$get>>
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
        ? getGetCaseCountAnalyticsByCaseFiledDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseFiledDate.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByCaseFiledDate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCountAnalyticsByCaseTypeKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseType.$get>,
) {
  return ['caseCountAnalyticsByCaseType', '/caseCountAnalyticsByCaseType', args] as const
}

export function useGetCaseCountAnalyticsByCaseType<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseType.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseType.$get>>>
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
        ? getGetCaseCountAnalyticsByCaseTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseType.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByCaseType.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCountAnalyticsByCaseType<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseType.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseType.$get>>>
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
        ? getGetCaseCountAnalyticsByCaseTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseType.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByCaseType.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCountAnalyticsByCaseTypeGroupKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseTypeGroup.$get>,
) {
  return ['caseCountAnalyticsByCaseTypeGroup', '/caseCountAnalyticsByCaseTypeGroup', args] as const
}

export function useGetCaseCountAnalyticsByCaseTypeGroup<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseTypeGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseTypeGroup.$get>>
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
        ? getGetCaseCountAnalyticsByCaseTypeGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseTypeGroup.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByCaseTypeGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCountAnalyticsByCaseTypeGroup<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseTypeGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseTypeGroup.$get>>
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
        ? getGetCaseCountAnalyticsByCaseTypeGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCaseTypeGroup.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByCaseTypeGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCountAnalyticsByCourtKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourt.$get>,
) {
  return ['caseCountAnalyticsByCourt', '/caseCountAnalyticsByCourt', args] as const
}

export function useGetCaseCountAnalyticsByCourt<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourt.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourt.$get>>>
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
        ? getGetCaseCountAnalyticsByCourtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourt.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByCourt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCountAnalyticsByCourt<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourt.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourt.$get>>>
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
        ? getGetCaseCountAnalyticsByCourtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.caseCountAnalyticsByCourt.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByCourt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCountAnalyticsByCourtLocationKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtLocation.$get>,
) {
  return ['caseCountAnalyticsByCourtLocation', '/caseCountAnalyticsByCourtLocation', args] as const
}

export function useGetCaseCountAnalyticsByCourtLocation<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtLocation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtLocation.$get>>
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
        ? getGetCaseCountAnalyticsByCourtLocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtLocation.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByCourtLocation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCountAnalyticsByCourtLocation<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtLocation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtLocation.$get>>
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
        ? getGetCaseCountAnalyticsByCourtLocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtLocation.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByCourtLocation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCountAnalyticsByCourtSystemKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtSystem.$get>,
) {
  return ['caseCountAnalyticsByCourtSystem', '/caseCountAnalyticsByCourtSystem', args] as const
}

export function useGetCaseCountAnalyticsByCourtSystem<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtSystem.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtSystem.$get>>
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
        ? getGetCaseCountAnalyticsByCourtSystemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtSystem.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByCourtSystem.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCountAnalyticsByCourtSystem<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtSystem.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtSystem.$get>>
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
        ? getGetCaseCountAnalyticsByCourtSystemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtSystem.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByCourtSystem.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCountAnalyticsByCourtTypeKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtType.$get>,
) {
  return ['caseCountAnalyticsByCourtType', '/caseCountAnalyticsByCourtType', args] as const
}

export function useGetCaseCountAnalyticsByCourtType<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtType.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtType.$get>>
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
        ? getGetCaseCountAnalyticsByCourtTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtType.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByCourtType.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCountAnalyticsByCourtType<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtType.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtType.$get>>
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
        ? getGetCaseCountAnalyticsByCourtTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByCourtType.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByCourtType.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCountAnalyticsByJurisdictionGeoKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByJurisdictionGeo.$get>,
) {
  return [
    'caseCountAnalyticsByJurisdictionGeo',
    '/caseCountAnalyticsByJurisdictionGeo',
    args,
  ] as const
}

export function useGetCaseCountAnalyticsByJurisdictionGeo<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByJurisdictionGeo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByJurisdictionGeo.$get>>
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
        ? getGetCaseCountAnalyticsByJurisdictionGeoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByJurisdictionGeo.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.caseCountAnalyticsByJurisdictionGeo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCountAnalyticsByJurisdictionGeo<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByJurisdictionGeo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByJurisdictionGeo.$get>>
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
        ? getGetCaseCountAnalyticsByJurisdictionGeoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByJurisdictionGeo.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.caseCountAnalyticsByJurisdictionGeo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCountAnalyticsByNormAttorneyKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormAttorney.$get>,
) {
  return ['caseCountAnalyticsByNormAttorney', '/caseCountAnalyticsByNormAttorney', args] as const
}

export function useGetCaseCountAnalyticsByNormAttorney<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormAttorney.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByNormAttorney.$get>>
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
        ? getGetCaseCountAnalyticsByNormAttorneyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByNormAttorney.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByNormAttorney.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCountAnalyticsByNormAttorney<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormAttorney.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByNormAttorney.$get>>
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
        ? getGetCaseCountAnalyticsByNormAttorneyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByNormAttorney.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByNormAttorney.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCountAnalyticsByNormJudgeKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormJudge.$get>,
) {
  return ['caseCountAnalyticsByNormJudge', '/caseCountAnalyticsByNormJudge', args] as const
}

export function useGetCaseCountAnalyticsByNormJudge<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormJudge.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByNormJudge.$get>>
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
        ? getGetCaseCountAnalyticsByNormJudgeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByNormJudge.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByNormJudge.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCountAnalyticsByNormJudge<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormJudge.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByNormJudge.$get>>
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
        ? getGetCaseCountAnalyticsByNormJudgeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByNormJudge.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByNormJudge.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCountAnalyticsByNormLawFirmKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormLawFirm.$get>,
) {
  return ['caseCountAnalyticsByNormLawFirm', '/caseCountAnalyticsByNormLawFirm', args] as const
}

export function useGetCaseCountAnalyticsByNormLawFirm<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormLawFirm.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByNormLawFirm.$get>>
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
        ? getGetCaseCountAnalyticsByNormLawFirmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByNormLawFirm.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByNormLawFirm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCountAnalyticsByNormLawFirm<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormLawFirm.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByNormLawFirm.$get>>
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
        ? getGetCaseCountAnalyticsByNormLawFirmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByNormLawFirm.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByNormLawFirm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCountAnalyticsByNormPartyKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormParty.$get>,
) {
  return ['caseCountAnalyticsByNormParty', '/caseCountAnalyticsByNormParty', args] as const
}

export function useGetCaseCountAnalyticsByNormParty<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormParty.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByNormParty.$get>>
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
        ? getGetCaseCountAnalyticsByNormPartyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByNormParty.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByNormParty.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCountAnalyticsByNormParty<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormParty.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByNormParty.$get>>
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
        ? getGetCaseCountAnalyticsByNormPartyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByNormParty.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByNormParty.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCountAnalyticsByPartyRoleKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByPartyRole.$get>,
) {
  return ['caseCountAnalyticsByPartyRole', '/caseCountAnalyticsByPartyRole', args] as const
}

export function useGetCaseCountAnalyticsByPartyRole<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByPartyRole.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRole.$get>>
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
        ? getGetCaseCountAnalyticsByPartyRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRole.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByPartyRole.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCountAnalyticsByPartyRole<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByPartyRole.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRole.$get>>
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
        ? getGetCaseCountAnalyticsByPartyRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRole.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseCountAnalyticsByPartyRole.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseCountAnalyticsByPartyRoleGroupKey(
  args: InferRequestType<typeof client.caseCountAnalyticsByPartyRoleGroup.$get>,
) {
  return [
    'caseCountAnalyticsByPartyRoleGroup',
    '/caseCountAnalyticsByPartyRoleGroup',
    args,
  ] as const
}

export function useGetCaseCountAnalyticsByPartyRoleGroup<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByPartyRoleGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRoleGroup.$get>>
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
        ? getGetCaseCountAnalyticsByPartyRoleGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRoleGroup.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.caseCountAnalyticsByPartyRoleGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseCountAnalyticsByPartyRoleGroup<TError = unknown>(
  args: InferRequestType<typeof client.caseCountAnalyticsByPartyRoleGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRoleGroup.$get>>
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
        ? getGetCaseCountAnalyticsByPartyRoleGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.caseCountAnalyticsByPartyRoleGroup.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.caseCountAnalyticsByPartyRoleGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseDocumentCaseDocumentIdKey(
  args: InferRequestType<(typeof client.caseDocument)[':caseDocumentId']['$get']>,
) {
  return ['caseDocument', '/caseDocument/:caseDocumentId', args] as const
}

export function useGetCaseDocumentCaseDocumentId<TError = unknown>(
  args: InferRequestType<(typeof client.caseDocument)[':caseDocumentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.caseDocument)[':caseDocumentId']['$get']>>
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
        ? getGetCaseDocumentCaseDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.caseDocument)[':caseDocumentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseDocument[':caseDocumentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseDocumentCaseDocumentId<TError = unknown>(
  args: InferRequestType<(typeof client.caseDocument)[':caseDocumentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.caseDocument)[':caseDocumentId']['$get']>>
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
        ? getGetCaseDocumentCaseDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.caseDocument)[':caseDocumentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseDocument[':caseDocumentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseDocumentDownloadCaseDocumentIdKey(
  args: InferRequestType<(typeof client.caseDocumentDownload)[':caseDocumentId']['$get']>,
) {
  return ['caseDocumentDownload', '/caseDocumentDownload/:caseDocumentId', args] as const
}

export function useGetCaseDocumentDownloadCaseDocumentId<TError = unknown>(
  args: InferRequestType<(typeof client.caseDocumentDownload)[':caseDocumentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.caseDocumentDownload)[':caseDocumentId']['$get']>>
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
        ? getGetCaseDocumentDownloadCaseDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.caseDocumentDownload)[':caseDocumentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.caseDocumentDownload[':caseDocumentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseDocumentDownloadCaseDocumentId<TError = unknown>(
  args: InferRequestType<(typeof client.caseDocumentDownload)[':caseDocumentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.caseDocumentDownload)[':caseDocumentId']['$get']>>
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
        ? getGetCaseDocumentDownloadCaseDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.caseDocumentDownload)[':caseDocumentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.caseDocumentDownload[':caseDocumentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCaseDocumentOrderKey() {
  return ['caseDocumentOrder', '/caseDocumentOrder', 'PUT'] as const
}

export function usePutCaseDocumentOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseDocumentOrder.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.caseDocumentOrder.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCaseDocumentOrderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.caseDocumentOrder.$put> }) =>
        parseResponse(client.caseDocumentOrder.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCaseDocumentOrderCallbacksKey(
  args: InferRequestType<typeof client.caseDocumentOrder.callbacks.$get>,
) {
  return ['caseDocumentOrder', '/caseDocumentOrder/callbacks', args] as const
}

export function useGetCaseDocumentOrderCallbacks<TError = unknown>(
  args: InferRequestType<typeof client.caseDocumentOrder.callbacks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.caseDocumentOrder.callbacks.$get>>>
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
        ? getGetCaseDocumentOrderCallbacksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.caseDocumentOrder.callbacks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseDocumentOrder.callbacks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseDocumentOrderCallbacks<TError = unknown>(
  args: InferRequestType<typeof client.caseDocumentOrder.callbacks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.caseDocumentOrder.callbacks.$get>>>
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
        ? getGetCaseDocumentOrderCallbacksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.caseDocumentOrder.callbacks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseDocumentOrder.callbacks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdKey(
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

export function useGetCaseDocumentOrderCallbacksCaseDocumentOrderCallbackId<TError = unknown>(
  args: InferRequestType<
    (typeof client.caseDocumentOrder.callbacks)[':caseDocumentOrderCallbackId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.caseDocumentOrder.callbacks[':caseDocumentOrderCallbackId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseDocumentOrderCallbacksCaseDocumentOrderCallbackId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.caseDocumentOrder.callbacks)[':caseDocumentOrderCallbackId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.caseDocumentOrder.callbacks[':caseDocumentOrderCallbackId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCaseExportCallbacksKey(
  args: InferRequestType<typeof client.caseExport.callbacks.$get>,
) {
  return ['caseExport', '/caseExport/callbacks', args] as const
}

export function useGetCaseExportCallbacks<TError = unknown>(
  args: InferRequestType<typeof client.caseExport.callbacks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.caseExport.callbacks.$get>>>
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
        ? getGetCaseExportCallbacksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.caseExport.callbacks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseExport.callbacks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseExportCallbacks<TError = unknown>(
  args: InferRequestType<typeof client.caseExport.callbacks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.caseExport.callbacks.$get>>>
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
        ? getGetCaseExportCallbacksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.caseExport.callbacks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseExport.callbacks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseExportCallbacksCaseExportCallbackIdKey(
  args: InferRequestType<(typeof client.caseExport.callbacks)[':caseExportCallbackId']['$get']>,
) {
  return ['caseExport', '/caseExport/callbacks/:caseExportCallbackId', args] as const
}

export function useGetCaseExportCallbacksCaseExportCallbackId<TError = unknown>(
  args: InferRequestType<(typeof client.caseExport.callbacks)[':caseExportCallbackId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.caseExport.callbacks)[':caseExportCallbackId']['$get']>
            >
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
        ? getGetCaseExportCallbacksCaseExportCallbackIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.caseExport.callbacks)[':caseExportCallbackId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.caseExport.callbacks[':caseExportCallbackId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseExportCallbacksCaseExportCallbackId<TError = unknown>(
  args: InferRequestType<(typeof client.caseExport.callbacks)[':caseExportCallbackId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.caseExport.callbacks)[':caseExportCallbackId']['$get']>
            >
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
        ? getGetCaseExportCallbacksCaseExportCallbackIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.caseExport.callbacks)[':caseExportCallbackId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.caseExport.callbacks[':caseExportCallbackId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCaseExportCaseIdKey(
  args: InferRequestType<(typeof client.caseExport)[':caseId']['$get']>,
) {
  return ['caseExport', '/caseExport/:caseId', args] as const
}

export function useGetCaseExportCaseId<TError = unknown>(
  args: InferRequestType<(typeof client.caseExport)[':caseId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.caseExport)[':caseId']['$get']>>>
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
        ? getGetCaseExportCaseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.caseExport)[':caseId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseExport[':caseId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseExportCaseId<TError = unknown>(
  args: InferRequestType<(typeof client.caseExport)[':caseId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.caseExport)[':caseId']['$get']>>>
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
        ? getGetCaseExportCaseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.caseExport)[':caseId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseExport[':caseId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseSearchKey(args: InferRequestType<typeof client.caseSearch.$get>) {
  return ['caseSearch', '/caseSearch', args] as const
}

export function useGetCaseSearch<TError = unknown>(
  args: InferRequestType<typeof client.caseSearch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseSearch.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCaseSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseSearch.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseSearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseSearch<TError = unknown>(
  args: InferRequestType<typeof client.caseSearch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseSearch.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCaseSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseSearch.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseSearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseSearchCaseSearchIdKey(
  args: InferRequestType<(typeof client.caseSearch)[':caseSearchId']['$get']>,
) {
  return ['caseSearch', '/caseSearch/:caseSearchId', args] as const
}

export function useGetCaseSearchCaseSearchId<TError = unknown>(
  args: InferRequestType<(typeof client.caseSearch)[':caseSearchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.caseSearch)[':caseSearchId']['$get']>>
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
        ? getGetCaseSearchCaseSearchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.caseSearch)[':caseSearchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseSearch[':caseSearchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseSearchCaseSearchId<TError = unknown>(
  args: InferRequestType<(typeof client.caseSearch)[':caseSearchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.caseSearch)[':caseSearchId']['$get']>>
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
        ? getGetCaseSearchCaseSearchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.caseSearch)[':caseSearchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseSearch[':caseSearchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCaseTrackKey() {
  return ['caseTrack', '/caseTrack', 'PUT'] as const
}

export function usePutCaseTrack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTrack.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.caseTrack.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCaseTrackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.caseTrack.$put> }) =>
        parseResponse(client.caseTrack.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCaseTrackCaseIdKey(
  args: InferRequestType<(typeof client.caseTrack)[':caseId']['$get']>,
) {
  return ['caseTrack', '/caseTrack/:caseId', args] as const
}

export function useGetCaseTrackCaseId<TError = unknown>(
  args: InferRequestType<(typeof client.caseTrack)[':caseId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.caseTrack)[':caseId']['$get']>>>
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
        ? getGetCaseTrackCaseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.caseTrack)[':caseId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseTrack[':caseId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseTrackCaseId<TError = unknown>(
  args: InferRequestType<(typeof client.caseTrack)[':caseId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.caseTrack)[':caseId']['$get']>>>
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
        ? getGetCaseTrackCaseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.caseTrack)[':caseId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseTrack[':caseId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCaseTrackCaseIdKey() {
  return ['caseTrack', '/caseTrack/:caseId', 'DELETE'] as const
}

export function useDeleteCaseTrackCaseId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.caseTrack)[':caseId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.caseTrack)[':caseId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCaseTrackCaseIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.caseTrack)[':caseId']['$delete']> },
      ) => parseResponse(client.caseTrack[':caseId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCaseTracksKey(args: InferRequestType<typeof client.caseTracks.$get>) {
  return ['caseTracks', '/caseTracks', args] as const
}

export function useGetCaseTracks<TError = unknown>(
  args: InferRequestType<typeof client.caseTracks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTracks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCaseTracksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTracks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseTracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseTracks<TError = unknown>(
  args: InferRequestType<typeof client.caseTracks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTracks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCaseTracksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseTracks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseTracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCaseUpdateKey() {
  return ['caseUpdate', '/caseUpdate', 'PUT'] as const
}

export function usePutCaseUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdate.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.caseUpdate.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCaseUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.caseUpdate.$put> }) =>
        parseResponse(client.caseUpdate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCaseUpdateCaseIdKey(
  args: InferRequestType<(typeof client.caseUpdate)[':caseId']['$get']>,
) {
  return ['caseUpdate', '/caseUpdate/:caseId', args] as const
}

export function useGetCaseUpdateCaseId<TError = unknown>(
  args: InferRequestType<(typeof client.caseUpdate)[':caseId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.caseUpdate)[':caseId']['$get']>>>
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
        ? getGetCaseUpdateCaseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.caseUpdate)[':caseId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseUpdate[':caseId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseUpdateCaseId<TError = unknown>(
  args: InferRequestType<(typeof client.caseUpdate)[':caseId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.caseUpdate)[':caseId']['$get']>>>
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
        ? getGetCaseUpdateCaseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.caseUpdate)[':caseId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseUpdate[':caseId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCaseUpdatesKey(args: InferRequestType<typeof client.caseUpdates.$get>) {
  return ['caseUpdates', '/caseUpdates', args] as const
}

export function useGetCaseUpdates<TError = unknown>(
  args: InferRequestType<typeof client.caseUpdates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCaseUpdatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseUpdates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCaseUpdates<TError = unknown>(
  args: InferRequestType<typeof client.caseUpdates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCaseUpdatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.caseUpdates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.caseUpdates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCourtCoverageCourtIdKey(
  args: InferRequestType<(typeof client.courtCoverage)[':courtId']['$get']>,
) {
  return ['courtCoverage', '/courtCoverage/:courtId', args] as const
}

export function useGetCourtCoverageCourtId<TError = unknown>(
  args: InferRequestType<(typeof client.courtCoverage)[':courtId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.courtCoverage)[':courtId']['$get']>>
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
        ? getGetCourtCoverageCourtIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.courtCoverage)[':courtId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.courtCoverage[':courtId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCourtCoverageCourtId<TError = unknown>(
  args: InferRequestType<(typeof client.courtCoverage)[':courtId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.courtCoverage)[':courtId']['$get']>>
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
        ? getGetCourtCoverageCourtIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.courtCoverage)[':courtId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.courtCoverage[':courtId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDailyUsageDateKey(
  args: InferRequestType<(typeof client.dailyUsage)[':date']['$get']>,
) {
  return ['dailyUsage', '/dailyUsage/:date', args] as const
}

export function useGetDailyUsageDate<TError = unknown>(
  args: InferRequestType<(typeof client.dailyUsage)[':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dailyUsage)[':date']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDailyUsageDateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dailyUsage)[':date']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dailyUsage[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDailyUsageDate<TError = unknown>(
  args: InferRequestType<(typeof client.dailyUsage)[':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dailyUsage)[':date']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDailyUsageDateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dailyUsage)[':date']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dailyUsage[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGenerateNewTokenKey() {
  return ['generateNewToken', '/generateNewToken', 'POST'] as const
}

export function usePostGenerateNewToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generateNewToken.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.generateNewToken.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGenerateNewTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.generateNewToken.$post> }) =>
        parseResponse(client.generateNewToken.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutInvalidateAllTokensKey() {
  return ['invalidateAllTokens', '/invalidateAllTokens', 'PUT'] as const
}

export function usePutInvalidateAllTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invalidateAllTokens.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.invalidateAllTokens.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInvalidateAllTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invalidateAllTokens.$put> }) =>
        parseResponse(client.invalidateAllTokens.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutInvalidateTokenKey() {
  return ['invalidateToken', '/invalidateToken', 'PUT'] as const
}

export function usePutInvalidateToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invalidateToken.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.invalidateToken.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInvalidateTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invalidateToken.$put> }) =>
        parseResponse(client.invalidateToken.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJudgeJudgeIdKey(
  args: InferRequestType<(typeof client.judge)[':judgeId']['$get']>,
) {
  return ['judge', '/judge/:judgeId', args] as const
}

export function useGetJudgeJudgeId<TError = unknown>(
  args: InferRequestType<(typeof client.judge)[':judgeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.judge)[':judgeId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetJudgeJudgeIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.judge)[':judgeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.judge[':judgeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJudgeJudgeId<TError = unknown>(
  args: InferRequestType<(typeof client.judge)[':judgeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.judge)[':judgeId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetJudgeJudgeIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.judge)[':judgeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.judge[':judgeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutListAllTokenIdsKey() {
  return ['listAllTokenIds', '/listAllTokenIds', 'PUT'] as const
}

export function usePutListAllTokenIds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllTokenIds.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listAllTokenIds.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutListAllTokenIdsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listAllTokenIds.$put> }) =>
        parseResponse(client.listAllTokenIds.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMasterDataAreaOfLawKey(
  args: InferRequestType<typeof client.masterData.areaOfLaw.$get>,
) {
  return ['masterData', '/masterData/areaOfLaw', args] as const
}

export function useGetMasterDataAreaOfLaw<TError = unknown>(
  args: InferRequestType<typeof client.masterData.areaOfLaw.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.areaOfLaw.$get>>>
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
        ? getGetMasterDataAreaOfLawKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.areaOfLaw.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.areaOfLaw.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataAreaOfLaw<TError = unknown>(
  args: InferRequestType<typeof client.masterData.areaOfLaw.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.areaOfLaw.$get>>>
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
        ? getGetMasterDataAreaOfLawKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.areaOfLaw.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.areaOfLaw.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataAreaOfLawAreaOfLawIdKey(
  args: InferRequestType<(typeof client.masterData.areaOfLaw)[':areaOfLawId']['$get']>,
) {
  return ['masterData', '/masterData/areaOfLaw/:areaOfLawId', args] as const
}

export function useGetMasterDataAreaOfLawAreaOfLawId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.areaOfLaw)[':areaOfLawId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.areaOfLaw)[':areaOfLawId']['$get']>>
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
        ? getGetMasterDataAreaOfLawAreaOfLawIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.areaOfLaw)[':areaOfLawId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.areaOfLaw[':areaOfLawId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataAreaOfLawAreaOfLawId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.areaOfLaw)[':areaOfLawId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.areaOfLaw)[':areaOfLawId']['$get']>>
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
        ? getGetMasterDataAreaOfLawAreaOfLawIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.areaOfLaw)[':areaOfLawId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.areaOfLaw[':areaOfLawId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataAttorneyRepresentationTypeKey(
  args: InferRequestType<typeof client.masterData.attorneyRepresentationType.$get>,
) {
  return ['masterData', '/masterData/attorneyRepresentationType', args] as const
}

export function useGetMasterDataAttorneyRepresentationType<TError = unknown>(
  args: InferRequestType<typeof client.masterData.attorneyRepresentationType.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.attorneyRepresentationType.$get>>
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
        ? getGetMasterDataAttorneyRepresentationTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.attorneyRepresentationType.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.attorneyRepresentationType.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataAttorneyRepresentationType<TError = unknown>(
  args: InferRequestType<typeof client.masterData.attorneyRepresentationType.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.attorneyRepresentationType.$get>>
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
        ? getGetMasterDataAttorneyRepresentationTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.attorneyRepresentationType.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.attorneyRepresentationType.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdKey(
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

export function useGetMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.masterData.attorneyRepresentationType)[':attorneyRepresentationTypeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.attorneyRepresentationType[':attorneyRepresentationTypeId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.masterData.attorneyRepresentationType)[':attorneyRepresentationTypeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.attorneyRepresentationType[':attorneyRepresentationTypeId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataAttorneyTypeKey(
  args: InferRequestType<typeof client.masterData.attorneyType.$get>,
) {
  return ['masterData', '/masterData/attorneyType', args] as const
}

export function useGetMasterDataAttorneyType<TError = unknown>(
  args: InferRequestType<typeof client.masterData.attorneyType.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.attorneyType.$get>>>
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
        ? getGetMasterDataAttorneyTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.attorneyType.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.attorneyType.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataAttorneyType<TError = unknown>(
  args: InferRequestType<typeof client.masterData.attorneyType.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.attorneyType.$get>>>
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
        ? getGetMasterDataAttorneyTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.attorneyType.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.attorneyType.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataAttorneyTypeAttorneyTypeIdKey(
  args: InferRequestType<(typeof client.masterData.attorneyType)[':attorneyTypeId']['$get']>,
) {
  return ['masterData', '/masterData/attorneyType/:attorneyTypeId', args] as const
}

export function useGetMasterDataAttorneyTypeAttorneyTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.attorneyType)[':attorneyTypeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.attorneyType)[':attorneyTypeId']['$get']>>
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
        ? getGetMasterDataAttorneyTypeAttorneyTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.attorneyType)[':attorneyTypeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.attorneyType[':attorneyTypeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataAttorneyTypeAttorneyTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.attorneyType)[':attorneyTypeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.attorneyType)[':attorneyTypeId']['$get']>>
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
        ? getGetMasterDataAttorneyTypeAttorneyTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.attorneyType)[':attorneyTypeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.attorneyType[':attorneyTypeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCaseClassKey(
  args: InferRequestType<typeof client.masterData.caseClass.$get>,
) {
  return ['masterData', '/masterData/caseClass', args] as const
}

export function useGetMasterDataCaseClass<TError = unknown>(
  args: InferRequestType<typeof client.masterData.caseClass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseClass.$get>>>
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
        ? getGetMasterDataCaseClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseClass.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.caseClass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCaseClass<TError = unknown>(
  args: InferRequestType<typeof client.masterData.caseClass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseClass.$get>>>
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
        ? getGetMasterDataCaseClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseClass.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.caseClass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCaseClassCaseClassIdKey(
  args: InferRequestType<(typeof client.masterData.caseClass)[':caseClassId']['$get']>,
) {
  return ['masterData', '/masterData/caseClass/:caseClassId', args] as const
}

export function useGetMasterDataCaseClassCaseClassId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.caseClass)[':caseClassId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.caseClass)[':caseClassId']['$get']>>
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
        ? getGetMasterDataCaseClassCaseClassIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.caseClass)[':caseClassId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.caseClass[':caseClassId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCaseClassCaseClassId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.caseClass)[':caseClassId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.caseClass)[':caseClassId']['$get']>>
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
        ? getGetMasterDataCaseClassCaseClassIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.caseClass)[':caseClassId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.caseClass[':caseClassId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCaseRelationshipTypeKey(
  args: InferRequestType<typeof client.masterData.caseRelationshipType.$get>,
) {
  return ['masterData', '/masterData/caseRelationshipType', args] as const
}

export function useGetMasterDataCaseRelationshipType<TError = unknown>(
  args: InferRequestType<typeof client.masterData.caseRelationshipType.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.caseRelationshipType.$get>>
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
        ? getGetMasterDataCaseRelationshipTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.caseRelationshipType.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.caseRelationshipType.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCaseRelationshipType<TError = unknown>(
  args: InferRequestType<typeof client.masterData.caseRelationshipType.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.caseRelationshipType.$get>>
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
        ? getGetMasterDataCaseRelationshipTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.caseRelationshipType.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.caseRelationshipType.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCaseRelationshipTypeCaseRelationshipTypeIdKey(
  args: InferRequestType<
    (typeof client.masterData.caseRelationshipType)[':caseRelationshipTypeId']['$get']
  >,
) {
  return ['masterData', '/masterData/caseRelationshipType/:caseRelationshipTypeId', args] as const
}

export function useGetMasterDataCaseRelationshipTypeCaseRelationshipTypeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.masterData.caseRelationshipType)[':caseRelationshipTypeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMasterDataCaseRelationshipTypeCaseRelationshipTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.caseRelationshipType[':caseRelationshipTypeId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCaseRelationshipTypeCaseRelationshipTypeId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.masterData.caseRelationshipType)[':caseRelationshipTypeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMasterDataCaseRelationshipTypeCaseRelationshipTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.caseRelationshipType[':caseRelationshipTypeId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCaseStatusKey(
  args: InferRequestType<typeof client.masterData.caseStatus.$get>,
) {
  return ['masterData', '/masterData/caseStatus', args] as const
}

export function useGetMasterDataCaseStatus<TError = unknown>(
  args: InferRequestType<typeof client.masterData.caseStatus.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatus.$get>>>
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
        ? getGetMasterDataCaseStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatus.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.caseStatus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCaseStatus<TError = unknown>(
  args: InferRequestType<typeof client.masterData.caseStatus.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatus.$get>>>
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
        ? getGetMasterDataCaseStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatus.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.caseStatus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCaseStatusCaseStatusIdKey(
  args: InferRequestType<(typeof client.masterData.caseStatus)[':caseStatusId']['$get']>,
) {
  return ['masterData', '/masterData/caseStatus/:caseStatusId', args] as const
}

export function useGetMasterDataCaseStatusCaseStatusId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.caseStatus)[':caseStatusId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.caseStatus)[':caseStatusId']['$get']>>
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
        ? getGetMasterDataCaseStatusCaseStatusIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.caseStatus)[':caseStatusId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.caseStatus[':caseStatusId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCaseStatusCaseStatusId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.caseStatus)[':caseStatusId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.caseStatus)[':caseStatusId']['$get']>>
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
        ? getGetMasterDataCaseStatusCaseStatusIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.caseStatus)[':caseStatusId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.caseStatus[':caseStatusId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCaseStatusGroupKey(
  args: InferRequestType<typeof client.masterData.caseStatusGroup.$get>,
) {
  return ['masterData', '/masterData/caseStatusGroup', args] as const
}

export function useGetMasterDataCaseStatusGroup<TError = unknown>(
  args: InferRequestType<typeof client.masterData.caseStatusGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatusGroup.$get>>>
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
        ? getGetMasterDataCaseStatusGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatusGroup.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.caseStatusGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCaseStatusGroup<TError = unknown>(
  args: InferRequestType<typeof client.masterData.caseStatusGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatusGroup.$get>>>
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
        ? getGetMasterDataCaseStatusGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseStatusGroup.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.caseStatusGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCaseStatusGroupCaseStatusGroupIdKey(
  args: InferRequestType<(typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']>,
) {
  return ['masterData', '/masterData/caseStatusGroup/:caseStatusGroupId', args] as const
}

export function useGetMasterDataCaseStatusGroupCaseStatusGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']>
            >
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
        ? getGetMasterDataCaseStatusGroupCaseStatusGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.caseStatusGroup[':caseStatusGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCaseStatusGroupCaseStatusGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']>
            >
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
        ? getGetMasterDataCaseStatusGroupCaseStatusGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.caseStatusGroup[':caseStatusGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCaseTypeKey(
  args: InferRequestType<typeof client.masterData.caseType.$get>,
) {
  return ['masterData', '/masterData/caseType', args] as const
}

export function useGetMasterDataCaseType<TError = unknown>(
  args: InferRequestType<typeof client.masterData.caseType.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseType.$get>>>
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
        ? getGetMasterDataCaseTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseType.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.caseType.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCaseType<TError = unknown>(
  args: InferRequestType<typeof client.masterData.caseType.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseType.$get>>>
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
        ? getGetMasterDataCaseTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseType.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.caseType.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCaseTypeCaseTypeIdKey(
  args: InferRequestType<(typeof client.masterData.caseType)[':caseTypeId']['$get']>,
) {
  return ['masterData', '/masterData/caseType/:caseTypeId', args] as const
}

export function useGetMasterDataCaseTypeCaseTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.caseType)[':caseTypeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.caseType)[':caseTypeId']['$get']>>
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
        ? getGetMasterDataCaseTypeCaseTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.caseType)[':caseTypeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.caseType[':caseTypeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCaseTypeCaseTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.caseType)[':caseTypeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.caseType)[':caseTypeId']['$get']>>
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
        ? getGetMasterDataCaseTypeCaseTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.caseType)[':caseTypeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.caseType[':caseTypeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCaseTypeGroupKey(
  args: InferRequestType<typeof client.masterData.caseTypeGroup.$get>,
) {
  return ['masterData', '/masterData/caseTypeGroup', args] as const
}

export function useGetMasterDataCaseTypeGroup<TError = unknown>(
  args: InferRequestType<typeof client.masterData.caseTypeGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseTypeGroup.$get>>>
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
        ? getGetMasterDataCaseTypeGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseTypeGroup.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.caseTypeGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCaseTypeGroup<TError = unknown>(
  args: InferRequestType<typeof client.masterData.caseTypeGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseTypeGroup.$get>>>
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
        ? getGetMasterDataCaseTypeGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.caseTypeGroup.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.caseTypeGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCaseTypeGroupCaseTypeGroupIdKey(
  args: InferRequestType<(typeof client.masterData.caseTypeGroup)[':caseTypeGroupId']['$get']>,
) {
  return ['masterData', '/masterData/caseTypeGroup/:caseTypeGroupId', args] as const
}

export function useGetMasterDataCaseTypeGroupCaseTypeGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.caseTypeGroup)[':caseTypeGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.caseTypeGroup)[':caseTypeGroupId']['$get']>
            >
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
        ? getGetMasterDataCaseTypeGroupCaseTypeGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.caseTypeGroup)[':caseTypeGroupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.caseTypeGroup[':caseTypeGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCaseTypeGroupCaseTypeGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.caseTypeGroup)[':caseTypeGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.caseTypeGroup)[':caseTypeGroupId']['$get']>
            >
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
        ? getGetMasterDataCaseTypeGroupCaseTypeGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.caseTypeGroup)[':caseTypeGroupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.caseTypeGroup[':caseTypeGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCauseOfActionKey(
  args: InferRequestType<typeof client.masterData.causeOfAction.$get>,
) {
  return ['masterData', '/masterData/causeOfAction', args] as const
}

export function useGetMasterDataCauseOfAction<TError = unknown>(
  args: InferRequestType<typeof client.masterData.causeOfAction.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfAction.$get>>>
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
        ? getGetMasterDataCauseOfActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfAction.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.causeOfAction.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCauseOfAction<TError = unknown>(
  args: InferRequestType<typeof client.masterData.causeOfAction.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfAction.$get>>>
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
        ? getGetMasterDataCauseOfActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.causeOfAction.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.causeOfAction.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCauseOfActionCauseOfActionIdKey(
  args: InferRequestType<(typeof client.masterData.causeOfAction)[':causeOfActionId']['$get']>,
) {
  return ['masterData', '/masterData/causeOfAction/:causeOfActionId', args] as const
}

export function useGetMasterDataCauseOfActionCauseOfActionId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.causeOfAction)[':causeOfActionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.causeOfAction)[':causeOfActionId']['$get']>
            >
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
        ? getGetMasterDataCauseOfActionCauseOfActionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.causeOfAction)[':causeOfActionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.causeOfAction[':causeOfActionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCauseOfActionCauseOfActionId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.causeOfAction)[':causeOfActionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.causeOfAction)[':causeOfActionId']['$get']>
            >
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
        ? getGetMasterDataCauseOfActionCauseOfActionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.causeOfAction)[':causeOfActionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.causeOfAction[':causeOfActionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCauseOfActionAdditionalDataKey(
  args: InferRequestType<typeof client.masterData.causeOfActionAdditionalData.$get>,
) {
  return ['masterData', '/masterData/causeOfActionAdditionalData', args] as const
}

export function useGetMasterDataCauseOfActionAdditionalData<TError = unknown>(
  args: InferRequestType<typeof client.masterData.causeOfActionAdditionalData.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.causeOfActionAdditionalData.$get>>
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
        ? getGetMasterDataCauseOfActionAdditionalDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.causeOfActionAdditionalData.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.causeOfActionAdditionalData.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCauseOfActionAdditionalData<TError = unknown>(
  args: InferRequestType<typeof client.masterData.causeOfActionAdditionalData.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.causeOfActionAdditionalData.$get>>
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
        ? getGetMasterDataCauseOfActionAdditionalDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.causeOfActionAdditionalData.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.causeOfActionAdditionalData.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdKey(
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

export function useGetMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.masterData.causeOfActionAdditionalData)[':causeOfActionAdditionalDataId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.causeOfActionAdditionalData[':causeOfActionAdditionalDataId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.masterData.causeOfActionAdditionalData)[':causeOfActionAdditionalDataId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.causeOfActionAdditionalData[':causeOfActionAdditionalDataId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCauseOfActionGroupKey(
  args: InferRequestType<typeof client.masterData.causeOfActionGroup.$get>,
) {
  return ['masterData', '/masterData/causeOfActionGroup', args] as const
}

export function useGetMasterDataCauseOfActionGroup<TError = unknown>(
  args: InferRequestType<typeof client.masterData.causeOfActionGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.causeOfActionGroup.$get>>
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
        ? getGetMasterDataCauseOfActionGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.causeOfActionGroup.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.causeOfActionGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCauseOfActionGroup<TError = unknown>(
  args: InferRequestType<typeof client.masterData.causeOfActionGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.causeOfActionGroup.$get>>
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
        ? getGetMasterDataCauseOfActionGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.causeOfActionGroup.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.causeOfActionGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCauseOfActionGroupCauseOfActionGroupIdKey(
  args: InferRequestType<
    (typeof client.masterData.causeOfActionGroup)[':causeOfActionGroupId']['$get']
  >,
) {
  return ['masterData', '/masterData/causeOfActionGroup/:causeOfActionGroupId', args] as const
}

export function useGetMasterDataCauseOfActionGroupCauseOfActionGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.masterData.causeOfActionGroup)[':causeOfActionGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMasterDataCauseOfActionGroupCauseOfActionGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.causeOfActionGroup[':causeOfActionGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCauseOfActionGroupCauseOfActionGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.masterData.causeOfActionGroup)[':causeOfActionGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMasterDataCauseOfActionGroupCauseOfActionGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.causeOfActionGroup[':causeOfActionGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataChargeKey(
  args: InferRequestType<typeof client.masterData.charge.$get>,
) {
  return ['masterData', '/masterData/charge', args] as const
}

export function useGetMasterDataCharge<TError = unknown>(
  args: InferRequestType<typeof client.masterData.charge.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.charge.$get>>>>
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
        ? getGetMasterDataChargeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.charge.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.charge.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCharge<TError = unknown>(
  args: InferRequestType<typeof client.masterData.charge.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.charge.$get>>>>
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
        ? getGetMasterDataChargeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.charge.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.charge.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataChargeChargeIdKey(
  args: InferRequestType<(typeof client.masterData.charge)[':chargeId']['$get']>,
) {
  return ['masterData', '/masterData/charge/:chargeId', args] as const
}

export function useGetMasterDataChargeChargeId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.charge)[':chargeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.charge)[':chargeId']['$get']>>
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
        ? getGetMasterDataChargeChargeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.charge)[':chargeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.charge[':chargeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataChargeChargeId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.charge)[':chargeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.charge)[':chargeId']['$get']>>
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
        ? getGetMasterDataChargeChargeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.charge)[':chargeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.charge[':chargeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataChargeAdditionalDataKey(
  args: InferRequestType<typeof client.masterData.chargeAdditionalData.$get>,
) {
  return ['masterData', '/masterData/chargeAdditionalData', args] as const
}

export function useGetMasterDataChargeAdditionalData<TError = unknown>(
  args: InferRequestType<typeof client.masterData.chargeAdditionalData.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.chargeAdditionalData.$get>>
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
        ? getGetMasterDataChargeAdditionalDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.chargeAdditionalData.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.chargeAdditionalData.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataChargeAdditionalData<TError = unknown>(
  args: InferRequestType<typeof client.masterData.chargeAdditionalData.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.chargeAdditionalData.$get>>
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
        ? getGetMasterDataChargeAdditionalDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.chargeAdditionalData.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.chargeAdditionalData.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataChargeAdditionalDataChargeAdditionalDataIdKey(
  args: InferRequestType<
    (typeof client.masterData.chargeAdditionalData)[':chargeAdditionalDataId']['$get']
  >,
) {
  return ['masterData', '/masterData/chargeAdditionalData/:chargeAdditionalDataId', args] as const
}

export function useGetMasterDataChargeAdditionalDataChargeAdditionalDataId<TError = unknown>(
  args: InferRequestType<
    (typeof client.masterData.chargeAdditionalData)[':chargeAdditionalDataId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMasterDataChargeAdditionalDataChargeAdditionalDataIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.chargeAdditionalData[':chargeAdditionalDataId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataChargeAdditionalDataChargeAdditionalDataId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.masterData.chargeAdditionalData)[':chargeAdditionalDataId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMasterDataChargeAdditionalDataChargeAdditionalDataIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.chargeAdditionalData[':chargeAdditionalDataId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataChargeDegreeKey(
  args: InferRequestType<typeof client.masterData.chargeDegree.$get>,
) {
  return ['masterData', '/masterData/chargeDegree', args] as const
}

export function useGetMasterDataChargeDegree<TError = unknown>(
  args: InferRequestType<typeof client.masterData.chargeDegree.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeDegree.$get>>>
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
        ? getGetMasterDataChargeDegreeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeDegree.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.chargeDegree.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataChargeDegree<TError = unknown>(
  args: InferRequestType<typeof client.masterData.chargeDegree.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeDegree.$get>>>
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
        ? getGetMasterDataChargeDegreeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeDegree.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.chargeDegree.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataChargeDegreeChargeDegreeIdKey(
  args: InferRequestType<(typeof client.masterData.chargeDegree)[':chargeDegreeId']['$get']>,
) {
  return ['masterData', '/masterData/chargeDegree/:chargeDegreeId', args] as const
}

export function useGetMasterDataChargeDegreeChargeDegreeId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.chargeDegree)[':chargeDegreeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.chargeDegree)[':chargeDegreeId']['$get']>>
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
        ? getGetMasterDataChargeDegreeChargeDegreeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.chargeDegree)[':chargeDegreeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.chargeDegree[':chargeDegreeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataChargeDegreeChargeDegreeId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.chargeDegree)[':chargeDegreeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.chargeDegree)[':chargeDegreeId']['$get']>>
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
        ? getGetMasterDataChargeDegreeChargeDegreeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.chargeDegree)[':chargeDegreeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.chargeDegree[':chargeDegreeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataChargeGroupKey(
  args: InferRequestType<typeof client.masterData.chargeGroup.$get>,
) {
  return ['masterData', '/masterData/chargeGroup', args] as const
}

export function useGetMasterDataChargeGroup<TError = unknown>(
  args: InferRequestType<typeof client.masterData.chargeGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeGroup.$get>>>
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
        ? getGetMasterDataChargeGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeGroup.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.chargeGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataChargeGroup<TError = unknown>(
  args: InferRequestType<typeof client.masterData.chargeGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeGroup.$get>>>
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
        ? getGetMasterDataChargeGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeGroup.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.chargeGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataChargeGroupChargeGroupIdKey(
  args: InferRequestType<(typeof client.masterData.chargeGroup)[':chargeGroupId']['$get']>,
) {
  return ['masterData', '/masterData/chargeGroup/:chargeGroupId', args] as const
}

export function useGetMasterDataChargeGroupChargeGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.chargeGroup)[':chargeGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.chargeGroup)[':chargeGroupId']['$get']>>
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
        ? getGetMasterDataChargeGroupChargeGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.chargeGroup)[':chargeGroupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.chargeGroup[':chargeGroupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataChargeGroupChargeGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.chargeGroup)[':chargeGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.chargeGroup)[':chargeGroupId']['$get']>>
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
        ? getGetMasterDataChargeGroupChargeGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.chargeGroup)[':chargeGroupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.chargeGroup[':chargeGroupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataChargeSeverityKey(
  args: InferRequestType<typeof client.masterData.chargeSeverity.$get>,
) {
  return ['masterData', '/masterData/chargeSeverity', args] as const
}

export function useGetMasterDataChargeSeverity<TError = unknown>(
  args: InferRequestType<typeof client.masterData.chargeSeverity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeSeverity.$get>>>
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
        ? getGetMasterDataChargeSeverityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeSeverity.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.chargeSeverity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataChargeSeverity<TError = unknown>(
  args: InferRequestType<typeof client.masterData.chargeSeverity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeSeverity.$get>>>
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
        ? getGetMasterDataChargeSeverityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.chargeSeverity.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.chargeSeverity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataChargeSeverityChargeSeverityIdKey(
  args: InferRequestType<(typeof client.masterData.chargeSeverity)[':chargeSeverityId']['$get']>,
) {
  return ['masterData', '/masterData/chargeSeverity/:chargeSeverityId', args] as const
}

export function useGetMasterDataChargeSeverityChargeSeverityId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.chargeSeverity)[':chargeSeverityId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.chargeSeverity)[':chargeSeverityId']['$get']>
            >
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
        ? getGetMasterDataChargeSeverityChargeSeverityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.chargeSeverity)[':chargeSeverityId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.chargeSeverity[':chargeSeverityId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataChargeSeverityChargeSeverityId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.chargeSeverity)[':chargeSeverityId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.chargeSeverity)[':chargeSeverityId']['$get']>
            >
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
        ? getGetMasterDataChargeSeverityChargeSeverityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.chargeSeverity)[':chargeSeverityId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.chargeSeverity[':chargeSeverityId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCourtKey(
  args: InferRequestType<typeof client.masterData.court.$get>,
) {
  return ['masterData', '/masterData/court', args] as const
}

export function useGetMasterDataCourt<TError = unknown>(
  args: InferRequestType<typeof client.masterData.court.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.court.$get>>>>
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
        ? getGetMasterDataCourtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.court.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.court.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCourt<TError = unknown>(
  args: InferRequestType<typeof client.masterData.court.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.court.$get>>>>
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
        ? getGetMasterDataCourtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.masterData.court.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.court.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCourtCourtIdKey(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['$get']>,
) {
  return ['masterData', '/masterData/court/:courtId', args] as const
}

export function useGetMasterDataCourtCourtId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.court)[':courtId']['$get']>>
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
        ? getGetMasterDataCourtCourtIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.court)[':courtId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.court[':courtId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCourtCourtId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.court)[':courtId']['$get']>>
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
        ? getGetMasterDataCourtCourtIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.court)[':courtId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.court[':courtId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCourtCourtIdAppealCourtsKey(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['appealCourts']['$get']>,
) {
  return ['masterData', '/masterData/court/:courtId/appealCourts', args] as const
}

export function useGetMasterDataCourtCourtIdAppealCourts<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['appealCourts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.court)[':courtId']['appealCourts']['$get']>
            >
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
        ? getGetMasterDataCourtCourtIdAppealCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.court)[':courtId']['appealCourts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.court[':courtId'].appealCourts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCourtCourtIdAppealCourts<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['appealCourts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.court)[':courtId']['appealCourts']['$get']>
            >
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
        ? getGetMasterDataCourtCourtIdAppealCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.court)[':courtId']['appealCourts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.court[':courtId'].appealCourts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCourtCourtIdCourtLocationsKey(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['courtLocations']['$get']>,
) {
  return ['masterData', '/masterData/court/:courtId/courtLocations', args] as const
}

export function useGetMasterDataCourtCourtIdCourtLocations<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['courtLocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.court)[':courtId']['courtLocations']['$get']>
            >
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
        ? getGetMasterDataCourtCourtIdCourtLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.court)[':courtId']['courtLocations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.court[':courtId'].courtLocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCourtCourtIdCourtLocations<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['courtLocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.court)[':courtId']['courtLocations']['$get']>
            >
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
        ? getGetMasterDataCourtCourtIdCourtLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.court)[':courtId']['courtLocations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.court[':courtId'].courtLocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCourtCourtIdJurisdictionGeoKey(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']>,
) {
  return ['masterData', '/masterData/court/:courtId/jurisdictionGeo', args] as const
}

export function useGetMasterDataCourtCourtIdJurisdictionGeo<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']>
            >
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
        ? getGetMasterDataCourtCourtIdJurisdictionGeoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.court[':courtId'].jurisdictionGeo.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCourtCourtIdJurisdictionGeo<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']>
            >
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
        ? getGetMasterDataCourtCourtIdJurisdictionGeoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.court[':courtId'].jurisdictionGeo.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCourtLocationKey(
  args: InferRequestType<typeof client.masterData.courtLocation.$get>,
) {
  return ['masterData', '/masterData/courtLocation', args] as const
}

export function useGetMasterDataCourtLocation<TError = unknown>(
  args: InferRequestType<typeof client.masterData.courtLocation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtLocation.$get>>>
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
        ? getGetMasterDataCourtLocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtLocation.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.courtLocation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCourtLocation<TError = unknown>(
  args: InferRequestType<typeof client.masterData.courtLocation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtLocation.$get>>>
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
        ? getGetMasterDataCourtLocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtLocation.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.courtLocation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCourtLocationCourtLocationIdKey(
  args: InferRequestType<(typeof client.masterData.courtLocation)[':courtLocationId']['$get']>,
) {
  return ['masterData', '/masterData/courtLocation/:courtLocationId', args] as const
}

export function useGetMasterDataCourtLocationCourtLocationId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.courtLocation)[':courtLocationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.courtLocation)[':courtLocationId']['$get']>
            >
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
        ? getGetMasterDataCourtLocationCourtLocationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.courtLocation)[':courtLocationId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.courtLocation[':courtLocationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCourtLocationCourtLocationId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.courtLocation)[':courtLocationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.courtLocation)[':courtLocationId']['$get']>
            >
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
        ? getGetMasterDataCourtLocationCourtLocationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.courtLocation)[':courtLocationId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.courtLocation[':courtLocationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCourtLocationCourtLocationIdCourtsKey(
  args: InferRequestType<
    (typeof client.masterData.courtLocation)[':courtLocationId']['courts']['$get']
  >,
) {
  return ['masterData', '/masterData/courtLocation/:courtLocationId/courts', args] as const
}

export function useGetMasterDataCourtLocationCourtLocationIdCourts<TError = unknown>(
  args: InferRequestType<
    (typeof client.masterData.courtLocation)[':courtLocationId']['courts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMasterDataCourtLocationCourtLocationIdCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.courtLocation[':courtLocationId'].courts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCourtLocationCourtLocationIdCourts<TError = unknown>(
  args: InferRequestType<
    (typeof client.masterData.courtLocation)[':courtLocationId']['courts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMasterDataCourtLocationCourtLocationIdCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.courtLocation[':courtLocationId'].courts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCourtServiceStatusKey(
  args: InferRequestType<typeof client.masterData.courtServiceStatus.$get>,
) {
  return ['masterData', '/masterData/courtServiceStatus', args] as const
}

export function useGetMasterDataCourtServiceStatus<TError = unknown>(
  args: InferRequestType<typeof client.masterData.courtServiceStatus.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.courtServiceStatus.$get>>
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
        ? getGetMasterDataCourtServiceStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.courtServiceStatus.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.courtServiceStatus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCourtServiceStatus<TError = unknown>(
  args: InferRequestType<typeof client.masterData.courtServiceStatus.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.courtServiceStatus.$get>>
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
        ? getGetMasterDataCourtServiceStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.masterData.courtServiceStatus.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.courtServiceStatus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCourtServiceStatusCourtServiceStatusIdKey(
  args: InferRequestType<
    (typeof client.masterData.courtServiceStatus)[':courtServiceStatusId']['$get']
  >,
) {
  return ['masterData', '/masterData/courtServiceStatus/:courtServiceStatusId', args] as const
}

export function useGetMasterDataCourtServiceStatusCourtServiceStatusId<TError = unknown>(
  args: InferRequestType<
    (typeof client.masterData.courtServiceStatus)[':courtServiceStatusId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMasterDataCourtServiceStatusCourtServiceStatusIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.courtServiceStatus[':courtServiceStatusId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCourtServiceStatusCourtServiceStatusId<TError = unknown>(
  args: InferRequestType<
    (typeof client.masterData.courtServiceStatus)[':courtServiceStatusId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMasterDataCourtServiceStatusCourtServiceStatusIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.courtServiceStatus[':courtServiceStatusId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCourtSystemKey(
  args: InferRequestType<typeof client.masterData.courtSystem.$get>,
) {
  return ['masterData', '/masterData/courtSystem', args] as const
}

export function useGetMasterDataCourtSystem<TError = unknown>(
  args: InferRequestType<typeof client.masterData.courtSystem.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtSystem.$get>>>
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
        ? getGetMasterDataCourtSystemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtSystem.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.courtSystem.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCourtSystem<TError = unknown>(
  args: InferRequestType<typeof client.masterData.courtSystem.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtSystem.$get>>>
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
        ? getGetMasterDataCourtSystemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtSystem.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.courtSystem.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCourtSystemCourtSystemIdKey(
  args: InferRequestType<(typeof client.masterData.courtSystem)[':courtSystemId']['$get']>,
) {
  return ['masterData', '/masterData/courtSystem/:courtSystemId', args] as const
}

export function useGetMasterDataCourtSystemCourtSystemId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.courtSystem)[':courtSystemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.courtSystem)[':courtSystemId']['$get']>>
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
        ? getGetMasterDataCourtSystemCourtSystemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.courtSystem)[':courtSystemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.courtSystem[':courtSystemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCourtSystemCourtSystemId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.courtSystem)[':courtSystemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.courtSystem)[':courtSystemId']['$get']>>
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
        ? getGetMasterDataCourtSystemCourtSystemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.courtSystem)[':courtSystemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.courtSystem[':courtSystemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCourtTypeKey(
  args: InferRequestType<typeof client.masterData.courtType.$get>,
) {
  return ['masterData', '/masterData/courtType', args] as const
}

export function useGetMasterDataCourtType<TError = unknown>(
  args: InferRequestType<typeof client.masterData.courtType.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtType.$get>>>
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
        ? getGetMasterDataCourtTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtType.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.courtType.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCourtType<TError = unknown>(
  args: InferRequestType<typeof client.masterData.courtType.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtType.$get>>>
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
        ? getGetMasterDataCourtTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.courtType.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.courtType.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataCourtTypeCourtTypeIdKey(
  args: InferRequestType<(typeof client.masterData.courtType)[':courtTypeId']['$get']>,
) {
  return ['masterData', '/masterData/courtType/:courtTypeId', args] as const
}

export function useGetMasterDataCourtTypeCourtTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.courtType)[':courtTypeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.courtType)[':courtTypeId']['$get']>>
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
        ? getGetMasterDataCourtTypeCourtTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.courtType)[':courtTypeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.courtType[':courtTypeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataCourtTypeCourtTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.courtType)[':courtTypeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.courtType)[':courtTypeId']['$get']>>
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
        ? getGetMasterDataCourtTypeCourtTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.courtType)[':courtTypeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.courtType[':courtTypeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataJudgeTypeKey(
  args: InferRequestType<typeof client.masterData.judgeType.$get>,
) {
  return ['masterData', '/masterData/judgeType', args] as const
}

export function useGetMasterDataJudgeType<TError = unknown>(
  args: InferRequestType<typeof client.masterData.judgeType.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.judgeType.$get>>>
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
        ? getGetMasterDataJudgeTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.judgeType.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.judgeType.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataJudgeType<TError = unknown>(
  args: InferRequestType<typeof client.masterData.judgeType.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.judgeType.$get>>>
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
        ? getGetMasterDataJudgeTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.judgeType.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.judgeType.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataJudgeTypeJudgeTypeIdKey(
  args: InferRequestType<(typeof client.masterData.judgeType)[':judgeTypeId']['$get']>,
) {
  return ['masterData', '/masterData/judgeType/:judgeTypeId', args] as const
}

export function useGetMasterDataJudgeTypeJudgeTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.judgeType)[':judgeTypeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.judgeType)[':judgeTypeId']['$get']>>
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
        ? getGetMasterDataJudgeTypeJudgeTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.judgeType)[':judgeTypeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.judgeType[':judgeTypeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataJudgeTypeJudgeTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.judgeType)[':judgeTypeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.judgeType)[':judgeTypeId']['$get']>>
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
        ? getGetMasterDataJudgeTypeJudgeTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.judgeType)[':judgeTypeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.judgeType[':judgeTypeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataJurisdictionGeoKey(
  args: InferRequestType<typeof client.masterData.jurisdictionGeo.$get>,
) {
  return ['masterData', '/masterData/jurisdictionGeo', args] as const
}

export function useGetMasterDataJurisdictionGeo<TError = unknown>(
  args: InferRequestType<typeof client.masterData.jurisdictionGeo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.jurisdictionGeo.$get>>>
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
        ? getGetMasterDataJurisdictionGeoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.jurisdictionGeo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.jurisdictionGeo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataJurisdictionGeo<TError = unknown>(
  args: InferRequestType<typeof client.masterData.jurisdictionGeo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.jurisdictionGeo.$get>>>
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
        ? getGetMasterDataJurisdictionGeoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.jurisdictionGeo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.jurisdictionGeo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataJurisdictionGeoJurisdictionGeoIdKey(
  args: InferRequestType<(typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']>,
) {
  return ['masterData', '/masterData/jurisdictionGeo/:jurisdictionGeoId', args] as const
}

export function useGetMasterDataJurisdictionGeoJurisdictionGeoId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']>
            >
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
        ? getGetMasterDataJurisdictionGeoJurisdictionGeoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.jurisdictionGeo[':jurisdictionGeoId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataJurisdictionGeoJurisdictionGeoId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']>
            >
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
        ? getGetMasterDataJurisdictionGeoJurisdictionGeoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.jurisdictionGeo[':jurisdictionGeoId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataJurisdictionGeoJurisdictionGeoIdCourtsKey(
  args: InferRequestType<
    (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['courts']['$get']
  >,
) {
  return ['masterData', '/masterData/jurisdictionGeo/:jurisdictionGeoId/courts', args] as const
}

export function useGetMasterDataJurisdictionGeoJurisdictionGeoIdCourts<TError = unknown>(
  args: InferRequestType<
    (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['courts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMasterDataJurisdictionGeoJurisdictionGeoIdCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.jurisdictionGeo[':jurisdictionGeoId'].courts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataJurisdictionGeoJurisdictionGeoIdCourts<TError = unknown>(
  args: InferRequestType<
    (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['courts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMasterDataJurisdictionGeoJurisdictionGeoIdCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.jurisdictionGeo[':jurisdictionGeoId'].courts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataPartyRoleKey(
  args: InferRequestType<typeof client.masterData.partyRole.$get>,
) {
  return ['masterData', '/masterData/partyRole', args] as const
}

export function useGetMasterDataPartyRole<TError = unknown>(
  args: InferRequestType<typeof client.masterData.partyRole.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRole.$get>>>
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
        ? getGetMasterDataPartyRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRole.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.partyRole.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataPartyRole<TError = unknown>(
  args: InferRequestType<typeof client.masterData.partyRole.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRole.$get>>>
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
        ? getGetMasterDataPartyRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRole.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.partyRole.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataPartyRolePartyRoleIdKey(
  args: InferRequestType<(typeof client.masterData.partyRole)[':partyRoleId']['$get']>,
) {
  return ['masterData', '/masterData/partyRole/:partyRoleId', args] as const
}

export function useGetMasterDataPartyRolePartyRoleId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.partyRole)[':partyRoleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.partyRole)[':partyRoleId']['$get']>>
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
        ? getGetMasterDataPartyRolePartyRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.partyRole)[':partyRoleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.partyRole[':partyRoleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataPartyRolePartyRoleId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.partyRole)[':partyRoleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.partyRole)[':partyRoleId']['$get']>>
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
        ? getGetMasterDataPartyRolePartyRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.masterData.partyRole)[':partyRoleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.masterData.partyRole[':partyRoleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataPartyRoleGroupKey(
  args: InferRequestType<typeof client.masterData.partyRoleGroup.$get>,
) {
  return ['masterData', '/masterData/partyRoleGroup', args] as const
}

export function useGetMasterDataPartyRoleGroup<TError = unknown>(
  args: InferRequestType<typeof client.masterData.partyRoleGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRoleGroup.$get>>>
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
        ? getGetMasterDataPartyRoleGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRoleGroup.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.partyRoleGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataPartyRoleGroup<TError = unknown>(
  args: InferRequestType<typeof client.masterData.partyRoleGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRoleGroup.$get>>>
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
        ? getGetMasterDataPartyRoleGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.masterData.partyRoleGroup.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.masterData.partyRoleGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMasterDataPartyRoleGroupPartyRoleGroupIdKey(
  args: InferRequestType<(typeof client.masterData.partyRoleGroup)[':partyRoleGroupId']['$get']>,
) {
  return ['masterData', '/masterData/partyRoleGroup/:partyRoleGroupId', args] as const
}

export function useGetMasterDataPartyRoleGroupPartyRoleGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.partyRoleGroup)[':partyRoleGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.partyRoleGroup)[':partyRoleGroupId']['$get']>
            >
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
        ? getGetMasterDataPartyRoleGroupPartyRoleGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.partyRoleGroup)[':partyRoleGroupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.partyRoleGroup[':partyRoleGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMasterDataPartyRoleGroupPartyRoleGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.masterData.partyRoleGroup)[':partyRoleGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.partyRoleGroup)[':partyRoleGroupId']['$get']>
            >
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
        ? getGetMasterDataPartyRoleGroupPartyRoleGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.masterData.partyRoleGroup)[':partyRoleGroupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.masterData.partyRoleGroup[':partyRoleGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNormAttorneyNormAttorneyIdKey(
  args: InferRequestType<(typeof client.normAttorney)[':normAttorneyId']['$get']>,
) {
  return ['normAttorney', '/normAttorney/:normAttorneyId', args] as const
}

export function useGetNormAttorneyNormAttorneyId<TError = unknown>(
  args: InferRequestType<(typeof client.normAttorney)[':normAttorneyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normAttorney)[':normAttorneyId']['$get']>>
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
        ? getGetNormAttorneyNormAttorneyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normAttorney)[':normAttorneyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.normAttorney[':normAttorneyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormAttorneyNormAttorneyId<TError = unknown>(
  args: InferRequestType<(typeof client.normAttorney)[':normAttorneyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normAttorney)[':normAttorneyId']['$get']>>
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
        ? getGetNormAttorneyNormAttorneyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normAttorney)[':normAttorneyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.normAttorney[':normAttorneyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNormAttorneyNormAttorneyIdAssociatedNormJudgesKey(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormJudges']['$get']
  >,
) {
  return ['normAttorney', '/normAttorney/:normAttorneyId/associatedNormJudges', args] as const
}

export function useGetNormAttorneyNormAttorneyIdAssociatedNormJudges<TError = unknown>(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormJudges']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormAttorneyNormAttorneyIdAssociatedNormJudgesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normAttorney[':normAttorneyId'].associatedNormJudges.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormAttorneyNormAttorneyIdAssociatedNormJudges<TError = unknown>(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormJudges']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormAttorneyNormAttorneyIdAssociatedNormJudgesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normAttorney[':normAttorneyId'].associatedNormJudges.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNormAttorneyNormAttorneyIdAssociatedNormLawFirmsKey(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormLawFirms']['$get']
  >,
) {
  return ['normAttorney', '/normAttorney/:normAttorneyId/associatedNormLawFirms', args] as const
}

export function useGetNormAttorneyNormAttorneyIdAssociatedNormLawFirms<TError = unknown>(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormLawFirms']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormAttorneyNormAttorneyIdAssociatedNormLawFirmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normAttorney[':normAttorneyId'].associatedNormLawFirms.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormAttorneyNormAttorneyIdAssociatedNormLawFirms<TError = unknown>(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormLawFirms']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormAttorneyNormAttorneyIdAssociatedNormLawFirmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normAttorney[':normAttorneyId'].associatedNormLawFirms.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNormAttorneyNormAttorneyIdAssociatedNormPartiesKey(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormParties']['$get']
  >,
) {
  return ['normAttorney', '/normAttorney/:normAttorneyId/associatedNormParties', args] as const
}

export function useGetNormAttorneyNormAttorneyIdAssociatedNormParties<TError = unknown>(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormParties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormAttorneyNormAttorneyIdAssociatedNormPartiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normAttorney[':normAttorneyId'].associatedNormParties.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormAttorneyNormAttorneyIdAssociatedNormParties<TError = unknown>(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormParties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormAttorneyNormAttorneyIdAssociatedNormPartiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normAttorney[':normAttorneyId'].associatedNormParties.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyKey(
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

export function useGetNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorney<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['caseCountAnalyticsByOpposingNormAttorney']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normAttorney[':normAttorneyId'].caseCountAnalyticsByOpposingNormAttorney.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorney<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['caseCountAnalyticsByOpposingNormAttorney']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normAttorney[':normAttorneyId'].caseCountAnalyticsByOpposingNormAttorney.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNormAttorneySearchKey(
  args: InferRequestType<typeof client.normAttorneySearch.$get>,
) {
  return ['normAttorneySearch', '/normAttorneySearch', args] as const
}

export function useGetNormAttorneySearch<TError = unknown>(
  args: InferRequestType<typeof client.normAttorneySearch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normAttorneySearch.$get>>>>
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
        ? getGetNormAttorneySearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normAttorneySearch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.normAttorneySearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormAttorneySearch<TError = unknown>(
  args: InferRequestType<typeof client.normAttorneySearch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normAttorneySearch.$get>>>>
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
        ? getGetNormAttorneySearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normAttorneySearch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.normAttorneySearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNormAttorneySearchNormAttorneySearchIdKey(
  args: InferRequestType<(typeof client.normAttorneySearch)[':normAttorneySearchId']['$get']>,
) {
  return ['normAttorneySearch', '/normAttorneySearch/:normAttorneySearchId', args] as const
}

export function useGetNormAttorneySearchNormAttorneySearchId<TError = unknown>(
  args: InferRequestType<(typeof client.normAttorneySearch)[':normAttorneySearchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normAttorneySearch)[':normAttorneySearchId']['$get']>>
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
        ? getGetNormAttorneySearchNormAttorneySearchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normAttorneySearch)[':normAttorneySearchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.normAttorneySearch[':normAttorneySearchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormAttorneySearchNormAttorneySearchId<TError = unknown>(
  args: InferRequestType<(typeof client.normAttorneySearch)[':normAttorneySearchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normAttorneySearch)[':normAttorneySearchId']['$get']>>
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
        ? getGetNormAttorneySearchNormAttorneySearchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normAttorneySearch)[':normAttorneySearchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.normAttorneySearch[':normAttorneySearchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNormJudgeNormJudgeIdKey(
  args: InferRequestType<(typeof client.normJudge)[':normJudgeId']['$get']>,
) {
  return ['normJudge', '/normJudge/:normJudgeId', args] as const
}

export function useGetNormJudgeNormJudgeId<TError = unknown>(
  args: InferRequestType<(typeof client.normJudge)[':normJudgeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normJudge)[':normJudgeId']['$get']>>
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
        ? getGetNormJudgeNormJudgeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normJudge)[':normJudgeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.normJudge[':normJudgeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormJudgeNormJudgeId<TError = unknown>(
  args: InferRequestType<(typeof client.normJudge)[':normJudgeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normJudge)[':normJudgeId']['$get']>>
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
        ? getGetNormJudgeNormJudgeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normJudge)[':normJudgeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.normJudge[':normJudgeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNormJudgeNormJudgeIdAssociatedNormAttorneysKey(
  args: InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormAttorneys']['$get']
  >,
) {
  return ['normJudge', '/normJudge/:normJudgeId/associatedNormAttorneys', args] as const
}

export function useGetNormJudgeNormJudgeIdAssociatedNormAttorneys<TError = unknown>(
  args: InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormAttorneys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormJudgeNormJudgeIdAssociatedNormAttorneysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normJudge[':normJudgeId'].associatedNormAttorneys.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormJudgeNormJudgeIdAssociatedNormAttorneys<TError = unknown>(
  args: InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormAttorneys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormJudgeNormJudgeIdAssociatedNormAttorneysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normJudge[':normJudgeId'].associatedNormAttorneys.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNormJudgeNormJudgeIdAssociatedNormLawFirmsKey(
  args: InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormLawFirms']['$get']
  >,
) {
  return ['normJudge', '/normJudge/:normJudgeId/associatedNormLawFirms', args] as const
}

export function useGetNormJudgeNormJudgeIdAssociatedNormLawFirms<TError = unknown>(
  args: InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormLawFirms']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormJudgeNormJudgeIdAssociatedNormLawFirmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normJudge[':normJudgeId'].associatedNormLawFirms.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormJudgeNormJudgeIdAssociatedNormLawFirms<TError = unknown>(
  args: InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormLawFirms']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormJudgeNormJudgeIdAssociatedNormLawFirmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normJudge[':normJudgeId'].associatedNormLawFirms.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNormJudgeNormJudgeIdAssociatedNormPartiesKey(
  args: InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']
  >,
) {
  return ['normJudge', '/normJudge/:normJudgeId/associatedNormParties', args] as const
}

export function useGetNormJudgeNormJudgeIdAssociatedNormParties<TError = unknown>(
  args: InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']>
            >
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
        ? getGetNormJudgeNormJudgeIdAssociatedNormPartiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normJudge[':normJudgeId'].associatedNormParties.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormJudgeNormJudgeIdAssociatedNormParties<TError = unknown>(
  args: InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']>
            >
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
        ? getGetNormJudgeNormJudgeIdAssociatedNormPartiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normJudge[':normJudgeId'].associatedNormParties.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNormJudgeSearchKey(
  args: InferRequestType<typeof client.normJudgeSearch.$get>,
) {
  return ['normJudgeSearch', '/normJudgeSearch', args] as const
}

export function useGetNormJudgeSearch<TError = unknown>(
  args: InferRequestType<typeof client.normJudgeSearch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normJudgeSearch.$get>>>>
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
        ? getGetNormJudgeSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normJudgeSearch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.normJudgeSearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormJudgeSearch<TError = unknown>(
  args: InferRequestType<typeof client.normJudgeSearch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normJudgeSearch.$get>>>>
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
        ? getGetNormJudgeSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normJudgeSearch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.normJudgeSearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNormJudgeSearchNormJudgeSearchIdKey(
  args: InferRequestType<(typeof client.normJudgeSearch)[':normJudgeSearchId']['$get']>,
) {
  return ['normJudgeSearch', '/normJudgeSearch/:normJudgeSearchId', args] as const
}

export function useGetNormJudgeSearchNormJudgeSearchId<TError = unknown>(
  args: InferRequestType<(typeof client.normJudgeSearch)[':normJudgeSearchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normJudgeSearch)[':normJudgeSearchId']['$get']>>
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
        ? getGetNormJudgeSearchNormJudgeSearchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normJudgeSearch)[':normJudgeSearchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.normJudgeSearch[':normJudgeSearchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormJudgeSearchNormJudgeSearchId<TError = unknown>(
  args: InferRequestType<(typeof client.normJudgeSearch)[':normJudgeSearchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normJudgeSearch)[':normJudgeSearchId']['$get']>>
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
        ? getGetNormJudgeSearchNormJudgeSearchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normJudgeSearch)[':normJudgeSearchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.normJudgeSearch[':normJudgeSearchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNormLawFirmNormLawFirmIdKey(
  args: InferRequestType<(typeof client.normLawFirm)[':normLawFirmId']['$get']>,
) {
  return ['normLawFirm', '/normLawFirm/:normLawFirmId', args] as const
}

export function useGetNormLawFirmNormLawFirmId<TError = unknown>(
  args: InferRequestType<(typeof client.normLawFirm)[':normLawFirmId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normLawFirm)[':normLawFirmId']['$get']>>
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
        ? getGetNormLawFirmNormLawFirmIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normLawFirm)[':normLawFirmId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.normLawFirm[':normLawFirmId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormLawFirmNormLawFirmId<TError = unknown>(
  args: InferRequestType<(typeof client.normLawFirm)[':normLawFirmId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normLawFirm)[':normLawFirmId']['$get']>>
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
        ? getGetNormLawFirmNormLawFirmIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normLawFirm)[':normLawFirmId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.normLawFirm[':normLawFirmId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNormLawFirmNormLawFirmIdAssociatedNormAttorneysKey(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormAttorneys']['$get']
  >,
) {
  return ['normLawFirm', '/normLawFirm/:normLawFirmId/associatedNormAttorneys', args] as const
}

export function useGetNormLawFirmNormLawFirmIdAssociatedNormAttorneys<TError = unknown>(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormAttorneys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormLawFirmNormLawFirmIdAssociatedNormAttorneysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normLawFirm[':normLawFirmId'].associatedNormAttorneys.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormLawFirmNormLawFirmIdAssociatedNormAttorneys<TError = unknown>(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormAttorneys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormLawFirmNormLawFirmIdAssociatedNormAttorneysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normLawFirm[':normLawFirmId'].associatedNormAttorneys.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNormLawFirmNormLawFirmIdAssociatedNormJudgesKey(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormJudges']['$get']
  >,
) {
  return ['normLawFirm', '/normLawFirm/:normLawFirmId/associatedNormJudges', args] as const
}

export function useGetNormLawFirmNormLawFirmIdAssociatedNormJudges<TError = unknown>(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormJudges']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormLawFirmNormLawFirmIdAssociatedNormJudgesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normLawFirm[':normLawFirmId'].associatedNormJudges.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormLawFirmNormLawFirmIdAssociatedNormJudges<TError = unknown>(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormJudges']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormLawFirmNormLawFirmIdAssociatedNormJudgesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normLawFirm[':normLawFirmId'].associatedNormJudges.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNormLawFirmNormLawFirmIdAssociatedNormPartiesKey(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormParties']['$get']
  >,
) {
  return ['normLawFirm', '/normLawFirm/:normLawFirmId/associatedNormParties', args] as const
}

export function useGetNormLawFirmNormLawFirmIdAssociatedNormParties<TError = unknown>(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormParties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormLawFirmNormLawFirmIdAssociatedNormPartiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normLawFirm[':normLawFirmId'].associatedNormParties.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormLawFirmNormLawFirmIdAssociatedNormParties<TError = unknown>(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormParties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormLawFirmNormLawFirmIdAssociatedNormPartiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normLawFirm[':normLawFirmId'].associatedNormParties.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmKey(
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

export function useGetNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirm<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['caseCountAnalyticsByOpposingNormLawFirm']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normLawFirm[':normLawFirmId'].caseCountAnalyticsByOpposingNormLawFirm.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirm<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['caseCountAnalyticsByOpposingNormLawFirm']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normLawFirm[':normLawFirmId'].caseCountAnalyticsByOpposingNormLawFirm.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNormLawFirmSearchKey(
  args: InferRequestType<typeof client.normLawFirmSearch.$get>,
) {
  return ['normLawFirmSearch', '/normLawFirmSearch', args] as const
}

export function useGetNormLawFirmSearch<TError = unknown>(
  args: InferRequestType<typeof client.normLawFirmSearch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normLawFirmSearch.$get>>>>
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
        ? getGetNormLawFirmSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normLawFirmSearch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.normLawFirmSearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormLawFirmSearch<TError = unknown>(
  args: InferRequestType<typeof client.normLawFirmSearch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normLawFirmSearch.$get>>>>
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
        ? getGetNormLawFirmSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normLawFirmSearch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.normLawFirmSearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNormLawFirmSearchNormLawFirmSearchIdKey(
  args: InferRequestType<(typeof client.normLawFirmSearch)[':normLawFirmSearchId']['$get']>,
) {
  return ['normLawFirmSearch', '/normLawFirmSearch/:normLawFirmSearchId', args] as const
}

export function useGetNormLawFirmSearchNormLawFirmSearchId<TError = unknown>(
  args: InferRequestType<(typeof client.normLawFirmSearch)[':normLawFirmSearchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normLawFirmSearch)[':normLawFirmSearchId']['$get']>>
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
        ? getGetNormLawFirmSearchNormLawFirmSearchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normLawFirmSearch)[':normLawFirmSearchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.normLawFirmSearch[':normLawFirmSearchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormLawFirmSearchNormLawFirmSearchId<TError = unknown>(
  args: InferRequestType<(typeof client.normLawFirmSearch)[':normLawFirmSearchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normLawFirmSearch)[':normLawFirmSearchId']['$get']>>
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
        ? getGetNormLawFirmSearchNormLawFirmSearchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normLawFirmSearch)[':normLawFirmSearchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.normLawFirmSearch[':normLawFirmSearchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNormPartyNormPartyIdKey(
  args: InferRequestType<(typeof client.normParty)[':normPartyId']['$get']>,
) {
  return ['normParty', '/normParty/:normPartyId', args] as const
}

export function useGetNormPartyNormPartyId<TError = unknown>(
  args: InferRequestType<(typeof client.normParty)[':normPartyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normParty)[':normPartyId']['$get']>>
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
        ? getGetNormPartyNormPartyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normParty)[':normPartyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.normParty[':normPartyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormPartyNormPartyId<TError = unknown>(
  args: InferRequestType<(typeof client.normParty)[':normPartyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normParty)[':normPartyId']['$get']>>
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
        ? getGetNormPartyNormPartyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normParty)[':normPartyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.normParty[':normPartyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNormPartyNormPartyIdAssociatedNormAttorneysKey(
  args: InferRequestType<
    (typeof client.normParty)[':normPartyId']['associatedNormAttorneys']['$get']
  >,
) {
  return ['normParty', '/normParty/:normPartyId/associatedNormAttorneys', args] as const
}

export function useGetNormPartyNormPartyIdAssociatedNormAttorneys<TError = unknown>(
  args: InferRequestType<
    (typeof client.normParty)[':normPartyId']['associatedNormAttorneys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormPartyNormPartyIdAssociatedNormAttorneysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normParty[':normPartyId'].associatedNormAttorneys.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormPartyNormPartyIdAssociatedNormAttorneys<TError = unknown>(
  args: InferRequestType<
    (typeof client.normParty)[':normPartyId']['associatedNormAttorneys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormPartyNormPartyIdAssociatedNormAttorneysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normParty[':normPartyId'].associatedNormAttorneys.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNormPartyNormPartyIdAssociatedNormJudgesKey(
  args: InferRequestType<(typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']>,
) {
  return ['normParty', '/normParty/:normPartyId/associatedNormJudges', args] as const
}

export function useGetNormPartyNormPartyIdAssociatedNormJudges<TError = unknown>(
  args: InferRequestType<(typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']>
            >
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
        ? getGetNormPartyNormPartyIdAssociatedNormJudgesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normParty[':normPartyId'].associatedNormJudges.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormPartyNormPartyIdAssociatedNormJudges<TError = unknown>(
  args: InferRequestType<(typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']>
            >
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
        ? getGetNormPartyNormPartyIdAssociatedNormJudgesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normParty[':normPartyId'].associatedNormJudges.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNormPartyNormPartyIdAssociatedNormLawFirmsKey(
  args: InferRequestType<
    (typeof client.normParty)[':normPartyId']['associatedNormLawFirms']['$get']
  >,
) {
  return ['normParty', '/normParty/:normPartyId/associatedNormLawFirms', args] as const
}

export function useGetNormPartyNormPartyIdAssociatedNormLawFirms<TError = unknown>(
  args: InferRequestType<
    (typeof client.normParty)[':normPartyId']['associatedNormLawFirms']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormPartyNormPartyIdAssociatedNormLawFirmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normParty[':normPartyId'].associatedNormLawFirms.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormPartyNormPartyIdAssociatedNormLawFirms<TError = unknown>(
  args: InferRequestType<
    (typeof client.normParty)[':normPartyId']['associatedNormLawFirms']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormPartyNormPartyIdAssociatedNormLawFirmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normParty[':normPartyId'].associatedNormLawFirms.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyKey(
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

export function useGetNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormParty<TError = unknown>(
  args: InferRequestType<
    (typeof client.normParty)[':normPartyId']['caseCountAnalyticsByOpposingNormParty']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normParty[':normPartyId'].caseCountAnalyticsByOpposingNormParty.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormParty<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.normParty)[':normPartyId']['caseCountAnalyticsByOpposingNormParty']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.normParty[':normPartyId'].caseCountAnalyticsByOpposingNormParty.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNormPartySearchKey(
  args: InferRequestType<typeof client.normPartySearch.$get>,
) {
  return ['normPartySearch', '/normPartySearch', args] as const
}

export function useGetNormPartySearch<TError = unknown>(
  args: InferRequestType<typeof client.normPartySearch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normPartySearch.$get>>>>
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
        ? getGetNormPartySearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normPartySearch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.normPartySearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormPartySearch<TError = unknown>(
  args: InferRequestType<typeof client.normPartySearch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normPartySearch.$get>>>>
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
        ? getGetNormPartySearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.normPartySearch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.normPartySearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNormPartySearchNormPartySearchIdKey(
  args: InferRequestType<(typeof client.normPartySearch)[':normPartySearchId']['$get']>,
) {
  return ['normPartySearch', '/normPartySearch/:normPartySearchId', args] as const
}

export function useGetNormPartySearchNormPartySearchId<TError = unknown>(
  args: InferRequestType<(typeof client.normPartySearch)[':normPartySearchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normPartySearch)[':normPartySearchId']['$get']>>
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
        ? getGetNormPartySearchNormPartySearchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normPartySearch)[':normPartySearchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.normPartySearch[':normPartySearchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNormPartySearchNormPartySearchId<TError = unknown>(
  args: InferRequestType<(typeof client.normPartySearch)[':normPartySearchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normPartySearch)[':normPartySearchId']['$get']>>
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
        ? getGetNormPartySearchNormPartySearchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.normPartySearch)[':normPartySearchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.normPartySearch[':normPartySearchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPacerImportCaseByCourtUsingCaseNumberKey(
  args: InferRequestType<typeof client.pacer.importCaseByCourtUsingCaseNumber.$get>,
) {
  return ['pacer', '/pacer/importCaseByCourtUsingCaseNumber', args] as const
}

export function useGetPacerImportCaseByCourtUsingCaseNumber<TError = unknown>(
  args: InferRequestType<typeof client.pacer.importCaseByCourtUsingCaseNumber.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacer.importCaseByCourtUsingCaseNumber.$get>>
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
        ? getGetPacerImportCaseByCourtUsingCaseNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacer.importCaseByCourtUsingCaseNumber.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pacer.importCaseByCourtUsingCaseNumber.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPacerImportCaseByCourtUsingCaseNumber<TError = unknown>(
  args: InferRequestType<typeof client.pacer.importCaseByCourtUsingCaseNumber.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacer.importCaseByCourtUsingCaseNumber.$get>>
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
        ? getGetPacerImportCaseByCourtUsingCaseNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacer.importCaseByCourtUsingCaseNumber.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pacer.importCaseByCourtUsingCaseNumber.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPacerCaseLocatorCaseSearchAllCourtsKey(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.allCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/caseSearch/allCourts', args] as const
}

export function useGetPacerCaseLocatorCaseSearchAllCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.allCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.allCourts.$get>>
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
        ? getGetPacerCaseLocatorCaseSearchAllCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.allCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pacerCaseLocator.caseSearch.allCourts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPacerCaseLocatorCaseSearchAllCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.allCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.allCourts.$get>>
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
        ? getGetPacerCaseLocatorCaseSearchAllCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.allCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pacerCaseLocator.caseSearch.allCourts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPacerCaseLocatorCaseSearchAppealCourtsKey(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.appealCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/caseSearch/appealCourts', args] as const
}

export function useGetPacerCaseLocatorCaseSearchAppealCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.appealCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.appealCourts.$get>>
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
        ? getGetPacerCaseLocatorCaseSearchAppealCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.appealCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pacerCaseLocator.caseSearch.appealCourts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPacerCaseLocatorCaseSearchAppealCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.appealCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.appealCourts.$get>>
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
        ? getGetPacerCaseLocatorCaseSearchAppealCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.appealCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pacerCaseLocator.caseSearch.appealCourts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPacerCaseLocatorCaseSearchBankruptcyCourtsKey(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/caseSearch/bankruptcyCourts', args] as const
}

export function useGetPacerCaseLocatorCaseSearchBankruptcyCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get>>
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
        ? getGetPacerCaseLocatorCaseSearchBankruptcyCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPacerCaseLocatorCaseSearchBankruptcyCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get>>
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
        ? getGetPacerCaseLocatorCaseSearchBankruptcyCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPacerCaseLocatorCaseSearchCivilCourtsKey(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.civilCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/caseSearch/civilCourts', args] as const
}

export function useGetPacerCaseLocatorCaseSearchCivilCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.civilCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.civilCourts.$get>>
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
        ? getGetPacerCaseLocatorCaseSearchCivilCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.civilCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pacerCaseLocator.caseSearch.civilCourts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPacerCaseLocatorCaseSearchCivilCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.civilCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.civilCourts.$get>>
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
        ? getGetPacerCaseLocatorCaseSearchCivilCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.civilCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pacerCaseLocator.caseSearch.civilCourts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPacerCaseLocatorCaseSearchCriminalCourtsKey(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.criminalCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/caseSearch/criminalCourts', args] as const
}

export function useGetPacerCaseLocatorCaseSearchCriminalCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.criminalCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.criminalCourts.$get>>
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
        ? getGetPacerCaseLocatorCaseSearchCriminalCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.criminalCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pacerCaseLocator.caseSearch.criminalCourts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPacerCaseLocatorCaseSearchCriminalCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.criminalCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.criminalCourts.$get>>
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
        ? getGetPacerCaseLocatorCaseSearchCriminalCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.criminalCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pacerCaseLocator.caseSearch.criminalCourts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPacerCaseLocatorCaseSearchMultiDistrictCourtsKey(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/caseSearch/multiDistrictCourts', args] as const
}

export function useGetPacerCaseLocatorCaseSearchMultiDistrictCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get>>
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
        ? getGetPacerCaseLocatorCaseSearchMultiDistrictCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPacerCaseLocatorCaseSearchMultiDistrictCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get>>
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
        ? getGetPacerCaseLocatorCaseSearchMultiDistrictCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPacerCaseLocatorPartySearchAllCourtsKey(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.allCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/partySearch/allCourts', args] as const
}

export function useGetPacerCaseLocatorPartySearchAllCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.allCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.allCourts.$get>>
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
        ? getGetPacerCaseLocatorPartySearchAllCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.allCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pacerCaseLocator.partySearch.allCourts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPacerCaseLocatorPartySearchAllCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.allCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.allCourts.$get>>
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
        ? getGetPacerCaseLocatorPartySearchAllCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.allCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pacerCaseLocator.partySearch.allCourts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPacerCaseLocatorPartySearchAppealCourtsKey(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.appealCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/partySearch/appealCourts', args] as const
}

export function useGetPacerCaseLocatorPartySearchAppealCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.appealCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.appealCourts.$get>>
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
        ? getGetPacerCaseLocatorPartySearchAppealCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.appealCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pacerCaseLocator.partySearch.appealCourts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPacerCaseLocatorPartySearchAppealCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.appealCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.appealCourts.$get>>
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
        ? getGetPacerCaseLocatorPartySearchAppealCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.appealCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pacerCaseLocator.partySearch.appealCourts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPacerCaseLocatorPartySearchBankruptcyCourtsKey(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.bankruptcyCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/partySearch/bankruptcyCourts', args] as const
}

export function useGetPacerCaseLocatorPartySearchBankruptcyCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.bankruptcyCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.bankruptcyCourts.$get>>
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
        ? getGetPacerCaseLocatorPartySearchBankruptcyCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.bankruptcyCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.pacerCaseLocator.partySearch.bankruptcyCourts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPacerCaseLocatorPartySearchBankruptcyCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.bankruptcyCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.bankruptcyCourts.$get>>
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
        ? getGetPacerCaseLocatorPartySearchBankruptcyCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.bankruptcyCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.pacerCaseLocator.partySearch.bankruptcyCourts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPacerCaseLocatorPartySearchCivilCourtsKey(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.civilCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/partySearch/civilCourts', args] as const
}

export function useGetPacerCaseLocatorPartySearchCivilCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.civilCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.civilCourts.$get>>
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
        ? getGetPacerCaseLocatorPartySearchCivilCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.civilCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pacerCaseLocator.partySearch.civilCourts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPacerCaseLocatorPartySearchCivilCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.civilCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.civilCourts.$get>>
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
        ? getGetPacerCaseLocatorPartySearchCivilCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.civilCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pacerCaseLocator.partySearch.civilCourts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPacerCaseLocatorPartySearchCriminalCourtsKey(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.criminalCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/partySearch/criminalCourts', args] as const
}

export function useGetPacerCaseLocatorPartySearchCriminalCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.criminalCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.criminalCourts.$get>>
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
        ? getGetPacerCaseLocatorPartySearchCriminalCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.criminalCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pacerCaseLocator.partySearch.criminalCourts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPacerCaseLocatorPartySearchCriminalCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.criminalCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.criminalCourts.$get>>
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
        ? getGetPacerCaseLocatorPartySearchCriminalCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.criminalCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pacerCaseLocator.partySearch.criminalCourts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPacerCaseLocatorPartySearchMultiDistrictCourtsKey(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.multiDistrictCourts.$get>,
) {
  return ['pacerCaseLocator', '/pacerCaseLocator/partySearch/multiDistrictCourts', args] as const
}

export function useGetPacerCaseLocatorPartySearchMultiDistrictCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.multiDistrictCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.multiDistrictCourts.$get>>
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
        ? getGetPacerCaseLocatorPartySearchMultiDistrictCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.multiDistrictCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.pacerCaseLocator.partySearch.multiDistrictCourts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPacerCaseLocatorPartySearchMultiDistrictCourts<TError = unknown>(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.multiDistrictCourts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.multiDistrictCourts.$get>>
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
        ? getGetPacerCaseLocatorPartySearchMultiDistrictCourtsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pacerCaseLocator.partySearch.multiDistrictCourts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.pacerCaseLocator.partySearch.multiDistrictCourts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPacerCredentialKey(
  args: InferRequestType<typeof client.pacerCredential.$get>,
) {
  return ['pacerCredential', '/pacerCredential', args] as const
}

export function useGetPacerCredential<TError = unknown>(
  args: InferRequestType<typeof client.pacerCredential.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$get>>>>
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
        ? getGetPacerCredentialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pacerCredential.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPacerCredential<TError = unknown>(
  args: InferRequestType<typeof client.pacerCredential.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$get>>>>
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
        ? getGetPacerCredentialKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pacerCredential.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPacerCredentialKey() {
  return ['pacerCredential', '/pacerCredential', 'PUT'] as const
}

export function usePutPacerCredential<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pacerCredential.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.pacerCredential.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPacerCredentialKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pacerCredential.$put> }) =>
        parseResponse(client.pacerCredential.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPacerCredentialPacerUserIdKey(
  args: InferRequestType<(typeof client.pacerCredential)[':pacerUserId']['$get']>,
) {
  return ['pacerCredential', '/pacerCredential/:pacerUserId', args] as const
}

export function useGetPacerCredentialPacerUserId<TError = unknown>(
  args: InferRequestType<(typeof client.pacerCredential)[':pacerUserId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pacerCredential)[':pacerUserId']['$get']>>
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
        ? getGetPacerCredentialPacerUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pacerCredential)[':pacerUserId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pacerCredential[':pacerUserId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPacerCredentialPacerUserId<TError = unknown>(
  args: InferRequestType<(typeof client.pacerCredential)[':pacerUserId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pacerCredential)[':pacerUserId']['$get']>>
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
        ? getGetPacerCredentialPacerUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pacerCredential)[':pacerUserId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pacerCredential[':pacerUserId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePacerCredentialPacerUserIdKey() {
  return ['pacerCredential', '/pacerCredential/:pacerUserId', 'DELETE'] as const
}

export function useDeletePacerCredentialPacerUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pacerCredential)[':pacerUserId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pacerCredential)[':pacerUserId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePacerCredentialPacerUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.pacerCredential)[':pacerUserId']['$delete']> },
      ) => parseResponse(client.pacerCredential[':pacerUserId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPartyPartyIdKey(
  args: InferRequestType<(typeof client.party)[':partyId']['$get']>,
) {
  return ['party', '/party/:partyId', args] as const
}

export function useGetPartyPartyId<TError = unknown>(
  args: InferRequestType<(typeof client.party)[':partyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.party)[':partyId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPartyPartyIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.party)[':partyId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.party[':partyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPartyPartyId<TError = unknown>(
  args: InferRequestType<(typeof client.party)[':partyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.party)[':partyId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPartyPartyIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.party)[':partyId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.party[':partyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPartyPartyIdAssociatedAttorneysKey(
  args: InferRequestType<(typeof client.party)[':partyId']['associatedAttorneys']['$get']>,
) {
  return ['party', '/party/:partyId/associatedAttorneys', args] as const
}

export function useGetPartyPartyIdAssociatedAttorneys<TError = unknown>(
  args: InferRequestType<(typeof client.party)[':partyId']['associatedAttorneys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.party)[':partyId']['associatedAttorneys']['$get']>>
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
        ? getGetPartyPartyIdAssociatedAttorneysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.party)[':partyId']['associatedAttorneys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.party[':partyId'].associatedAttorneys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPartyPartyIdAssociatedAttorneys<TError = unknown>(
  args: InferRequestType<(typeof client.party)[':partyId']['associatedAttorneys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.party)[':partyId']['associatedAttorneys']['$get']>>
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
        ? getGetPartyPartyIdAssociatedAttorneysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.party)[':partyId']['associatedAttorneys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.party[':partyId'].associatedAttorneys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
