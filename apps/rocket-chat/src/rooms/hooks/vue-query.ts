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

export function getPostApiV1ChannelsCreateMutationKey() {
  return ['api', '/api/v1/channels.create', 'POST'] as const
}

export function getPostApiV1ChannelsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.create']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.create']['$post']>) {
      return parseResponse(client.api.v1['channels.create'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.create']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.create']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChannelsAddAllMutationKey() {
  return ['api', '/api/v1/channels.addAll', 'POST'] as const
}

export function getPostApiV1ChannelsAddAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.addAll']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.addAll']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsAddAllMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.addAll']['$post']>) {
      return parseResponse(client.api.v1['channels.addAll'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsAddAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.addAll']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.addAll']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsAddAllMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChannelsAddLeaderMutationKey() {
  return ['api', '/api/v1/channels.addLeader', 'POST'] as const
}

export function getPostApiV1ChannelsAddLeaderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.addLeader']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.addLeader']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsAddLeaderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.addLeader']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.addLeader'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsAddLeader<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.addLeader']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.addLeader']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsAddLeaderMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChannelsAddModeratorMutationKey() {
  return ['api', '/api/v1/channels.addModerator', 'POST'] as const
}

export function getPostApiV1ChannelsAddModeratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.addModerator']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.addModerator']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsAddModeratorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.addModerator']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.addModerator'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsAddModerator<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.addModerator']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.addModerator']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsAddModeratorMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChannelsAddOwnerMutationKey() {
  return ['api', '/api/v1/channels.addOwner', 'POST'] as const
}

export function getPostApiV1ChannelsAddOwnerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.addOwner']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.addOwner']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsAddOwnerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.addOwner']['$post']>) {
      return parseResponse(client.api.v1['channels.addOwner'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsAddOwner<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.addOwner']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.addOwner']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsAddOwnerMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ChannelsAnonymousreadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['channels.anonymousread']['$get']>
  >,
) {
  return ['api', '/api/v1/channels.anonymousread', toValue(args)] as const
}

export function getApiV1ChannelsAnonymousreadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['channels.anonymousread']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChannelsAnonymousreadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['channels.anonymousread'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChannelsAnonymousread<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['channels.anonymousread']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['channels.anonymousread']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.anonymousread']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.anonymousread']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChannelsAnonymousreadQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['channels.anonymousread']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsAnonymousreadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChannelsAnonymousreadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['channels.anonymousread'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ChannelsArchiveMutationKey() {
  return ['api', '/api/v1/channels.archive', 'POST'] as const
}

export function getPostApiV1ChannelsArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.archive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsArchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.archive']['$post']>) {
      return parseResponse(client.api.v1['channels.archive'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.archive']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.archive']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChannelsCloseMutationKey() {
  return ['api', '/api/v1/channels.close', 'POST'] as const
}

export function getPostApiV1ChannelsCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.close']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.close']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsCloseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.close']['$post']>) {
      return parseResponse(client.api.v1['channels.close'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.close']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.close']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsCloseMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ChannelsCountersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.counters']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/channels.counters', keyArgs] as const
}

export function getApiV1ChannelsCountersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.counters']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChannelsCountersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['channels.counters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChannelsCounters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.counters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.counters']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.counters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.counters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChannelsCountersQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['channels.counters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsCountersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChannelsCountersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['channels.counters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ChannelsDeleteMutationKey() {
  return ['api', '/api/v1/channels.delete', 'POST'] as const
}

export function getPostApiV1ChannelsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.delete']['$post']>) {
      return parseResponse(client.api.v1['channels.delete'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.delete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.delete']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ChannelsFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.files']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/channels.files', keyArgs] as const
}

export function getApiV1ChannelsFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.files']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChannelsFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['channels.files'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChannelsFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.files']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChannelsFilesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.files']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChannelsFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['channels.files'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChannelsHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.history']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/channels.history', keyArgs] as const
}

export function getApiV1ChannelsHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.history']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChannelsHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['channels.history'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChannelsHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.history']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.history']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.history']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChannelsHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['channels.history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChannelsHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['channels.history'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChannelsInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.info']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/channels.info', keyArgs] as const
}

export function getApiV1ChannelsInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChannelsInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['channels.info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChannelsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChannelsInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChannelsInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['channels.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ChannelsInviteMutationKey() {
  return ['api', '/api/v1/channels.invite', 'POST'] as const
}

export function getPostApiV1ChannelsInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.invite']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsInviteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.invite']['$post']>) {
      return parseResponse(client.api.v1['channels.invite'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.invite']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.invite']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsInviteMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChannelsJoinMutationKey() {
  return ['api', '/api/v1/channels.join', 'POST'] as const
}

export function getPostApiV1ChannelsJoinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.join']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.join']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsJoinMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.join']['$post']>) {
      return parseResponse(client.api.v1['channels.join'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsJoin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.join']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.join']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsJoinMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChannelsKickMutationKey() {
  return ['api', '/api/v1/channels.kick', 'POST'] as const
}

export function getPostApiV1ChannelsKickMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.kick']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.kick']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsKickMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.kick']['$post']>) {
      return parseResponse(client.api.v1['channels.kick'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsKick<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.kick']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.kick']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsKickMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChannelsLeaveMutationKey() {
  return ['api', '/api/v1/channels.leave', 'POST'] as const
}

export function getPostApiV1ChannelsLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.leave']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.leave']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsLeaveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.leave']['$post']>) {
      return parseResponse(client.api.v1['channels.leave'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.leave']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.leave']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsLeaveMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ChannelsListJoinedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.list.joined']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/channels.list.joined', keyArgs] as const
}

export function getApiV1ChannelsListJoinedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.list.joined']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChannelsListJoinedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['channels.list.joined'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChannelsListJoined<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['channels.list.joined']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.list.joined']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.list.joined']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.list.joined']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChannelsListJoinedQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['channels.list.joined']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsListJoinedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChannelsListJoinedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['channels.list.joined'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChannelsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.list']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/channels.list', keyArgs] as const
}

export function getApiV1ChannelsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChannelsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['channels.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChannelsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChannelsListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChannelsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['channels.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChannelsMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.members']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/channels.members', keyArgs] as const
}

export function getApiV1ChannelsMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChannelsMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['channels.members'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChannelsMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChannelsMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['channels.members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChannelsMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['channels.members'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChannelsMessagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.messages']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/channels.messages', keyArgs] as const
}

export function getApiV1ChannelsMessagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.messages']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChannelsMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['channels.messages'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChannelsMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.messages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.messages']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChannelsMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['channels.messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChannelsMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['channels.messages'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChannelsModeratorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.moderators']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/channels.moderators', keyArgs] as const
}

export function getApiV1ChannelsModeratorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.moderators']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChannelsModeratorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['channels.moderators'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChannelsModerators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['channels.moderators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.moderators']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.moderators']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.moderators']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChannelsModeratorsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['channels.moderators']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsModeratorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChannelsModeratorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['channels.moderators'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChannelsOnlineQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.online']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/channels.online', keyArgs] as const
}

export function getApiV1ChannelsOnlineQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.online']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChannelsOnlineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['channels.online'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChannelsOnline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.online']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.online']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.online']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.online']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChannelsOnlineQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.online']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsOnlineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChannelsOnlineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['channels.online'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ChannelsOpenMutationKey() {
  return ['api', '/api/v1/channels.open', 'POST'] as const
}

export function getPostApiV1ChannelsOpenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.open']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.open']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsOpenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.open']['$post']>) {
      return parseResponse(client.api.v1['channels.open'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsOpen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.open']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.open']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsOpenMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChannelsRemoveLeaderMutationKey() {
  return ['api', '/api/v1/channels.removeLeader', 'POST'] as const
}

export function getPostApiV1ChannelsRemoveLeaderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.removeLeader']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.removeLeader']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsRemoveLeaderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.removeLeader']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.removeLeader'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsRemoveLeader<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.removeLeader']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.removeLeader']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsRemoveLeaderMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChannelsRemoveModeratorMutationKey() {
  return ['api', '/api/v1/channels.removeModerator', 'POST'] as const
}

