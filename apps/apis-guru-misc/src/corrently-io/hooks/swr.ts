import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAlternativeEaseeLastSessionsKey(
  args: InferRequestType<typeof client.alternative.easee.lastSessions.$get>,
) {
  return ['alternative', '/alternative/easee/lastSessions', args] as const
}

export function useGetAlternativeEaseeLastSessions<TError = unknown>(
  args: InferRequestType<typeof client.alternative.easee.lastSessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.alternative.easee.lastSessions.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlternativeEaseeLastSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.alternative.easee.lastSessions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alternative.easee.lastSessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlternativeEaseeLastSessions<TError = unknown>(
  args: InferRequestType<typeof client.alternative.easee.lastSessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.alternative.easee.lastSessions.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlternativeEaseeLastSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.alternative.easee.lastSessions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alternative.easee.lastSessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAlternativeOcppLastSessionsKey() {
  return ['alternative', '/alternative/ocpp/lastSessions'] as const
}

export function useGetAlternativeOcppLastSessions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.alternative.ocpp.lastSessions.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlternativeOcppLastSessionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.alternative.ocpp.lastSessions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.alternative.ocpp.lastSessions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlternativeOcppLastSessions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.alternative.ocpp.lastSessions.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlternativeOcppLastSessionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.alternative.ocpp.lastSessions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.alternative.ocpp.lastSessions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAlternativeOpenmeterActivitiesKey() {
  return ['alternative', '/alternative/openmeter/activities'] as const
}

export function useGetAlternativeOpenmeterActivities<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.alternative.openmeter.activities.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlternativeOpenmeterActivitiesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.alternative.openmeter.activities.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.alternative.openmeter.activities.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlternativeOpenmeterActivities<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.alternative.openmeter.activities.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlternativeOpenmeterActivitiesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.alternative.openmeter.activities.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.alternative.openmeter.activities.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAlternativeOpenmeterMetersKey() {
  return ['alternative', '/alternative/openmeter/meters'] as const
}

export function useGetAlternativeOpenmeterMeters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.alternative.openmeter.meters.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlternativeOpenmeterMetersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.alternative.openmeter.meters.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alternative.openmeter.meters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlternativeOpenmeterMeters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.alternative.openmeter.meters.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlternativeOpenmeterMetersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.alternative.openmeter.meters.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.alternative.openmeter.meters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAlternativeOpenmeterReadingsKey() {
  return ['alternative', '/alternative/openmeter/readings'] as const
}

export function useGetAlternativeOpenmeterReadings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.alternative.openmeter.readings.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlternativeOpenmeterReadingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.alternative.openmeter.readings.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.alternative.openmeter.readings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlternativeOpenmeterReadings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.alternative.openmeter.readings.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlternativeOpenmeterReadingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.alternative.openmeter.readings.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.alternative.openmeter.readings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGsiBestHourKey(args: InferRequestType<typeof client.gsi.bestHour.$get>) {
  return ['gsi', '/gsi/bestHour', args] as const
}

export function useGetGsiBestHour<TError = unknown>(
  args: InferRequestType<typeof client.gsi.bestHour.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.bestHour.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGsiBestHourKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.bestHour.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gsi.bestHour.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGsiBestHour<TError = unknown>(
  args: InferRequestType<typeof client.gsi.bestHour.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.bestHour.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGsiBestHourKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.bestHour.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gsi.bestHour.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGsiDispatchKey(args: InferRequestType<typeof client.gsi.dispatch.$get>) {
  return ['gsi', '/gsi/dispatch', args] as const
}

export function useGetGsiDispatch<TError = unknown>(
  args: InferRequestType<typeof client.gsi.dispatch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.dispatch.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGsiDispatchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.dispatch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gsi.dispatch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGsiDispatch<TError = unknown>(
  args: InferRequestType<typeof client.gsi.dispatch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.dispatch.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGsiDispatchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.dispatch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gsi.dispatch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGsiMarketdataKey(args: InferRequestType<typeof client.gsi.marketdata.$get>) {
  return ['gsi', '/gsi/marketdata', args] as const
}

export function useGetGsiMarketdata<TError = unknown>(
  args: InferRequestType<typeof client.gsi.marketdata.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.marketdata.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGsiMarketdataKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.marketdata.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gsi.marketdata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGsiMarketdata<TError = unknown>(
  args: InferRequestType<typeof client.gsi.marketdata.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.marketdata.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGsiMarketdataKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.marketdata.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gsi.marketdata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGsiPredictionKey(args: InferRequestType<typeof client.gsi.prediction.$get>) {
  return ['gsi', '/gsi/prediction', args] as const
}

export function useGetGsiPrediction<TError = unknown>(
  args: InferRequestType<typeof client.gsi.prediction.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.prediction.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGsiPredictionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.prediction.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gsi.prediction.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGsiPrediction<TError = unknown>(
  args: InferRequestType<typeof client.gsi.prediction.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.prediction.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGsiPredictionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsi.prediction.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gsi.prediction.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeteringReadingKey(
  args: InferRequestType<typeof client.metering.reading.$get>,
) {
  return ['metering', '/metering/reading', args] as const
}

export function useGetMeteringReading<TError = unknown>(
  args: InferRequestType<typeof client.metering.reading.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metering.reading.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMeteringReadingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metering.reading.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metering.reading.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeteringReading<TError = unknown>(
  args: InferRequestType<typeof client.metering.reading.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metering.reading.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMeteringReadingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metering.reading.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metering.reading.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMeteringReadingKey() {
  return ['metering', '/metering/reading', 'POST'] as const
}

export function usePostMeteringReading<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metering.reading.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.metering.reading.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeteringReadingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.metering.reading.$post> }) =>
        parseResponse(client.metering.reading.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuittungCommitKey() {
  return ['quittung', '/quittung/commit', 'POST'] as const
}

export function usePostQuittungCommit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.commit.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.quittung.commit.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuittungCommitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quittung.commit.$post> }) =>
        parseResponse(client.quittung.commit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuittungCreateKey() {
  return ['quittung', '/quittung/create', 'POST'] as const
}

export function usePostQuittungCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.quittung.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuittungCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quittung.create.$post> }) =>
        parseResponse(client.quittung.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuittungPrepareKey() {
  return ['quittung', '/quittung/prepare', 'POST'] as const
}

export function usePostQuittungPrepare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.prepare.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.quittung.prepare.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuittungPrepareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quittung.prepare.$post> }) =>
        parseResponse(client.quittung.prepare.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuittungTseKey() {
  return ['quittung', '/quittung/tse', 'POST'] as const
}

export function usePostQuittungTse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.tse.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.quittung.tse.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuittungTseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quittung.tse.$post> }) =>
        parseResponse(client.quittung.tse.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuittungTsedataKey() {
  return ['quittung', '/quittung/tsedata', 'POST'] as const
}

export function usePostQuittungTsedata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.tsedata.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.quittung.tsedata.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuittungTsedataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quittung.tsedata.$post> }) =>
        parseResponse(client.quittung.tsedata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuittungTsesignatureKey() {
  return ['quittung', '/quittung/tsesignature', 'POST'] as const
}

export function usePostQuittungTsesignature<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quittung.tsesignature.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.quittung.tsesignature.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuittungTsesignatureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.quittung.tsesignature.$post> },
      ) => parseResponse(client.quittung.tsesignature.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuittungZugferdKey(
  args: InferRequestType<typeof client.quittung.zugferd.$get>,
) {
  return ['quittung', '/quittung/zugferd', args] as const
}

export function useGetQuittungZugferd<TError = unknown>(
  args: InferRequestType<typeof client.quittung.zugferd.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.zugferd.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQuittungZugferdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.zugferd.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quittung.zugferd.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuittungZugferd<TError = unknown>(
  args: InferRequestType<typeof client.quittung.zugferd.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.zugferd.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQuittungZugferdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quittung.zugferd.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quittung.zugferd.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStromkontoBalancesKey(
  args: InferRequestType<typeof client.stromkonto.balances.$get>,
) {
  return ['stromkonto', '/stromkonto/balances', args] as const
}

export function useGetStromkontoBalances<TError = unknown>(
  args: InferRequestType<typeof client.stromkonto.balances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.balances.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStromkontoBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.balances.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stromkonto.balances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStromkontoBalances<TError = unknown>(
  args: InferRequestType<typeof client.stromkonto.balances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.balances.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStromkontoBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.balances.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stromkonto.balances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStromkontoChoicesKey(
  args: InferRequestType<typeof client.stromkonto.choices.$get>,
) {
  return ['stromkonto', '/stromkonto/choices', args] as const
}

export function useGetStromkontoChoices<TError = unknown>(
  args: InferRequestType<typeof client.stromkonto.choices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.choices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStromkontoChoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.choices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stromkonto.choices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStromkontoChoices<TError = unknown>(
  args: InferRequestType<typeof client.stromkonto.choices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.choices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStromkontoChoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.choices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stromkonto.choices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStromkontoLoginKey() {
  return ['stromkonto', '/stromkonto/login', 'POST'] as const
}

export function usePostStromkontoLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.login.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.stromkonto.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStromkontoLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.stromkonto.login.$post> }) =>
        parseResponse(client.stromkonto.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStromkontoPrepareTransactionKey() {
  return ['stromkonto', '/stromkonto/prepareTransaction', 'POST'] as const
}

export function usePostStromkontoPrepareTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.prepareTransaction.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.stromkonto.prepareTransaction.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStromkontoPrepareTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.stromkonto.prepareTransaction.$post> },
      ) => parseResponse(client.stromkonto.prepareTransaction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStromkontoRegisterKey() {
  return ['stromkonto', '/stromkonto/register', 'POST'] as const
}

export function usePostStromkontoRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stromkonto.register.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.stromkonto.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStromkontoRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.stromkonto.register.$post> }) =>
        parseResponse(client.stromkonto.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTariffComponentsKey(
  args: InferRequestType<typeof client.tariff.components.$get>,
) {
  return ['tariff', '/tariff/components', args] as const
}

export function useGetTariffComponents<TError = unknown>(
  args: InferRequestType<typeof client.tariff.components.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.components.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTariffComponentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.components.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tariff.components.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTariffComponents<TError = unknown>(
  args: InferRequestType<typeof client.tariff.components.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.components.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTariffComponentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.components.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tariff.components.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTariffSlph0Key(args: InferRequestType<typeof client.tariff.slph0.$get>) {
  return ['tariff', '/tariff/slph0', args] as const
}

export function useGetTariffSlph0<TError = unknown>(
  args: InferRequestType<typeof client.tariff.slph0.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.slph0.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTariffSlph0Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.slph0.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tariff.slph0.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTariffSlph0<TError = unknown>(
  args: InferRequestType<typeof client.tariff.slph0.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.slph0.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTariffSlph0Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tariff.slph0.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tariff.slph0.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWimStatusKey(args: InferRequestType<typeof client.wim.status.$get>) {
  return ['wim', '/wim/status', args] as const
}

export function useGetWimStatus<TError = unknown>(
  args: InferRequestType<typeof client.wim.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wim.status.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWimStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wim.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wim.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWimStatus<TError = unknown>(
  args: InferRequestType<typeof client.wim.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wim.status.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWimStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wim.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wim.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
