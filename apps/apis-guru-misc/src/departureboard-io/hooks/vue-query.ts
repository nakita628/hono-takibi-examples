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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>
  >,
) {
  return [
    'getArrivalsAndDeparturesByCRS',
    '/getArrivalsAndDeparturesByCRS/:CRS',
    toValue(args),
  ] as const
}

export function getGetArrivalsAndDeparturesByCRSCRSQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetArrivalsAndDeparturesByCRSCRSQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getArrivalsAndDeparturesByCRS[':CRS'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGetArrivalsAndDeparturesByCRSCRSQueryKey>
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
          Awaited<ReturnType<(typeof client.getArrivalsAndDeparturesByCRS)[':CRS']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetArrivalsAndDeparturesByCRSCRSQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetArrivalsAndDeparturesByCRSCRSQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getArrivalsAndDeparturesByCRS[':CRS'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetArrivalsByCRSCRSQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>>,
) {
  return ['getArrivalsByCRS', '/getArrivalsByCRS/:CRS', toValue(args)] as const
}

export function getGetArrivalsByCRSCRSQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetArrivalsByCRSCRSQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getArrivalsByCRS[':CRS'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetArrivalsByCRSCRS<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGetArrivalsByCRSCRSQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.getArrivalsByCRS)[':CRS']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetArrivalsByCRSCRSQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetArrivalsByCRSCRSQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getArrivalsByCRS[':CRS'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetDeparturesByCRSCRSQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>>,
) {
  return ['getDeparturesByCRS', '/getDeparturesByCRS/:CRS', toValue(args)] as const
}

export function getGetDeparturesByCRSCRSQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetDeparturesByCRSCRSQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getDeparturesByCRS[':CRS'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetDeparturesByCRSCRS<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGetDeparturesByCRSCRSQueryKey>
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
          Awaited<ReturnType<(typeof client.getDeparturesByCRS)[':CRS']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetDeparturesByCRSCRSQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetDeparturesByCRSCRSQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getDeparturesByCRS[':CRS'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetFastestDeparturesByCRSCRSQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>
  >,
) {
  return ['getFastestDeparturesByCRS', '/getFastestDeparturesByCRS/:CRS', toValue(args)] as const
}

export function getGetFastestDeparturesByCRSCRSQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetFastestDeparturesByCRSCRSQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getFastestDeparturesByCRS[':CRS'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGetFastestDeparturesByCRSCRSQueryKey>
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
          Awaited<ReturnType<(typeof client.getFastestDeparturesByCRS)[':CRS']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetFastestDeparturesByCRSCRSQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetFastestDeparturesByCRSCRSQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getFastestDeparturesByCRS[':CRS'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetNextDeparturesByCRSCRSQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>>,
) {
  return ['getNextDeparturesByCRS', '/getNextDeparturesByCRS/:CRS', toValue(args)] as const
}

export function getGetNextDeparturesByCRSCRSQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetNextDeparturesByCRSCRSQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getNextDeparturesByCRS[':CRS'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGetNextDeparturesByCRSCRSQueryKey>
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
          Awaited<ReturnType<(typeof client.getNextDeparturesByCRS)[':CRS']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetNextDeparturesByCRSCRSQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetNextDeparturesByCRSCRSQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getNextDeparturesByCRS[':CRS'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetServiceDetailsByIDServiceIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>
  >,
) {
  return ['getServiceDetailsByID', '/getServiceDetailsByID/:serviceID', toValue(args)] as const
}

export function getGetServiceDetailsByIDServiceIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetServiceDetailsByIDServiceIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getServiceDetailsByID[':serviceID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGetServiceDetailsByIDServiceIDQueryKey>
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
          Awaited<ReturnType<(typeof client.getServiceDetailsByID)[':serviceID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetServiceDetailsByIDServiceIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetServiceDetailsByIDServiceIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getServiceDetailsByID[':serviceID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
