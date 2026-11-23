import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function useAuditCaseIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['audit-case']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['audit-case']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAuditCaseIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAuditCaseIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['audit-case']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['audit-case']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAuditCaseIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useAuditCategoryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['audit-category']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['audit-category']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAuditCategoryIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAuditCategoryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['audit-category']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['audit-category']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAuditCategoryIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useAuditPrimaryCategoryIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuditPrimaryCategoryIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuditPrimaryCategoryIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuditPrimaryCategoryIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCalendarDatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['calendar-dates']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['calendar-dates']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCalendarDatesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCalendarDatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['calendar-dates']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['calendar-dates']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCalendarDatesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCalendarDatesExportIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCalendarDatesExportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCalendarDatesExportIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCalendarDatesExportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCandidateCandidateIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCandidateCandidateIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCandidateCandidateIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCandidateCandidateIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCandidateCandidateIdCommitteesIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCandidateCandidateIdCommitteesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCandidateCandidateIdCommitteesIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCandidateCandidateIdCommitteesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCandidateCandidateIdCommitteesHistoryIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCandidateCandidateIdCommitteesHistoryIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCandidateCandidateIdCommitteesHistoryIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCandidateCandidateIdCommitteesHistoryIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCandidateCandidateIdCommitteesHistoryCycleIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCandidateCandidateIdCommitteesHistoryCycleIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCandidateCandidateIdCommitteesHistoryCycleIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCandidateCandidateIdCommitteesHistoryCycleIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCandidateCandidateIdFilingsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCandidateCandidateIdFilingsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCandidateCandidateIdFilingsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCandidateCandidateIdFilingsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCandidateCandidateIdHistoryIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCandidateCandidateIdHistoryIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCandidateCandidateIdHistoryIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCandidateCandidateIdHistoryIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCandidateCandidateIdHistoryCycleIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCandidateCandidateIdHistoryCycleIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCandidateCandidateIdHistoryCycleIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCandidateCandidateIdHistoryCycleIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCandidateCandidateIdTotalsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCandidateCandidateIdTotalsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCandidateCandidateIdTotalsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCandidateCandidateIdTotalsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCandidatesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.candidates.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.candidates.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCandidatesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCandidatesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.candidates.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.candidates.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCandidatesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCandidatesSearchIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.candidates.search.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.candidates.search.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCandidatesSearchIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCandidatesSearchIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.candidates.search.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.candidates.search.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCandidatesSearchIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCandidatesTotalsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.candidates.totals.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.candidates.totals.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCandidatesTotalsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCandidatesTotalsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.candidates.totals.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.candidates.totals.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCandidatesTotalsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCandidatesTotalsAggregatesIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCandidatesTotalsAggregatesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCandidatesTotalsAggregatesIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCandidatesTotalsAggregatesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCandidatesTotalsByOfficeIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCandidatesTotalsByOfficeIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCandidatesTotalsByOfficeIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCandidatesTotalsByOfficeIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCandidatesTotalsByOfficeByPartyIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCandidatesTotalsByOfficeByPartyIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCandidatesTotalsByOfficeByPartyIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCandidatesTotalsByOfficeByPartyIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeCommitteeIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCommitteeCommitteeIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeCommitteeIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCommitteeCommitteeIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeCommitteeIdCandidatesIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCommitteeCommitteeIdCandidatesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeCommitteeIdCandidatesIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCommitteeCommitteeIdCandidatesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeCommitteeIdCandidatesHistoryIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCommitteeCommitteeIdCandidatesHistoryIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeCommitteeIdCandidatesHistoryIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCommitteeCommitteeIdCandidatesHistoryIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeCommitteeIdCandidatesHistoryCycleIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCommitteeCommitteeIdCandidatesHistoryCycleIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeCommitteeIdCandidatesHistoryCycleIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCommitteeCommitteeIdCandidatesHistoryCycleIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeCommitteeIdFilingsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCommitteeCommitteeIdFilingsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeCommitteeIdFilingsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCommitteeCommitteeIdFilingsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeCommitteeIdHistoryIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCommitteeCommitteeIdHistoryIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeCommitteeIdHistoryIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCommitteeCommitteeIdHistoryIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeCommitteeIdHistoryCycleIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCommitteeCommitteeIdHistoryCycleIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeCommitteeIdHistoryCycleIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCommitteeCommitteeIdHistoryCycleIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeCommitteeIdReportsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCommitteeCommitteeIdReportsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeCommitteeIdReportsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCommitteeCommitteeIdReportsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeCommitteeIdTotalsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCommitteeCommitteeIdTotalsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeCommitteeIdTotalsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCommitteeCommitteeIdTotalsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committees.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.committees.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCommitteesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCommitteesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committees.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.committees.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCommitteesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCommunicationCostsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.communication_costs.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.communication_costs.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCommunicationCostsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommunicationCostsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.communication_costs.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.communication_costs.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCommunicationCostsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommunicationCostsAggregatesIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCommunicationCostsAggregatesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommunicationCostsAggregatesIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCommunicationCostsAggregatesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommunicationCostsByCandidateIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCommunicationCostsByCandidateIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommunicationCostsByCandidateIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCommunicationCostsByCandidateIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommunicationCostsTotalsByCandidateIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCommunicationCostsTotalsByCandidateIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommunicationCostsTotalsByCandidateIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCommunicationCostsTotalsByCandidateIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useEfileFilingsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.efile.filings.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.efile.filings.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEfileFilingsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEfileFilingsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.efile.filings.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.efile.filings.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEfileFilingsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useEfileReportsHouseSenateIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEfileReportsHouseSenateIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEfileReportsHouseSenateIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEfileReportsHouseSenateIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useEfileReportsPacPartyIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEfileReportsPacPartyIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEfileReportsPacPartyIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEfileReportsPacPartyIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useEfileReportsPresidentialIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.efile.reports.presidential.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.efile.reports.presidential.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEfileReportsPresidentialIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEfileReportsPresidentialIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.efile.reports.presidential.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.efile.reports.presidential.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEfileReportsPresidentialIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useElectionDatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['election-dates']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['election-dates']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getElectionDatesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseElectionDatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['election-dates']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['election-dates']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getElectionDatesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useElectioneeringIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.electioneering.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.electioneering.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getElectioneeringIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseElectioneeringIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.electioneering.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.electioneering.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getElectioneeringIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useElectioneeringAggregatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.electioneering.aggregates.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.electioneering.aggregates.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getElectioneeringAggregatesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseElectioneeringAggregatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.electioneering.aggregates.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.electioneering.aggregates.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getElectioneeringAggregatesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useElectioneeringByCandidateIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getElectioneeringByCandidateIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseElectioneeringByCandidateIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getElectioneeringByCandidateIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useElectioneeringTotalsByCandidateIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getElectioneeringTotalsByCandidateIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseElectioneeringTotalsByCandidateIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getElectioneeringTotalsByCandidateIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useElectionsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.elections.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.elections.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getElectionsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseElectionsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.elections.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.elections.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getElectionsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useElectionsSearchIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.elections.search.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.elections.search.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getElectionsSearchIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseElectionsSearchIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.elections.search.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.elections.search.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getElectionsSearchIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useElectionsSummaryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.elections.summary.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.elections.summary.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getElectionsSummaryIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseElectionsSummaryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.elections.summary.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.elections.summary.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getElectionsSummaryIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useFilingsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filings.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.filings.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFilingsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFilingsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filings.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.filings.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFilingsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useLegalSearchIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal.search.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.legal.search.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLegalSearchIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLegalSearchIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal.search.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.legal.search.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLegalSearchIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNamesAuditCandidatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_candidates.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.names.audit_candidates.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNamesAuditCandidatesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNamesAuditCandidatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_candidates.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.names.audit_candidates.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNamesAuditCandidatesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNamesAuditCommitteesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_committees.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.names.audit_committees.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNamesAuditCommitteesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNamesAuditCommitteesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_committees.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.names.audit_committees.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNamesAuditCommitteesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNamesCandidatesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.candidates.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.names.candidates.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNamesCandidatesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNamesCandidatesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.candidates.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.names.candidates.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNamesCandidatesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNamesCommitteesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.committees.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.names.committees.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNamesCommitteesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNamesCommitteesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.committees.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.names.committees.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNamesCommitteesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useOperationsLogIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['operations-log']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['operations-log']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOperationsLogIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOperationsLogIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['operations-log']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['operations-log']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOperationsLogIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePresidentialContributionsByCandidateIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPresidentialContributionsByCandidateIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePresidentialContributionsByCandidateIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPresidentialContributionsByCandidateIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePresidentialContributionsBySizeIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPresidentialContributionsBySizeIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePresidentialContributionsBySizeIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPresidentialContributionsBySizeIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePresidentialContributionsByStateIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPresidentialContributionsByStateIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePresidentialContributionsByStateIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPresidentialContributionsByStateIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePresidentialCoverageEndDateIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPresidentialCoverageEndDateIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePresidentialCoverageEndDateIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPresidentialCoverageEndDateIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePresidentialFinancialSummaryIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPresidentialFinancialSummaryIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePresidentialFinancialSummaryIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPresidentialFinancialSummaryIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRadAnalystIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['rad-analyst']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rad-analyst']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRadAnalystIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRadAnalystIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['rad-analyst']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['rad-analyst']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRadAnalystIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useReportingDatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['reporting-dates']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['reporting-dates']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReportingDatesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReportingDatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['reporting-dates']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['reporting-dates']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReportingDatesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useReportsEntityTypeIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getReportsEntityTypeIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReportsEntityTypeIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getReportsEntityTypeIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleAIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_a.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_a.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleAIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleAIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_a.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_a.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleAIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleAByEmployerIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleAByEmployerIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleAByEmployerIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleAByEmployerIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleAByOccupationIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleAByOccupationIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleAByOccupationIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleAByOccupationIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleABySizeIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleABySizeIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleABySizeIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleABySizeIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleABySizeByCandidateIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleABySizeByCandidateIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleABySizeByCandidateIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleABySizeByCandidateIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleAByStateIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleAByStateIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleAByStateIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleAByStateIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleAByStateByCandidateIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleAByStateByCandidateIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleAByStateByCandidateIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleAByStateByCandidateIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleAByStateByCandidateTotalsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleAByStateByCandidateTotalsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleAByStateByCandidateTotalsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleAByStateByCandidateTotalsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleAByStateTotalsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleAByStateTotalsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleAByStateTotalsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleAByStateTotalsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleAByZipIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleAByZipIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleAByZipIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleAByZipIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleAEfileIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_a.efile.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_a.efile.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleAEfileIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleAEfileIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_a.efile.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_a.efile.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleAEfileIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleASubIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleASubIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleASubIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleASubIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleBIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_b.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_b.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleBIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleBIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_b.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_b.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleBIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleBByPurposeIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleBByPurposeIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleBByPurposeIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleBByPurposeIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleBByRecipientIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleBByRecipientIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleBByRecipientIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleBByRecipientIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleBByRecipientIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleBByRecipientIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleBByRecipientIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleBByRecipientIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleBEfileIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_b.efile.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_b.efile.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleBEfileIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleBEfileIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_b.efile.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_b.efile.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleBEfileIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleBSubIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleBSubIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleBSubIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleBSubIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleCIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_c.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_c.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleCIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleCIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_c.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_c.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleCIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleCSubIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleCSubIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleCSubIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleCSubIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleDIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_d.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_d.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleDIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleDIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_d.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_d.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleDIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleDSubIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleDSubIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleDSubIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleDSubIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleEIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_e.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_e.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleEIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleEIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_e.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_e.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleEIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleEByCandidateIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleEByCandidateIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleEByCandidateIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleEByCandidateIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleEEfileIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_e.efile.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_e.efile.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleEEfileIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleEEfileIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_e.efile.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_e.efile.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleEEfileIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleETotalsByCandidateIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleETotalsByCandidateIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleETotalsByCandidateIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleETotalsByCandidateIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleFIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_f.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_f.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleFIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleFIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_f.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.schedule_f.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleFIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchedulesScheduleFSubIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchedulesScheduleFSubIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchedulesScheduleFSubIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchedulesScheduleFSubIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useStateElectionOfficeIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getStateElectionOfficeIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStateElectionOfficeIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getStateElectionOfficeIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTotalsByEntityIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.by_entity.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.totals.by_entity.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTotalsByEntityIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTotalsByEntityIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.by_entity.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.totals.by_entity.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTotalsByEntityIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTotalsEntityTypeIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTotalsEntityTypeIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTotalsEntityTypeIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTotalsEntityTypeIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
