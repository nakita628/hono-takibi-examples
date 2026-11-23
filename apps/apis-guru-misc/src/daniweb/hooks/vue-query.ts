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

export function getAppsKey() {
  return ['apps'] as const
}

export function getAudiencesKey() {
  return ['audiences'] as const
}

export function getAutocompletesKey() {
  return ['autocompletes'] as const
}

export function getConversationsKey() {
  return ['conversations'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getIndustriesKey() {
  return ['industries'] as const
}

export function getMarkdownKey() {
  return ['markdown'] as const
}

export function getMessagesKey() {
  return ['messages'] as const
}

export function getPositionsKey() {
  return ['positions'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getAppsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.apps.$get>>) {
  return ['apps', '/apps', toValue(args)] as const
}

export function getAppsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
          ReturnType<typeof getAppsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':ID']['$get']>>,
) {
  return ['apps', '/apps/:ID', toValue(args)] as const
}

export function getAppsIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':ID'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAppsID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':ID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':ID']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':ID']['$get']>>>
            >
          >,
          ReturnType<typeof getAppsIDQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':ID']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppsIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAudiencesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.audiences.$get>>,
) {
  return ['audiences', '/audiences', toValue(args)] as const
}

export function getAudiencesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.audiences.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAudiencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audiences.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAudiences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.audiences.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
          >,
          ReturnType<typeof getAudiencesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAudiencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAudiencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audiences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAudiencesIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audiences)[':ID']['$get']>>,
) {
  return ['audiences', '/audiences/:ID', toValue(args)] as const
}

export function getAudiencesIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audiences)[':ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAudiencesIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audiences[':ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAudiencesID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':ID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audiences)[':ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':ID']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':ID']['$get']>>>
            >
          >,
          ReturnType<typeof getAudiencesIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudiencesIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAudiencesIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audiences[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAudiencesIDMembershipsMutationKey() {
  return ['audiences', '/audiences/:ID/memberships', 'POST'] as const
}

export function getPostAudiencesIDMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audiences)[':ID']['memberships']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.audiences)[':ID']['memberships']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAudiencesIDMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.audiences)[':ID']['memberships']['$post']>,
    ) {
      return parseResponse(client.audiences[':ID'].memberships.$post(args, options))
    },
  })
}

export function usePostAudiencesIDMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.audiences)[':ID']['memberships']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.audiences)[':ID']['memberships']['$post']>,
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
  const mutationDefaults = getPostAudiencesIDMembershipsMutationOptions<TError, TOnMutateResult>(
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

export function getAutocompletesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.autocompletes.$get>>,
) {
  return ['autocompletes', '/autocompletes', toValue(args)] as const
}

export function getAutocompletesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.autocompletes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutocompletesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.autocompletes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAutocompletes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.autocompletes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.autocompletes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.autocompletes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.autocompletes.$get>>>>
          >,
          ReturnType<typeof getAutocompletesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.autocompletes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAutocompletesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAutocompletesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.autocompletes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsSchedulesMutationKey() {
  return ['conversations', '/conversations/schedules', 'POST'] as const
}

export function getPostConversationsSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.schedules.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.conversations.schedules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsSchedulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.schedules.$post>) {
      return parseResponse(client.conversations.schedules.$post(args, options))
    },
  })
}

export function usePostConversationsSchedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.schedules.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.conversations.schedules.$post>,
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
  const mutationDefaults = getPostConversationsSchedulesMutationOptions<TError, TOnMutateResult>(
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

export function getPostConversationsSearchesMutationKey() {
  return ['conversations', '/conversations/searches', 'POST'] as const
}

export function getPostConversationsSearchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.searches.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.conversations.searches.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsSearchesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.searches.$post>) {
      return parseResponse(client.conversations.searches.$post(args, options))
    },
  })
}

export function usePostConversationsSearches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.searches.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.conversations.searches.$post>,
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
  const mutationDefaults = getPostConversationsSearchesMutationOptions<TError, TOnMutateResult>(
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

export function getConversationsStatusesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.statuses.$get>>,
) {
  return ['conversations', '/conversations/statuses', toValue(args)] as const
}

export function getConversationsStatusesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.statuses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsStatusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.statuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsStatuses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.statuses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversations.statuses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.statuses.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.statuses.$get>>>
            >
          >,
          ReturnType<typeof getConversationsStatusesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.statuses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsStatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsStatusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.statuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversationsIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.conversations)[':ID']['$get']>>,
) {
  return ['conversations', '/conversations/:ID', toValue(args)] as const
}

