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

export function getBillQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.bill.$get>>) {
  return ['bill', '/bill', toValue(args)] as const
}

export function getBillQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bill.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bill.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBill<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bill.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bill.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bill.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bill.$get>>>>>,
          ReturnType<typeof getBillQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bill.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBillQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bill.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillCongressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bill)[':congress']['$get']>>,
) {
  return ['bill', '/bill/:congress', toValue(args)] as const
}

export function getBillCongressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bill)[':congress']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillCongressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bill[':congress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBillCongress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bill)[':congress']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bill)[':congress']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bill)[':congress']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bill)[':congress']['$get']>>>
            >
          >,
          ReturnType<typeof getBillCongressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.bill)[':congress']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillCongressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bill[':congress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillCongressBillTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bill)[':congress'][':billType']['$get']>>,
) {
  return ['bill', '/bill/:congress/:billType', toValue(args)] as const
}

export function getBillCongressBillTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bill)[':congress'][':billType']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillCongressBillTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bill[':congress'][':billType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bill)[':congress'][':billType']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bill)[':congress'][':billType']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBillCongressBillTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.bill)[':congress'][':billType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillCongressBillTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bill[':congress'][':billType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillCongressBillTypeBillNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bill)[':congress'][':billType'][':billNumber']['$get']>
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber', toValue(args)] as const
}

export function getBillCongressBillTypeBillNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bill)[':congress'][':billType'][':billNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillCongressBillTypeBillNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bill[':congress'][':billType'][':billNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bill)[':congress'][':billType'][':billNumber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bill)[':congress'][':billType'][':billNumber']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBillCongressBillTypeBillNumberQueryKey>
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
          Awaited<ReturnType<(typeof client.bill)[':congress'][':billType'][':billNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeBillNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillCongressBillTypeBillNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bill[':congress'][':billType'][':billNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillCongressBillTypeBillNumberActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
    >
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/actions', toValue(args)] as const
}

export function getBillCongressBillTypeBillNumberActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillCongressBillTypeBillNumberActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bill[':congress'][':billType'][':billNumber'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBillCongressBillTypeBillNumberActionsQueryKey>
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
              (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeBillNumberActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillCongressBillTypeBillNumberActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bill[':congress'][':billType'][':billNumber'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillCongressBillTypeBillNumberAmendmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
    >
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/amendments', toValue(args)] as const
}

export function getBillCongressBillTypeBillNumberAmendmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillCongressBillTypeBillNumberAmendmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bill[':congress'][':billType'][':billNumber'].amendments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBillCongressBillTypeBillNumberAmendmentsQueryKey>
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
              (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeBillNumberAmendmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillCongressBillTypeBillNumberAmendmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bill[':congress'][':billType'][':billNumber'].amendments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillCongressBillTypeBillNumberCommitteesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
    >
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/committees', toValue(args)] as const
}

export function getBillCongressBillTypeBillNumberCommitteesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillCongressBillTypeBillNumberCommitteesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bill[':congress'][':billType'][':billNumber'].committees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBillCongressBillTypeBillNumberCommitteesQueryKey>
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
              (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeBillNumberCommitteesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillCongressBillTypeBillNumberCommitteesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bill[':congress'][':billType'][':billNumber'].committees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillCongressBillTypeBillNumberCosponsorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
    >
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/cosponsors', toValue(args)] as const
}

export function getBillCongressBillTypeBillNumberCosponsorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillCongressBillTypeBillNumberCosponsorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bill[':congress'][':billType'][':billNumber'].cosponsors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBillCongressBillTypeBillNumberCosponsorsQueryKey>
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
              (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeBillNumberCosponsorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillCongressBillTypeBillNumberCosponsorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bill[':congress'][':billType'][':billNumber'].cosponsors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillCongressBillTypeBillNumberRelatedbillsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
    >
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/relatedbills', toValue(args)] as const
}

export function getBillCongressBillTypeBillNumberRelatedbillsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillCongressBillTypeBillNumberRelatedbillsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bill[':congress'][':billType'][':billNumber'].relatedbills.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBillCongressBillTypeBillNumberRelatedbillsQueryKey>
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
              (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeBillNumberRelatedbillsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillCongressBillTypeBillNumberRelatedbillsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bill[':congress'][':billType'][':billNumber'].relatedbills.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillCongressBillTypeBillNumberSubjectsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
    >
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/subjects', toValue(args)] as const
}

export function getBillCongressBillTypeBillNumberSubjectsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillCongressBillTypeBillNumberSubjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bill[':congress'][':billType'][':billNumber'].subjects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBillCongressBillTypeBillNumberSubjectsQueryKey>
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
              (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeBillNumberSubjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillCongressBillTypeBillNumberSubjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bill[':congress'][':billType'][':billNumber'].subjects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillCongressBillTypeBillNumberSummariesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
    >
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/summaries', toValue(args)] as const
}

export function getBillCongressBillTypeBillNumberSummariesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillCongressBillTypeBillNumberSummariesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bill[':congress'][':billType'][':billNumber'].summaries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBillCongressBillTypeBillNumberSummariesQueryKey>
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
              (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeBillNumberSummariesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillCongressBillTypeBillNumberSummariesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bill[':congress'][':billType'][':billNumber'].summaries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillCongressBillTypeBillNumberTextQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']>
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/text', toValue(args)] as const
}

export function getBillCongressBillTypeBillNumberTextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillCongressBillTypeBillNumberTextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bill[':congress'][':billType'][':billNumber'].text.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']>
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBillCongressBillTypeBillNumberTextQueryKey>
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
              (typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeBillNumberTextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillCongressBillTypeBillNumberTextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bill[':congress'][':billType'][':billNumber'].text.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillCongressBillTypeBillNumberTitlesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
    >
  >,
) {
  return ['bill', '/bill/:congress/:billType/:billNumber/titles', toValue(args)] as const
}

export function getBillCongressBillTypeBillNumberTitlesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillCongressBillTypeBillNumberTitlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bill[':congress'][':billType'][':billNumber'].titles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
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
                    (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBillCongressBillTypeBillNumberTitlesQueryKey>
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
              (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillCongressBillTypeBillNumberTitlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillCongressBillTypeBillNumberTitlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bill[':congress'][':billType'][':billNumber'].titles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLawCongressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.law)[':congress']['$get']>>,
) {
  return ['law', '/law/:congress', toValue(args)] as const
}

export function getLawCongressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.law)[':congress']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLawCongressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.law[':congress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLawCongress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.law)[':congress']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.law)[':congress']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.law)[':congress']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.law)[':congress']['$get']>>>
            >
          >,
          ReturnType<typeof getLawCongressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.law)[':congress']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLawCongressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLawCongressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.law[':congress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLawCongressLawTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.law)[':congress'][':lawType']['$get']>>,
) {
  return ['law', '/law/:congress/:lawType', toValue(args)] as const
}

export function getLawCongressLawTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.law)[':congress'][':lawType']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLawCongressLawTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.law[':congress'][':lawType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.law)[':congress'][':lawType']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.law)[':congress'][':lawType']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLawCongressLawTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.law)[':congress'][':lawType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLawCongressLawTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLawCongressLawTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.law[':congress'][':lawType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLawCongressLawTypeLawNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.law)[':congress'][':lawType'][':lawNumber']['$get']>
  >,
) {
  return ['law', '/law/:congress/:lawType/:lawNumber', toValue(args)] as const
}

export function getLawCongressLawTypeLawNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.law)[':congress'][':lawType'][':lawNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLawCongressLawTypeLawNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.law[':congress'][':lawType'][':lawNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.law)[':congress'][':lawType'][':lawNumber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.law)[':congress'][':lawType'][':lawNumber']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLawCongressLawTypeLawNumberQueryKey>
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
          Awaited<ReturnType<(typeof client.law)[':congress'][':lawType'][':lawNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLawCongressLawTypeLawNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLawCongressLawTypeLawNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.law[':congress'][':lawType'][':lawNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAmendmentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.amendment.$get>>,
) {
  return ['amendment', '/amendment', toValue(args)] as const
}

export function getAmendmentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.amendment.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAmendmentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.amendment.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAmendment<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.amendment.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.amendment.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.amendment.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.amendment.$get>>>>
          >,
          ReturnType<typeof getAmendmentQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.amendment.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAmendmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAmendmentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.amendment.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAmendmentCongressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.amendment)[':congress']['$get']>>,
) {
  return ['amendment', '/amendment/:congress', toValue(args)] as const
}

