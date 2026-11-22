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

export function getUuidKey() {
  return ['uuid'] as const
}

export function getUuidQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.uuid.$get>>) {
  return ['uuid', '/uuid', toValue(args)] as const
}

export function getUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.uuid.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.uuid.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUuid<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.uuid.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
          ReturnType<typeof getUuidQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.uuid.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUuidMutationKey() {
  return ['uuid', '/uuid', 'POST'] as const
}

export function getPostUuidMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$post>>>>>,
    TError,
    InferRequestType<typeof client.uuid.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUuidMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.uuid.$post>) {
      return parseResponse(client.uuid.$post(args, options))
    },
  })
}

export function usePostUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$post>>>>>,
          TError,
          InferRequestType<typeof client.uuid.$post>,
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
  const mutationDefaults = getPostUuidMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUuidVersionVersionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.uuid.version)[':version']['$get']>>,
) {
  return ['uuid', '/uuid/version/:version', toValue(args)] as const
}

export function getUuidVersionVersionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.uuid.version)[':version']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUuidVersionVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.uuid.version[':version'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUuidVersionVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.uuid.version)[':version']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.uuid.version)[':version']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.uuid.version)[':version']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.uuid.version)[':version']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUuidVersionVersionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.uuid.version)[':version']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUuidVersionVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUuidVersionVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.uuid.version[':version'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
