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
  args: MaybeRefOrGetter<InferRequestType<typeof client.cari7.ambient_dose.$get>>,
) {
  return ['cari7', '/cari7/ambient_dose', toValue(args)] as const
}

export function getCari7AmbientDoseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cari7.ambient_dose.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCari7AmbientDoseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cari7.ambient_dose.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCari7AmbientDose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cari7.ambient_dose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cari7.ambient_dose.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cari7.ambient_dose.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cari7.ambient_dose.$get>>>
            >
          >,
          ReturnType<typeof getCari7AmbientDoseQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cari7.ambient_dose.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCari7AmbientDoseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCari7AmbientDoseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cari7.ambient_dose.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCari7EffectiveDoseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cari7.effective_dose.$get>>,
) {
  return ['cari7', '/cari7/effective_dose', toValue(args)] as const
}

export function getCari7EffectiveDoseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cari7.effective_dose.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCari7EffectiveDoseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cari7.effective_dose.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCari7EffectiveDose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cari7.effective_dose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cari7.effective_dose.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cari7.effective_dose.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cari7.effective_dose.$get>>>
            >
          >,
          ReturnType<typeof getCari7EffectiveDoseQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cari7.effective_dose.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCari7EffectiveDoseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCari7EffectiveDoseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cari7.effective_dose.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getParmaAmbientDoseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.parma.ambient_dose.$get>>,
) {
  return ['parma', '/parma/ambient_dose', toValue(args)] as const
}

export function getParmaAmbientDoseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.parma.ambient_dose.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getParmaAmbientDoseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.parma.ambient_dose.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useParmaAmbientDose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parma.ambient_dose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.parma.ambient_dose.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.parma.ambient_dose.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.parma.ambient_dose.$get>>>
            >
          >,
          ReturnType<typeof getParmaAmbientDoseQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parma.ambient_dose.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getParmaAmbientDoseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getParmaAmbientDoseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.parma.ambient_dose.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getParmaDifferentialIntensityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.parma.differential_intensity.$get>>,
) {
  return ['parma', '/parma/differential_intensity', toValue(args)] as const
}

export function getParmaDifferentialIntensityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.parma.differential_intensity.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getParmaDifferentialIntensityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.parma.differential_intensity.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useParmaDifferentialIntensity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.parma.differential_intensity.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.parma.differential_intensity.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.parma.differential_intensity.$get>>
              >
            >
          >,
          ReturnType<typeof getParmaDifferentialIntensityQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.parma.differential_intensity.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getParmaDifferentialIntensityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getParmaDifferentialIntensityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.parma.differential_intensity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getParmaEffectiveDoseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.parma.effective_dose.$get>>,
) {
  return ['parma', '/parma/effective_dose', toValue(args)] as const
}

export function getParmaEffectiveDoseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.parma.effective_dose.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getParmaEffectiveDoseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.parma.effective_dose.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useParmaEffectiveDose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parma.effective_dose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.parma.effective_dose.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.parma.effective_dose.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.parma.effective_dose.$get>>>
            >
          >,
          ReturnType<typeof getParmaEffectiveDoseQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parma.effective_dose.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getParmaEffectiveDoseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getParmaEffectiveDoseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.parma.effective_dose.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRouteAmbientDoseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.route.ambient_dose.$get>>,
) {
  return ['route', '/route/ambient_dose', toValue(args)] as const
}

export function getRouteAmbientDoseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.route.ambient_dose.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRouteAmbientDoseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.route.ambient_dose.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRouteAmbientDose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.ambient_dose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.route.ambient_dose.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.route.ambient_dose.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.route.ambient_dose.$get>>>
            >
          >,
          ReturnType<typeof getRouteAmbientDoseQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.ambient_dose.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRouteAmbientDoseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRouteAmbientDoseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.route.ambient_dose.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRouteEffectiveDoseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.route.effective_dose.$get>>,
) {
  return ['route', '/route/effective_dose', toValue(args)] as const
}

export function getRouteEffectiveDoseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.route.effective_dose.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRouteEffectiveDoseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.route.effective_dose.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRouteEffectiveDose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.effective_dose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.route.effective_dose.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.route.effective_dose.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.route.effective_dose.$get>>>
            >
          >,
          ReturnType<typeof getRouteEffectiveDoseQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.effective_dose.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRouteEffectiveDoseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRouteEffectiveDoseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.route.effective_dose.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
