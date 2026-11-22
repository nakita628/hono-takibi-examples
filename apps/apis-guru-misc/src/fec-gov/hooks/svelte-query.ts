import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function getAuditCaseIndexQueryKey(
  args: InferRequestType<(typeof client)['audit-case']['index']['$get']>,
) {
  return ['audit-case', '/audit-case/', args] as const
}

export function getAuditCaseIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['audit-case']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['audit-case']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['audit-case']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditCaseIndexQueryKey>
  >({
    queryKey: getAuditCaseIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['audit-case'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAuditCaseIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['audit-case']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['audit-case']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['audit-case']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuditCaseIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuditCaseIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAuditCategoryIndexQueryKey(
  args: InferRequestType<(typeof client)['audit-category']['index']['$get']>,
) {
  return ['audit-category', '/audit-category/', args] as const
}

export function getAuditCategoryIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['audit-category']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['audit-category']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['audit-category']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditCategoryIndexQueryKey>
  >({
    queryKey: getAuditCategoryIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['audit-category'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuditCategoryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['audit-category']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['audit-category']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['audit-category']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuditCategoryIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuditCategoryIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAuditPrimaryCategoryIndexQueryKey(
  args: InferRequestType<(typeof client)['audit-primary-category']['index']['$get']>,
) {
  return ['audit-primary-category', '/audit-primary-category/', args] as const
}

export function getAuditPrimaryCategoryIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['audit-primary-category']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['audit-primary-category']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['audit-primary-category']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditPrimaryCategoryIndexQueryKey>
  >({
    queryKey: getAuditPrimaryCategoryIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['audit-primary-category'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuditPrimaryCategoryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['audit-primary-category']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['audit-primary-category']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['audit-primary-category']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuditPrimaryCategoryIndexQueryKey>
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
      ...getAuditPrimaryCategoryIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCalendarDatesIndexQueryKey(
  args: InferRequestType<(typeof client)['calendar-dates']['index']['$get']>,
) {
  return ['calendar-dates', '/calendar-dates/', args] as const
}

export function getCalendarDatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['calendar-dates']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['calendar-dates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['calendar-dates']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarDatesIndexQueryKey>
  >({
    queryKey: getCalendarDatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['calendar-dates'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCalendarDatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['calendar-dates']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['calendar-dates']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['calendar-dates']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCalendarDatesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCalendarDatesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCalendarDatesExportIndexQueryKey(
  args: InferRequestType<(typeof client)['calendar-dates']['export']['index']['$get']>,
) {
  return ['calendar-dates', '/calendar-dates/export/', args] as const
}

export function getCalendarDatesExportIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['calendar-dates']['export']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['calendar-dates']['export']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['calendar-dates']['export']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarDatesExportIndexQueryKey>
  >({
    queryKey: getCalendarDatesExportIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['calendar-dates'].export.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCalendarDatesExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['calendar-dates']['export']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['calendar-dates']['export']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['calendar-dates']['export']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCalendarDatesExportIndexQueryKey>
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
      ...getCalendarDatesExportIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCandidateCandidateIdIndexQueryKey(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['index']['$get']>,
) {
  return ['candidate', '/candidate/:candidate_id/', args] as const
}

export function getCandidateCandidateIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.candidate)[':candidate_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.candidate)[':candidate_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidateCandidateIdIndexQueryKey>
  >({
    queryKey: getCandidateCandidateIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.candidate[':candidate_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCandidateCandidateIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.candidate)[':candidate_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.candidate)[':candidate_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.candidate)[':candidate_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCandidateCandidateIdIndexQueryKey>
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
      ...getCandidateCandidateIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCandidateCandidateIdCommitteesIndexQueryKey(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['committees']['index']['$get']>,
) {
  return ['candidate', '/candidate/:candidate_id/committees/', args] as const
}

export function getCandidateCandidateIdCommitteesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.candidate)[':candidate_id']['committees']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['committees']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.candidate)[':candidate_id']['committees']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidateCandidateIdCommitteesIndexQueryKey>
  >({
    queryKey: getCandidateCandidateIdCommitteesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.candidate[':candidate_id'].committees.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCandidateCandidateIdCommitteesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.candidate)[':candidate_id']['committees']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.candidate)[':candidate_id']['committees']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.candidate)[':candidate_id']['committees']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCandidateCandidateIdCommitteesIndexQueryKey>
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
      ...getCandidateCandidateIdCommitteesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCandidateCandidateIdCommitteesHistoryIndexQueryKey(
  args: InferRequestType<
    (typeof client.candidate)[':candidate_id']['committees']['history']['index']['$get']
  >,
) {
  return ['candidate', '/candidate/:candidate_id/committees/history/', args] as const
}

export function getCandidateCandidateIdCommitteesHistoryIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.candidate)[':candidate_id']['committees']['history']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCandidateCandidateIdCommitteesHistoryIndexQueryKey>
  >({
    queryKey: getCandidateCandidateIdCommitteesHistoryIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.candidate[':candidate_id'].committees.history.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCandidateCandidateIdCommitteesHistoryIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.candidate)[':candidate_id']['committees']['history']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCandidateCandidateIdCommitteesHistoryIndexQueryKey>
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
      ...getCandidateCandidateIdCommitteesHistoryIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCandidateCandidateIdCommitteesHistoryCycleIndexQueryKey(
  args: InferRequestType<
    (typeof client.candidate)[':candidate_id']['committees']['history'][':cycle']['index']['$get']
  >,
) {
  return ['candidate', '/candidate/:candidate_id/committees/history/:cycle/', args] as const
}

export function getCandidateCandidateIdCommitteesHistoryCycleIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.candidate)[':candidate_id']['committees']['history'][':cycle']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCandidateCandidateIdCommitteesHistoryCycleIndexQueryKey>
  >({
    queryKey: getCandidateCandidateIdCommitteesHistoryCycleIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.candidate[':candidate_id'].committees.history[':cycle'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCandidateCandidateIdCommitteesHistoryCycleIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.candidate)[':candidate_id']['committees']['history'][':cycle']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCandidateCandidateIdCommitteesHistoryCycleIndexQueryKey>
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
      ...getCandidateCandidateIdCommitteesHistoryCycleIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCandidateCandidateIdFilingsIndexQueryKey(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['filings']['index']['$get']>,
) {
  return ['candidate', '/candidate/:candidate_id/filings/', args] as const
}

export function getCandidateCandidateIdFilingsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.candidate)[':candidate_id']['filings']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['filings']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.candidate)[':candidate_id']['filings']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidateCandidateIdFilingsIndexQueryKey>
  >({
    queryKey: getCandidateCandidateIdFilingsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.candidate[':candidate_id'].filings.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCandidateCandidateIdFilingsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.candidate)[':candidate_id']['filings']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.candidate)[':candidate_id']['filings']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.candidate)[':candidate_id']['filings']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCandidateCandidateIdFilingsIndexQueryKey>
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
      ...getCandidateCandidateIdFilingsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCandidateCandidateIdHistoryIndexQueryKey(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['history']['index']['$get']>,
) {
  return ['candidate', '/candidate/:candidate_id/history/', args] as const
}

export function getCandidateCandidateIdHistoryIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.candidate)[':candidate_id']['history']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['history']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.candidate)[':candidate_id']['history']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidateCandidateIdHistoryIndexQueryKey>
  >({
    queryKey: getCandidateCandidateIdHistoryIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.candidate[':candidate_id'].history.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCandidateCandidateIdHistoryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.candidate)[':candidate_id']['history']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.candidate)[':candidate_id']['history']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.candidate)[':candidate_id']['history']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCandidateCandidateIdHistoryIndexQueryKey>
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
      ...getCandidateCandidateIdHistoryIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCandidateCandidateIdHistoryCycleIndexQueryKey(
  args: InferRequestType<
    (typeof client.candidate)[':candidate_id']['history'][':cycle']['index']['$get']
  >,
) {
  return ['candidate', '/candidate/:candidate_id/history/:cycle/', args] as const
}

export function getCandidateCandidateIdHistoryCycleIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.candidate)[':candidate_id']['history'][':cycle']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCandidateCandidateIdHistoryCycleIndexQueryKey>
  >({
    queryKey: getCandidateCandidateIdHistoryCycleIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.candidate[':candidate_id'].history[':cycle'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCandidateCandidateIdHistoryCycleIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.candidate)[':candidate_id']['history'][':cycle']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCandidateCandidateIdHistoryCycleIndexQueryKey>
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
      ...getCandidateCandidateIdHistoryCycleIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCandidateCandidateIdTotalsIndexQueryKey(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['totals']['index']['$get']>,
) {
  return ['candidate', '/candidate/:candidate_id/totals/', args] as const
}

export function getCandidateCandidateIdTotalsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.candidate)[':candidate_id']['totals']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['totals']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.candidate)[':candidate_id']['totals']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidateCandidateIdTotalsIndexQueryKey>
  >({
    queryKey: getCandidateCandidateIdTotalsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.candidate[':candidate_id'].totals.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCandidateCandidateIdTotalsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.candidate)[':candidate_id']['totals']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.candidate)[':candidate_id']['totals']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.candidate)[':candidate_id']['totals']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCandidateCandidateIdTotalsIndexQueryKey>
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
      ...getCandidateCandidateIdTotalsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCandidatesIndexQueryKey(
  args: InferRequestType<typeof client.candidates.index.$get>,
) {
  return ['candidates', '/candidates/', args] as const
}

export function getCandidatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.candidates.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.candidates.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.candidates.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCandidatesIndexQueryKey>
  >({
    queryKey: getCandidatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.candidates.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCandidatesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.candidates.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.candidates.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.candidates.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCandidatesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCandidatesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCandidatesSearchIndexQueryKey(
  args: InferRequestType<typeof client.candidates.search.index.$get>,
) {
  return ['candidates', '/candidates/search/', args] as const
}

export function getCandidatesSearchIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.candidates.search.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.candidates.search.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.candidates.search.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidatesSearchIndexQueryKey>
  >({
    queryKey: getCandidatesSearchIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.candidates.search.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCandidatesSearchIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.candidates.search.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.candidates.search.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.candidates.search.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCandidatesSearchIndexQueryKey>
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
      ...getCandidatesSearchIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCandidatesTotalsIndexQueryKey(
  args: InferRequestType<typeof client.candidates.totals.index.$get>,
) {
  return ['candidates', '/candidates/totals/', args] as const
}

export function getCandidatesTotalsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.candidates.totals.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.candidates.totals.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.candidates.totals.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidatesTotalsIndexQueryKey>
  >({
    queryKey: getCandidatesTotalsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.candidates.totals.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCandidatesTotalsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.candidates.totals.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.candidates.totals.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.candidates.totals.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCandidatesTotalsIndexQueryKey>
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
      ...getCandidatesTotalsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCandidatesTotalsAggregatesIndexQueryKey(
  args: InferRequestType<typeof client.candidates.totals.aggregates.index.$get>,
) {
  return ['candidates', '/candidates/totals/aggregates/', args] as const
}

export function getCandidatesTotalsAggregatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.candidates.totals.aggregates.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.candidates.totals.aggregates.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.candidates.totals.aggregates.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidatesTotalsAggregatesIndexQueryKey>
  >({
    queryKey: getCandidatesTotalsAggregatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.candidates.totals.aggregates.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCandidatesTotalsAggregatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.candidates.totals.aggregates.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.candidates.totals.aggregates.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.candidates.totals.aggregates.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCandidatesTotalsAggregatesIndexQueryKey>
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
      ...getCandidatesTotalsAggregatesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCandidatesTotalsByOfficeIndexQueryKey(
  args: InferRequestType<typeof client.candidates.totals.by_office.index.$get>,
) {
  return ['candidates', '/candidates/totals/by_office/', args] as const
}

export function getCandidatesTotalsByOfficeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.candidates.totals.by_office.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.candidates.totals.by_office.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.candidates.totals.by_office.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidatesTotalsByOfficeIndexQueryKey>
  >({
    queryKey: getCandidatesTotalsByOfficeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.candidates.totals.by_office.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCandidatesTotalsByOfficeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.candidates.totals.by_office.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.candidates.totals.by_office.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.candidates.totals.by_office.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCandidatesTotalsByOfficeIndexQueryKey>
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
      ...getCandidatesTotalsByOfficeIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCandidatesTotalsByOfficeByPartyIndexQueryKey(
  args: InferRequestType<typeof client.candidates.totals.by_office.by_party.index.$get>,
) {
  return ['candidates', '/candidates/totals/by_office/by_party/', args] as const
}

export function getCandidatesTotalsByOfficeByPartyIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.candidates.totals.by_office.by_party.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.candidates.totals.by_office.by_party.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.candidates.totals.by_office.by_party.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidatesTotalsByOfficeByPartyIndexQueryKey>
  >({
    queryKey: getCandidatesTotalsByOfficeByPartyIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.candidates.totals.by_office.by_party.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCandidatesTotalsByOfficeByPartyIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.candidates.totals.by_office.by_party.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.candidates.totals.by_office.by_party.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.candidates.totals.by_office.by_party.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCandidatesTotalsByOfficeByPartyIndexQueryKey>
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
      ...getCandidatesTotalsByOfficeByPartyIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeCommitteeIdIndexQueryKey(
  args: InferRequestType<(typeof client.committee)[':committee_id']['index']['$get']>,
) {
  return ['committee', '/committee/:committee_id/', args] as const
}

export function getCommitteeCommitteeIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.committee)[':committee_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.committee)[':committee_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.committee)[':committee_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCommitteeIdIndexQueryKey>
  >({
    queryKey: getCommitteeCommitteeIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committee[':committee_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeCommitteeIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.committee)[':committee_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.committee)[':committee_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.committee)[':committee_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommitteeCommitteeIdIndexQueryKey>
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
      ...getCommitteeCommitteeIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeCommitteeIdCandidatesIndexQueryKey(
  args: InferRequestType<(typeof client.committee)[':committee_id']['candidates']['index']['$get']>,
) {
  return ['committee', '/committee/:committee_id/candidates/', args] as const
}

export function getCommitteeCommitteeIdCandidatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.committee)[':committee_id']['candidates']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.committee)[':committee_id']['candidates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.committee)[':committee_id']['candidates']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCommitteeIdCandidatesIndexQueryKey>
  >({
    queryKey: getCommitteeCommitteeIdCandidatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committee[':committee_id'].candidates.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeCommitteeIdCandidatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.committee)[':committee_id']['candidates']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.committee)[':committee_id']['candidates']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.committee)[':committee_id']['candidates']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommitteeCommitteeIdCandidatesIndexQueryKey>
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
      ...getCommitteeCommitteeIdCandidatesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeCommitteeIdCandidatesHistoryIndexQueryKey(
  args: InferRequestType<
    (typeof client.committee)[':committee_id']['candidates']['history']['index']['$get']
  >,
) {
  return ['committee', '/committee/:committee_id/candidates/history/', args] as const
}

export function getCommitteeCommitteeIdCandidatesHistoryIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.committee)[':committee_id']['candidates']['history']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCommitteeCommitteeIdCandidatesHistoryIndexQueryKey>
  >({
    queryKey: getCommitteeCommitteeIdCandidatesHistoryIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committee[':committee_id'].candidates.history.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeCommitteeIdCandidatesHistoryIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.committee)[':committee_id']['candidates']['history']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCommitteeCommitteeIdCandidatesHistoryIndexQueryKey>
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
      ...getCommitteeCommitteeIdCandidatesHistoryIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeCommitteeIdCandidatesHistoryCycleIndexQueryKey(
  args: InferRequestType<
    (typeof client.committee)[':committee_id']['candidates']['history'][':cycle']['index']['$get']
  >,
) {
  return ['committee', '/committee/:committee_id/candidates/history/:cycle/', args] as const
}

export function getCommitteeCommitteeIdCandidatesHistoryCycleIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.committee)[':committee_id']['candidates']['history'][':cycle']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCommitteeCommitteeIdCandidatesHistoryCycleIndexQueryKey>
  >({
    queryKey: getCommitteeCommitteeIdCandidatesHistoryCycleIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committee[':committee_id'].candidates.history[':cycle'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeCommitteeIdCandidatesHistoryCycleIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.committee)[':committee_id']['candidates']['history'][':cycle']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCommitteeCommitteeIdCandidatesHistoryCycleIndexQueryKey>
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
      ...getCommitteeCommitteeIdCandidatesHistoryCycleIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeCommitteeIdFilingsIndexQueryKey(
  args: InferRequestType<(typeof client.committee)[':committee_id']['filings']['index']['$get']>,
) {
  return ['committee', '/committee/:committee_id/filings/', args] as const
}

export function getCommitteeCommitteeIdFilingsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.committee)[':committee_id']['filings']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.committee)[':committee_id']['filings']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.committee)[':committee_id']['filings']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCommitteeIdFilingsIndexQueryKey>
  >({
    queryKey: getCommitteeCommitteeIdFilingsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committee[':committee_id'].filings.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeCommitteeIdFilingsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.committee)[':committee_id']['filings']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.committee)[':committee_id']['filings']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.committee)[':committee_id']['filings']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommitteeCommitteeIdFilingsIndexQueryKey>
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
      ...getCommitteeCommitteeIdFilingsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeCommitteeIdHistoryIndexQueryKey(
  args: InferRequestType<(typeof client.committee)[':committee_id']['history']['index']['$get']>,
) {
  return ['committee', '/committee/:committee_id/history/', args] as const
}

export function getCommitteeCommitteeIdHistoryIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.committee)[':committee_id']['history']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.committee)[':committee_id']['history']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.committee)[':committee_id']['history']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCommitteeIdHistoryIndexQueryKey>
  >({
    queryKey: getCommitteeCommitteeIdHistoryIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committee[':committee_id'].history.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeCommitteeIdHistoryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.committee)[':committee_id']['history']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.committee)[':committee_id']['history']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.committee)[':committee_id']['history']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommitteeCommitteeIdHistoryIndexQueryKey>
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
      ...getCommitteeCommitteeIdHistoryIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeCommitteeIdHistoryCycleIndexQueryKey(
  args: InferRequestType<
    (typeof client.committee)[':committee_id']['history'][':cycle']['index']['$get']
  >,
) {
  return ['committee', '/committee/:committee_id/history/:cycle/', args] as const
}

export function getCommitteeCommitteeIdHistoryCycleIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.committee)[':committee_id']['history'][':cycle']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCommitteeCommitteeIdHistoryCycleIndexQueryKey>
  >({
    queryKey: getCommitteeCommitteeIdHistoryCycleIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committee[':committee_id'].history[':cycle'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeCommitteeIdHistoryCycleIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.committee)[':committee_id']['history'][':cycle']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCommitteeCommitteeIdHistoryCycleIndexQueryKey>
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
      ...getCommitteeCommitteeIdHistoryCycleIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeCommitteeIdReportsIndexQueryKey(
  args: InferRequestType<(typeof client.committee)[':committee_id']['reports']['index']['$get']>,
) {
  return ['committee', '/committee/:committee_id/reports/', args] as const
}

export function getCommitteeCommitteeIdReportsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.committee)[':committee_id']['reports']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.committee)[':committee_id']['reports']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.committee)[':committee_id']['reports']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCommitteeIdReportsIndexQueryKey>
  >({
    queryKey: getCommitteeCommitteeIdReportsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committee[':committee_id'].reports.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeCommitteeIdReportsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.committee)[':committee_id']['reports']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.committee)[':committee_id']['reports']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.committee)[':committee_id']['reports']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommitteeCommitteeIdReportsIndexQueryKey>
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
      ...getCommitteeCommitteeIdReportsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeCommitteeIdTotalsIndexQueryKey(
  args: InferRequestType<(typeof client.committee)[':committee_id']['totals']['index']['$get']>,
) {
  return ['committee', '/committee/:committee_id/totals/', args] as const
}

export function getCommitteeCommitteeIdTotalsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.committee)[':committee_id']['totals']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.committee)[':committee_id']['totals']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.committee)[':committee_id']['totals']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCommitteeIdTotalsIndexQueryKey>
  >({
    queryKey: getCommitteeCommitteeIdTotalsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committee[':committee_id'].totals.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeCommitteeIdTotalsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.committee)[':committee_id']['totals']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.committee)[':committee_id']['totals']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.committee)[':committee_id']['totals']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommitteeCommitteeIdTotalsIndexQueryKey>
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
      ...getCommitteeCommitteeIdTotalsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommitteesIndexQueryKey(
  args: InferRequestType<typeof client.committees.index.$get>,
) {
  return ['committees', '/committees/', args] as const
}

export function getCommitteesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committees.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.committees.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committees.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteesIndexQueryKey>
  >({
    queryKey: getCommitteesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committees.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCommitteesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committees.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.committees.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committees.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCommitteesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCommitteesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCommunicationCostsIndexQueryKey(
  args: InferRequestType<typeof client.communication_costs.index.$get>,
) {
  return ['communication_costs', '/communication_costs/', args] as const
}

export function getCommunicationCostsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.communication_costs.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.communication_costs.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.communication_costs.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommunicationCostsIndexQueryKey>
  >({
    queryKey: getCommunicationCostsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.communication_costs.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommunicationCostsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.communication_costs.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.communication_costs.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.communication_costs.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommunicationCostsIndexQueryKey>
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
      ...getCommunicationCostsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommunicationCostsAggregatesIndexQueryKey(
  args: InferRequestType<typeof client.communication_costs.aggregates.index.$get>,
) {
  return ['communication_costs', '/communication_costs/aggregates/', args] as const
}

export function getCommunicationCostsAggregatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.communication_costs.aggregates.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.communication_costs.aggregates.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.communication_costs.aggregates.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommunicationCostsAggregatesIndexQueryKey>
  >({
    queryKey: getCommunicationCostsAggregatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.communication_costs.aggregates.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommunicationCostsAggregatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.communication_costs.aggregates.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.communication_costs.aggregates.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.communication_costs.aggregates.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommunicationCostsAggregatesIndexQueryKey>
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
      ...getCommunicationCostsAggregatesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommunicationCostsByCandidateIndexQueryKey(
  args: InferRequestType<typeof client.communication_costs.by_candidate.index.$get>,
) {
  return ['communication_costs', '/communication_costs/by_candidate/', args] as const
}

export function getCommunicationCostsByCandidateIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.communication_costs.by_candidate.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.communication_costs.by_candidate.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.communication_costs.by_candidate.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommunicationCostsByCandidateIndexQueryKey>
  >({
    queryKey: getCommunicationCostsByCandidateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.communication_costs.by_candidate.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommunicationCostsByCandidateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.communication_costs.by_candidate.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.communication_costs.by_candidate.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.communication_costs.by_candidate.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommunicationCostsByCandidateIndexQueryKey>
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
      ...getCommunicationCostsByCandidateIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommunicationCostsTotalsByCandidateIndexQueryKey(
  args: InferRequestType<typeof client.communication_costs.totals.by_candidate.index.$get>,
) {
  return ['communication_costs', '/communication_costs/totals/by_candidate/', args] as const
}

export function getCommunicationCostsTotalsByCandidateIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.communication_costs.totals.by_candidate.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.communication_costs.totals.by_candidate.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.communication_costs.totals.by_candidate.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommunicationCostsTotalsByCandidateIndexQueryKey>
  >({
    queryKey: getCommunicationCostsTotalsByCandidateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.communication_costs.totals.by_candidate.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommunicationCostsTotalsByCandidateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.communication_costs.totals.by_candidate.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.communication_costs.totals.by_candidate.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.communication_costs.totals.by_candidate.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommunicationCostsTotalsByCandidateIndexQueryKey>
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
      ...getCommunicationCostsTotalsByCandidateIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getEfileFilingsIndexQueryKey(
  args: InferRequestType<typeof client.efile.filings.index.$get>,
) {
  return ['efile', '/efile/filings/', args] as const
}

export function getEfileFilingsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.efile.filings.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.efile.filings.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.efile.filings.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEfileFilingsIndexQueryKey>
  >({
    queryKey: getEfileFilingsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.efile.filings.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEfileFilingsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.efile.filings.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.efile.filings.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.efile.filings.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEfileFilingsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEfileFilingsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEfileReportsHouseSenateIndexQueryKey(
  args: InferRequestType<(typeof client.efile.reports)['house-senate']['index']['$get']>,
) {
  return ['efile', '/efile/reports/house-senate/', args] as const
}

export function getEfileReportsHouseSenateIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.efile.reports)['house-senate']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.efile.reports)['house-senate']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.efile.reports)['house-senate']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEfileReportsHouseSenateIndexQueryKey>
  >({
    queryKey: getEfileReportsHouseSenateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.efile.reports['house-senate'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEfileReportsHouseSenateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.efile.reports)['house-senate']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.efile.reports)['house-senate']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.efile.reports)['house-senate']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEfileReportsHouseSenateIndexQueryKey>
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
      ...getEfileReportsHouseSenateIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEfileReportsPacPartyIndexQueryKey(
  args: InferRequestType<(typeof client.efile.reports)['pac-party']['index']['$get']>,
) {
  return ['efile', '/efile/reports/pac-party/', args] as const
}

export function getEfileReportsPacPartyIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.efile.reports)['pac-party']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.efile.reports)['pac-party']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.efile.reports)['pac-party']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEfileReportsPacPartyIndexQueryKey>
  >({
    queryKey: getEfileReportsPacPartyIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.efile.reports['pac-party'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEfileReportsPacPartyIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.efile.reports)['pac-party']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.efile.reports)['pac-party']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.efile.reports)['pac-party']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEfileReportsPacPartyIndexQueryKey>
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
      ...getEfileReportsPacPartyIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEfileReportsPresidentialIndexQueryKey(
  args: InferRequestType<typeof client.efile.reports.presidential.index.$get>,
) {
  return ['efile', '/efile/reports/presidential/', args] as const
}

export function getEfileReportsPresidentialIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.efile.reports.presidential.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.efile.reports.presidential.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.efile.reports.presidential.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEfileReportsPresidentialIndexQueryKey>
  >({
    queryKey: getEfileReportsPresidentialIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.efile.reports.presidential.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEfileReportsPresidentialIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.efile.reports.presidential.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.efile.reports.presidential.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.efile.reports.presidential.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEfileReportsPresidentialIndexQueryKey>
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
      ...getEfileReportsPresidentialIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getElectionDatesIndexQueryKey(
  args: InferRequestType<(typeof client)['election-dates']['index']['$get']>,
) {
  return ['election-dates', '/election-dates/', args] as const
}

export function getElectionDatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['election-dates']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['election-dates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['election-dates']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getElectionDatesIndexQueryKey>
  >({
    queryKey: getElectionDatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['election-dates'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createElectionDatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['election-dates']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['election-dates']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['election-dates']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getElectionDatesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getElectionDatesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getElectioneeringIndexQueryKey(
  args: InferRequestType<typeof client.electioneering.index.$get>,
) {
  return ['electioneering', '/electioneering/', args] as const
}

export function getElectioneeringIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.electioneering.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.electioneering.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.electioneering.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getElectioneeringIndexQueryKey>
  >({
    queryKey: getElectioneeringIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.electioneering.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createElectioneeringIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.electioneering.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.electioneering.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.electioneering.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getElectioneeringIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getElectioneeringIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getElectioneeringAggregatesIndexQueryKey(
  args: InferRequestType<typeof client.electioneering.aggregates.index.$get>,
) {
  return ['electioneering', '/electioneering/aggregates/', args] as const
}

export function getElectioneeringAggregatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.electioneering.aggregates.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.electioneering.aggregates.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.electioneering.aggregates.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getElectioneeringAggregatesIndexQueryKey>
  >({
    queryKey: getElectioneeringAggregatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.electioneering.aggregates.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createElectioneeringAggregatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.electioneering.aggregates.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.electioneering.aggregates.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.electioneering.aggregates.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getElectioneeringAggregatesIndexQueryKey>
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
      ...getElectioneeringAggregatesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getElectioneeringByCandidateIndexQueryKey(
  args: InferRequestType<typeof client.electioneering.by_candidate.index.$get>,
) {
  return ['electioneering', '/electioneering/by_candidate/', args] as const
}

export function getElectioneeringByCandidateIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.electioneering.by_candidate.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.electioneering.by_candidate.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.electioneering.by_candidate.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getElectioneeringByCandidateIndexQueryKey>
  >({
    queryKey: getElectioneeringByCandidateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.electioneering.by_candidate.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createElectioneeringByCandidateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.electioneering.by_candidate.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.electioneering.by_candidate.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.electioneering.by_candidate.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getElectioneeringByCandidateIndexQueryKey>
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
      ...getElectioneeringByCandidateIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getElectioneeringTotalsByCandidateIndexQueryKey(
  args: InferRequestType<typeof client.electioneering.totals.by_candidate.index.$get>,
) {
  return ['electioneering', '/electioneering/totals/by_candidate/', args] as const
}

export function getElectioneeringTotalsByCandidateIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.electioneering.totals.by_candidate.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.electioneering.totals.by_candidate.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.electioneering.totals.by_candidate.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getElectioneeringTotalsByCandidateIndexQueryKey>
  >({
    queryKey: getElectioneeringTotalsByCandidateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.electioneering.totals.by_candidate.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createElectioneeringTotalsByCandidateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.electioneering.totals.by_candidate.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.electioneering.totals.by_candidate.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.electioneering.totals.by_candidate.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getElectioneeringTotalsByCandidateIndexQueryKey>
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
      ...getElectioneeringTotalsByCandidateIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getElectionsIndexQueryKey(
  args: InferRequestType<typeof client.elections.index.$get>,
) {
  return ['elections', '/elections/', args] as const
}

export function getElectionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.elections.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.elections.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.elections.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getElectionsIndexQueryKey>
  >({
    queryKey: getElectionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.elections.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createElectionsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.elections.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.elections.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.elections.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getElectionsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getElectionsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getElectionsSearchIndexQueryKey(
  args: InferRequestType<typeof client.elections.search.index.$get>,
) {
  return ['elections', '/elections/search/', args] as const
}

export function getElectionsSearchIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.elections.search.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.elections.search.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.elections.search.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getElectionsSearchIndexQueryKey>
  >({
    queryKey: getElectionsSearchIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.elections.search.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createElectionsSearchIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.elections.search.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.elections.search.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.elections.search.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getElectionsSearchIndexQueryKey>
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
      ...getElectionsSearchIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getElectionsSummaryIndexQueryKey(
  args: InferRequestType<typeof client.elections.summary.index.$get>,
) {
  return ['elections', '/elections/summary/', args] as const
}

export function getElectionsSummaryIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.elections.summary.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.elections.summary.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.elections.summary.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getElectionsSummaryIndexQueryKey>
  >({
    queryKey: getElectionsSummaryIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.elections.summary.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createElectionsSummaryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.elections.summary.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.elections.summary.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.elections.summary.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getElectionsSummaryIndexQueryKey>
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
      ...getElectionsSummaryIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFilingsIndexQueryKey(args: InferRequestType<typeof client.filings.index.$get>) {
  return ['filings', '/filings/', args] as const
}

export function getFilingsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filings.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.filings.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filings.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFilingsIndexQueryKey>
  >({
    queryKey: getFilingsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.filings.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFilingsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filings.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.filings.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filings.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFilingsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilingsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLegalSearchIndexQueryKey(
  args: InferRequestType<typeof client.legal.search.index.$get>,
) {
  return ['legal', '/legal/search/', args] as const
}

export function getLegalSearchIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal.search.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.legal.search.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal.search.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLegalSearchIndexQueryKey>
  >({
    queryKey: getLegalSearchIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.legal.search.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLegalSearchIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal.search.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.legal.search.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.legal.search.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalSearchIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLegalSearchIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNamesAuditCandidatesIndexQueryKey(
  args: InferRequestType<typeof client.names.audit_candidates.index.$get>,
) {
  return ['names', '/names/audit_candidates/', args] as const
}

export function getNamesAuditCandidatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_candidates.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.names.audit_candidates.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_candidates.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamesAuditCandidatesIndexQueryKey>
  >({
    queryKey: getNamesAuditCandidatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.names.audit_candidates.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamesAuditCandidatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_candidates.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.names.audit_candidates.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.names.audit_candidates.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamesAuditCandidatesIndexQueryKey>
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
      ...getNamesAuditCandidatesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNamesAuditCommitteesIndexQueryKey(
  args: InferRequestType<typeof client.names.audit_committees.index.$get>,
) {
  return ['names', '/names/audit_committees/', args] as const
}

export function getNamesAuditCommitteesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_committees.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.names.audit_committees.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_committees.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamesAuditCommitteesIndexQueryKey>
  >({
    queryKey: getNamesAuditCommitteesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.names.audit_committees.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamesAuditCommitteesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_committees.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.names.audit_committees.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.names.audit_committees.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamesAuditCommitteesIndexQueryKey>
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
      ...getNamesAuditCommitteesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNamesCandidatesIndexQueryKey(
  args: InferRequestType<typeof client.names.candidates.index.$get>,
) {
  return ['names', '/names/candidates/', args] as const
}

export function getNamesCandidatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.candidates.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.names.candidates.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.names.candidates.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamesCandidatesIndexQueryKey>
  >({
    queryKey: getNamesCandidatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.names.candidates.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamesCandidatesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.candidates.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.names.candidates.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.names.candidates.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamesCandidatesIndexQueryKey>
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
      ...getNamesCandidatesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNamesCommitteesIndexQueryKey(
  args: InferRequestType<typeof client.names.committees.index.$get>,
) {
  return ['names', '/names/committees/', args] as const
}

export function getNamesCommitteesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.committees.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.names.committees.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.names.committees.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamesCommitteesIndexQueryKey>
  >({
    queryKey: getNamesCommitteesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.names.committees.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamesCommitteesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.committees.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.names.committees.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.names.committees.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamesCommitteesIndexQueryKey>
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
      ...getNamesCommitteesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOperationsLogIndexQueryKey(
  args: InferRequestType<(typeof client)['operations-log']['index']['$get']>,
) {
  return ['operations-log', '/operations-log/', args] as const
}

export function getOperationsLogIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['operations-log']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['operations-log']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['operations-log']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOperationsLogIndexQueryKey>
  >({
    queryKey: getOperationsLogIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['operations-log'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOperationsLogIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['operations-log']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['operations-log']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['operations-log']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOperationsLogIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOperationsLogIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPresidentialContributionsByCandidateIndexQueryKey(
  args: InferRequestType<typeof client.presidential.contributions.by_candidate.index.$get>,
) {
  return ['presidential', '/presidential/contributions/by_candidate/', args] as const
}

export function getPresidentialContributionsByCandidateIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.presidential.contributions.by_candidate.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.presidential.contributions.by_candidate.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.presidential.contributions.by_candidate.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPresidentialContributionsByCandidateIndexQueryKey>
  >({
    queryKey: getPresidentialContributionsByCandidateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.presidential.contributions.by_candidate.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPresidentialContributionsByCandidateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.presidential.contributions.by_candidate.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.presidential.contributions.by_candidate.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.presidential.contributions.by_candidate.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPresidentialContributionsByCandidateIndexQueryKey>
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
      ...getPresidentialContributionsByCandidateIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPresidentialContributionsBySizeIndexQueryKey(
  args: InferRequestType<typeof client.presidential.contributions.by_size.index.$get>,
) {
  return ['presidential', '/presidential/contributions/by_size/', args] as const
}

export function getPresidentialContributionsBySizeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.presidential.contributions.by_size.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.presidential.contributions.by_size.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.presidential.contributions.by_size.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPresidentialContributionsBySizeIndexQueryKey>
  >({
    queryKey: getPresidentialContributionsBySizeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.presidential.contributions.by_size.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPresidentialContributionsBySizeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.presidential.contributions.by_size.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.presidential.contributions.by_size.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.presidential.contributions.by_size.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPresidentialContributionsBySizeIndexQueryKey>
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
      ...getPresidentialContributionsBySizeIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPresidentialContributionsByStateIndexQueryKey(
  args: InferRequestType<typeof client.presidential.contributions.by_state.index.$get>,
) {
  return ['presidential', '/presidential/contributions/by_state/', args] as const
}

export function getPresidentialContributionsByStateIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.presidential.contributions.by_state.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.presidential.contributions.by_state.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.presidential.contributions.by_state.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPresidentialContributionsByStateIndexQueryKey>
  >({
    queryKey: getPresidentialContributionsByStateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.presidential.contributions.by_state.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPresidentialContributionsByStateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.presidential.contributions.by_state.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.presidential.contributions.by_state.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.presidential.contributions.by_state.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPresidentialContributionsByStateIndexQueryKey>
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
      ...getPresidentialContributionsByStateIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPresidentialCoverageEndDateIndexQueryKey(
  args: InferRequestType<typeof client.presidential.coverage_end_date.index.$get>,
) {
  return ['presidential', '/presidential/coverage_end_date/', args] as const
}

export function getPresidentialCoverageEndDateIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.presidential.coverage_end_date.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.presidential.coverage_end_date.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.presidential.coverage_end_date.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPresidentialCoverageEndDateIndexQueryKey>
  >({
    queryKey: getPresidentialCoverageEndDateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.presidential.coverage_end_date.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPresidentialCoverageEndDateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.presidential.coverage_end_date.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.presidential.coverage_end_date.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.presidential.coverage_end_date.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPresidentialCoverageEndDateIndexQueryKey>
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
      ...getPresidentialCoverageEndDateIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPresidentialFinancialSummaryIndexQueryKey(
  args: InferRequestType<typeof client.presidential.financial_summary.index.$get>,
) {
  return ['presidential', '/presidential/financial_summary/', args] as const
}

export function getPresidentialFinancialSummaryIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.presidential.financial_summary.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.presidential.financial_summary.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.presidential.financial_summary.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPresidentialFinancialSummaryIndexQueryKey>
  >({
    queryKey: getPresidentialFinancialSummaryIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.presidential.financial_summary.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPresidentialFinancialSummaryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.presidential.financial_summary.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.presidential.financial_summary.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.presidential.financial_summary.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPresidentialFinancialSummaryIndexQueryKey>
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
      ...getPresidentialFinancialSummaryIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRadAnalystIndexQueryKey(
  args: InferRequestType<(typeof client)['rad-analyst']['index']['$get']>,
) {
  return ['rad-analyst', '/rad-analyst/', args] as const
}

export function getRadAnalystIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['rad-analyst']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rad-analyst']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['rad-analyst']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRadAnalystIndexQueryKey>
  >({
    queryKey: getRadAnalystIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rad-analyst'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRadAnalystIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['rad-analyst']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['rad-analyst']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['rad-analyst']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRadAnalystIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRadAnalystIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReportingDatesIndexQueryKey(
  args: InferRequestType<(typeof client)['reporting-dates']['index']['$get']>,
) {
  return ['reporting-dates', '/reporting-dates/', args] as const
}

export function getReportingDatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['reporting-dates']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['reporting-dates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['reporting-dates']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportingDatesIndexQueryKey>
  >({
    queryKey: getReportingDatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['reporting-dates'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportingDatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['reporting-dates']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['reporting-dates']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['reporting-dates']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportingDatesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportingDatesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReportsEntityTypeIndexQueryKey(
  args: InferRequestType<(typeof client.reports)[':entity_type']['index']['$get']>,
) {
  return ['reports', '/reports/:entity_type/', args] as const
}

export function getReportsEntityTypeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reports)[':entity_type']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports)[':entity_type']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reports)[':entity_type']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsEntityTypeIndexQueryKey>
  >({
    queryKey: getReportsEntityTypeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports[':entity_type'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportsEntityTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reports)[':entity_type']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.reports)[':entity_type']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reports)[':entity_type']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsEntityTypeIndexQueryKey>
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
      ...getReportsEntityTypeIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleAIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_a.index.$get>,
) {
  return ['schedules', '/schedules/schedule_a/', args] as const
}

export function getSchedulesScheduleAIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_a.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_a.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_a.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleAIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleAIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_a.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleAIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_a.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_a.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_a.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleAIndexQueryKey>
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
      ...getSchedulesScheduleAIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleAByEmployerIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_a.by_employer.index.$get>,
) {
  return ['schedules', '/schedules/schedule_a/by_employer/', args] as const
}

export function getSchedulesScheduleAByEmployerIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_a.by_employer.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_employer.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.schedules.schedule_a.by_employer.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleAByEmployerIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleAByEmployerIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_a.by_employer.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleAByEmployerIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_a.by_employer.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_a.by_employer.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.schedules.schedule_a.by_employer.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleAByEmployerIndexQueryKey>
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
      ...getSchedulesScheduleAByEmployerIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleAByOccupationIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_a.by_occupation.index.$get>,
) {
  return ['schedules', '/schedules/schedule_a/by_occupation/', args] as const
}

export function getSchedulesScheduleAByOccupationIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_a.by_occupation.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_occupation.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.schedules.schedule_a.by_occupation.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleAByOccupationIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleAByOccupationIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_a.by_occupation.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleAByOccupationIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_a.by_occupation.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_a.by_occupation.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.schedules.schedule_a.by_occupation.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleAByOccupationIndexQueryKey>
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
      ...getSchedulesScheduleAByOccupationIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleABySizeIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_a.by_size.index.$get>,
) {
  return ['schedules', '/schedules/schedule_a/by_size/', args] as const
}

export function getSchedulesScheduleABySizeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_a.by_size.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_size.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.schedules.schedule_a.by_size.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleABySizeIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleABySizeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_a.by_size.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleABySizeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_a.by_size.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_a.by_size.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.schedules.schedule_a.by_size.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleABySizeIndexQueryKey>
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
      ...getSchedulesScheduleABySizeIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleABySizeByCandidateIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_a.by_size.by_candidate.index.$get>,
) {
  return ['schedules', '/schedules/schedule_a/by_size/by_candidate/', args] as const
}

export function getSchedulesScheduleABySizeByCandidateIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_a.by_size.by_candidate.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_size.by_candidate.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.schedules.schedule_a.by_size.by_candidate.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleABySizeByCandidateIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleABySizeByCandidateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_a.by_size.by_candidate.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleABySizeByCandidateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_a.by_size.by_candidate.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_a.by_size.by_candidate.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.schedules.schedule_a.by_size.by_candidate.index.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleABySizeByCandidateIndexQueryKey>
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
      ...getSchedulesScheduleABySizeByCandidateIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleAByStateIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_a.by_state.index.$get>,
) {
  return ['schedules', '/schedules/schedule_a/by_state/', args] as const
}

export function getSchedulesScheduleAByStateIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_state.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleAByStateIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleAByStateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_a.by_state.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleAByStateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_a.by_state.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleAByStateIndexQueryKey>
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
      ...getSchedulesScheduleAByStateIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleAByStateByCandidateIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_a.by_state.by_candidate.index.$get>,
) {
  return ['schedules', '/schedules/schedule_a/by_state/by_candidate/', args] as const
}

export function getSchedulesScheduleAByStateByCandidateIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.by_candidate.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_state.by_candidate.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.by_candidate.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleAByStateByCandidateIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleAByStateByCandidateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_a.by_state.by_candidate.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleAByStateByCandidateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.by_candidate.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_a.by_state.by_candidate.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.schedules.schedule_a.by_state.by_candidate.index.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleAByStateByCandidateIndexQueryKey>
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
      ...getSchedulesScheduleAByStateByCandidateIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleAByStateByCandidateTotalsIndexQueryKey(
  args: InferRequestType<
    typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get
  >,
) {
  return ['schedules', '/schedules/schedule_a/by_state/by_candidate/totals/', args] as const
}

export function getSchedulesScheduleAByStateByCandidateTotalsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleAByStateByCandidateTotalsIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleAByStateByCandidateTotalsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_a.by_state.by_candidate.totals.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleAByStateByCandidateTotalsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleAByStateByCandidateTotalsIndexQueryKey>
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
      ...getSchedulesScheduleAByStateByCandidateTotalsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleAByStateTotalsIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_a.by_state.totals.index.$get>,
) {
  return ['schedules', '/schedules/schedule_a/by_state/totals/', args] as const
}

export function getSchedulesScheduleAByStateTotalsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.totals.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_state.totals.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.totals.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleAByStateTotalsIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleAByStateTotalsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_a.by_state.totals.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleAByStateTotalsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.totals.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_a.by_state.totals.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.totals.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleAByStateTotalsIndexQueryKey>
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
      ...getSchedulesScheduleAByStateTotalsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleAByZipIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_a.by_zip.index.$get>,
) {
  return ['schedules', '/schedules/schedule_a/by_zip/', args] as const
}

export function getSchedulesScheduleAByZipIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_a.by_zip.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_a.by_zip.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.schedules.schedule_a.by_zip.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleAByZipIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleAByZipIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_a.by_zip.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleAByZipIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_a.by_zip.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_a.by_zip.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.schedules.schedule_a.by_zip.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleAByZipIndexQueryKey>
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
      ...getSchedulesScheduleAByZipIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleAEfileIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_a.efile.index.$get>,
) {
  return ['schedules', '/schedules/schedule_a/efile/', args] as const
}

export function getSchedulesScheduleAEfileIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_a.efile.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_a.efile.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.schedules.schedule_a.efile.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleAEfileIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleAEfileIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_a.efile.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleAEfileIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_a.efile.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_a.efile.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.schedules.schedule_a.efile.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleAEfileIndexQueryKey>
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
      ...getSchedulesScheduleAEfileIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleASubIdIndexQueryKey(
  args: InferRequestType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>,
) {
  return ['schedules', '/schedules/schedule_a/:sub_id/', args] as const
}

export function getSchedulesScheduleASubIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleASubIdIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleASubIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_a[':sub_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleASubIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleASubIdIndexQueryKey>
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
      ...getSchedulesScheduleASubIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleBIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_b.index.$get>,
) {
  return ['schedules', '/schedules/schedule_b/', args] as const
}

export function getSchedulesScheduleBIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_b.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_b.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_b.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleBIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleBIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_b.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleBIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_b.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_b.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_b.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleBIndexQueryKey>
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
      ...getSchedulesScheduleBIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleBByPurposeIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_b.by_purpose.index.$get>,
) {
  return ['schedules', '/schedules/schedule_b/by_purpose/', args] as const
}

export function getSchedulesScheduleBByPurposeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_b.by_purpose.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_b.by_purpose.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.schedules.schedule_b.by_purpose.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleBByPurposeIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleBByPurposeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_b.by_purpose.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleBByPurposeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_b.by_purpose.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_b.by_purpose.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.schedules.schedule_b.by_purpose.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleBByPurposeIndexQueryKey>
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
      ...getSchedulesScheduleBByPurposeIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleBByRecipientIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_b.by_recipient.index.$get>,
) {
  return ['schedules', '/schedules/schedule_b/by_recipient/', args] as const
}

export function getSchedulesScheduleBByRecipientIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_b.by_recipient.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_b.by_recipient.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.schedules.schedule_b.by_recipient.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleBByRecipientIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleBByRecipientIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_b.by_recipient.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleBByRecipientIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_b.by_recipient.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_b.by_recipient.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.schedules.schedule_b.by_recipient.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleBByRecipientIndexQueryKey>
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
      ...getSchedulesScheduleBByRecipientIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleBByRecipientIdIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_b.by_recipient_id.index.$get>,
) {
  return ['schedules', '/schedules/schedule_b/by_recipient_id/', args] as const
}

export function getSchedulesScheduleBByRecipientIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_b.by_recipient_id.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_b.by_recipient_id.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.schedules.schedule_b.by_recipient_id.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleBByRecipientIdIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleBByRecipientIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_b.by_recipient_id.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleBByRecipientIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_b.by_recipient_id.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_b.by_recipient_id.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.schedules.schedule_b.by_recipient_id.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleBByRecipientIdIndexQueryKey>
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
      ...getSchedulesScheduleBByRecipientIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleBEfileIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_b.efile.index.$get>,
) {
  return ['schedules', '/schedules/schedule_b/efile/', args] as const
}

export function getSchedulesScheduleBEfileIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_b.efile.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_b.efile.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.schedules.schedule_b.efile.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleBEfileIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleBEfileIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_b.efile.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleBEfileIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_b.efile.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_b.efile.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.schedules.schedule_b.efile.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleBEfileIndexQueryKey>
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
      ...getSchedulesScheduleBEfileIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleBSubIdIndexQueryKey(
  args: InferRequestType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>,
) {
  return ['schedules', '/schedules/schedule_b/:sub_id/', args] as const
}

export function getSchedulesScheduleBSubIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleBSubIdIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleBSubIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_b[':sub_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleBSubIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleBSubIdIndexQueryKey>
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
      ...getSchedulesScheduleBSubIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleCIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_c.index.$get>,
) {
  return ['schedules', '/schedules/schedule_c/', args] as const
}

export function getSchedulesScheduleCIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_c.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_c.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_c.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleCIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleCIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_c.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleCIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_c.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_c.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_c.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleCIndexQueryKey>
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
      ...getSchedulesScheduleCIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleCSubIdIndexQueryKey(
  args: InferRequestType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>,
) {
  return ['schedules', '/schedules/schedule_c/:sub_id/', args] as const
}

export function getSchedulesScheduleCSubIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleCSubIdIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleCSubIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_c[':sub_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleCSubIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleCSubIdIndexQueryKey>
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
      ...getSchedulesScheduleCSubIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleDIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_d.index.$get>,
) {
  return ['schedules', '/schedules/schedule_d/', args] as const
}

export function getSchedulesScheduleDIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_d.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_d.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_d.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleDIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleDIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_d.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleDIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_d.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_d.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_d.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleDIndexQueryKey>
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
      ...getSchedulesScheduleDIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleDSubIdIndexQueryKey(
  args: InferRequestType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>,
) {
  return ['schedules', '/schedules/schedule_d/:sub_id/', args] as const
}

export function getSchedulesScheduleDSubIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleDSubIdIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleDSubIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_d[':sub_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleDSubIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleDSubIdIndexQueryKey>
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
      ...getSchedulesScheduleDSubIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleEIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_e.index.$get>,
) {
  return ['schedules', '/schedules/schedule_e/', args] as const
}

export function getSchedulesScheduleEIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_e.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_e.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_e.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleEIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleEIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_e.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleEIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_e.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_e.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_e.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleEIndexQueryKey>
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
      ...getSchedulesScheduleEIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleEByCandidateIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_e.by_candidate.index.$get>,
) {
  return ['schedules', '/schedules/schedule_e/by_candidate/', args] as const
}

export function getSchedulesScheduleEByCandidateIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_e.by_candidate.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_e.by_candidate.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.schedules.schedule_e.by_candidate.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleEByCandidateIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleEByCandidateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_e.by_candidate.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleEByCandidateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_e.by_candidate.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_e.by_candidate.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.schedules.schedule_e.by_candidate.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleEByCandidateIndexQueryKey>
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
      ...getSchedulesScheduleEByCandidateIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleEEfileIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_e.efile.index.$get>,
) {
  return ['schedules', '/schedules/schedule_e/efile/', args] as const
}

export function getSchedulesScheduleEEfileIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_e.efile.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_e.efile.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.schedules.schedule_e.efile.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleEEfileIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleEEfileIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_e.efile.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleEEfileIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_e.efile.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_e.efile.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.schedules.schedule_e.efile.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleEEfileIndexQueryKey>
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
      ...getSchedulesScheduleEEfileIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleETotalsByCandidateIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>,
) {
  return ['schedules', '/schedules/schedule_e/totals/by_candidate/', args] as const
}

export function getSchedulesScheduleETotalsByCandidateIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleETotalsByCandidateIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleETotalsByCandidateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_e.totals.by_candidate.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleETotalsByCandidateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleETotalsByCandidateIndexQueryKey>
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
      ...getSchedulesScheduleETotalsByCandidateIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleFIndexQueryKey(
  args: InferRequestType<typeof client.schedules.schedule_f.index.$get>,
) {
  return ['schedules', '/schedules/schedule_f/', args] as const
}

export function getSchedulesScheduleFIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_f.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_f.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_f.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleFIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleFIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_f.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleFIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_f.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.schedule_f.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_f.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleFIndexQueryKey>
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
      ...getSchedulesScheduleFIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchedulesScheduleFSubIdIndexQueryKey(
  args: InferRequestType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>,
) {
  return ['schedules', '/schedules/schedule_f/:sub_id/', args] as const
}

export function getSchedulesScheduleFSubIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleFSubIdIndexQueryKey>
  >({
    queryKey: getSchedulesScheduleFSubIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.schedule_f[':sub_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchedulesScheduleFSubIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesScheduleFSubIdIndexQueryKey>
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
      ...getSchedulesScheduleFSubIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getStateElectionOfficeIndexQueryKey(
  args: InferRequestType<(typeof client)['state-election-office']['index']['$get']>,
) {
  return ['state-election-office', '/state-election-office/', args] as const
}

export function getStateElectionOfficeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['state-election-office']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['state-election-office']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['state-election-office']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStateElectionOfficeIndexQueryKey>
  >({
    queryKey: getStateElectionOfficeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['state-election-office'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStateElectionOfficeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['state-election-office']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['state-election-office']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['state-election-office']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStateElectionOfficeIndexQueryKey>
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
      ...getStateElectionOfficeIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTotalsByEntityIndexQueryKey(
  args: InferRequestType<typeof client.totals.by_entity.index.$get>,
) {
  return ['totals', '/totals/by_entity/', args] as const
}

export function getTotalsByEntityIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.by_entity.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.totals.by_entity.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.totals.by_entity.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTotalsByEntityIndexQueryKey>
  >({
    queryKey: getTotalsByEntityIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.totals.by_entity.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTotalsByEntityIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.by_entity.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.totals.by_entity.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.totals.by_entity.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTotalsByEntityIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTotalsByEntityIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTotalsEntityTypeIndexQueryKey(
  args: InferRequestType<(typeof client.totals)[':entity_type']['index']['$get']>,
) {
  return ['totals', '/totals/:entity_type/', args] as const
}

export function getTotalsEntityTypeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.totals)[':entity_type']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.totals)[':entity_type']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.totals)[':entity_type']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTotalsEntityTypeIndexQueryKey>
  >({
    queryKey: getTotalsEntityTypeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.totals[':entity_type'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTotalsEntityTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.totals)[':entity_type']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.totals)[':entity_type']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.totals)[':entity_type']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTotalsEntityTypeIndexQueryKey>
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
      ...getTotalsEntityTypeIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
