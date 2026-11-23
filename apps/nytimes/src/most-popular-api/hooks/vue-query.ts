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

export function getMostemailedKey() {
  return ['mostemailed'] as const
}

export function getMostsharedKey() {
  return ['mostshared'] as const
}

export function getMostviewedKey() {
  return ['mostviewed'] as const
}

export function getMostemailedSectionTimePeriodJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>
  >,
) {
  return ['mostemailed', '/mostemailed/:section/:time-period.json', toValue(args)] as const
}

export function getMostemailedSectionTimePeriodJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMostemailedSectionTimePeriodJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mostemailed[':section'][':time-period.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMostemailedSectionTimePeriodJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>
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
                  ReturnType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMostemailedSectionTimePeriodJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMostemailedSectionTimePeriodJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMostemailedSectionTimePeriodJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mostemailed[':section'][':time-period.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMostsharedSectionTimePeriodJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>
  >,
) {
  return ['mostshared', '/mostshared/:section/:time-period.json', toValue(args)] as const
}

export function getMostsharedSectionTimePeriodJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMostsharedSectionTimePeriodJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mostshared[':section'][':time-period.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMostsharedSectionTimePeriodJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>
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
                  ReturnType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMostsharedSectionTimePeriodJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMostsharedSectionTimePeriodJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMostsharedSectionTimePeriodJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mostshared[':section'][':time-period.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMostviewedSectionTimePeriodJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>
  >,
) {
  return ['mostviewed', '/mostviewed/:section/:time-period.json', toValue(args)] as const
}

export function getMostviewedSectionTimePeriodJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMostviewedSectionTimePeriodJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mostviewed[':section'][':time-period.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMostviewedSectionTimePeriodJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>
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
                  ReturnType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMostviewedSectionTimePeriodJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMostviewedSectionTimePeriodJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMostviewedSectionTimePeriodJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mostviewed[':section'][':time-period.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