export function getConversationsIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.conversations)[':ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations[':ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.conversations)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.conversations)[':ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.conversations)[':ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversationsIDMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':ID']['messages']['$get']>
  >,
) {
  return ['conversations', '/conversations/:ID/messages', toValue(args)] as const
}

export function getConversationsIDMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':ID']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsIDMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations[':ID'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsIDMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':ID']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':ID']['messages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':ID']['messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':ID']['messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsIDMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.conversations)[':ID']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsIDMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsIDMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations[':ID'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsIDMessagesMutationKey() {
  return ['conversations', '/conversations/:ID/messages', 'POST'] as const
}

export function getPostConversationsIDMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':ID']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':ID']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsIDMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':ID']['messages']['$post']>,
    ) {
      return parseResponse(client.conversations[':ID'].messages.$post(args, options))
    },
  })
}

export function usePostConversationsIDMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':ID']['messages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':ID']['messages']['$post']>,
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
  const mutationDefaults = getPostConversationsIDMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getPostConversationsIDSchedulesMutationKey() {
  return ['conversations', '/conversations/:ID/schedules', 'POST'] as const
}

export function getPostConversationsIDSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':ID']['schedules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':ID']['schedules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsIDSchedulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':ID']['schedules']['$post']>,
    ) {
      return parseResponse(client.conversations[':ID'].schedules.$post(args, options))
    },
  })
}

export function usePostConversationsIDSchedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':ID']['schedules']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':ID']['schedules']['$post']>,
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
  const mutationDefaults = getPostConversationsIDSchedulesMutationOptions<TError, TOnMutateResult>(
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

export function getPostConversationsIDSearchesMutationKey() {
  return ['conversations', '/conversations/:ID/searches', 'POST'] as const
}

export function getPostConversationsIDSearchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':ID']['searches']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':ID']['searches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsIDSearchesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':ID']['searches']['$post']>,
    ) {
      return parseResponse(client.conversations[':ID'].searches.$post(args, options))
    },
  })
}

export function usePostConversationsIDSearches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':ID']['searches']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':ID']['searches']['$post']>,
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
  const mutationDefaults = getPostConversationsIDSearchesMutationOptions<TError, TOnMutateResult>(
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

export function getConversationsIDStatusesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':ID']['statuses']['$get']>
  >,
) {
  return ['conversations', '/conversations/:ID/statuses', toValue(args)] as const
}

export function getConversationsIDStatusesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':ID']['statuses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsIDStatusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations[':ID'].statuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsIDStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':ID']['statuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations)[':ID']['statuses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':ID']['statuses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':ID']['statuses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsIDStatusesQueryKey>
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
          Awaited<ReturnType<(typeof client.conversations)[':ID']['statuses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsIDStatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsIDStatusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations[':ID'].statuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchConversationsIDStatusesMutationKey() {
  return ['conversations', '/conversations/:ID/statuses', 'PATCH'] as const
}

export function getPatchConversationsIDStatusesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':ID']['statuses']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations)[':ID']['statuses']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchConversationsIDStatusesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations)[':ID']['statuses']['$patch']>,
    ) {
      return parseResponse(client.conversations[':ID'].statuses.$patch(args, options))
    },
  })
}

export function usePatchConversationsIDStatuses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations)[':ID']['statuses']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations)[':ID']['statuses']['$patch']>,
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
  const mutationDefaults = getPatchConversationsIDStatusesMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
) {
  return ['groups', '/groups', toValue(args)] as const
}

export function getGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          ReturnType<typeof getGroupsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupsMutationKey() {
  return ['groups', '/groups', 'POST'] as const
}

export function getPostGroupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
    TError,
    InferRequestType<typeof client.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.groups.$post>) {
      return parseResponse(client.groups.$post(args, options))
    },
  })
}

export function usePostGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.groups.$post>,
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
  const mutationDefaults = getPostGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGroupsMessagesMetadataFiltersMutationKey() {
  return ['groups', '/groups/messages/metadata/filters', 'POST'] as const
}

export function getPostGroupsMessagesMetadataFiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.groups.messages.metadata.filters.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.groups.messages.metadata.filters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsMessagesMetadataFiltersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.groups.messages.metadata.filters.$post>) {
      return parseResponse(client.groups.messages.metadata.filters.$post(args, options))
    },
  })
}

