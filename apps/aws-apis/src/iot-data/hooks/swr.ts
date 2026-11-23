import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getRetainedMessageKey() {
  return ['retainedMessage'] as const
}

export function getThingsKey() {
  return ['things'] as const
}

export function getTopicsKey() {
  return ['topics'] as const
}

export function getGetThingsThingNameShadowKey(
  args: InferRequestType<(typeof client.things)[':thingName']['shadow']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['things', '/things/:thingName/shadow', keyArgs] as const
}

export function useGetThingsThingNameShadow<TError = unknown>(
  args: InferRequestType<(typeof client.things)[':thingName']['shadow']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['shadow']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingsThingNameShadowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['shadow']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.things[':thingName'].shadow.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThingsThingNameShadow<TError = unknown>(
  args: InferRequestType<(typeof client.things)[':thingName']['shadow']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['shadow']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingsThingNameShadowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['shadow']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.things[':thingName'].shadow.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostThingsThingNameShadowKey() {
  return ['things', '/things/:thingName/shadow', 'POST'] as const
}

export function usePostThingsThingNameShadow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.things)[':thingName']['shadow']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.things)[':thingName']['shadow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostThingsThingNameShadowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.things)[':thingName']['shadow']['$post']> },
      ) => parseResponse(client.things[':thingName'].shadow.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteThingsThingNameShadowKey() {
  return ['things', '/things/:thingName/shadow', 'DELETE'] as const
}

export function useDeleteThingsThingNameShadow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.things)[':thingName']['shadow']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.things)[':thingName']['shadow']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteThingsThingNameShadowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.things)[':thingName']['shadow']['$delete']> },
      ) => parseResponse(client.things[':thingName'].shadow.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRetainedMessageTopicKey(
  args: InferRequestType<(typeof client.retainedMessage)[':topic']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['retainedMessage', '/retainedMessage/:topic', keyArgs] as const
}

export function useGetRetainedMessageTopic<TError = unknown>(
  args: InferRequestType<(typeof client.retainedMessage)[':topic']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.retainedMessage)[':topic']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRetainedMessageTopicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.retainedMessage)[':topic']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.retainedMessage[':topic'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRetainedMessageTopic<TError = unknown>(
  args: InferRequestType<(typeof client.retainedMessage)[':topic']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.retainedMessage)[':topic']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRetainedMessageTopicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.retainedMessage)[':topic']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.retainedMessage[':topic'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiThingsShadowListNamedShadowsForThingThingNameKey(
  args: InferRequestType<
    (typeof client.api.things.shadow.ListNamedShadowsForThing)[':thingName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/things/shadow/ListNamedShadowsForThing/:thingName', keyArgs] as const
}

export function useGetApiThingsShadowListNamedShadowsForThingThingName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.things.shadow.ListNamedShadowsForThing)[':thingName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.things.shadow.ListNamedShadowsForThing)[':thingName']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiThingsShadowListNamedShadowsForThingThingNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.things.shadow.ListNamedShadowsForThing)[':thingName']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.things.shadow.ListNamedShadowsForThing[':thingName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiThingsShadowListNamedShadowsForThingThingName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.things.shadow.ListNamedShadowsForThing)[':thingName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.things.shadow.ListNamedShadowsForThing)[':thingName']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiThingsShadowListNamedShadowsForThingThingNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.things.shadow.ListNamedShadowsForThing)[':thingName']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.things.shadow.ListNamedShadowsForThing[':thingName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRetainedMessageKey(
  args: InferRequestType<typeof client.retainedMessage.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['retainedMessage', '/retainedMessage', keyArgs] as const
}

export function useGetRetainedMessage<TError = unknown>(
  args: InferRequestType<typeof client.retainedMessage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retainedMessage.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRetainedMessageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retainedMessage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.retainedMessage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRetainedMessage<TError = unknown>(
  args: InferRequestType<typeof client.retainedMessage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retainedMessage.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRetainedMessageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retainedMessage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.retainedMessage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTopicsTopicKey() {
  return ['topics', '/topics/:topic', 'POST'] as const
}

export function usePostTopicsTopic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':topic']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.topics)[':topic']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTopicsTopicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.topics)[':topic']['$post']> },
      ) => parseResponse(client.topics[':topic'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
