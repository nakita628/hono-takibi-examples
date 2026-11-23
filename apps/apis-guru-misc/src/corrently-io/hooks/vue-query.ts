import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAlternativeKey() {
  return ['alternative'] as const
}

export function getGsiKey() {
  return ['gsi'] as const
}

export function getMeteringKey() {
  return ['metering'] as const
}

export function getQuittungKey() {
  return ['quittung'] as const
}

export function getStromkontoKey() {
  return ['stromkonto'] as const
}

export function getTariffKey() {
  return ['tariff'] as const
}

export function getWimKey() {
  return ['wim'] as const
}

export function getAlternativeEaseeLastSessionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.alternative.easee.lastSessions.$get>>,
) {
  return ['alternative', '/alternative/easee/lastSessions', toValue(args)] as const
}

export function getAlternativeEaseeLastSessionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.alternative.easee.lastSessions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlternativeEaseeLastSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alternative.easee.lastSessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlternativeEaseeLastSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.alternative.easee.lastSessions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.alternative.easee.lastSessions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.alternative.easee.lastSessions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.alternative.easee.lastSessions.$get>>
              >
            >
          >,
          ReturnType<typeof getAlternativeEaseeLastSessionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.alternative.easee.lastSessions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlternativeEaseeLastSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlternativeEaseeLastSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.alternative.easee.lastSessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlternativeOcppLastSessionsQueryKey() {
  return ['alternative', '/alternative/ocpp/lastSessions'] as const
}

export function getAlternativeOcppLastSessionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAlternativeOcppLastSessionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alternative.ocpp.lastSessions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlternativeOcppLastSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.alternative.ocpp.lastSessions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.alternative.ocpp.lastSessions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.alternative.ocpp.lastSessions.$get>>
              >
            >
          >,
          ReturnType<typeof getAlternativeOcppLastSessionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.alternative.ocpp.lastSessions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlternativeOcppLastSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAlternativeOcppLastSessionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.alternative.ocpp.lastSessions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlternativeOpenmeterActivitiesQueryKey() {
  return ['alternative', '/alternative/openmeter/activities'] as const
}

export function getAlternativeOpenmeterActivitiesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAlternativeOpenmeterActivitiesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alternative.openmeter.activities.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlternativeOpenmeterActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.alternative.openmeter.activities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.alternative.openmeter.activities.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.alternative.openmeter.activities.$get>>
              >
            >
          >,
          ReturnType<typeof getAlternativeOpenmeterActivitiesQueryKey>
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
          Awaited<ReturnType<typeof client.alternative.openmeter.activities.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlternativeOpenmeterActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAlternativeOpenmeterActivitiesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.alternative.openmeter.activities.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlternativeOpenmeterMetersQueryKey() {
  return ['alternative', '/alternative/openmeter/meters'] as const
}

export function getAlternativeOpenmeterMetersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAlternativeOpenmeterMetersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alternative.openmeter.meters.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlternativeOpenmeterMeters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.alternative.openmeter.meters.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.alternative.openmeter.meters.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.alternative.openmeter.meters.$get>>
              >
            >
          >,
          ReturnType<typeof getAlternativeOpenmeterMetersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.alternative.openmeter.meters.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlternativeOpenmeterMetersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAlternativeOpenmeterMetersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.alternative.openmeter.meters.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlternativeOpenmeterReadingsQueryKey() {
  return ['alternative', '/alternative/openmeter/readings'] as const
}

export function getAlternativeOpenmeterReadingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAlternativeOpenmeterReadingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alternative.openmeter.readings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlternativeOpenmeterReadings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.alternative.openmeter.readings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.alternative.openmeter.readings.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.alternative.openmeter.readings.$get>>
              >
            >
          >,
          ReturnType<typeof getAlternativeOpenmeterReadingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.alternative.openmeter.readings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlternativeOpenmeterReadingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAlternativeOpenmeterReadingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.alternative.openmeter.readings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGsiBestHourQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gsi.bestHour.$get>>,
) {
  return ['gsi', '/gsi/bestHour', toValue(args)] as const
}

export function getGsiBestHourQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gsi.bestHour.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGsiBestHourQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gsi.bestHour.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGsiBestHour<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.bestHour.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gsi.bestHour.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.bestHour.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.bestHour.$get>>>>
          >,
          ReturnType<typeof getGsiBestHourQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.bestHour.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGsiBestHourQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGsiBestHourQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gsi.bestHour.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGsiDispatchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gsi.dispatch.$get>>,
) {
  return ['gsi', '/gsi/dispatch', toValue(args)] as const
}

