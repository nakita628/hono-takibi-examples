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

export function getMappingKey() {
  return ['mapping'] as const
}

export function getPostMappingMutationKey() {
  return ['mapping', '/mapping', 'POST'] as const
}

export function getPostMappingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mapping.$post>>>>>,
    TError,
    InferRequestType<typeof client.mapping.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMappingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mapping.$post>) {
      return parseResponse(client.mapping.$post(args, options))
    },
  })
}

export function usePostMapping<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mapping.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.mapping.$post>,
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
  const mutationDefaults = getPostMappingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMappingValuesKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mapping.values)[':key']['$get']>>,
) {
  return ['mapping', '/mapping/values/:key', toValue(args)] as const
}

export function getMappingValuesKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mapping.values)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMappingValuesKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mapping.values[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMappingValuesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mapping.values)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mapping.values)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mapping.values)[':key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mapping.values)[':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMappingValuesKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.mapping.values)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMappingValuesKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMappingValuesKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mapping.values[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
