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

export function getAdvancedKey() {
  return ['advanced'] as const
}

export function getBasicKey() {
  return ['basic'] as const
}

export function getStandardKey() {
  return ['standard'] as const
}

export function getAdvancedAsyncFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.advanced.async)[':format']['$get']>>,
) {
  return ['advanced', '/advanced/async/:format', toValue(args)] as const
}

export function getAdvancedAsyncFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.advanced.async)[':format']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdvancedAsyncFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.advanced.async[':format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdvancedAsyncFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.advanced.async)[':format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.advanced.async)[':format']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.advanced.async)[':format']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.advanced.async)[':format']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdvancedAsyncFormatQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.advanced.async)[':format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdvancedAsyncFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdvancedAsyncFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.advanced.async[':format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdvancedFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.advanced)[':format']['$get']>>,
) {
  return ['advanced', '/advanced/:format', toValue(args)] as const
}

export function getAdvancedFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.advanced)[':format']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdvancedFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.advanced[':format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdvancedFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.advanced)[':format']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':format']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':format']['$get']>>>
            >
          >,
          ReturnType<typeof getAdvancedFormatQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdvancedFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdvancedFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.advanced[':format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBasicFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.basic)[':format']['$get']>>,
) {
  return ['basic', '/basic/:format', toValue(args)] as const
}

export function getBasicFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.basic)[':format']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBasicFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.basic[':format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBasicFormat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.basic)[':format']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.basic)[':format']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.basic)[':format']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.basic)[':format']['$get']>>>
            >
          >,
          ReturnType<typeof getBasicFormatQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.basic)[':format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBasicFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBasicFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.basic[':format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStandardFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.standard)[':format']['$get']>>,
) {
  return ['standard', '/standard/:format', toValue(args)] as const
}

export function getStandardFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.standard)[':format']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStandardFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.standard[':format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStandardFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.standard)[':format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.standard)[':format']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.standard)[':format']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.standard)[':format']['$get']>>>
            >
          >,
          ReturnType<typeof getStandardFormatQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.standard)[':format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStandardFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStandardFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.standard[':format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
