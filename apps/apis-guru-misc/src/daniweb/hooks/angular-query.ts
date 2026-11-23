import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getAppsQueryKey(args: InferRequestType<typeof client.apps.$get>) {
  return ['apps', '/apps', args] as const
}

export function getAppsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.apps.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppsQueryKey>
  >({
    queryKey: getAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apps.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAppsIDQueryKey(args: InferRequestType<(typeof client.apps)[':ID']['$get']>) {
  return ['apps', '/apps/:ID', args] as const
}

export function getAppsIDQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':ID']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.apps)[':ID']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':ID']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppsIDQueryKey>
  >({
    queryKey: getAppsIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':ID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAppsID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':ID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.apps)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':ID']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAppsIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppsIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAudiencesQueryKey(args: InferRequestType<typeof client.audiences.$get>) {
  return ['audiences', '/audiences', args] as const
}

export function getAudiencesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.audiences.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAudiencesQueryKey>
  >({
    queryKey: getAudiencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audiences.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAudiences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.audiences.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAudiencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAudiencesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAudiencesIDQueryKey(
  args: InferRequestType<(typeof client.audiences)[':ID']['$get']>,
) {
  return ['audiences', '/audiences/:ID', args] as const
}

export function getAudiencesIDQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':ID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audiences)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudiencesIDQueryKey>
  >({
    queryKey: getAudiencesIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audiences[':ID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAudiencesID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':ID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.audiences)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':ID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAudiencesIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAudiencesIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAudiencesIDMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAudiencesIDMembershipsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAutocompletesQueryKey(args: InferRequestType<typeof client.autocompletes.$get>) {
  return ['autocompletes', '/autocompletes', args] as const
}

export function getAutocompletesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.autocompletes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.autocompletes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.autocompletes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAutocompletesQueryKey>
  >({
    queryKey: getAutocompletesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.autocompletes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAutocompletes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.autocompletes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.autocompletes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.autocompletes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAutocompletesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAutocompletesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostConversationsSchedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.schedules.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.conversations.schedules.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsSchedulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostConversationsSearches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.searches.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.conversations.searches.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsSearchesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConversationsStatusesQueryKey(
  args: InferRequestType<typeof client.conversations.statuses.$get>,
) {
  return ['conversations', '/conversations/statuses', args] as const
}

export function getConversationsStatusesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.statuses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversations.statuses.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.statuses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsStatusesQueryKey>
  >({
    queryKey: getConversationsStatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations.statuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConversationsStatuses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversations.statuses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.conversations.statuses.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversations.statuses.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsStatusesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConversationsStatusesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getConversationsIDQueryKey(
  args: InferRequestType<(typeof client.conversations)[':ID']['$get']>,
) {
  return ['conversations', '/conversations/:ID', args] as const
}

export function getConversationsIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.conversations)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.conversations)[':ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsIDQueryKey>
  >({
    queryKey: getConversationsIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations[':ID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConversationsID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.conversations)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.conversations)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.conversations)[':ID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConversationsIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getConversationsIDMessagesQueryKey(
  args: InferRequestType<(typeof client.conversations)[':ID']['messages']['$get']>,
) {
  return ['conversations', '/conversations/:ID/messages', args] as const
}

export function getConversationsIDMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':ID']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':ID']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConversationsIDMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations[':ID'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConversationsIDMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':ID']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.conversations)[':ID']['messages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConversationsIDMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostConversationsIDMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsIDMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostConversationsIDSchedules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsIDSchedulesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostConversationsIDSearches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsIDSearchesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConversationsIDStatusesQueryKey(
  args: InferRequestType<(typeof client.conversations)[':ID']['statuses']['$get']>,
) {
  return ['conversations', '/conversations/:ID/statuses', args] as const
}

export function getConversationsIDStatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':ID']['statuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversations)[':ID']['statuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConversationsIDStatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversations[':ID'].statuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConversationsIDStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations)[':ID']['statuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.conversations)[':ID']['statuses']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConversationsIDStatusesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchConversationsIDStatuses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchConversationsIDStatusesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGroupsQueryKey(args: InferRequestType<typeof client.groups.$get>) {
  return ['groups', '/groups', args] as const
}

export function getGroupsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >({
    queryKey: getGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.groups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
        TError,
        InferRequestType<typeof client.groups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostGroupsMessagesMetadataFilters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsMessagesMetadataFiltersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGroupsMessagesIDQueryKey(
  args: InferRequestType<(typeof client.groups.messages)[':ID']['$get']>,
) {
  return ['groups', '/groups/messages/:ID', args] as const
}

export function getGroupsMessagesIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups.messages)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups.messages)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups.messages)[':ID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsMessagesIDQueryKey>
  >({
    queryKey: getGroupsMessagesIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.messages[':ID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGroupsMessagesID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups.messages)[':ID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups.messages)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups.messages)[':ID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsMessagesIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupsMessagesIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteGroupsMessagesID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGroupsMessagesIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGroupsMessagesIDMetadataQueryKey(
  args: InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['$get']>,
) {
  return ['groups', '/groups/messages/:ID/metadata', args] as const
}

export function getGroupsMessagesIDMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups.messages)[':ID']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGroupsMessagesIDMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.messages[':ID'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGroupsMessagesIDMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups.messages)[':ID']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGroupsMessagesIDMetadataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostGroupsMessagesIDMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsMessagesIDMetadataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGroupsMessagesIDMetadataCollectionsQueryKey(
  args: InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['collections']['$get']>,
) {
  return ['groups', '/groups/messages/:ID/metadata/collections', args] as const
}

export function getGroupsMessagesIDMetadataCollectionsQueryOptions<
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
  args: InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGroupsMessagesIDMetadataCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.messages[':ID'].metadata.collections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGroupsMessagesIDMetadataCollections<
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
  args: () => InferRequestType<
    (typeof client.groups.messages)[':ID']['metadata']['collections']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getGroupsMessagesIDMetadataCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGroupsMessagesIDMetadataCollectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostGroupsSchedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.groups.schedules.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.groups.schedules.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsSchedulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGroupsStatusesQueryKey(
  args: InferRequestType<typeof client.groups.statuses.$get>,
) {
  return ['groups', '/groups/statuses', args] as const
}

export function getGroupsStatusesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.statuses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.groups.statuses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.statuses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsStatusesQueryKey>
  >({
    queryKey: getGroupsStatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.statuses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGroupsStatuses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.statuses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.groups.statuses.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.statuses.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsStatusesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupsStatusesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGroupsIDQueryKey(args: InferRequestType<(typeof client.groups)[':ID']['$get']>) {
  return ['groups', '/groups/:ID', args] as const
}

export function getGroupsIDQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.groups)[':ID']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIDQueryKey>
  >({
    queryKey: getGroupsIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':ID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGroupsID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupsIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPatchGroupsID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.groups)[':ID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchGroupsIDMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGroupsIDMembershipsQueryKey(
  args: InferRequestType<(typeof client.groups)[':ID']['memberships']['$get']>,
) {
  return ['groups', '/groups/:ID/memberships', args] as const
}

export function getGroupsIDMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':ID']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':ID']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGroupsIDMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':ID'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGroupsIDMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':ID']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups)[':ID']['memberships']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupsIDMembershipsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostGroupsIDMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsIDMembershipsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteGroupsIDMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGroupsIDMembershipsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchGroupsIDMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchGroupsIDMembershipsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGroupsIDMessagesQueryKey(
  args: InferRequestType<(typeof client.groups)[':ID']['messages']['$get']>,
) {
  return ['groups', '/groups/:ID/messages', args] as const
}

export function getGroupsIDMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['messages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':ID']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['messages']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIDMessagesQueryKey>
  >({
    queryKey: getGroupsIDMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':ID'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGroupsIDMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['messages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups)[':ID']['messages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':ID']['messages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIDMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupsIDMessagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostGroupsIDMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsIDMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostGroupsIDSchedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsIDSchedulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGroupsIDStatusesQueryKey(
  args: InferRequestType<(typeof client.groups)[':ID']['statuses']['$get']>,
) {
  return ['groups', '/groups/:ID/statuses', args] as const
}

export function getGroupsIDStatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['statuses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':ID']['statuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['statuses']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIDStatusesQueryKey>
  >({
    queryKey: getGroupsIDStatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':ID'].statuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGroupsIDStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['statuses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups)[':ID']['statuses']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':ID']['statuses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIDStatusesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupsIDStatusesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getIndustriesQueryKey() {
  return ['industries', '/industries'] as const
}

export function getIndustriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.industries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.industries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIndustriesQueryKey>
  >({
    queryKey: getIndustriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.industries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIndustries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.industries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.industries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIndustriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIndustriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostMarkdown<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markdown.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.markdown.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarkdownMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMarkdownEmoticonsQueryKey() {
  return ['markdown', '/markdown/emoticons'] as const
}

export function getMarkdownEmoticonsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markdown.emoticons.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markdown.emoticons.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMarkdownEmoticonsQueryKey>
  >({
    queryKey: getMarkdownEmoticonsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.markdown.emoticons.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMarkdownEmoticons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markdown.emoticons.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.markdown.emoticons.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMarkdownEmoticonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMarkdownEmoticonsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostMessagesMetadataFilters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messages.metadata.filters.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.messages.metadata.filters.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagesMetadataFiltersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMessagesIDQueryKey(
  args: InferRequestType<(typeof client.messages)[':ID']['$get']>,
) {
  return ['messages', '/messages/:ID', args] as const
}

export function getMessagesIDQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':ID']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.messages)[':ID']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':ID']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesIDQueryKey>
  >({
    queryKey: getMessagesIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messages[':ID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMessagesID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':ID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messages)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':ID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagesIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMessagesIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMessagesIDMetadataQueryKey(
  args: InferRequestType<(typeof client.messages)[':ID']['metadata']['$get']>,
) {
  return ['messages', '/messages/:ID/metadata', args] as const
}

export function getMessagesIDMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messages)[':ID']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMessagesIDMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messages[':ID'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMessagesIDMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messages)[':ID']['metadata']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMessagesIDMetadataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostMessagesIDMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagesIDMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMessagesIDMetadataCollectionsQueryKey(
  args: InferRequestType<(typeof client.messages)[':ID']['metadata']['collections']['$get']>,
) {
  return ['messages', '/messages/:ID/metadata/collections', args] as const
}

export function getMessagesIDMetadataCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messages)[':ID']['metadata']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMessagesIDMetadataCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messages[':ID'].metadata.collections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMessagesIDMetadataCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messages)[':ID']['metadata']['collections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getMessagesIDMetadataCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMessagesIDMetadataCollectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostPositions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.positions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.positions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPositionsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeletePositionsID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.positions)[':ID']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.positions)[':ID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePositionsIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchPositionsID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.positions)[':ID']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.positions)[':ID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPositionsIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersQueryKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostUsersInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.invites.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.users.invites.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersInvitesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUsersMetadataFilters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.users.metadata.filters.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.users.metadata.filters.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMetadataFiltersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersNearbyQueryKey(args: InferRequestType<typeof client.users.nearby.$get>) {
  return ['users', '/users/nearby', args] as const
}

export function getUsersNearbyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.nearby.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.nearby.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.nearby.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersNearbyQueryKey>
  >({
    queryKey: getUsersNearbyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.nearby.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersNearby<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.nearby.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.nearby.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.nearby.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersNearbyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersNearbyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostUsersSearches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.searches.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.users.searches.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersSearchesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIDQueryKey(args: InferRequestType<(typeof client.users)[':ID']['$get']>) {
  return ['users', '/users/:ID', args] as const
}

export function getUsersIDQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.users)[':ID']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIDQueryKey>
  >({
    queryKey: getUsersIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersIDGroupsQueryKey(
  args: InferRequestType<(typeof client.users)[':ID']['groups']['$get']>,
) {
  return ['users', '/users/:ID/groups', args] as const
}

export function getUsersIDGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ID']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIDGroupsQueryKey>
  >({
    queryKey: getUsersIDGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ID'].groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersIDGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ID']['groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':ID']['groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIDGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIDGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersIDGroupsMessagesQueryKey(
  args: InferRequestType<(typeof client.users)[':ID']['groups']['messages']['$get']>,
) {
  return ['users', '/users/:ID/groups/messages', args] as const
}

export function getUsersIDGroupsMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':ID']['groups']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ID']['groups']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersIDGroupsMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ID'].groups.messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIDGroupsMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':ID']['groups']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ID']['groups']['messages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIDGroupsMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostUsersIDMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersIDMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIDMetadataQueryKey(
  args: InferRequestType<(typeof client.users)[':ID']['metadata']['$get']>,
) {
  return ['users', '/users/:ID/metadata', args] as const
}

export function getUsersIDMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ID']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIDMetadataQueryKey>
  >({
    queryKey: getUsersIDMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ID'].metadata.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersIDMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ID']['metadata']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIDMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIDMetadataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostUsersIDMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersIDMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIDMetadataCollectionsQueryKey(
  args: InferRequestType<(typeof client.users)[':ID']['metadata']['collections']['$get']>,
) {
  return ['users', '/users/:ID/metadata/collections', args] as const
}

export function getUsersIDMetadataCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ID']['metadata']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersIDMetadataCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ID'].metadata.collections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIDMetadataCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ID']['metadata']['collections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIDMetadataCollectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersIDPositionsQueryKey(
  args: InferRequestType<(typeof client.users)[':ID']['positions']['$get']>,
) {
  return ['users', '/users/:ID/positions', args] as const
}

export function getUsersIDPositionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['positions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ID']['positions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['positions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIDPositionsQueryKey>
  >({
    queryKey: getUsersIDPositionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ID'].positions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIDPositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['positions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ID']['positions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':ID']['positions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIDPositionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIDPositionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersIDSynergiesQueryKey(
  args: InferRequestType<(typeof client.users)[':ID']['synergies']['$get']>,
) {
  return ['users', '/users/:ID/synergies', args] as const
}

export function getUsersIDSynergiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['synergies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':ID']['synergies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['synergies']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIDSynergiesQueryKey>
  >({
    queryKey: getUsersIDSynergiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':ID'].synergies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIDSynergies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['synergies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':ID']['synergies']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':ID']['synergies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIDSynergiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIDSynergiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPatchUsersIDSynergies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersIDSynergiesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersTildeQueryKey() {
  return ['users', '/users/~'] as const
}

export function getUsersTildeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['~']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['~']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersTildeQueryKey>
  >({
    queryKey: getUsersTildeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users['~'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersTilde<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['~']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['~']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersTildeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersTildeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPatchUsersTilde<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)['~']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)['~']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersTildeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebhooksQueryKey() {
  return ['webhooks', '/webhooks'] as const
}

export function getWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >({
    queryKey: getWebhooksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteWebhooksID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':ID']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':ID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWebhooksIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
