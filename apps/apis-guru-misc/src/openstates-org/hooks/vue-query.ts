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

export function getBillsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bills.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['bills', '/bills', keyArgs] as const
}

export function getBillsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bills.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bills.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBills<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bills.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bills.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bills.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bills.$get>>>>>,
          ReturnType<typeof getBillsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bills.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBillsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bills.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillsOcdBillOpenstatesBillIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bills)['ocd-bill'][':openstates_bill_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['bills', '/bills/ocd-bill/:openstates_bill_id', keyArgs] as const
}

export function getBillsOcdBillOpenstatesBillIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bills)['ocd-bill'][':openstates_bill_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillsOcdBillOpenstatesBillIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bills['ocd-bill'][':openstates_bill_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBillsOcdBillOpenstatesBillId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bills)['ocd-bill'][':openstates_bill_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bills)['ocd-bill'][':openstates_bill_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bills)['ocd-bill'][':openstates_bill_id']['$get']>
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
                  ReturnType<(typeof client.bills)['ocd-bill'][':openstates_bill_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBillsOcdBillOpenstatesBillIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.bills)['ocd-bill'][':openstates_bill_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillsOcdBillOpenstatesBillIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillsOcdBillOpenstatesBillIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bills['ocd-bill'][':openstates_bill_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillsJurisdictionSessionBillIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bills)[':jurisdiction'][':session'][':bill_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['bills', '/bills/:jurisdiction/:session/:bill_id', keyArgs] as const
}

export function getBillsJurisdictionSessionBillIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bills)[':jurisdiction'][':session'][':bill_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillsJurisdictionSessionBillIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bills[':jurisdiction'][':session'][':bill_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBillsJurisdictionSessionBillId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bills)[':jurisdiction'][':session'][':bill_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bills)[':jurisdiction'][':session'][':bill_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bills)[':jurisdiction'][':session'][':bill_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBillsJurisdictionSessionBillIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.bills)[':jurisdiction'][':session'][':bill_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillsJurisdictionSessionBillIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillsJurisdictionSessionBillIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bills[':jurisdiction'][':session'][':bill_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.committees.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['committees', '/committees', keyArgs] as const
}

export function getCommitteesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.committees.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committees.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCommittees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.committees.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committees.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committees.$get>>>>
          >,
          ReturnType<typeof getCommitteesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.committees.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCommitteesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommitteesCommitteeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.committees)[':committee_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['committees', '/committees/:committee_id', keyArgs] as const
}

export function getCommitteesCommitteeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.committees)[':committee_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommitteesCommitteeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.committees[':committee_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommitteesCommitteeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.committees)[':committee_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.committees)[':committee_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.committees)[':committee_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.committees)[':committee_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCommitteesCommitteeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.committees)[':committee_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommitteesCommitteeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommitteesCommitteeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.committees[':committee_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['events', '/events', keyArgs] as const
}

export function getEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          ReturnType<typeof getEventsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsEventIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':event_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['events', '/events/:event_id', keyArgs] as const
}

export function getEventsEventIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':event_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':event_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':event_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
            >
          >,
          ReturnType<typeof getEventsEventIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':event_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJurisdictionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jurisdictions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['jurisdictions', '/jurisdictions', keyArgs] as const
}

export function getJurisdictionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jurisdictions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJurisdictionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jurisdictions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJurisdictions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jurisdictions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictions.$get>>>>
          >,
          ReturnType<typeof getJurisdictionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJurisdictionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJurisdictionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jurisdictions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJurisdictionsJurisdictionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.jurisdictions)[':jurisdiction_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['jurisdictions', '/jurisdictions/:jurisdiction_id', keyArgs] as const
}

export function getJurisdictionsJurisdictionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.jurisdictions)[':jurisdiction_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJurisdictionsJurisdictionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jurisdictions[':jurisdiction_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJurisdictionsJurisdictionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.jurisdictions)[':jurisdiction_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.jurisdictions)[':jurisdiction_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jurisdictions)[':jurisdiction_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jurisdictions)[':jurisdiction_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getJurisdictionsJurisdictionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.jurisdictions)[':jurisdiction_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJurisdictionsJurisdictionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJurisdictionsJurisdictionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jurisdictions[':jurisdiction_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsQueryKey() {
  return ['metrics', '/metrics'] as const
}

export function getMetricsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMetricsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          ReturnType<typeof getMetricsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMetricsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['people', '/people', keyArgs] as const
}

export function getPeopleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePeople<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
          ReturnType<typeof getPeopleQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPeopleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleGeoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['people.geo']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['people.geo', '/people.geo', keyArgs] as const
}

export function getPeopleGeoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['people.geo']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleGeoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['people.geo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePeopleGeo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['people.geo']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['people.geo']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['people.geo']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['people.geo']['$get']>>>
            >
          >,
          ReturnType<typeof getPeopleGeoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['people.geo']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleGeoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleGeoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['people.geo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
