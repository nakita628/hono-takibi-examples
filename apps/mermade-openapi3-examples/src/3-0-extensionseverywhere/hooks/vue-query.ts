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

export function getThingKey() {
  return ['thing'] as const
}

export function getThingEmptyKey() {
  return ['thingEmpty'] as const
}

export function getThingyrefKey() {
  return ['thingyref'] as const
}

export function getThingyrefQueryKey() {
  return ['thingyref', '/thingyref'] as const
}

export function getThingyrefQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getThingyrefQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.thingyref.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useThingyref<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thingyref.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thingyref.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thingyref.$get>>>>
          >,
          ReturnType<typeof getThingyrefQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thingyref.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getThingyrefQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getThingyrefQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.thingyref.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.thing.$get>>,
) {
  return ['thing', '/thing', toValue(args)] as const
}

export function getThingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.thing.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.thing.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useThing<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.thing.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$get>>>>>,
          ReturnType<typeof getThingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getThingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.thing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutThingMutationKey() {
  return ['thing', '/thing', 'PUT'] as const
}

export function getPutThingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$put>>>>>,
    TError,
    InferRequestType<typeof client.thing.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutThingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.thing.$put>) {
      return parseResponse(client.thing.$put(args, options))
    },
  })
}

export function usePutThing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$put>>>>>,
          TError,
          InferRequestType<typeof client.thing.$put>,
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
  const mutationDefaults = getPutThingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostThingMutationKey() {
  return ['thing', '/thing', 'POST'] as const
}

export function getPostThingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.thing.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostThingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.thing.$post>) {
      return parseResponse(client.thing.$post(args, options))
    },
  })
}

export function usePostThing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.thing.$post>,
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
  const mutationDefaults = getPostThingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteThingMutationKey() {
  return ['thing', '/thing', 'DELETE'] as const
}

export function getDeleteThingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$delete>>>>>,
    TError,
    InferRequestType<typeof client.thing.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteThingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.thing.$delete>) {
      return parseResponse(client.thing.$delete(args, options))
    },
  })
}

export function useDeleteThing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.thing.$delete>,
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
  const mutationDefaults = getDeleteThingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchThingMutationKey() {
  return ['thing', '/thing', 'PATCH'] as const
}

export function getPatchThingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$patch>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.thing.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchThingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.thing.$patch>) {
      return parseResponse(client.thing.$patch(args, options))
    },
  })
}

export function usePatchThing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$patch>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.thing.$patch>,
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
  const mutationDefaults = getPatchThingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