export function getPostApiV1ChannelsRemoveModeratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.removeModerator']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.removeModerator']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsRemoveModeratorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.removeModerator']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.removeModerator'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsRemoveModerator<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.removeModerator']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.removeModerator']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsRemoveModeratorMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1ChannelsRemoveOwnerMutationKey() {
  return ['api', '/api/v1/channels.removeOwner', 'POST'] as const
}

export function getPostApiV1ChannelsRemoveOwnerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.removeOwner']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.removeOwner']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsRemoveOwnerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.removeOwner']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.removeOwner'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsRemoveOwner<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.removeOwner']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.removeOwner']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsRemoveOwnerMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChannelsRenameMutationKey() {
  return ['api', '/api/v1/channels.rename', 'POST'] as const
}

export function getPostApiV1ChannelsRenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.rename']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.rename']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsRenameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.rename']['$post']>) {
      return parseResponse(client.api.v1['channels.rename'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsRename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.rename']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.rename']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsRenameMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ChannelsRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.roles']['$get']>>,
) {
  return ['api', '/api/v1/channels.roles', toValue(args)] as const
}

export function getApiV1ChannelsRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.roles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChannelsRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['channels.roles'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChannelsRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['channels.roles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.roles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.roles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChannelsRolesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.roles']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChannelsRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['channels.roles'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ChannelsSetAnnouncementMutationKey() {
  return ['api', '/api/v1/channels.setAnnouncement', 'POST'] as const
}

export function getPostApiV1ChannelsSetAnnouncementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setAnnouncement']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.setAnnouncement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsSetAnnouncementMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.setAnnouncement']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.setAnnouncement'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsSetAnnouncement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.setAnnouncement']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.setAnnouncement']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsSetAnnouncementMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1ChannelsSetCustomFieldsMutationKey() {
  return ['api', '/api/v1/channels.setCustomFields', 'POST'] as const
}

export function getPostApiV1ChannelsSetCustomFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setCustomFields']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.setCustomFields']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsSetCustomFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.setCustomFields']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.setCustomFields'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsSetCustomFields<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.setCustomFields']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.setCustomFields']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsSetCustomFieldsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1ChannelsSetDefaultMutationKey() {
  return ['api', '/api/v1/channels.setDefault', 'POST'] as const
}

export function getPostApiV1ChannelsSetDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setDefault']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.setDefault']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsSetDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.setDefault']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.setDefault'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsSetDefault<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.setDefault']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.setDefault']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsSetDefaultMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChannelsSetDescriptionMutationKey() {
  return ['api', '/api/v1/channels.setDescription', 'POST'] as const
}

export function getPostApiV1ChannelsSetDescriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setDescription']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.setDescription']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsSetDescriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.setDescription']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.setDescription'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsSetDescription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.setDescription']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.setDescription']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsSetDescriptionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1ChannelsSetJoinCodeMutationKey() {
  return ['api', '/api/v1/channels.setJoinCode', 'POST'] as const
}

export function getPostApiV1ChannelsSetJoinCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setJoinCode']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.setJoinCode']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsSetJoinCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.setJoinCode']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.setJoinCode'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsSetJoinCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.setJoinCode']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.setJoinCode']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsSetJoinCodeMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChannelsSetPurposeMutationKey() {
  return ['api', '/api/v1/channels.setPurpose', 'POST'] as const
}

export function getPostApiV1ChannelsSetPurposeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setPurpose']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.setPurpose']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsSetPurposeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.setPurpose']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.setPurpose'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsSetPurpose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.setPurpose']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.setPurpose']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsSetPurposeMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChannelsSetReadOnlyMutationKey() {
  return ['api', '/api/v1/channels.setReadOnly', 'POST'] as const
}

export function getPostApiV1ChannelsSetReadOnlyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setReadOnly']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.setReadOnly']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsSetReadOnlyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.setReadOnly']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.setReadOnly'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsSetReadOnly<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.setReadOnly']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.setReadOnly']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsSetReadOnlyMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChannelsSetTopicMutationKey() {
  return ['api', '/api/v1/channels.setTopic', 'POST'] as const
}

export function getPostApiV1ChannelsSetTopicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setTopic']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.setTopic']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsSetTopicMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.setTopic']['$post']>) {
      return parseResponse(client.api.v1['channels.setTopic'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsSetTopic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.setTopic']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.setTopic']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsSetTopicMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChannelsSetTypeMutationKey() {
  return ['api', '/api/v1/channels.setType', 'POST'] as const
}

export function getPostApiV1ChannelsSetTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setType']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.setType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsSetTypeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.setType']['$post']>) {
      return parseResponse(client.api.v1['channels.setType'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsSetType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.setType']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.setType']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsSetTypeMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChannelsUnarchiveMutationKey() {
  return ['api', '/api/v1/channels.unarchive', 'POST'] as const
}

export function getPostApiV1ChannelsUnarchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.unarchive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.unarchive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsUnarchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.unarchive']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.unarchive'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsUnarchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.unarchive']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.unarchive']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsUnarchiveMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ChannelsGetAllUserMentionsByChannelQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/channels.getAllUserMentionsByChannel', keyArgs] as const
}

export function getApiV1ChannelsGetAllUserMentionsByChannelQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChannelsGetAllUserMentionsByChannelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['channels.getAllUserMentionsByChannel'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChannelsGetAllUserMentionsByChannel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>
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
                  ReturnType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ChannelsGetAllUserMentionsByChannelQueryKey>
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
            ReturnType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsGetAllUserMentionsByChannelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChannelsGetAllUserMentionsByChannelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['channels.getAllUserMentionsByChannel'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChannelsGetIntegrationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['channels.getIntegrations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/channels.getIntegrations', keyArgs] as const
}

export function getApiV1ChannelsGetIntegrationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['channels.getIntegrations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChannelsGetIntegrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['channels.getIntegrations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChannelsGetIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['channels.getIntegrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['channels.getIntegrations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.getIntegrations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.getIntegrations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChannelsGetIntegrationsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['channels.getIntegrations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsGetIntegrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChannelsGetIntegrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['channels.getIntegrations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ChannelsConvertToTeamMutationKey() {
  return ['api', '/api/v1/channels.convertToTeam', 'POST'] as const
}

export function getPostApiV1ChannelsConvertToTeamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.convertToTeam']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.convertToTeam']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsConvertToTeamMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.convertToTeam']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.convertToTeam'].$post(args, options))
    },
  })
}

export function usePostApiV1ChannelsConvertToTeam<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['channels.convertToTeam']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['channels.convertToTeam']['$post']>,
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
  const mutationDefaults = getPostApiV1ChannelsConvertToTeamMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1RoomsSaveNotificationMutationKey() {
  return ['api', '/api/v1/rooms.saveNotification', 'POST'] as const
}

export function getPostApiV1RoomsSaveNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.saveNotification']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.saveNotification']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsSaveNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['rooms.saveNotification']['$post']>,
    ) {
      return parseResponse(client.api.v1['rooms.saveNotification'].$post(args, options))
    },
  })
}

export function usePostApiV1RoomsSaveNotification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.saveNotification']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['rooms.saveNotification']['$post']>,
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
  const mutationDefaults = getPostApiV1RoomsSaveNotificationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1RoomsSaveDraftMutationKey() {
  return ['api', '/api/v1/rooms.saveDraft', 'POST'] as const
}

export function getPostApiV1RoomsSaveDraftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.saveDraft']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.saveDraft']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsSaveDraftMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['rooms.saveDraft']['$post']>) {
      return parseResponse(client.api.v1['rooms.saveDraft'].$post(args, options))
    },
  })
}

export function usePostApiV1RoomsSaveDraft<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.saveDraft']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['rooms.saveDraft']['$post']>,
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
  const mutationDefaults = getPostApiV1RoomsSaveDraftMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1RoomsAdminRoomsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.adminRooms']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/rooms.adminRooms', keyArgs] as const
}