export function getAmendmentCongressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.amendment)[':congress']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAmendmentCongressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.amendment[':congress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAmendmentCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.amendment)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.amendment)[':congress']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.amendment)[':congress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAmendmentCongressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.amendment)[':congress']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmendmentCongressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAmendmentCongressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.amendment[':congress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAmendmentCongressAmendmentTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.amendment)[':congress'][':amendmentType']['$get']>
  >,
) {
  return ['amendment', '/amendment/:congress/:amendmentType', toValue(args)] as const
}

export function getAmendmentCongressAmendmentTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.amendment)[':congress'][':amendmentType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAmendmentCongressAmendmentTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.amendment[':congress'][':amendmentType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.amendment)[':congress'][':amendmentType']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.amendment)[':congress'][':amendmentType']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAmendmentCongressAmendmentTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.amendment)[':congress'][':amendmentType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmendmentCongressAmendmentTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAmendmentCongressAmendmentTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.amendment[':congress'][':amendmentType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAmendmentCongressAmendmentTypeAmendmentNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
    >
  >,
) {
  return [
    'amendment',
    '/amendment/:congress/:amendmentType/:amendmentNumber',
    toValue(args),
  ] as const
}

export function getAmendmentCongressAmendmentTypeAmendmentNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAmendmentCongressAmendmentTypeAmendmentNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.amendment[':congress'][':amendmentType'][':amendmentNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
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
                    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
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
                    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAmendmentCongressAmendmentTypeAmendmentNumberQueryKey>
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
              (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmendmentCongressAmendmentTypeAmendmentNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAmendmentCongressAmendmentTypeAmendmentNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.amendment[':congress'][':amendmentType'][':amendmentNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAmendmentCongressAmendmentTypeAmendmentNumberActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
    >
  >,
) {
  return [
    'amendment',
    '/amendment/:congress/:amendmentType/:amendmentNumber/actions',
    toValue(args),
  ] as const
}

export function getAmendmentCongressAmendmentTypeAmendmentNumberActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAmendmentCongressAmendmentTypeAmendmentNumberActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.amendment[':congress'][':amendmentType'][':amendmentNumber'].actions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
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
                    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
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
                    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAmendmentCongressAmendmentTypeAmendmentNumberActionsQueryKey>
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
              (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmendmentCongressAmendmentTypeAmendmentNumberActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAmendmentCongressAmendmentTypeAmendmentNumberActionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.amendment[':congress'][':amendmentType'][':amendmentNumber'].actions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
    >
  >,
) {
  return [
    'amendment',
    '/amendment/:congress/:amendmentType/:amendmentNumber/cosponsors',
    toValue(args),
  ] as const
}

export function getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.amendment[':congress'][':amendmentType'][':amendmentNumber'].cosponsors.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
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
                    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
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
                    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsQueryKey>
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
              (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.amendment[':congress'][':amendmentType'][':amendmentNumber'].cosponsors.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
    >
  >,
) {
  return [
    'amendment',
    '/amendment/:congress/:amendmentType/:amendmentNumber/amendments',
    toValue(args),
  ] as const
}

export function getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.amendment[':congress'][':amendmentType'][':amendmentNumber'].amendments.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
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
                    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
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
                    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsQueryKey>
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
              (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.amendment[':congress'][':amendmentType'][':amendmentNumber'].amendments.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAmendmentCongressAmendmentTypeAmendmentNumberTextQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
    >
  >,
) {
  return [
    'amendment',
    '/amendment/:congress/:amendmentType/:amendmentNumber/text',
    toValue(args),
  ] as const
}

export function getAmendmentCongressAmendmentTypeAmendmentNumberTextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAmendmentCongressAmendmentTypeAmendmentNumberTextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.amendment[':congress'][':amendmentType'][':amendmentNumber'].text.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
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
                    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
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
                    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAmendmentCongressAmendmentTypeAmendmentNumberTextQueryKey>
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
              (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAmendmentCongressAmendmentTypeAmendmentNumberTextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAmendmentCongressAmendmentTypeAmendmentNumberTextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.amendment[':congress'][':amendmentType'][':amendmentNumber'].text.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSummariesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.summaries.$get>>,
) {
  return ['summaries', '/summaries', toValue(args)] as const
}

export function getSummariesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.summaries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSummariesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.summaries.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSummaries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.summaries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.$get>>>>
          >,
          ReturnType<typeof getSummariesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSummariesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSummariesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.summaries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSummariesCongressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.summaries)[':congress']['$get']>>,
) {
  return ['summaries', '/summaries/:congress', toValue(args)] as const
}

export function getSummariesCongressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.summaries)[':congress']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSummariesCongressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.summaries[':congress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSummariesCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.summaries)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.summaries)[':congress']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.summaries)[':congress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSummariesCongressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.summaries)[':congress']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSummariesCongressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSummariesCongressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.summaries[':congress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSummariesCongressBillTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.summaries)[':congress'][':billType']['$get']>
  >,
) {
  return ['summaries', '/summaries/:congress/:billType', toValue(args)] as const
}

export function getSummariesCongressBillTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.summaries)[':congress'][':billType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSummariesCongressBillTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.summaries[':congress'][':billType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.summaries)[':congress'][':billType']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.summaries)[':congress'][':billType']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSummariesCongressBillTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.summaries)[':congress'][':billType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSummariesCongressBillTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSummariesCongressBillTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.summaries[':congress'][':billType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCongressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.congress.$get>>,
) {
  return ['congress', '/congress', toValue(args)] as const
}

export function getCongressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.congress.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCongressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.congress.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCongress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.congress.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.$get>>>>
          >,
          ReturnType<typeof getCongressQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCongressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCongressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.congress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCongressCongressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.congress)[':congress']['$get']>>,
) {
  return ['congress', '/congress/:congress', toValue(args)] as const
}

export function getCongressCongressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.congress)[':congress']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCongressCongressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.congress[':congress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCongressCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.congress)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.congress)[':congress']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.congress)[':congress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.congress)[':congress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCongressCongressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.congress)[':congress']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCongressCongressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCongressCongressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.congress[':congress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCongressCurrentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.congress.current.$get>>,
) {
  return ['congress', '/congress/current', toValue(args)] as const
}

export function getCongressCurrentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.congress.current.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCongressCurrentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.congress.current.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCongressCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.current.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.congress.current.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.congress.current.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.congress.current.$get>>>
            >
          >,
          ReturnType<typeof getCongressCurrentQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.congress.current.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCongressCurrentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCongressCurrentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.congress.current.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMemberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.member.$get>>,
) {
  return ['member', '/member', toValue(args)] as const
}

