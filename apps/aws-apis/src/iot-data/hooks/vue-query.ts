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

export function getThingsThingNameShadowQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.things)[':thingName']['shadow']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['things', '/things/:thingName/shadow', keyArgs] as const
}

export function getThingsThingNameShadowQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.things)[':thingName']['shadow']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThingsThingNameShadowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.things[':thingName'].shadow.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThingsThingNameShadow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['shadow']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.things)[':thingName']['shadow']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['shadow']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['shadow']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThingsThingNameShadowQueryKey>
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
          Awaited<ReturnType<(typeof client.things)[':thingName']['shadow']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThingsThingNameShadowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThingsThingNameShadowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.things[':thingName'].shadow.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostThingsThingNameShadowMutationKey() {
  return ['things', '/things/:thingName/shadow', 'POST'] as const
}

export function getPostThingsThingNameShadowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.things)[':thingName']['shadow']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.things)[':thingName']['shadow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostThingsThingNameShadowMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.things)[':thingName']['shadow']['$post']>,
    ) {
      return parseResponse(client.things[':thingName'].shadow.$post(args, options))
    },
  })
}

export function usePostThingsThingNameShadow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['shadow']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.things)[':thingName']['shadow']['$post']>,
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
  const mutationDefaults = getPostThingsThingNameShadowMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteThingsThingNameShadowMutationKey() {
  return ['things', '/things/:thingName/shadow', 'DELETE'] as const
}

export function getDeleteThingsThingNameShadowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.things)[':thingName']['shadow']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.things)[':thingName']['shadow']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteThingsThingNameShadowMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.things)[':thingName']['shadow']['$delete']>,
    ) {
      return parseResponse(client.things[':thingName'].shadow.$delete(args, options))
    },
  })
}

export function useDeleteThingsThingNameShadow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['shadow']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.things)[':thingName']['shadow']['$delete']>,
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
  const mutationDefaults = getDeleteThingsThingNameShadowMutationOptions<TError, TOnMutateResult>(
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

export function getRetainedMessageTopicQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.retainedMessage)[':topic']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['retainedMessage', '/retainedMessage/:topic', keyArgs] as const
}

export function getRetainedMessageTopicQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.retainedMessage)[':topic']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRetainedMessageTopicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.retainedMessage[':topic'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRetainedMessageTopic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.retainedMessage)[':topic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.retainedMessage)[':topic']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.retainedMessage)[':topic']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.retainedMessage)[':topic']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRetainedMessageTopicQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.retainedMessage)[':topic']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRetainedMessageTopicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRetainedMessageTopicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.retainedMessage[':topic'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiThingsShadowListNamedShadowsForThingThingNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.things.shadow.ListNamedShadowsForThing)[':thingName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/things/shadow/ListNamedShadowsForThing/:thingName', keyArgs] as const
}

export function getApiThingsShadowListNamedShadowsForThingThingNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.things.shadow.ListNamedShadowsForThing)[':thingName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiThingsShadowListNamedShadowsForThingThingNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.things.shadow.ListNamedShadowsForThing[':thingName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiThingsShadowListNamedShadowsForThingThingName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.things.shadow.ListNamedShadowsForThing)[':thingName']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getApiThingsShadowListNamedShadowsForThingThingNameQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.api.things.shadow.ListNamedShadowsForThing)[':thingName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiThingsShadowListNamedShadowsForThingThingNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiThingsShadowListNamedShadowsForThingThingNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.things.shadow.ListNamedShadowsForThing[':thingName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRetainedMessageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.retainedMessage.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['retainedMessage', '/retainedMessage', keyArgs] as const
}

export function getRetainedMessageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.retainedMessage.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRetainedMessageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.retainedMessage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRetainedMessage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retainedMessage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.retainedMessage.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.retainedMessage.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.retainedMessage.$get>>>
            >
          >,
          ReturnType<typeof getRetainedMessageQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retainedMessage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRetainedMessageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRetainedMessageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.retainedMessage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTopicsTopicMutationKey() {
  return ['topics', '/topics/:topic', 'POST'] as const
}

export function getPostTopicsTopicMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':topic']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.topics)[':topic']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTopicsTopicMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.topics)[':topic']['$post']>) {
      return parseResponse(client.topics[':topic'].$post(args, options))
    },
  })
}

export function usePostTopicsTopic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':topic']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.topics)[':topic']['$post']>,
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
  const mutationDefaults = getPostTopicsTopicMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
