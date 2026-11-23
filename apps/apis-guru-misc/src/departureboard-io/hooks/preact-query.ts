import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function getGetArrivalsAndDeparturesByCRSCRSQueryKey(
  args: InferRequestType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>,
) {
  return ['getArrivalsAndDeparturesByCRS', '/getArrivalsAndDeparturesByCRS/:CRS', args] as const
}

export function getGetArrivalsAndDeparturesByCRSCRSQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetArrivalsAndDeparturesByCRSCRSQueryKey>
  >({
    queryKey: getGetArrivalsAndDeparturesByCRSCRSQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getArrivalsAndDeparturesByCRS[':CRS'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetArrivalsAndDeparturesByCRSCRS<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetArrivalsAndDeparturesByCRSCRSQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGetArrivalsAndDeparturesByCRSCRSQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetArrivalsAndDeparturesByCRSCRS<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetArrivalsAndDeparturesByCRSCRSQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGetArrivalsAndDeparturesByCRSCRSQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetArrivalsByCRSCRSQueryKey(
  args: InferRequestType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>,
) {
  return ['getArrivalsByCRS', '/getArrivalsByCRS/:CRS', args] as const
}

export function getGetArrivalsByCRSCRSQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetArrivalsByCRSCRSQueryKey>
  >({
    queryKey: getGetArrivalsByCRSCRSQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getArrivalsByCRS[':CRS'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetArrivalsByCRSCRS<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetArrivalsByCRSCRSQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetArrivalsByCRSCRSQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetArrivalsByCRSCRS<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetArrivalsByCRSCRSQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetArrivalsByCRSCRSQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGetDeparturesByCRSCRSQueryKey(
  args: InferRequestType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>,
) {
  return ['getDeparturesByCRS', '/getDeparturesByCRS/:CRS', args] as const
}

export function getGetDeparturesByCRSCRSQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetDeparturesByCRSCRSQueryKey>
  >({
    queryKey: getGetDeparturesByCRSCRSQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getDeparturesByCRS[':CRS'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetDeparturesByCRSCRS<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetDeparturesByCRSCRSQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGetDeparturesByCRSCRSQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetDeparturesByCRSCRS<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetDeparturesByCRSCRSQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGetDeparturesByCRSCRSQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetFastestDeparturesByCRSCRSQueryKey(
  args: InferRequestType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>,
) {
  return ['getFastestDeparturesByCRS', '/getFastestDeparturesByCRS/:CRS', args] as const
}

export function getGetFastestDeparturesByCRSCRSQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetFastestDeparturesByCRSCRSQueryKey>
  >({
    queryKey: getGetFastestDeparturesByCRSCRSQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getFastestDeparturesByCRS[':CRS'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetFastestDeparturesByCRSCRS<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetFastestDeparturesByCRSCRSQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGetFastestDeparturesByCRSCRSQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetFastestDeparturesByCRSCRS<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetFastestDeparturesByCRSCRSQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGetFastestDeparturesByCRSCRSQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetNextDeparturesByCRSCRSQueryKey(
  args: InferRequestType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>,
) {
  return ['getNextDeparturesByCRS', '/getNextDeparturesByCRS/:CRS', args] as const
}

export function getGetNextDeparturesByCRSCRSQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetNextDeparturesByCRSCRSQueryKey>
  >({
    queryKey: getGetNextDeparturesByCRSCRSQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getNextDeparturesByCRS[':CRS'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetNextDeparturesByCRSCRS<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetNextDeparturesByCRSCRSQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGetNextDeparturesByCRSCRSQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetNextDeparturesByCRSCRS<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetNextDeparturesByCRSCRSQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGetNextDeparturesByCRSCRSQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetServiceDetailsByIDServiceIDQueryKey(
  args: InferRequestType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>,
) {
  return ['getServiceDetailsByID', '/getServiceDetailsByID/:serviceID', args] as const
}

export function getGetServiceDetailsByIDServiceIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetServiceDetailsByIDServiceIDQueryKey>
  >({
    queryKey: getGetServiceDetailsByIDServiceIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getServiceDetailsByID[':serviceID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetServiceDetailsByIDServiceID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetServiceDetailsByIDServiceIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGetServiceDetailsByIDServiceIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetServiceDetailsByIDServiceID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetServiceDetailsByIDServiceIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGetServiceDetailsByIDServiceIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
