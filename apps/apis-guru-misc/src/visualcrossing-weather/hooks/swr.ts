import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getVisualCrossingWebServicesKey() {
  return ['VisualCrossingWebServices'] as const
}

export function getGetVisualCrossingWebServicesRestServicesTimelineLocationKey(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
  >,
) {
  return [
    'VisualCrossingWebServices',
    '/VisualCrossingWebServices/rest/services/timeline/:location',
    args,
  ] as const
}

export function useGetVisualCrossingWebServicesRestServicesTimelineLocation<TError = unknown>(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
              >
            >
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
        ? getGetVisualCrossingWebServicesRestServicesTimelineLocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.VisualCrossingWebServices.rest.services.timeline[':location'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVisualCrossingWebServicesRestServicesTimelineLocation<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
              >
            >
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
        ? getGetVisualCrossingWebServicesRestServicesTimelineLocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.VisualCrossingWebServices.rest.services.timeline[':location'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVisualCrossingWebServicesRestServicesTimelineLocationStartdateKey(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
  >,
) {
  return [
    'VisualCrossingWebServices',
    '/VisualCrossingWebServices/rest/services/timeline/:location/:startdate',
    args,
  ] as const
}

export function useGetVisualCrossingWebServicesRestServicesTimelineLocationStartdate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
              >
            >
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
        ? getGetVisualCrossingWebServicesRestServicesTimelineLocationStartdateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.VisualCrossingWebServices.rest.services.timeline[':location'][':startdate'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVisualCrossingWebServicesRestServicesTimelineLocationStartdate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
              >
            >
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
        ? getGetVisualCrossingWebServicesRestServicesTimelineLocationStartdateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.VisualCrossingWebServices.rest.services.timeline[':location'][':startdate'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateKey(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
  >,
) {
  return [
    'VisualCrossingWebServices',
    '/VisualCrossingWebServices/rest/services/timeline/:location/:startdate/:enddate',
    args,
  ] as const
}

export function useGetVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
              >
            >
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
        ? getGetVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.VisualCrossingWebServices.rest.services.timeline[':location'][':startdate'][
            ':enddate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
              >
            >
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
        ? getGetVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.VisualCrossingWebServices.rest.services.timeline[':location'][':startdate'][
            ':enddate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVisualCrossingWebServicesRestServicesWeatherdataForecastKey(
  args: InferRequestType<
    typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
  >,
) {
  return [
    'VisualCrossingWebServices',
    '/VisualCrossingWebServices/rest/services/weatherdata/forecast',
    args,
  ] as const
}

export function useGetVisualCrossingWebServicesRestServicesWeatherdataForecast<TError = unknown>(
  args: InferRequestType<
    typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
              >
            >
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
        ? getGetVisualCrossingWebServicesRestServicesWeatherdataForecastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVisualCrossingWebServicesRestServicesWeatherdataForecast<
  TError = unknown,
>(
  args: InferRequestType<
    typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
              >
            >
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
        ? getGetVisualCrossingWebServicesRestServicesWeatherdataForecastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVisualCrossingWebServicesRestServicesWeatherdataHistoryKey(
  args: InferRequestType<
    typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get
  >,
) {
  return [
    'VisualCrossingWebServices',
    '/VisualCrossingWebServices/rest/services/weatherdata/history',
    args,
  ] as const
}

export function useGetVisualCrossingWebServicesRestServicesWeatherdataHistory<TError = unknown>(
  args: InferRequestType<
    typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get
              >
            >
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
        ? getGetVisualCrossingWebServicesRestServicesWeatherdataHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.VisualCrossingWebServices.rest.services.weatherdata.history.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVisualCrossingWebServicesRestServicesWeatherdataHistory<
  TError = unknown,
>(
  args: InferRequestType<
    typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get
              >
            >
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
        ? getGetVisualCrossingWebServicesRestServicesWeatherdataHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.VisualCrossingWebServices.rest.services.weatherdata.history.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