export function usePostGroupsMessagesMetadataFilters<
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
                Awaited<ReturnType<typeof client.groups.messages.metadata.filters.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.groups.messages.metadata.filters.$post>,
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
  const mutationDefaults = getPostGroupsMessagesMetadataFiltersMutationOptions<
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

export function getGroupsMessagesIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups.messages)[':ID']['$get']>>,
) {
  return ['groups', '/groups/messages/:ID', toValue(args)] as const
}

export function getGroupsMessagesIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups.messages)[':ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsMessagesIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.messages[':ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsMessagesID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups.messages)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups.messages)[':ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups.messages)[':ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups.messages)[':ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsMessagesIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups.messages)[':ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsMessagesIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsMessagesIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.messages[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGroupsMessagesIDMutationKey() {
  return ['groups', '/groups/messages/:ID', 'DELETE'] as const
}

export function getDeleteGroupsMessagesIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups.messages)[':ID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.groups.messages)[':ID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsMessagesIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups.messages)[':ID']['$delete']>) {
      return parseResponse(client.groups.messages[':ID'].$delete(args, options))
    },
  })
}

export function useDeleteGroupsMessagesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups.messages)[':ID']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups.messages)[':ID']['$delete']>,
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
  const mutationDefaults = getDeleteGroupsMessagesIDMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsMessagesIDMetadataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['$get']>
  >,
) {
  return ['groups', '/groups/messages/:ID/metadata', toValue(args)] as const
}

export function getGroupsMessagesIDMetadataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsMessagesIDMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.messages[':ID'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsMessagesIDMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups.messages)[':ID']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups.messages)[':ID']['metadata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups.messages)[':ID']['metadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsMessagesIDMetadataQueryKey>
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
          Awaited<ReturnType<(typeof client.groups.messages)[':ID']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsMessagesIDMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsMessagesIDMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.messages[':ID'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupsMessagesIDMetadataMutationKey() {
  return ['groups', '/groups/messages/:ID/metadata', 'POST'] as const
}

export function getPostGroupsMessagesIDMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups.messages)[':ID']['metadata']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsMessagesIDMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['$post']>,
    ) {
      return parseResponse(client.groups.messages[':ID'].metadata.$post(args, options))
    },
  })
}

export function usePostGroupsMessagesIDMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups.messages)[':ID']['metadata']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['$post']>,
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
  const mutationDefaults = getPostGroupsMessagesIDMetadataMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsMessagesIDMetadataCollectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['collections']['$get']>
  >,
) {
  return ['groups', '/groups/messages/:ID/metadata/collections', toValue(args)] as const
}

export function getGroupsMessagesIDMetadataCollectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['collections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsMessagesIDMetadataCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.messages[':ID'].metadata.collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsMessagesIDMetadataCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.groups.messages)[':ID']['metadata']['collections']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['collections']['$get']>
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
                    (typeof client.groups.messages)[':ID']['metadata']['collections']['$get']
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
                    (typeof client.groups.messages)[':ID']['metadata']['collections']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGroupsMessagesIDMetadataCollectionsQueryKey>
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
            ReturnType<(typeof client.groups.messages)[':ID']['metadata']['collections']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsMessagesIDMetadataCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsMessagesIDMetadataCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.messages[':ID'].metadata.collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupsSchedulesMutationKey() {
  return ['groups', '/groups/schedules', 'POST'] as const
}

export function getPostGroupsSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.schedules.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.groups.schedules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsSchedulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.groups.schedules.$post>) {
      return parseResponse(client.groups.schedules.$post(args, options))
    },
  })
}

export function usePostGroupsSchedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.groups.schedules.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.groups.schedules.$post>,
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
  const mutationDefaults = getPostGroupsSchedulesMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsStatusesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.statuses.$get>>,
) {
  return ['groups', '/groups/statuses', toValue(args)] as const
}

export function getGroupsStatusesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.statuses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsStatusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.statuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsStatuses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.statuses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.statuses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.groups.statuses.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.groups.statuses.$get>>>
            >
          >,
          ReturnType<typeof getGroupsStatusesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.statuses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsStatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsStatusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.statuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':ID']['$get']>>,
) {
  return ['groups', '/groups/:ID', toValue(args)] as const
}