export function getApiV1RoomsAdminRoomsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.adminRooms']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RoomsAdminRoomsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['rooms.adminRooms'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RoomsAdminRooms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.adminRooms']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RoomsAdminRoomsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsAdminRoomsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RoomsAdminRoomsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['rooms.adminRooms'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1RoomsCleanHistoryMutationKey() {
  return ['api', '/api/v1/rooms.cleanHistory', 'POST'] as const
}

export function getPostApiV1RoomsCleanHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.cleanHistory']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.cleanHistory']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsCleanHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['rooms.cleanHistory']['$post']>,
    ) {
      return parseResponse(client.api.v1['rooms.cleanHistory'].$post(args, options))
    },
  })
}

export function usePostApiV1RoomsCleanHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.cleanHistory']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['rooms.cleanHistory']['$post']>,
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
  const mutationDefaults = getPostApiV1RoomsCleanHistoryMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1RoomsHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.history']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/rooms.history', keyArgs] as const
}

export function getApiV1RoomsHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.history']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RoomsHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['rooms.history'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RoomsHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.history']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.history']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.history']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RoomsHistoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.history']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RoomsHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['rooms.history'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RoomsInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.info']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/rooms.info', keyArgs] as const
}

export function getApiV1RoomsInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RoomsInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['rooms.info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RoomsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RoomsInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RoomsInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['rooms.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RoomsGetDiscussionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/rooms.getDiscussions', keyArgs] as const
}

export function getApiV1RoomsGetDiscussionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RoomsGetDiscussionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['rooms.getDiscussions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RoomsGetDiscussions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RoomsGetDiscussionsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsGetDiscussionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RoomsGetDiscussionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['rooms.getDiscussions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RoomsGetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.get']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/rooms.get', keyArgs] as const
}

export function getApiV1RoomsGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.get']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RoomsGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['rooms.get'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RoomsGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.get']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.get']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.get']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1RoomsGetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.get']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RoomsGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['rooms.get'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1RoomsJoinMutationKey() {
  return ['api', '/api/v1/rooms.join', 'POST'] as const
}

export function getPostApiV1RoomsJoinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.join']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.join']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsJoinMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['rooms.join']['$post']>) {
      return parseResponse(client.api.v1['rooms.join'].$post(args, options))
    },
  })
}

export function usePostApiV1RoomsJoin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.join']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['rooms.join']['$post']>,
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
  const mutationDefaults = getPostApiV1RoomsJoinMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1RoomsLeaveMutationKey() {
  return ['api', '/api/v1/rooms.leave', 'POST'] as const
}

export function getPostApiV1RoomsLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.leave']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.leave']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsLeaveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['rooms.leave']['$post']>) {
      return parseResponse(client.api.v1['rooms.leave'].$post(args, options))
    },
  })
}

export function usePostApiV1RoomsLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.leave']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['rooms.leave']['$post']>,
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
  const mutationDefaults = getPostApiV1RoomsLeaveMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1RoomsDeleteMutationKey() {
  return ['api', '/api/v1/rooms.delete', 'POST'] as const
}

export function getPostApiV1RoomsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['rooms.delete']['$post']>) {
      return parseResponse(client.api.v1['rooms.delete'].$post(args, options))
    },
  })
}

export function usePostApiV1RoomsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.delete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['rooms.delete']['$post']>,
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
  const mutationDefaults = getPostApiV1RoomsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1RoomsFavoriteMutationKey() {
  return ['api', '/api/v1/rooms.favorite', 'POST'] as const
}

export function getPostApiV1RoomsFavoriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.favorite']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.favorite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsFavoriteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['rooms.favorite']['$post']>) {
      return parseResponse(client.api.v1['rooms.favorite'].$post(args, options))
    },
  })
}

export function usePostApiV1RoomsFavorite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.favorite']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['rooms.favorite']['$post']>,
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
  const mutationDefaults = getPostApiV1RoomsFavoriteMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1RoomsAutocompleteAvailableForTeamsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/rooms.autocomplete.availableForTeams', keyArgs] as const
}

export function getApiV1RoomsAutocompleteAvailableForTeamsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RoomsAutocompleteAvailableForTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['rooms.autocomplete.availableForTeams'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RoomsAutocompleteAvailableForTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>
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
                  ReturnType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1RoomsAutocompleteAvailableForTeamsQueryKey>
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
            ReturnType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsAutocompleteAvailableForTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RoomsAutocompleteAvailableForTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['rooms.autocomplete.availableForTeams'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RoomsAutocompleteChannelAndPrivateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/rooms.autocomplete.channelAndPrivate', keyArgs] as const
}

export function getApiV1RoomsAutocompleteChannelAndPrivateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RoomsAutocompleteChannelAndPrivateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['rooms.autocomplete.channelAndPrivate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RoomsAutocompleteChannelAndPrivate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>
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
                  ReturnType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1RoomsAutocompleteChannelAndPrivateQueryKey>
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
            ReturnType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsAutocompleteChannelAndPrivateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RoomsAutocompleteChannelAndPrivateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['rooms.autocomplete.channelAndPrivate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RoomsAutocompleteAdminRoomsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/rooms.autocomplete.adminRooms', keyArgs] as const
}

export function getApiV1RoomsAutocompleteAdminRoomsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RoomsAutocompleteAdminRoomsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['rooms.autocomplete.adminRooms'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RoomsAutocompleteAdminRooms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RoomsAutocompleteAdminRoomsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsAutocompleteAdminRoomsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RoomsAutocompleteAdminRoomsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['rooms.autocomplete.adminRooms'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RoomsAdminRoomsGetRoomQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/rooms.adminRooms.getRoom', keyArgs] as const
}

export function getApiV1RoomsAdminRoomsGetRoomQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RoomsAdminRoomsGetRoomQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['rooms.adminRooms.getRoom'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RoomsAdminRoomsGetRoom<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RoomsAdminRoomsGetRoomQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsAdminRoomsGetRoomQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RoomsAdminRoomsGetRoomQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['rooms.adminRooms.getRoom'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1RoomsSaveRoomSettingsMutationKey() {
  return ['api', '/api/v1/rooms.saveRoomSettings', 'POST'] as const
}

export function getPostApiV1RoomsSaveRoomSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.saveRoomSettings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.saveRoomSettings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsSaveRoomSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['rooms.saveRoomSettings']['$post']>,
    ) {
      return parseResponse(client.api.v1['rooms.saveRoomSettings'].$post(args, options))
    },
  })
}

export function usePostApiV1RoomsSaveRoomSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.saveRoomSettings']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['rooms.saveRoomSettings']['$post']>,
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
  const mutationDefaults = getPostApiV1RoomsSaveRoomSettingsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1RoomsNameExistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.nameExists']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/rooms.nameExists', keyArgs] as const
}

export function getApiV1RoomsNameExistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.nameExists']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RoomsNameExistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['rooms.nameExists'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RoomsNameExists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.nameExists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.nameExists']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.nameExists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.nameExists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RoomsNameExistsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['rooms.nameExists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsNameExistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RoomsNameExistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['rooms.nameExists'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1RoomsChangeArchivationStateMutationKey() {
  return ['api', '/api/v1/rooms.changeArchivationState', 'POST'] as const
}

export function getPostApiV1RoomsChangeArchivationStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.changeArchivationState']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.changeArchivationState']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsChangeArchivationStateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['rooms.changeArchivationState']['$post']>,
    ) {
      return parseResponse(client.api.v1['rooms.changeArchivationState'].$post(args, options))
    },
  })
}

export function usePostApiV1RoomsChangeArchivationState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.changeArchivationState']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['rooms.changeArchivationState']['$post']>,
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
  const mutationDefaults = getPostApiV1RoomsChangeArchivationStateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1RoomsExportMutationKey() {
  return ['api', '/api/v1/rooms.export', 'POST'] as const
}

export function getPostApiV1RoomsExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.export']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsExportMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['rooms.export']['$post']>) {
      return parseResponse(client.api.v1['rooms.export'].$post(args, options))
    },
  })
}

export function usePostApiV1RoomsExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.export']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['rooms.export']['$post']>,
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
  const mutationDefaults = getPostApiV1RoomsExportMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1RoomsMuteUserMutationKey() {
  return ['api', '/api/v1/rooms.muteUser', 'POST'] as const
}

export function getPostApiV1RoomsMuteUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.muteUser']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.muteUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsMuteUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['rooms.muteUser']['$post']>) {
      return parseResponse(client.api.v1['rooms.muteUser'].$post(args, options))
    },
  })
}

