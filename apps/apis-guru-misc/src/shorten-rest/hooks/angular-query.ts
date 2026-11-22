import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectAliases<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAliasesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutAliases<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAliasesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAliases<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAliasesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAliases<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAliasesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAliasesAll<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAliasesAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectClicks<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClicksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostClicksPg<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClicksPgMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
