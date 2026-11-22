import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['audit-case']['index']['$get']>>,
) {
  return ['audit-case', '/audit-case/', toValue(args)] as const
}

export function getAuditCaseIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['audit-case']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuditCaseIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['audit-case'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuditCaseIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['audit-case']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['audit-case']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['audit-case']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuditCaseIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['audit-case']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditCaseIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuditCaseIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['audit-case'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuditCategoryIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['audit-category']['index']['$get']>>,
) {
  return ['audit-category', '/audit-category/', toValue(args)] as const
}

export function getAuditCategoryIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['audit-category']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuditCategoryIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['audit-category'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuditCategoryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['audit-category']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['audit-category']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['audit-category']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuditCategoryIndexQueryKey>
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
          Awaited<ReturnType<(typeof client)['audit-category']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditCategoryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuditCategoryIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['audit-category'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuditPrimaryCategoryIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['audit-primary-category']['index']['$get']>
  >,
) {
  return ['audit-primary-category', '/audit-primary-category/', toValue(args)] as const
}

export function getAuditPrimaryCategoryIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['audit-primary-category']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuditPrimaryCategoryIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['audit-primary-category'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['audit-primary-category']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['audit-primary-category']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuditPrimaryCategoryIndexQueryKey>
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
          Awaited<ReturnType<(typeof client)['audit-primary-category']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditPrimaryCategoryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuditPrimaryCategoryIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['audit-primary-category'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCalendarDatesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['calendar-dates']['index']['$get']>>,
) {
  return ['calendar-dates', '/calendar-dates/', toValue(args)] as const
}

export function getCalendarDatesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['calendar-dates']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCalendarDatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['calendar-dates'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCalendarDatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['calendar-dates']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['calendar-dates']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['calendar-dates']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCalendarDatesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client)['calendar-dates']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarDatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCalendarDatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['calendar-dates'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCalendarDatesExportIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['calendar-dates']['export']['index']['$get']>
  >,
) {
  return ['calendar-dates', '/calendar-dates/export/', toValue(args)] as const
}

export function getCalendarDatesExportIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['calendar-dates']['export']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCalendarDatesExportIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['calendar-dates'].export.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['calendar-dates']['export']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['calendar-dates']['export']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCalendarDatesExportIndexQueryKey>
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
          Awaited<ReturnType<(typeof client)['calendar-dates']['export']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarDatesExportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCalendarDatesExportIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['calendar-dates'].export.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCandidateCandidateIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.candidate)[':candidate_id']['index']['$get']>
  >,
) {
  return ['candidate', '/candidate/:candidate_id/', toValue(args)] as const
}

export function getCandidateCandidateIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.candidate)[':candidate_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCandidateCandidateIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.candidate[':candidate_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.candidate)[':candidate_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.candidate)[':candidate_id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCandidateCandidateIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.candidate)[':candidate_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidateCandidateIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCandidateCandidateIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.candidate[':candidate_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCandidateCandidateIdCommitteesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.candidate)[':candidate_id']['committees']['index']['$get']>
  >,
) {
  return ['candidate', '/candidate/:candidate_id/committees/', toValue(args)] as const
}

export function getCandidateCandidateIdCommitteesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.candidate)[':candidate_id']['committees']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCandidateCandidateIdCommitteesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.candidate[':candidate_id'].committees.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.candidate)[':candidate_id']['committees']['index']['$get']>
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
                    (typeof client.candidate)[':candidate_id']['committees']['index']['$get']
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
                    (typeof client.candidate)[':candidate_id']['committees']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCandidateCandidateIdCommitteesIndexQueryKey>
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
            ReturnType<(typeof client.candidate)[':candidate_id']['committees']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidateCandidateIdCommitteesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCandidateCandidateIdCommitteesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.candidate[':candidate_id'].committees.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCandidateCandidateIdCommitteesHistoryIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.candidate)[':candidate_id']['committees']['history']['index']['$get']
    >
  >,
) {
  return ['candidate', '/candidate/:candidate_id/committees/history/', toValue(args)] as const
}

export function getCandidateCandidateIdCommitteesHistoryIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.candidate)[':candidate_id']['committees']['history']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCandidateCandidateIdCommitteesHistoryIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.candidate[':candidate_id'].committees.history.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.candidate)[':candidate_id']['committees']['history']['index']['$get']
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
                    (typeof client.candidate)[':candidate_id']['committees']['history']['index']['$get']
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
                    (typeof client.candidate)[':candidate_id']['committees']['history']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCandidateCandidateIdCommitteesHistoryIndexQueryKey>
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
              (typeof client.candidate)[':candidate_id']['committees']['history']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidateCandidateIdCommitteesHistoryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCandidateCandidateIdCommitteesHistoryIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.candidate[':candidate_id'].committees.history.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCandidateCandidateIdCommitteesHistoryCycleIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.candidate)[':candidate_id']['committees']['history'][':cycle']['index']['$get']
    >
  >,
) {
  return [
    'candidate',
    '/candidate/:candidate_id/committees/history/:cycle/',
    toValue(args),
  ] as const
}

export function getCandidateCandidateIdCommitteesHistoryCycleIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.candidate)[':candidate_id']['committees']['history'][':cycle']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCandidateCandidateIdCommitteesHistoryCycleIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.candidate[':candidate_id'].committees.history[':cycle'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.candidate)[':candidate_id']['committees']['history'][':cycle']['index']['$get']
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
                    (typeof client.candidate)[':candidate_id']['committees']['history'][':cycle']['index']['$get']
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
                    (typeof client.candidate)[':candidate_id']['committees']['history'][':cycle']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCandidateCandidateIdCommitteesHistoryCycleIndexQueryKey>
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
              (typeof client.candidate)[':candidate_id']['committees']['history'][':cycle']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidateCandidateIdCommitteesHistoryCycleIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCandidateCandidateIdCommitteesHistoryCycleIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.candidate[':candidate_id'].committees.history[':cycle'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCandidateCandidateIdFilingsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.candidate)[':candidate_id']['filings']['index']['$get']>
  >,
) {
  return ['candidate', '/candidate/:candidate_id/filings/', toValue(args)] as const
}

export function getCandidateCandidateIdFilingsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.candidate)[':candidate_id']['filings']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCandidateCandidateIdFilingsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.candidate[':candidate_id'].filings.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.candidate)[':candidate_id']['filings']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.candidate)[':candidate_id']['filings']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCandidateCandidateIdFilingsIndexQueryKey>
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
            ReturnType<(typeof client.candidate)[':candidate_id']['filings']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidateCandidateIdFilingsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCandidateCandidateIdFilingsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.candidate[':candidate_id'].filings.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCandidateCandidateIdHistoryIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.candidate)[':candidate_id']['history']['index']['$get']>
  >,
) {
  return ['candidate', '/candidate/:candidate_id/history/', toValue(args)] as const
}

export function getCandidateCandidateIdHistoryIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.candidate)[':candidate_id']['history']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCandidateCandidateIdHistoryIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.candidate[':candidate_id'].history.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.candidate)[':candidate_id']['history']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.candidate)[':candidate_id']['history']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCandidateCandidateIdHistoryIndexQueryKey>
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
            ReturnType<(typeof client.candidate)[':candidate_id']['history']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidateCandidateIdHistoryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCandidateCandidateIdHistoryIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.candidate[':candidate_id'].history.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCandidateCandidateIdHistoryCycleIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.candidate)[':candidate_id']['history'][':cycle']['index']['$get']
    >
  >,
) {
  return ['candidate', '/candidate/:candidate_id/history/:cycle/', toValue(args)] as const
}

export function getCandidateCandidateIdHistoryCycleIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.candidate)[':candidate_id']['history'][':cycle']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCandidateCandidateIdHistoryCycleIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.candidate[':candidate_id'].history[':cycle'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.candidate)[':candidate_id']['history'][':cycle']['index']['$get']
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
                    (typeof client.candidate)[':candidate_id']['history'][':cycle']['index']['$get']
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
                    (typeof client.candidate)[':candidate_id']['history'][':cycle']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCandidateCandidateIdHistoryCycleIndexQueryKey>
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
              (typeof client.candidate)[':candidate_id']['history'][':cycle']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidateCandidateIdHistoryCycleIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCandidateCandidateIdHistoryCycleIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.candidate[':candidate_id'].history[':cycle'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCandidateCandidateIdTotalsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.candidate)[':candidate_id']['totals']['index']['$get']>
  >,
) {
  return ['candidate', '/candidate/:candidate_id/totals/', toValue(args)] as const
}

export function getCandidateCandidateIdTotalsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.candidate)[':candidate_id']['totals']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCandidateCandidateIdTotalsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.candidate[':candidate_id'].totals.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.candidate)[':candidate_id']['totals']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.candidate)[':candidate_id']['totals']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCandidateCandidateIdTotalsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.candidate)[':candidate_id']['totals']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidateCandidateIdTotalsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCandidateCandidateIdTotalsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.candidate[':candidate_id'].totals.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCandidatesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.candidates.index.$get>>,
) {
  return ['candidates', '/candidates/', toValue(args)] as const
}

export function getCandidatesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.candidates.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCandidatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.candidates.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCandidatesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.candidates.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.candidates.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.candidates.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.candidates.index.$get>>>
            >
          >,
          ReturnType<typeof getCandidatesIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.candidates.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCandidatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCandidatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.candidates.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCandidatesSearchIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.candidates.search.index.$get>>,
) {
  return ['candidates', '/candidates/search/', toValue(args)] as const
}

export function getCandidatesSearchIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.candidates.search.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCandidatesSearchIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.candidates.search.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCandidatesSearchIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.candidates.search.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.candidates.search.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.candidates.search.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.candidates.search.index.$get>>>
            >
          >,
          ReturnType<typeof getCandidatesSearchIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.candidates.search.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidatesSearchIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCandidatesSearchIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.candidates.search.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCandidatesTotalsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.candidates.totals.index.$get>>,
) {
  return ['candidates', '/candidates/totals/', toValue(args)] as const
}

export function getCandidatesTotalsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.candidates.totals.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCandidatesTotalsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.candidates.totals.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCandidatesTotalsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.candidates.totals.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.candidates.totals.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.candidates.totals.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.candidates.totals.index.$get>>>
            >
          >,
          ReturnType<typeof getCandidatesTotalsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.candidates.totals.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidatesTotalsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCandidatesTotalsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.candidates.totals.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCandidatesTotalsAggregatesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.candidates.totals.aggregates.index.$get>>,
) {
  return ['candidates', '/candidates/totals/aggregates/', toValue(args)] as const
}

export function getCandidatesTotalsAggregatesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.candidates.totals.aggregates.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCandidatesTotalsAggregatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.candidates.totals.aggregates.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.candidates.totals.aggregates.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.candidates.totals.aggregates.index.$get>>
              >
            >
          >,
          ReturnType<typeof getCandidatesTotalsAggregatesIndexQueryKey>
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
          Awaited<ReturnType<typeof client.candidates.totals.aggregates.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidatesTotalsAggregatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCandidatesTotalsAggregatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.candidates.totals.aggregates.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCandidatesTotalsByOfficeIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.candidates.totals.by_office.index.$get>>,
) {
  return ['candidates', '/candidates/totals/by_office/', toValue(args)] as const
}

export function getCandidatesTotalsByOfficeIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.candidates.totals.by_office.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCandidatesTotalsByOfficeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.candidates.totals.by_office.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.candidates.totals.by_office.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.candidates.totals.by_office.index.$get>>
              >
            >
          >,
          ReturnType<typeof getCandidatesTotalsByOfficeIndexQueryKey>
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
          Awaited<ReturnType<typeof client.candidates.totals.by_office.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidatesTotalsByOfficeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCandidatesTotalsByOfficeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.candidates.totals.by_office.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCandidatesTotalsByOfficeByPartyIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.candidates.totals.by_office.by_party.index.$get>
  >,
) {
  return ['candidates', '/candidates/totals/by_office/by_party/', toValue(args)] as const
}

export function getCandidatesTotalsByOfficeByPartyIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.candidates.totals.by_office.by_party.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCandidatesTotalsByOfficeByPartyIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.candidates.totals.by_office.by_party.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.candidates.totals.by_office.by_party.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.candidates.totals.by_office.by_party.index.$get>>
              >
            >
          >,
          ReturnType<typeof getCandidatesTotalsByOfficeByPartyIndexQueryKey>
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
          Awaited<ReturnType<typeof client.candidates.totals.by_office.by_party.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCandidatesTotalsByOfficeByPartyIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCandidatesTotalsByOfficeByPartyIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.candidates.totals.by_office.by_party.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeCommitteeIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':committee_id']['index']['$get']>
  >,
) {
  return ['committee', '/committee/:committee_id/', toValue(args)] as const
}

