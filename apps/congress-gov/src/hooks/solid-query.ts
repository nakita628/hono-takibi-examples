import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAmendmentKey() {
  return ['amendment'] as const
}

export function getBillKey() {
  return ['bill'] as const
}

export function getBoundCongressionalRecordKey() {
  return ['bound-congressional-record'] as const
}

export function getCommitteeKey() {
  return ['committee'] as const
}

export function getCommitteeMeetingKey() {
  return ['committee-meeting'] as const
}

export function getCommitteePrintKey() {
  return ['committee-print'] as const
}

export function getCommitteeReportKey() {
  return ['committee-report'] as const
}

export function getCongressKey() {
  return ['congress'] as const
}

export function getCongressionalRecordKey() {
  return ['congressional-record'] as const
}

export function getCrsreportKey() {
  return ['crsreport'] as const
}

export function getDailyCongressionalRecordKey() {
  return ['daily-congressional-record'] as const
}

export function getHearingKey() {
  return ['hearing'] as const
}

export function getHouseCommunicationKey() {
  return ['house-communication'] as const
}

export function getHouseRequirementKey() {
  return ['house-requirement'] as const
}

export function getHouseVoteKey() {
  return ['house-vote'] as const
}

export function getLawKey() {
  return ['law'] as const
}

export function getMemberKey() {
  return ['member'] as const
}

export function getNominationKey() {
  return ['nomination'] as const
}

export function getSenateCommunicationKey() {
  return ['senate-communication'] as const
}

export function getSummariesKey() {
  return ['summaries'] as const
}

export function getTreatyKey() {
  return ['treaty'] as const
}

export function getBillQueryKey(args: InferRequestType<typeof client.bill.$get>) {
  return ['bill', '/bill', args] as const
}

