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

export function getAnythingStringsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.strings.$get>>,
) {
  return ['anything', '/anything/strings', toValue(args)] as const
}

export function getAnythingStringsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.strings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingStringsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.strings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingStrings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.strings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>
            >
          >,
          ReturnType<typeof getAnythingStringsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingStringsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingStringsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.strings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAnythingStrings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.anything.strings.$put>,
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
  const mutationDefaults = getPutAnythingStringsMutationOptions<TError, TOnMutateResult>(
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

export function usePostAnythingStrings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.anything.strings.$post>,
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
  const mutationDefaults = getPostAnythingStringsMutationOptions<TError, TOnMutateResult>(
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