export function getGroupsIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['$get']>>>
            >
          >,
          ReturnType<typeof getGroupsIDQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchGroupsIDMutationKey() {
  return ['groups', '/groups/:ID', 'PATCH'] as const
}

export function getPatchGroupsIDMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.groups)[':ID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGroupsIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':ID']['$patch']>) {
      return parseResponse(client.groups[':ID'].$patch(args, options))
    },
  })
}

export function usePatchGroupsID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':ID']['$patch']>,
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
  const mutationDefaults = getPatchGroupsIDMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGroupsIDMembershipsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':ID']['memberships']['$get']>>,
) {
  return ['groups', '/groups/:ID/memberships', toValue(args)] as const
}

export function getGroupsIDMembershipsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':ID']['memberships']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsIDMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':ID'].memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsIDMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':ID']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':ID']['memberships']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':ID']['memberships']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':ID']['memberships']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsIDMembershipsQueryKey>
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
          Awaited<ReturnType<(typeof client.groups)[':ID']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIDMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsIDMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':ID'].memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupsIDMembershipsMutationKey() {
  return ['groups', '/groups/:ID/memberships', 'POST'] as const
}

export function getPostGroupsIDMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':ID']['memberships']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':ID']['memberships']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsIDMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':ID']['memberships']['$post']>,
    ) {
      return parseResponse(client.groups[':ID'].memberships.$post(args, options))
    },
  })
}

export function usePostGroupsIDMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':ID']['memberships']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':ID']['memberships']['$post']>,
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
  const mutationDefaults = getPostGroupsIDMembershipsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGroupsIDMembershipsMutationKey() {
  return ['groups', '/groups/:ID/memberships', 'DELETE'] as const
}

export function getDeleteGroupsIDMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':ID']['memberships']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':ID']['memberships']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsIDMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':ID']['memberships']['$delete']>,
    ) {
      return parseResponse(client.groups[':ID'].memberships.$delete(args, options))
    },
  })
}

export function useDeleteGroupsIDMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':ID']['memberships']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':ID']['memberships']['$delete']>,
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
  const mutationDefaults = getDeleteGroupsIDMembershipsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchGroupsIDMembershipsMutationKey() {
  return ['groups', '/groups/:ID/memberships', 'PATCH'] as const
}

export function getPatchGroupsIDMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':ID']['memberships']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':ID']['memberships']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGroupsIDMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':ID']['memberships']['$patch']>,
    ) {
      return parseResponse(client.groups[':ID'].memberships.$patch(args, options))
    },
  })
}

export function usePatchGroupsIDMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':ID']['memberships']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':ID']['memberships']['$patch']>,
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
  const mutationDefaults = getPatchGroupsIDMembershipsMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsIDMessagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':ID']['messages']['$get']>>,
) {
  return ['groups', '/groups/:ID/messages', toValue(args)] as const
}

export function getGroupsIDMessagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':ID']['messages']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsIDMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':ID'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsIDMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['messages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':ID']['messages']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':ID']['messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':ID']['messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsIDMessagesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['messages']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIDMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsIDMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':ID'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupsIDMessagesMutationKey() {
  return ['groups', '/groups/:ID/messages', 'POST'] as const
}

export function getPostGroupsIDMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':ID']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':ID']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsIDMessagesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':ID']['messages']['$post']>) {
      return parseResponse(client.groups[':ID'].messages.$post(args, options))
    },
  })
}

export function usePostGroupsIDMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':ID']['messages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':ID']['messages']['$post']>,
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
  const mutationDefaults = getPostGroupsIDMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getPostGroupsIDSchedulesMutationKey() {
  return ['groups', '/groups/:ID/schedules', 'POST'] as const
}

export function getPostGroupsIDSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':ID']['schedules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':ID']['schedules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsIDSchedulesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':ID']['schedules']['$post']>) {
      return parseResponse(client.groups[':ID'].schedules.$post(args, options))
    },
  })
}

export function usePostGroupsIDSchedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':ID']['schedules']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':ID']['schedules']['$post']>,
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
  const mutationDefaults = getPostGroupsIDSchedulesMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsIDStatusesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':ID']['statuses']['$get']>>,
) {
  return ['groups', '/groups/:ID/statuses', toValue(args)] as const
}