export function getCommitteeCommitteeIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':committee_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeCommitteeIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committee[':committee_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':committee_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.committee)[':committee_id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCommitteeCommitteeIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.committee)[':committee_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCommitteeIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeCommitteeIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committee[':committee_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeCommitteeIdCandidatesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':committee_id']['candidates']['index']['$get']>
  >,
) {
  return ['committee', '/committee/:committee_id/candidates/', toValue(args)] as const
}

export function getCommitteeCommitteeIdCandidatesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':committee_id']['candidates']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeCommitteeIdCandidatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committee[':committee_id'].candidates.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':committee_id']['candidates']['index']['$get']>
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
                    (typeof client.committee)[':committee_id']['candidates']['index']['$get']
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
                    (typeof client.committee)[':committee_id']['candidates']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommitteeCommitteeIdCandidatesIndexQueryKey>
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
            ReturnType<(typeof client.committee)[':committee_id']['candidates']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCommitteeIdCandidatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeCommitteeIdCandidatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committee[':committee_id'].candidates.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeCommitteeIdCandidatesHistoryIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.committee)[':committee_id']['candidates']['history']['index']['$get']
    >
  >,
) {
  return ['committee', '/committee/:committee_id/candidates/history/', toValue(args)] as const
}

export function getCommitteeCommitteeIdCandidatesHistoryIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.committee)[':committee_id']['candidates']['history']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeCommitteeIdCandidatesHistoryIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committee[':committee_id'].candidates.history.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.committee)[':committee_id']['candidates']['history']['index']['$get']
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
                    (typeof client.committee)[':committee_id']['candidates']['history']['index']['$get']
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
                    (typeof client.committee)[':committee_id']['candidates']['history']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommitteeCommitteeIdCandidatesHistoryIndexQueryKey>
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
              (typeof client.committee)[':committee_id']['candidates']['history']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCommitteeIdCandidatesHistoryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeCommitteeIdCandidatesHistoryIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committee[':committee_id'].candidates.history.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeCommitteeIdCandidatesHistoryCycleIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.committee)[':committee_id']['candidates']['history'][':cycle']['index']['$get']
    >
  >,
) {
  return [
    'committee',
    '/committee/:committee_id/candidates/history/:cycle/',
    toValue(args),
  ] as const
}

export function getCommitteeCommitteeIdCandidatesHistoryCycleIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.committee)[':committee_id']['candidates']['history'][':cycle']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeCommitteeIdCandidatesHistoryCycleIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committee[':committee_id'].candidates.history[':cycle'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.committee)[':committee_id']['candidates']['history'][':cycle']['index']['$get']
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
                    (typeof client.committee)[':committee_id']['candidates']['history'][':cycle']['index']['$get']
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
                    (typeof client.committee)[':committee_id']['candidates']['history'][':cycle']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommitteeCommitteeIdCandidatesHistoryCycleIndexQueryKey>
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
              (typeof client.committee)[':committee_id']['candidates']['history'][':cycle']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCommitteeIdCandidatesHistoryCycleIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeCommitteeIdCandidatesHistoryCycleIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committee[':committee_id'].candidates.history[':cycle'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeCommitteeIdFilingsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':committee_id']['filings']['index']['$get']>
  >,
) {
  return ['committee', '/committee/:committee_id/filings/', toValue(args)] as const
}

export function getCommitteeCommitteeIdFilingsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':committee_id']['filings']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeCommitteeIdFilingsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committee[':committee_id'].filings.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':committee_id']['filings']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.committee)[':committee_id']['filings']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCommitteeCommitteeIdFilingsIndexQueryKey>
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
            ReturnType<(typeof client.committee)[':committee_id']['filings']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCommitteeIdFilingsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeCommitteeIdFilingsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committee[':committee_id'].filings.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeCommitteeIdHistoryIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':committee_id']['history']['index']['$get']>
  >,
) {
  return ['committee', '/committee/:committee_id/history/', toValue(args)] as const
}

export function getCommitteeCommitteeIdHistoryIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':committee_id']['history']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeCommitteeIdHistoryIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committee[':committee_id'].history.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':committee_id']['history']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.committee)[':committee_id']['history']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCommitteeCommitteeIdHistoryIndexQueryKey>
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
            ReturnType<(typeof client.committee)[':committee_id']['history']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCommitteeIdHistoryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeCommitteeIdHistoryIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committee[':committee_id'].history.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeCommitteeIdHistoryCycleIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.committee)[':committee_id']['history'][':cycle']['index']['$get']
    >
  >,
) {
  return ['committee', '/committee/:committee_id/history/:cycle/', toValue(args)] as const
}

export function getCommitteeCommitteeIdHistoryCycleIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.committee)[':committee_id']['history'][':cycle']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeCommitteeIdHistoryCycleIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committee[':committee_id'].history[':cycle'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.committee)[':committee_id']['history'][':cycle']['index']['$get']
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
                    (typeof client.committee)[':committee_id']['history'][':cycle']['index']['$get']
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
                    (typeof client.committee)[':committee_id']['history'][':cycle']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommitteeCommitteeIdHistoryCycleIndexQueryKey>
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
              (typeof client.committee)[':committee_id']['history'][':cycle']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCommitteeIdHistoryCycleIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeCommitteeIdHistoryCycleIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committee[':committee_id'].history[':cycle'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeCommitteeIdReportsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':committee_id']['reports']['index']['$get']>
  >,
) {
  return ['committee', '/committee/:committee_id/reports/', toValue(args)] as const
}

export function getCommitteeCommitteeIdReportsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':committee_id']['reports']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeCommitteeIdReportsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committee[':committee_id'].reports.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':committee_id']['reports']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.committee)[':committee_id']['reports']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCommitteeCommitteeIdReportsIndexQueryKey>
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
            ReturnType<(typeof client.committee)[':committee_id']['reports']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCommitteeIdReportsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeCommitteeIdReportsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committee[':committee_id'].reports.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeCommitteeIdTotalsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':committee_id']['totals']['index']['$get']>
  >,
) {
  return ['committee', '/committee/:committee_id/totals/', toValue(args)] as const
}

export function getCommitteeCommitteeIdTotalsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':committee_id']['totals']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeCommitteeIdTotalsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committee[':committee_id'].totals.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':committee_id']['totals']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.committee)[':committee_id']['totals']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCommitteeCommitteeIdTotalsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.committee)[':committee_id']['totals']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCommitteeIdTotalsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeCommitteeIdTotalsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committee[':committee_id'].totals.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.committees.index.$get>>,
) {
  return ['committees', '/committees/', toValue(args)] as const
}

