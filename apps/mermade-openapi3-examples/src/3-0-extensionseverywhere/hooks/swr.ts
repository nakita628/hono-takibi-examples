import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetThingyrefKey() {
  return ['thingyref', '/thingyref'] as const
}

export function useGetThingyref<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thingyref.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetThingyrefKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thingyref.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.thingyref.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThingyref<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thingyref.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetThingyrefKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thingyref.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.thingyref.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetThingKey(args: InferRequestType<typeof client.thing.$get>) {
  return ['thing', '/thing', args] as const
}

export function useGetThing<TError = unknown>(
  args: InferRequestType<typeof client.thing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetThingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.thing.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetThing<TError = unknown>(
  args: InferRequestType<typeof client.thing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetThingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.thing.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutThingKey() {
  return ['thing', '/thing', 'PUT'] as const
}

export function usePutThing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.thing.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutThingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.thing.$put> }) =>
        parseResponse(client.thing.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostThingKey() {
  return ['thing', '/thing', 'POST'] as const
}

export function usePostThing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.thing.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostThingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.thing.$post> }) =>
        parseResponse(client.thing.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteThingKey() {
  return ['thing', '/thing', 'DELETE'] as const
}

export function useDeleteThing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.thing.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteThingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.thing.$delete> }) =>
        parseResponse(client.thing.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchThingKey() {
  return ['thing', '/thing', 'PATCH'] as const
}

export function usePatchThing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.thing.$patch>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.thing.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchThingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.thing.$patch> }) =>
        parseResponse(client.thing.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