export function getGroupsIDStatusesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':ID']['statuses']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsIDStatusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':ID'].statuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsIDStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['statuses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':ID']['statuses']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':ID']['statuses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':ID']['statuses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsIDStatusesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['statuses']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIDStatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsIDStatusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':ID'].statuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIndustriesQueryKey() {
  return ['industries', '/industries'] as const
}

export function getIndustriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIndustriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.industries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIndustries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.industries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.industries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.industries.$get>>>>
          >,
          ReturnType<typeof getIndustriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.industries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIndustriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIndustriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.industries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMarkdownMutationKey() {
  return ['markdown', '/markdown', 'POST'] as const
}

export function getPostMarkdownMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markdown.$post>>>>>,
    TError,
    InferRequestType<typeof client.markdown.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMarkdownMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.markdown.$post>) {
      return parseResponse(client.markdown.$post(args, options))
    },
  })
}

export function usePostMarkdown<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markdown.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.markdown.$post>,
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
  const mutationDefaults = getPostMarkdownMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMarkdownEmoticonsQueryKey() {
  return ['markdown', '/markdown/emoticons'] as const
}

export function getMarkdownEmoticonsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMarkdownEmoticonsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.markdown.emoticons.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarkdownEmoticons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markdown.emoticons.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.markdown.emoticons.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.markdown.emoticons.$get>>>
            >
          >,
          ReturnType<typeof getMarkdownEmoticonsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markdown.emoticons.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMarkdownEmoticonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMarkdownEmoticonsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.markdown.emoticons.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMessagesMetadataFiltersMutationKey() {
  return ['messages', '/messages/metadata/filters', 'POST'] as const
}

export function getPostMessagesMetadataFiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messages.metadata.filters.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.messages.metadata.filters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesMetadataFiltersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messages.metadata.filters.$post>) {
      return parseResponse(client.messages.metadata.filters.$post(args, options))
    },
  })
}

export function usePostMessagesMetadataFilters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.messages.metadata.filters.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.messages.metadata.filters.$post>,
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
  const mutationDefaults = getPostMessagesMetadataFiltersMutationOptions<TError, TOnMutateResult>(
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

export function getMessagesIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messages)[':ID']['$get']>>,
) {
  return ['messages', '/messages/:ID', toValue(args)] as const
}

export function getMessagesIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messages)[':ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagesIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messages[':ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagesID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':ID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messages)[':ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':ID']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':ID']['$get']>>>
            >
          >,
          ReturnType<typeof getMessagesIDQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':ID']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagesIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messages[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMessagesIDMetadataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messages)[':ID']['metadata']['$get']>>,
) {
  return ['messages', '/messages/:ID/metadata', toValue(args)] as const
}

export function getMessagesIDMetadataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messages)[':ID']['metadata']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagesIDMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messages[':ID'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagesIDMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messages)[':ID']['metadata']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMessagesIDMetadataQueryKey>
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
          Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesIDMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagesIDMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messages[':ID'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMessagesIDMetadataMutationKey() {
  return ['messages', '/messages/:ID/metadata', 'POST'] as const
}

export function getPostMessagesIDMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)[':ID']['metadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesIDMetadataMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messages)[':ID']['metadata']['$post']>) {
      return parseResponse(client.messages[':ID'].metadata.$post(args, options))
    },
  })
}

export function usePostMessagesIDMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messages)[':ID']['metadata']['$post']>,
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
  const mutationDefaults = getPostMessagesIDMetadataMutationOptions<TError, TOnMutateResult>(
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

export function getMessagesIDMetadataCollectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messages)[':ID']['metadata']['collections']['$get']>
  >,
) {
  return ['messages', '/messages/:ID/metadata/collections', toValue(args)] as const
}

export function getMessagesIDMetadataCollectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messages)[':ID']['metadata']['collections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagesIDMetadataCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messages[':ID'].metadata.collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagesIDMetadataCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messages)[':ID']['metadata']['collections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.messages)[':ID']['metadata']['collections']['$get']>
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
                  ReturnType<(typeof client.messages)[':ID']['metadata']['collections']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMessagesIDMetadataCollectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['collections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesIDMetadataCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagesIDMetadataCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messages[':ID'].metadata.collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPositionsMutationKey() {
  return ['positions', '/positions', 'POST'] as const
}

export function getPostPositionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.positions.$post>>>>>,
    TError,
    InferRequestType<typeof client.positions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPositionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.positions.$post>) {
      return parseResponse(client.positions.$post(args, options))
    },
  })
}

