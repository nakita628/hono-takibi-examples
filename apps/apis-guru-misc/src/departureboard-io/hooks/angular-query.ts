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

export function injectGetArrivalsAndDeparturesByCRSCRS<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGetArrivalsAndDeparturesByCRSCRSQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectGetArrivalsByCRSCRS<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetArrivalsByCRSCRSQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGetDeparturesByCRSCRS<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGetDeparturesByCRSCRSQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectGetFastestDeparturesByCRSCRS<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGetFastestDeparturesByCRSCRSQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectGetNextDeparturesByCRSCRS<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGetNextDeparturesByCRSCRSQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectGetServiceDetailsByIDServiceID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGetServiceDetailsByIDServiceIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
