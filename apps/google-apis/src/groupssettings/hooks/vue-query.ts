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

export function getGroupUniqueIdKey() {
  return ['{groupUniqueId}'] as const
}

export function getGroupUniqueIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':groupUniqueId']['$get']>>,
) {
  return [':groupUniqueId', '/:groupUniqueId', toValue(args)] as const
}

export function getGroupUniqueIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':groupUniqueId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupUniqueIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':groupUniqueId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupUniqueId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':groupUniqueId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$get']>>>
            >
          >,
          ReturnType<typeof getGroupUniqueIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupUniqueIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupUniqueIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':groupUniqueId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGroupUniqueIdMutationKey() {
  return [':groupUniqueId', '/:groupUniqueId', 'PUT'] as const
}

export function getPutGroupUniqueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':groupUniqueId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGroupUniqueIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':groupUniqueId']['$put']>) {
      return parseResponse(client[':groupUniqueId'].$put(args, options))
    },
  })
}

export function usePutGroupUniqueId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)[':groupUniqueId']['$put']>,
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
  const mutationDefaults = getPutGroupUniqueIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchGroupUniqueIdMutationKey() {
  return [':groupUniqueId', '/:groupUniqueId', 'PATCH'] as const
}

export function getPatchGroupUniqueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':groupUniqueId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGroupUniqueIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':groupUniqueId']['$patch']>) {
      return parseResponse(client[':groupUniqueId'].$patch(args, options))
    },
  })
}

export function usePatchGroupUniqueId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)[':groupUniqueId']['$patch']>,
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
  const mutationDefaults = getPatchGroupUniqueIdMutationOptions<TError, TOnMutateResult>(
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
