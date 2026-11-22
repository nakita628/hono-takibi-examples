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

export function getRiddleKey() {
  return ['riddle'] as const
}

export function getRiddleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.riddle.$get>>,
) {
  return ['riddle', '/riddle', toValue(args)] as const
}

export function getRiddleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.riddle.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRiddleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.riddle.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRiddle<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.riddle.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$get>>>>>,
          ReturnType<typeof getRiddleQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRiddleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRiddleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.riddle.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRiddleMutationKey() {
  return ['riddle', '/riddle', 'PUT'] as const
}

export function getPutRiddleMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$put>>>>>,
    TError,
    InferRequestType<typeof client.riddle.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutRiddleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.riddle.$put>) {
      return parseResponse(client.riddle.$put(args, options))
    },
  })
}

export function usePutRiddle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$put>>>>>,
          TError,
          InferRequestType<typeof client.riddle.$put>,
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
  const mutationDefaults = getPutRiddleMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRiddleMutationKey() {
  return ['riddle', '/riddle', 'POST'] as const
}

export function getPostRiddleMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$post>>>>>,
    TError,
    InferRequestType<typeof client.riddle.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRiddleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.riddle.$post>) {
      return parseResponse(client.riddle.$post(args, options))
    },
  })
}

export function usePostRiddle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.riddle.$post>,
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
  const mutationDefaults = getPostRiddleMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRiddleMutationKey() {
  return ['riddle', '/riddle', 'DELETE'] as const
}

export function getDeleteRiddleMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$delete>>>>>,
    TError,
    InferRequestType<typeof client.riddle.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRiddleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.riddle.$delete>) {
      return parseResponse(client.riddle.$delete(args, options))
    },
  })
}

export function useDeleteRiddle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.riddle.$delete>,
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
  const mutationDefaults = getDeleteRiddleMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRiddleRandomQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.riddle.random.$get>>,
) {
  return ['riddle', '/riddle/random', toValue(args)] as const
}

export function getRiddleRandomQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.riddle.random.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRiddleRandomQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.riddle.random.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRiddleRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.riddle.random.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.random.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.random.$get>>>>
          >,
          ReturnType<typeof getRiddleRandomQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.random.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRiddleRandomQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRiddleRandomQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.riddle.random.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRiddleSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.riddle.search.$get>>,
) {
  return ['riddle', '/riddle/search', toValue(args)] as const
}

export function getRiddleSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.riddle.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRiddleSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.riddle.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRiddleSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.riddle.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.search.$get>>>>
          >,
          ReturnType<typeof getRiddleSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRiddleSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRiddleSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.riddle.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
