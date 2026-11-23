import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getReisezentrenKey() {
  return ['reisezentren'] as const
}

export function getGetReisezentrenKey(args: InferRequestType<typeof client.reisezentren.$get>) {
  return ['reisezentren', '/reisezentren', args] as const
}

export function useGetReisezentren<TError = unknown>(
  args: InferRequestType<typeof client.reisezentren.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reisezentren.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReisezentrenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reisezentren.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reisezentren.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReisezentren<TError = unknown>(
  args: InferRequestType<typeof client.reisezentren.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reisezentren.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReisezentrenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reisezentren.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reisezentren.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReisezentrenLocLatLonKey(
  args: InferRequestType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>,
) {
  return ['reisezentren', '/reisezentren/loc/:lat/:lon', args] as const
}

export function useGetReisezentrenLocLatLon<TError = unknown>(
  args: InferRequestType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>>
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
        ? getGetReisezentrenLocLatLonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reisezentren.loc[':lat'][':lon'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReisezentrenLocLatLon<TError = unknown>(
  args: InferRequestType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>>
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
        ? getGetReisezentrenLocLatLonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reisezentren.loc[':lat'][':lon'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReisezentrenLocLatLonDistKey(
  args: InferRequestType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>,
) {
  return ['reisezentren', '/reisezentren/loc/:lat/:lon/:dist', args] as const
}

export function useGetReisezentrenLocLatLonDist<TError = unknown>(
  args: InferRequestType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>>
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
        ? getGetReisezentrenLocLatLonDistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.reisezentren.loc[':lat'][':lon'][':dist'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReisezentrenLocLatLonDist<TError = unknown>(
  args: InferRequestType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>>
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
        ? getGetReisezentrenLocLatLonDistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.reisezentren.loc[':lat'][':lon'][':dist'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReisezentrenIdKey(
  args: InferRequestType<(typeof client.reisezentren)[':id']['$get']>,
) {
  return ['reisezentren', '/reisezentren/:id', args] as const
}

export function useGetReisezentrenId<TError = unknown>(
  args: InferRequestType<(typeof client.reisezentren)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reisezentren)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetReisezentrenIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reisezentren)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reisezentren[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReisezentrenId<TError = unknown>(
  args: InferRequestType<(typeof client.reisezentren)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reisezentren)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetReisezentrenIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reisezentren)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reisezentren[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