export function usePostApiV1RoomsMuteUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.muteUser']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['rooms.muteUser']['$post']>,
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
  const mutationDefaults = getPostApiV1RoomsMuteUserMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1RoomsUnmuteUserMutationKey() {
  return ['api', '/api/v1/rooms.unmuteUser', 'POST'] as const
}

export function getPostApiV1RoomsUnmuteUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.unmuteUser']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.unmuteUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsUnmuteUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['rooms.unmuteUser']['$post']>) {
      return parseResponse(client.api.v1['rooms.unmuteUser'].$post(args, options))
    },
  })
}

export function usePostApiV1RoomsUnmuteUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.unmuteUser']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['rooms.unmuteUser']['$post']>,
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
  const mutationDefaults = getPostApiV1RoomsUnmuteUserMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1RoomsCreateDiscussionMutationKey() {
  return ['api', '/api/v1/rooms.createDiscussion', 'POST'] as const
}

export function getPostApiV1RoomsCreateDiscussionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.createDiscussion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.createDiscussion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsCreateDiscussionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['rooms.createDiscussion']['$post']>,
    ) {
      return parseResponse(client.api.v1['rooms.createDiscussion'].$post(args, options))
    },
  })
}

export function usePostApiV1RoomsCreateDiscussion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.createDiscussion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['rooms.createDiscussion']['$post']>,
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
  const mutationDefaults = getPostApiV1RoomsCreateDiscussionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1RoomsImagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.images']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/rooms.images', keyArgs] as const
}

export function getApiV1RoomsImagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.images']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RoomsImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['rooms.images'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RoomsImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.images']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.images']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.images']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.images']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RoomsImagesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.images']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RoomsImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['rooms.images'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AuditRoomsMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.audit)['rooms.members']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/audit/rooms.members', keyArgs] as const
}

export function getApiV1AuditRoomsMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.audit)['rooms.members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AuditRoomsMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.audit['rooms.members'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AuditRoomsMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.audit)['rooms.members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.audit)['rooms.members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.audit)['rooms.members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.audit)['rooms.members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AuditRoomsMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.audit)['rooms.members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AuditRoomsMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AuditRoomsMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.audit['rooms.members'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RoomsMembersOrderedByRoleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/rooms.membersOrderedByRole', keyArgs] as const
}

export function getApiV1RoomsMembersOrderedByRoleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RoomsMembersOrderedByRoleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['rooms.membersOrderedByRole'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RoomsMembersOrderedByRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RoomsMembersOrderedByRoleQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsMembersOrderedByRoleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RoomsMembersOrderedByRoleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['rooms.membersOrderedByRole'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1TeamsCreateMutationKey() {
  return ['api', '/api/v1/teams.create', 'POST'] as const
}

export function getPostApiV1TeamsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['teams.create']['$post']>) {
      return parseResponse(client.api.v1['teams.create'].$post(args, options))
    },
  })
}

export function usePostApiV1TeamsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.create']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['teams.create']['$post']>,
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
  const mutationDefaults = getPostApiV1TeamsCreateMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TeamsListAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.listAll']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/teams.listAll', keyArgs] as const
}

export function getApiV1TeamsListAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.listAll']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TeamsListAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['teams.listAll'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TeamsListAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.listAll']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.listAll']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.listAll']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.listAll']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TeamsListAllQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.listAll']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TeamsListAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TeamsListAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['teams.listAll'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TeamsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.list']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/teams.list', keyArgs] as const
}

export function getApiV1TeamsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TeamsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['teams.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TeamsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TeamsListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TeamsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TeamsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['teams.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TeamsInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.info']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/teams.info', keyArgs] as const
}

export function getApiV1TeamsInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TeamsInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['teams.info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TeamsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TeamsInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TeamsInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TeamsInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['teams.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1TeamsUpdateMutationKey() {
  return ['api', '/api/v1/teams.update', 'POST'] as const
}

export function getPostApiV1TeamsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['teams.update']['$post']>) {
      return parseResponse(client.api.v1['teams.update'].$post(args, options))
    },
  })
}

export function usePostApiV1TeamsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.update']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['teams.update']['$post']>,
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
  const mutationDefaults = getPostApiV1TeamsUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1TeamsAddMembersMutationKey() {
  return ['api', '/api/v1/teams.addMembers', 'POST'] as const
}

export function getPostApiV1TeamsAddMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.addMembers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.addMembers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsAddMembersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['teams.addMembers']['$post']>) {
      return parseResponse(client.api.v1['teams.addMembers'].$post(args, options))
    },
  })
}

export function usePostApiV1TeamsAddMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.addMembers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['teams.addMembers']['$post']>,
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
  const mutationDefaults = getPostApiV1TeamsAddMembersMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1TeamsUpdateMemberMutationKey() {
  return ['api', '/api/v1/teams.updateMember', 'POST'] as const
}

export function getPostApiV1TeamsUpdateMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.updateMember']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.updateMember']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsUpdateMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['teams.updateMember']['$post']>,
    ) {
      return parseResponse(client.api.v1['teams.updateMember'].$post(args, options))
    },
  })
}

export function usePostApiV1TeamsUpdateMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.updateMember']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['teams.updateMember']['$post']>,
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
  const mutationDefaults = getPostApiV1TeamsUpdateMemberMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TeamsMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.members']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/teams.members', keyArgs] as const
}

export function getApiV1TeamsMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TeamsMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['teams.members'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TeamsMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TeamsMembersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.members']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TeamsMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TeamsMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['teams.members'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1TeamsLeaveMutationKey() {
  return ['api', '/api/v1/teams.leave', 'POST'] as const
}

export function getPostApiV1TeamsLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.leave']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.leave']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsLeaveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['teams.leave']['$post']>) {
      return parseResponse(client.api.v1['teams.leave'].$post(args, options))
    },
  })
}

export function usePostApiV1TeamsLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.leave']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['teams.leave']['$post']>,
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
  const mutationDefaults = getPostApiV1TeamsLeaveMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1TeamsRemoveMemberMutationKey() {
  return ['api', '/api/v1/teams.removeMember', 'POST'] as const
}

export function getPostApiV1TeamsRemoveMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.removeMember']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.removeMember']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsRemoveMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['teams.removeMember']['$post']>,
    ) {
      return parseResponse(client.api.v1['teams.removeMember'].$post(args, options))
    },
  })
}

export function usePostApiV1TeamsRemoveMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.removeMember']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['teams.removeMember']['$post']>,
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
  const mutationDefaults = getPostApiV1TeamsRemoveMemberMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1TeamsDeleteMutationKey() {
  return ['api', '/api/v1/teams.delete', 'POST'] as const
}

export function getPostApiV1TeamsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['teams.delete']['$post']>) {
      return parseResponse(client.api.v1['teams.delete'].$post(args, options))
    },
  })
}

export function usePostApiV1TeamsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.delete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['teams.delete']['$post']>,
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
  const mutationDefaults = getPostApiV1TeamsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TeamsAutocompleteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.autocomplete']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/teams.autocomplete', keyArgs] as const
}

export function getApiV1TeamsAutocompleteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.autocomplete']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TeamsAutocompleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['teams.autocomplete'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TeamsAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['teams.autocomplete']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.autocomplete']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.autocomplete']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.autocomplete']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TeamsAutocompleteQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['teams.autocomplete']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TeamsAutocompleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TeamsAutocompleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['teams.autocomplete'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1TeamsConvertToChannelMutationKey() {
  return ['api', '/api/v1/teams.convertToChannel', 'POST'] as const
}

export function getPostApiV1TeamsConvertToChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.convertToChannel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.convertToChannel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsConvertToChannelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['teams.convertToChannel']['$post']>,
    ) {
      return parseResponse(client.api.v1['teams.convertToChannel'].$post(args, options))
    },
  })
}

export function usePostApiV1TeamsConvertToChannel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.convertToChannel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['teams.convertToChannel']['$post']>,
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
  const mutationDefaults = getPostApiV1TeamsConvertToChannelMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1TeamsAddRoomsMutationKey() {
  return ['api', '/api/v1/teams.addRooms', 'POST'] as const
}