export function getCommitteesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.committees.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committees.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommitteesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committees.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.committees.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.committees.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.committees.index.$get>>>
            >
          >,
          ReturnType<typeof getCommitteesIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committees.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committees.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommunicationCostsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.communication_costs.index.$get>>,
) {
  return ['communication_costs', '/communication_costs/', toValue(args)] as const
}

export function getCommunicationCostsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.communication_costs.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommunicationCostsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.communication_costs.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommunicationCostsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.communication_costs.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.communication_costs.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.communication_costs.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.communication_costs.index.$get>>
              >
            >
          >,
          ReturnType<typeof getCommunicationCostsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.communication_costs.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommunicationCostsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommunicationCostsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.communication_costs.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommunicationCostsAggregatesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.communication_costs.aggregates.index.$get>>,
) {
  return ['communication_costs', '/communication_costs/aggregates/', toValue(args)] as const
}

export function getCommunicationCostsAggregatesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.communication_costs.aggregates.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommunicationCostsAggregatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.communication_costs.aggregates.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.communication_costs.aggregates.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.communication_costs.aggregates.index.$get>>
              >
            >
          >,
          ReturnType<typeof getCommunicationCostsAggregatesIndexQueryKey>
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
          Awaited<ReturnType<typeof client.communication_costs.aggregates.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommunicationCostsAggregatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommunicationCostsAggregatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.communication_costs.aggregates.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommunicationCostsByCandidateIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.communication_costs.by_candidate.index.$get>
  >,
) {
  return ['communication_costs', '/communication_costs/by_candidate/', toValue(args)] as const
}

export function getCommunicationCostsByCandidateIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.communication_costs.by_candidate.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommunicationCostsByCandidateIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.communication_costs.by_candidate.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.communication_costs.by_candidate.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.communication_costs.by_candidate.index.$get>>
              >
            >
          >,
          ReturnType<typeof getCommunicationCostsByCandidateIndexQueryKey>
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
          Awaited<ReturnType<typeof client.communication_costs.by_candidate.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommunicationCostsByCandidateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommunicationCostsByCandidateIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.communication_costs.by_candidate.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommunicationCostsTotalsByCandidateIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.communication_costs.totals.by_candidate.index.$get>
  >,
) {
  return [
    'communication_costs',
    '/communication_costs/totals/by_candidate/',
    toValue(args),
  ] as const
}

export function getCommunicationCostsTotalsByCandidateIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.communication_costs.totals.by_candidate.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommunicationCostsTotalsByCandidateIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.communication_costs.totals.by_candidate.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.communication_costs.totals.by_candidate.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.communication_costs.totals.by_candidate.index.$get>
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
                  ReturnType<typeof client.communication_costs.totals.by_candidate.index.$get>
                >
              >
            >
          >,
          ReturnType<typeof getCommunicationCostsTotalsByCandidateIndexQueryKey>
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
          Awaited<ReturnType<typeof client.communication_costs.totals.by_candidate.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommunicationCostsTotalsByCandidateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommunicationCostsTotalsByCandidateIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.communication_costs.totals.by_candidate.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEfileFilingsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.efile.filings.index.$get>>,
) {
  return ['efile', '/efile/filings/', toValue(args)] as const
}

export function getEfileFilingsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.efile.filings.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEfileFilingsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.efile.filings.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEfileFilingsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.efile.filings.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.efile.filings.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.efile.filings.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.efile.filings.index.$get>>>
            >
          >,
          ReturnType<typeof getEfileFilingsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.efile.filings.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEfileFilingsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEfileFilingsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.efile.filings.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEfileReportsHouseSenateIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.efile.reports)['house-senate']['index']['$get']>
  >,
) {
  return ['efile', '/efile/reports/house-senate/', toValue(args)] as const
}

export function getEfileReportsHouseSenateIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.efile.reports)['house-senate']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEfileReportsHouseSenateIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.efile.reports['house-senate'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.efile.reports)['house-senate']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.efile.reports)['house-senate']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEfileReportsHouseSenateIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.efile.reports)['house-senate']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEfileReportsHouseSenateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEfileReportsHouseSenateIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.efile.reports['house-senate'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEfileReportsPacPartyIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.efile.reports)['pac-party']['index']['$get']>
  >,
) {
  return ['efile', '/efile/reports/pac-party/', toValue(args)] as const
}

export function getEfileReportsPacPartyIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.efile.reports)['pac-party']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEfileReportsPacPartyIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.efile.reports['pac-party'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.efile.reports)['pac-party']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.efile.reports)['pac-party']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEfileReportsPacPartyIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.efile.reports)['pac-party']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEfileReportsPacPartyIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEfileReportsPacPartyIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.efile.reports['pac-party'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEfileReportsPresidentialIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.efile.reports.presidential.index.$get>>,
) {
  return ['efile', '/efile/reports/presidential/', toValue(args)] as const
}

export function getEfileReportsPresidentialIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.efile.reports.presidential.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEfileReportsPresidentialIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.efile.reports.presidential.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEfileReportsPresidentialIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.efile.reports.presidential.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.efile.reports.presidential.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.efile.reports.presidential.index.$get>>
              >
            >
          >,
          ReturnType<typeof getEfileReportsPresidentialIndexQueryKey>
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
          Awaited<ReturnType<typeof client.efile.reports.presidential.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEfileReportsPresidentialIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEfileReportsPresidentialIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.efile.reports.presidential.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getElectionDatesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['election-dates']['index']['$get']>>,
) {
  return ['election-dates', '/election-dates/', toValue(args)] as const
}

export function getElectionDatesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['election-dates']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getElectionDatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['election-dates'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useElectionDatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['election-dates']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['election-dates']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['election-dates']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getElectionDatesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client)['election-dates']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getElectionDatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getElectionDatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['election-dates'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getElectioneeringIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.electioneering.index.$get>>,
) {
  return ['electioneering', '/electioneering/', toValue(args)] as const
}

export function getElectioneeringIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.electioneering.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getElectioneeringIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.electioneering.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useElectioneeringIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.electioneering.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.electioneering.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.electioneering.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.electioneering.index.$get>>>
            >
          >,
          ReturnType<typeof getElectioneeringIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.electioneering.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getElectioneeringIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getElectioneeringIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.electioneering.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getElectioneeringAggregatesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.electioneering.aggregates.index.$get>>,
) {
  return ['electioneering', '/electioneering/aggregates/', toValue(args)] as const
}

