import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAliasesKey() {
  return ['aliases'] as const
}

export function getClicksKey() {
  return ['clicks'] as const
}

export function getAliasesQueryKey(args: InferRequestType<typeof client.aliases.$get>) {
  return ['aliases', '/aliases', args] as const
}

export function getAliasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.aliases.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAliasesQueryKey>
  >({
    queryKey: getAliasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aliases.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.aliases.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAliasesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutAliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$put>>>>>,
        TError,
        InferRequestType<typeof client.aliases.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAliasesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$post>>>>>,
        TError,
        InferRequestType<typeof client.aliases.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAliasesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.aliases.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAliasesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAliasesAllQueryKey(args: InferRequestType<typeof client.aliases.all.$get>) {
  return ['aliases', '/aliases/all', args] as const
}

export function getAliasesAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.aliases.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.all.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAliasesAllQueryKey>
  >({
    queryKey: getAliasesAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aliases.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAliasesAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.aliases.all.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAliasesAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAliasesAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getClicksQueryKey(args: InferRequestType<typeof client.clicks.$get>) {
  return ['clicks', '/clicks', args] as const
}

export function getClicksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clicks.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.clicks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clicks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClicksQueryKey>
  >({
    queryKey: getClicksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clicks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createClicks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clicks.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.clicks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clicks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getClicksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClicksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostClicksPg<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clicks.pg.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.clicks.pg.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClicksPgMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
