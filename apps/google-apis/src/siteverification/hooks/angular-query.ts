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

export function injectPostToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$post>>>>>,
        TError,
        InferRequestType<typeof client.token.$post>,
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
    const mutationDefaults = getPostTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebResourceQueryKey(args: InferRequestType<typeof client.webResource.$get>) {
  return ['webResource', '/webResource', args] as const
}

export function getWebResourceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webResource.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webResource.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webResource.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebResourceQueryKey>
  >({
    queryKey: getWebResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webResource.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWebResource<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webResource.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.webResource.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webResource.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWebResourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebResourceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostWebResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webResource.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webResource.$post>,
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
    const mutationDefaults = getPostWebResourceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebResourceIdQueryKey(
  args: InferRequestType<(typeof client.webResource)[':id']['$get']>,
) {
  return ['webResource', '/webResource/:id', args] as const
}

export function getWebResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webResource)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webResource)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webResource)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebResourceIdQueryKey>
  >({
    queryKey: getWebResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webResource[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWebResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webResource)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webResource)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.webResource)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebResourceIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutWebResourceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.webResource)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.webResource)[':id']['$put']>,
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
    const mutationDefaults = getPutWebResourceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteWebResourceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.webResource)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.webResource)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteWebResourceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchWebResourceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.webResource)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.webResource)[':id']['$patch']>,
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
    const mutationDefaults = getPatchWebResourceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