export function usePostPositions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.positions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.positions.$post>,
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
  const mutationDefaults = getPostPositionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePositionsIDMutationKey() {
  return ['positions', '/positions/:ID', 'DELETE'] as const
}

export function getDeletePositionsIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.positions)[':ID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.positions)[':ID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePositionsIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.positions)[':ID']['$delete']>) {
      return parseResponse(client.positions[':ID'].$delete(args, options))
    },
  })
}

export function useDeletePositionsID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.positions)[':ID']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.positions)[':ID']['$delete']>,
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
  const mutationDefaults = getDeletePositionsIDMutationOptions<TError, TOnMutateResult>(
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

export function getPatchPositionsIDMutationKey() {
  return ['positions', '/positions/:ID', 'PATCH'] as const
}

export function getPatchPositionsIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.positions)[':ID']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.positions)[':ID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPositionsIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.positions)[':ID']['$patch']>) {
      return parseResponse(client.positions[':ID'].$patch(args, options))
    },
  })
}

export function usePatchPositionsID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.positions)[':ID']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.positions)[':ID']['$patch']>,
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
  const mutationDefaults = getPatchPositionsIDMutationOptions<TError, TOnMutateResult>(
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

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
) {
  return ['users', '/users', toValue(args)] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersInvitesMutationKey() {
  return ['users', '/users/invites', 'POST'] as const
}

export function getPostUsersInvitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.invites.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.invites.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersInvitesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.invites.$post>) {
      return parseResponse(client.users.invites.$post(args, options))
    },
  })
}

export function usePostUsersInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.invites.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.invites.$post>,
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
  const mutationDefaults = getPostUsersInvitesMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersMetadataFiltersMutationKey() {
  return ['users', '/users/metadata/filters', 'POST'] as const
}

export function getPostUsersMetadataFiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.metadata.filters.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.users.metadata.filters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMetadataFiltersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.metadata.filters.$post>) {
      return parseResponse(client.users.metadata.filters.$post(args, options))
    },
  })
}

export function usePostUsersMetadataFilters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.metadata.filters.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.metadata.filters.$post>,
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
  const mutationDefaults = getPostUsersMetadataFiltersMutationOptions<TError, TOnMutateResult>(
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

export function getUsersNearbyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.nearby.$get>>,
) {
  return ['users', '/users/nearby', toValue(args)] as const
}

export function getUsersNearbyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.nearby.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersNearbyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.nearby.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersNearby<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.nearby.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.nearby.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.nearby.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.nearby.$get>>>>
          >,
          ReturnType<typeof getUsersNearbyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.nearby.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersNearbyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersNearbyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.nearby.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersSearchesMutationKey() {
  return ['users', '/users/searches', 'POST'] as const
}

export function getPostUsersSearchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.searches.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.searches.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersSearchesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.searches.$post>) {
      return parseResponse(client.users.searches.$post(args, options))
    },
  })
}

export function usePostUsersSearches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.searches.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.searches.$post>,
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
  const mutationDefaults = getPostUsersSearchesMutationOptions<TError, TOnMutateResult>(
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

export function getUsersIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ID']['$get']>>,
) {
  return ['users', '/users/:ID', toValue(args)] as const
}

export function getUsersIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ID'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersIDQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIDGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ID']['groups']['$get']>>,
) {
  return ['users', '/users/:ID/groups', toValue(args)] as const
}

export function getUsersIDGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ID']['groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIDGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ID'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIDGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ID']['groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ID']['groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ID']['groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIDGroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIDGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIDGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ID'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIDGroupsMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ID']['groups']['messages']['$get']>
  >,
) {
  return ['users', '/users/:ID/groups/messages', toValue(args)] as const
}

export function getUsersIDGroupsMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ID']['groups']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIDGroupsMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ID'].groups.messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIDGroupsMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':ID']['groups']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ID']['groups']['messages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ID']['groups']['messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ID']['groups']['messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIDGroupsMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':ID']['groups']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIDGroupsMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIDGroupsMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ID'].groups.messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersIDMessagesMutationKey() {
  return ['users', '/users/:ID/messages', 'POST'] as const
}

export function getPostUsersIDMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['messages']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':ID']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIDMessagesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':ID']['messages']['$post']>) {
      return parseResponse(client.users[':ID'].messages.$post(args, options))
    },
  })
}

