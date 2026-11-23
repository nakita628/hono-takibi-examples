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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1QueryKey() {
  return ['api', '/api/v1'] as const
}

export function getApiV1QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.$get>>>>>,
          ReturnType<typeof getApiV1QueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1HolidaysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.holidays.$get>>,
) {
  return ['api', '/api/v1/holidays', toValue(args)] as const
}

export function getApiV1HolidaysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.holidays.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1HolidaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.holidays.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Holidays<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.holidays.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.holidays.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.holidays.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.holidays.$get>>>
            >
          >,
          ReturnType<typeof getApiV1HolidaysQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.holidays.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HolidaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1HolidaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.holidays.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1HolidaysHolidayIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.holidays)[':holidayId']['$get']>>,
) {
  return ['api', '/api/v1/holidays/:holidayId', toValue(args)] as const
}

export function getApiV1HolidaysHolidayIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.holidays)[':holidayId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1HolidaysHolidayIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.holidays[':holidayId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1HolidaysHolidayId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.holidays)[':holidayId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.holidays)[':holidayId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.holidays)[':holidayId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.holidays)[':holidayId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1HolidaysHolidayIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.holidays)[':holidayId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HolidaysHolidayIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1HolidaysHolidayIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.holidays[':holidayId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ProvincesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.provinces.$get>>,
) {
  return ['api', '/api/v1/provinces', toValue(args)] as const
}

export function getApiV1ProvincesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.provinces.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ProvincesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.provinces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Provinces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.provinces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.provinces.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.provinces.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.provinces.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ProvincesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.provinces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProvincesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ProvincesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.provinces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ProvincesProvinceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.provinces)[':provinceId']['$get']>>,
) {
  return ['api', '/api/v1/provinces/:provinceId', toValue(args)] as const
}

export function getApiV1ProvincesProvinceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.provinces)[':provinceId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ProvincesProvinceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.provinces[':provinceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ProvincesProvinceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.provinces)[':provinceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.provinces)[':provinceId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.provinces)[':provinceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.provinces)[':provinceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ProvincesProvinceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.provinces)[':provinceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ProvincesProvinceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ProvincesProvinceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.provinces[':provinceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SpecQueryKey() {
  return ['api', '/api/v1/spec'] as const
}

export function getApiV1SpecQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SpecQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.spec.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Spec<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.spec.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.spec.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.spec.$get>>>>
          >,
          ReturnType<typeof getApiV1SpecQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.spec.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1SpecQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SpecQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.spec.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