export function getPostApiV1TeamsAddRoomsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.addRooms']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.addRooms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsAddRoomsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['teams.addRooms']['$post']>) {
      return parseResponse(client.api.v1['teams.addRooms'].$post(args, options))
    },
  })
}

export function usePostApiV1TeamsAddRooms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.addRooms']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['teams.addRooms']['$post']>,
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
  const mutationDefaults = getPostApiV1TeamsAddRoomsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1TeamsRemoveRoomMutationKey() {
  return ['api', '/api/v1/teams.removeRoom', 'POST'] as const
}

export function getPostApiV1TeamsRemoveRoomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.removeRoom']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.removeRoom']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsRemoveRoomMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['teams.removeRoom']['$post']>) {
      return parseResponse(client.api.v1['teams.removeRoom'].$post(args, options))
    },
  })
}

export function usePostApiV1TeamsRemoveRoom<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.removeRoom']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['teams.removeRoom']['$post']>,
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
  const mutationDefaults = getPostApiV1TeamsRemoveRoomMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1TeamsUpdateRoomMutationKey() {
  return ['api', '/api/v1/teams.updateRoom', 'POST'] as const
}

export function getPostApiV1TeamsUpdateRoomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.updateRoom']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.updateRoom']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsUpdateRoomMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['teams.updateRoom']['$post']>) {
      return parseResponse(client.api.v1['teams.updateRoom'].$post(args, options))
    },
  })
}

export function usePostApiV1TeamsUpdateRoom<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.updateRoom']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['teams.updateRoom']['$post']>,
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
  const mutationDefaults = getPostApiV1TeamsUpdateRoomMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TeamsListRoomsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.listRooms']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/teams.listRooms', keyArgs] as const
}

export function getApiV1TeamsListRoomsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.listRooms']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TeamsListRoomsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['teams.listRooms'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TeamsListRooms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.listRooms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.listRooms']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.listRooms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.listRooms']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TeamsListRoomsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.listRooms']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TeamsListRoomsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TeamsListRoomsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['teams.listRooms'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TeamsListRoomsOfUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/teams.listRoomsOfUser', keyArgs] as const
}

export function getApiV1TeamsListRoomsOfUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TeamsListRoomsOfUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['teams.listRoomsOfUser'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TeamsListRoomsOfUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TeamsListRoomsOfUserQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TeamsListRoomsOfUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TeamsListRoomsOfUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['teams.listRoomsOfUser'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TeamsListChildrenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.listChildren']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/teams.listChildren', keyArgs] as const
}

export function getApiV1TeamsListChildrenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.listChildren']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TeamsListChildrenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['teams.listChildren'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TeamsListChildren<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['teams.listChildren']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['teams.listChildren']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.listChildren']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['teams.listChildren']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TeamsListChildrenQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['teams.listChildren']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TeamsListChildrenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TeamsListChildrenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['teams.listChildren'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1GroupsOnlineQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.online']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/groups.online', keyArgs] as const
}

export function getApiV1GroupsOnlineQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.online']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GroupsOnlineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['groups.online'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GroupsOnline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.online']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.online']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.online']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.online']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1GroupsOnlineQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.online']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsOnlineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GroupsOnlineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['groups.online'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1GroupsGetIntegrationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['groups.getIntegrations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/groups.getIntegrations', keyArgs] as const
}

export function getApiV1GroupsGetIntegrationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['groups.getIntegrations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GroupsGetIntegrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['groups.getIntegrations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GroupsGetIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['groups.getIntegrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['groups.getIntegrations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.getIntegrations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.getIntegrations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1GroupsGetIntegrationsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['groups.getIntegrations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsGetIntegrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GroupsGetIntegrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['groups.getIntegrations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1GroupsAddAllMutationKey() {
  return ['api', '/api/v1/groups.addAll', 'POST'] as const
}

export function getPostApiV1GroupsAddAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.addAll']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.addAll']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsAddAllMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.addAll']['$post']>) {
      return parseResponse(client.api.v1['groups.addAll'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsAddAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.addAll']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.addAll']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsAddAllMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1GroupsAddLeaderMutationKey() {
  return ['api', '/api/v1/groups.addLeader', 'POST'] as const
}

export function getPostApiV1GroupsAddLeaderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.addLeader']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.addLeader']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsAddLeaderMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.addLeader']['$post']>) {
      return parseResponse(client.api.v1['groups.addLeader'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsAddLeader<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.addLeader']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.addLeader']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsAddLeaderMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1GroupsAddModeratorMutationKey() {
  return ['api', '/api/v1/groups.addModerator', 'POST'] as const
}

export function getPostApiV1GroupsAddModeratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.addModerator']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.addModerator']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsAddModeratorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['groups.addModerator']['$post']>,
    ) {
      return parseResponse(client.api.v1['groups.addModerator'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsAddModerator<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.addModerator']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.addModerator']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsAddModeratorMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1GroupsAddOwnerMutationKey() {
  return ['api', '/api/v1/groups.addOwner', 'POST'] as const
}

export function getPostApiV1GroupsAddOwnerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.addOwner']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.addOwner']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsAddOwnerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.addOwner']['$post']>) {
      return parseResponse(client.api.v1['groups.addOwner'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsAddOwner<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.addOwner']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.addOwner']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsAddOwnerMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1GroupsArchiveMutationKey() {
  return ['api', '/api/v1/groups.archive', 'POST'] as const
}

export function getPostApiV1GroupsArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.archive']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsArchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.archive']['$post']>) {
      return parseResponse(client.api.v1['groups.archive'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.archive']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.archive']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1GroupsCloseMutationKey() {
  return ['api', '/api/v1/groups.close', 'POST'] as const
}

export function getPostApiV1GroupsCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.close']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.close']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsCloseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.close']['$post']>) {
      return parseResponse(client.api.v1['groups.close'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.close']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.close']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsCloseMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1GroupsCountersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.counters']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/groups.counters', keyArgs] as const
}

export function getApiV1GroupsCountersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.counters']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GroupsCountersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['groups.counters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GroupsCounters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.counters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.counters']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.counters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.counters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1GroupsCountersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.counters']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsCountersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GroupsCountersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['groups.counters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1GroupsCreateMutationKey() {
  return ['api', '/api/v1/groups.create', 'POST'] as const
}

export function getPostApiV1GroupsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.create']['$post']>) {
      return parseResponse(client.api.v1['groups.create'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.create']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.create']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1GroupsDeleteMutationKey() {
  return ['api', '/api/v1/groups.delete', 'POST'] as const
}

export function getPostApiV1GroupsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.delete']['$post']>) {
      return parseResponse(client.api.v1['groups.delete'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.delete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.delete']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1GroupsHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.history']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/groups.history', keyArgs] as const
}

export function getApiV1GroupsHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.history']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GroupsHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['groups.history'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GroupsHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.history']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.history']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.history']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1GroupsHistoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.history']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GroupsHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['groups.history'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1GroupsInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.info']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/groups.info', keyArgs] as const
}

export function getApiV1GroupsInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GroupsInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['groups.info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GroupsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1GroupsInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GroupsInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['groups.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1GroupsInviteMutationKey() {
  return ['api', '/api/v1/groups.invite', 'POST'] as const
}

export function getPostApiV1GroupsInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.invite']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsInviteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.invite']['$post']>) {
      return parseResponse(client.api.v1['groups.invite'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.invite']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.invite']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsInviteMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1GroupsKickMutationKey() {
  return ['api', '/api/v1/groups.kick', 'POST'] as const
}

export function getPostApiV1GroupsKickMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.kick']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.kick']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsKickMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.kick']['$post']>) {
      return parseResponse(client.api.v1['groups.kick'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsKick<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.kick']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.kick']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsKickMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1GroupsLeaveMutationKey() {
  return ['api', '/api/v1/groups.leave', 'POST'] as const
}

export function getPostApiV1GroupsLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.leave']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.leave']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsLeaveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.leave']['$post']>) {
      return parseResponse(client.api.v1['groups.leave'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.leave']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.leave']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsLeaveMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1GroupsListAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.listAll']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/groups.listAll', keyArgs] as const
}

