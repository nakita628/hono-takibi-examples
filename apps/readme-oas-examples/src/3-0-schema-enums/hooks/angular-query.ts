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

export function getAnythingKey() {
  return ['anything'] as const
}

export function getAnythingStringsQueryKey(
  args: InferRequestType<typeof client.anything.strings.$get>,
) {
  return ['anything', '/anything/strings', args] as const
}

export function getAnythingStringsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.anything.strings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingStringsQueryKey>
  >({
    queryKey: getAnythingStringsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.strings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAnythingStrings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.anything.strings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingStringsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingStringsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutAnythingStringsMutationKey() {
  return ['anything', '/anything/strings', 'PUT'] as const
}

export function getPutAnythingStringsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.anything.strings.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAnythingStringsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.strings.$put>) {
      return parseResponse(client.anything.strings.$put(args, options))
    },
  })
}

export function injectPutAnythingStrings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.anything.strings.$put>,
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
    const mutationDefaults = getPutAnythingStringsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingStringsMutationKey() {
  return ['anything', '/anything/strings', 'POST'] as const
}

export function getPostAnythingStringsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.anything.strings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingStringsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.strings.$post>) {
      return parseResponse(client.anything.strings.$post(args, options))
    },
  })
}

export function injectPostAnythingStrings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.anything.strings.$post>,
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
    const mutationDefaults = getPostAnythingStringsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