export function getMemberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.member.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMemberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.member.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMember<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.member.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.member.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.member.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.member.$get>>>>>,
          ReturnType<typeof getMemberQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.member.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMemberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMemberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.member.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMemberBioguideIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.member)[':bioguideId']['$get']>>,
) {
  return ['member', '/member/:bioguideId', toValue(args)] as const
}

export function getMemberBioguideIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.member)[':bioguideId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMemberBioguideIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.member[':bioguideId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMemberBioguideId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':bioguideId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.member)[':bioguideId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.member)[':bioguideId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.member)[':bioguideId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMemberBioguideIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':bioguideId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMemberBioguideIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMemberBioguideIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.member[':bioguideId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMemberBioguideIdSponsoredLegislationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.member)[':bioguideId']['sponsored-legislation']['$get']>
  >,
) {
  return ['member', '/member/:bioguideId/sponsored-legislation', toValue(args)] as const
}

export function getMemberBioguideIdSponsoredLegislationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.member)[':bioguideId']['sponsored-legislation']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMemberBioguideIdSponsoredLegislationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.member[':bioguideId']['sponsored-legislation'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.member)[':bioguideId']['sponsored-legislation']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.member)[':bioguideId']['sponsored-legislation']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMemberBioguideIdSponsoredLegislationQueryKey>
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
            ReturnType<(typeof client.member)[':bioguideId']['sponsored-legislation']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMemberBioguideIdSponsoredLegislationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMemberBioguideIdSponsoredLegislationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.member[':bioguideId']['sponsored-legislation'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMemberBioguideIdCosponsoredLegislationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']>
  >,
) {
  return ['member', '/member/:bioguideId/cosponsored-legislation', toValue(args)] as const
}

export function getMemberBioguideIdCosponsoredLegislationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMemberBioguideIdCosponsoredLegislationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.member[':bioguideId']['cosponsored-legislation'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']>
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
                    (typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']
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
                    (typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMemberBioguideIdCosponsoredLegislationQueryKey>
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
            ReturnType<(typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMemberBioguideIdCosponsoredLegislationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMemberBioguideIdCosponsoredLegislationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.member[':bioguideId']['cosponsored-legislation'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMemberCongressCongressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.member.congress)[':congress']['$get']>>,
) {
  return ['member', '/member/congress/:congress', toValue(args)] as const
}

export function getMemberCongressCongressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.member.congress)[':congress']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMemberCongressCongressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.member.congress[':congress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.member.congress)[':congress']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.member.congress)[':congress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMemberCongressCongressQueryKey>
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
          Awaited<ReturnType<(typeof client.member.congress)[':congress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMemberCongressCongressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMemberCongressCongressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.member.congress[':congress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMemberStateCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.member)[':stateCode']['$get']>>,
) {
  return ['member', '/member/:stateCode', toValue(args)] as const
}

export function getMemberStateCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.member)[':stateCode']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMemberStateCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.member[':stateCode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMemberStateCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':stateCode']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.member)[':stateCode']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.member)[':stateCode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.member)[':stateCode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMemberStateCodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.member)[':stateCode']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMemberStateCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMemberStateCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.member[':stateCode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMemberStateCodeDistrictQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.member)[':stateCode'][':district']['$get']>
  >,
) {
  return ['member', '/member/:stateCode/:district', toValue(args)] as const
}

export function getMemberStateCodeDistrictQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.member)[':stateCode'][':district']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMemberStateCodeDistrictQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.member[':stateCode'][':district'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.member)[':stateCode'][':district']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.member)[':stateCode'][':district']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMemberStateCodeDistrictQueryKey>
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
          Awaited<ReturnType<(typeof client.member)[':stateCode'][':district']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMemberStateCodeDistrictQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMemberStateCodeDistrictQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.member[':stateCode'][':district'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMemberCongressCongressStateCodeDistrictQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
    >
  >,
) {
  return ['member', '/member/congress/:congress/:stateCode/:district', toValue(args)] as const
}