export function getBillQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bill.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bill.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bill.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBillQueryKey>
  >({
    queryKey: getBillQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bill.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBill<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bill.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bill.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bill.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getBillQueryKey>
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
    return { ...getBillQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBillCongressQueryKey(
  args: InferRequestType<(typeof client.bill)[':congress']['$get']>,
) {
  return ['bill', '/bill/:congress', args] as const
}

export function getBillCongressQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bill)[':congress']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bill)[':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bill)[':congress']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressQueryKey>
  >({
    queryKey: getBillCongressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bill[':congress'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBillCongress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bill)[':congress']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bill)[':congress']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bill)[':congress']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBillCongressQueryKey>
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
    return { ...getBillCongressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBillCongressBillTypeQueryKey(
  args: InferRequestType<(typeof client.bill)[':congress'][':billType']['$get']>,
) {
  return ['bill', '/bill/:congress/:billType', args] as const
}

export function getBillCongressBillTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bill)[':congress'][':billType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bill)[':congress'][':billType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bill)[':congress'][':billType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeQueryKey>
  >({
    queryKey: getBillCongressBillTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bill[':congress'][':billType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBillCongressBillType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bill)[':congress'][':billType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bill)[':congress'][':billType']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bill)[':congress'][':billType']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBillCongressBillTypeQueryKey>
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
      ...getBillCongressBillTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBillCongressBillTypeBillNumberQueryKey(
  args: InferRequestType<(typeof client.bill)[':congress'][':billType'][':billNumber']['$get']>,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber', args] as const
}

export function getBillCongressBillTypeBillNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bill)[':congress'][':billType'][':billNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bill)[':congress'][':billType'][':billNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bill)[':congress'][':billType'][':billNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeBillNumberQueryKey>
  >({
    queryKey: getBillCongressBillTypeBillNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bill[':congress'][':billType'][':billNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBillCongressBillTypeBillNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bill)[':congress'][':billType'][':billNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bill)[':congress'][':billType'][':billNumber']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBillCongressBillTypeBillNumberQueryKey>
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
      ...getBillCongressBillTypeBillNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBillCongressBillTypeBillNumberActionsQueryKey(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/actions', args] as const
}

export function getBillCongressBillTypeBillNumberActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeBillNumberActionsQueryKey>
  >({
    queryKey: getBillCongressBillTypeBillNumberActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bill[':congress'][':billType'][':billNumber'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBillCongressBillTypeBillNumberActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBillCongressBillTypeBillNumberActionsQueryKey>
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
      ...getBillCongressBillTypeBillNumberActionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBillCongressBillTypeBillNumberAmendmentsQueryKey(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/amendments', args] as const
}

export function getBillCongressBillTypeBillNumberAmendmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeBillNumberAmendmentsQueryKey>
  >({
    queryKey: getBillCongressBillTypeBillNumberAmendmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bill[':congress'][':billType'][':billNumber'].amendments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBillCongressBillTypeBillNumberAmendments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBillCongressBillTypeBillNumberAmendmentsQueryKey>
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
      ...getBillCongressBillTypeBillNumberAmendmentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getBillCongressBillTypeBillNumberCommitteesQueryKey(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/committees', args] as const
}

export function getBillCongressBillTypeBillNumberCommitteesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeBillNumberCommitteesQueryKey>
  >({
    queryKey: getBillCongressBillTypeBillNumberCommitteesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bill[':congress'][':billType'][':billNumber'].committees.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBillCongressBillTypeBillNumberCommittees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBillCongressBillTypeBillNumberCommitteesQueryKey>
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
      ...getBillCongressBillTypeBillNumberCommitteesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getBillCongressBillTypeBillNumberCosponsorsQueryKey(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/cosponsors', args] as const
}

export function getBillCongressBillTypeBillNumberCosponsorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeBillNumberCosponsorsQueryKey>
  >({
    queryKey: getBillCongressBillTypeBillNumberCosponsorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bill[':congress'][':billType'][':billNumber'].cosponsors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBillCongressBillTypeBillNumberCosponsors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBillCongressBillTypeBillNumberCosponsorsQueryKey>
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
      ...getBillCongressBillTypeBillNumberCosponsorsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getBillCongressBillTypeBillNumberRelatedbillsQueryKey(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/relatedbills', args] as const
}

export function getBillCongressBillTypeBillNumberRelatedbillsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeBillNumberRelatedbillsQueryKey>
  >({
    queryKey: getBillCongressBillTypeBillNumberRelatedbillsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bill[':congress'][':billType'][':billNumber'].relatedbills.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBillCongressBillTypeBillNumberRelatedbills<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBillCongressBillTypeBillNumberRelatedbillsQueryKey>
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
      ...getBillCongressBillTypeBillNumberRelatedbillsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getBillCongressBillTypeBillNumberSubjectsQueryKey(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/subjects', args] as const
}

export function getBillCongressBillTypeBillNumberSubjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeBillNumberSubjectsQueryKey>
  >({
    queryKey: getBillCongressBillTypeBillNumberSubjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bill[':congress'][':billType'][':billNumber'].subjects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBillCongressBillTypeBillNumberSubjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBillCongressBillTypeBillNumberSubjectsQueryKey>
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
      ...getBillCongressBillTypeBillNumberSubjectsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getBillCongressBillTypeBillNumberSummariesQueryKey(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/summaries', args] as const
}

export function getBillCongressBillTypeBillNumberSummariesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeBillNumberSummariesQueryKey>
  >({
    queryKey: getBillCongressBillTypeBillNumberSummariesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bill[':congress'][':billType'][':billNumber'].summaries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBillCongressBillTypeBillNumberSummaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBillCongressBillTypeBillNumberSummariesQueryKey>
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
      ...getBillCongressBillTypeBillNumberSummariesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getBillCongressBillTypeBillNumberTextQueryKey(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/text', args] as const
}

export function getBillCongressBillTypeBillNumberTextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeBillNumberTextQueryKey>
  >({
    queryKey: getBillCongressBillTypeBillNumberTextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bill[':congress'][':billType'][':billNumber'].text.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBillCongressBillTypeBillNumberText<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBillCongressBillTypeBillNumberTextQueryKey>
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
      ...getBillCongressBillTypeBillNumberTextQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBillCongressBillTypeBillNumberTitlesQueryKey(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/titles', args] as const
}

export function getBillCongressBillTypeBillNumberTitlesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeBillNumberTitlesQueryKey>
  >({
    queryKey: getBillCongressBillTypeBillNumberTitlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bill[':congress'][':billType'][':billNumber'].titles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBillCongressBillTypeBillNumberTitles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBillCongressBillTypeBillNumberTitlesQueryKey>
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
      ...getBillCongressBillTypeBillNumberTitlesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLawCongressQueryKey(
  args: InferRequestType<(typeof client.law)[':congress']['$get']>,
) {
  return ['law', '/law/:congress', args] as const
}

export function getLawCongressQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.law)[':congress']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.law)[':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.law)[':congress']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLawCongressQueryKey>
  >({
    queryKey: getLawCongressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.law[':congress'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLawCongress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.law)[':congress']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.law)[':congress']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.law)[':congress']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLawCongressQueryKey>
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
    return { ...getLawCongressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLawCongressLawTypeQueryKey(
  args: InferRequestType<(typeof client.law)[':congress'][':lawType']['$get']>,
) {
  return ['law', '/law/:congress/:lawType', args] as const
}

export function getLawCongressLawTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.law)[':congress'][':lawType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.law)[':congress'][':lawType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.law)[':congress'][':lawType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLawCongressLawTypeQueryKey>
  >({
    queryKey: getLawCongressLawTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.law[':congress'][':lawType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLawCongressLawType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.law)[':congress'][':lawType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.law)[':congress'][':lawType']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.law)[':congress'][':lawType']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLawCongressLawTypeQueryKey>
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
    return { ...getLawCongressLawTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLawCongressLawTypeLawNumberQueryKey(
  args: InferRequestType<(typeof client.law)[':congress'][':lawType'][':lawNumber']['$get']>,
) {
  return ['law', '/law/:congress/:lawType/:lawNumber', args] as const
}

export function getLawCongressLawTypeLawNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.law)[':congress'][':lawType'][':lawNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.law)[':congress'][':lawType'][':lawNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.law)[':congress'][':lawType'][':lawNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLawCongressLawTypeLawNumberQueryKey>
  >({
    queryKey: getLawCongressLawTypeLawNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.law[':congress'][':lawType'][':lawNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLawCongressLawTypeLawNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.law)[':congress'][':lawType'][':lawNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.law)[':congress'][':lawType'][':lawNumber']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.law)[':congress'][':lawType'][':lawNumber']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLawCongressLawTypeLawNumberQueryKey>
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
      ...getLawCongressLawTypeLawNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAmendmentQueryKey(args: InferRequestType<typeof client.amendment.$get>) {
  return ['amendment', '/amendment', args] as const
}

export function getAmendmentQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.amendment.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.amendment.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.amendment.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAmendmentQueryKey>
  >({
    queryKey: getAmendmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.amendment.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAmendment<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.amendment.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.amendment.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.amendment.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAmendmentQueryKey>
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
    return { ...getAmendmentQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAmendmentCongressQueryKey(
  args: InferRequestType<(typeof client.amendment)[':congress']['$get']>,
) {
  return ['amendment', '/amendment/:congress', args] as const
}

export function getAmendmentCongressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.amendment)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.amendment)[':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.amendment)[':congress']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmendmentCongressQueryKey>
  >({
    queryKey: getAmendmentCongressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.amendment[':congress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAmendmentCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.amendment)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.amendment)[':congress']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.amendment)[':congress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAmendmentCongressQueryKey>
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
    return { ...getAmendmentCongressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAmendmentCongressAmendmentTypeQueryKey(
  args: InferRequestType<(typeof client.amendment)[':congress'][':amendmentType']['$get']>,
) {
  return ['amendment', '/amendment/:congress/:amendmentType', args] as const
}

export function getAmendmentCongressAmendmentTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.amendment)[':congress'][':amendmentType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.amendment)[':congress'][':amendmentType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.amendment)[':congress'][':amendmentType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmendmentCongressAmendmentTypeQueryKey>
  >({
    queryKey: getAmendmentCongressAmendmentTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.amendment[':congress'][':amendmentType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAmendmentCongressAmendmentType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.amendment)[':congress'][':amendmentType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.amendment)[':congress'][':amendmentType']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.amendment)[':congress'][':amendmentType']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAmendmentCongressAmendmentTypeQueryKey>
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
      ...getAmendmentCongressAmendmentTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAmendmentCongressAmendmentTypeAmendmentNumberQueryKey(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
  >,
) {
  return ['amendment', '/amendment/:congress/:amendmentType/:amendmentNumber', args] as const
}

export function getAmendmentCongressAmendmentTypeAmendmentNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmendmentCongressAmendmentTypeAmendmentNumberQueryKey>
  >({
    queryKey: getAmendmentCongressAmendmentTypeAmendmentNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.amendment[':congress'][':amendmentType'][':amendmentNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAmendmentCongressAmendmentTypeAmendmentNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
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
                    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAmendmentCongressAmendmentTypeAmendmentNumberQueryKey>
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
      ...getAmendmentCongressAmendmentTypeAmendmentNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAmendmentCongressAmendmentTypeAmendmentNumberActionsQueryKey(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
  >,
) {
  return [
    'amendment',
    '/amendment/:congress/:amendmentType/:amendmentNumber/actions',
    args,
  ] as const
}

export function getAmendmentCongressAmendmentTypeAmendmentNumberActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmendmentCongressAmendmentTypeAmendmentNumberActionsQueryKey>
  >({
    queryKey: getAmendmentCongressAmendmentTypeAmendmentNumberActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.amendment[':congress'][':amendmentType'][':amendmentNumber'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAmendmentCongressAmendmentTypeAmendmentNumberActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
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
                    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAmendmentCongressAmendmentTypeAmendmentNumberActionsQueryKey>
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
      ...getAmendmentCongressAmendmentTypeAmendmentNumberActionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsQueryKey(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
  >,
) {
  return [
    'amendment',
    '/amendment/:congress/:amendmentType/:amendmentNumber/cosponsors',
    args,
  ] as const
}

export function getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsQueryKey>
  >({
    queryKey: getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.amendment[':congress'][':amendmentType'][':amendmentNumber'].cosponsors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAmendmentCongressAmendmentTypeAmendmentNumberCosponsors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
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
                    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsQueryKey>
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
      ...getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsQueryKey(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
  >,
) {
  return [
    'amendment',
    '/amendment/:congress/:amendmentType/:amendmentNumber/amendments',
    args,
  ] as const
}

export function getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsQueryKey>
  >({
    queryKey: getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.amendment[':congress'][':amendmentType'][':amendmentNumber'].amendments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAmendmentCongressAmendmentTypeAmendmentNumberAmendments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
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
                    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsQueryKey>
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
      ...getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAmendmentCongressAmendmentTypeAmendmentNumberTextQueryKey(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
  >,
) {
  return ['amendment', '/amendment/:congress/:amendmentType/:amendmentNumber/text', args] as const
}

export function getAmendmentCongressAmendmentTypeAmendmentNumberTextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmendmentCongressAmendmentTypeAmendmentNumberTextQueryKey>
  >({
    queryKey: getAmendmentCongressAmendmentTypeAmendmentNumberTextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.amendment[':congress'][':amendmentType'][':amendmentNumber'].text.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAmendmentCongressAmendmentTypeAmendmentNumberText<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
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
                    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAmendmentCongressAmendmentTypeAmendmentNumberTextQueryKey>
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
      ...getAmendmentCongressAmendmentTypeAmendmentNumberTextQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSummariesQueryKey(args: InferRequestType<typeof client.summaries.$get>) {
  return ['summaries', '/summaries', args] as const
}

export function getSummariesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.summaries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSummariesQueryKey>
  >({
    queryKey: getSummariesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.summaries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSummaries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.summaries.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSummariesQueryKey>
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
    return { ...getSummariesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSummariesCongressQueryKey(
  args: InferRequestType<(typeof client.summaries)[':congress']['$get']>,
) {
  return ['summaries', '/summaries/:congress', args] as const
}

export function getSummariesCongressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.summaries)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.summaries)[':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.summaries)[':congress']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSummariesCongressQueryKey>
  >({
    queryKey: getSummariesCongressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.summaries[':congress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSummariesCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.summaries)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.summaries)[':congress']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.summaries)[':congress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSummariesCongressQueryKey>
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
    return { ...getSummariesCongressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSummariesCongressBillTypeQueryKey(
  args: InferRequestType<(typeof client.summaries)[':congress'][':billType']['$get']>,
) {
  return ['summaries', '/summaries/:congress/:billType', args] as const
}

export function getSummariesCongressBillTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.summaries)[':congress'][':billType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.summaries)[':congress'][':billType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.summaries)[':congress'][':billType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSummariesCongressBillTypeQueryKey>
  >({
    queryKey: getSummariesCongressBillTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.summaries[':congress'][':billType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSummariesCongressBillType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.summaries)[':congress'][':billType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.summaries)[':congress'][':billType']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.summaries)[':congress'][':billType']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSummariesCongressBillTypeQueryKey>
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
      ...getSummariesCongressBillTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCongressQueryKey(args: InferRequestType<typeof client.congress.$get>) {
  return ['congress', '/congress', args] as const
}

export function getCongressQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.congress.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCongressQueryKey>
  >({
    queryKey: getCongressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.congress.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCongress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.congress.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCongressQueryKey>
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
    return { ...getCongressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCongressCongressQueryKey(
  args: InferRequestType<(typeof client.congress)[':congress']['$get']>,
) {
  return ['congress', '/congress/:congress', args] as const
}

export function getCongressCongressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.congress)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.congress)[':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.congress)[':congress']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCongressCongressQueryKey>
  >({
    queryKey: getCongressCongressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.congress[':congress'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCongressCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.congress)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.congress)[':congress']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.congress)[':congress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCongressCongressQueryKey>
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
    return { ...getCongressCongressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCongressCurrentQueryKey(
  args: InferRequestType<typeof client.congress.current.$get>,
) {
  return ['congress', '/congress/current', args] as const
}

export function getCongressCurrentQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.current.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.congress.current.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.current.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCongressCurrentQueryKey>
  >({
    queryKey: getCongressCurrentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.congress.current.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCongressCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.current.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.congress.current.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.congress.current.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCongressCurrentQueryKey>
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
    return { ...getCongressCurrentQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMemberQueryKey(args: InferRequestType<typeof client.member.$get>) {
  return ['member', '/member', args] as const
}

export function getMemberQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.member.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.member.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.member.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMemberQueryKey>
  >({
    queryKey: getMemberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.member.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMember<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.member.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.member.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.member.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getMemberQueryKey>
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
    return { ...getMemberQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMemberBioguideIdQueryKey(
  args: InferRequestType<(typeof client.member)[':bioguideId']['$get']>,
) {
  return ['member', '/member/:bioguideId', args] as const
}

export function getMemberBioguideIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':bioguideId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.member)[':bioguideId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':bioguideId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMemberBioguideIdQueryKey>
  >({
    queryKey: getMemberBioguideIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.member[':bioguideId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMemberBioguideId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':bioguideId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.member)[':bioguideId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.member)[':bioguideId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMemberBioguideIdQueryKey>
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
    return { ...getMemberBioguideIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMemberBioguideIdSponsoredLegislationQueryKey(
  args: InferRequestType<(typeof client.member)[':bioguideId']['sponsored-legislation']['$get']>,
) {
  return ['member', '/member/:bioguideId/sponsored-legislation', args] as const
}

export function getMemberBioguideIdSponsoredLegislationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.member)[':bioguideId']['sponsored-legislation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.member)[':bioguideId']['sponsored-legislation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.member)[':bioguideId']['sponsored-legislation']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMemberBioguideIdSponsoredLegislationQueryKey>
  >({
    queryKey: getMemberBioguideIdSponsoredLegislationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.member[':bioguideId']['sponsored-legislation'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMemberBioguideIdSponsoredLegislation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.member)[':bioguideId']['sponsored-legislation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.member)[':bioguideId']['sponsored-legislation']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.member)[':bioguideId']['sponsored-legislation']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMemberBioguideIdSponsoredLegislationQueryKey>
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
      ...getMemberBioguideIdSponsoredLegislationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMemberBioguideIdCosponsoredLegislationQueryKey(
  args: InferRequestType<(typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']>,
) {
  return ['member', '/member/:bioguideId/cosponsored-legislation', args] as const
}

export function getMemberBioguideIdCosponsoredLegislationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMemberBioguideIdCosponsoredLegislationQueryKey>
  >({
    queryKey: getMemberBioguideIdCosponsoredLegislationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.member[':bioguideId']['cosponsored-legislation'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMemberBioguideIdCosponsoredLegislation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']
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
                    (typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMemberBioguideIdCosponsoredLegislationQueryKey>
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
      ...getMemberBioguideIdCosponsoredLegislationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMemberCongressCongressQueryKey(
  args: InferRequestType<(typeof client.member.congress)[':congress']['$get']>,
) {
  return ['member', '/member/congress/:congress', args] as const
}

export function getMemberCongressCongressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.member.congress)[':congress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.member.congress)[':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.member.congress)[':congress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMemberCongressCongressQueryKey>
  >({
    queryKey: getMemberCongressCongressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.member.congress[':congress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMemberCongressCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.member.congress)[':congress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.member.congress)[':congress']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.member.congress)[':congress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMemberCongressCongressQueryKey>
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
      ...getMemberCongressCongressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMemberStateCodeQueryKey(
  args: InferRequestType<(typeof client.member)[':stateCode']['$get']>,
) {
  return ['member', '/member/:stateCode', args] as const
}

export function getMemberStateCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':stateCode']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.member)[':stateCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':stateCode']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMemberStateCodeQueryKey>
  >({
    queryKey: getMemberStateCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.member[':stateCode'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMemberStateCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':stateCode']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.member)[':stateCode']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.member)[':stateCode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMemberStateCodeQueryKey>
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
    return { ...getMemberStateCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMemberStateCodeDistrictQueryKey(
  args: InferRequestType<(typeof client.member)[':stateCode'][':district']['$get']>,
) {
  return ['member', '/member/:stateCode/:district', args] as const
}

export function getMemberStateCodeDistrictQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.member)[':stateCode'][':district']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.member)[':stateCode'][':district']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.member)[':stateCode'][':district']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMemberStateCodeDistrictQueryKey>
  >({
    queryKey: getMemberStateCodeDistrictQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.member[':stateCode'][':district'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMemberStateCodeDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.member)[':stateCode'][':district']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.member)[':stateCode'][':district']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.member)[':stateCode'][':district']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMemberStateCodeDistrictQueryKey>
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
      ...getMemberStateCodeDistrictQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMemberCongressCongressStateCodeDistrictQueryKey(
  args: InferRequestType<
    (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
  >,
) {
  return ['member', '/member/congress/:congress/:stateCode/:district', args] as const
}

export function getMemberCongressCongressStateCodeDistrictQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMemberCongressCongressStateCodeDistrictQueryKey>
  >({
    queryKey: getMemberCongressCongressStateCodeDistrictQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.member.congress[':congress'][':stateCode'][':district'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMemberCongressCongressStateCodeDistrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
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
                    (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMemberCongressCongressStateCodeDistrictQueryKey>
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
      ...getMemberCongressCongressStateCodeDistrictQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getHouseVoteQueryKey(
  args: InferRequestType<(typeof client)['house-vote']['$get']>,
) {
  return ['house-vote', '/house-vote', args] as const
}

export function getHouseVoteQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['house-vote']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHouseVoteQueryKey>
  >({
    queryKey: getHouseVoteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['house-vote'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHouseVote<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['house-vote']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHouseVoteQueryKey>
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
    return { ...getHouseVoteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHouseVoteCongressQueryKey(
  args: InferRequestType<(typeof client)['house-vote'][':congress']['$get']>,
) {
  return ['house-vote', '/house-vote/:congress', args] as const
}

export function getHouseVoteCongressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote'][':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['house-vote'][':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['house-vote'][':congress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseVoteCongressQueryKey>
  >({
    queryKey: getHouseVoteCongressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['house-vote'][':congress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHouseVoteCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote'][':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['house-vote'][':congress']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['house-vote'][':congress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHouseVoteCongressQueryKey>
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
    return { ...getHouseVoteCongressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHouseVoteCongressSessionQueryKey(
  args: InferRequestType<(typeof client)['house-vote'][':congress'][':session']['$get']>,
) {
  return ['house-vote', '/house-vote/:congress/:session', args] as const
}

export function getHouseVoteCongressSessionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['house-vote'][':congress'][':session']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['house-vote'][':congress'][':session']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['house-vote'][':congress'][':session']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseVoteCongressSessionQueryKey>
  >({
    queryKey: getHouseVoteCongressSessionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['house-vote'][':congress'][':session'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHouseVoteCongressSession<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['house-vote'][':congress'][':session']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['house-vote'][':congress'][':session']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['house-vote'][':congress'][':session']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHouseVoteCongressSessionQueryKey>
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
      ...getHouseVoteCongressSessionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getHouseVoteCongressSessionVoteNumberQueryKey(
  args: InferRequestType<
    (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']
  >,
) {
  return ['house-vote', '/house-vote/:congress/:session/:voteNumber', args] as const
}

export function getHouseVoteCongressSessionVoteNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseVoteCongressSessionVoteNumberQueryKey>
  >({
    queryKey: getHouseVoteCongressSessionVoteNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['house-vote'][':congress'][':session'][':voteNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHouseVoteCongressSessionVoteNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']
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
                    (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHouseVoteCongressSessionVoteNumberQueryKey>
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
      ...getHouseVoteCongressSessionVoteNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getHouseVoteCongressSessionVoteNumberMembersQueryKey(
  args: InferRequestType<
    (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
  >,
) {
  return ['house-vote', '/house-vote/:congress/:session/:voteNumber/members', args] as const
}

export function getHouseVoteCongressSessionVoteNumberMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseVoteCongressSessionVoteNumberMembersQueryKey>
  >({
    queryKey: getHouseVoteCongressSessionVoteNumberMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['house-vote'][':congress'][':session'][':voteNumber'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHouseVoteCongressSessionVoteNumberMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
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
                    (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHouseVoteCongressSessionVoteNumberMembersQueryKey>
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
      ...getHouseVoteCongressSessionVoteNumberMembersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeQueryKey(args: InferRequestType<typeof client.committee.$get>) {
  return ['committee', '/committee', args] as const
}

export function getCommitteeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committee.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.committee.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committee.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCommitteeQueryKey>
  >({
    queryKey: getCommitteeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committee.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCommittee<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committee.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.committee.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committee.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteeQueryKey>
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
    return { ...getCommitteeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCommitteeChamberQueryKey(
  args: InferRequestType<(typeof client.committee)[':chamber']['$get']>,
) {
  return ['committee', '/committee/:chamber', args] as const
}

export function getCommitteeChamberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':chamber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.committee)[':chamber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':chamber']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeChamberQueryKey>
  >({
    queryKey: getCommitteeChamberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committee[':chamber'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCommitteeChamber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':chamber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.committee)[':chamber']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.committee)[':chamber']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteeChamberQueryKey>
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
    return { ...getCommitteeChamberQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCommitteeCongressQueryKey(
  args: InferRequestType<(typeof client.committee)[':congress']['$get']>,
) {
  return ['committee', '/committee/:congress', args] as const
}

export function getCommitteeCongressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.committee)[':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':congress']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCongressQueryKey>
  >({
    queryKey: getCommitteeCongressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committee[':congress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.committee)[':congress']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.committee)[':congress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteeCongressQueryKey>
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
    return { ...getCommitteeCongressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCommitteeCongressChamberQueryKey(
  args: InferRequestType<(typeof client.committee)[':congress'][':chamber']['$get']>,
) {
  return ['committee', '/committee/:congress/:chamber', args] as const
}

export function getCommitteeCongressChamberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.committee)[':congress'][':chamber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.committee)[':congress'][':chamber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.committee)[':congress'][':chamber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCongressChamberQueryKey>
  >({
    queryKey: getCommitteeCongressChamberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committee[':congress'][':chamber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeCongressChamber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.committee)[':congress'][':chamber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.committee)[':congress'][':chamber']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.committee)[':congress'][':chamber']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteeCongressChamberQueryKey>
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
      ...getCommitteeCongressChamberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeChamberCommitteeCodeQueryKey(
  args: InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['$get']>,
) {
  return ['committee', '/committee/:chamber/:committeeCode', args] as const
}

export function getCommitteeChamberCommitteeCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeChamberCommitteeCodeQueryKey>
  >({
    queryKey: getCommitteeChamberCommitteeCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committee[':chamber'][':committeeCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeChamberCommitteeCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteeChamberCommitteeCodeQueryKey>
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
      ...getCommitteeChamberCommitteeCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeCongressChamberCommitteeCodeQueryKey(
  args: InferRequestType<
    (typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']
  >,
) {
  return ['committee', '/committee/:congress/:chamber/:committeeCode', args] as const
}

export function getCommitteeCongressChamberCommitteeCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCongressChamberCommitteeCodeQueryKey>
  >({
    queryKey: getCommitteeCongressChamberCommitteeCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committee[':congress'][':chamber'][':committeeCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeCongressChamberCommitteeCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']
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
                    (typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteeCongressChamberCommitteeCodeQueryKey>
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
      ...getCommitteeCongressChamberCommitteeCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeChamberCommitteeCodeBillsQueryKey(
  args: InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']>,
) {
  return ['committee', '/committee/:chamber/:committeeCode/bills', args] as const
}

export function getCommitteeChamberCommitteeCodeBillsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeChamberCommitteeCodeBillsQueryKey>
  >({
    queryKey: getCommitteeChamberCommitteeCodeBillsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committee[':chamber'][':committeeCode'].bills.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeChamberCommitteeCodeBills<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']
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
                    (typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteeChamberCommitteeCodeBillsQueryKey>
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
      ...getCommitteeChamberCommitteeCodeBillsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeChamberCommitteeCodeReportsQueryKey(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']
  >,
) {
  return ['committee', '/committee/:chamber/:committeeCode/reports', args] as const
}

export function getCommitteeChamberCommitteeCodeReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeChamberCommitteeCodeReportsQueryKey>
  >({
    queryKey: getCommitteeChamberCommitteeCodeReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committee[':chamber'][':committeeCode'].reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeChamberCommitteeCodeReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']
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
                    (typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteeChamberCommitteeCodeReportsQueryKey>
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
      ...getCommitteeChamberCommitteeCodeReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeChamberCommitteeCodeNominationsQueryKey(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']
  >,
) {
  return ['committee', '/committee/:chamber/:committeeCode/nominations', args] as const
}

export function getCommitteeChamberCommitteeCodeNominationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeChamberCommitteeCodeNominationsQueryKey>
  >({
    queryKey: getCommitteeChamberCommitteeCodeNominationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committee[':chamber'][':committeeCode'].nominations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeChamberCommitteeCodeNominations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']
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
                    (typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteeChamberCommitteeCodeNominationsQueryKey>
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
      ...getCommitteeChamberCommitteeCodeNominationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeChamberCommitteeCodeHouseCommunicationQueryKey(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
  >,
) {
  return ['committee', '/committee/:chamber/:committeeCode/house-communication', args] as const
}

export function getCommitteeChamberCommitteeCodeHouseCommunicationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeChamberCommitteeCodeHouseCommunicationQueryKey>
  >({
    queryKey: getCommitteeChamberCommitteeCodeHouseCommunicationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committee[':chamber'][':committeeCode']['house-communication'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeChamberCommitteeCodeHouseCommunication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
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
                    (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteeChamberCommitteeCodeHouseCommunicationQueryKey>
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
      ...getCommitteeChamberCommitteeCodeHouseCommunicationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeChamberCommitteeCodeSenateCommunicationQueryKey(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
  >,
) {
  return ['committee', '/committee/:chamber/:committeeCode/senate-communication', args] as const
}

export function getCommitteeChamberCommitteeCodeSenateCommunicationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeChamberCommitteeCodeSenateCommunicationQueryKey>
  >({
    queryKey: getCommitteeChamberCommitteeCodeSenateCommunicationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committee[':chamber'][':committeeCode']['senate-communication'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeChamberCommitteeCodeSenateCommunication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
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
                    (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteeChamberCommitteeCodeSenateCommunicationQueryKey>
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
      ...getCommitteeChamberCommitteeCodeSenateCommunicationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeReportQueryKey(
  args: InferRequestType<(typeof client)['committee-report']['$get']>,
) {
  return ['committee-report', '/committee-report', args] as const
}

export function getCommitteeReportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-report']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['committee-report']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-report']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeReportQueryKey>
  >({
    queryKey: getCommitteeReportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['committee-report'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCommitteeReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-report']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['committee-report']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-report']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteeReportQueryKey>
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
    return { ...getCommitteeReportQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCommitteeReportCongressQueryKey(
  args: InferRequestType<(typeof client)['committee-report'][':congress']['$get']>,
) {
  return ['committee-report', '/committee-report/:congress', args] as const
}

export function getCommitteeReportCongressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['committee-report'][':congress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['committee-report'][':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['committee-report'][':congress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeReportCongressQueryKey>
  >({
    queryKey: getCommitteeReportCongressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['committee-report'][':congress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeReportCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['committee-report'][':congress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['committee-report'][':congress']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['committee-report'][':congress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteeReportCongressQueryKey>
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
      ...getCommitteeReportCongressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeReportCongressReportTypeQueryKey(
  args: InferRequestType<(typeof client)['committee-report'][':congress'][':reportType']['$get']>,
) {
  return ['committee-report', '/committee-report/:congress/:reportType', args] as const
}

export function getCommitteeReportCongressReportTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['committee-report'][':congress'][':reportType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['committee-report'][':congress'][':reportType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['committee-report'][':congress'][':reportType']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeReportCongressReportTypeQueryKey>
  >({
    queryKey: getCommitteeReportCongressReportTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['committee-report'][':congress'][':reportType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeReportCongressReportType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['committee-report'][':congress'][':reportType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['committee-report'][':congress'][':reportType']['$get']
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
                    (typeof client)['committee-report'][':congress'][':reportType']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteeReportCongressReportTypeQueryKey>
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
      ...getCommitteeReportCongressReportTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeReportCongressReportTypeReportNumberQueryKey(
  args: InferRequestType<
    (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
  >,
) {
  return [
    'committee-report',
    '/committee-report/:congress/:reportType/:reportNumber',
    args,
  ] as const
}

export function getCommitteeReportCongressReportTypeReportNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeReportCongressReportTypeReportNumberQueryKey>
  >({
    queryKey: getCommitteeReportCongressReportTypeReportNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['committee-report'][':congress'][':reportType'][':reportNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeReportCongressReportTypeReportNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
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
                    (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteeReportCongressReportTypeReportNumberQueryKey>
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
      ...getCommitteeReportCongressReportTypeReportNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeReportCongressReportTypeReportNumberTextQueryKey(
  args: InferRequestType<
    (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
  >,
) {
  return [
    'committee-report',
    '/committee-report/:congress/:reportType/:reportNumber/text',
    args,
  ] as const
}

export function getCommitteeReportCongressReportTypeReportNumberTextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeReportCongressReportTypeReportNumberTextQueryKey>
  >({
    queryKey: getCommitteeReportCongressReportTypeReportNumberTextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['committee-report'][':congress'][':reportType'][':reportNumber'].text.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeReportCongressReportTypeReportNumberText<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
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
                    (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteeReportCongressReportTypeReportNumberTextQueryKey>
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
      ...getCommitteeReportCongressReportTypeReportNumberTextQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCommitteePrintQueryKey(
  args: InferRequestType<(typeof client)['committee-print']['$get']>,
) {
  return ['committee-print', '/committee-print', args] as const
}

export function getCommitteePrintQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-print']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['committee-print']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-print']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteePrintQueryKey>
  >({
    queryKey: getCommitteePrintQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['committee-print'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCommitteePrint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-print']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['committee-print']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-print']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteePrintQueryKey>
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
    return { ...getCommitteePrintQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCommitteePrintCongressQueryKey(
  args: InferRequestType<(typeof client)['committee-print'][':congress']['$get']>,
) {
  return ['committee-print', '/committee-print/:congress', args] as const
}

export function getCommitteePrintCongressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['committee-print'][':congress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['committee-print'][':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['committee-print'][':congress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteePrintCongressQueryKey>
  >({
    queryKey: getCommitteePrintCongressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['committee-print'][':congress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteePrintCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['committee-print'][':congress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['committee-print'][':congress']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['committee-print'][':congress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteePrintCongressQueryKey>
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
      ...getCommitteePrintCongressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommitteePrintCongressChamberQueryKey(
  args: InferRequestType<(typeof client)['committee-print'][':congress'][':chamber']['$get']>,
) {
  return ['committee-print', '/committee-print/:congress/:chamber', args] as const
}

export function getCommitteePrintCongressChamberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['committee-print'][':congress'][':chamber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['committee-print'][':congress'][':chamber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['committee-print'][':congress'][':chamber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteePrintCongressChamberQueryKey>
  >({
    queryKey: getCommitteePrintCongressChamberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['committee-print'][':congress'][':chamber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteePrintCongressChamber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['committee-print'][':congress'][':chamber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['committee-print'][':congress'][':chamber']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['committee-print'][':congress'][':chamber']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteePrintCongressChamberQueryKey>
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
      ...getCommitteePrintCongressChamberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommitteePrintCongressChamberJacketNumberQueryKey(
  args: InferRequestType<
    (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
  >,
) {
  return ['committee-print', '/committee-print/:congress/:chamber/:jacketNumber', args] as const
}

export function getCommitteePrintCongressChamberJacketNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteePrintCongressChamberJacketNumberQueryKey>
  >({
    queryKey: getCommitteePrintCongressChamberJacketNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['committee-print'][':congress'][':chamber'][':jacketNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteePrintCongressChamberJacketNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
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
                    (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteePrintCongressChamberJacketNumberQueryKey>
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
      ...getCommitteePrintCongressChamberJacketNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCommitteePrintCongressChamberJacketNumberTextQueryKey(
  args: InferRequestType<
    (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
  >,
) {
  return [
    'committee-print',
    '/committee-print/:congress/:chamber/:jacketNumber/text',
    args,
  ] as const
}

export function getCommitteePrintCongressChamberJacketNumberTextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteePrintCongressChamberJacketNumberTextQueryKey>
  >({
    queryKey: getCommitteePrintCongressChamberJacketNumberTextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['committee-print'][':congress'][':chamber'][':jacketNumber'].text.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteePrintCongressChamberJacketNumberText<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
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
                    (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteePrintCongressChamberJacketNumberTextQueryKey>
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
      ...getCommitteePrintCongressChamberJacketNumberTextQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeMeetingQueryKey(
  args: InferRequestType<(typeof client)['committee-meeting']['$get']>,
) {
  return ['committee-meeting', '/committee-meeting', args] as const
}

export function getCommitteeMeetingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-meeting']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['committee-meeting']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-meeting']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeMeetingQueryKey>
  >({
    queryKey: getCommitteeMeetingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['committee-meeting'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCommitteeMeeting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-meeting']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['committee-meeting']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['committee-meeting']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteeMeetingQueryKey>
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
    return { ...getCommitteeMeetingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCommitteeMeetingCongressQueryKey(
  args: InferRequestType<(typeof client)['committee-meeting'][':congress']['$get']>,
) {
  return ['committee-meeting', '/committee-meeting/:congress', args] as const
}

export function getCommitteeMeetingCongressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['committee-meeting'][':congress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['committee-meeting'][':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['committee-meeting'][':congress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeMeetingCongressQueryKey>
  >({
    queryKey: getCommitteeMeetingCongressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['committee-meeting'][':congress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeMeetingCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['committee-meeting'][':congress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['committee-meeting'][':congress']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['committee-meeting'][':congress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteeMeetingCongressQueryKey>
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
      ...getCommitteeMeetingCongressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeMeetingCongressChamberQueryKey(
  args: InferRequestType<(typeof client)['committee-meeting'][':congress'][':chamber']['$get']>,
) {
  return ['committee-meeting', '/committee-meeting/:congress/:chamber', args] as const
}

export function getCommitteeMeetingCongressChamberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['committee-meeting'][':congress'][':chamber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['committee-meeting'][':congress'][':chamber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['committee-meeting'][':congress'][':chamber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeMeetingCongressChamberQueryKey>
  >({
    queryKey: getCommitteeMeetingCongressChamberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['committee-meeting'][':congress'][':chamber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeMeetingCongressChamber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['committee-meeting'][':congress'][':chamber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['committee-meeting'][':congress'][':chamber']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['committee-meeting'][':congress'][':chamber']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteeMeetingCongressChamberQueryKey>
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
      ...getCommitteeMeetingCongressChamberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommitteeMeetingCongressChamberEventIdQueryKey(
  args: InferRequestType<
    (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
  >,
) {
  return ['committee-meeting', '/committee-meeting/:congress/:chamber/:eventId', args] as const
}

export function getCommitteeMeetingCongressChamberEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeMeetingCongressChamberEventIdQueryKey>
  >({
    queryKey: getCommitteeMeetingCongressChamberEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['committee-meeting'][':congress'][':chamber'][':eventId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommitteeMeetingCongressChamberEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
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
                    (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommitteeMeetingCongressChamberEventIdQueryKey>
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
      ...getCommitteeMeetingCongressChamberEventIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getHearingQueryKey(args: InferRequestType<typeof client.hearing.$get>) {
  return ['hearing', '/hearing', args] as const
}

export function getHearingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hearing.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hearing.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hearing.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHearingQueryKey>
  >({
    queryKey: getHearingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hearing.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHearing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hearing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.hearing.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hearing.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getHearingQueryKey>
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
    return { ...getHearingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHearingCongressQueryKey(
  args: InferRequestType<(typeof client.hearing)[':congress']['$get']>,
) {
  return ['hearing', '/hearing/:congress', args] as const
}

export function getHearingCongressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hearing)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hearing)[':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hearing)[':congress']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHearingCongressQueryKey>
  >({
    queryKey: getHearingCongressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hearing[':congress'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHearingCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hearing)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.hearing)[':congress']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hearing)[':congress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHearingCongressQueryKey>
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
    return { ...getHearingCongressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHearingCongressChamberQueryKey(
  args: InferRequestType<(typeof client.hearing)[':congress'][':chamber']['$get']>,
) {
  return ['hearing', '/hearing/:congress/:chamber', args] as const
}

export function getHearingCongressChamberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hearing)[':congress'][':chamber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hearing)[':congress'][':chamber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hearing)[':congress'][':chamber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHearingCongressChamberQueryKey>
  >({
    queryKey: getHearingCongressChamberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hearing[':congress'][':chamber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHearingCongressChamber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hearing)[':congress'][':chamber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.hearing)[':congress'][':chamber']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hearing)[':congress'][':chamber']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHearingCongressChamberQueryKey>
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
      ...getHearingCongressChamberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getHearingCongressChamberJacketNumberQueryKey(
  args: InferRequestType<(typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']>,
) {
  return ['hearing', '/hearing/:congress/:chamber/:jacketNumber', args] as const
}

export function getHearingCongressChamberJacketNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHearingCongressChamberJacketNumberQueryKey>
  >({
    queryKey: getHearingCongressChamberJacketNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hearing[':congress'][':chamber'][':jacketNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHearingCongressChamberJacketNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']
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
                    (typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHearingCongressChamberJacketNumberQueryKey>
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
      ...getHearingCongressChamberJacketNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCongressionalRecordQueryKey(
  args: InferRequestType<(typeof client)['congressional-record']['$get']>,
) {
  return ['congressional-record', '/congressional-record', args] as const
}

export function getCongressionalRecordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['congressional-record']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['congressional-record']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['congressional-record']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCongressionalRecordQueryKey>
  >({
    queryKey: getCongressionalRecordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['congressional-record'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCongressionalRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['congressional-record']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['congressional-record']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['congressional-record']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCongressionalRecordQueryKey>
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
    return { ...getCongressionalRecordQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDailyCongressionalRecordQueryKey(
  args: InferRequestType<(typeof client)['daily-congressional-record']['$get']>,
) {
  return ['daily-congressional-record', '/daily-congressional-record', args] as const
}

export function getDailyCongressionalRecordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['daily-congressional-record']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['daily-congressional-record']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['daily-congressional-record']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDailyCongressionalRecordQueryKey>
  >({
    queryKey: getDailyCongressionalRecordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['daily-congressional-record'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDailyCongressionalRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['daily-congressional-record']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['daily-congressional-record']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['daily-congressional-record']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDailyCongressionalRecordQueryKey>
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
      ...getDailyCongressionalRecordQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDailyCongressionalRecordVolumeNumberQueryKey(
  args: InferRequestType<(typeof client)['daily-congressional-record'][':volumeNumber']['$get']>,
) {
  return ['daily-congressional-record', '/daily-congressional-record/:volumeNumber', args] as const
}

export function getDailyCongressionalRecordVolumeNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['daily-congressional-record'][':volumeNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['daily-congressional-record'][':volumeNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['daily-congressional-record'][':volumeNumber']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDailyCongressionalRecordVolumeNumberQueryKey>
  >({
    queryKey: getDailyCongressionalRecordVolumeNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['daily-congressional-record'][':volumeNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDailyCongressionalRecordVolumeNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['daily-congressional-record'][':volumeNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['daily-congressional-record'][':volumeNumber']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['daily-congressional-record'][':volumeNumber']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDailyCongressionalRecordVolumeNumberQueryKey>
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
      ...getDailyCongressionalRecordVolumeNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDailyCongressionalRecordVolumeNumberIssueNumberQueryKey(
  args: InferRequestType<
    (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
  >,
) {
  return [
    'daily-congressional-record',
    '/daily-congressional-record/:volumeNumber/:issueNumber',
    args,
  ] as const
}

export function getDailyCongressionalRecordVolumeNumberIssueNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDailyCongressionalRecordVolumeNumberIssueNumberQueryKey>
  >({
    queryKey: getDailyCongressionalRecordVolumeNumberIssueNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['daily-congressional-record'][':volumeNumber'][':issueNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDailyCongressionalRecordVolumeNumberIssueNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
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
                    (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDailyCongressionalRecordVolumeNumberIssueNumberQueryKey>
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
      ...getDailyCongressionalRecordVolumeNumberIssueNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDailyCongressionalRecordVolumeNumberIssueNumberArticlesQueryKey(
  args: InferRequestType<
    (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
  >,
) {
  return [
    'daily-congressional-record',
    '/daily-congressional-record/:volumeNumber/:issueNumber/articles',
    args,
  ] as const
}

export function getDailyCongressionalRecordVolumeNumberIssueNumberArticlesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDailyCongressionalRecordVolumeNumberIssueNumberArticlesQueryKey>
  >({
    queryKey: getDailyCongressionalRecordVolumeNumberIssueNumberArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['daily-congressional-record'][':volumeNumber'][':issueNumber'].articles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDailyCongressionalRecordVolumeNumberIssueNumberArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
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
                    (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDailyCongressionalRecordVolumeNumberIssueNumberArticlesQueryKey>
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
      ...getDailyCongressionalRecordVolumeNumberIssueNumberArticlesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getBoundCongressionalRecordQueryKey(
  args: InferRequestType<(typeof client)['bound-congressional-record']['$get']>,
) {
  return ['bound-congressional-record', '/bound-congressional-record', args] as const
}

export function getBoundCongressionalRecordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['bound-congressional-record']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['bound-congressional-record']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['bound-congressional-record']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoundCongressionalRecordQueryKey>
  >({
    queryKey: getBoundCongressionalRecordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['bound-congressional-record'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBoundCongressionalRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['bound-congressional-record']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['bound-congressional-record']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['bound-congressional-record']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBoundCongressionalRecordQueryKey>
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
      ...getBoundCongressionalRecordQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBoundCongressionalRecordYearQueryKey(
  args: InferRequestType<(typeof client)['bound-congressional-record'][':year']['$get']>,
) {
  return ['bound-congressional-record', '/bound-congressional-record/:year', args] as const
}

export function getBoundCongressionalRecordYearQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['bound-congressional-record'][':year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['bound-congressional-record'][':year']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['bound-congressional-record'][':year']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoundCongressionalRecordYearQueryKey>
  >({
    queryKey: getBoundCongressionalRecordYearQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['bound-congressional-record'][':year'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBoundCongressionalRecordYear<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['bound-congressional-record'][':year']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['bound-congressional-record'][':year']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['bound-congressional-record'][':year']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBoundCongressionalRecordYearQueryKey>
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
      ...getBoundCongressionalRecordYearQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBoundCongressionalRecordYearMonthQueryKey(
  args: InferRequestType<(typeof client)['bound-congressional-record'][':year'][':month']['$get']>,
) {
  return ['bound-congressional-record', '/bound-congressional-record/:year/:month', args] as const
}

export function getBoundCongressionalRecordYearMonthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['bound-congressional-record'][':year'][':month']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['bound-congressional-record'][':year'][':month']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['bound-congressional-record'][':year'][':month']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoundCongressionalRecordYearMonthQueryKey>
  >({
    queryKey: getBoundCongressionalRecordYearMonthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['bound-congressional-record'][':year'][':month'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBoundCongressionalRecordYearMonth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['bound-congressional-record'][':year'][':month']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['bound-congressional-record'][':year'][':month']['$get']
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
                    (typeof client)['bound-congressional-record'][':year'][':month']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBoundCongressionalRecordYearMonthQueryKey>
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
      ...getBoundCongressionalRecordYearMonthQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBoundCongressionalRecordYearMonthDayQueryKey(
  args: InferRequestType<
    (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
  >,
) {
  return [
    'bound-congressional-record',
    '/bound-congressional-record/:year/:month/:day',
    args,
  ] as const
}

export function getBoundCongressionalRecordYearMonthDayQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoundCongressionalRecordYearMonthDayQueryKey>
  >({
    queryKey: getBoundCongressionalRecordYearMonthDayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['bound-congressional-record'][':year'][':month'][':day'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBoundCongressionalRecordYearMonthDay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
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
                    (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBoundCongressionalRecordYearMonthDayQueryKey>
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
      ...getBoundCongressionalRecordYearMonthDayQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getHouseCommunicationQueryKey(
  args: InferRequestType<(typeof client)['house-communication']['$get']>,
) {
  return ['house-communication', '/house-communication', args] as const
}

export function getHouseCommunicationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['house-communication']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['house-communication']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['house-communication']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseCommunicationQueryKey>
  >({
    queryKey: getHouseCommunicationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['house-communication'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHouseCommunication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['house-communication']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['house-communication']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['house-communication']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHouseCommunicationQueryKey>
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
    return { ...getHouseCommunicationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHouseCommunicationCongressQueryKey(
  args: InferRequestType<(typeof client)['house-communication'][':congress']['$get']>,
) {
  return ['house-communication', '/house-communication/:congress', args] as const
}

export function getHouseCommunicationCongressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['house-communication'][':congress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['house-communication'][':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['house-communication'][':congress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseCommunicationCongressQueryKey>
  >({
    queryKey: getHouseCommunicationCongressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['house-communication'][':congress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHouseCommunicationCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['house-communication'][':congress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['house-communication'][':congress']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['house-communication'][':congress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHouseCommunicationCongressQueryKey>
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
      ...getHouseCommunicationCongressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getHouseCommunicationCongressCommunicationTypeQueryKey(
  args: InferRequestType<
    (typeof client)['house-communication'][':congress'][':communicationType']['$get']
  >,
) {
  return ['house-communication', '/house-communication/:congress/:communicationType', args] as const
}

export function getHouseCommunicationCongressCommunicationTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['house-communication'][':congress'][':communicationType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['house-communication'][':congress'][':communicationType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['house-communication'][':congress'][':communicationType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseCommunicationCongressCommunicationTypeQueryKey>
  >({
    queryKey: getHouseCommunicationCongressCommunicationTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['house-communication'][':congress'][':communicationType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHouseCommunicationCongressCommunicationType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['house-communication'][':congress'][':communicationType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['house-communication'][':congress'][':communicationType']['$get']
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
                    (typeof client)['house-communication'][':congress'][':communicationType']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHouseCommunicationCongressCommunicationTypeQueryKey>
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
      ...getHouseCommunicationCongressCommunicationTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getHouseCommunicationCongressCommunicationTypeCommunicationNumberQueryKey(
  args: InferRequestType<
    (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
  >,
) {
  return [
    'house-communication',
    '/house-communication/:congress/:communicationType/:communicationNumber',
    args,
  ] as const
}

export function getHouseCommunicationCongressCommunicationTypeCommunicationNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseCommunicationCongressCommunicationTypeCommunicationNumberQueryKey>
  >({
    queryKey: getHouseCommunicationCongressCommunicationTypeCommunicationNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['house-communication'][':congress'][':communicationType'][
          ':communicationNumber'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHouseCommunicationCongressCommunicationTypeCommunicationNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
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
                    (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getHouseCommunicationCongressCommunicationTypeCommunicationNumberQueryKey
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
      ...getHouseCommunicationCongressCommunicationTypeCommunicationNumberQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getHouseRequirementQueryKey(
  args: InferRequestType<(typeof client)['house-requirement']['$get']>,
) {
  return ['house-requirement', '/house-requirement', args] as const
}

export function getHouseRequirementQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['house-requirement']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['house-requirement']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['house-requirement']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseRequirementQueryKey>
  >({
    queryKey: getHouseRequirementQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['house-requirement'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHouseRequirement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['house-requirement']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['house-requirement']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['house-requirement']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHouseRequirementQueryKey>
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
    return { ...getHouseRequirementQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHouseRequirementRequirementNumberQueryKey(
  args: InferRequestType<(typeof client)['house-requirement'][':requirementNumber']['$get']>,
) {
  return ['house-requirement', '/house-requirement/:requirementNumber', args] as const
}

export function getHouseRequirementRequirementNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['house-requirement'][':requirementNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['house-requirement'][':requirementNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['house-requirement'][':requirementNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseRequirementRequirementNumberQueryKey>
  >({
    queryKey: getHouseRequirementRequirementNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['house-requirement'][':requirementNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHouseRequirementRequirementNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['house-requirement'][':requirementNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['house-requirement'][':requirementNumber']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['house-requirement'][':requirementNumber']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHouseRequirementRequirementNumberQueryKey>
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
      ...getHouseRequirementRequirementNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getHouseRequirementRequirementNumberMatchingCommunicationsQueryKey(
  args: InferRequestType<
    (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
  >,
) {
  return [
    'house-requirement',
    '/house-requirement/:requirementNumber/matching-communications',
    args,
  ] as const
}

export function getHouseRequirementRequirementNumberMatchingCommunicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseRequirementRequirementNumberMatchingCommunicationsQueryKey>
  >({
    queryKey: getHouseRequirementRequirementNumberMatchingCommunicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['house-requirement'][':requirementNumber']['matching-communications'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHouseRequirementRequirementNumberMatchingCommunications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
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
                    (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHouseRequirementRequirementNumberMatchingCommunicationsQueryKey>
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
      ...getHouseRequirementRequirementNumberMatchingCommunicationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSenateCommunicationQueryKey(
  args: InferRequestType<(typeof client)['senate-communication']['$get']>,
) {
  return ['senate-communication', '/senate-communication', args] as const
}

export function getSenateCommunicationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['senate-communication']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['senate-communication']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['senate-communication']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSenateCommunicationQueryKey>
  >({
    queryKey: getSenateCommunicationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['senate-communication'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSenateCommunication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['senate-communication']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['senate-communication']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['senate-communication']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSenateCommunicationQueryKey>
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
    return { ...getSenateCommunicationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSenateCommunicationCongressQueryKey(
  args: InferRequestType<(typeof client)['senate-communication'][':congress']['$get']>,
) {
  return ['senate-communication', '/senate-communication/:congress', args] as const
}

export function getSenateCommunicationCongressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['senate-communication'][':congress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['senate-communication'][':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['senate-communication'][':congress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSenateCommunicationCongressQueryKey>
  >({
    queryKey: getSenateCommunicationCongressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['senate-communication'][':congress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSenateCommunicationCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['senate-communication'][':congress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['senate-communication'][':congress']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['senate-communication'][':congress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSenateCommunicationCongressQueryKey>
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
      ...getSenateCommunicationCongressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSenateCommunicationCongressCommunicationTypeQueryKey(
  args: InferRequestType<
    (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
  >,
) {
  return [
    'senate-communication',
    '/senate-communication/:congress/:communicationType',
    args,
  ] as const
}

export function getSenateCommunicationCongressCommunicationTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSenateCommunicationCongressCommunicationTypeQueryKey>
  >({
    queryKey: getSenateCommunicationCongressCommunicationTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['senate-communication'][':congress'][':communicationType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSenateCommunicationCongressCommunicationType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
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
                    (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSenateCommunicationCongressCommunicationTypeQueryKey>
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
      ...getSenateCommunicationCongressCommunicationTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSenateCommunicationCongressCommunicationTypeCommunicationNumberQueryKey(
  args: InferRequestType<
    (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
  >,
) {
  return [
    'senate-communication',
    '/senate-communication/:congress/:communicationType/:communicationNumber',
    args,
  ] as const
}

export function getSenateCommunicationCongressCommunicationTypeCommunicationNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSenateCommunicationCongressCommunicationTypeCommunicationNumberQueryKey>
  >({
    queryKey: getSenateCommunicationCongressCommunicationTypeCommunicationNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['senate-communication'][':congress'][':communicationType'][
          ':communicationNumber'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSenateCommunicationCongressCommunicationTypeCommunicationNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
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
                    (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getSenateCommunicationCongressCommunicationTypeCommunicationNumberQueryKey
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
      ...getSenateCommunicationCongressCommunicationTypeCommunicationNumberQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNominationQueryKey(args: InferRequestType<typeof client.nomination.$get>) {
  return ['nomination', '/nomination', args] as const
}

export function getNominationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nomination.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nomination.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nomination.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNominationQueryKey>
  >({
    queryKey: getNominationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nomination.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNomination<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nomination.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nomination.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nomination.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNominationQueryKey>
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
    return { ...getNominationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNominationCongressQueryKey(
  args: InferRequestType<(typeof client.nomination)[':congress']['$get']>,
) {
  return ['nomination', '/nomination/:congress', args] as const
}

export function getNominationCongressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nomination)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nomination)[':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.nomination)[':congress']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNominationCongressQueryKey>
  >({
    queryKey: getNominationCongressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nomination[':congress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNominationCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nomination)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nomination)[':congress']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nomination)[':congress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNominationCongressQueryKey>
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
    return { ...getNominationCongressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNominationCongressNominationNumberQueryKey(
  args: InferRequestType<(typeof client.nomination)[':congress'][':nominationNumber']['$get']>,
) {
  return ['nomination', '/nomination/:congress/:nominationNumber', args] as const
}

export function getNominationCongressNominationNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nomination)[':congress'][':nominationNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nomination)[':congress'][':nominationNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nomination)[':congress'][':nominationNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNominationCongressNominationNumberQueryKey>
  >({
    queryKey: getNominationCongressNominationNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nomination[':congress'][':nominationNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNominationCongressNominationNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nomination)[':congress'][':nominationNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.nomination)[':congress'][':nominationNumber']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNominationCongressNominationNumberQueryKey>
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
      ...getNominationCongressNominationNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNominationCongressNominationNumberOrdinalQueryKey(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
  >,
) {
  return ['nomination', '/nomination/:congress/:nominationNumber/:ordinal', args] as const
}

export function getNominationCongressNominationNumberOrdinalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNominationCongressNominationNumberOrdinalQueryKey>
  >({
    queryKey: getNominationCongressNominationNumberOrdinalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nomination[':congress'][':nominationNumber'][':ordinal'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNominationCongressNominationNumberOrdinal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
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
                    (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNominationCongressNominationNumberOrdinalQueryKey>
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
      ...getNominationCongressNominationNumberOrdinalQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNominationCongressNominationNumberActionsQueryKey(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
  >,
) {
  return ['nomination', '/nomination/:congress/:nominationNumber/actions', args] as const
}

export function getNominationCongressNominationNumberActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNominationCongressNominationNumberActionsQueryKey>
  >({
    queryKey: getNominationCongressNominationNumberActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nomination[':congress'][':nominationNumber'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNominationCongressNominationNumberActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
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
                    (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNominationCongressNominationNumberActionsQueryKey>
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
      ...getNominationCongressNominationNumberActionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNominationCongressNominationNumberCommitteesQueryKey(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
  >,
) {
  return ['nomination', '/nomination/:congress/:nominationNumber/committees', args] as const
}

export function getNominationCongressNominationNumberCommitteesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNominationCongressNominationNumberCommitteesQueryKey>
  >({
    queryKey: getNominationCongressNominationNumberCommitteesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nomination[':congress'][':nominationNumber'].committees.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNominationCongressNominationNumberCommittees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
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
                    (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNominationCongressNominationNumberCommitteesQueryKey>
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
      ...getNominationCongressNominationNumberCommitteesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNominationCongressNominationNumberHearingsQueryKey(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
  >,
) {
  return ['nomination', '/nomination/:congress/:nominationNumber/hearings', args] as const
}

export function getNominationCongressNominationNumberHearingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNominationCongressNominationNumberHearingsQueryKey>
  >({
    queryKey: getNominationCongressNominationNumberHearingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nomination[':congress'][':nominationNumber'].hearings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNominationCongressNominationNumberHearings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
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
                    (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNominationCongressNominationNumberHearingsQueryKey>
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
      ...getNominationCongressNominationNumberHearingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCrsreportQueryKey(args: InferRequestType<typeof client.crsreport.$get>) {
  return ['crsreport', '/crsreport', args] as const
}

export function getCrsreportQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsreport.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.crsreport.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsreport.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCrsreportQueryKey>
  >({
    queryKey: getCrsreportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crsreport.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCrsreport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsreport.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.crsreport.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsreport.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCrsreportQueryKey>
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
    return { ...getCrsreportQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCrsreportReportNumberQueryKey(
  args: InferRequestType<(typeof client.crsreport)[':reportNumber']['$get']>,
) {
  return ['crsreport', '/crsreport/:reportNumber', args] as const
}

export function getCrsreportReportNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crsreport)[':reportNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crsreport)[':reportNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crsreport)[':reportNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrsreportReportNumberQueryKey>
  >({
    queryKey: getCrsreportReportNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crsreport[':reportNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCrsreportReportNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crsreport)[':reportNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.crsreport)[':reportNumber']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crsreport)[':reportNumber']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCrsreportReportNumberQueryKey>
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
      ...getCrsreportReportNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTreatyQueryKey(args: InferRequestType<typeof client.treaty.$get>) {
  return ['treaty', '/treaty', args] as const
}

export function getTreatyQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.treaty.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.treaty.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.treaty.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTreatyQueryKey>
  >({
    queryKey: getTreatyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.treaty.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTreaty<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.treaty.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.treaty.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.treaty.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getTreatyQueryKey>
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
    return { ...getTreatyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTreatyCongressQueryKey(
  args: InferRequestType<(typeof client.treaty)[':congress']['$get']>,
) {
  return ['treaty', '/treaty/:congress', args] as const
}

export function getTreatyCongressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.treaty)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.treaty)[':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.treaty)[':congress']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTreatyCongressQueryKey>
  >({
    queryKey: getTreatyCongressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.treaty[':congress'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTreatyCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.treaty)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.treaty)[':congress']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.treaty)[':congress']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTreatyCongressQueryKey>
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
    return { ...getTreatyCongressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTreatyCongressTreatyNumberQueryKey(
  args: InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['$get']>,
) {
  return ['treaty', '/treaty/:congress/:treatyNumber', args] as const
}

export function getTreatyCongressTreatyNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTreatyCongressTreatyNumberQueryKey>
  >({
    queryKey: getTreatyCongressTreatyNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.treaty[':congress'][':treatyNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTreatyCongressTreatyNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTreatyCongressTreatyNumberQueryKey>
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
      ...getTreatyCongressTreatyNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTreatyCongressTreatyNumberTreatySuffixQueryKey(
  args: InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']
  >,
) {
  return ['treaty', '/treaty/:congress/:treatyNumber/:treatySuffix', args] as const
}

export function getTreatyCongressTreatyNumberTreatySuffixQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTreatyCongressTreatyNumberTreatySuffixQueryKey>
  >({
    queryKey: getTreatyCongressTreatyNumberTreatySuffixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.treaty[':congress'][':treatyNumber'][':treatySuffix'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTreatyCongressTreatyNumberTreatySuffix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']
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
                    (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTreatyCongressTreatyNumberTreatySuffixQueryKey>
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
      ...getTreatyCongressTreatyNumberTreatySuffixQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getTreatyCongressTreatyNumberActionsQueryKey(
  args: InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']>,
) {
  return ['treaty', '/treaty/:congress/:treatyNumber/actions', args] as const
}

export function getTreatyCongressTreatyNumberActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTreatyCongressTreatyNumberActionsQueryKey>
  >({
    queryKey: getTreatyCongressTreatyNumberActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.treaty[':congress'][':treatyNumber'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTreatyCongressTreatyNumberActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']
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
                    (typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTreatyCongressTreatyNumberActionsQueryKey>
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
      ...getTreatyCongressTreatyNumberActionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTreatyCongressTreatyNumberTreatySuffixActionsQueryKey(
  args: InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
  >,
) {
  return ['treaty', '/treaty/:congress/:treatyNumber/:treatySuffix/actions', args] as const
}

export function getTreatyCongressTreatyNumberTreatySuffixActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTreatyCongressTreatyNumberTreatySuffixActionsQueryKey>
  >({
    queryKey: getTreatyCongressTreatyNumberTreatySuffixActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.treaty[':congress'][':treatyNumber'][':treatySuffix'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTreatyCongressTreatyNumberTreatySuffixActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
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
                    (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTreatyCongressTreatyNumberTreatySuffixActionsQueryKey>
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
      ...getTreatyCongressTreatyNumberTreatySuffixActionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getTreatyCongressTreatyNumberCommitteesQueryKey(
  args: InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']
  >,
) {
  return ['treaty', '/treaty/:congress/:treatyNumber/committees', args] as const
}

export function getTreatyCongressTreatyNumberCommitteesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTreatyCongressTreatyNumberCommitteesQueryKey>
  >({
    queryKey: getTreatyCongressTreatyNumberCommitteesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.treaty[':congress'][':treatyNumber'].committees.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTreatyCongressTreatyNumberCommittees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']
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
                    (typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTreatyCongressTreatyNumberCommitteesQueryKey>
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
      ...getTreatyCongressTreatyNumberCommitteesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