export function getGsiDispatchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gsi.dispatch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGsiDispatchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gsi.dispatch.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGsiDispatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.dispatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gsi.dispatch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.dispatch.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.dispatch.$get>>>>
          >,
          ReturnType<typeof getGsiDispatchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.dispatch.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGsiDispatchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGsiDispatchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gsi.dispatch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGsiMarketdataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gsi.marketdata.$get>>,
) {
  return ['gsi', '/gsi/marketdata', toValue(args)] as const
}

export function getGsiMarketdataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gsi.marketdata.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGsiMarketdataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gsi.marketdata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGsiMarketdata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.marketdata.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gsi.marketdata.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.marketdata.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.marketdata.$get>>>>
          >,
          ReturnType<typeof getGsiMarketdataQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.marketdata.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGsiMarketdataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGsiMarketdataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gsi.marketdata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGsiPredictionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gsi.prediction.$get>>,
) {
  return ['gsi', '/gsi/prediction', toValue(args)] as const
}

export function getGsiPredictionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gsi.prediction.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGsiPredictionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gsi.prediction.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGsiPrediction<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.prediction.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gsi.prediction.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.prediction.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.prediction.$get>>>>
          >,
          ReturnType<typeof getGsiPredictionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.prediction.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGsiPredictionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGsiPredictionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gsi.prediction.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeteringReadingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metering.reading.$get>>,
) {
  return ['metering', '/metering/reading', toValue(args)] as const
}

export function getMeteringReadingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metering.reading.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeteringReadingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metering.reading.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeteringReading<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metering.reading.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metering.reading.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metering.reading.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metering.reading.$get>>>
            >
          >,
          ReturnType<typeof getMeteringReadingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metering.reading.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeteringReadingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeteringReadingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metering.reading.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMeteringReadingMutationKey() {
  return ['metering', '/metering/reading', 'POST'] as const
}

export function getPostMeteringReadingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metering.reading.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.metering.reading.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMeteringReadingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.metering.reading.$post>) {
      return parseResponse(client.metering.reading.$post(args, options))
    },
  })
}

export function usePostMeteringReading<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metering.reading.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.metering.reading.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMeteringReadingMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQuittungCommitMutationKey() {
  return ['quittung', '/quittung/commit', 'POST'] as const
}

export function getPostQuittungCommitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.commit.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.quittung.commit.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuittungCommitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quittung.commit.$post>) {
      return parseResponse(client.quittung.commit.$post(args, options))
    },
  })
}

export function usePostQuittungCommit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quittung.commit.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.quittung.commit.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuittungCommitMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQuittungCreateMutationKey() {
  return ['quittung', '/quittung/create', 'POST'] as const
}

export function getPostQuittungCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.quittung.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuittungCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quittung.create.$post>) {
      return parseResponse(client.quittung.create.$post(args, options))
    },
  })
}

export function usePostQuittungCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quittung.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.quittung.create.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuittungCreateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQuittungPrepareMutationKey() {
  return ['quittung', '/quittung/prepare', 'POST'] as const
}

export function getPostQuittungPrepareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.prepare.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.quittung.prepare.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuittungPrepareMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quittung.prepare.$post>) {
      return parseResponse(client.quittung.prepare.$post(args, options))
    },
  })
}

export function usePostQuittungPrepare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quittung.prepare.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.quittung.prepare.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuittungPrepareMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQuittungTseMutationKey() {
  return ['quittung', '/quittung/tse', 'POST'] as const
}

export function getPostQuittungTseMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.tse.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.quittung.tse.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuittungTseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quittung.tse.$post>) {
      return parseResponse(client.quittung.tse.$post(args, options))
    },
  })
}

export function usePostQuittungTse<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.tse.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.quittung.tse.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuittungTseMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQuittungTsedataMutationKey() {
  return ['quittung', '/quittung/tsedata', 'POST'] as const
}

export function getPostQuittungTsedataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.tsedata.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.quittung.tsedata.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuittungTsedataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quittung.tsedata.$post>) {
      return parseResponse(client.quittung.tsedata.$post(args, options))
    },
  })
}

export function usePostQuittungTsedata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quittung.tsedata.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.quittung.tsedata.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuittungTsedataMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQuittungTsesignatureMutationKey() {
  return ['quittung', '/quittung/tsesignature', 'POST'] as const
}

export function getPostQuittungTsesignatureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quittung.tsesignature.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.quittung.tsesignature.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuittungTsesignatureMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quittung.tsesignature.$post>) {
      return parseResponse(client.quittung.tsesignature.$post(args, options))
    },
  })
}

export function usePostQuittungTsesignature<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quittung.tsesignature.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.quittung.tsesignature.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuittungTsesignatureMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQuittungZugferdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quittung.zugferd.$get>>,
) {
  return ['quittung', '/quittung/zugferd', toValue(args)] as const
}

export function getQuittungZugferdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quittung.zugferd.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuittungZugferdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quittung.zugferd.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuittungZugferd<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.zugferd.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quittung.zugferd.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quittung.zugferd.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quittung.zugferd.$get>>>
            >
          >,
          ReturnType<typeof getQuittungZugferdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.zugferd.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQuittungZugferdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuittungZugferdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quittung.zugferd.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStromkontoBalancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stromkonto.balances.$get>>,
) {
  return ['stromkonto', '/stromkonto/balances', toValue(args)] as const
}

export function getStromkontoBalancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stromkonto.balances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStromkontoBalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stromkonto.balances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStromkontoBalances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.balances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stromkonto.balances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.balances.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.balances.$get>>>
            >
          >,
          ReturnType<typeof getStromkontoBalancesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.balances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStromkontoBalancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStromkontoBalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stromkonto.balances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStromkontoChoicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stromkonto.choices.$get>>,
) {
  return ['stromkonto', '/stromkonto/choices', toValue(args)] as const
}

export function getStromkontoChoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stromkonto.choices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStromkontoChoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stromkonto.choices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStromkontoChoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.choices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stromkonto.choices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.choices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.choices.$get>>>
            >
          >,
          ReturnType<typeof getStromkontoChoicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.choices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStromkontoChoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStromkontoChoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stromkonto.choices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStromkontoLoginMutationKey() {
  return ['stromkonto', '/stromkonto/login', 'POST'] as const
}

export function getPostStromkontoLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.login.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.stromkonto.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStromkontoLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.stromkonto.login.$post>) {
      return parseResponse(client.stromkonto.login.$post(args, options))
    },
  })
}

export function usePostStromkontoLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.login.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.stromkonto.login.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStromkontoLoginMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStromkontoPrepareTransactionMutationKey() {
  return ['stromkonto', '/stromkonto/prepareTransaction', 'POST'] as const
}

export function getPostStromkontoPrepareTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.prepareTransaction.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.stromkonto.prepareTransaction.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStromkontoPrepareTransactionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.stromkonto.prepareTransaction.$post>) {
      return parseResponse(client.stromkonto.prepareTransaction.$post(args, options))
    },
  })
}

export function usePostStromkontoPrepareTransaction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stromkonto.prepareTransaction.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.stromkonto.prepareTransaction.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStromkontoPrepareTransactionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStromkontoRegisterMutationKey() {
  return ['stromkonto', '/stromkonto/register', 'POST'] as const
}

export function getPostStromkontoRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.register.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.stromkonto.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStromkontoRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.stromkonto.register.$post>) {
      return parseResponse(client.stromkonto.register.$post(args, options))
    },
  })
}

export function usePostStromkontoRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.register.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.stromkonto.register.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStromkontoRegisterMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTariffComponentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tariff.components.$get>>,
) {
  return ['tariff', '/tariff/components', toValue(args)] as const
}

export function getTariffComponentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tariff.components.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTariffComponentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tariff.components.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTariffComponents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.components.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tariff.components.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tariff.components.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tariff.components.$get>>>
            >
          >,
          ReturnType<typeof getTariffComponentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.components.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTariffComponentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTariffComponentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tariff.components.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTariffSlph0QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tariff.slph0.$get>>,
) {
  return ['tariff', '/tariff/slph0', toValue(args)] as const
}

export function getTariffSlph0QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tariff.slph0.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTariffSlph0QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tariff.slph0.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTariffSlph0<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.slph0.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tariff.slph0.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.slph0.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.slph0.$get>>>>
          >,
          ReturnType<typeof getTariffSlph0QueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.slph0.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTariffSlph0QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTariffSlph0QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tariff.slph0.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWimStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wim.status.$get>>,
) {
  return ['wim', '/wim/status', toValue(args)] as const
}

export function getWimStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wim.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWimStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wim.status.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWimStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wim.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wim.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wim.status.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wim.status.$get>>>>
          >,
          ReturnType<typeof getWimStatusQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wim.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWimStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWimStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wim.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