export function getMemberCongressCongressStateCodeDistrictQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMemberCongressCongressStateCodeDistrictQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.member.congress[':congress'][':stateCode'][':district'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
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
                    (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
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
                    (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMemberCongressCongressStateCodeDistrictQueryKey>
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
              (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMemberCongressCongressStateCodeDistrictQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMemberCongressCongressStateCodeDistrictQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.member.congress[':congress'][':stateCode'][':district'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHouseVoteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['house-vote']['$get']>>,
) {
  return ['house-vote', '/house-vote', toValue(args)] as const
}

export function getHouseVoteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['house-vote']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHouseVoteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['house-vote'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHouseVote<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['house-vote']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote']['$get']>>>
            >
          >,
          ReturnType<typeof getHouseVoteQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHouseVoteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHouseVoteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['house-vote'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHouseVoteCongressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['house-vote'][':congress']['$get']>>,
) {
  return ['house-vote', '/house-vote/:congress', toValue(args)] as const
}

export function getHouseVoteCongressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['house-vote'][':congress']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHouseVoteCongressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['house-vote'][':congress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHouseVoteCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['house-vote'][':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['house-vote'][':congress']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['house-vote'][':congress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHouseVoteCongressQueryKey>
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
          Awaited<ReturnType<(typeof client)['house-vote'][':congress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseVoteCongressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHouseVoteCongressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['house-vote'][':congress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHouseVoteCongressSessionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['house-vote'][':congress'][':session']['$get']>
  >,
) {
  return ['house-vote', '/house-vote/:congress/:session', toValue(args)] as const
}

export function getHouseVoteCongressSessionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['house-vote'][':congress'][':session']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHouseVoteCongressSessionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['house-vote'][':congress'][':session'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['house-vote'][':congress'][':session']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['house-vote'][':congress'][':session']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHouseVoteCongressSessionQueryKey>
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
          Awaited<ReturnType<(typeof client)['house-vote'][':congress'][':session']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseVoteCongressSessionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHouseVoteCongressSessionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['house-vote'][':congress'][':session'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHouseVoteCongressSessionVoteNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']>
  >,
) {
  return ['house-vote', '/house-vote/:congress/:session/:voteNumber', toValue(args)] as const
}

export function getHouseVoteCongressSessionVoteNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHouseVoteCongressSessionVoteNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['house-vote'][':congress'][':session'][':voteNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']>
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
                    (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']
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
                    (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getHouseVoteCongressSessionVoteNumberQueryKey>
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
              (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseVoteCongressSessionVoteNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHouseVoteCongressSessionVoteNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['house-vote'][':congress'][':session'][':voteNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHouseVoteCongressSessionVoteNumberMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
    >
  >,
) {
  return [
    'house-vote',
    '/house-vote/:congress/:session/:voteNumber/members',
    toValue(args),
  ] as const
}

export function getHouseVoteCongressSessionVoteNumberMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHouseVoteCongressSessionVoteNumberMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['house-vote'][':congress'][':session'][':voteNumber'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
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
                    (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
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
                    (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getHouseVoteCongressSessionVoteNumberMembersQueryKey>
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
              (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseVoteCongressSessionVoteNumberMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHouseVoteCongressSessionVoteNumberMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['house-vote'][':congress'][':session'][':voteNumber'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.committee.$get>>,
) {
  return ['committee', '/committee', toValue(args)] as const
}

export function getCommitteeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.committee.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committee.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCommittee<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committee.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.committee.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committee.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committee.$get>>>>
          >,
          ReturnType<typeof getCommitteeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committee.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCommitteeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committee.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeChamberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.committee)[':chamber']['$get']>>,
) {
  return ['committee', '/committee/:chamber', toValue(args)] as const
}

export function getCommitteeChamberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.committee)[':chamber']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeChamberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committee[':chamber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommitteeChamber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':chamber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.committee)[':chamber']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.committee)[':chamber']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.committee)[':chamber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCommitteeChamberQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':chamber']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeChamberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeChamberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committee[':chamber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeCongressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.committee)[':congress']['$get']>>,
) {
  return ['committee', '/committee/:congress', toValue(args)] as const
}

export function getCommitteeCongressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.committee)[':congress']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeCongressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committee[':congress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommitteeCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.committee)[':congress']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.committee)[':congress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCommitteeCongressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.committee)[':congress']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCongressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeCongressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committee[':congress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeCongressChamberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':congress'][':chamber']['$get']>
  >,
) {
  return ['committee', '/committee/:congress/:chamber', toValue(args)] as const
}

export function getCommitteeCongressChamberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':congress'][':chamber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeCongressChamberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committee[':congress'][':chamber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':congress'][':chamber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.committee)[':congress'][':chamber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCommitteeCongressChamberQueryKey>
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
          Awaited<ReturnType<(typeof client.committee)[':congress'][':chamber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCongressChamberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeCongressChamberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committee[':congress'][':chamber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeChamberCommitteeCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['$get']>
  >,
) {
  return ['committee', '/committee/:chamber/:committeeCode', toValue(args)] as const
}

export function getCommitteeChamberCommitteeCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeChamberCommitteeCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committee[':chamber'][':committeeCode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCommitteeChamberCommitteeCodeQueryKey>
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
          Awaited<ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeChamberCommitteeCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeChamberCommitteeCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committee[':chamber'][':committeeCode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeCongressChamberCommitteeCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']>
  >,
) {
  return ['committee', '/committee/:congress/:chamber/:committeeCode', toValue(args)] as const
}

export function getCommitteeCongressChamberCommitteeCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeCongressChamberCommitteeCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committee[':congress'][':chamber'][':committeeCode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']>
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
                    (typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']
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
                    (typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommitteeCongressChamberCommitteeCodeQueryKey>
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
            ReturnType<(typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeCongressChamberCommitteeCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeCongressChamberCommitteeCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committee[':congress'][':chamber'][':committeeCode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeChamberCommitteeCodeBillsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']>
  >,
) {
  return ['committee', '/committee/:chamber/:committeeCode/bills', toValue(args)] as const
}

export function getCommitteeChamberCommitteeCodeBillsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeChamberCommitteeCodeBillsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committee[':chamber'][':committeeCode'].bills.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']>
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
                    (typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']
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
                    (typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommitteeChamberCommitteeCodeBillsQueryKey>
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
            ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeChamberCommitteeCodeBillsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeChamberCommitteeCodeBillsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committee[':chamber'][':committeeCode'].bills.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeChamberCommitteeCodeReportsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']>
  >,
) {
  return ['committee', '/committee/:chamber/:committeeCode/reports', toValue(args)] as const
}

export function getCommitteeChamberCommitteeCodeReportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeChamberCommitteeCodeReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committee[':chamber'][':committeeCode'].reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']>
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
                    (typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']
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
                    (typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommitteeChamberCommitteeCodeReportsQueryKey>
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
            ReturnType<(typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeChamberCommitteeCodeReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeChamberCommitteeCodeReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committee[':chamber'][':committeeCode'].reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeChamberCommitteeCodeNominationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']>
  >,
) {
  return ['committee', '/committee/:chamber/:committeeCode/nominations', toValue(args)] as const
}

export function getCommitteeChamberCommitteeCodeNominationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeChamberCommitteeCodeNominationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committee[':chamber'][':committeeCode'].nominations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']>
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
                    (typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']
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
                    (typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommitteeChamberCommitteeCodeNominationsQueryKey>
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
              (typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeChamberCommitteeCodeNominationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeChamberCommitteeCodeNominationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committee[':chamber'][':committeeCode'].nominations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeChamberCommitteeCodeHouseCommunicationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
    >
  >,
) {
  return [
    'committee',
    '/committee/:chamber/:committeeCode/house-communication',
    toValue(args),
  ] as const
}

export function getCommitteeChamberCommitteeCodeHouseCommunicationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeChamberCommitteeCodeHouseCommunicationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committee[':chamber'][':committeeCode']['house-communication'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
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
                    (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
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
                    (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommitteeChamberCommitteeCodeHouseCommunicationQueryKey>
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
              (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeChamberCommitteeCodeHouseCommunicationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeChamberCommitteeCodeHouseCommunicationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committee[':chamber'][':committeeCode']['house-communication'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeChamberCommitteeCodeSenateCommunicationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
    >
  >,
) {
  return [
    'committee',
    '/committee/:chamber/:committeeCode/senate-communication',
    toValue(args),
  ] as const
}

export function getCommitteeChamberCommitteeCodeSenateCommunicationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeChamberCommitteeCodeSenateCommunicationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committee[':chamber'][':committeeCode']['senate-communication'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
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
                    (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
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
                    (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommitteeChamberCommitteeCodeSenateCommunicationQueryKey>
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
              (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeChamberCommitteeCodeSenateCommunicationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeChamberCommitteeCodeSenateCommunicationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committee[':chamber'][':committeeCode']['senate-communication'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeReportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['committee-report']['$get']>>,
) {
  return ['committee-report', '/committee-report', toValue(args)] as const
}

export function getCommitteeReportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['committee-report']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeReportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['committee-report'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommitteeReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-report']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['committee-report']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-report']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-report']['$get']>>>
            >
          >,
          ReturnType<typeof getCommitteeReportQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-report']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeReportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeReportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['committee-report'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeReportCongressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['committee-report'][':congress']['$get']>
  >,
) {
  return ['committee-report', '/committee-report/:congress', toValue(args)] as const
}

export function getCommitteeReportCongressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['committee-report'][':congress']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeReportCongressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['committee-report'][':congress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['committee-report'][':congress']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['committee-report'][':congress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCommitteeReportCongressQueryKey>
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
          Awaited<ReturnType<(typeof client)['committee-report'][':congress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeReportCongressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeReportCongressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['committee-report'][':congress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeReportCongressReportTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['committee-report'][':congress'][':reportType']['$get']>
  >,
) {
  return ['committee-report', '/committee-report/:congress/:reportType', toValue(args)] as const
}

export function getCommitteeReportCongressReportTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['committee-report'][':congress'][':reportType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeReportCongressReportTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['committee-report'][':congress'][':reportType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['committee-report'][':congress'][':reportType']['$get']>
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
                    (typeof client)['committee-report'][':congress'][':reportType']['$get']
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
                    (typeof client)['committee-report'][':congress'][':reportType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommitteeReportCongressReportTypeQueryKey>
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
            ReturnType<(typeof client)['committee-report'][':congress'][':reportType']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeReportCongressReportTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeReportCongressReportTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['committee-report'][':congress'][':reportType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeReportCongressReportTypeReportNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
    >
  >,
) {
  return [
    'committee-report',
    '/committee-report/:congress/:reportType/:reportNumber',
    toValue(args),
  ] as const
}

export function getCommitteeReportCongressReportTypeReportNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeReportCongressReportTypeReportNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['committee-report'][':congress'][':reportType'][':reportNumber'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
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
                    (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
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
                    (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommitteeReportCongressReportTypeReportNumberQueryKey>
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
              (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeReportCongressReportTypeReportNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeReportCongressReportTypeReportNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['committee-report'][':congress'][':reportType'][':reportNumber'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeReportCongressReportTypeReportNumberTextQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
    >
  >,
) {
  return [
    'committee-report',
    '/committee-report/:congress/:reportType/:reportNumber/text',
    toValue(args),
  ] as const
}

export function getCommitteeReportCongressReportTypeReportNumberTextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeReportCongressReportTypeReportNumberTextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['committee-report'][':congress'][':reportType'][':reportNumber'].text.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
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
                    (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
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
                    (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommitteeReportCongressReportTypeReportNumberTextQueryKey>
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
              (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeReportCongressReportTypeReportNumberTextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeReportCongressReportTypeReportNumberTextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['committee-report'][':congress'][':reportType'][':reportNumber'].text.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteePrintQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['committee-print']['$get']>>,
) {
  return ['committee-print', '/committee-print', toValue(args)] as const
}

export function getCommitteePrintQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['committee-print']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteePrintQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['committee-print'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommitteePrint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-print']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['committee-print']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-print']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-print']['$get']>>>
            >
          >,
          ReturnType<typeof getCommitteePrintQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-print']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteePrintQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteePrintQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['committee-print'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteePrintCongressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['committee-print'][':congress']['$get']>>,
) {
  return ['committee-print', '/committee-print/:congress', toValue(args)] as const
}

export function getCommitteePrintCongressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['committee-print'][':congress']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteePrintCongressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['committee-print'][':congress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['committee-print'][':congress']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['committee-print'][':congress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCommitteePrintCongressQueryKey>
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
          Awaited<ReturnType<(typeof client)['committee-print'][':congress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteePrintCongressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteePrintCongressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['committee-print'][':congress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteePrintCongressChamberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['committee-print'][':congress'][':chamber']['$get']>
  >,
) {
  return ['committee-print', '/committee-print/:congress/:chamber', toValue(args)] as const
}

export function getCommitteePrintCongressChamberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['committee-print'][':congress'][':chamber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteePrintCongressChamberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['committee-print'][':congress'][':chamber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['committee-print'][':congress'][':chamber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['committee-print'][':congress'][':chamber']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCommitteePrintCongressChamberQueryKey>
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
          Awaited<ReturnType<(typeof client)['committee-print'][':congress'][':chamber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteePrintCongressChamberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteePrintCongressChamberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['committee-print'][':congress'][':chamber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteePrintCongressChamberJacketNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
    >
  >,
) {
  return [
    'committee-print',
    '/committee-print/:congress/:chamber/:jacketNumber',
    toValue(args),
  ] as const
}

export function getCommitteePrintCongressChamberJacketNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteePrintCongressChamberJacketNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['committee-print'][':congress'][':chamber'][':jacketNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
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
                    (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
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
                    (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommitteePrintCongressChamberJacketNumberQueryKey>
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
              (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteePrintCongressChamberJacketNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteePrintCongressChamberJacketNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['committee-print'][':congress'][':chamber'][':jacketNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteePrintCongressChamberJacketNumberTextQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
    >
  >,
) {
  return [
    'committee-print',
    '/committee-print/:congress/:chamber/:jacketNumber/text',
    toValue(args),
  ] as const
}

export function getCommitteePrintCongressChamberJacketNumberTextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteePrintCongressChamberJacketNumberTextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['committee-print'][':congress'][':chamber'][':jacketNumber'].text.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
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
                    (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
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
                    (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommitteePrintCongressChamberJacketNumberTextQueryKey>
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
              (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteePrintCongressChamberJacketNumberTextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteePrintCongressChamberJacketNumberTextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['committee-print'][':congress'][':chamber'][':jacketNumber'].text.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeMeetingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['committee-meeting']['$get']>>,
) {
  return ['committee-meeting', '/committee-meeting', toValue(args)] as const
}

export function getCommitteeMeetingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['committee-meeting']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeMeetingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['committee-meeting'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommitteeMeeting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-meeting']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['committee-meeting']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['committee-meeting']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['committee-meeting']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCommitteeMeetingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['committee-meeting']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeMeetingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeMeetingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['committee-meeting'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeMeetingCongressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['committee-meeting'][':congress']['$get']>
  >,
) {
  return ['committee-meeting', '/committee-meeting/:congress', toValue(args)] as const
}

export function getCommitteeMeetingCongressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['committee-meeting'][':congress']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeMeetingCongressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['committee-meeting'][':congress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['committee-meeting'][':congress']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['committee-meeting'][':congress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCommitteeMeetingCongressQueryKey>
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
          Awaited<ReturnType<(typeof client)['committee-meeting'][':congress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeMeetingCongressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeMeetingCongressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['committee-meeting'][':congress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeMeetingCongressChamberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['committee-meeting'][':congress'][':chamber']['$get']>
  >,
) {
  return ['committee-meeting', '/committee-meeting/:congress/:chamber', toValue(args)] as const
}

export function getCommitteeMeetingCongressChamberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['committee-meeting'][':congress'][':chamber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeMeetingCongressChamberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['committee-meeting'][':congress'][':chamber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['committee-meeting'][':congress'][':chamber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['committee-meeting'][':congress'][':chamber']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCommitteeMeetingCongressChamberQueryKey>
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
          Awaited<ReturnType<(typeof client)['committee-meeting'][':congress'][':chamber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeMeetingCongressChamberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeMeetingCongressChamberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['committee-meeting'][':congress'][':chamber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteeMeetingCongressChamberEventIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
    >
  >,
) {
  return [
    'committee-meeting',
    '/committee-meeting/:congress/:chamber/:eventId',
    toValue(args),
  ] as const
}

export function getCommitteeMeetingCongressChamberEventIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteeMeetingCongressChamberEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['committee-meeting'][':congress'][':chamber'][':eventId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
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
                    (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
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
                    (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommitteeMeetingCongressChamberEventIdQueryKey>
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
              (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteeMeetingCongressChamberEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteeMeetingCongressChamberEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['committee-meeting'][':congress'][':chamber'][':eventId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHearingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hearing.$get>>,
) {
  return ['hearing', '/hearing', toValue(args)] as const
}

export function getHearingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hearing.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHearingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hearing.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHearing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hearing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hearing.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hearing.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hearing.$get>>>>
          >,
          ReturnType<typeof getHearingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hearing.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHearingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHearingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hearing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHearingCongressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hearing)[':congress']['$get']>>,
) {
  return ['hearing', '/hearing/:congress', toValue(args)] as const
}

export function getHearingCongressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hearing)[':congress']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHearingCongressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hearing[':congress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHearingCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hearing)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hearing)[':congress']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hearing)[':congress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hearing)[':congress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHearingCongressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.hearing)[':congress']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHearingCongressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHearingCongressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hearing[':congress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHearingCongressChamberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hearing)[':congress'][':chamber']['$get']>
  >,
) {
  return ['hearing', '/hearing/:congress/:chamber', toValue(args)] as const
}

export function getHearingCongressChamberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hearing)[':congress'][':chamber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHearingCongressChamberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hearing[':congress'][':chamber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hearing)[':congress'][':chamber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hearing)[':congress'][':chamber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHearingCongressChamberQueryKey>
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
          Awaited<ReturnType<(typeof client.hearing)[':congress'][':chamber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHearingCongressChamberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHearingCongressChamberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hearing[':congress'][':chamber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHearingCongressChamberJacketNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']>
  >,
) {
  return ['hearing', '/hearing/:congress/:chamber/:jacketNumber', toValue(args)] as const
}

export function getHearingCongressChamberJacketNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHearingCongressChamberJacketNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hearing[':congress'][':chamber'][':jacketNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']>
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
                    (typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']
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
                    (typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getHearingCongressChamberJacketNumberQueryKey>
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
            ReturnType<(typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHearingCongressChamberJacketNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHearingCongressChamberJacketNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hearing[':congress'][':chamber'][':jacketNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCongressionalRecordQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['congressional-record']['$get']>>,
) {
  return ['congressional-record', '/congressional-record', toValue(args)] as const
}

export function getCongressionalRecordQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['congressional-record']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCongressionalRecordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['congressional-record'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCongressionalRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['congressional-record']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['congressional-record']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['congressional-record']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCongressionalRecordQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['congressional-record']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCongressionalRecordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCongressionalRecordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['congressional-record'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDailyCongressionalRecordQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['daily-congressional-record']['$get']>>,
) {
  return ['daily-congressional-record', '/daily-congressional-record', toValue(args)] as const
}

export function getDailyCongressionalRecordQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['daily-congressional-record']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDailyCongressionalRecordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['daily-congressional-record'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['daily-congressional-record']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['daily-congressional-record']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDailyCongressionalRecordQueryKey>
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
          Awaited<ReturnType<(typeof client)['daily-congressional-record']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDailyCongressionalRecordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDailyCongressionalRecordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['daily-congressional-record'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDailyCongressionalRecordVolumeNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['daily-congressional-record'][':volumeNumber']['$get']>
  >,
) {
  return [
    'daily-congressional-record',
    '/daily-congressional-record/:volumeNumber',
    toValue(args),
  ] as const
}

export function getDailyCongressionalRecordVolumeNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['daily-congressional-record'][':volumeNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDailyCongressionalRecordVolumeNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['daily-congressional-record'][':volumeNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['daily-congressional-record'][':volumeNumber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['daily-congressional-record'][':volumeNumber']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDailyCongressionalRecordVolumeNumberQueryKey>
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
            ReturnType<(typeof client)['daily-congressional-record'][':volumeNumber']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDailyCongressionalRecordVolumeNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDailyCongressionalRecordVolumeNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['daily-congressional-record'][':volumeNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDailyCongressionalRecordVolumeNumberIssueNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
    >
  >,
) {
  return [
    'daily-congressional-record',
    '/daily-congressional-record/:volumeNumber/:issueNumber',
    toValue(args),
  ] as const
}

export function getDailyCongressionalRecordVolumeNumberIssueNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDailyCongressionalRecordVolumeNumberIssueNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['daily-congressional-record'][':volumeNumber'][':issueNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
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
                    (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
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
                    (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDailyCongressionalRecordVolumeNumberIssueNumberQueryKey>
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
              (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDailyCongressionalRecordVolumeNumberIssueNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDailyCongressionalRecordVolumeNumberIssueNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['daily-congressional-record'][':volumeNumber'][':issueNumber'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDailyCongressionalRecordVolumeNumberIssueNumberArticlesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
    >
  >,
) {
  return [
    'daily-congressional-record',
    '/daily-congressional-record/:volumeNumber/:issueNumber/articles',
    toValue(args),
  ] as const
}

export function getDailyCongressionalRecordVolumeNumberIssueNumberArticlesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDailyCongressionalRecordVolumeNumberIssueNumberArticlesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['daily-congressional-record'][':volumeNumber'][':issueNumber'].articles.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
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
                    (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
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
                    (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDailyCongressionalRecordVolumeNumberIssueNumberArticlesQueryKey>
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
              (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDailyCongressionalRecordVolumeNumberIssueNumberArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDailyCongressionalRecordVolumeNumberIssueNumberArticlesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['daily-congressional-record'][':volumeNumber'][':issueNumber'].articles.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getBoundCongressionalRecordQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bound-congressional-record']['$get']>>,
) {
  return ['bound-congressional-record', '/bound-congressional-record', toValue(args)] as const
}

export function getBoundCongressionalRecordQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bound-congressional-record']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoundCongressionalRecordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['bound-congressional-record'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bound-congressional-record']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['bound-congressional-record']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoundCongressionalRecordQueryKey>
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
          Awaited<ReturnType<(typeof client)['bound-congressional-record']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoundCongressionalRecordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoundCongressionalRecordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['bound-congressional-record'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoundCongressionalRecordYearQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['bound-congressional-record'][':year']['$get']>
  >,
) {
  return ['bound-congressional-record', '/bound-congressional-record/:year', toValue(args)] as const
}

export function getBoundCongressionalRecordYearQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['bound-congressional-record'][':year']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoundCongressionalRecordYearQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['bound-congressional-record'][':year'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['bound-congressional-record'][':year']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['bound-congressional-record'][':year']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoundCongressionalRecordYearQueryKey>
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
          Awaited<ReturnType<(typeof client)['bound-congressional-record'][':year']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoundCongressionalRecordYearQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoundCongressionalRecordYearQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['bound-congressional-record'][':year'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoundCongressionalRecordYearMonthQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['bound-congressional-record'][':year'][':month']['$get']>
  >,
) {
  return [
    'bound-congressional-record',
    '/bound-congressional-record/:year/:month',
    toValue(args),
  ] as const
}

export function getBoundCongressionalRecordYearMonthQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['bound-congressional-record'][':year'][':month']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoundCongressionalRecordYearMonthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['bound-congressional-record'][':year'][':month'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['bound-congressional-record'][':year'][':month']['$get']>
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
                    (typeof client)['bound-congressional-record'][':year'][':month']['$get']
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
                    (typeof client)['bound-congressional-record'][':year'][':month']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBoundCongressionalRecordYearMonthQueryKey>
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
            ReturnType<(typeof client)['bound-congressional-record'][':year'][':month']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoundCongressionalRecordYearMonthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoundCongressionalRecordYearMonthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['bound-congressional-record'][':year'][':month'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoundCongressionalRecordYearMonthDayQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
    >
  >,
) {
  return [
    'bound-congressional-record',
    '/bound-congressional-record/:year/:month/:day',
    toValue(args),
  ] as const
}

export function getBoundCongressionalRecordYearMonthDayQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoundCongressionalRecordYearMonthDayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['bound-congressional-record'][':year'][':month'][':day'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
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
                    (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
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
                    (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBoundCongressionalRecordYearMonthDayQueryKey>
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
              (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoundCongressionalRecordYearMonthDayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoundCongressionalRecordYearMonthDayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['bound-congressional-record'][':year'][':month'][':day'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHouseCommunicationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['house-communication']['$get']>>,
) {
  return ['house-communication', '/house-communication', toValue(args)] as const
}

export function getHouseCommunicationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['house-communication']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHouseCommunicationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['house-communication'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHouseCommunication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['house-communication']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['house-communication']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['house-communication']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHouseCommunicationQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['house-communication']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseCommunicationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHouseCommunicationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['house-communication'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHouseCommunicationCongressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['house-communication'][':congress']['$get']>
  >,
) {
  return ['house-communication', '/house-communication/:congress', toValue(args)] as const
}

export function getHouseCommunicationCongressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['house-communication'][':congress']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHouseCommunicationCongressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['house-communication'][':congress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['house-communication'][':congress']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['house-communication'][':congress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHouseCommunicationCongressQueryKey>
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
          Awaited<ReturnType<(typeof client)['house-communication'][':congress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseCommunicationCongressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHouseCommunicationCongressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['house-communication'][':congress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHouseCommunicationCongressCommunicationTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['house-communication'][':congress'][':communicationType']['$get']
    >
  >,
) {
  return [
    'house-communication',
    '/house-communication/:congress/:communicationType',
    toValue(args),
  ] as const
}

export function getHouseCommunicationCongressCommunicationTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['house-communication'][':congress'][':communicationType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHouseCommunicationCongressCommunicationTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['house-communication'][':congress'][':communicationType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['house-communication'][':congress'][':communicationType']['$get']
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
                    (typeof client)['house-communication'][':congress'][':communicationType']['$get']
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
                    (typeof client)['house-communication'][':congress'][':communicationType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getHouseCommunicationCongressCommunicationTypeQueryKey>
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
              (typeof client)['house-communication'][':congress'][':communicationType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseCommunicationCongressCommunicationTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHouseCommunicationCongressCommunicationTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['house-communication'][':congress'][':communicationType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHouseCommunicationCongressCommunicationTypeCommunicationNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
    >
  >,
) {
  return [
    'house-communication',
    '/house-communication/:congress/:communicationType/:communicationNumber',
    toValue(args),
  ] as const
}

export function getHouseCommunicationCongressCommunicationTypeCommunicationNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getHouseCommunicationCongressCommunicationTypeCommunicationNumberQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['house-communication'][':congress'][':communicationType'][
          ':communicationNumber'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
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
                    (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
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
                    (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getHouseCommunicationCongressCommunicationTypeCommunicationNumberQueryKey
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
              (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseCommunicationCongressCommunicationTypeCommunicationNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getHouseCommunicationCongressCommunicationTypeCommunicationNumberQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['house-communication'][':congress'][':communicationType'][
            ':communicationNumber'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getHouseRequirementQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['house-requirement']['$get']>>,
) {
  return ['house-requirement', '/house-requirement', toValue(args)] as const
}

export function getHouseRequirementQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['house-requirement']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHouseRequirementQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['house-requirement'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHouseRequirement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['house-requirement']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['house-requirement']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['house-requirement']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['house-requirement']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHouseRequirementQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['house-requirement']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseRequirementQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHouseRequirementQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['house-requirement'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHouseRequirementRequirementNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['house-requirement'][':requirementNumber']['$get']>
  >,
) {
  return ['house-requirement', '/house-requirement/:requirementNumber', toValue(args)] as const
}

export function getHouseRequirementRequirementNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['house-requirement'][':requirementNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHouseRequirementRequirementNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['house-requirement'][':requirementNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['house-requirement'][':requirementNumber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['house-requirement'][':requirementNumber']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getHouseRequirementRequirementNumberQueryKey>
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
          Awaited<ReturnType<(typeof client)['house-requirement'][':requirementNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseRequirementRequirementNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHouseRequirementRequirementNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['house-requirement'][':requirementNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHouseRequirementRequirementNumberMatchingCommunicationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
    >
  >,
) {
  return [
    'house-requirement',
    '/house-requirement/:requirementNumber/matching-communications',
    toValue(args),
  ] as const
}

export function getHouseRequirementRequirementNumberMatchingCommunicationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getHouseRequirementRequirementNumberMatchingCommunicationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['house-requirement'][':requirementNumber']['matching-communications'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
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
                    (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
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
                    (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getHouseRequirementRequirementNumberMatchingCommunicationsQueryKey>
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
              (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHouseRequirementRequirementNumberMatchingCommunicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getHouseRequirementRequirementNumberMatchingCommunicationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['house-requirement'][':requirementNumber']['matching-communications'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSenateCommunicationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['senate-communication']['$get']>>,
) {
  return ['senate-communication', '/senate-communication', toValue(args)] as const
}

export function getSenateCommunicationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['senate-communication']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSenateCommunicationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['senate-communication'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSenateCommunication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['senate-communication']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['senate-communication']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['senate-communication']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSenateCommunicationQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['senate-communication']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSenateCommunicationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSenateCommunicationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['senate-communication'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSenateCommunicationCongressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['senate-communication'][':congress']['$get']>
  >,
) {
  return ['senate-communication', '/senate-communication/:congress', toValue(args)] as const
}

export function getSenateCommunicationCongressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['senate-communication'][':congress']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSenateCommunicationCongressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['senate-communication'][':congress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['senate-communication'][':congress']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['senate-communication'][':congress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSenateCommunicationCongressQueryKey>
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
          Awaited<ReturnType<(typeof client)['senate-communication'][':congress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSenateCommunicationCongressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSenateCommunicationCongressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['senate-communication'][':congress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSenateCommunicationCongressCommunicationTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
    >
  >,
) {
  return [
    'senate-communication',
    '/senate-communication/:congress/:communicationType',
    toValue(args),
  ] as const
}

export function getSenateCommunicationCongressCommunicationTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSenateCommunicationCongressCommunicationTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['senate-communication'][':congress'][':communicationType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
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
                    (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
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
                    (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSenateCommunicationCongressCommunicationTypeQueryKey>
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
              (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSenateCommunicationCongressCommunicationTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSenateCommunicationCongressCommunicationTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['senate-communication'][':congress'][':communicationType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSenateCommunicationCongressCommunicationTypeCommunicationNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
    >
  >,
) {
  return [
    'senate-communication',
    '/senate-communication/:congress/:communicationType/:communicationNumber',
    toValue(args),
  ] as const
}

export function getSenateCommunicationCongressCommunicationTypeCommunicationNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSenateCommunicationCongressCommunicationTypeCommunicationNumberQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['senate-communication'][':congress'][':communicationType'][
          ':communicationNumber'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
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
                    (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
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
                    (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getSenateCommunicationCongressCommunicationTypeCommunicationNumberQueryKey
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
              (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSenateCommunicationCongressCommunicationTypeCommunicationNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSenateCommunicationCongressCommunicationTypeCommunicationNumberQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['senate-communication'][':congress'][':communicationType'][
            ':communicationNumber'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getNominationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nomination.$get>>,
) {
  return ['nomination', '/nomination', toValue(args)] as const
}

export function getNominationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nomination.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNominationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nomination.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNomination<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nomination.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nomination.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nomination.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nomination.$get>>>>
          >,
          ReturnType<typeof getNominationQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nomination.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNominationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNominationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nomination.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNominationCongressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nomination)[':congress']['$get']>>,
) {
  return ['nomination', '/nomination/:congress', toValue(args)] as const
}

export function getNominationCongressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nomination)[':congress']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNominationCongressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nomination[':congress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNominationCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nomination)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nomination)[':congress']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nomination)[':congress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNominationCongressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.nomination)[':congress']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNominationCongressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNominationCongressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nomination[':congress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNominationCongressNominationNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nomination)[':congress'][':nominationNumber']['$get']>
  >,
) {
  return ['nomination', '/nomination/:congress/:nominationNumber', toValue(args)] as const
}

export function getNominationCongressNominationNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nomination)[':congress'][':nominationNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNominationCongressNominationNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nomination[':congress'][':nominationNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nomination)[':congress'][':nominationNumber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.nomination)[':congress'][':nominationNumber']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNominationCongressNominationNumberQueryKey>
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
          Awaited<ReturnType<(typeof client.nomination)[':congress'][':nominationNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNominationCongressNominationNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNominationCongressNominationNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nomination[':congress'][':nominationNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNominationCongressNominationNumberOrdinalQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
    >
  >,
) {
  return ['nomination', '/nomination/:congress/:nominationNumber/:ordinal', toValue(args)] as const
}

export function getNominationCongressNominationNumberOrdinalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNominationCongressNominationNumberOrdinalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nomination[':congress'][':nominationNumber'][':ordinal'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
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
                    (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
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
                    (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNominationCongressNominationNumberOrdinalQueryKey>
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
              (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNominationCongressNominationNumberOrdinalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNominationCongressNominationNumberOrdinalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nomination[':congress'][':nominationNumber'][':ordinal'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNominationCongressNominationNumberActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
    >
  >,
) {
  return ['nomination', '/nomination/:congress/:nominationNumber/actions', toValue(args)] as const
}

export function getNominationCongressNominationNumberActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNominationCongressNominationNumberActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nomination[':congress'][':nominationNumber'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
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
                    (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
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
                    (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNominationCongressNominationNumberActionsQueryKey>
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
              (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNominationCongressNominationNumberActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNominationCongressNominationNumberActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nomination[':congress'][':nominationNumber'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNominationCongressNominationNumberCommitteesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
    >
  >,
) {
  return [
    'nomination',
    '/nomination/:congress/:nominationNumber/committees',
    toValue(args),
  ] as const
}

export function getNominationCongressNominationNumberCommitteesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNominationCongressNominationNumberCommitteesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nomination[':congress'][':nominationNumber'].committees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
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
                    (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
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
                    (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNominationCongressNominationNumberCommitteesQueryKey>
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
              (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNominationCongressNominationNumberCommitteesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNominationCongressNominationNumberCommitteesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nomination[':congress'][':nominationNumber'].committees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNominationCongressNominationNumberHearingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
    >
  >,
) {
  return ['nomination', '/nomination/:congress/:nominationNumber/hearings', toValue(args)] as const
}

export function getNominationCongressNominationNumberHearingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNominationCongressNominationNumberHearingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nomination[':congress'][':nominationNumber'].hearings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
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
                    (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
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
                    (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNominationCongressNominationNumberHearingsQueryKey>
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
              (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNominationCongressNominationNumberHearingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNominationCongressNominationNumberHearingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nomination[':congress'][':nominationNumber'].hearings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrsreportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crsreport.$get>>,
) {
  return ['crsreport', '/crsreport', toValue(args)] as const
}

export function getCrsreportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crsreport.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrsreportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crsreport.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCrsreport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsreport.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crsreport.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsreport.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsreport.$get>>>>
          >,
          ReturnType<typeof getCrsreportQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsreport.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCrsreportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrsreportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crsreport.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrsreportReportNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crsreport)[':reportNumber']['$get']>>,
) {
  return ['crsreport', '/crsreport/:reportNumber', toValue(args)] as const
}

export function getCrsreportReportNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crsreport)[':reportNumber']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrsreportReportNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crsreport[':reportNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrsreportReportNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crsreport)[':reportNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crsreport)[':reportNumber']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crsreport)[':reportNumber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCrsreportReportNumberQueryKey>
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
          Awaited<ReturnType<(typeof client.crsreport)[':reportNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrsreportReportNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrsreportReportNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crsreport[':reportNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTreatyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.treaty.$get>>,
) {
  return ['treaty', '/treaty', toValue(args)] as const
}

export function getTreatyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.treaty.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTreatyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.treaty.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTreaty<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.treaty.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.treaty.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.treaty.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.treaty.$get>>>>>,
          ReturnType<typeof getTreatyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.treaty.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTreatyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTreatyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.treaty.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTreatyCongressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.treaty)[':congress']['$get']>>,
) {
  return ['treaty', '/treaty/:congress', toValue(args)] as const
}

export function getTreatyCongressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.treaty)[':congress']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTreatyCongressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.treaty[':congress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTreatyCongress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.treaty)[':congress']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.treaty)[':congress']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.treaty)[':congress']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.treaty)[':congress']['$get']>>>
            >
          >,
          ReturnType<typeof getTreatyCongressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.treaty)[':congress']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTreatyCongressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTreatyCongressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.treaty[':congress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTreatyCongressTreatyNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['$get']>
  >,
) {
  return ['treaty', '/treaty/:congress/:treatyNumber', toValue(args)] as const
}

export function getTreatyCongressTreatyNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTreatyCongressTreatyNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.treaty[':congress'][':treatyNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTreatyCongressTreatyNumberQueryKey>
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
          Awaited<ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTreatyCongressTreatyNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTreatyCongressTreatyNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.treaty[':congress'][':treatyNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTreatyCongressTreatyNumberTreatySuffixQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']>
  >,
) {
  return ['treaty', '/treaty/:congress/:treatyNumber/:treatySuffix', toValue(args)] as const
}

export function getTreatyCongressTreatyNumberTreatySuffixQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTreatyCongressTreatyNumberTreatySuffixQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.treaty[':congress'][':treatyNumber'][':treatySuffix'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']>
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
                    (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']
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
                    (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTreatyCongressTreatyNumberTreatySuffixQueryKey>
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
              (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTreatyCongressTreatyNumberTreatySuffixQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTreatyCongressTreatyNumberTreatySuffixQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.treaty[':congress'][':treatyNumber'][':treatySuffix'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTreatyCongressTreatyNumberActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']>
  >,
) {
  return ['treaty', '/treaty/:congress/:treatyNumber/actions', toValue(args)] as const
}

export function getTreatyCongressTreatyNumberActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTreatyCongressTreatyNumberActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.treaty[':congress'][':treatyNumber'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']>
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
                    (typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']
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
                    (typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTreatyCongressTreatyNumberActionsQueryKey>
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
            ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTreatyCongressTreatyNumberActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTreatyCongressTreatyNumberActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.treaty[':congress'][':treatyNumber'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTreatyCongressTreatyNumberTreatySuffixActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
    >
  >,
) {
  return ['treaty', '/treaty/:congress/:treatyNumber/:treatySuffix/actions', toValue(args)] as const
}

export function getTreatyCongressTreatyNumberTreatySuffixActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTreatyCongressTreatyNumberTreatySuffixActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.treaty[':congress'][':treatyNumber'][':treatySuffix'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
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
                    (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
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
                    (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTreatyCongressTreatyNumberTreatySuffixActionsQueryKey>
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
              (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTreatyCongressTreatyNumberTreatySuffixActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTreatyCongressTreatyNumberTreatySuffixActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.treaty[':congress'][':treatyNumber'][':treatySuffix'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTreatyCongressTreatyNumberCommitteesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']>
  >,
) {
  return ['treaty', '/treaty/:congress/:treatyNumber/committees', toValue(args)] as const
}

export function getTreatyCongressTreatyNumberCommitteesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTreatyCongressTreatyNumberCommitteesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.treaty[':congress'][':treatyNumber'].committees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']>
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
                    (typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']
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
                    (typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTreatyCongressTreatyNumberCommitteesQueryKey>
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
            ReturnType<(typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTreatyCongressTreatyNumberCommitteesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTreatyCongressTreatyNumberCommitteesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.treaty[':congress'][':treatyNumber'].committees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
