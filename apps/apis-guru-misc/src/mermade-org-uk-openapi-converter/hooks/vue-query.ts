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

export function getBadgeKey() {
  return ['badge'] as const
}

export function getConvertKey() {
  return ['convert'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getValidateKey() {
  return ['validate'] as const
}

export function getBadgeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.badge.$get>>,
) {
  return ['badge', '/badge', toValue(args)] as const
}

export function getBadgeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.badge.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBadgeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.badge.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBadge<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badge.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.badge.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badge.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badge.$get>>>>>,
          ReturnType<typeof getBadgeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badge.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBadgeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBadgeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.badge.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConvertQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.convert.$get>>,
) {
  return ['convert', '/convert', toValue(args)] as const
}

export function getConvertQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.convert.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConvertQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.convert.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConvert<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.convert.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$get>>>>
          >,
          ReturnType<typeof getConvertQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConvertQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConvertQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.convert.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConvertMutationKey() {
  return ['convert', '/convert', 'POST'] as const
}

export function getPostConvertMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$post>>>>>,
    TError,
    InferRequestType<typeof client.convert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConvertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.convert.$post>) {
      return parseResponse(client.convert.$post(args, options))
    },
  })
}

export function usePostConvert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.convert.$post>,
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
  const mutationDefaults = getPostConvertMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStatusQueryKey() {
  return ['status', '/status'] as const
}

export function getStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          ReturnType<typeof getStatusQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getValidateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.validate.$get>>,
) {
  return ['validate', '/validate', toValue(args)] as const
}

export function getValidateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.validate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getValidateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.validate.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.validate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>
          >,
          ReturnType<typeof getValidateQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getValidateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getValidateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.validate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostValidateMutationKey() {
  return ['validate', '/validate', 'POST'] as const
}

export function getPostValidateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$post>>>>>,
    TError,
    InferRequestType<typeof client.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.validate.$post>) {
      return parseResponse(client.validate.$post(args, options))
    },
  })
}

export function usePostValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.validate.$post>,
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
  const mutationDefaults = getPostValidateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
