import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAuditCaseKey() {
  return ['audit-case'] as const
}

export function getAuditCategoryKey() {
  return ['audit-category'] as const
}

export function getAuditPrimaryCategoryKey() {
  return ['audit-primary-category'] as const
}

export function getCalendarDatesKey() {
  return ['calendar-dates'] as const
}

export function getCandidateKey() {
  return ['candidate'] as const
}

export function getCandidatesKey() {
  return ['candidates'] as const
}

export function getCommitteeKey() {
  return ['committee'] as const
}

export function getCommitteesKey() {
  return ['committees'] as const
}

export function getCommunicationCostsKey() {
  return ['communication_costs'] as const
}

export function getEfileKey() {
  return ['efile'] as const
}

export function getElectionDatesKey() {
  return ['election-dates'] as const
}

export function getElectioneeringKey() {
  return ['electioneering'] as const
}

export function getElectionsKey() {
  return ['elections'] as const
}

export function getFilingsKey() {
  return ['filings'] as const
}

export function getLegalKey() {
  return ['legal'] as const
}

export function getNamesKey() {
  return ['names'] as const
}

export function getOperationsLogKey() {
  return ['operations-log'] as const
}

export function getPresidentialKey() {
  return ['presidential'] as const
}

export function getRadAnalystKey() {
  return ['rad-analyst'] as const
}

export function getReportingDatesKey() {
  return ['reporting-dates'] as const
}

export function getReportsKey() {
  return ['reports'] as const
}

export function getSchedulesKey() {
  return ['schedules'] as const
}

export function getStateElectionOfficeKey() {
  return ['state-election-office'] as const
}

export function getTotalsKey() {
  return ['totals'] as const
}

export function getGetAuditCaseIndexKey(
  args: InferRequestType<(typeof client)['audit-case']['index']['$get']>,
) {
  return ['audit-case', '/audit-case/', args] as const
}

export function useGetAuditCaseIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['audit-case']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['audit-case']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuditCaseIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['audit-case']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['audit-case'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditCaseIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['audit-case']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['audit-case']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuditCaseIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['audit-case']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['audit-case'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAuditCategoryIndexKey(
  args: InferRequestType<(typeof client)['audit-category']['index']['$get']>,
) {
  return ['audit-category', '/audit-category/', args] as const
}

export function useGetAuditCategoryIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['audit-category']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['audit-category']['index']['$get']>>
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
        ? getGetAuditCategoryIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['audit-category']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['audit-category'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditCategoryIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['audit-category']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['audit-category']['index']['$get']>>
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
        ? getGetAuditCategoryIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['audit-category']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['audit-category'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAuditPrimaryCategoryIndexKey(
  args: InferRequestType<(typeof client)['audit-primary-category']['index']['$get']>,
) {
  return ['audit-primary-category', '/audit-primary-category/', args] as const
}

export function useGetAuditPrimaryCategoryIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['audit-primary-category']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['audit-primary-category']['index']['$get']>>
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
        ? getGetAuditPrimaryCategoryIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['audit-primary-category']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['audit-primary-category'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditPrimaryCategoryIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['audit-primary-category']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['audit-primary-category']['index']['$get']>>
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
        ? getGetAuditPrimaryCategoryIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['audit-primary-category']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['audit-primary-category'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCalendarDatesIndexKey(
  args: InferRequestType<(typeof client)['calendar-dates']['index']['$get']>,
) {
  return ['calendar-dates', '/calendar-dates/', args] as const
}

export function useGetCalendarDatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['calendar-dates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['calendar-dates']['index']['$get']>>
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
        ? getGetCalendarDatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['calendar-dates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['calendar-dates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCalendarDatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['calendar-dates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['calendar-dates']['index']['$get']>>
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
        ? getGetCalendarDatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['calendar-dates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['calendar-dates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCalendarDatesExportIndexKey(
  args: InferRequestType<(typeof client)['calendar-dates']['export']['index']['$get']>,
) {
  return ['calendar-dates', '/calendar-dates/export/', args] as const
}

export function useGetCalendarDatesExportIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['calendar-dates']['export']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['calendar-dates']['export']['index']['$get']>>
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
        ? getGetCalendarDatesExportIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['calendar-dates']['export']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['calendar-dates'].export.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCalendarDatesExportIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['calendar-dates']['export']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['calendar-dates']['export']['index']['$get']>>
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
        ? getGetCalendarDatesExportIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['calendar-dates']['export']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['calendar-dates'].export.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCandidateCandidateIdIndexKey(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['index']['$get']>,
) {
  return ['candidate', '/candidate/:candidate_id/', args] as const
}

export function useGetCandidateCandidateIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.candidate)[':candidate_id']['index']['$get']>>
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
        ? getGetCandidateCandidateIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.candidate)[':candidate_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.candidate[':candidate_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCandidateCandidateIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.candidate)[':candidate_id']['index']['$get']>>
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
        ? getGetCandidateCandidateIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.candidate)[':candidate_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.candidate[':candidate_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCandidateCandidateIdCommitteesIndexKey(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['committees']['index']['$get']>,
) {
  return ['candidate', '/candidate/:candidate_id/committees/', args] as const
}

export function useGetCandidateCandidateIdCommitteesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['committees']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.candidate)[':candidate_id']['committees']['index']['$get']>
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
        ? getGetCandidateCandidateIdCommitteesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.candidate)[':candidate_id']['committees']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.candidate[':candidate_id'].committees.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCandidateCandidateIdCommitteesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['committees']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.candidate)[':candidate_id']['committees']['index']['$get']>
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
        ? getGetCandidateCandidateIdCommitteesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.candidate)[':candidate_id']['committees']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.candidate[':candidate_id'].committees.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCandidateCandidateIdCommitteesHistoryIndexKey(
  args: InferRequestType<
    (typeof client.candidate)[':candidate_id']['committees']['history']['index']['$get']
  >,
) {
  return ['candidate', '/candidate/:candidate_id/committees/history/', args] as const
}

export function useGetCandidateCandidateIdCommitteesHistoryIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.candidate)[':candidate_id']['committees']['history']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.candidate)[':candidate_id']['committees']['history']['index']['$get']
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
        ? getGetCandidateCandidateIdCommitteesHistoryIndexKey(args)
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
                (typeof client.candidate)[':candidate_id']['committees']['history']['index']['$get']
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
          client.candidate[':candidate_id'].committees.history.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCandidateCandidateIdCommitteesHistoryIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.candidate)[':candidate_id']['committees']['history']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.candidate)[':candidate_id']['committees']['history']['index']['$get']
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
        ? getGetCandidateCandidateIdCommitteesHistoryIndexKey(args)
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
                (typeof client.candidate)[':candidate_id']['committees']['history']['index']['$get']
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
          client.candidate[':candidate_id'].committees.history.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCandidateCandidateIdCommitteesHistoryCycleIndexKey(
  args: InferRequestType<
    (typeof client.candidate)[':candidate_id']['committees']['history'][':cycle']['index']['$get']
  >,
) {
  return ['candidate', '/candidate/:candidate_id/committees/history/:cycle/', args] as const
}