export function getElectioneeringAggregatesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.electioneering.aggregates.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getElectioneeringAggregatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.electioneering.aggregates.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useElectioneeringAggregatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.electioneering.aggregates.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.electioneering.aggregates.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.electioneering.aggregates.index.$get>>
              >
            >
          >,
          ReturnType<typeof getElectioneeringAggregatesIndexQueryKey>
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
          Awaited<ReturnType<typeof client.electioneering.aggregates.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getElectioneeringAggregatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getElectioneeringAggregatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.electioneering.aggregates.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getElectioneeringByCandidateIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.electioneering.by_candidate.index.$get>>,
) {
  return ['electioneering', '/electioneering/by_candidate/', toValue(args)] as const
}

export function getElectioneeringByCandidateIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.electioneering.by_candidate.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getElectioneeringByCandidateIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.electioneering.by_candidate.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.electioneering.by_candidate.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.electioneering.by_candidate.index.$get>>
              >
            >
          >,
          ReturnType<typeof getElectioneeringByCandidateIndexQueryKey>
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
          Awaited<ReturnType<typeof client.electioneering.by_candidate.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getElectioneeringByCandidateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getElectioneeringByCandidateIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.electioneering.by_candidate.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getElectioneeringTotalsByCandidateIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.electioneering.totals.by_candidate.index.$get>
  >,
) {
  return ['electioneering', '/electioneering/totals/by_candidate/', toValue(args)] as const
}

export function getElectioneeringTotalsByCandidateIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.electioneering.totals.by_candidate.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getElectioneeringTotalsByCandidateIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.electioneering.totals.by_candidate.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.electioneering.totals.by_candidate.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.electioneering.totals.by_candidate.index.$get>>
              >
            >
          >,
          ReturnType<typeof getElectioneeringTotalsByCandidateIndexQueryKey>
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
          Awaited<ReturnType<typeof client.electioneering.totals.by_candidate.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getElectioneeringTotalsByCandidateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getElectioneeringTotalsByCandidateIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.electioneering.totals.by_candidate.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getElectionsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.elections.index.$get>>,
) {
  return ['elections', '/elections/', toValue(args)] as const
}

export function getElectionsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.elections.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getElectionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.elections.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useElectionsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.elections.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.elections.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.elections.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.elections.index.$get>>>
            >
          >,
          ReturnType<typeof getElectionsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.elections.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getElectionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getElectionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.elections.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getElectionsSearchIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.elections.search.index.$get>>,
) {
  return ['elections', '/elections/search/', toValue(args)] as const
}

export function getElectionsSearchIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.elections.search.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getElectionsSearchIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.elections.search.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useElectionsSearchIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.elections.search.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.elections.search.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.elections.search.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.elections.search.index.$get>>>
            >
          >,
          ReturnType<typeof getElectionsSearchIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.elections.search.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getElectionsSearchIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getElectionsSearchIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.elections.search.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getElectionsSummaryIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.elections.summary.index.$get>>,
) {
  return ['elections', '/elections/summary/', toValue(args)] as const
}

export function getElectionsSummaryIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.elections.summary.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getElectionsSummaryIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.elections.summary.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useElectionsSummaryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.elections.summary.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.elections.summary.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.elections.summary.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.elections.summary.index.$get>>>
            >
          >,
          ReturnType<typeof getElectionsSummaryIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.elections.summary.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getElectionsSummaryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getElectionsSummaryIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.elections.summary.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFilingsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.filings.index.$get>>,
) {
  return ['filings', '/filings/', toValue(args)] as const
}

export function getFilingsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.filings.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilingsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.filings.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilingsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filings.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.filings.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filings.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filings.index.$get>>>>
          >,
          ReturnType<typeof getFilingsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.filings.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFilingsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilingsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.filings.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLegalSearchIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.legal.search.index.$get>>,
) {
  return ['legal', '/legal/search/', toValue(args)] as const
}

export function getLegalSearchIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.legal.search.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLegalSearchIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.legal.search.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLegalSearchIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal.search.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.legal.search.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.legal.search.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.legal.search.index.$get>>>
            >
          >,
          ReturnType<typeof getLegalSearchIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legal.search.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLegalSearchIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLegalSearchIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.legal.search.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNamesAuditCandidatesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.audit_candidates.index.$get>>,
) {
  return ['names', '/names/audit_candidates/', toValue(args)] as const
}

export function getNamesAuditCandidatesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.audit_candidates.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNamesAuditCandidatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.names.audit_candidates.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNamesAuditCandidatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_candidates.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.audit_candidates.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.names.audit_candidates.index.$get>>
              >
            >
          >,
          ReturnType<typeof getNamesAuditCandidatesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_candidates.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamesAuditCandidatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNamesAuditCandidatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.names.audit_candidates.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNamesAuditCommitteesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.audit_committees.index.$get>>,
) {
  return ['names', '/names/audit_committees/', toValue(args)] as const
}

export function getNamesAuditCommitteesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.audit_committees.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNamesAuditCommitteesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.names.audit_committees.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNamesAuditCommitteesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_committees.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.audit_committees.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.names.audit_committees.index.$get>>
              >
            >
          >,
          ReturnType<typeof getNamesAuditCommitteesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.names.audit_committees.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamesAuditCommitteesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNamesAuditCommitteesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.names.audit_committees.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNamesCandidatesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.candidates.index.$get>>,
) {
  return ['names', '/names/candidates/', toValue(args)] as const
}

export function getNamesCandidatesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.candidates.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNamesCandidatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.names.candidates.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNamesCandidatesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.candidates.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.candidates.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.names.candidates.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.names.candidates.index.$get>>>
            >
          >,
          ReturnType<typeof getNamesCandidatesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.names.candidates.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamesCandidatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNamesCandidatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.names.candidates.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNamesCommitteesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.committees.index.$get>>,
) {
  return ['names', '/names/committees/', toValue(args)] as const
}

export function getNamesCommitteesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.committees.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNamesCommitteesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.names.committees.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNamesCommitteesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.committees.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.committees.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.names.committees.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.names.committees.index.$get>>>
            >
          >,
          ReturnType<typeof getNamesCommitteesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.names.committees.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamesCommitteesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNamesCommitteesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.names.committees.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOperationsLogIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['operations-log']['index']['$get']>>,
) {
  return ['operations-log', '/operations-log/', toValue(args)] as const
}

