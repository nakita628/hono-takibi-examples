import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBillsKey() {
  return ['bills'] as const
}

export function getCommitteesKey() {
  return ['committees'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getJurisdictionsKey() {
  return ['jurisdictions'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getPeopleKey() {
  return ['people'] as const
}

export function getPeopleGeoKey() {
  return ['people.geo'] as const
}

export function getBillsQueryKey(args: InferRequestType<typeof client.bills.$get>) {
  const { header: _, ...keyArgs } = args
  return ['bills', '/bills', keyArgs] as const
}

export function getBillsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bills.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bills.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bills.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBillsQueryKey>
  >({
    queryKey: getBillsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bills.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBills<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bills.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bills.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bills.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBillsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBillsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBillsOcdBillOpenstatesBillIdQueryKey(
  args: InferRequestType<(typeof client.bills)['ocd-bill'][':openstates_bill_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bills', '/bills/ocd-bill/:openstates_bill_id', keyArgs] as const
}

export function getBillsOcdBillOpenstatesBillIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bills)['ocd-bill'][':openstates_bill_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bills)['ocd-bill'][':openstates_bill_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bills)['ocd-bill'][':openstates_bill_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillsOcdBillOpenstatesBillIdQueryKey>
  >({
    queryKey: getBillsOcdBillOpenstatesBillIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bills['ocd-bill'][':openstates_bill_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBillsOcdBillOpenstatesBillId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bills)['ocd-bill'][':openstates_bill_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bills)['ocd-bill'][':openstates_bill_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.bills)['ocd-bill'][':openstates_bill_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillsOcdBillOpenstatesBillIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBillsOcdBillOpenstatesBillIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBillsJurisdictionSessionBillIdQueryKey(
  args: InferRequestType<(typeof client.bills)[':jurisdiction'][':session'][':bill_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bills', '/bills/:jurisdiction/:session/:bill_id', keyArgs] as const
}

export function getBillsJurisdictionSessionBillIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bills)[':jurisdiction'][':session'][':bill_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bills)[':jurisdiction'][':session'][':bill_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.bills)[':jurisdiction'][':session'][':bill_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillsJurisdictionSessionBillIdQueryKey>
  >({
    queryKey: getBillsJurisdictionSessionBillIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bills[':jurisdiction'][':session'][':bill_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBillsJurisdictionSessionBillId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bills)[':jurisdiction'][':session'][':bill_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.bills)[':jurisdiction'][':session'][':bill_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.bills)[':jurisdiction'][':session'][':bill_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillsJurisdictionSessionBillIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBillsJurisdictionSessionBillIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCommitteesQueryKey(args: InferRequestType<typeof client.committees.$get>) {
  const { header: _, ...keyArgs } = args
  return ['committees', '/committees', keyArgs] as const
}

export function getCommitteesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committees.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.committees.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committees.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCommitteesQueryKey>
  >({
    queryKey: getCommitteesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committees.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCommittees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.committees.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committees.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCommitteesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCommitteesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCommitteesCommitteeIdQueryKey(
  args: InferRequestType<(typeof client.committees)[':committee_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['committees', '/committees/:committee_id', keyArgs] as const
}

export function getCommitteesCommitteeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.committees)[':committee_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.committees)[':committee_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.committees)[':committee_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteesCommitteeIdQueryKey>
  >({
    queryKey: getCommitteesCommitteeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.committees[':committee_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCommitteesCommitteeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.committees)[':committee_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.committees)[':committee_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.committees)[':committee_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommitteesCommitteeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCommitteesCommitteeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEventsQueryKey(args: InferRequestType<typeof client.events.$get>) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events', keyArgs] as const
}

export function getEventsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >({
    queryKey: getEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEventsEventIdQueryKey(
  args: InferRequestType<(typeof client.events)[':event_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/:event_id', keyArgs] as const
}

export function getEventsEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdQueryKey>
  >({
    queryKey: getEventsEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':event_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)[':event_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsEventIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsEventIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getJurisdictionsQueryKey(args: InferRequestType<typeof client.jurisdictions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['jurisdictions', '/jurisdictions', keyArgs] as const
}

export function getJurisdictionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.jurisdictions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJurisdictionsQueryKey>
  >({
    queryKey: getJurisdictionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jurisdictions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectJurisdictions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.jurisdictions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getJurisdictionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJurisdictionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getJurisdictionsJurisdictionIdQueryKey(
  args: InferRequestType<(typeof client.jurisdictions)[':jurisdiction_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['jurisdictions', '/jurisdictions/:jurisdiction_id', keyArgs] as const
}

export function getJurisdictionsJurisdictionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.jurisdictions)[':jurisdiction_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jurisdictions)[':jurisdiction_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.jurisdictions)[':jurisdiction_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJurisdictionsJurisdictionIdQueryKey>
  >({
    queryKey: getJurisdictionsJurisdictionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jurisdictions[':jurisdiction_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJurisdictionsJurisdictionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.jurisdictions)[':jurisdiction_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.jurisdictions)[':jurisdiction_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.jurisdictions)[':jurisdiction_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJurisdictionsJurisdictionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getJurisdictionsJurisdictionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMetricsQueryKey() {
  return ['metrics', '/metrics'] as const
}

export function getMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >({
    queryKey: getMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPeopleQueryKey(args: InferRequestType<typeof client.people.$get>) {
  const { header: _, ...keyArgs } = args
  return ['people', '/people', keyArgs] as const
}

export function getPeopleQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.people.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPeopleQueryKey>
  >({
    queryKey: getPeopleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPeople<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.people.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPeopleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPeopleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPeopleGeoQueryKey(
  args: InferRequestType<(typeof client)['people.geo']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['people.geo', '/people.geo', keyArgs] as const
}

export function getPeopleGeoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['people.geo']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['people.geo']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['people.geo']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleGeoQueryKey>
  >({
    queryKey: getPeopleGeoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['people.geo'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPeopleGeo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['people.geo']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['people.geo']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['people.geo']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleGeoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPeopleGeoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
