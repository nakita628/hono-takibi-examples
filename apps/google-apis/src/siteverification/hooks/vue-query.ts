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

export function getTokenKey() {
  return ['token'] as const
}

export function getWebResourceKey() {
  return ['webResource'] as const
}

export function getPostTokenMutationKey() {
  return ['token', '/token', 'POST'] as const
}

export function getPostTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.token.$post>) {
      return parseResponse(client.token.$post(args, options))
    },
  })
}

export function usePostToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$post>>>>>,
          TError,
          InferRequestType<typeof client.token.$post>,
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
  const mutationDefaults = getPostTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebResourceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webResource.$get>>,
) {
  return ['webResource', '/webResource', toValue(args)] as const
}

export function getWebResourceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webResource.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebResourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webResource.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWebResource<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webResource.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webResource.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webResource.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webResource.$get>>>>
          >,
          ReturnType<typeof getWebResourceQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webResource.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebResourceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebResourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webResource.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebResourceMutationKey() {
  return ['webResource', '/webResource', 'POST'] as const
}

export function getPostWebResourceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webResource.$post>>>>>,
    TError,
    InferRequestType<typeof client.webResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webResource.$post>) {
      return parseResponse(client.webResource.$post(args, options))
    },
  })
}

export function usePostWebResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webResource.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.webResource.$post>,
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
  const mutationDefaults = getPostWebResourceMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebResourceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webResource)[':id']['$get']>>,
) {
  return ['webResource', '/webResource/:id', toValue(args)] as const
}

export function getWebResourceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webResource)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebResourceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webResource[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webResource)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webResource)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.webResource)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.webResource)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getWebResourceIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.webResource)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebResourceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebResourceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webResource[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWebResourceIdMutationKey() {
  return ['webResource', '/webResource/:id', 'PUT'] as const
}

export function getPutWebResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webResource)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webResource)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebResourceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webResource)[':id']['$put']>) {
      return parseResponse(client.webResource[':id'].$put(args, options))
    },
  })
}

export function usePutWebResourceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.webResource)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.webResource)[':id']['$put']>,
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
  const mutationDefaults = getPutWebResourceIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteWebResourceIdMutationKey() {
  return ['webResource', '/webResource/:id', 'DELETE'] as const
}

export function getDeleteWebResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webResource)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webResource)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebResourceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webResource)[':id']['$delete']>) {
      return parseResponse(client.webResource[':id'].$delete(args, options))
    },
  })
}

export function useDeleteWebResourceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webResource)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webResource)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteWebResourceIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchWebResourceIdMutationKey() {
  return ['webResource', '/webResource/:id', 'PATCH'] as const
}

export function getPatchWebResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webResource)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webResource)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWebResourceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webResource)[':id']['$patch']>) {
      return parseResponse(client.webResource[':id'].$patch(args, options))
    },
  })
}

export function usePatchWebResourceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webResource)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webResource)[':id']['$patch']>,
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
  const mutationDefaults = getPatchWebResourceIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
