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

export function getAliasesKey() {
  return ['aliases'] as const
}

export function getClicksKey() {
  return ['clicks'] as const
}

export function getAliasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aliases.$get>>,
) {
  return ['aliases', '/aliases', toValue(args)] as const
}

export function getAliasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aliases.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAliasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aliases.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aliases.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>
          >,
          ReturnType<typeof getAliasesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAliasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAliasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aliases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAliasesMutationKey() {
  return ['aliases', '/aliases', 'PUT'] as const
}

export function getPutAliasesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$put>>>>>,
    TError,
    InferRequestType<typeof client.aliases.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAliasesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.aliases.$put>) {
      return parseResponse(client.aliases.$put(args, options))
    },
  })
}

export function usePutAliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.aliases.$put>,
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
  const mutationDefaults = getPutAliasesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAliasesMutationKey() {
  return ['aliases', '/aliases', 'POST'] as const
}

export function getPostAliasesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$post>>>>>,
    TError,
    InferRequestType<typeof client.aliases.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAliasesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.aliases.$post>) {
      return parseResponse(client.aliases.$post(args, options))
    },
  })
}

export function usePostAliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.aliases.$post>,
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
  const mutationDefaults = getPostAliasesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAliasesMutationKey() {
  return ['aliases', '/aliases', 'DELETE'] as const
}

export function getDeleteAliasesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$delete>>>>>,
    TError,
    InferRequestType<typeof client.aliases.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAliasesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.aliases.$delete>) {
      return parseResponse(client.aliases.$delete(args, options))
    },
  })
}

export function useDeleteAliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.aliases.$delete>,
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
  const mutationDefaults = getDeleteAliasesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAliasesAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aliases.all.$get>>,
) {
  return ['aliases', '/aliases/all', toValue(args)] as const
}

export function getAliasesAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aliases.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAliasesAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aliases.all.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAliasesAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aliases.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.all.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.all.$get>>>>
          >,
          ReturnType<typeof getAliasesAllQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.all.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAliasesAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAliasesAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aliases.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClicksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clicks.$get>>,
) {
  return ['clicks', '/clicks', toValue(args)] as const
}

export function getClicksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clicks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClicksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clicks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useClicks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clicks.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clicks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clicks.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clicks.$get>>>>>,
          ReturnType<typeof getClicksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clicks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClicksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClicksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clicks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostClicksPgMutationKey() {
  return ['clicks', '/clicks/pg', 'POST'] as const
}

export function getPostClicksPgMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clicks.pg.$post>>>>>,
    TError,
    InferRequestType<typeof client.clicks.pg.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClicksPgMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.clicks.pg.$post>) {
      return parseResponse(client.clicks.pg.$post(args, options))
    },
  })
}

export function usePostClicksPg<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clicks.pg.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.clicks.pg.$post>,
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
  const mutationDefaults = getPostClicksPgMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
