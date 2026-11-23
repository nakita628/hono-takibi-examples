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

export function getWaybackKey() {
  return ['wayback'] as const
}

export function getWaybackV1AvailableQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wayback.v1.available.$get>>,
) {
  return ['wayback', '/wayback/v1/available', toValue(args)] as const
}

export function getWaybackV1AvailableQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wayback.v1.available.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWaybackV1AvailableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wayback.v1.available.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWaybackV1Available<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wayback.v1.available.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wayback.v1.available.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wayback.v1.available.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wayback.v1.available.$get>>>
            >
          >,
          ReturnType<typeof getWaybackV1AvailableQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wayback.v1.available.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWaybackV1AvailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWaybackV1AvailableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wayback.v1.available.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWaybackV1AvailableMutationKey() {
  return ['wayback', '/wayback/v1/available', 'POST'] as const
}

export function getPostWaybackV1AvailableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wayback.v1.available.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.wayback.v1.available.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWaybackV1AvailableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wayback.v1.available.$post>) {
      return parseResponse(client.wayback.v1.available.$post(args, options))
    },
  })
}

export function usePostWaybackV1Available<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wayback.v1.available.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.wayback.v1.available.$post>,
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
  const mutationDefaults = getPostWaybackV1AvailableMutationOptions<TError, TOnMutateResult>(
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
