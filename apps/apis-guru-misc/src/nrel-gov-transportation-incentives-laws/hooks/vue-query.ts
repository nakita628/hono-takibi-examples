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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1OutputFormatKey() {
  return ['v1.{output_format}'] as const
}

export function getV1OutputFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['v1.:output_format']['$get']>>,
) {
  return ['v1.:output_format', '/v1.:output_format', toValue(args)] as const
}

export function getV1OutputFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['v1.:output_format']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['v1.:output_format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v1.:output_format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['v1.:output_format']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['v1.:output_format']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['v1.:output_format']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1OutputFormatQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v1.:output_format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['v1.:output_format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CategoryListOutputFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['category-list.:output_format']['$get']>
  >,
) {
  return ['v1', '/v1/category-list.:output_format', toValue(args)] as const
}

export function getV1CategoryListOutputFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['category-list.:output_format']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CategoryListOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['category-list.:output_format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CategoryListOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['category-list.:output_format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['category-list.:output_format']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['category-list.:output_format']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['category-list.:output_format']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1CategoryListOutputFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['category-list.:output_format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CategoryListOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CategoryListOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['category-list.:output_format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PocsOutputFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['pocs.:output_format']['$get']>>,
) {
  return ['v1', '/v1/pocs.:output_format', toValue(args)] as const
}

export function getV1PocsOutputFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['pocs.:output_format']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PocsOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['pocs.:output_format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PocsOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['pocs.:output_format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['pocs.:output_format']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['pocs.:output_format']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['pocs.:output_format']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PocsOutputFormatQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['pocs.:output_format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PocsOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PocsOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['pocs.:output_format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IdOutputFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':id.:output_format']['$get']>>,
) {
  return ['v1', '/v1/:id.:output_format', toValue(args)] as const
}

export function getV1IdOutputFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':id.:output_format']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IdOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':id.:output_format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IdOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':id.:output_format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':id.:output_format']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':id.:output_format']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':id.:output_format']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IdOutputFormatQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':id.:output_format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IdOutputFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IdOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':id.:output_format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
