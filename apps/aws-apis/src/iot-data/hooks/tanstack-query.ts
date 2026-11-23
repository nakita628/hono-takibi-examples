import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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
  args: InferRequestType<(typeof client.things)[':thingName']['shadow']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['things', '/things/:thingName/shadow', keyArgs] as const
}

export function getThingsThingNameShadowQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['shadow']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.things)[':thingName']['shadow']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getThingsThingNameShadowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.things[':thingName'].shadow.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.things)[':thingName']['shadow']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getThingsThingNameShadowQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getThingsThingNameShadowQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseThingsThingNameShadow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['shadow']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.things)[':thingName']['shadow']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getThingsThingNameShadowQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.retainedMessage)[':topic']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['retainedMessage', '/retainedMessage/:topic', keyArgs] as const
}

export function getRetainedMessageTopicQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.retainedMessage)[':topic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.retainedMessage)[':topic']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.retainedMessage)[':topic']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRetainedMessageTopicQueryKey>
  >({
    queryKey: getRetainedMessageTopicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.retainedMessage[':topic'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRetainedMessageTopic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.retainedMessage)[':topic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.retainedMessage)[':topic']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRetainedMessageTopicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRetainedMessageTopicQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRetainedMessageTopic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.retainedMessage)[':topic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.retainedMessage)[':topic']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.retainedMessage)[':topic']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRetainedMessageTopicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRetainedMessageTopicQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiThingsShadowListNamedShadowsForThingThingNameQueryKey(
  args: InferRequestType<
    (typeof client.api.things.shadow.ListNamedShadowsForThing)[':thingName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/things/shadow/ListNamedShadowsForThing/:thingName', keyArgs] as const
}

export function getApiThingsShadowListNamedShadowsForThingThingNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.things.shadow.ListNamedShadowsForThing)[':thingName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiThingsShadowListNamedShadowsForThingThingNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.things.shadow.ListNamedShadowsForThing[':thingName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.api.things.shadow.ListNamedShadowsForThing)[':thingName']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiThingsShadowListNamedShadowsForThingThingNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiThingsShadowListNamedShadowsForThingThingNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiThingsShadowListNamedShadowsForThingThingName<
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
  args: InferRequestType<
    (typeof client.api.things.shadow.ListNamedShadowsForThing)[':thingName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiThingsShadowListNamedShadowsForThingThingNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRetainedMessageQueryKey(
  args: InferRequestType<typeof client.retainedMessage.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['retainedMessage', '/retainedMessage', keyArgs] as const
}

export function getRetainedMessageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retainedMessage.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.retainedMessage.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retainedMessage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRetainedMessageQueryKey>
  >({
    queryKey: getRetainedMessageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.retainedMessage.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRetainedMessage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retainedMessage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.retainedMessage.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retainedMessage.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRetainedMessageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRetainedMessageQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRetainedMessage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retainedMessage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.retainedMessage.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retainedMessage.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRetainedMessageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRetainedMessageQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
