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

export function getAnythingKey() {
  return ['anything'] as const
}

export function getAnythingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anything)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['anything', '/anything/:id', keyArgs] as const
}

export function getAnythingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anything)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anything)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAnythingIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAnythingIdMutationKey() {
  return ['anything', '/anything/:id', 'POST'] as const
}

export function getPostAnythingIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.anything)[':id']['$post']>) {
      return parseResponse(client.anything[':id'].$post(args, options))
    },
  })
}

export function usePostAnythingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.anything)[':id']['$post']>,
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
  const mutationDefaults = getPostAnythingIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAnythingIdActionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anything)[':id'][':action']['$get']>>,
) {
  return ['anything', '/anything/:id/:action', toValue(args)] as const
}

export function getAnythingIdActionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anything)[':id'][':action']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingIdActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything[':id'][':action'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingIdAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id'][':action']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anything)[':id'][':action']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)[':id'][':action']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)[':id'][':action']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnythingIdActionQueryKey>
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
          Awaited<ReturnType<(typeof client.anything)[':id'][':action']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingIdActionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingIdActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything[':id'][':action'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnythingIdActionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.anything)[':id'][':action'][':id']['$get']>
  >,
) {
  return ['anything', '/anything/:id/:action/:id', toValue(args)] as const
}

export function getAnythingIdActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.anything)[':id'][':action'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingIdActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything[':id'][':action'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingIdActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anything)[':id'][':action'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.anything)[':id'][':action'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)[':id'][':action'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)[':id'][':action'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnythingIdActionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.anything)[':id'][':action'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingIdActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingIdActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything[':id'][':action'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnythingIdOverrideQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anything)[':id']['override']['$get']>>,
) {
  return ['anything', '/anything/:id/override', toValue(args)] as const
}

export function getAnythingIdOverrideQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anything)[':id']['override']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingIdOverrideQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything[':id'].override.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingIdOverride<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['override']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anything)[':id']['override']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)[':id']['override']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)[':id']['override']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnythingIdOverrideQueryKey>
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
          Awaited<ReturnType<(typeof client.anything)[':id']['override']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingIdOverrideQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingIdOverrideQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything[':id'].override.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
