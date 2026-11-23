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

export function getCari7Key() {
  return ['cari7'] as const
}

export function getParmaKey() {
  return ['parma'] as const
}

export function getRouteKey() {
  return ['route'] as const
}

export function getCari7AmbientDoseQueryKey(
  args: InferRequestType<typeof client.cari7.ambient_dose.$get>,
) {
  return ['cari7', '/cari7/ambient_dose', args] as const
}

export function getCari7AmbientDoseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cari7.ambient_dose.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cari7.ambient_dose.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cari7.ambient_dose.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCari7AmbientDoseQueryKey>
  >({
    queryKey: getCari7AmbientDoseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cari7.ambient_dose.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCari7AmbientDose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cari7.ambient_dose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cari7.ambient_dose.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cari7.ambient_dose.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCari7AmbientDoseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCari7AmbientDoseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCari7AmbientDose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cari7.ambient_dose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cari7.ambient_dose.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cari7.ambient_dose.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCari7AmbientDoseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCari7AmbientDoseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCari7EffectiveDoseQueryKey(
  args: InferRequestType<typeof client.cari7.effective_dose.$get>,
) {
  return ['cari7', '/cari7/effective_dose', args] as const
}

export function getCari7EffectiveDoseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cari7.effective_dose.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cari7.effective_dose.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cari7.effective_dose.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCari7EffectiveDoseQueryKey>
  >({
    queryKey: getCari7EffectiveDoseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cari7.effective_dose.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCari7EffectiveDose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cari7.effective_dose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cari7.effective_dose.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cari7.effective_dose.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCari7EffectiveDoseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCari7EffectiveDoseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCari7EffectiveDose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cari7.effective_dose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cari7.effective_dose.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cari7.effective_dose.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCari7EffectiveDoseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCari7EffectiveDoseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getParmaAmbientDoseQueryKey(
  args: InferRequestType<typeof client.parma.ambient_dose.$get>,
) {
  return ['parma', '/parma/ambient_dose', args] as const
}

export function getParmaAmbientDoseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parma.ambient_dose.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.parma.ambient_dose.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parma.ambient_dose.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getParmaAmbientDoseQueryKey>
  >({
    queryKey: getParmaAmbientDoseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.parma.ambient_dose.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useParmaAmbientDose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parma.ambient_dose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.parma.ambient_dose.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.parma.ambient_dose.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getParmaAmbientDoseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getParmaAmbientDoseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseParmaAmbientDose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parma.ambient_dose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.parma.ambient_dose.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.parma.ambient_dose.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getParmaAmbientDoseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getParmaAmbientDoseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getParmaDifferentialIntensityQueryKey(
  args: InferRequestType<typeof client.parma.differential_intensity.$get>,
) {
  return ['parma', '/parma/differential_intensity', args] as const
}

export function getParmaDifferentialIntensityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.parma.differential_intensity.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.parma.differential_intensity.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.parma.differential_intensity.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getParmaDifferentialIntensityQueryKey>
  >({
    queryKey: getParmaDifferentialIntensityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.parma.differential_intensity.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useParmaDifferentialIntensity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.parma.differential_intensity.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.parma.differential_intensity.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.parma.differential_intensity.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getParmaDifferentialIntensityQueryKey>
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
      ...getParmaDifferentialIntensityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseParmaDifferentialIntensity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.parma.differential_intensity.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.parma.differential_intensity.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.parma.differential_intensity.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getParmaDifferentialIntensityQueryKey>
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
      ...getParmaDifferentialIntensityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getParmaEffectiveDoseQueryKey(
  args: InferRequestType<typeof client.parma.effective_dose.$get>,
) {
  return ['parma', '/parma/effective_dose', args] as const
}

export function getParmaEffectiveDoseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parma.effective_dose.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.parma.effective_dose.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parma.effective_dose.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getParmaEffectiveDoseQueryKey>
  >({
    queryKey: getParmaEffectiveDoseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.parma.effective_dose.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useParmaEffectiveDose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parma.effective_dose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.parma.effective_dose.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.parma.effective_dose.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getParmaEffectiveDoseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getParmaEffectiveDoseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseParmaEffectiveDose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parma.effective_dose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.parma.effective_dose.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.parma.effective_dose.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getParmaEffectiveDoseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getParmaEffectiveDoseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRouteAmbientDoseQueryKey(
  args: InferRequestType<typeof client.route.ambient_dose.$get>,
) {
  return ['route', '/route/ambient_dose', args] as const
}

export function getRouteAmbientDoseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.ambient_dose.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.route.ambient_dose.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.ambient_dose.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRouteAmbientDoseQueryKey>
  >({
    queryKey: getRouteAmbientDoseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.route.ambient_dose.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRouteAmbientDose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.ambient_dose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.route.ambient_dose.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.route.ambient_dose.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRouteAmbientDoseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRouteAmbientDoseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRouteAmbientDose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.ambient_dose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.route.ambient_dose.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.route.ambient_dose.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRouteAmbientDoseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRouteAmbientDoseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRouteEffectiveDoseQueryKey(
  args: InferRequestType<typeof client.route.effective_dose.$get>,
) {
  return ['route', '/route/effective_dose', args] as const
}

export function getRouteEffectiveDoseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.effective_dose.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.route.effective_dose.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.effective_dose.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRouteEffectiveDoseQueryKey>
  >({
    queryKey: getRouteEffectiveDoseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.route.effective_dose.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRouteEffectiveDose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.effective_dose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.route.effective_dose.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.route.effective_dose.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRouteEffectiveDoseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRouteEffectiveDoseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRouteEffectiveDose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.effective_dose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.route.effective_dose.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.route.effective_dose.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRouteEffectiveDoseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRouteEffectiveDoseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
