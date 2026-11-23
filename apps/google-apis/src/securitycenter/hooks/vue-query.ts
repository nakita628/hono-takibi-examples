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

export function getV1beta2Key() {
  return ['v1beta2'] as const
}

export function getV1beta2NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':name']['$get']>>,
) {
  return ['v1beta2', '/v1beta2/:name', toValue(args)] as const
}

export function getV1beta2NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta2NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta2[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta2Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1beta2NameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta2NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta2NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta2[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1beta2NameMutationKey() {
  return ['v1beta2', '/v1beta2/:name', 'PATCH'] as const
}

export function getPatchV1beta2NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1beta2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta2)[':name']['$patch']>) {
      return parseResponse(client.v1beta2[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1beta2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV1beta2NameMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta2NameCalculateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':name:calculate']['$get']>>,
) {
  return ['v1beta2', '/v1beta2/:name:calculate', toValue(args)] as const
}

export function getV1beta2NameCalculateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':name:calculate']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta2NameCalculateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta2[':name:calculate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta2NameCalculate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name:calculate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':name:calculate']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':name:calculate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':name:calculate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta2NameCalculateQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':name:calculate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta2NameCalculateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta2NameCalculateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta2[':name:calculate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
