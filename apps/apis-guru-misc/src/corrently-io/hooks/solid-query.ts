import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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
  args: InferRequestType<typeof client.alternative.easee.lastSessions.$get>,
) {
  return ['alternative', '/alternative/easee/lastSessions', args] as const
}

export function getAlternativeEaseeLastSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.alternative.easee.lastSessions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.alternative.easee.lastSessions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.alternative.easee.lastSessions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlternativeEaseeLastSessionsQueryKey>
  >({
    queryKey: getAlternativeEaseeLastSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.alternative.easee.lastSessions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAlternativeEaseeLastSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.alternative.easee.lastSessions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.alternative.easee.lastSessions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.alternative.easee.lastSessions.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAlternativeEaseeLastSessionsQueryKey>
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
      ...getAlternativeEaseeLastSessionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAlternativeOcppLastSessionsQueryKey() {
  return ['alternative', '/alternative/ocpp/lastSessions'] as const
}

export function getAlternativeOcppLastSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.alternative.ocpp.lastSessions.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.alternative.ocpp.lastSessions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlternativeOcppLastSessionsQueryKey>
  >({
    queryKey: getAlternativeOcppLastSessionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.alternative.ocpp.lastSessions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAlternativeOcppLastSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.alternative.ocpp.lastSessions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.alternative.ocpp.lastSessions.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAlternativeOcppLastSessionsQueryKey>
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
    return { ...getAlternativeOcppLastSessionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAlternativeOpenmeterActivitiesQueryKey() {
  return ['alternative', '/alternative/openmeter/activities'] as const
}

export function getAlternativeOpenmeterActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.alternative.openmeter.activities.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getAlternativeOpenmeterActivitiesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.alternative.openmeter.activities.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAlternativeOpenmeterActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.alternative.openmeter.activities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getAlternativeOpenmeterActivitiesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAlternativeOpenmeterMetersQueryKey() {
  return ['alternative', '/alternative/openmeter/meters'] as const
}

export function getAlternativeOpenmeterMetersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.alternative.openmeter.meters.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.alternative.openmeter.meters.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlternativeOpenmeterMetersQueryKey>
  >({
    queryKey: getAlternativeOpenmeterMetersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.alternative.openmeter.meters.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAlternativeOpenmeterMeters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.alternative.openmeter.meters.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.alternative.openmeter.meters.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAlternativeOpenmeterMetersQueryKey>
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
    return { ...getAlternativeOpenmeterMetersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAlternativeOpenmeterReadingsQueryKey() {
  return ['alternative', '/alternative/openmeter/readings'] as const
}

export function getAlternativeOpenmeterReadingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.alternative.openmeter.readings.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.alternative.openmeter.readings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlternativeOpenmeterReadingsQueryKey>
  >({
    queryKey: getAlternativeOpenmeterReadingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.alternative.openmeter.readings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAlternativeOpenmeterReadings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.alternative.openmeter.readings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.alternative.openmeter.readings.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAlternativeOpenmeterReadingsQueryKey>
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
      ...getAlternativeOpenmeterReadingsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGsiBestHourQueryKey(args: InferRequestType<typeof client.gsi.bestHour.$get>) {
  return ['gsi', '/gsi/bestHour', args] as const
}

export function getGsiBestHourQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.bestHour.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gsi.bestHour.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.bestHour.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGsiBestHourQueryKey>
  >({
    queryKey: getGsiBestHourQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gsi.bestHour.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGsiBestHour<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.bestHour.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gsi.bestHour.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.bestHour.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getGsiBestHourQueryKey>
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
    return { ...getGsiBestHourQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGsiDispatchQueryKey(args: InferRequestType<typeof client.gsi.dispatch.$get>) {
  return ['gsi', '/gsi/dispatch', args] as const
}

export function getGsiDispatchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.dispatch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gsi.dispatch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.dispatch.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGsiDispatchQueryKey>
  >({
    queryKey: getGsiDispatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gsi.dispatch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGsiDispatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.dispatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gsi.dispatch.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.dispatch.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getGsiDispatchQueryKey>
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
    return { ...getGsiDispatchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGsiMarketdataQueryKey(
  args: InferRequestType<typeof client.gsi.marketdata.$get>,
) {
  return ['gsi', '/gsi/marketdata', args] as const
}

export function getGsiMarketdataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.marketdata.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gsi.marketdata.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.marketdata.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGsiMarketdataQueryKey>
  >({
    queryKey: getGsiMarketdataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gsi.marketdata.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGsiMarketdata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.marketdata.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gsi.marketdata.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.marketdata.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getGsiMarketdataQueryKey>
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
    return { ...getGsiMarketdataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGsiPredictionQueryKey(
  args: InferRequestType<typeof client.gsi.prediction.$get>,
) {
  return ['gsi', '/gsi/prediction', args] as const
}

export function getGsiPredictionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.prediction.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gsi.prediction.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.prediction.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGsiPredictionQueryKey>
  >({
    queryKey: getGsiPredictionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gsi.prediction.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGsiPrediction<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.prediction.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gsi.prediction.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.prediction.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getGsiPredictionQueryKey>
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
    return { ...getGsiPredictionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeteringReadingQueryKey(
  args: InferRequestType<typeof client.metering.reading.$get>,
) {
  return ['metering', '/metering/reading', args] as const
}

export function getMeteringReadingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metering.reading.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metering.reading.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metering.reading.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeteringReadingQueryKey>
  >({
    queryKey: getMeteringReadingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metering.reading.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMeteringReading<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metering.reading.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metering.reading.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metering.reading.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMeteringReadingQueryKey>
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
    return { ...getMeteringReadingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMeteringReading<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metering.reading.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.metering.reading.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMeteringReadingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostQuittungCommit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quittung.commit.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.quittung.commit.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQuittungCommitMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostQuittungCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quittung.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.quittung.create.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQuittungCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostQuittungPrepare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quittung.prepare.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.quittung.prepare.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQuittungPrepareMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostQuittungTse<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.tse.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.quittung.tse.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQuittungTseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostQuittungTsedata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quittung.tsedata.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.quittung.tsedata.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQuittungTsedataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostQuittungTsesignature<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quittung.tsesignature.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.quittung.tsesignature.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQuittungTsesignatureMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getQuittungZugferdQueryKey(
  args: InferRequestType<typeof client.quittung.zugferd.$get>,
) {
  return ['quittung', '/quittung/zugferd', args] as const
}

export function getQuittungZugferdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.zugferd.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.quittung.zugferd.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.zugferd.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQuittungZugferdQueryKey>
  >({
    queryKey: getQuittungZugferdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quittung.zugferd.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQuittungZugferd<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.zugferd.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.quittung.zugferd.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.quittung.zugferd.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQuittungZugferdQueryKey>
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
    return { ...getQuittungZugferdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStromkontoBalancesQueryKey(
  args: InferRequestType<typeof client.stromkonto.balances.$get>,
) {
  return ['stromkonto', '/stromkonto/balances', args] as const
}

export function getStromkontoBalancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.balances.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stromkonto.balances.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.balances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStromkontoBalancesQueryKey>
  >({
    queryKey: getStromkontoBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stromkonto.balances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStromkontoBalances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.balances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stromkonto.balances.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.balances.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStromkontoBalancesQueryKey>
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
    return { ...getStromkontoBalancesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStromkontoChoicesQueryKey(
  args: InferRequestType<typeof client.stromkonto.choices.$get>,
) {
  return ['stromkonto', '/stromkonto/choices', args] as const
}

export function getStromkontoChoicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.choices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stromkonto.choices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.choices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStromkontoChoicesQueryKey>
  >({
    queryKey: getStromkontoChoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stromkonto.choices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStromkontoChoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.choices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stromkonto.choices.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.choices.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStromkontoChoicesQueryKey>
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
    return { ...getStromkontoChoicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostStromkontoLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.login.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.stromkonto.login.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStromkontoLoginMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostStromkontoPrepareTransaction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStromkontoPrepareTransactionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostStromkontoRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.register.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.stromkonto.register.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStromkontoRegisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTariffComponentsQueryKey(
  args: InferRequestType<typeof client.tariff.components.$get>,
) {
  return ['tariff', '/tariff/components', args] as const
}

export function getTariffComponentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.components.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tariff.components.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.components.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTariffComponentsQueryKey>
  >({
    queryKey: getTariffComponentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tariff.components.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTariffComponents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.components.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tariff.components.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tariff.components.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTariffComponentsQueryKey>
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
    return { ...getTariffComponentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTariffSlph0QueryKey(args: InferRequestType<typeof client.tariff.slph0.$get>) {
  return ['tariff', '/tariff/slph0', args] as const
}

export function getTariffSlph0QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.slph0.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tariff.slph0.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.slph0.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTariffSlph0QueryKey>
  >({
    queryKey: getTariffSlph0QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tariff.slph0.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTariffSlph0<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.slph0.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tariff.slph0.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.slph0.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getTariffSlph0QueryKey>
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
    return { ...getTariffSlph0QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getWimStatusQueryKey(args: InferRequestType<typeof client.wim.status.$get>) {
  return ['wim', '/wim/status', args] as const
}

export function getWimStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wim.status.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.wim.status.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wim.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWimStatusQueryKey>
  >({
    queryKey: getWimStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wim.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWimStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wim.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wim.status.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wim.status.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getWimStatusQueryKey>
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
    return { ...getWimStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
