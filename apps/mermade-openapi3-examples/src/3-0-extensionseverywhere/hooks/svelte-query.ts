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

export function getThingyrefQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thingyref.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thingyref.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getThingyrefQueryKey>
  >({
    queryKey: getThingyrefQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.thingyref.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createThingyref<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thingyref.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thingyref.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getThingyrefQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThingyrefQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getThingQueryKey(args: InferRequestType<typeof client.thing.$get>) {
  return ['thing', '/thing', args] as const
}

export function getThingQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.thing.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getThingQueryKey>
  >({
    queryKey: getThingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.thing.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createThing<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.thing.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getThingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutThing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$put>>>>>,
        TError,
        InferRequestType<typeof client.thing.$put>,
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
    const mutationDefaults = getPutThingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostThing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$post>>>>>
        | undefined,
        TError,
        InferRequestType<typeof client.thing.$post>,
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
    const mutationDefaults = getPostThingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteThing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$delete>>>>>,
        TError,
        InferRequestType<typeof client.thing.$delete>,
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
    const mutationDefaults = getDeleteThingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchThing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$patch>>>>>
        | undefined,
        TError,
        InferRequestType<typeof client.thing.$patch>,
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
    const mutationDefaults = getPatchThingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
