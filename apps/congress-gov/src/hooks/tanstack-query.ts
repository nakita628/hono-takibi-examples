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

export function useBill<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bill.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bill.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bill.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBillQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBillQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBill<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bill.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bill.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bill.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBillQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBillQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useBillCongress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bill)[':congress']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bill)[':congress']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.bill)[':congress']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillCongressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBillCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBillCongress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bill)[':congress']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bill)[':congress']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.bill)[':congress']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillCongressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBillCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useBillCongressBillType<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBillCongressBillTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBillCongressBillType<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBillCongressBillTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useBillCongressBillTypeBillNumber<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBillCongressBillTypeBillNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBillCongressBillTypeBillNumber<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBillCongressBillTypeBillNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useBillCongressBillTypeBillNumberActions<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBillCongressBillTypeBillNumberActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBillCongressBillTypeBillNumberActions<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBillCongressBillTypeBillNumberActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useBillCongressBillTypeBillNumberAmendments<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBillCongressBillTypeBillNumberAmendmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBillCongressBillTypeBillNumberAmendments<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBillCongressBillTypeBillNumberAmendmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useBillCongressBillTypeBillNumberCommittees<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBillCongressBillTypeBillNumberCommitteesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBillCongressBillTypeBillNumberCommittees<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBillCongressBillTypeBillNumberCommitteesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useBillCongressBillTypeBillNumberCosponsors<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBillCongressBillTypeBillNumberCosponsorsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBillCongressBillTypeBillNumberCosponsors<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBillCongressBillTypeBillNumberCosponsorsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useBillCongressBillTypeBillNumberRelatedbills<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBillCongressBillTypeBillNumberRelatedbillsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBillCongressBillTypeBillNumberRelatedbills<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBillCongressBillTypeBillNumberRelatedbillsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useBillCongressBillTypeBillNumberSubjects<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBillCongressBillTypeBillNumberSubjectsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBillCongressBillTypeBillNumberSubjects<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBillCongressBillTypeBillNumberSubjectsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useBillCongressBillTypeBillNumberSummaries<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBillCongressBillTypeBillNumberSummariesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBillCongressBillTypeBillNumberSummaries<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBillCongressBillTypeBillNumberSummariesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useBillCongressBillTypeBillNumberText<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBillCongressBillTypeBillNumberTextQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBillCongressBillTypeBillNumberText<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBillCongressBillTypeBillNumberTextQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useBillCongressBillTypeBillNumberTitles<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBillCongressBillTypeBillNumberTitlesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBillCongressBillTypeBillNumberTitles<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBillCongressBillTypeBillNumberTitlesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useLawCongress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.law)[':congress']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.law)[':congress']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.law)[':congress']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLawCongressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLawCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLawCongress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.law)[':congress']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.law)[':congress']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.law)[':congress']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLawCongressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLawCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useLawCongressLawType<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLawCongressLawTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLawCongressLawType<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLawCongressLawTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useLawCongressLawTypeLawNumber<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getLawCongressLawTypeLawNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLawCongressLawTypeLawNumber<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getLawCongressLawTypeLawNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAmendment<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.amendment.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.amendment.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.amendment.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAmendmentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAmendmentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAmendment<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.amendment.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.amendment.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.amendment.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAmendmentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAmendmentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useAmendmentCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.amendment)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.amendment)[':congress']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAmendmentCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAmendmentCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.amendment)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.amendment)[':congress']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAmendmentCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useAmendmentCongressAmendmentType<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getAmendmentCongressAmendmentTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAmendmentCongressAmendmentType<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAmendmentCongressAmendmentTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAmendmentCongressAmendmentTypeAmendmentNumber<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getAmendmentCongressAmendmentTypeAmendmentNumberQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAmendmentCongressAmendmentTypeAmendmentNumber<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAmendmentCongressAmendmentTypeAmendmentNumberQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAmendmentCongressAmendmentTypeAmendmentNumberActions<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getAmendmentCongressAmendmentTypeAmendmentNumberActionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAmendmentCongressAmendmentTypeAmendmentNumberActions<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAmendmentCongressAmendmentTypeAmendmentNumberActionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAmendmentCongressAmendmentTypeAmendmentNumberCosponsors<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAmendmentCongressAmendmentTypeAmendmentNumberCosponsors<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAmendmentCongressAmendmentTypeAmendmentNumberAmendments<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAmendmentCongressAmendmentTypeAmendmentNumberAmendments<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAmendmentCongressAmendmentTypeAmendmentNumberText<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getAmendmentCongressAmendmentTypeAmendmentNumberTextQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAmendmentCongressAmendmentTypeAmendmentNumberText<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAmendmentCongressAmendmentTypeAmendmentNumberTextQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSummaries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.summaries.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSummariesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSummariesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSummaries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.summaries.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSummariesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSummariesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSummariesCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.summaries)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.summaries)[':congress']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSummariesCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSummariesCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.summaries)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.summaries)[':congress']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSummariesCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSummariesCongressBillType<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getSummariesCongressBillTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSummariesCongressBillType<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSummariesCongressBillTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCongress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.congress.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCongressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCongress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.congress.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCongressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCongressCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.congress)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.congress)[':congress']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.congress)[':congress']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCongressCongressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCongressCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCongressCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.congress)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.congress)[':congress']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.congress)[':congress']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCongressCongressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCongressCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCongressCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.current.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.congress.current.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.current.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCongressCurrentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCongressCurrentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCongressCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.current.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.congress.current.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.current.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCongressCurrentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCongressCurrentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMember<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.member.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.member.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.member.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMemberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMemberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMember<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.member.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.member.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.member.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMemberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMemberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMemberBioguideId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':bioguideId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.member)[':bioguideId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':bioguideId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMemberBioguideIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMemberBioguideIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMemberBioguideId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':bioguideId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.member)[':bioguideId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':bioguideId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMemberBioguideIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMemberBioguideIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMemberBioguideIdSponsoredLegislation<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMemberBioguideIdSponsoredLegislationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMemberBioguideIdSponsoredLegislation<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMemberBioguideIdSponsoredLegislationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMemberBioguideIdCosponsoredLegislation<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMemberBioguideIdCosponsoredLegislationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMemberBioguideIdCosponsoredLegislation<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMemberBioguideIdCosponsoredLegislationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMemberCongressCongress<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMemberCongressCongressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMemberCongressCongress<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMemberCongressCongressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMemberStateCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':stateCode']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.member)[':stateCode']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':stateCode']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMemberStateCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMemberStateCodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMemberStateCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':stateCode']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.member)[':stateCode']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':stateCode']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMemberStateCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMemberStateCodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMemberStateCodeDistrict<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMemberStateCodeDistrictQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMemberStateCodeDistrict<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMemberStateCodeDistrictQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMemberCongressCongressStateCodeDistrict<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMemberCongressCongressStateCodeDistrictQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMemberCongressCongressStateCodeDistrict<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMemberCongressCongressStateCodeDistrictQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useHouseVote<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['house-vote']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHouseVoteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHouseVoteQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHouseVote<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['house-vote']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHouseVoteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHouseVoteQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useHouseVoteCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote'][':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['house-vote'][':congress']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHouseVoteCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHouseVoteCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote'][':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['house-vote'][':congress']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHouseVoteCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useHouseVoteCongressSession<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getHouseVoteCongressSessionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHouseVoteCongressSession<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getHouseVoteCongressSessionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useHouseVoteCongressSessionVoteNumber<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getHouseVoteCongressSessionVoteNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHouseVoteCongressSessionVoteNumber<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getHouseVoteCongressSessionVoteNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useHouseVoteCongressSessionVoteNumberMembers<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getHouseVoteCongressSessionVoteNumberMembersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHouseVoteCongressSessionVoteNumberMembers<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getHouseVoteCongressSessionVoteNumberMembersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommittee<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committee.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.committee.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committee.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCommitteeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCommitteeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCommittee<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committee.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.committee.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committee.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCommitteeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCommitteeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCommitteeChamber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':chamber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.committee)[':chamber']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':chamber']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommitteeChamberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCommitteeChamberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCommitteeChamber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':chamber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.committee)[':chamber']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':chamber']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommitteeChamberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCommitteeChamberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCommitteeCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.committee)[':congress']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCommitteeCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCommitteeCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.committee)[':congress']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCommitteeCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCommitteeCongressChamber<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCommitteeCongressChamberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeCongressChamber<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCommitteeCongressChamberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeChamberCommitteeCode<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCommitteeChamberCommitteeCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeChamberCommitteeCode<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCommitteeChamberCommitteeCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeCongressChamberCommitteeCode<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCommitteeCongressChamberCommitteeCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeCongressChamberCommitteeCode<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCommitteeCongressChamberCommitteeCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeChamberCommitteeCodeBills<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCommitteeChamberCommitteeCodeBillsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeChamberCommitteeCodeBills<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCommitteeChamberCommitteeCodeBillsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeChamberCommitteeCodeReports<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCommitteeChamberCommitteeCodeReportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeChamberCommitteeCodeReports<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCommitteeChamberCommitteeCodeReportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeChamberCommitteeCodeNominations<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCommitteeChamberCommitteeCodeNominationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeChamberCommitteeCodeNominations<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCommitteeChamberCommitteeCodeNominationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeChamberCommitteeCodeHouseCommunication<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCommitteeChamberCommitteeCodeHouseCommunicationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeChamberCommitteeCodeHouseCommunication<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCommitteeChamberCommitteeCodeHouseCommunicationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeChamberCommitteeCodeSenateCommunication<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCommitteeChamberCommitteeCodeSenateCommunicationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeChamberCommitteeCodeSenateCommunication<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCommitteeChamberCommitteeCodeSenateCommunicationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-report']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['committee-report']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-report']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommitteeReportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCommitteeReportQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCommitteeReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-report']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['committee-report']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-report']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommitteeReportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCommitteeReportQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCommitteeReportCongress<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCommitteeReportCongressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeReportCongress<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCommitteeReportCongressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeReportCongressReportType<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCommitteeReportCongressReportTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeReportCongressReportType<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCommitteeReportCongressReportTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeReportCongressReportTypeReportNumber<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCommitteeReportCongressReportTypeReportNumberQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeReportCongressReportTypeReportNumber<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCommitteeReportCongressReportTypeReportNumberQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeReportCongressReportTypeReportNumberText<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCommitteeReportCongressReportTypeReportNumberTextQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeReportCongressReportTypeReportNumberText<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCommitteeReportCongressReportTypeReportNumberTextQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteePrint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-print']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['committee-print']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-print']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommitteePrintQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCommitteePrintQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCommitteePrint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-print']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['committee-print']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-print']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommitteePrintQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCommitteePrintQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCommitteePrintCongress<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCommitteePrintCongressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteePrintCongress<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCommitteePrintCongressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteePrintCongressChamber<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCommitteePrintCongressChamberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteePrintCongressChamber<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCommitteePrintCongressChamberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteePrintCongressChamberJacketNumber<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCommitteePrintCongressChamberJacketNumberQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteePrintCongressChamberJacketNumber<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCommitteePrintCongressChamberJacketNumberQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteePrintCongressChamberJacketNumberText<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCommitteePrintCongressChamberJacketNumberTextQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteePrintCongressChamberJacketNumberText<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCommitteePrintCongressChamberJacketNumberTextQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeMeeting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-meeting']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['committee-meeting']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-meeting']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommitteeMeetingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCommitteeMeetingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCommitteeMeeting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-meeting']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['committee-meeting']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-meeting']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommitteeMeetingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCommitteeMeetingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCommitteeMeetingCongress<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCommitteeMeetingCongressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeMeetingCongress<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCommitteeMeetingCongressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeMeetingCongressChamber<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCommitteeMeetingCongressChamberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeMeetingCongressChamber<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCommitteeMeetingCongressChamberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCommitteeMeetingCongressChamberEventId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCommitteeMeetingCongressChamberEventIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommitteeMeetingCongressChamberEventId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCommitteeMeetingCongressChamberEventIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useHearing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hearing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hearing.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hearing.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHearingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHearingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHearing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hearing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hearing.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hearing.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHearingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHearingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useHearingCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hearing)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hearing)[':congress']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.hearing)[':congress']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHearingCongressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHearingCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHearingCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hearing)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hearing)[':congress']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.hearing)[':congress']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHearingCongressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHearingCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useHearingCongressChamber<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getHearingCongressChamberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHearingCongressChamber<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getHearingCongressChamberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useHearingCongressChamberJacketNumber<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getHearingCongressChamberJacketNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHearingCongressChamberJacketNumber<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getHearingCongressChamberJacketNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCongressionalRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['congressional-record']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['congressional-record']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCongressionalRecordQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCongressionalRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['congressional-record']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['congressional-record']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCongressionalRecordQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDailyCongressionalRecord<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getDailyCongressionalRecordQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDailyCongressionalRecord<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDailyCongressionalRecordQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useDailyCongressionalRecordVolumeNumber<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getDailyCongressionalRecordVolumeNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDailyCongressionalRecordVolumeNumber<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDailyCongressionalRecordVolumeNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useDailyCongressionalRecordVolumeNumberIssueNumber<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getDailyCongressionalRecordVolumeNumberIssueNumberQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDailyCongressionalRecordVolumeNumberIssueNumber<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDailyCongressionalRecordVolumeNumberIssueNumberQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useDailyCongressionalRecordVolumeNumberIssueNumberArticles<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getDailyCongressionalRecordVolumeNumberIssueNumberArticlesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDailyCongressionalRecordVolumeNumberIssueNumberArticles<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDailyCongressionalRecordVolumeNumberIssueNumberArticlesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useBoundCongressionalRecord<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBoundCongressionalRecordQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBoundCongressionalRecord<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBoundCongressionalRecordQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useBoundCongressionalRecordYear<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBoundCongressionalRecordYearQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBoundCongressionalRecordYear<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBoundCongressionalRecordYearQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useBoundCongressionalRecordYearMonth<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBoundCongressionalRecordYearMonthQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBoundCongressionalRecordYearMonth<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBoundCongressionalRecordYearMonthQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useBoundCongressionalRecordYearMonthDay<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBoundCongressionalRecordYearMonthDayQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBoundCongressionalRecordYearMonthDay<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBoundCongressionalRecordYearMonthDayQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useHouseCommunication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['house-communication']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['house-communication']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHouseCommunicationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHouseCommunication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['house-communication']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['house-communication']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHouseCommunicationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useHouseCommunicationCongress<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getHouseCommunicationCongressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHouseCommunicationCongress<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getHouseCommunicationCongressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useHouseCommunicationCongressCommunicationType<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getHouseCommunicationCongressCommunicationTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHouseCommunicationCongressCommunicationType<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getHouseCommunicationCongressCommunicationTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useHouseCommunicationCongressCommunicationTypeCommunicationNumber<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getHouseCommunicationCongressCommunicationTypeCommunicationNumberQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHouseCommunicationCongressCommunicationTypeCommunicationNumber<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getHouseCommunicationCongressCommunicationTypeCommunicationNumberQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useHouseRequirement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['house-requirement']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['house-requirement']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['house-requirement']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHouseRequirementQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHouseRequirementQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHouseRequirement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['house-requirement']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['house-requirement']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['house-requirement']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHouseRequirementQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHouseRequirementQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useHouseRequirementRequirementNumber<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getHouseRequirementRequirementNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHouseRequirementRequirementNumber<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getHouseRequirementRequirementNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useHouseRequirementRequirementNumberMatchingCommunications<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getHouseRequirementRequirementNumberMatchingCommunicationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHouseRequirementRequirementNumberMatchingCommunications<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getHouseRequirementRequirementNumberMatchingCommunicationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSenateCommunication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['senate-communication']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['senate-communication']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSenateCommunicationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSenateCommunication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['senate-communication']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['senate-communication']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSenateCommunicationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSenateCommunicationCongress<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getSenateCommunicationCongressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSenateCommunicationCongress<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSenateCommunicationCongressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSenateCommunicationCongressCommunicationType<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getSenateCommunicationCongressCommunicationTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSenateCommunicationCongressCommunicationType<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSenateCommunicationCongressCommunicationTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSenateCommunicationCongressCommunicationTypeCommunicationNumber<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getSenateCommunicationCongressCommunicationTypeCommunicationNumberQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSenateCommunicationCongressCommunicationTypeCommunicationNumber<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSenateCommunicationCongressCommunicationTypeCommunicationNumberQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNomination<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nomination.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nomination.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nomination.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNominationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNominationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNomination<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nomination.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nomination.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nomination.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNominationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNominationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNominationCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nomination)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nomination)[':congress']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNominationCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNominationCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nomination)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nomination)[':congress']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNominationCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNominationCongressNominationNumber<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNominationCongressNominationNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNominationCongressNominationNumber<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNominationCongressNominationNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNominationCongressNominationNumberOrdinal<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNominationCongressNominationNumberOrdinalQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNominationCongressNominationNumberOrdinal<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNominationCongressNominationNumberOrdinalQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNominationCongressNominationNumberActions<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNominationCongressNominationNumberActionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNominationCongressNominationNumberActions<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNominationCongressNominationNumberActionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNominationCongressNominationNumberCommittees<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNominationCongressNominationNumberCommitteesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNominationCongressNominationNumberCommittees<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNominationCongressNominationNumberCommitteesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNominationCongressNominationNumberHearings<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getNominationCongressNominationNumberHearingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNominationCongressNominationNumberHearings<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNominationCongressNominationNumberHearingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCrsreport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsreport.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.crsreport.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsreport.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCrsreportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCrsreportQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCrsreport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsreport.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.crsreport.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsreport.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCrsreportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCrsreportQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCrsreportReportNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crsreport)[':reportNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crsreport)[':reportNumber']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getCrsreportReportNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrsreportReportNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crsreport)[':reportNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crsreport)[':reportNumber']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCrsreportReportNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTreaty<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.treaty.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.treaty.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.treaty.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTreatyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTreatyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTreaty<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.treaty.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.treaty.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.treaty.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTreatyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTreatyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTreatyCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.treaty)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.treaty)[':congress']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.treaty)[':congress']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTreatyCongressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTreatyCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTreatyCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.treaty)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.treaty)[':congress']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.treaty)[':congress']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTreatyCongressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTreatyCongressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTreatyCongressTreatyNumber<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getTreatyCongressTreatyNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTreatyCongressTreatyNumber<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTreatyCongressTreatyNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTreatyCongressTreatyNumberTreatySuffix<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getTreatyCongressTreatyNumberTreatySuffixQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTreatyCongressTreatyNumberTreatySuffix<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTreatyCongressTreatyNumberTreatySuffixQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTreatyCongressTreatyNumberActions<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getTreatyCongressTreatyNumberActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTreatyCongressTreatyNumberActions<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTreatyCongressTreatyNumberActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTreatyCongressTreatyNumberTreatySuffixActions<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getTreatyCongressTreatyNumberTreatySuffixActionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTreatyCongressTreatyNumberTreatySuffixActions<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTreatyCongressTreatyNumberTreatySuffixActionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTreatyCongressTreatyNumberCommittees<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getTreatyCongressTreatyNumberCommitteesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTreatyCongressTreatyNumberCommittees<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTreatyCongressTreatyNumberCommitteesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