export function getApiV1GroupsListAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.listAll']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GroupsListAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['groups.listAll'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GroupsListAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.listAll']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.listAll']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.listAll']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.listAll']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1GroupsListAllQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.listAll']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsListAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GroupsListAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['groups.listAll'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1GroupsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.list']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/groups.list', keyArgs] as const
}

export function getApiV1GroupsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GroupsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['groups.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GroupsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1GroupsListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GroupsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['groups.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1GroupsMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.members']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/groups.members', keyArgs] as const
}

export function getApiV1GroupsMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GroupsMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['groups.members'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GroupsMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1GroupsMembersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.members']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GroupsMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['groups.members'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1GroupsMessagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.messages']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/groups.messages', keyArgs] as const
}

export function getApiV1GroupsMessagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.messages']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GroupsMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['groups.messages'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GroupsMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.messages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.messages']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1GroupsMessagesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.messages']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GroupsMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['groups.messages'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1GroupsModeratorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.moderators']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/groups.moderators', keyArgs] as const
}

export function getApiV1GroupsModeratorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.moderators']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GroupsModeratorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['groups.moderators'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GroupsModerators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.moderators']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.moderators']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.moderators']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.moderators']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1GroupsModeratorsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['groups.moderators']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsModeratorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GroupsModeratorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['groups.moderators'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1GroupsOpenMutationKey() {
  return ['api', '/api/v1/groups.open', 'POST'] as const
}

export function getPostApiV1GroupsOpenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.open']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.open']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsOpenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.open']['$post']>) {
      return parseResponse(client.api.v1['groups.open'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsOpen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.open']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.open']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsOpenMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1GroupsRemoveLeaderMutationKey() {
  return ['api', '/api/v1/groups.removeLeader', 'POST'] as const
}

export function getPostApiV1GroupsRemoveLeaderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.removeLeader']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.removeLeader']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsRemoveLeaderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['groups.removeLeader']['$post']>,
    ) {
      return parseResponse(client.api.v1['groups.removeLeader'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsRemoveLeader<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.removeLeader']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.removeLeader']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsRemoveLeaderMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1GroupsRemoveModeratorMutationKey() {
  return ['api', '/api/v1/groups.removeModerator', 'POST'] as const
}

export function getPostApiV1GroupsRemoveModeratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.removeModerator']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.removeModerator']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsRemoveModeratorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['groups.removeModerator']['$post']>,
    ) {
      return parseResponse(client.api.v1['groups.removeModerator'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsRemoveModerator<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.removeModerator']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.removeModerator']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsRemoveModeratorMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1GroupsRemoveOwnerMutationKey() {
  return ['api', '/api/v1/groups.removeOwner', 'POST'] as const
}

export function getPostApiV1GroupsRemoveOwnerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.removeOwner']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.removeOwner']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsRemoveOwnerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['groups.removeOwner']['$post']>,
    ) {
      return parseResponse(client.api.v1['groups.removeOwner'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsRemoveOwner<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.removeOwner']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.removeOwner']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsRemoveOwnerMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1GroupsRenameMutationKey() {
  return ['api', '/api/v1/groups.rename', 'POST'] as const
}

export function getPostApiV1GroupsRenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.rename']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.rename']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsRenameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.rename']['$post']>) {
      return parseResponse(client.api.v1['groups.rename'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsRename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.rename']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.rename']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsRenameMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1GroupsSetAnnouncementMutationKey() {
  return ['api', '/api/v1/groups.setAnnouncement', 'POST'] as const
}

export function getPostApiV1GroupsSetAnnouncementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setAnnouncement']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.setAnnouncement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsSetAnnouncementMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['groups.setAnnouncement']['$post']>,
    ) {
      return parseResponse(client.api.v1['groups.setAnnouncement'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsSetAnnouncement<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.setAnnouncement']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.setAnnouncement']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsSetAnnouncementMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1GroupsSetCustomFieldsMutationKey() {
  return ['api', '/api/v1/groups.setCustomFields', 'POST'] as const
}

export function getPostApiV1GroupsSetCustomFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setCustomFields']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.setCustomFields']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsSetCustomFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['groups.setCustomFields']['$post']>,
    ) {
      return parseResponse(client.api.v1['groups.setCustomFields'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsSetCustomFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.setCustomFields']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.setCustomFields']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsSetCustomFieldsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1GroupsSetDescriptionMutationKey() {
  return ['api', '/api/v1/groups.setDescription', 'POST'] as const
}

export function getPostApiV1GroupsSetDescriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setDescription']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.setDescription']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsSetDescriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['groups.setDescription']['$post']>,
    ) {
      return parseResponse(client.api.v1['groups.setDescription'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsSetDescription<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.setDescription']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.setDescription']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsSetDescriptionMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1GroupsSetPurposeMutationKey() {
  return ['api', '/api/v1/groups.setPurpose', 'POST'] as const
}

export function getPostApiV1GroupsSetPurposeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setPurpose']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.setPurpose']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsSetPurposeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.setPurpose']['$post']>) {
      return parseResponse(client.api.v1['groups.setPurpose'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsSetPurpose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.setPurpose']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.setPurpose']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsSetPurposeMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1GroupsSetReadOnlyMutationKey() {
  return ['api', '/api/v1/groups.setReadOnly', 'POST'] as const
}

export function getPostApiV1GroupsSetReadOnlyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setReadOnly']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.setReadOnly']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsSetReadOnlyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['groups.setReadOnly']['$post']>,
    ) {
      return parseResponse(client.api.v1['groups.setReadOnly'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsSetReadOnly<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.setReadOnly']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.setReadOnly']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsSetReadOnlyMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1GroupsSetTopicMutationKey() {
  return ['api', '/api/v1/groups.setTopic', 'POST'] as const
}

export function getPostApiV1GroupsSetTopicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setTopic']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.setTopic']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsSetTopicMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.setTopic']['$post']>) {
      return parseResponse(client.api.v1['groups.setTopic'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsSetTopic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.setTopic']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.setTopic']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsSetTopicMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1GroupsSetTypeMutationKey() {
  return ['api', '/api/v1/groups.setType', 'POST'] as const
}

export function getPostApiV1GroupsSetTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.setType']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.setType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsSetTypeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.setType']['$post']>) {
      return parseResponse(client.api.v1['groups.setType'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsSetType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.setType']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.setType']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsSetTypeMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1GroupsUnarchiveMutationKey() {
  return ['api', '/api/v1/groups.unarchive', 'POST'] as const
}

export function getPostApiV1GroupsUnarchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.unarchive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.unarchive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsUnarchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.unarchive']['$post']>) {
      return parseResponse(client.api.v1['groups.unarchive'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsUnarchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.unarchive']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.unarchive']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsUnarchiveMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1GroupsFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.files']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/groups.files', keyArgs] as const
}

export function getApiV1GroupsFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.files']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GroupsFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['groups.files'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GroupsFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.files']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1GroupsFilesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.files']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GroupsFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['groups.files'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1GroupsSetEncryptedMutationKey() {
  return ['api', '/api/v1/groups.setEncrypted', 'POST'] as const
}

export function getPostApiV1GroupsSetEncryptedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setEncrypted']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.setEncrypted']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsSetEncryptedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['groups.setEncrypted']['$post']>,
    ) {
      return parseResponse(client.api.v1['groups.setEncrypted'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsSetEncrypted<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.setEncrypted']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.setEncrypted']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsSetEncryptedMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1GroupsConvertToTeamMutationKey() {
  return ['api', '/api/v1/groups.convertToTeam', 'POST'] as const
}

export function getPostApiV1GroupsConvertToTeamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.convertToTeam']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.convertToTeam']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsConvertToTeamMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['groups.convertToTeam']['$post']>,
    ) {
      return parseResponse(client.api.v1['groups.convertToTeam'].$post(args, options))
    },
  })
}

export function usePostApiV1GroupsConvertToTeam<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.convertToTeam']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['groups.convertToTeam']['$post']>,
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
  const mutationDefaults = getPostApiV1GroupsConvertToTeamMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1GroupsRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.roles']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/groups.roles', keyArgs] as const
}

export function getApiV1GroupsRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.roles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GroupsRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['groups.roles'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GroupsRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['groups.roles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.roles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['groups.roles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1GroupsRolesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.roles']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GroupsRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['groups.roles'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DirectoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.directory.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/directory', keyArgs] as const
}