export function useGetCandidateCandidateIdCommitteesHistoryCycleIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.candidate)[':candidate_id']['committees']['history'][':cycle']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.candidate)[':candidate_id']['committees']['history'][':cycle']['index']['$get']
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
        ? getGetCandidateCandidateIdCommitteesHistoryCycleIndexKey(args)
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
                (typeof client.candidate)[':candidate_id']['committees']['history'][':cycle']['index']['$get']
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
          client.candidate[':candidate_id'].committees.history[':cycle'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCandidateCandidateIdCommitteesHistoryCycleIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.candidate)[':candidate_id']['committees']['history'][':cycle']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.candidate)[':candidate_id']['committees']['history'][':cycle']['index']['$get']
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
        ? getGetCandidateCandidateIdCommitteesHistoryCycleIndexKey(args)
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
                (typeof client.candidate)[':candidate_id']['committees']['history'][':cycle']['index']['$get']
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
          client.candidate[':candidate_id'].committees.history[':cycle'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCandidateCandidateIdFilingsIndexKey(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['filings']['index']['$get']>,
) {
  return ['candidate', '/candidate/:candidate_id/filings/', args] as const
}

export function useGetCandidateCandidateIdFilingsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['filings']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.candidate)[':candidate_id']['filings']['index']['$get']>
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
        ? getGetCandidateCandidateIdFilingsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.candidate)[':candidate_id']['filings']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.candidate[':candidate_id'].filings.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCandidateCandidateIdFilingsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['filings']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.candidate)[':candidate_id']['filings']['index']['$get']>
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
        ? getGetCandidateCandidateIdFilingsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.candidate)[':candidate_id']['filings']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.candidate[':candidate_id'].filings.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCandidateCandidateIdHistoryIndexKey(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['history']['index']['$get']>,
) {
  return ['candidate', '/candidate/:candidate_id/history/', args] as const
}

export function useGetCandidateCandidateIdHistoryIndex<TError = unknown>(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['history']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.candidate)[':candidate_id']['history']['index']['$get']>
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
        ? getGetCandidateCandidateIdHistoryIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.candidate)[':candidate_id']['history']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.candidate[':candidate_id'].history.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCandidateCandidateIdHistoryIndex<TError = unknown>(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['history']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.candidate)[':candidate_id']['history']['index']['$get']>
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
        ? getGetCandidateCandidateIdHistoryIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.candidate)[':candidate_id']['history']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.candidate[':candidate_id'].history.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCandidateCandidateIdHistoryCycleIndexKey(
  args: InferRequestType<
    (typeof client.candidate)[':candidate_id']['history'][':cycle']['index']['$get']
  >,
) {
  return ['candidate', '/candidate/:candidate_id/history/:cycle/', args] as const
}

export function useGetCandidateCandidateIdHistoryCycleIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.candidate)[':candidate_id']['history'][':cycle']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.candidate)[':candidate_id']['history'][':cycle']['index']['$get']
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
        ? getGetCandidateCandidateIdHistoryCycleIndexKey(args)
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
                (typeof client.candidate)[':candidate_id']['history'][':cycle']['index']['$get']
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
          client.candidate[':candidate_id'].history[':cycle'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCandidateCandidateIdHistoryCycleIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.candidate)[':candidate_id']['history'][':cycle']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.candidate)[':candidate_id']['history'][':cycle']['index']['$get']
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
        ? getGetCandidateCandidateIdHistoryCycleIndexKey(args)
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
                (typeof client.candidate)[':candidate_id']['history'][':cycle']['index']['$get']
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
          client.candidate[':candidate_id'].history[':cycle'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCandidateCandidateIdTotalsIndexKey(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['totals']['index']['$get']>,
) {
  return ['candidate', '/candidate/:candidate_id/totals/', args] as const
}

export function useGetCandidateCandidateIdTotalsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['totals']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.candidate)[':candidate_id']['totals']['index']['$get']>
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
        ? getGetCandidateCandidateIdTotalsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.candidate)[':candidate_id']['totals']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.candidate[':candidate_id'].totals.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCandidateCandidateIdTotalsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['totals']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.candidate)[':candidate_id']['totals']['index']['$get']>
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
        ? getGetCandidateCandidateIdTotalsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.candidate)[':candidate_id']['totals']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.candidate[':candidate_id'].totals.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCandidatesIndexKey(
  args: InferRequestType<typeof client.candidates.index.$get>,
) {
  return ['candidates', '/candidates/', args] as const
}

