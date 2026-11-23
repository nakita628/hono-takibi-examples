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

export function getProxyKey() {
  return ['proxy'] as const
}

export function getProxyQueryKey(args: InferRequestType<typeof client.proxy.$get>) {
  const { header: _, ...keyArgs } = args
  return ['proxy', '/proxy', keyArgs] as const
}

export function getProxyQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.proxy.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProxyQueryKey>
  >({
    queryKey: getProxyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.proxy.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProxy<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.proxy.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProxyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProxyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$put>>>>>,
        TError,
        InferRequestType<typeof client.proxy.$put>,
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
    const mutationDefaults = getPutProxyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$post>>>>>,
        TError,
        InferRequestType<typeof client.proxy.$post>,
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
    const mutationDefaults = getPostProxyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$delete>>>>>,
        TError,
        InferRequestType<typeof client.proxy.$delete>,
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
    const mutationDefaults = getDeleteProxyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createOptionsProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$options>>>>
        >,
        TError,
        InferRequestType<typeof client.proxy.$options>,
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
    const mutationDefaults = getOptionsProxyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$patch>>>>>,
        TError,
        InferRequestType<typeof client.proxy.$patch>,
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
    const mutationDefaults = getPatchProxyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
