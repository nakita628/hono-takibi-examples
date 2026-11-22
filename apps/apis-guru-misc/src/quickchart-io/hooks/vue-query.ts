import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getChartKey() {
  return ['chart'] as const
}

export function getQrKey() {
  return ['qr'] as const
}

export function getChartQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chart.$get>>,
) {
  return ['chart', '/chart', toValue(args)] as const
}

export function getChartQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chart.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chart.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChart<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chart.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$get>>>>>,
          ReturnType<typeof getChartQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChartQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chart.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChartMutationKey() {
  return ['chart', '/chart', 'POST'] as const
}

export function getPostChartMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$post>>>>>,
    TError,
    InferRequestType<typeof client.chart.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chart.$post>) {
      return parseResponse(client.chart.$post(args, options))
    },
  })
}

export function usePostChart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$post>>>>>,
          TError,
          InferRequestType<typeof client.chart.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChartMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQrQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.qr.$get>>) {
  return ['qr', '/qr', toValue(args)] as const
}

export function getQrQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.qr.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQrQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.qr.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQr<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.qr.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$get>>>>>,
          ReturnType<typeof getQrQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQrQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.qr.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostQrMutationKey() {
  return ['qr', '/qr', 'POST'] as const
}

export function getPostQrMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$post>>>>>,
    TError,
    InferRequestType<typeof client.qr.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQrMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qr.$post>) {
      return parseResponse(client.qr.$post(args, options))
    },
  })
}

export function usePostQr<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$post>>>>>,
          TError,
          InferRequestType<typeof client.qr.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQrMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
