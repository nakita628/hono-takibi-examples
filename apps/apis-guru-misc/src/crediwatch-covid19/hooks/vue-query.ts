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

export function getApiV1StatusCallQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.status.call.$get>>,
) {
  return ['api', '/api/v1/status/call', toValue(args)] as const
}

export function getApiV1StatusCallQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.status.call.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1StatusCallQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.status.call.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1StatusCall<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.call.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.status.call.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.call.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.call.$get>>>
            >
          >,
          ReturnType<typeof getApiV1StatusCallQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.call.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatusCallQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1StatusCallQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.status.call.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1StatusSkuQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.status.sku.$get>>,
) {
  return ['api', '/api/v1/status/sku', toValue(args)] as const
}

export function getApiV1StatusSkuQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.status.sku.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1StatusSkuQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.status.sku.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1StatusSku<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.sku.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.status.sku.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.sku.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.sku.$get>>>
            >
          >,
          ReturnType<typeof getApiV1StatusSkuQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.sku.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatusSkuQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1StatusSkuQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.status.sku.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1VerifyNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.verify.name.$get>>,
) {
  return ['api', '/api/v1/verify/name', toValue(args)] as const
}

export function getApiV1VerifyNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.verify.name.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VerifyNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.verify.name.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VerifyName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.name.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.verify.name.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.name.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.name.$get>>>
            >
          >,
          ReturnType<typeof getApiV1VerifyNameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.name.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VerifyNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VerifyNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.verify.name.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1VerifyPhoneQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.verify.phone.$get>>,
) {
  return ['api', '/api/v1/verify/phone', toValue(args)] as const
}

export function getApiV1VerifyPhoneQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.verify.phone.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VerifyPhoneQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.verify.phone.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VerifyPhone<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.phone.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.verify.phone.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.phone.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.phone.$get>>>
            >
          >,
          ReturnType<typeof getApiV1VerifyPhoneQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.phone.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VerifyPhoneQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VerifyPhoneQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.verify.phone.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1VerifySkuQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.verify.sku.$get>>,
) {
  return ['api', '/api/v1/verify/sku', toValue(args)] as const
}

export function getApiV1VerifySkuQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.verify.sku.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VerifySkuQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.verify.sku.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1VerifySku<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.sku.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.verify.sku.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.sku.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.sku.$get>>>
            >
          >,
          ReturnType<typeof getApiV1VerifySkuQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.sku.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VerifySkuQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VerifySkuQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.verify.sku.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