export function getOperationsLogIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['operations-log']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOperationsLogIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['operations-log'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOperationsLogIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['operations-log']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['operations-log']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['operations-log']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOperationsLogIndexQueryKey>
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
          Awaited<ReturnType<(typeof client)['operations-log']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOperationsLogIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOperationsLogIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['operations-log'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPresidentialContributionsByCandidateIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.presidential.contributions.by_candidate.index.$get>
  >,
) {
  return ['presidential', '/presidential/contributions/by_candidate/', toValue(args)] as const
}

export function getPresidentialContributionsByCandidateIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.presidential.contributions.by_candidate.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPresidentialContributionsByCandidateIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.presidential.contributions.by_candidate.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.presidential.contributions.by_candidate.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.presidential.contributions.by_candidate.index.$get>
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
                  ReturnType<typeof client.presidential.contributions.by_candidate.index.$get>
                >
              >
            >
          >,
          ReturnType<typeof getPresidentialContributionsByCandidateIndexQueryKey>
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
          Awaited<ReturnType<typeof client.presidential.contributions.by_candidate.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPresidentialContributionsByCandidateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPresidentialContributionsByCandidateIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.presidential.contributions.by_candidate.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPresidentialContributionsBySizeIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.presidential.contributions.by_size.index.$get>
  >,
) {
  return ['presidential', '/presidential/contributions/by_size/', toValue(args)] as const
}

export function getPresidentialContributionsBySizeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.presidential.contributions.by_size.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPresidentialContributionsBySizeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.presidential.contributions.by_size.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.presidential.contributions.by_size.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.presidential.contributions.by_size.index.$get>>
              >
            >
          >,
          ReturnType<typeof getPresidentialContributionsBySizeIndexQueryKey>
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
          Awaited<ReturnType<typeof client.presidential.contributions.by_size.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPresidentialContributionsBySizeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPresidentialContributionsBySizeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.presidential.contributions.by_size.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPresidentialContributionsByStateIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.presidential.contributions.by_state.index.$get>
  >,
) {
  return ['presidential', '/presidential/contributions/by_state/', toValue(args)] as const
}

export function getPresidentialContributionsByStateIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.presidential.contributions.by_state.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPresidentialContributionsByStateIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.presidential.contributions.by_state.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.presidential.contributions.by_state.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.presidential.contributions.by_state.index.$get>>
              >
            >
          >,
          ReturnType<typeof getPresidentialContributionsByStateIndexQueryKey>
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
          Awaited<ReturnType<typeof client.presidential.contributions.by_state.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPresidentialContributionsByStateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPresidentialContributionsByStateIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.presidential.contributions.by_state.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPresidentialCoverageEndDateIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.presidential.coverage_end_date.index.$get>>,
) {
  return ['presidential', '/presidential/coverage_end_date/', toValue(args)] as const
}

export function getPresidentialCoverageEndDateIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.presidential.coverage_end_date.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPresidentialCoverageEndDateIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.presidential.coverage_end_date.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.presidential.coverage_end_date.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.presidential.coverage_end_date.index.$get>>
              >
            >
          >,
          ReturnType<typeof getPresidentialCoverageEndDateIndexQueryKey>
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
          Awaited<ReturnType<typeof client.presidential.coverage_end_date.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPresidentialCoverageEndDateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPresidentialCoverageEndDateIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.presidential.coverage_end_date.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPresidentialFinancialSummaryIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.presidential.financial_summary.index.$get>>,
) {
  return ['presidential', '/presidential/financial_summary/', toValue(args)] as const
}

export function getPresidentialFinancialSummaryIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.presidential.financial_summary.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPresidentialFinancialSummaryIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.presidential.financial_summary.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.presidential.financial_summary.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.presidential.financial_summary.index.$get>>
              >
            >
          >,
          ReturnType<typeof getPresidentialFinancialSummaryIndexQueryKey>
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
          Awaited<ReturnType<typeof client.presidential.financial_summary.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPresidentialFinancialSummaryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPresidentialFinancialSummaryIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.presidential.financial_summary.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRadAnalystIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['rad-analyst']['index']['$get']>>,
) {
  return ['rad-analyst', '/rad-analyst/', toValue(args)] as const
}

export function getRadAnalystIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['rad-analyst']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRadAnalystIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rad-analyst'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRadAnalystIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['rad-analyst']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['rad-analyst']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['rad-analyst']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRadAnalystIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['rad-analyst']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRadAnalystIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRadAnalystIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rad-analyst'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportingDatesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['reporting-dates']['index']['$get']>>,
) {
  return ['reporting-dates', '/reporting-dates/', toValue(args)] as const
}

export function getReportingDatesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['reporting-dates']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportingDatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['reporting-dates'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportingDatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['reporting-dates']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['reporting-dates']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['reporting-dates']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportingDatesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client)['reporting-dates']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportingDatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportingDatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['reporting-dates'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsEntityTypeIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reports)[':entity_type']['index']['$get']>
  >,
) {
  return ['reports', '/reports/:entity_type/', toValue(args)] as const
}

export function getReportsEntityTypeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reports)[':entity_type']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsEntityTypeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports[':entity_type'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reports)[':entity_type']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reports)[':entity_type']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportsEntityTypeIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.reports)[':entity_type']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsEntityTypeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsEntityTypeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reports[':entity_type'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleAIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_a.index.$get>>,
) {
  return ['schedules', '/schedules/schedule_a/', toValue(args)] as const
}

export function getSchedulesScheduleAIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_a.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleAIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_a.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchedulesScheduleAIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_a.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_a.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_a.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_a.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleAIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_a.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleAIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleAIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_a.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleAByEmployerIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_a.by_employer.index.$get>
  >,
) {
  return ['schedules', '/schedules/schedule_a/by_employer/', toValue(args)] as const
}

export function getSchedulesScheduleAByEmployerIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_a.by_employer.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleAByEmployerIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_a.by_employer.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_a.by_employer.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_a.by_employer.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleAByEmployerIndexQueryKey>
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
          Awaited<ReturnType<typeof client.schedules.schedule_a.by_employer.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleAByEmployerIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleAByEmployerIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_a.by_employer.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleAByOccupationIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_a.by_occupation.index.$get>
  >,
) {
  return ['schedules', '/schedules/schedule_a/by_occupation/', toValue(args)] as const
}

export function getSchedulesScheduleAByOccupationIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_a.by_occupation.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleAByOccupationIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_a.by_occupation.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_a.by_occupation.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_a.by_occupation.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleAByOccupationIndexQueryKey>
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
          Awaited<ReturnType<typeof client.schedules.schedule_a.by_occupation.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleAByOccupationIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleAByOccupationIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_a.by_occupation.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleABySizeIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_a.by_size.index.$get>>,
) {
  return ['schedules', '/schedules/schedule_a/by_size/', toValue(args)] as const
}

export function getSchedulesScheduleABySizeIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_a.by_size.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleABySizeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_a.by_size.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_a.by_size.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_a.by_size.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleABySizeIndexQueryKey>
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
          Awaited<ReturnType<typeof client.schedules.schedule_a.by_size.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleABySizeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleABySizeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_a.by_size.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleABySizeByCandidateIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_a.by_size.by_candidate.index.$get>
  >,
) {
  return ['schedules', '/schedules/schedule_a/by_size/by_candidate/', toValue(args)] as const
}

export function getSchedulesScheduleABySizeByCandidateIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_a.by_size.by_candidate.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleABySizeByCandidateIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_a.by_size.by_candidate.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_a.by_size.by_candidate.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.schedules.schedule_a.by_size.by_candidate.index.$get>
                >
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleABySizeByCandidateIndexQueryKey>
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
          Awaited<ReturnType<typeof client.schedules.schedule_a.by_size.by_candidate.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleABySizeByCandidateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleABySizeByCandidateIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_a.by_size.by_candidate.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleAByStateIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_a.by_state.index.$get>>,
) {
  return ['schedules', '/schedules/schedule_a/by_state/', toValue(args)] as const
}

export function getSchedulesScheduleAByStateIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_a.by_state.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleAByStateIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_a.by_state.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_a.by_state.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleAByStateIndexQueryKey>
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
          Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleAByStateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleAByStateIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_a.by_state.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleAByStateByCandidateIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_a.by_state.by_candidate.index.$get>
  >,
) {
  return ['schedules', '/schedules/schedule_a/by_state/by_candidate/', toValue(args)] as const
}

export function getSchedulesScheduleAByStateByCandidateIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_a.by_state.by_candidate.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleAByStateByCandidateIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_a.by_state.by_candidate.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_a.by_state.by_candidate.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.schedules.schedule_a.by_state.by_candidate.index.$get>
                >
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleAByStateByCandidateIndexQueryKey>
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
          Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.by_candidate.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleAByStateByCandidateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleAByStateByCandidateIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_a.by_state.by_candidate.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleAByStateByCandidateTotalsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get>
  >,
) {
  return [
    'schedules',
    '/schedules/schedule_a/by_state/by_candidate/totals/',
    toValue(args),
  ] as const
}

export function getSchedulesScheduleAByStateByCandidateTotalsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleAByStateByCandidateTotalsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_a.by_state.by_candidate.totals.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get>
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
                    typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get
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
                    typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleAByStateByCandidateTotalsIndexQueryKey>
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
            ReturnType<typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleAByStateByCandidateTotalsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleAByStateByCandidateTotalsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_a.by_state.by_candidate.totals.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleAByStateTotalsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_a.by_state.totals.index.$get>
  >,
) {
  return ['schedules', '/schedules/schedule_a/by_state/totals/', toValue(args)] as const
}

export function getSchedulesScheduleAByStateTotalsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_a.by_state.totals.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleAByStateTotalsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_a.by_state.totals.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_a.by_state.totals.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.totals.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleAByStateTotalsIndexQueryKey>
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
          Awaited<ReturnType<typeof client.schedules.schedule_a.by_state.totals.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleAByStateTotalsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleAByStateTotalsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_a.by_state.totals.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleAByZipIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_a.by_zip.index.$get>>,
) {
  return ['schedules', '/schedules/schedule_a/by_zip/', toValue(args)] as const
}

export function getSchedulesScheduleAByZipIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_a.by_zip.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleAByZipIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_a.by_zip.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_a.by_zip.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_a.by_zip.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleAByZipIndexQueryKey>
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
          Awaited<ReturnType<typeof client.schedules.schedule_a.by_zip.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleAByZipIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleAByZipIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_a.by_zip.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleAEfileIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_a.efile.index.$get>>,
) {
  return ['schedules', '/schedules/schedule_a/efile/', toValue(args)] as const
}

export function getSchedulesScheduleAEfileIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_a.efile.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleAEfileIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_a.efile.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchedulesScheduleAEfileIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_a.efile.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_a.efile.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_a.efile.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleAEfileIndexQueryKey>
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
          Awaited<ReturnType<typeof client.schedules.schedule_a.efile.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleAEfileIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleAEfileIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_a.efile.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleASubIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>
  >,
) {
  return ['schedules', '/schedules/schedule_a/:sub_id/', toValue(args)] as const
}

export function getSchedulesScheduleASubIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleASubIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_a[':sub_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>
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
                  ReturnType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleASubIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleASubIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleASubIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_a[':sub_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleBIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_b.index.$get>>,
) {
  return ['schedules', '/schedules/schedule_b/', toValue(args)] as const
}

export function getSchedulesScheduleBIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_b.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleBIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_b.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchedulesScheduleBIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_b.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_b.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_b.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_b.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleBIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_b.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleBIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleBIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_b.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleBByPurposeIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_b.by_purpose.index.$get>
  >,
) {
  return ['schedules', '/schedules/schedule_b/by_purpose/', toValue(args)] as const
}

export function getSchedulesScheduleBByPurposeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_b.by_purpose.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleBByPurposeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_b.by_purpose.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_b.by_purpose.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_b.by_purpose.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleBByPurposeIndexQueryKey>
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
          Awaited<ReturnType<typeof client.schedules.schedule_b.by_purpose.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleBByPurposeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleBByPurposeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_b.by_purpose.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleBByRecipientIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_b.by_recipient.index.$get>
  >,
) {
  return ['schedules', '/schedules/schedule_b/by_recipient/', toValue(args)] as const
}

export function getSchedulesScheduleBByRecipientIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_b.by_recipient.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleBByRecipientIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_b.by_recipient.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_b.by_recipient.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_b.by_recipient.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleBByRecipientIndexQueryKey>
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
          Awaited<ReturnType<typeof client.schedules.schedule_b.by_recipient.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleBByRecipientIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleBByRecipientIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_b.by_recipient.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleBByRecipientIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_b.by_recipient_id.index.$get>
  >,
) {
  return ['schedules', '/schedules/schedule_b/by_recipient_id/', toValue(args)] as const
}

export function getSchedulesScheduleBByRecipientIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_b.by_recipient_id.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleBByRecipientIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_b.by_recipient_id.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_b.by_recipient_id.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_b.by_recipient_id.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleBByRecipientIdIndexQueryKey>
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
          Awaited<ReturnType<typeof client.schedules.schedule_b.by_recipient_id.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleBByRecipientIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleBByRecipientIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_b.by_recipient_id.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleBEfileIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_b.efile.index.$get>>,
) {
  return ['schedules', '/schedules/schedule_b/efile/', toValue(args)] as const
}

export function getSchedulesScheduleBEfileIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_b.efile.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleBEfileIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_b.efile.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchedulesScheduleBEfileIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_b.efile.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_b.efile.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_b.efile.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleBEfileIndexQueryKey>
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
          Awaited<ReturnType<typeof client.schedules.schedule_b.efile.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleBEfileIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleBEfileIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_b.efile.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleBSubIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>
  >,
) {
  return ['schedules', '/schedules/schedule_b/:sub_id/', toValue(args)] as const
}

export function getSchedulesScheduleBSubIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleBSubIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_b[':sub_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>
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
                  ReturnType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleBSubIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleBSubIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleBSubIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_b[':sub_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleCIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_c.index.$get>>,
) {
  return ['schedules', '/schedules/schedule_c/', toValue(args)] as const
}

export function getSchedulesScheduleCIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_c.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleCIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_c.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchedulesScheduleCIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_c.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_c.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_c.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_c.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleCIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_c.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleCIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleCIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_c.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleCSubIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>
  >,
) {
  return ['schedules', '/schedules/schedule_c/:sub_id/', toValue(args)] as const
}

export function getSchedulesScheduleCSubIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleCSubIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_c[':sub_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>
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
                  ReturnType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleCSubIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleCSubIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleCSubIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_c[':sub_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleDIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_d.index.$get>>,
) {
  return ['schedules', '/schedules/schedule_d/', toValue(args)] as const
}

export function getSchedulesScheduleDIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_d.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleDIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_d.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchedulesScheduleDIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_d.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_d.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_d.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_d.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleDIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_d.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleDIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleDIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_d.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleDSubIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>
  >,
) {
  return ['schedules', '/schedules/schedule_d/:sub_id/', toValue(args)] as const
}

export function getSchedulesScheduleDSubIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleDSubIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_d[':sub_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>
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
                  ReturnType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleDSubIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleDSubIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleDSubIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_d[':sub_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleEIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_e.index.$get>>,
) {
  return ['schedules', '/schedules/schedule_e/', toValue(args)] as const
}

export function getSchedulesScheduleEIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_e.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleEIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_e.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchedulesScheduleEIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_e.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_e.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_e.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_e.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleEIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_e.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleEIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleEIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_e.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleEByCandidateIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_e.by_candidate.index.$get>
  >,
) {
  return ['schedules', '/schedules/schedule_e/by_candidate/', toValue(args)] as const
}

export function getSchedulesScheduleEByCandidateIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_e.by_candidate.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleEByCandidateIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_e.by_candidate.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_e.by_candidate.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_e.by_candidate.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleEByCandidateIndexQueryKey>
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
          Awaited<ReturnType<typeof client.schedules.schedule_e.by_candidate.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleEByCandidateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleEByCandidateIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_e.by_candidate.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleEEfileIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_e.efile.index.$get>>,
) {
  return ['schedules', '/schedules/schedule_e/efile/', toValue(args)] as const
}

export function getSchedulesScheduleEEfileIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_e.efile.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleEEfileIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_e.efile.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchedulesScheduleEEfileIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_e.efile.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_e.efile.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_e.efile.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleEEfileIndexQueryKey>
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
          Awaited<ReturnType<typeof client.schedules.schedule_e.efile.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleEEfileIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleEEfileIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_e.efile.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleETotalsByCandidateIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>
  >,
) {
  return ['schedules', '/schedules/schedule_e/totals/by_candidate/', toValue(args)] as const
}

export function getSchedulesScheduleETotalsByCandidateIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleETotalsByCandidateIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_e.totals.by_candidate.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>
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
                  ReturnType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>
                >
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleETotalsByCandidateIndexQueryKey>
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
          Awaited<ReturnType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleETotalsByCandidateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleETotalsByCandidateIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_e.totals.by_candidate.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleFIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_f.index.$get>>,
) {
  return ['schedules', '/schedules/schedule_f/', toValue(args)] as const
}

export function getSchedulesScheduleFIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_f.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleFIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_f.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchedulesScheduleFIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_f.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.schedule_f.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_f.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schedules.schedule_f.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleFIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.schedules.schedule_f.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleFIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleFIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_f.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesScheduleFSubIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>
  >,
) {
  return ['schedules', '/schedules/schedule_f/:sub_id/', toValue(args)] as const
}

export function getSchedulesScheduleFSubIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesScheduleFSubIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.schedule_f[':sub_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>
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
                  ReturnType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSchedulesScheduleFSubIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesScheduleFSubIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesScheduleFSubIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.schedule_f[':sub_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStateElectionOfficeIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['state-election-office']['index']['$get']>
  >,
) {
  return ['state-election-office', '/state-election-office/', toValue(args)] as const
}

export function getStateElectionOfficeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['state-election-office']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStateElectionOfficeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['state-election-office'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['state-election-office']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['state-election-office']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStateElectionOfficeIndexQueryKey>
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
          Awaited<ReturnType<(typeof client)['state-election-office']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStateElectionOfficeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStateElectionOfficeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['state-election-office'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTotalsByEntityIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.totals.by_entity.index.$get>>,
) {
  return ['totals', '/totals/by_entity/', toValue(args)] as const
}

export function getTotalsByEntityIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.totals.by_entity.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTotalsByEntityIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.totals.by_entity.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTotalsByEntityIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.by_entity.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.totals.by_entity.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.totals.by_entity.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.totals.by_entity.index.$get>>>
            >
          >,
          ReturnType<typeof getTotalsByEntityIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.totals.by_entity.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTotalsByEntityIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTotalsByEntityIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.totals.by_entity.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTotalsEntityTypeIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.totals)[':entity_type']['index']['$get']>>,
) {
  return ['totals', '/totals/:entity_type/', toValue(args)] as const
}

export function getTotalsEntityTypeIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.totals)[':entity_type']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTotalsEntityTypeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.totals[':entity_type'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.totals)[':entity_type']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.totals)[':entity_type']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTotalsEntityTypeIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.totals)[':entity_type']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTotalsEntityTypeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTotalsEntityTypeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.totals[':entity_type'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
