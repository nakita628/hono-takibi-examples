import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnythingKey() {
  return ['anything'] as const
}

export function getAnythingQueryKey() {
  return ['anything', '/anything'] as const
}

export function getAnythingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAnythingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAnything<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>
          >,
          ReturnType<typeof getAnythingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAnythingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAnythingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAnythingMutationKey() {
  return ['anything', '/anything', 'PUT'] as const
}

export function getPutAnythingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$put>>>>>,
    TError,
    InferRequestType<typeof client.anything.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAnythingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.$put>) {
      return parseResponse(client.anything.$put(args, options))
    },
  })
}

export function usePutAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.anything.$put>,
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
  const mutationDefaults = getPutAnythingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAnythingMutationKey() {
  return ['anything', '/anything', 'POST'] as const
}

export function getPostAnythingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$post>>>>>,
    TError,
    InferRequestType<typeof client.anything.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.$post>) {
      return parseResponse(client.anything.$post(args, options))
    },
  })
}

export function usePostAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.anything.$post>,
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
  const mutationDefaults = getPostAnythingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