export function useGetCandidatesIndex<TError = unknown>(
  args: InferRequestType<typeof client.candidates.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.candidates.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCandidatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.candidates.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.candidates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCandidatesIndex<TError = unknown>(
  args: InferRequestType<typeof client.candidates.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.candidates.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCandidatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.candidates.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.candidates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCandidatesSearchIndexKey(
  args: InferRequestType<typeof client.candidates.search.index.$get>,
) {
  return ['candidates', '/candidates/search/', args] as const
}

export function useGetCandidatesSearchIndex<TError = unknown>(
  args: InferRequestType<typeof client.candidates.search.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.candidates.search.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCandidatesSearchIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.candidates.search.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.candidates.search.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCandidatesSearchIndex<TError = unknown>(
  args: InferRequestType<typeof client.candidates.search.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.candidates.search.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCandidatesSearchIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.candidates.search.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.candidates.search.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCandidatesTotalsIndexKey(
  args: InferRequestType<typeof client.candidates.totals.index.$get>,
) {
  return ['candidates', '/candidates/totals/', args] as const
}

export function useGetCandidatesTotalsIndex<TError = unknown>(
  args: InferRequestType<typeof client.candidates.totals.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.candidates.totals.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCandidatesTotalsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.candidates.totals.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.candidates.totals.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCandidatesTotalsIndex<TError = unknown>(
  args: InferRequestType<typeof client.candidates.totals.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.candidates.totals.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCandidatesTotalsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.candidates.totals.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.candidates.totals.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCandidatesTotalsAggregatesIndexKey(
  args: InferRequestType<typeof client.candidates.totals.aggregates.index.$get>,
) {
  return ['candidates', '/candidates/totals/aggregates/', args] as const
}

export function useGetCandidatesTotalsAggregatesIndex<TError = unknown>(
  args: InferRequestType<typeof client.candidates.totals.aggregates.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.candidates.totals.aggregates.index.$get>>
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
        ? getGetCandidatesTotalsAggregatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.candidates.totals.aggregates.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.candidates.totals.aggregates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCandidatesTotalsAggregatesIndex<TError = unknown>(
  args: InferRequestType<typeof client.candidates.totals.aggregates.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.candidates.totals.aggregates.index.$get>>
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
        ? getGetCandidatesTotalsAggregatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.candidates.totals.aggregates.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.candidates.totals.aggregates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCandidatesTotalsByOfficeIndexKey(
  args: InferRequestType<typeof client.candidates.totals.by_office.index.$get>,
) {
  return ['candidates', '/candidates/totals/by_office/', args] as const
}

export function useGetCandidatesTotalsByOfficeIndex<TError = unknown>(
  args: InferRequestType<typeof client.candidates.totals.by_office.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.candidates.totals.by_office.index.$get>>
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
        ? getGetCandidatesTotalsByOfficeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.candidates.totals.by_office.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.candidates.totals.by_office.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCandidatesTotalsByOfficeIndex<TError = unknown>(
  args: InferRequestType<typeof client.candidates.totals.by_office.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.candidates.totals.by_office.index.$get>>
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
        ? getGetCandidatesTotalsByOfficeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.candidates.totals.by_office.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.candidates.totals.by_office.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCandidatesTotalsByOfficeByPartyIndexKey(
  args: InferRequestType<typeof client.candidates.totals.by_office.by_party.index.$get>,
) {
  return ['candidates', '/candidates/totals/by_office/by_party/', args] as const
}

export function useGetCandidatesTotalsByOfficeByPartyIndex<TError = unknown>(
  args: InferRequestType<typeof client.candidates.totals.by_office.by_party.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.candidates.totals.by_office.by_party.index.$get>>
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
        ? getGetCandidatesTotalsByOfficeByPartyIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.candidates.totals.by_office.by_party.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.candidates.totals.by_office.by_party.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCandidatesTotalsByOfficeByPartyIndex<TError = unknown>(
  args: InferRequestType<typeof client.candidates.totals.by_office.by_party.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.candidates.totals.by_office.by_party.index.$get>>
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
        ? getGetCandidatesTotalsByOfficeByPartyIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.candidates.totals.by_office.by_party.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.candidates.totals.by_office.by_party.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeCommitteeIdIndexKey(
  args: InferRequestType<(typeof client.committee)[':committee_id']['index']['$get']>,
) {
  return ['committee', '/committee/:committee_id/', args] as const
}

export function useGetCommitteeCommitteeIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':committee_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.committee)[':committee_id']['index']['$get']>>
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
        ? getGetCommitteeCommitteeIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.committee)[':committee_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.committee[':committee_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeCommitteeIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':committee_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.committee)[':committee_id']['index']['$get']>>
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
        ? getGetCommitteeCommitteeIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.committee)[':committee_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.committee[':committee_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeCommitteeIdCandidatesIndexKey(
  args: InferRequestType<(typeof client.committee)[':committee_id']['candidates']['index']['$get']>,
) {
  return ['committee', '/committee/:committee_id/candidates/', args] as const
}

export function useGetCommitteeCommitteeIdCandidatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':committee_id']['candidates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':committee_id']['candidates']['index']['$get']>
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
        ? getGetCommitteeCommitteeIdCandidatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':committee_id']['candidates']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.committee[':committee_id'].candidates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeCommitteeIdCandidatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':committee_id']['candidates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':committee_id']['candidates']['index']['$get']>
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
        ? getGetCommitteeCommitteeIdCandidatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':committee_id']['candidates']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.committee[':committee_id'].candidates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeCommitteeIdCandidatesHistoryIndexKey(
  args: InferRequestType<
    (typeof client.committee)[':committee_id']['candidates']['history']['index']['$get']
  >,
) {
  return ['committee', '/committee/:committee_id/candidates/history/', args] as const
}

export function useGetCommitteeCommitteeIdCandidatesHistoryIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.committee)[':committee_id']['candidates']['history']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.committee)[':committee_id']['candidates']['history']['index']['$get']
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
        ? getGetCommitteeCommitteeIdCandidatesHistoryIndexKey(args)
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
                (typeof client.committee)[':committee_id']['candidates']['history']['index']['$get']
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
          client.committee[':committee_id'].candidates.history.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeCommitteeIdCandidatesHistoryIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.committee)[':committee_id']['candidates']['history']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.committee)[':committee_id']['candidates']['history']['index']['$get']
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
        ? getGetCommitteeCommitteeIdCandidatesHistoryIndexKey(args)
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
                (typeof client.committee)[':committee_id']['candidates']['history']['index']['$get']
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
          client.committee[':committee_id'].candidates.history.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeCommitteeIdCandidatesHistoryCycleIndexKey(
  args: InferRequestType<
    (typeof client.committee)[':committee_id']['candidates']['history'][':cycle']['index']['$get']
  >,
) {
  return ['committee', '/committee/:committee_id/candidates/history/:cycle/', args] as const
}

export function useGetCommitteeCommitteeIdCandidatesHistoryCycleIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.committee)[':committee_id']['candidates']['history'][':cycle']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.committee)[':committee_id']['candidates']['history'][':cycle']['index']['$get']
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
        ? getGetCommitteeCommitteeIdCandidatesHistoryCycleIndexKey(args)
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
                (typeof client.committee)[':committee_id']['candidates']['history'][':cycle']['index']['$get']
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
          client.committee[':committee_id'].candidates.history[':cycle'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeCommitteeIdCandidatesHistoryCycleIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.committee)[':committee_id']['candidates']['history'][':cycle']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.committee)[':committee_id']['candidates']['history'][':cycle']['index']['$get']
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
        ? getGetCommitteeCommitteeIdCandidatesHistoryCycleIndexKey(args)
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
                (typeof client.committee)[':committee_id']['candidates']['history'][':cycle']['index']['$get']
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
          client.committee[':committee_id'].candidates.history[':cycle'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeCommitteeIdFilingsIndexKey(
  args: InferRequestType<(typeof client.committee)[':committee_id']['filings']['index']['$get']>,
) {
  return ['committee', '/committee/:committee_id/filings/', args] as const
}

export function useGetCommitteeCommitteeIdFilingsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':committee_id']['filings']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':committee_id']['filings']['index']['$get']>
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
        ? getGetCommitteeCommitteeIdFilingsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':committee_id']['filings']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.committee[':committee_id'].filings.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeCommitteeIdFilingsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':committee_id']['filings']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':committee_id']['filings']['index']['$get']>
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
        ? getGetCommitteeCommitteeIdFilingsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':committee_id']['filings']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.committee[':committee_id'].filings.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeCommitteeIdHistoryIndexKey(
  args: InferRequestType<(typeof client.committee)[':committee_id']['history']['index']['$get']>,
) {
  return ['committee', '/committee/:committee_id/history/', args] as const
}

export function useGetCommitteeCommitteeIdHistoryIndex<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':committee_id']['history']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':committee_id']['history']['index']['$get']>
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
        ? getGetCommitteeCommitteeIdHistoryIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':committee_id']['history']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.committee[':committee_id'].history.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeCommitteeIdHistoryIndex<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':committee_id']['history']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':committee_id']['history']['index']['$get']>
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
        ? getGetCommitteeCommitteeIdHistoryIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':committee_id']['history']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.committee[':committee_id'].history.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeCommitteeIdHistoryCycleIndexKey(
  args: InferRequestType<
    (typeof client.committee)[':committee_id']['history'][':cycle']['index']['$get']
  >,
) {
  return ['committee', '/committee/:committee_id/history/:cycle/', args] as const
}

export function useGetCommitteeCommitteeIdHistoryCycleIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.committee)[':committee_id']['history'][':cycle']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.committee)[':committee_id']['history'][':cycle']['index']['$get']
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
        ? getGetCommitteeCommitteeIdHistoryCycleIndexKey(args)
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
                (typeof client.committee)[':committee_id']['history'][':cycle']['index']['$get']
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
          client.committee[':committee_id'].history[':cycle'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeCommitteeIdHistoryCycleIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.committee)[':committee_id']['history'][':cycle']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.committee)[':committee_id']['history'][':cycle']['index']['$get']
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
        ? getGetCommitteeCommitteeIdHistoryCycleIndexKey(args)
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
                (typeof client.committee)[':committee_id']['history'][':cycle']['index']['$get']
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
          client.committee[':committee_id'].history[':cycle'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeCommitteeIdReportsIndexKey(
  args: InferRequestType<(typeof client.committee)[':committee_id']['reports']['index']['$get']>,
) {
  return ['committee', '/committee/:committee_id/reports/', args] as const
}

export function useGetCommitteeCommitteeIdReportsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':committee_id']['reports']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':committee_id']['reports']['index']['$get']>
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
        ? getGetCommitteeCommitteeIdReportsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':committee_id']['reports']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.committee[':committee_id'].reports.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeCommitteeIdReportsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':committee_id']['reports']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':committee_id']['reports']['index']['$get']>
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
        ? getGetCommitteeCommitteeIdReportsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':committee_id']['reports']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.committee[':committee_id'].reports.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteeCommitteeIdTotalsIndexKey(
  args: InferRequestType<(typeof client.committee)[':committee_id']['totals']['index']['$get']>,
) {
  return ['committee', '/committee/:committee_id/totals/', args] as const
}

export function useGetCommitteeCommitteeIdTotalsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':committee_id']['totals']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':committee_id']['totals']['index']['$get']>
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
        ? getGetCommitteeCommitteeIdTotalsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':committee_id']['totals']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.committee[':committee_id'].totals.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteeCommitteeIdTotalsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.committee)[':committee_id']['totals']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':committee_id']['totals']['index']['$get']>
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
        ? getGetCommitteeCommitteeIdTotalsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.committee)[':committee_id']['totals']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.committee[':committee_id'].totals.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommitteesIndexKey(
  args: InferRequestType<typeof client.committees.index.$get>,
) {
  return ['committees', '/committees/', args] as const
}

export function useGetCommitteesIndex<TError = unknown>(
  args: InferRequestType<typeof client.committees.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committees.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committees.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.committees.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommitteesIndex<TError = unknown>(
  args: InferRequestType<typeof client.committees.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committees.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommitteesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committees.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.committees.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommunicationCostsIndexKey(
  args: InferRequestType<typeof client.communication_costs.index.$get>,
) {
  return ['communication_costs', '/communication_costs/', args] as const
}

export function useGetCommunicationCostsIndex<TError = unknown>(
  args: InferRequestType<typeof client.communication_costs.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.communication_costs.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommunicationCostsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.communication_costs.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.communication_costs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommunicationCostsIndex<TError = unknown>(
  args: InferRequestType<typeof client.communication_costs.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.communication_costs.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommunicationCostsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.communication_costs.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.communication_costs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommunicationCostsAggregatesIndexKey(
  args: InferRequestType<typeof client.communication_costs.aggregates.index.$get>,
) {
  return ['communication_costs', '/communication_costs/aggregates/', args] as const
}

export function useGetCommunicationCostsAggregatesIndex<TError = unknown>(
  args: InferRequestType<typeof client.communication_costs.aggregates.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.communication_costs.aggregates.index.$get>>
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
        ? getGetCommunicationCostsAggregatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.communication_costs.aggregates.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.communication_costs.aggregates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommunicationCostsAggregatesIndex<TError = unknown>(
  args: InferRequestType<typeof client.communication_costs.aggregates.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.communication_costs.aggregates.index.$get>>
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
        ? getGetCommunicationCostsAggregatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.communication_costs.aggregates.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.communication_costs.aggregates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommunicationCostsByCandidateIndexKey(
  args: InferRequestType<typeof client.communication_costs.by_candidate.index.$get>,
) {
  return ['communication_costs', '/communication_costs/by_candidate/', args] as const
}

export function useGetCommunicationCostsByCandidateIndex<TError = unknown>(
  args: InferRequestType<typeof client.communication_costs.by_candidate.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.communication_costs.by_candidate.index.$get>>
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
        ? getGetCommunicationCostsByCandidateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.communication_costs.by_candidate.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.communication_costs.by_candidate.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommunicationCostsByCandidateIndex<TError = unknown>(
  args: InferRequestType<typeof client.communication_costs.by_candidate.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.communication_costs.by_candidate.index.$get>>
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
        ? getGetCommunicationCostsByCandidateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.communication_costs.by_candidate.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.communication_costs.by_candidate.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommunicationCostsTotalsByCandidateIndexKey(
  args: InferRequestType<typeof client.communication_costs.totals.by_candidate.index.$get>,
) {
  return ['communication_costs', '/communication_costs/totals/by_candidate/', args] as const
}

export function useGetCommunicationCostsTotalsByCandidateIndex<TError = unknown>(
  args: InferRequestType<typeof client.communication_costs.totals.by_candidate.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.communication_costs.totals.by_candidate.index.$get>>
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
        ? getGetCommunicationCostsTotalsByCandidateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.communication_costs.totals.by_candidate.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.communication_costs.totals.by_candidate.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommunicationCostsTotalsByCandidateIndex<TError = unknown>(
  args: InferRequestType<typeof client.communication_costs.totals.by_candidate.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.communication_costs.totals.by_candidate.index.$get>>
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
        ? getGetCommunicationCostsTotalsByCandidateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.communication_costs.totals.by_candidate.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.communication_costs.totals.by_candidate.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEfileFilingsIndexKey(
  args: InferRequestType<typeof client.efile.filings.index.$get>,
) {
  return ['efile', '/efile/filings/', args] as const
}

export function useGetEfileFilingsIndex<TError = unknown>(
  args: InferRequestType<typeof client.efile.filings.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.efile.filings.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEfileFilingsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.efile.filings.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.efile.filings.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEfileFilingsIndex<TError = unknown>(
  args: InferRequestType<typeof client.efile.filings.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.efile.filings.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEfileFilingsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.efile.filings.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.efile.filings.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEfileReportsHouseSenateIndexKey(
  args: InferRequestType<(typeof client.efile.reports)['house-senate']['index']['$get']>,
) {
  return ['efile', '/efile/reports/house-senate/', args] as const
}

export function useGetEfileReportsHouseSenateIndex<TError = unknown>(
  args: InferRequestType<(typeof client.efile.reports)['house-senate']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.efile.reports)['house-senate']['index']['$get']>>
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
        ? getGetEfileReportsHouseSenateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.efile.reports)['house-senate']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.efile.reports['house-senate'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEfileReportsHouseSenateIndex<TError = unknown>(
  args: InferRequestType<(typeof client.efile.reports)['house-senate']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.efile.reports)['house-senate']['index']['$get']>>
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
        ? getGetEfileReportsHouseSenateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.efile.reports)['house-senate']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.efile.reports['house-senate'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEfileReportsPacPartyIndexKey(
  args: InferRequestType<(typeof client.efile.reports)['pac-party']['index']['$get']>,
) {
  return ['efile', '/efile/reports/pac-party/', args] as const
}

export function useGetEfileReportsPacPartyIndex<TError = unknown>(
  args: InferRequestType<(typeof client.efile.reports)['pac-party']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.efile.reports)['pac-party']['index']['$get']>>
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
        ? getGetEfileReportsPacPartyIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.efile.reports)['pac-party']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.efile.reports['pac-party'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEfileReportsPacPartyIndex<TError = unknown>(
  args: InferRequestType<(typeof client.efile.reports)['pac-party']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.efile.reports)['pac-party']['index']['$get']>>
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
        ? getGetEfileReportsPacPartyIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.efile.reports)['pac-party']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.efile.reports['pac-party'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEfileReportsPresidentialIndexKey(
  args: InferRequestType<typeof client.efile.reports.presidential.index.$get>,
) {
  return ['efile', '/efile/reports/presidential/', args] as const
}

export function useGetEfileReportsPresidentialIndex<TError = unknown>(
  args: InferRequestType<typeof client.efile.reports.presidential.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.efile.reports.presidential.index.$get>>
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
        ? getGetEfileReportsPresidentialIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.efile.reports.presidential.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.efile.reports.presidential.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEfileReportsPresidentialIndex<TError = unknown>(
  args: InferRequestType<typeof client.efile.reports.presidential.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.efile.reports.presidential.index.$get>>
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
        ? getGetEfileReportsPresidentialIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.efile.reports.presidential.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.efile.reports.presidential.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetElectionDatesIndexKey(
  args: InferRequestType<(typeof client)['election-dates']['index']['$get']>,
) {
  return ['election-dates', '/election-dates/', args] as const
}

export function useGetElectionDatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['election-dates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['election-dates']['index']['$get']>>
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
        ? getGetElectionDatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['election-dates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['election-dates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetElectionDatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['election-dates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['election-dates']['index']['$get']>>
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
        ? getGetElectionDatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['election-dates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['election-dates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetElectioneeringIndexKey(
  args: InferRequestType<typeof client.electioneering.index.$get>,
) {
  return ['electioneering', '/electioneering/', args] as const
}

export function useGetElectioneeringIndex<TError = unknown>(
  args: InferRequestType<typeof client.electioneering.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.electioneering.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetElectioneeringIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.electioneering.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.electioneering.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetElectioneeringIndex<TError = unknown>(
  args: InferRequestType<typeof client.electioneering.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.electioneering.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetElectioneeringIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.electioneering.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.electioneering.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetElectioneeringAggregatesIndexKey(
  args: InferRequestType<typeof client.electioneering.aggregates.index.$get>,
) {
  return ['electioneering', '/electioneering/aggregates/', args] as const
}

export function useGetElectioneeringAggregatesIndex<TError = unknown>(
  args: InferRequestType<typeof client.electioneering.aggregates.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.electioneering.aggregates.index.$get>>
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
        ? getGetElectioneeringAggregatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.electioneering.aggregates.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.electioneering.aggregates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetElectioneeringAggregatesIndex<TError = unknown>(
  args: InferRequestType<typeof client.electioneering.aggregates.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.electioneering.aggregates.index.$get>>
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
        ? getGetElectioneeringAggregatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.electioneering.aggregates.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.electioneering.aggregates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetElectioneeringByCandidateIndexKey(
  args: InferRequestType<typeof client.electioneering.by_candidate.index.$get>,
) {
  return ['electioneering', '/electioneering/by_candidate/', args] as const
}

export function useGetElectioneeringByCandidateIndex<TError = unknown>(
  args: InferRequestType<typeof client.electioneering.by_candidate.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.electioneering.by_candidate.index.$get>>
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
        ? getGetElectioneeringByCandidateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.electioneering.by_candidate.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.electioneering.by_candidate.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetElectioneeringByCandidateIndex<TError = unknown>(
  args: InferRequestType<typeof client.electioneering.by_candidate.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.electioneering.by_candidate.index.$get>>
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
        ? getGetElectioneeringByCandidateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.electioneering.by_candidate.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.electioneering.by_candidate.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetElectioneeringTotalsByCandidateIndexKey(
  args: InferRequestType<typeof client.electioneering.totals.by_candidate.index.$get>,
) {
  return ['electioneering', '/electioneering/totals/by_candidate/', args] as const
}

export function useGetElectioneeringTotalsByCandidateIndex<TError = unknown>(
  args: InferRequestType<typeof client.electioneering.totals.by_candidate.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.electioneering.totals.by_candidate.index.$get>>
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
        ? getGetElectioneeringTotalsByCandidateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.electioneering.totals.by_candidate.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.electioneering.totals.by_candidate.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetElectioneeringTotalsByCandidateIndex<TError = unknown>(
  args: InferRequestType<typeof client.electioneering.totals.by_candidate.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.electioneering.totals.by_candidate.index.$get>>
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
        ? getGetElectioneeringTotalsByCandidateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.electioneering.totals.by_candidate.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.electioneering.totals.by_candidate.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetElectionsIndexKey(
  args: InferRequestType<typeof client.elections.index.$get>,
) {
  return ['elections', '/elections/', args] as const
}

export function useGetElectionsIndex<TError = unknown>(
  args: InferRequestType<typeof client.elections.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.elections.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetElectionsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.elections.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.elections.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetElectionsIndex<TError = unknown>(
  args: InferRequestType<typeof client.elections.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.elections.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetElectionsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.elections.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.elections.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetElectionsSearchIndexKey(
  args: InferRequestType<typeof client.elections.search.index.$get>,
) {
  return ['elections', '/elections/search/', args] as const
}

export function useGetElectionsSearchIndex<TError = unknown>(
  args: InferRequestType<typeof client.elections.search.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.elections.search.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetElectionsSearchIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.elections.search.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.elections.search.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetElectionsSearchIndex<TError = unknown>(
  args: InferRequestType<typeof client.elections.search.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.elections.search.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetElectionsSearchIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.elections.search.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.elections.search.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetElectionsSummaryIndexKey(
  args: InferRequestType<typeof client.elections.summary.index.$get>,
) {
  return ['elections', '/elections/summary/', args] as const
}

export function useGetElectionsSummaryIndex<TError = unknown>(
  args: InferRequestType<typeof client.elections.summary.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.elections.summary.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetElectionsSummaryIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.elections.summary.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.elections.summary.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetElectionsSummaryIndex<TError = unknown>(
  args: InferRequestType<typeof client.elections.summary.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.elections.summary.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetElectionsSummaryIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.elections.summary.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.elections.summary.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFilingsIndexKey(args: InferRequestType<typeof client.filings.index.$get>) {
  return ['filings', '/filings/', args] as const
}

export function useGetFilingsIndex<TError = unknown>(
  args: InferRequestType<typeof client.filings.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filings.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilingsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filings.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.filings.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilingsIndex<TError = unknown>(
  args: InferRequestType<typeof client.filings.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filings.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilingsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filings.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.filings.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLegalSearchIndexKey(
  args: InferRequestType<typeof client.legal.search.index.$get>,
) {
  return ['legal', '/legal/search/', args] as const
}

export function useGetLegalSearchIndex<TError = unknown>(
  args: InferRequestType<typeof client.legal.search.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal.search.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLegalSearchIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal.search.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.legal.search.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLegalSearchIndex<TError = unknown>(
  args: InferRequestType<typeof client.legal.search.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal.search.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLegalSearchIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal.search.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.legal.search.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNamesAuditCandidatesIndexKey(
  args: InferRequestType<typeof client.names.audit_candidates.index.$get>,
) {
  return ['names', '/names/audit_candidates/', args] as const
}

export function useGetNamesAuditCandidatesIndex<TError = unknown>(
  args: InferRequestType<typeof client.names.audit_candidates.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_candidates.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamesAuditCandidatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_candidates.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.audit_candidates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamesAuditCandidatesIndex<TError = unknown>(
  args: InferRequestType<typeof client.names.audit_candidates.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_candidates.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamesAuditCandidatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_candidates.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.audit_candidates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNamesAuditCommitteesIndexKey(
  args: InferRequestType<typeof client.names.audit_committees.index.$get>,
) {
  return ['names', '/names/audit_committees/', args] as const
}

export function useGetNamesAuditCommitteesIndex<TError = unknown>(
  args: InferRequestType<typeof client.names.audit_committees.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_committees.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamesAuditCommitteesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_committees.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.audit_committees.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamesAuditCommitteesIndex<TError = unknown>(
  args: InferRequestType<typeof client.names.audit_committees.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_committees.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamesAuditCommitteesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_committees.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.audit_committees.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNamesCandidatesIndexKey(
  args: InferRequestType<typeof client.names.candidates.index.$get>,
) {
  return ['names', '/names/candidates/', args] as const
}

export function useGetNamesCandidatesIndex<TError = unknown>(
  args: InferRequestType<typeof client.names.candidates.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.candidates.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamesCandidatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.candidates.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.candidates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamesCandidatesIndex<TError = unknown>(
  args: InferRequestType<typeof client.names.candidates.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.candidates.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamesCandidatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.candidates.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.candidates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNamesCommitteesIndexKey(
  args: InferRequestType<typeof client.names.committees.index.$get>,
) {
  return ['names', '/names/committees/', args] as const
}

export function useGetNamesCommitteesIndex<TError = unknown>(
  args: InferRequestType<typeof client.names.committees.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.committees.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamesCommitteesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.committees.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.committees.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamesCommitteesIndex<TError = unknown>(
  args: InferRequestType<typeof client.names.committees.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.committees.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamesCommitteesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.committees.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.committees.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOperationsLogIndexKey(
  args: InferRequestType<(typeof client)['operations-log']['index']['$get']>,
) {
  return ['operations-log', '/operations-log/', args] as const
}

export function useGetOperationsLogIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['operations-log']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['operations-log']['index']['$get']>>
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
        ? getGetOperationsLogIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['operations-log']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['operations-log'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOperationsLogIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['operations-log']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['operations-log']['index']['$get']>>
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
        ? getGetOperationsLogIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['operations-log']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['operations-log'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPresidentialContributionsByCandidateIndexKey(
  args: InferRequestType<typeof client.presidential.contributions.by_candidate.index.$get>,
) {
  return ['presidential', '/presidential/contributions/by_candidate/', args] as const
}

export function useGetPresidentialContributionsByCandidateIndex<TError = unknown>(
  args: InferRequestType<typeof client.presidential.contributions.by_candidate.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.presidential.contributions.by_candidate.index.$get>>
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
        ? getGetPresidentialContributionsByCandidateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.presidential.contributions.by_candidate.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.presidential.contributions.by_candidate.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPresidentialContributionsByCandidateIndex<TError = unknown>(
  args: InferRequestType<typeof client.presidential.contributions.by_candidate.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.presidential.contributions.by_candidate.index.$get>>
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
        ? getGetPresidentialContributionsByCandidateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.presidential.contributions.by_candidate.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.presidential.contributions.by_candidate.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPresidentialContributionsBySizeIndexKey(
  args: InferRequestType<typeof client.presidential.contributions.by_size.index.$get>,
) {
  return ['presidential', '/presidential/contributions/by_size/', args] as const
}

export function useGetPresidentialContributionsBySizeIndex<TError = unknown>(
  args: InferRequestType<typeof client.presidential.contributions.by_size.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.presidential.contributions.by_size.index.$get>>
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
        ? getGetPresidentialContributionsBySizeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.presidential.contributions.by_size.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.presidential.contributions.by_size.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPresidentialContributionsBySizeIndex<TError = unknown>(
  args: InferRequestType<typeof client.presidential.contributions.by_size.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.presidential.contributions.by_size.index.$get>>
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
        ? getGetPresidentialContributionsBySizeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.presidential.contributions.by_size.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.presidential.contributions.by_size.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPresidentialContributionsByStateIndexKey(
  args: InferRequestType<typeof client.presidential.contributions.by_state.index.$get>,
) {
  return ['presidential', '/presidential/contributions/by_state/', args] as const
}

export function useGetPresidentialContributionsByStateIndex<TError = unknown>(
  args: InferRequestType<typeof client.presidential.contributions.by_state.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.presidential.contributions.by_state.index.$get>>
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
        ? getGetPresidentialContributionsByStateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.presidential.contributions.by_state.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.presidential.contributions.by_state.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPresidentialContributionsByStateIndex<TError = unknown>(
  args: InferRequestType<typeof client.presidential.contributions.by_state.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.presidential.contributions.by_state.index.$get>>
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
        ? getGetPresidentialContributionsByStateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.presidential.contributions.by_state.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.presidential.contributions.by_state.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPresidentialCoverageEndDateIndexKey(
  args: InferRequestType<typeof client.presidential.coverage_end_date.index.$get>,
) {
  return ['presidential', '/presidential/coverage_end_date/', args] as const
}

export function useGetPresidentialCoverageEndDateIndex<TError = unknown>(
  args: InferRequestType<typeof client.presidential.coverage_end_date.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.presidential.coverage_end_date.index.$get>>
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
        ? getGetPresidentialCoverageEndDateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.presidential.coverage_end_date.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.presidential.coverage_end_date.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPresidentialCoverageEndDateIndex<TError = unknown>(
  args: InferRequestType<typeof client.presidential.coverage_end_date.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.presidential.coverage_end_date.index.$get>>
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
        ? getGetPresidentialCoverageEndDateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.presidential.coverage_end_date.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.presidential.coverage_end_date.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPresidentialFinancialSummaryIndexKey(
  args: InferRequestType<typeof client.presidential.financial_summary.index.$get>,
) {
  return ['presidential', '/presidential/financial_summary/', args] as const
}

export function useGetPresidentialFinancialSummaryIndex<TError = unknown>(
  args: InferRequestType<typeof client.presidential.financial_summary.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.presidential.financial_summary.index.$get>>
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
        ? getGetPresidentialFinancialSummaryIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.presidential.financial_summary.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.presidential.financial_summary.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPresidentialFinancialSummaryIndex<TError = unknown>(
  args: InferRequestType<typeof client.presidential.financial_summary.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.presidential.financial_summary.index.$get>>
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
        ? getGetPresidentialFinancialSummaryIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.presidential.financial_summary.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.presidential.financial_summary.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRadAnalystIndexKey(
  args: InferRequestType<(typeof client)['rad-analyst']['index']['$get']>,
) {
  return ['rad-analyst', '/rad-analyst/', args] as const
}

export function useGetRadAnalystIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['rad-analyst']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['rad-analyst']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRadAnalystIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['rad-analyst']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['rad-analyst'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRadAnalystIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['rad-analyst']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['rad-analyst']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRadAnalystIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['rad-analyst']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['rad-analyst'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportingDatesIndexKey(
  args: InferRequestType<(typeof client)['reporting-dates']['index']['$get']>,
) {
  return ['reporting-dates', '/reporting-dates/', args] as const
}

export function useGetReportingDatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['reporting-dates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['reporting-dates']['index']['$get']>>
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
        ? getGetReportingDatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['reporting-dates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['reporting-dates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportingDatesIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['reporting-dates']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['reporting-dates']['index']['$get']>>
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
        ? getGetReportingDatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['reporting-dates']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['reporting-dates'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsEntityTypeIndexKey(
  args: InferRequestType<(typeof client.reports)[':entity_type']['index']['$get']>,
) {
  return ['reports', '/reports/:entity_type/', args] as const
}

export function useGetReportsEntityTypeIndex<TError = unknown>(
  args: InferRequestType<(typeof client.reports)[':entity_type']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':entity_type']['index']['$get']>>
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
        ? getGetReportsEntityTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':entity_type']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports[':entity_type'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsEntityTypeIndex<TError = unknown>(
  args: InferRequestType<(typeof client.reports)[':entity_type']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':entity_type']['index']['$get']>>
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
        ? getGetReportsEntityTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports)[':entity_type']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports[':entity_type'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleAIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_a.index.$get>,
) {
  return ['schedules', '/schedules/schedule_a/', args] as const
}

export function useGetSchedulesScheduleAIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_a.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_a.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSchedulesScheduleAIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_a.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.schedule_a.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleAIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_a.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_a.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSchedulesScheduleAIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_a.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.schedule_a.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleAByEmployerIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_a.by_employer.index.$get>,
) {
  return ['schedules', '/schedules/schedule_a/by_employer/', args] as const
}

export function useGetSchedulesScheduleAByEmployerIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_employer.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_employer.index.$get>>
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
        ? getGetSchedulesScheduleAByEmployerIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_employer.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_a.by_employer.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleAByEmployerIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_employer.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_employer.index.$get>>
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
        ? getGetSchedulesScheduleAByEmployerIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_employer.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_a.by_employer.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleAByOccupationIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_a.by_occupation.index.$get>,
) {
  return ['schedules', '/schedules/schedule_a/by_occupation/', args] as const
}

export function useGetSchedulesScheduleAByOccupationIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_occupation.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_occupation.index.$get>>
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
        ? getGetSchedulesScheduleAByOccupationIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_occupation.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_a.by_occupation.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleAByOccupationIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_occupation.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_occupation.index.$get>>
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
        ? getGetSchedulesScheduleAByOccupationIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_occupation.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_a.by_occupation.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleABySizeIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_a.by_size.index.$get>,
) {
  return ['schedules', '/schedules/schedule_a/by_size/', args] as const
}

export function useGetSchedulesScheduleABySizeIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_size.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_size.index.$get>>
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
        ? getGetSchedulesScheduleABySizeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_size.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_a.by_size.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleABySizeIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_size.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_size.index.$get>>
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
        ? getGetSchedulesScheduleABySizeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_size.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_a.by_size.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleABySizeByCandidateIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_a.by_size.by_candidate.index.$get>,
) {
  return ['schedules', '/schedules/schedule_a/by_size/by_candidate/', args] as const
}

export function useGetSchedulesScheduleABySizeByCandidateIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_size.by_candidate.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_size.by_candidate.index.$get>>
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
        ? getGetSchedulesScheduleABySizeByCandidateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_size.by_candidate.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.schedules.schedule_a.by_size.by_candidate.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleABySizeByCandidateIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_size.by_candidate.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_size.by_candidate.index.$get>>
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
        ? getGetSchedulesScheduleABySizeByCandidateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_size.by_candidate.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.schedules.schedule_a.by_size.by_candidate.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleAByStateIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_a.by_state.index.$get>,
) {
  return ['schedules', '/schedules/schedule_a/by_state/', args] as const
}

export function useGetSchedulesScheduleAByStateIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_state.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.index.$get>>
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
        ? getGetSchedulesScheduleAByStateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_a.by_state.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleAByStateIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_state.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.index.$get>>
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
        ? getGetSchedulesScheduleAByStateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_a.by_state.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleAByStateByCandidateIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_a.by_state.by_candidate.index.$get>,
) {
  return ['schedules', '/schedules/schedule_a/by_state/by_candidate/', args] as const
}

export function useGetSchedulesScheduleAByStateByCandidateIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_state.by_candidate.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.by_candidate.index.$get>>
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
        ? getGetSchedulesScheduleAByStateByCandidateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.by_candidate.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.schedules.schedule_a.by_state.by_candidate.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleAByStateByCandidateIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_state.by_candidate.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.by_candidate.index.$get>>
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
        ? getGetSchedulesScheduleAByStateByCandidateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.by_candidate.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.schedules.schedule_a.by_state.by_candidate.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleAByStateByCandidateTotalsIndexKey(
  args: InferRequestType<
    typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get
  >,
) {
  return ['schedules', '/schedules/schedule_a/by_state/by_candidate/totals/', args] as const
}

export function useGetSchedulesScheduleAByStateByCandidateTotalsIndex<TError = unknown>(
  args: InferRequestType<
    typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get>
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
        ? getGetSchedulesScheduleAByStateByCandidateTotalsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.schedules.schedule_a.by_state.by_candidate.totals.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleAByStateByCandidateTotalsIndex<TError = unknown>(
  args: InferRequestType<
    typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get>
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
        ? getGetSchedulesScheduleAByStateByCandidateTotalsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.schedules.schedule_a.by_state.by_candidate.totals.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleAByStateTotalsIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_a.by_state.totals.index.$get>,
) {
  return ['schedules', '/schedules/schedule_a/by_state/totals/', args] as const
}

export function useGetSchedulesScheduleAByStateTotalsIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_state.totals.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.totals.index.$get>>
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
        ? getGetSchedulesScheduleAByStateTotalsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.totals.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_a.by_state.totals.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleAByStateTotalsIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_state.totals.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.totals.index.$get>>
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
        ? getGetSchedulesScheduleAByStateTotalsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.totals.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_a.by_state.totals.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleAByZipIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_a.by_zip.index.$get>,
) {
  return ['schedules', '/schedules/schedule_a/by_zip/', args] as const
}

export function useGetSchedulesScheduleAByZipIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_zip.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_zip.index.$get>>
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
        ? getGetSchedulesScheduleAByZipIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_zip.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.schedule_a.by_zip.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleAByZipIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_zip.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_zip.index.$get>>
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
        ? getGetSchedulesScheduleAByZipIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.by_zip.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.schedule_a.by_zip.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleAEfileIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_a.efile.index.$get>,
) {
  return ['schedules', '/schedules/schedule_a/efile/', args] as const
}

export function useGetSchedulesScheduleAEfileIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_a.efile.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.efile.index.$get>>
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
        ? getGetSchedulesScheduleAEfileIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.efile.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.schedule_a.efile.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleAEfileIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_a.efile.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.efile.index.$get>>
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
        ? getGetSchedulesScheduleAEfileIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_a.efile.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.schedule_a.efile.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleASubIdIndexKey(
  args: InferRequestType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>,
) {
  return ['schedules', '/schedules/schedule_a/:sub_id/', args] as const
}

export function useGetSchedulesScheduleASubIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>>
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
        ? getGetSchedulesScheduleASubIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_a[':sub_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleASubIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>>
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
        ? getGetSchedulesScheduleASubIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_a[':sub_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleBIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_b.index.$get>,
) {
  return ['schedules', '/schedules/schedule_b/', args] as const
}

export function useGetSchedulesScheduleBIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_b.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_b.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSchedulesScheduleBIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_b.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.schedule_b.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleBIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_b.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_b.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSchedulesScheduleBIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_b.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.schedule_b.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleBByPurposeIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_b.by_purpose.index.$get>,
) {
  return ['schedules', '/schedules/schedule_b/by_purpose/', args] as const
}

export function useGetSchedulesScheduleBByPurposeIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_b.by_purpose.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_b.by_purpose.index.$get>>
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
        ? getGetSchedulesScheduleBByPurposeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_b.by_purpose.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_b.by_purpose.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleBByPurposeIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_b.by_purpose.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_b.by_purpose.index.$get>>
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
        ? getGetSchedulesScheduleBByPurposeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_b.by_purpose.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_b.by_purpose.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleBByRecipientIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_b.by_recipient.index.$get>,
) {
  return ['schedules', '/schedules/schedule_b/by_recipient/', args] as const
}

export function useGetSchedulesScheduleBByRecipientIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_b.by_recipient.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_b.by_recipient.index.$get>>
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
        ? getGetSchedulesScheduleBByRecipientIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_b.by_recipient.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_b.by_recipient.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleBByRecipientIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_b.by_recipient.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_b.by_recipient.index.$get>>
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
        ? getGetSchedulesScheduleBByRecipientIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_b.by_recipient.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_b.by_recipient.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleBByRecipientIdIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_b.by_recipient_id.index.$get>,
) {
  return ['schedules', '/schedules/schedule_b/by_recipient_id/', args] as const
}

export function useGetSchedulesScheduleBByRecipientIdIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_b.by_recipient_id.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_b.by_recipient_id.index.$get>>
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
        ? getGetSchedulesScheduleBByRecipientIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_b.by_recipient_id.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_b.by_recipient_id.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleBByRecipientIdIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_b.by_recipient_id.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_b.by_recipient_id.index.$get>>
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
        ? getGetSchedulesScheduleBByRecipientIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_b.by_recipient_id.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_b.by_recipient_id.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleBEfileIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_b.efile.index.$get>,
) {
  return ['schedules', '/schedules/schedule_b/efile/', args] as const
}

export function useGetSchedulesScheduleBEfileIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_b.efile.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_b.efile.index.$get>>
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
        ? getGetSchedulesScheduleBEfileIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_b.efile.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.schedule_b.efile.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleBEfileIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_b.efile.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_b.efile.index.$get>>
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
        ? getGetSchedulesScheduleBEfileIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_b.efile.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.schedule_b.efile.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleBSubIdIndexKey(
  args: InferRequestType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>,
) {
  return ['schedules', '/schedules/schedule_b/:sub_id/', args] as const
}

export function useGetSchedulesScheduleBSubIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>>
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
        ? getGetSchedulesScheduleBSubIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_b[':sub_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleBSubIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>>
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
        ? getGetSchedulesScheduleBSubIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_b[':sub_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleCIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_c.index.$get>,
) {
  return ['schedules', '/schedules/schedule_c/', args] as const
}

export function useGetSchedulesScheduleCIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_c.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_c.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSchedulesScheduleCIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_c.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.schedule_c.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleCIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_c.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_c.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSchedulesScheduleCIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_c.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.schedule_c.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleCSubIdIndexKey(
  args: InferRequestType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>,
) {
  return ['schedules', '/schedules/schedule_c/:sub_id/', args] as const
}

export function useGetSchedulesScheduleCSubIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>>
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
        ? getGetSchedulesScheduleCSubIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_c[':sub_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleCSubIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>>
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
        ? getGetSchedulesScheduleCSubIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_c[':sub_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleDIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_d.index.$get>,
) {
  return ['schedules', '/schedules/schedule_d/', args] as const
}

export function useGetSchedulesScheduleDIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_d.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_d.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSchedulesScheduleDIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_d.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.schedule_d.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleDIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_d.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_d.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSchedulesScheduleDIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_d.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.schedule_d.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleDSubIdIndexKey(
  args: InferRequestType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>,
) {
  return ['schedules', '/schedules/schedule_d/:sub_id/', args] as const
}

export function useGetSchedulesScheduleDSubIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>>
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
        ? getGetSchedulesScheduleDSubIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_d[':sub_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleDSubIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>>
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
        ? getGetSchedulesScheduleDSubIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_d[':sub_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleEIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_e.index.$get>,
) {
  return ['schedules', '/schedules/schedule_e/', args] as const
}

export function useGetSchedulesScheduleEIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_e.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_e.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSchedulesScheduleEIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_e.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.schedule_e.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleEIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_e.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_e.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSchedulesScheduleEIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_e.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.schedule_e.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleEByCandidateIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_e.by_candidate.index.$get>,
) {
  return ['schedules', '/schedules/schedule_e/by_candidate/', args] as const
}

export function useGetSchedulesScheduleEByCandidateIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_e.by_candidate.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_e.by_candidate.index.$get>>
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
        ? getGetSchedulesScheduleEByCandidateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_e.by_candidate.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_e.by_candidate.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleEByCandidateIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_e.by_candidate.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_e.by_candidate.index.$get>>
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
        ? getGetSchedulesScheduleEByCandidateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_e.by_candidate.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_e.by_candidate.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleEEfileIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_e.efile.index.$get>,
) {
  return ['schedules', '/schedules/schedule_e/efile/', args] as const
}

export function useGetSchedulesScheduleEEfileIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_e.efile.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_e.efile.index.$get>>
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
        ? getGetSchedulesScheduleEEfileIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_e.efile.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.schedule_e.efile.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleEEfileIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_e.efile.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_e.efile.index.$get>>
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
        ? getGetSchedulesScheduleEEfileIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_e.efile.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.schedule_e.efile.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleETotalsByCandidateIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>,
) {
  return ['schedules', '/schedules/schedule_e/totals/by_candidate/', args] as const
}

export function useGetSchedulesScheduleETotalsByCandidateIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>>
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
        ? getGetSchedulesScheduleETotalsByCandidateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.schedules.schedule_e.totals.by_candidate.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleETotalsByCandidateIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>>
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
        ? getGetSchedulesScheduleETotalsByCandidateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.schedules.schedule_e.totals.by_candidate.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleFIndexKey(
  args: InferRequestType<typeof client.schedules.schedule_f.index.$get>,
) {
  return ['schedules', '/schedules/schedule_f/', args] as const
}

export function useGetSchedulesScheduleFIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_f.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_f.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSchedulesScheduleFIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_f.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.schedule_f.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleFIndex<TError = unknown>(
  args: InferRequestType<typeof client.schedules.schedule_f.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_f.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSchedulesScheduleFIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_f.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.schedule_f.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesScheduleFSubIdIndexKey(
  args: InferRequestType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>,
) {
  return ['schedules', '/schedules/schedule_f/:sub_id/', args] as const
}

export function useGetSchedulesScheduleFSubIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>>
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
        ? getGetSchedulesScheduleFSubIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_f[':sub_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedulesScheduleFSubIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>>
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
        ? getGetSchedulesScheduleFSubIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.schedules.schedule_f[':sub_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStateElectionOfficeIndexKey(
  args: InferRequestType<(typeof client)['state-election-office']['index']['$get']>,
) {
  return ['state-election-office', '/state-election-office/', args] as const
}

export function useGetStateElectionOfficeIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['state-election-office']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['state-election-office']['index']['$get']>>
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
        ? getGetStateElectionOfficeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['state-election-office']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['state-election-office'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStateElectionOfficeIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['state-election-office']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['state-election-office']['index']['$get']>>
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
        ? getGetStateElectionOfficeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['state-election-office']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['state-election-office'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTotalsByEntityIndexKey(
  args: InferRequestType<typeof client.totals.by_entity.index.$get>,
) {
  return ['totals', '/totals/by_entity/', args] as const
}

export function useGetTotalsByEntityIndex<TError = unknown>(
  args: InferRequestType<typeof client.totals.by_entity.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.totals.by_entity.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTotalsByEntityIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.totals.by_entity.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.totals.by_entity.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTotalsByEntityIndex<TError = unknown>(
  args: InferRequestType<typeof client.totals.by_entity.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.totals.by_entity.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTotalsByEntityIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.totals.by_entity.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.totals.by_entity.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTotalsEntityTypeIndexKey(
  args: InferRequestType<(typeof client.totals)[':entity_type']['index']['$get']>,
) {
  return ['totals', '/totals/:entity_type/', args] as const
}

export function useGetTotalsEntityTypeIndex<TError = unknown>(
  args: InferRequestType<(typeof client.totals)[':entity_type']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.totals)[':entity_type']['index']['$get']>>
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
        ? getGetTotalsEntityTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.totals)[':entity_type']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.totals[':entity_type'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTotalsEntityTypeIndex<TError = unknown>(
  args: InferRequestType<(typeof client.totals)[':entity_type']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.totals)[':entity_type']['index']['$get']>>
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
        ? getGetTotalsEntityTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.totals)[':entity_type']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.totals[':entity_type'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
