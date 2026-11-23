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

export function getProxyKey() {
  return ['proxy'] as const
}

export function getProxyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.proxy.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['proxy', '/proxy', keyArgs] as const
}

export function getProxyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.proxy.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProxyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.proxy.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProxy<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.proxy.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
          ReturnType<typeof getProxyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProxyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProxyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.proxy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutProxyMutationKey() {
  return ['proxy', '/proxy', 'PUT'] as const
}

export function getPutProxyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$put>>>>>,
    TError,
    InferRequestType<typeof client.proxy.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutProxyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.proxy.$put>) {
      return parseResponse(client.proxy.$put(args, options))
    },
  })
}

export function usePutProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$put>>>>>,
          TError,
          InferRequestType<typeof client.proxy.$put>,
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
  const mutationDefaults = getPutProxyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostProxyMutationKey() {
  return ['proxy', '/proxy', 'POST'] as const
}

export function getPostProxyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$post>>>>>,
    TError,
    InferRequestType<typeof client.proxy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProxyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.proxy.$post>) {
      return parseResponse(client.proxy.$post(args, options))
    },
  })
}

export function usePostProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$post>>>>>,
          TError,
          InferRequestType<typeof client.proxy.$post>,
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
  const mutationDefaults = getPostProxyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteProxyMutationKey() {
  return ['proxy', '/proxy', 'DELETE'] as const
}

export function getDeleteProxyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$delete>>>>>,
    TError,
    InferRequestType<typeof client.proxy.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProxyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.proxy.$delete>) {
      return parseResponse(client.proxy.$delete(args, options))
    },
  })
}

export function useDeleteProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.proxy.$delete>,
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
  const mutationDefaults = getDeleteProxyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptionsProxyMutationKey() {
  return ['proxy', '/proxy', 'OPTIONS'] as const
}

export function getOptionsProxyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$options>>>>>,
    TError,
    InferRequestType<typeof client.proxy.$options>,
    TOnMutateResult
  >({
    mutationKey: getOptionsProxyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.proxy.$options>) {
      return parseResponse(client.proxy.$options(args, options))
    },
  })
}

export function useOptionsProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$options>>>>
          >,
          TError,
          InferRequestType<typeof client.proxy.$options>,
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
  const mutationDefaults = getOptionsProxyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchProxyMutationKey() {
  return ['proxy', '/proxy', 'PATCH'] as const
}

export function getPatchProxyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$patch>>>>>,
    TError,
    InferRequestType<typeof client.proxy.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchProxyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.proxy.$patch>) {
      return parseResponse(client.proxy.$patch(args, options))
    },
  })
}

export function usePatchProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.proxy.$patch>,
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
  const mutationDefaults = getPatchProxyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
