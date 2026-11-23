import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetArrivalsAndDeparturesByCRSKey() {
  return ['getArrivalsAndDeparturesByCRS'] as const
}

export function getGetArrivalsByCRSKey() {
  return ['getArrivalsByCRS'] as const
}

export function getGetDeparturesByCRSKey() {
  return ['getDeparturesByCRS'] as const
}

export function getGetFastestDeparturesByCRSKey() {
  return ['getFastestDeparturesByCRS'] as const
}

export function getGetNextDeparturesByCRSKey() {
  return ['getNextDeparturesByCRS'] as const
}

export function getGetServiceDetailsByIDKey() {
  return ['getServiceDetailsByID'] as const
}

export function getGetGetArrivalsAndDeparturesByCRSCRSKey(
  args: InferRequestType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>,
) {
  return ['getArrivalsAndDeparturesByCRS', '/getArrivalsAndDeparturesByCRS/:CRS', args] as const
}

export function useGetGetArrivalsAndDeparturesByCRSCRS<TError = unknown>(
  args: InferRequestType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>>
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
        ? getGetGetArrivalsAndDeparturesByCRSCRSKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.getArrivalsAndDeparturesByCRS[':CRS'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetArrivalsAndDeparturesByCRSCRS<TError = unknown>(
  args: InferRequestType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>>
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
        ? getGetGetArrivalsAndDeparturesByCRSCRSKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.getArrivalsAndDeparturesByCRS[':CRS'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetArrivalsByCRSCRSKey(
  args: InferRequestType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>,
) {
  return ['getArrivalsByCRS', '/getArrivalsByCRS/:CRS', args] as const
}

export function useGetGetArrivalsByCRSCRS<TError = unknown>(
  args: InferRequestType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>>
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
        ? getGetGetArrivalsByCRSCRSKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getArrivalsByCRS[':CRS'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetArrivalsByCRSCRS<TError = unknown>(
  args: InferRequestType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>>
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
        ? getGetGetArrivalsByCRSCRSKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getArrivalsByCRS[':CRS'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetDeparturesByCRSCRSKey(
  args: InferRequestType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>,
) {
  return ['getDeparturesByCRS', '/getDeparturesByCRS/:CRS', args] as const
}

export function useGetGetDeparturesByCRSCRS<TError = unknown>(
  args: InferRequestType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>>
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
        ? getGetGetDeparturesByCRSCRSKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getDeparturesByCRS[':CRS'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetDeparturesByCRSCRS<TError = unknown>(
  args: InferRequestType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>>
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
        ? getGetGetDeparturesByCRSCRSKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getDeparturesByCRS[':CRS'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetFastestDeparturesByCRSCRSKey(
  args: InferRequestType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>,
) {
  return ['getFastestDeparturesByCRS', '/getFastestDeparturesByCRS/:CRS', args] as const
}

export function useGetGetFastestDeparturesByCRSCRS<TError = unknown>(
  args: InferRequestType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>>
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
        ? getGetGetFastestDeparturesByCRSCRSKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getFastestDeparturesByCRS[':CRS'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetFastestDeparturesByCRSCRS<TError = unknown>(
  args: InferRequestType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>>
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
        ? getGetGetFastestDeparturesByCRSCRSKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getFastestDeparturesByCRS[':CRS'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetNextDeparturesByCRSCRSKey(
  args: InferRequestType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>,
) {
  return ['getNextDeparturesByCRS', '/getNextDeparturesByCRS/:CRS', args] as const
}

export function useGetGetNextDeparturesByCRSCRS<TError = unknown>(
  args: InferRequestType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>>
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
        ? getGetGetNextDeparturesByCRSCRSKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getNextDeparturesByCRS[':CRS'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetNextDeparturesByCRSCRS<TError = unknown>(
  args: InferRequestType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>>
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
        ? getGetGetNextDeparturesByCRSCRSKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getNextDeparturesByCRS[':CRS'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetServiceDetailsByIDServiceIDKey(
  args: InferRequestType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>,
) {
  return ['getServiceDetailsByID', '/getServiceDetailsByID/:serviceID', args] as const
}

export function useGetGetServiceDetailsByIDServiceID<TError = unknown>(
  args: InferRequestType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>>
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
        ? getGetGetServiceDetailsByIDServiceIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.getServiceDetailsByID[':serviceID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetServiceDetailsByIDServiceID<TError = unknown>(
  args: InferRequestType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>>
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
        ? getGetGetServiceDetailsByIDServiceIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.getServiceDetailsByID[':serviceID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