export function getApiV1DirectoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.directory.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DirectoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.directory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Directory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.directory.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DirectoryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DirectoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DirectoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.directory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1RoomsOpenMutationKey() {
  return ['api', '/api/v1/rooms.open', 'POST'] as const
}

export function getPostApiV1RoomsOpenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.open']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.open']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsOpenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['rooms.open']['$post']>) {
      return parseResponse(client.api.v1['rooms.open'].$post(args, options))
    },
  })
}

export function usePostApiV1RoomsOpen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.open']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['rooms.open']['$post']>,
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
  const mutationDefaults = getPostApiV1RoomsOpenMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1RoomsHideMutationKey() {
  return ['api', '/api/v1/rooms.hide', 'POST'] as const
}

export function getPostApiV1RoomsHideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.hide']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.hide']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsHideMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['rooms.hide']['$post']>) {
      return parseResponse(client.api.v1['rooms.hide'].$post(args, options))
    },
  })
}

export function usePostApiV1RoomsHide<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.hide']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['rooms.hide']['$post']>,
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
  const mutationDefaults = getPostApiV1RoomsHideMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1FindOrCreateInviteMutationKey() {
  return ['api', '/api/v1/findOrCreateInvite', 'POST'] as const
}

export function getPostApiV1FindOrCreateInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.findOrCreateInvite.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.findOrCreateInvite.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1FindOrCreateInviteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.findOrCreateInvite.$post>) {
      return parseResponse(client.api.v1.findOrCreateInvite.$post(args, options))
    },
  })
}

export function usePostApiV1FindOrCreateInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.findOrCreateInvite.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.findOrCreateInvite.$post>,
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
  const mutationDefaults = getPostApiV1FindOrCreateInviteMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1RoomsRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.roles']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/rooms.roles', keyArgs] as const
}

export function getApiV1RoomsRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.roles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RoomsRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['rooms.roles'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RoomsRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.roles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.roles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.roles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RoomsRolesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.roles']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RoomsRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['rooms.roles'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RoomsIsMemberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.isMember']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/rooms.isMember', keyArgs] as const
}

export function getApiV1RoomsIsMemberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.isMember']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RoomsIsMemberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['rooms.isMember'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RoomsIsMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.isMember']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['rooms.isMember']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.isMember']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.isMember']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RoomsIsMemberQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.isMember']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsIsMemberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RoomsIsMemberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['rooms.isMember'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/rooms.autocomplete.channelAndPrivate.withPagination', keyArgs] as const
}

export function getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['rooms.autocomplete.channelAndPrivate.withPagination'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RoomsAutocompleteChannelAndPrivateWithPagination<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
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
                    (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
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
                    (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationQueryKey>
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
              (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['rooms.autocomplete.channelAndPrivate.withPagination'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1RoomsMediaRidMutationKey() {
  return ['api', '/api/v1/rooms.media/:rid', 'POST'] as const
}

export function getPostApiV1RoomsMediaRidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.media'][':rid']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.media'][':rid']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsMediaRidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['rooms.media'][':rid']['$post']>,
    ) {
      return parseResponse(client.api.v1['rooms.media'][':rid'].$post(args, options))
    },
  })
}

export function usePostApiV1RoomsMediaRid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['rooms.media'][':rid']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['rooms.media'][':rid']['$post']>,
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
  const mutationDefaults = getPostApiV1RoomsMediaRidMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1RoomsMediaConfirmRidFileIdMutationKey() {
  return ['api', '/api/v1/rooms.mediaConfirm/:rid/:fileId', 'POST'] as const
}

export function getPostApiV1RoomsMediaConfirmRidFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['rooms.mediaConfirm'][':rid'][':fileId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.mediaConfirm'][':rid'][':fileId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsMediaConfirmRidFileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['rooms.mediaConfirm'][':rid'][':fileId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['rooms.mediaConfirm'][':rid'][':fileId'].$post(args, options),
      )
    },
  })
}

export function usePostApiV1RoomsMediaConfirmRidFileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1)['rooms.mediaConfirm'][':rid'][':fileId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1)['rooms.mediaConfirm'][':rid'][':fileId']['$post']
          >,
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
  const mutationDefaults = getPostApiV1RoomsMediaConfirmRidFileIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1UploadsDeleteMutationKey() {
  return ['api', '/api/v1/uploads.delete', 'POST'] as const
}

export function getPostApiV1UploadsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['uploads.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['uploads.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UploadsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['uploads.delete']['$post']>) {
      return parseResponse(client.api.v1['uploads.delete'].$post(args, options))
    },
  })
}

export function usePostApiV1UploadsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['uploads.delete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['uploads.delete']['$post']>,
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
  const mutationDefaults = getPostApiV1UploadsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ListInvitesQueryKey() {
  return ['api', '/api/v1/listInvites'] as const
}

export function getApiV1ListInvitesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ListInvitesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.listInvites.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ListInvites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.listInvites.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.listInvites.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.listInvites.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ListInvitesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.listInvites.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ListInvitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ListInvitesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.listInvites.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1RemoveInviteIdMutationKey() {
  return ['api', '/api/v1/removeInvite/:_id', 'DELETE'] as const
}

export function getDeleteApiV1RemoveInviteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.removeInvite)[':_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.removeInvite)[':_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1RemoveInviteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.removeInvite)[':_id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.removeInvite[':_id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1RemoveInviteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.removeInvite)[':_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.removeInvite)[':_id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1RemoveInviteIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1UseInviteTokenMutationKey() {
  return ['api', '/api/v1/useInviteToken', 'POST'] as const
}

export function getPostApiV1UseInviteTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.useInviteToken.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.useInviteToken.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UseInviteTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.useInviteToken.$post>) {
      return parseResponse(client.api.v1.useInviteToken.$post(args, options))
    },
  })
}

export function usePostApiV1UseInviteToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.useInviteToken.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.useInviteToken.$post>,
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
  const mutationDefaults = getPostApiV1UseInviteTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1AbacRoomsRidAttributesMutationKey() {
  return ['api', '/api/v1/abac/rooms/:rid/attributes', 'POST'] as const
}

export function getPostApiV1AbacRoomsRidAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AbacRoomsRidAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$post']>,
    ) {
      return parseResponse(client.api.v1.abac.rooms[':rid'].attributes.$post(args, options))
    },
  })
}

export function usePostApiV1AbacRoomsRidAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$post']>,
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
  const mutationDefaults = getPostApiV1AbacRoomsRidAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1AbacRoomsRidAttributesMutationKey() {
  return ['api', '/api/v1/abac/rooms/:rid/attributes', 'DELETE'] as const
}

export function getDeleteApiV1AbacRoomsRidAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AbacRoomsRidAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$delete']>,
    ) {
      return parseResponse(client.api.v1.abac.rooms[':rid'].attributes.$delete(args, options))
    },
  })
}

export function useDeleteApiV1AbacRoomsRidAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1AbacRoomsRidAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutApiV1AbacRoomsRidAttributesKeyMutationKey() {
  return ['api', '/api/v1/abac/rooms/:rid/attributes/:key', 'PUT'] as const
}

export function getPutApiV1AbacRoomsRidAttributesKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AbacRoomsRidAttributesKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$put']
      >,
    ) {
      return parseResponse(client.api.v1.abac.rooms[':rid'].attributes[':key'].$put(args, options))
    },
  })
}

export function usePutApiV1AbacRoomsRidAttributesKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$put']>,
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
  const mutationDefaults = getPutApiV1AbacRoomsRidAttributesKeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1AbacRoomsRidAttributesKeyMutationKey() {
  return ['api', '/api/v1/abac/rooms/:rid/attributes/:key', 'POST'] as const
}

export function getPostApiV1AbacRoomsRidAttributesKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AbacRoomsRidAttributesKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.abac.rooms[':rid'].attributes[':key'].$post(args, options))
    },
  })
}

export function usePostApiV1AbacRoomsRidAttributesKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$post']
          >,
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
  const mutationDefaults = getPostApiV1AbacRoomsRidAttributesKeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1AbacRoomsRidAttributesKeyMutationKey() {
  return ['api', '/api/v1/abac/rooms/:rid/attributes/:key', 'DELETE'] as const
}

