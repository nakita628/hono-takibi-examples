import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getConfigurationKey() {
  return ['configuration'] as const
}

export function getIntentKey() {
  return ['intent'] as const
}

export function getQueuesKey() {
  return ['queues'] as const
}

export function getGetConfigurationKey(args: InferRequestType<typeof client.configuration.$get>) {
  const { header: _, ...keyArgs } = args
  return ['configuration', '/configuration', keyArgs] as const
}

export function useGetConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.configuration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigurationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.configuration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigurationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIntentAddMediaKey() {
  return ['intent', '/intent/addMedia', 'POST'] as const
}

export function usePostIntentAddMedia<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intent.addMedia.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.intent.addMedia.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntentAddMediaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.intent.addMedia.$post> }) =>
        parseResponse(client.intent.addMedia.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIntentPlayMediaKey() {
  return ['intent', '/intent/playMedia', 'POST'] as const
}

export function usePostIntentPlayMedia<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intent.playMedia.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.intent.playMedia.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntentPlayMediaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.intent.playMedia.$post> }) =>
        parseResponse(client.intent.playMedia.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIntentUpdateMediaAffinityKey() {
  return ['intent', '/intent/updateMediaAffinity', 'POST'] as const
}

export function usePostIntentUpdateMediaAffinity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.intent.updateMediaAffinity.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.intent.updateMediaAffinity.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntentUpdateMediaAffinityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.intent.updateMediaAffinity.$post> },
      ) => parseResponse(client.intent.updateMediaAffinity.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQueuesPlayMediaKey() {
  return ['queues', '/queues/playMedia', 'POST'] as const
}

export function usePostQueuesPlayMedia<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.playMedia.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.queues.playMedia.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueuesPlayMediaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.queues.playMedia.$post> }) =>
        parseResponse(client.queues.playMedia.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQueuesUpdateActivityKey() {
  return ['queues', '/queues/updateActivity', 'POST'] as const
}

export function usePostQueuesUpdateActivity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.queues.updateActivity.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.queues.updateActivity.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueuesUpdateActivityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.queues.updateActivity.$post> },
      ) => parseResponse(client.queues.updateActivity.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