export function usePostUsersIDMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ID']['messages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':ID']['messages']['$post']>,
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
  const mutationDefaults = getPostUsersIDMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getUsersIDMetadataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ID']['metadata']['$get']>>,
) {
  return ['users', '/users/:ID/metadata', toValue(args)] as const
}

export function getUsersIDMetadataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ID']['metadata']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIDMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ID'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIDMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ID']['metadata']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIDMetadataQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIDMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIDMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ID'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersIDMetadataMutationKey() {
  return ['users', '/users/:ID/metadata', 'POST'] as const
}

export function getPostUsersIDMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':ID']['metadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIDMetadataMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':ID']['metadata']['$post']>) {
      return parseResponse(client.users[':ID'].metadata.$post(args, options))
    },
  })
}

export function usePostUsersIDMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':ID']['metadata']['$post']>,
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
  const mutationDefaults = getPostUsersIDMetadataMutationOptions<TError, TOnMutateResult>(
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

export function getUsersIDMetadataCollectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ID']['metadata']['collections']['$get']>
  >,
) {
  return ['users', '/users/:ID/metadata/collections', toValue(args)] as const
}

export function getUsersIDMetadataCollectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ID']['metadata']['collections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIDMetadataCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ID'].metadata.collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIDMetadataCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':ID']['metadata']['collections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['collections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['collections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIDMetadataCollectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['collections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIDMetadataCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIDMetadataCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ID'].metadata.collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIDPositionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ID']['positions']['$get']>>,
) {
  return ['users', '/users/:ID/positions', toValue(args)] as const
}

export function getUsersIDPositionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ID']['positions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIDPositionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ID'].positions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIDPositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['positions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ID']['positions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ID']['positions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ID']['positions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIDPositionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['positions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIDPositionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIDPositionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ID'].positions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIDSynergiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ID']['synergies']['$get']>>,
) {
  return ['users', '/users/:ID/synergies', toValue(args)] as const
}

export function getUsersIDSynergiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ID']['synergies']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIDSynergiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':ID'].synergies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIDSynergies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['synergies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':ID']['synergies']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ID']['synergies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ID']['synergies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIDSynergiesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['synergies']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIDSynergiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIDSynergiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':ID'].synergies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchUsersIDSynergiesMutationKey() {
  return ['users', '/users/:ID/synergies', 'PATCH'] as const
}

export function getPatchUsersIDSynergiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':ID']['synergies']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':ID']['synergies']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersIDSynergiesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':ID']['synergies']['$patch']>) {
      return parseResponse(client.users[':ID'].synergies.$patch(args, options))
    },
  })
}

export function usePatchUsersIDSynergies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':ID']['synergies']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':ID']['synergies']['$patch']>,
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
  const mutationDefaults = getPatchUsersIDSynergiesMutationOptions<TError, TOnMutateResult>(
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

export function getUsersTildeQueryKey() {
  return ['users', '/users/~'] as const
}

export function getUsersTildeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersTildeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users['~'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersTilde<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['~']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)['~']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)['~']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersTildeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['~']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersTildeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersTildeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users['~'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchUsersTildeMutationKey() {
  return ['users', '/users/~', 'PATCH'] as const
}

export function getPatchUsersTildeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['~']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.users)['~']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersTildeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)['~']['$patch']>) {
      return parseResponse(client.users['~'].$patch(args, options))
    },
  })
}

export function usePatchUsersTilde<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)['~']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)['~']['$patch']>,
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
  const mutationDefaults = getPatchUsersTildeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebhooksQueryKey() {
  return ['webhooks', '/webhooks'] as const
}

export function getWebhooksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWebhooksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          ReturnType<typeof getWebhooksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWebhooksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhooksMutationKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function getPostWebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.$post>) {
      return parseResponse(client.webhooks.$post(args, options))
    },
  })
}

export function usePostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.webhooks.$post>,
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
  const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteWebhooksIDMutationKey() {
  return ['webhooks', '/webhooks/:ID', 'DELETE'] as const
}

export function getDeleteWebhooksIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':ID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':ID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':ID']['$delete']>) {
      return parseResponse(client.webhooks[':ID'].$delete(args, options))
    },
  })
}

export function useDeleteWebhooksID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':ID']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':ID']['$delete']>,
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
  const mutationDefaults = getDeleteWebhooksIDMutationOptions<TError, TOnMutateResult>(
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