export function getDeleteApiV1AbacRoomsRidAttributesKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AbacRoomsRidAttributesKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.abac.rooms[':rid'].attributes[':key'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AbacRoomsRidAttributesKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiV1AbacRoomsRidAttributesKeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1AbacAttributesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.abac.attributes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/abac/attributes', keyArgs] as const
}

export function getApiV1AbacAttributesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.abac.attributes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AbacAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.abac.attributes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AbacAttributes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.attributes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.abac.attributes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.attributes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.attributes.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AbacAttributesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.attributes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AbacAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AbacAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.abac.attributes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1AbacAttributesMutationKey() {
  return ['api', '/api/v1/abac/attributes', 'POST'] as const
}

export function getPostApiV1AbacAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.attributes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.abac.attributes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AbacAttributesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.abac.attributes.$post>) {
      return parseResponse(client.api.v1.abac.attributes.$post(args, options))
    },
  })
}

export function usePostApiV1AbacAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.attributes.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.abac.attributes.$post>,
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
  const mutationDefaults = getPostApiV1AbacAttributesMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1AbacUsersSyncMutationKey() {
  return ['api', '/api/v1/abac/users/sync', 'POST'] as const
}

export function getPostApiV1AbacUsersSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.users.sync.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.abac.users.sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AbacUsersSyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.abac.users.sync.$post>) {
      return parseResponse(client.api.v1.abac.users.sync.$post(args, options))
    },
  })
}

export function usePostApiV1AbacUsersSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.users.sync.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.abac.users.sync.$post>,
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
  const mutationDefaults = getPostApiV1AbacUsersSyncMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AbacAttributesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/abac/attributes/:_id', keyArgs] as const
}

export function getApiV1AbacAttributesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AbacAttributesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.abac.attributes[':_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AbacAttributesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AbacAttributesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AbacAttributesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AbacAttributesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.abac.attributes[':_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1AbacAttributesIdMutationKey() {
  return ['api', '/api/v1/abac/attributes/:_id', 'PUT'] as const
}

export function getPutApiV1AbacAttributesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AbacAttributesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$put']>,
    ) {
      return parseResponse(client.api.v1.abac.attributes[':_id'].$put(args, options))
    },
  })
}

export function usePutApiV1AbacAttributesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$put']>,
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
  const mutationDefaults = getPutApiV1AbacAttributesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1AbacAttributesIdMutationKey() {
  return ['api', '/api/v1/abac/attributes/:_id', 'DELETE'] as const
}

export function getDeleteApiV1AbacAttributesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AbacAttributesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.abac.attributes[':_id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1AbacAttributesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1AbacAttributesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AbacAttributesKeyIsInUseQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/abac/attributes/:key/is-in-use', keyArgs] as const
}

export function getApiV1AbacAttributesKeyIsInUseQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AbacAttributesKeyIsInUseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.abac.attributes[':key']['is-in-use'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AbacAttributesKeyIsInUse<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>
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
                  ReturnType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AbacAttributesKeyIsInUseQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AbacAttributesKeyIsInUseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AbacAttributesKeyIsInUseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.abac.attributes[':key']['is-in-use'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AbacAttributesListKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/abac/attributes.listKeys', keyArgs] as const
}

export function getApiV1AbacAttributesListKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AbacAttributesListKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.abac['attributes.listKeys'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AbacAttributesListKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AbacAttributesListKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AbacAttributesListKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AbacAttributesListKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.abac['attributes.listKeys'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AbacAttributesListAssignableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/abac/attributes.listAssignable', keyArgs] as const
}

export function getApiV1AbacAttributesListAssignableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AbacAttributesListAssignableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.abac['attributes.listAssignable'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AbacAttributesListAssignable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>
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
                  ReturnType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AbacAttributesListAssignableQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AbacAttributesListAssignableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AbacAttributesListAssignableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.abac['attributes.listAssignable'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AbacRoomsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.abac.rooms.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/abac/rooms', keyArgs] as const
}

export function getApiV1AbacRoomsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.abac.rooms.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AbacRoomsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.abac.rooms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AbacRooms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.rooms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.abac.rooms.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.rooms.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.rooms.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AbacRoomsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.rooms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AbacRoomsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AbacRoomsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.abac.rooms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1AbacRoomsEvaluateMembershipMutationKey() {
  return ['api', '/api/v1/abac/rooms.evaluateMembership', 'POST'] as const
}

export function getPostApiV1AbacRoomsEvaluateMembershipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abac)['rooms.evaluateMembership']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.abac)['rooms.evaluateMembership']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AbacRoomsEvaluateMembershipMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.abac)['rooms.evaluateMembership']['$post']>,
    ) {
      return parseResponse(client.api.v1.abac['rooms.evaluateMembership'].$post(args, options))
    },
  })
}

export function usePostApiV1AbacRoomsEvaluateMembership<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.abac)['rooms.evaluateMembership']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.abac)['rooms.evaluateMembership']['$post']>,
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
  const mutationDefaults = getPostApiV1AbacRoomsEvaluateMembershipMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1AbacAuditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.abac.audit.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/abac/audit', keyArgs] as const
}

export function getApiV1AbacAuditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.abac.audit.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AbacAuditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.abac.audit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AbacAudit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.audit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.abac.audit.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.audit.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.audit.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AbacAuditQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.audit.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AbacAuditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AbacAuditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.abac.audit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AbacPdpHealthQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.abac.pdp.health.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/abac/pdp/health', keyArgs] as const
}

export function getApiV1AbacPdpHealthQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.abac.pdp.health.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AbacPdpHealthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.abac.pdp.health.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AbacPdpHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.pdp.health.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.abac.pdp.health.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.pdp.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.pdp.health.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AbacPdpHealthQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.pdp.health.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AbacPdpHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AbacPdpHealthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.abac.pdp.health.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SubscriptionsGetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['subscriptions.get']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/subscriptions.get', keyArgs] as const
}

export function getApiV1SubscriptionsGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['subscriptions.get']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SubscriptionsGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['subscriptions.get'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SubscriptionsGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['subscriptions.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['subscriptions.get']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['subscriptions.get']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['subscriptions.get']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SubscriptionsGetQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['subscriptions.get']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubscriptionsGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SubscriptionsGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['subscriptions.get'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SubscriptionsGetOneQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['subscriptions.getOne']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/subscriptions.getOne', keyArgs] as const
}

export function getApiV1SubscriptionsGetOneQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['subscriptions.getOne']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SubscriptionsGetOneQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['subscriptions.getOne'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SubscriptionsGetOne<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['subscriptions.getOne']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['subscriptions.getOne']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['subscriptions.getOne']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['subscriptions.getOne']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SubscriptionsGetOneQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['subscriptions.getOne']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubscriptionsGetOneQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SubscriptionsGetOneQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['subscriptions.getOne'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1SubscriptionsReadMutationKey() {
  return ['api', '/api/v1/subscriptions.read', 'POST'] as const
}

export function getPostApiV1SubscriptionsReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['subscriptions.read']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['subscriptions.read']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SubscriptionsReadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['subscriptions.read']['$post']>,
    ) {
      return parseResponse(client.api.v1['subscriptions.read'].$post(args, options))
    },
  })
}

export function usePostApiV1SubscriptionsRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['subscriptions.read']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['subscriptions.read']['$post']>,
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
  const mutationDefaults = getPostApiV1SubscriptionsReadMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1SubscriptionsUnreadMutationKey() {
  return ['api', '/api/v1/subscriptions.unread', 'POST'] as const
}

export function getPostApiV1SubscriptionsUnreadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['subscriptions.unread']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['subscriptions.unread']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SubscriptionsUnreadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['subscriptions.unread']['$post']>,
    ) {
      return parseResponse(client.api.v1['subscriptions.unread'].$post(args, options))
    },
  })
}

export function usePostApiV1SubscriptionsUnread<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['subscriptions.unread']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['subscriptions.unread']['$post']>,
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
  const mutationDefaults = getPostApiV1SubscriptionsUnreadMutationOptions<TError, TOnMutateResult>(
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
